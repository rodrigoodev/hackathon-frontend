<script setup>
import FormUploadFile from "./FormUploadFIle.vue";
</script>
<template>
  <div class="wrapper-modal-upload-file" @click.prevent="$emit('clicked')">
    <div @click.stop="" class="box">
      <FormUploadFile />
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
