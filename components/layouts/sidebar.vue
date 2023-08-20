<script setup></script>

<template>
  <div class="sidebar">
    <div class="sidebar__logo">Sumarise</div>
    <div class="sidebar__menu-wrapper">
      <ul class="sidebar-menu-list">
        <nuxt-link to="/meus-resumos">
          <li class="sidebar-menu-list__item">
            <div>
              <font-awesome-icon
                class="siderbar-icon"
                :icon="['fa-solid', 'fa-file-lines']"
              />
            </div>
            Meus Resumos
          </li>
        </nuxt-link>
        <nuxt-link to="/logout">
          <li class="sidebar-menu-list__item">
            <div>
              <font-awesome-icon
                class="siderbar-icon"
                :icon="['fa-solid', 'fa-right-from-bracket']"
              />
            </div>
            Sair
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.sidebar {
  background-color: var(--color-white);
  width: 300px;
  border-radius: 0px 12px 12px 0px;

  &__logo {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__menu-wrapper {
    padding: 20px;
  }
}

.sidebar-menu-list {
  list-style: none;
  padding: 0px;
  margin: 60px 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__item {
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 20px;
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
      background: var(--color-primary);
      color: white;
    }

    .siderbar-icon {
    }
  }

  .router-link-active {
    background: var(--color-primary);
    color: white;
    border-radius: 8px;
  }
}
</style>
