<template>
  <main class="dashboard">
    <section class="section-one">
      <div class="current-trade-widget">
        <h3>Current Trades</h3>
        <div class="container">
          <h4>BUY</h4>
          <p>Signal</p>
          <p>Target 1</p>
          <p>Invalidation</p>
          <p>Comments</p>
        </div>
      </div>
      <div class="right-container">
        <div class="prediction-widget">
          <h3>Weekly Prediction</h3>
          <div class="container">
            <p>Prediction</p>
            <p>Confidence</p>
          </div>
        </div>
        <div class="reminders-calendar-wrapper">
          <div class="reminders-widget">
            <h3>Reminders</h3>
            <div class="container">
              <p>Reminder 1</p>
              <p>Reminder 2</p>
            </div>
          </div>
          <div class="calendar-widget">
            <h3>Calendar</h3>
            <div class="container">
              <p>News</p>
              <p>CPI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- BOTTOM SECTION -->
    <section class="section-two">
      <div class="summary-widget">
        <h3>Summary</h3>
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
        <div class="container">
          <p>Profit Ratio:</p>
          <p>P&L</p>
          <p># of Trades</p>
          <p>etc</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "TheDashboard",
  mounted() {
    console.log("Dashboard component mounted.");
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.dashboard {
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
}

/*New styles added*/
.section-one {
  display: flex;
  gap: 20px;
}

.current-trade-widget {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.right-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.prediction-widget {
  flex: 0 0 auto;
}

.reminders-calendar-wrapper {
  display: flex;
  gap: 20px;
  flex: 1;
}

.reminders-widget, .calendar-widget {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.section-one h3 {
  margin-left: 2rem;

}

.container {
  border: 1px solid rgb(207, 207, 207);
  border-radius: 1rem;
  padding: 1rem;
  flex: 1;
}


.summary-widget button {
  border: none;
}
</style>
