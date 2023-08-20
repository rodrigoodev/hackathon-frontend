<script setup>
import FormUploadFile from "./FormUploadFIle.vue";

import { useAuthStore } from "@/store/useAuthStore";
import { useToast } from "vue-toastification";

const toast = useToast();

function handleSendForm(formUpload) {
  console.log("send form", formUpload);
  submitForm(formUpload);
}

const authStore = useAuthStore();

async function submitForm(form) {
  try {
    const data = await $fetch("http://45.79.148.159/summaries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authStore.token}`,
      },
      body: JSON.stringify(form),
    });
    toast.success("Resumo enviado com sucesso!");
    console.log(data);
  } catch (err) {
    console.log(err);
    toast.error("Erro ao enviar resumo");
  }
}
</script>
<template>
  <div class="wrapper-modal-upload-file" @click.prevent="$emit('clicked')">
    <div @click.stop="" class="box">
      <FormUploadFile @sendForm="handleSendForm" />
    </div>
  </div>
</template>

<style lang="scss">
.wrapper-modal-upload-file {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(black, 0.8);
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: rem(40 70 30);
  border-radius: 4px;
  background-color: white;
  transform: translate3d(-50%, -50%, 0);
}
</style>
