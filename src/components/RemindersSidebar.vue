REMINDER PAGE (log things to remember while you trade) add reminders dropdown
menu showing reminders, window that comes from the side

<template>
  <transition name="slide">
    <div v-if="isVisible" class="sidebar">
      <button @click="closeSidebar" class="exit">Close</button>
      <h2>Reminders</h2>
      <ul>
        <li>Take a break after profit or loss</li>
      </ul>
      <button @click="addReminder" class="reminder">Add a reminder</button>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    isVisible() {
      return this.$store.state.isSidebarVisible;
    },
  },
  methods: {
    closeSidebar() {
      this.$store.commit("toggleSidebar", false);
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background-color: #f4f4f4;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  overflow-y: auto;
}

/*buttons*/

.exit {
  cursor: pointer;
  position: fixed;
  right: 0;
  margin-right: 1rem;
  border-radius: 0.5rem;
  border: none;
}

.reminder {
  cursor: pointer;
  border-radius: 0.5rem;
}

/*animations*/

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
