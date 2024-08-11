import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
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
    };
  },
});

export default store;
