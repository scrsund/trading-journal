<!-- can be customized to user later on -->

<template>
  <main>
    <section>
      <h1>Trading Journal</h1>
      <h2>Trade Checklist</h2>
      <ul>
        <li>4hr Trend (Uptrend or Downtrend)</li>
        <li>Using Limit Order</li>
        <li>Candle Close Confirmation</li>
        <li>Support and Resistance Lines</li>
        <li>Time of Day</li>
        <li>Number of Trades Made</li>
      </ul>
    </section>
    <section>
      <h2>Journal</h2>
      <div>
        <label>Entry Time</label>
        <input />
        <label>Lot Size</label>
        <input />
        <label>Risk (SL loss)</label>
        <input />
        <label>Reward (TP profit)</label>
        <input />
        <label>Journal Entry</label>
        <textarea rows="5"></textarea>
      </div>
    </section>
  </main>
</template>

<script></script>

<style>
main {
  padding: 1rem;
  margin: 1rem;
}

label {
  display: block;
}

input,
textarea {
  display: block;
}
</style>
