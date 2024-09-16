<template>
  <main class="dashboard">
    <!--TOP SECTION-->
    <section class="section-one">
      <!-- SECTION 1 LEFT SIDE-->
    <!-- CURRENT TRADE SECTION -->
    <div class="current-trade-widget widget-card">
      <h2>Current Trades</h2>
      <div class="container">
        <h2>BUY</h2>
        <p>Signal</p>
        <p>Target 1</p>
        <p>Invalidation</p>
        <p>Comments</p>
      </div>
    </div>
    <!-- SECTION 1 RIGHT SIDE-->
    <div class="prediction-calendar-container">
      <!-- PREDICTION SECTION -->
      <div class="prediction-widget widget-card">
        <h2>Weekly Prediction</h2>
        <div class="container">
          <p>Prediction</p>
          <p>Confidence</p>
        </div>
        <!-- REMINDER & CALENDAR SECTION -->
      <div class="reminders-calendar-container">
        <div class="reminders-widget widget-card">
          <h2>Reminders</h2>
          <div class="container">
            <p>Take a break after a trade.</p>
            <p>Entry price matters.`</p>
          </div>
        </div>
      </div>
      <div class="calendar-widget widget-card">
        <h2>Calendar</h2>
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
    <div class="summary-widget widget-card">
      <h2>Summary</h2>
      <p>Daily</p>
      <p>Hourly</p>
      <p>Monthly</p>
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
  name: 'TheDashboard',
  mounted(){
    console.log('Dashboard component mounted.')
  }
}
</script>

<style scoped>
.dashboard {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
}

h2{
  color: #333;
  font-size: 1.5rem;
}

.container {
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;
}

</style>