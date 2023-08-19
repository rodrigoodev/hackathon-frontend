<script setup>
import Sidebar from "@/components/layouts/sidebar.vue";
</script>
<template>
  <div class="auth-wrapper">
    <sidebar />
    <slot />
  </div>
</template>

<style>
:root {
  --background-color: #ecf0f1;
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.auth-wrapper {
  display: flex;
  background-color: var(--background-color);
  height: 100vh;
}
</style>
