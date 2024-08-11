<template>
  <header>
    <router-link>Entry</router-link>
    <router-link>Strategy</router-link>
    <router-link>Reminders</router-link>
    <router-link>History</router-link>
  </header>
</template>

<script></script>

<style scoped>
header {
  width: 100%;
  padding-bottom: 1rem;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

router-link {
  padding-top: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  color: whitesmoke;
  cursor: pointer;
}

router-link:hover {
  color: grey;
  transition: 0.2s;
}
</style>
