<template>
  <section class="section-one">
    <div class="current-trade-widget">
      <h2>Current Trades</h2>
      <div class="trade-container">
        <h2>BUY</h2>
        <p>Signal</p>
        <p>Target 1</p>
        <p>Invalidation</p>
        <p>Comments</p>
      </div>
    </div>
    <div class="prediction-widget">
      <h2>Weekly Prediction</h2>
      <div class="prediction-container">
        <p>Prediction</p>
        <p>Confidence</p>
      </div>
    </div>
    <div class="calendar-widget">
      <h2>Calendar</h2>
      <div class="calendar-container">
        <p>News</p>
        <p>CPI</p>
      </div>
    </div>
  </section>
  <section class="section-two"></section>
</template>

<script>
export default {
  name: 'TheDashboard',
  mounted(){
    console.log('Dashboard component mounted.')
  }
}
</script>