<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HomeTodo from './components/Todo/HomeTodo.vue';
</script>

<template>
  <header>
    <img src="@/assets/logo.svg" alt="Logo Vue" height="60" width="60">
      <nav>
        <RouterLink to="/" component="HomeTodo" >
          <div class="btn-main"> Home Todo  </div>
        </RouterLink>

        <RouterLink to="/create">
          <div class="btn-action"> Create Todo  </div>
        </RouterLink>
      </nav>
    </header>
    <RouterView/>
</template>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 2rem;
  align-items: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}
nav{
  display: flex;
  column-gap: 1rem;
}
main {
  width: 50%;
  background-color: antiquewhite;
}
</style>
