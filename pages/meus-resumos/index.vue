<script setup>
import { ref } from "vue";
import ModalUploadFile from "@/components/pages/meus-resumos/ModalUploadFile.vue";
import TableSumarise from "@/components/pages/meus-resumos/TableSumarise.vue";
definePageMeta({
  layout: "custom",
});

const showDialog = ref(false);

function toggleDialog() {
  showDialog.value = !showDialog.value;
}
</script>

<template>
  <div class="sumarise">
    <div class="sumarise-new" @click.prevent="toggleDialog">
      <div class="sumarise-new__content">
        <h1>Gerar resumo</h1>
        <h2>
          Nossa que legal, clique nesse botão e vamos subir seu primeiro resumo
        </h2>
      </div>
      <div class="sumarise-new__button">
        <div>
          <font-awesome-icon
            class="siderbar-icon"
            :icon="['fa-solid', 'fa-plus']"
          />
        </div>
      </div>
    </div>

    <div class="sumarise-table">
      <h1>Todos resumos</h1>
      <h2>Encontre aqui todos os resumos gerados por você</h2>
      <TableSumarise />
    </div>
    <transition name="fade">
      <ModalUploadFile v-if="showDialog" @clicked="toggleDialog" />
    </transition>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sumarise {
  padding: 20px 50px;
  width: calc(100% - 300px);
}

.sumarise-new {
  display: flex;
  background: var(--color-white);
  width: 100%;
  border-radius: 8px;
  padding: 18px 32px;
  justify-content: space-between;
  cursor: pointer;

  &__button {
    background: var(--color-primary);
    border-radius: 50%;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
  }
}

.sumarise-table {
  display: flex;
  background: var(--color-white);
  width: 100%;
  border-radius: 8px;
  padding: 18px 32px;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 32px;
}
</style>
