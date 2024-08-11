REMINDER PAGE (log things to remember while you trade) add reminders dropdown
menu showing reminders, window that comes from the side

<template>
  <transition name="slide">
    <div v-if="isVisible" class="sidebar">
      <button @click="closeSidebar" class="close-button">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
      <h2>Reminders</h2>
      <ul>
        <li v-for="reminder in reminders" :key="reminder">{{ reminder }}</li>
      </ul>
      <div class="add-reminder-container">
        <input
          v-model="newReminder"
          placeholder="New Reminder"
          class="reminder-input"
        />
        <button @click="addReminder" class="reminder-button">Add</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      newReminder: "",
    };
  },
  computed: {
    isVisible() {
      return this.$store.state.isSidebarVisible;
    },
    ...mapState(["reminders"]),
  },
  methods: {
    closeSidebar() {
      this.$store.commit("toggleSidebar", false);
    },
    addReminder() {
      if (this.newReminder.trim()) {
        this.$store.dispatch("addItem", {
          type: "reminders",
          item: this.newReminder.trim(),
        });
        this.newReminder = "";
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 2.5rem;
}
.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  height: 100%;
  background-color: #f4f4f4;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  overflow-y: auto;
}

.add-reminder-container {
  margin-top: 20px;
}

.reminder-input {
  width: 80%;
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

/*buttons*/

button {
  margin-top: 0.5rem;
}

.close-button {
  cursor: pointer;
  position: fixed;
  right: 0;
  margin-right: 1.6rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.3rem;
  color: #b3b3b3;
}

.reminder-button {
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.4rem;
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
