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
          entryTime: "",
          lotSize: "",
          risk: "",
          reward: "",
          description: "",
        },
      ],
      reminders: [],
    };
  },
  mutations: {
    toggleSidebar(state, payload) {
      state.isSidebarVisible = payload;
    },
  },
  actions: {
    openSidebar({ commit }) {
      commit("toggleSidebar", true);
    },
    closeSidebar({ commit }) {
      commit("toggleSidebar", false);
    },
  },
});

export default store;
