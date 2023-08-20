<script setup>
import Sidebar from "@/components/layouts/sidebar.vue";
import { useAuthStore } from "@/store/useAuthStore";

const authStore = useAuthStore();

const token =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("token"))
    : null;

if (token) {
  authStore.updateToken(token);
} else {
  useRouter().push("/");
}
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
