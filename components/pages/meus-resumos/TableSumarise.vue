<script setup>
const getTableSumariseData = [
  {
    id: 1,
    name: "Geografia aula 1",
    group: "Geografia Unifesp",
    category: "Geografia",
    grade: "Fundamental",
  },
  {
    id: 2,
    name: "Geografia aula 2",
    group: "Geografia Unifesp",
    category: "Geografia",
    grade: "Fundamental",
  },
  {
    id: 3,
    name: "Geografia aula 3",
    group: "Geografia Unifesp",
    category: "Geografia",
    grade: "Fundamental",
  },
];

function downloadFile(id) {
  console.log("download", id);
}

function viewFile(id) {
  console.log("view", id);
}

function deleteFile(id) {
  console.log("delete", id);
}
</script>

<template>
  <div class="table-sumarise">
    <div class="table-sumarise__header">
      <div class="table-sumarise__header__item">
        <p>Nome</p>
      </div>
      <div class="table-sumarise__header__item">
        <p>Grupo</p>
      </div>
      <div class="table-sumarise__header__item">
        <p>Categoria</p>
      </div>
      <div class="table-sumarise__header__item">
        <p>Grade</p>
      </div>
      <div class="table-sumarise__header__item">
        <p>Ações</p>
      </div>
    </div>
    <div
    :key="sumariseItem.id"
      class="table-sumarise__body"
      v-for="sumariseItem in getTableSumariseData"
    >
      <div class="table-sumarise__body__item">
        <p>{{ sumariseItem.name }}</p>
      </div>
      <div class="table-sumarise__body__item">
        <p>{{ sumariseItem.group }}</p>
      </div>
      <div class="table-sumarise__body__item">
        <p>{{ sumariseItem.category }}</p>
      </div>
      <div class="table-sumarise__body__item">
        <p>{{ sumariseItem.grade }}</p>
      </div>
      <div class="table-sumarise__body__item">
        <button @click="downloadFile(sumariseItem.id)">Download</button>
        <button @click="viewFile(sumariseItem.id)">Visualizar</button>
        <button @click="deleteFile(sumariseItem.id)">Excluir</button>
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
</style>
