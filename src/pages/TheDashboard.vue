<template>
  <main class="dashboard">
  <section class="section-one">
    <div class="current-trade-widget">
      <h2>Current Trades</h2>
      <div class="container">
        <h2>BUY</h2>
        <p>Signal</p>
        <p>Target 1</p>
        <p>Invalidation</p>
        <p>Comments</p>
      </div>
    </div>
    <div class="prediction-calendar-container">
      <div class="prediction-widget">
        <h2>Weekly Prediction</h2>
        <div class="container">
          <p>Prediction</p>
          <p>Confidence</p>
        </div>
      </div>
      <div class="calendar-widget">
        <h2>Calendar</h2>
        <div class="container">
          <p>News</p>
          <p>CPI</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-two"></section>
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