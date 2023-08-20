<script setup>
import { ref } from "vue";
const formUpload = ref({
  name: "",
  file: "",
  link: "",
  description: "",
  category: null,
  grade: "",
});

const isShowUploadButton = ref(true);

function setShowUploadButton(value) {
  isShowUploadButton.value = value;
}

const subjects = {
  mathematics: "Matemática",
  science: "Ciências",
  socialStudies: "Estudos Sociais",
  englishLanguage: "Língua Inglesa",
  foreignLanguages: "Línguas Estrangeiras",
  physicalEducation: "Educação Física",
  arts: "Artes",
  technology: "Tecnologia",
  civicEducation: "Educação Cívica",
  environmentalStudies: "Estudos Ambientais",
  lifeSkills: "Habilidades de Vida",
  psychology: "Psicologia",
};

const grades = {
  kindergarten: "Pré-escola",
  grade1: "1º Ano",
  grade2: "2º Ano",
  grade3: "3º Ano",
  grade4: "4º Ano",
  grade5: "5º Ano",
  grade6: "6º Ano",
  grade7: "7º Ano",
  grade8: "8º Ano",
  grade9: "9º Ano",
  grade10: "1º Ano médio",
  grade11: "2º Ano médio",
  grade12: "3º Ano médio",
};
</script>

<template>
  <div class="form-upload">
    <div class="form-group">
      <label for="name">Nome do resumo</label><br />
      <input
        id="name"
        class="form-control-text"
        v-model="formUpload.name"
        placeholder="Nome do resumo"
      />
    </div>

    <div class="form-group">
      <label for="description">Coloque a descrição do resumo</label><br />
      <input
        id="description"
        class="form-control-text"
        v-model="formUpload.description"
        placeholder="youtube.com/..."
      />
    </div>
    <div class="form-group">
      <label for="category">Coloque a categoria</label><br />
      <select
        class="form-control-select"
        id="category"
        v-model="formUpload.category"
      >
        <option :value="index" v-for="(subject, index) in subjects">
          {{ subject }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="grades">Coloque a serie</label><br />
      <select
        class="form-control-select"
        id="grades"
        v-model="formUpload.grades"
      >
        <option :value="index" v-for="(grade, index) in grades">
          {{ grade }}
        </option>
      </select>
    </div>

    <div class="form-choose">
      <div class="form-choose__button" @click="setShowUploadButton(true)">
        Upload
      </div>
      <div class="form-choose__button" @click="setShowUploadButton(false)">
        Link
      </div>
    </div>

    <div class="form-group" v-if="isShowUploadButton">
      <label for="file">Faça upload do arquivo</label><br />
      <input id="file" type="file" />
    </div>
    <div class="form-group" v-else>
      <label for="link">Coloque o link do video</label><br />
      <input
        id="link"
        class="form-control-text"
        v-model="formUpload.link"
        placeholder="youtube.com/..."
      />
    </div>
    <div class="form-group">
      <button class="btn btn-primary form-upload__button">Enviar</button>
    </div>
  </div>
</template>
<style lang="scss">
.form-upload {
  padding: 18px;
  width: 600px;
  height: auto;
  background-color: var(--color-white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__button {
    width: 100%;
  }
}

.form-control-text,
.form-control-select {
  color: #5d5d5b;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  width: 100%;
  padding: 10px;
}

.form-group {
  width: 100%;
}

.btn {
  padding: 10px;
  border-radius: 8px;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  text-align: center;
  border: none;
  cursor: pointer;
}

.form-choose {
  display: flex;
  gap: 16px;

  &__button {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
  }
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}
</style>
