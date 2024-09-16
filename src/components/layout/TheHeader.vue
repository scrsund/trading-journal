<template>
  <header>
    <!-- <router-link>Entry</router-link>
    <router-link>Strategy</router-link>
    <router-link>Reminders</router-link>
    <router-link>History</router-link> -->
    <button @click="openSidebar">Reminders</button>
    <RemindersSidebar />
  </header>
</template>

<script>
import { mapActions } from "vuex";
import RemindersSidebar from "../RemindersSidebar.vue";

export default {
  components: {
    RemindersSidebar,
  },
  methods: {
    ...mapActions(["openSidebar"]),
  },
};
</script>

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
  margin-top: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  color: whitesmoke;
  cursor: pointer;
}

router-link:hover {
  color: grey;
  transition: 0.2s;
}

button {
  margin-top: 1rem;
  margin-left: auto;
  margin-right: 2rem;
  border: none;
  background-color: transparent;
  color: whitesmoke;
  cursor: pointer;
  font-size: 1rem;
}
</style>
