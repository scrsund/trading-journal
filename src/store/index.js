//addItem() function - for adding reminders, entries, strategies, etc

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isSidebarVisible: false,
      strategies: [
        {
          name: "strategy1",
          timeframe: "4H",
          checklist: [
            "4hr Trend (uptrend or downtrend",
            "using limit order",
            "candle close confirmation",
            "support and resistance lines",
            "time of day",
            "number of trades made",
          ],
        },
      ],
      entries: [
        {
          strategy: [],
          date: "",
          time: "",
          buySell: "",
          signal: "",
          TP: "",
          comments: "",
        },
      ],
      reminders: ["Take a break after profit or loss", "Trade entry matters -- don't just enter wherever"],
    };
  },
  mutations: {
    toggleSidebar(state, payload) {
      state.isSidebarVisible = payload;
    },
    addItem(state, { type, item }) {
      if (type === "strategies") {
        state.strategies.push(item);
      } else if (type === "entries") {
        state.entries.push(item);
      } else if (type === "reminders") {
        state.reminders.push(item);
      } else {
        console.error(`Unknown type: ${type}`);
      }
    },
    removeItem(state, { type, item }) {
      if (type === "strategies") {
        state.strategies = state.strategies.filter(
          (strategy) => strategy !== item
        );
      } else if (type === "entries") {
        state.entries = state.entries.filter((entry) => entry !== item);
      } else if (type === "reminders") {
        state.reminders = state.reminders.filter(
          (reminder) => reminder !== item
        );
      } else {
        console.error(`Unknown type: ${type}`);
      }
    },
  },
  actions: {
    openSidebar({ commit }) {
      commit("toggleSidebar", true);
    },
    closeSidebar({ commit }) {
      commit("toggleSidebar", false);
    },
    addItem({ commit }, payload) {
      commit("addItem", payload);
    },
    removeItem({ commit }, payload) {
      commit("removeItem", payload);
    },
  },
});

export default store;
