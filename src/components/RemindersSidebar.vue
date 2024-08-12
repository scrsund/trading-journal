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
        <li v-for="reminder in reminders" :key="reminder">
          {{ reminder }}
          <button @click="deleteReminder(reminder)" class="delete-button">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </li>
      </ul>
      <div class="add-reminder-container" v-if="isInputVisible">
        <input
          v-model="newReminder"
          placeholder="New Reminder"
          class="reminder-input"
        />
        <button @click="addReminder" class="add-button confirm-button">
          Add
        </button>
        <button @click="cancelInput" class="cancel-button">Cancel</button>
      </div>
      <div class="toggle-input-container">
        <button @click="toggleInputIsVisible" class="toggle-input-button">
          <i class="fa-solid fa-plus"></i>New Reminder
        </button>
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
      isInputVisible: false,
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
    toggleInputIsVisible() {
      return (this.isInputVisible = true);
    },
    cancelInput() {
      this.newReminder = "";
      return (this.isInputVisible = false);
    },
    addReminder() {
      if (this.newReminder.trim()) {
        this.$store.dispatch("addItem", {
          type: "reminders",
          item: this.newReminder.trim(),
        });
        this.newReminder = "";
        this.isInputVisible = false;
      }
    },
    deleteReminder(reminder) {
      this.$store.dispatch("removeItem", {
        type: "reminders",
        item: reminder,
      });
    },
  },
};
</script>

<style scoped>
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

h2 {
  margin-top: 2.5rem;
}

li {
  padding: 0.3rem;
}

.add-reminder-container {
  margin-top: 20px;
}

.toggle-input-container {
  position: fixed;
  bottom: 0;
  margin-bottom: 3rem;
  margin-left: 0.5rem;
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

.close-button {
  margin-top: 0.5rem;
  cursor: pointer;
  position: fixed;
  right: 0;
  margin-right: 1.6rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.3rem;
  color: #b3b3b3;
}

.delete-button {
  position: fixed;
  right: 0;
  border: none;
  margin-right: 3rem;
  font-size: 0.7rem;
  color: #646464;
  cursor: pointer;
}

.add-button {
  margin-top: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.4rem;
  border-color: #b3b3b3;
  border: 1px solid #b3b3b3;
  background-color: transparent;
}

.confirm-button {
  margin-top: 0.5rem;
  background-color: #4caf50;
  color: white;
  border-color: #4caf50;
}

.cancel-button {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.4rem;
  border-color: #b3b3b3;
  border: 1px solid #b3b3b3;
  color: #646464;
  background-color: transparent;
}

.toggle-input-button {
  margin-top: 2rem;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.4rem;
  border-color: #b3b3b3;
  border: 1px solid #b3b3b3;
  color: #646464;
  background-color: transparent;
}

.fa-plus {
  margin-right: 0.3rem;
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
