<script setup></script>

<template>
  <div class="sidebar">
    <div class="sidebar__logo">sumarise</div>
    <div class="sidebar__menu">
      <ul>
        <li>
          <nuxt-link href="/dashboard">Dashboard</nuxt-link>
        </li>
        <li>
          <nuxt-link href="/meus-resumos">Meus Resumos</nuxt-link>
        </li>
        <li>
          <nuxt-link href="/logout">Sair</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --color-white: #fff;
}

.sidebar {
  background-color: var(--color-white);
  width: 300px;
  border-radius: 0px 12px 12px 0px;
}

.sidebar__menu {
  padding: 20px;

  ul {
    list-style: none;

    li {
      margin-bottom: 10px;

      a {
        text-decoration: none;
        color: #000;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
}
</style>
