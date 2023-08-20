<script setup>
import { useAuthStore } from "@/store/useAuthStore";

const authStore = useAuthStore();

async function getGroups() {
  try {
    const data = await $fetch("http://45.79.148.159/groups", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authStore.token}`,
      },
    });
    console.log("dentro do getGroups", data[0].id);

    const serializedValue = JSON.stringify(data[0].id);
    localStorage.setItem("group_id", serializedValue);

    const summaries = await getSummariesByGroup();
  } catch (err) {
    console.log(err);
  }
}

const groups = await getGroups();

async function getSummariesByGroup() {
  try {
    const group_id =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("group_id"))
        : null;

    const data = await $fetch(
      `http://45.79.148.159/summaries/group/${group_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authStore.token}`,
        },
      }
    );
    console.log("dentro do getSumarise", data);

    const serializedValue = JSON.stringify(data);
    localStorage.setItem("listSumarise", serializedValue);
  } catch (err) {
    console.log(err);
  }
}

function downloadFile(filePath) {
  window.open(filePath, "_new");
}

const getSummariseData = computed(() => {
  const listSumarise =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("listSumarise"))
      : [];

  return listSumarise;
});

const convertStatus = {
  done: "Concluído",
  processing: "Em Processamento",
};
</script>

<template>
  <div class="table-sumarise">
    <div class="table-sumarise__header">
      <div class="table-sumarise__header__item">
        <p>Nome</p>
      </div>
      <div class="table-sumarise__header__item">
        <p>Descrição</p>
      </div>
      <div class="table-sumarise__header__item">
        <p>Status</p>
      </div>
      <div class="table-sumarise__header__item">
        <p>Ações</p>
      </div>
    </div>
    <div
      :key="sumariseItem.id"
      class="table-sumarise__body"
      v-for="sumariseItem in getSummariseData"
    >
      <div class="table-sumarise__body__item">
        <p>{{ sumariseItem.title }}</p>
      </div>
      <div class="table-sumarise__body__item">
        <p>{{ sumariseItem.description }}</p>
      </div>
      <div class="table-sumarise__body__item">
        <p>{{ convertStatus[sumariseItem.status] }}</p>
      </div>
      <div class="table-sumarise__body__item">
        <div
          @click="downloadFile(sumariseItem.filePath)"
          v-if="sumariseItem.status == 'done'"
          class="button-download"
        >
          <font-awesome-icon :icon="['fa-solid', 'fa-file-arrow-down']" />
          Download
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.table-sumarise {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;

  &__header {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color: #f5f5f5;

    &__item {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  &__body {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    transition: 0.2s;
    &:hover {
      background-color: #f5f5f5;
    }

    &__item {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}

.button-download {
  cursor: pointer;
}
</style>
