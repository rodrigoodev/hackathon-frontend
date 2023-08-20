<script setup>
const token =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("token"))
    : null;

if (token) {
  useRouter().push("/meus-resumos");
}
</script>
<template>
  <div>
    <slot />
  </div>
</template>
