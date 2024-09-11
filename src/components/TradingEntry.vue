<!-- can be customized to user later on -->

<template>
  <main>
    <section>
      <h2>Trade Checklist</h2>
      <div class="checklist">
        <div class="checklist-item">
          <input type="checkbox" id="trend" name="trend"/>
          <label for="trend">15m or 4hr Trend</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="limitOrder" name="limitOrder">
          <label for="limitOrder">Using Limit Order</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="candleClose" name="candleClose">
          <label for="candleClose">Candle Close</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="supportResistance" name="supportResistance">
          <label for="supportResistance">Support and Resistance</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="timeNews" name="timeNews">
          <label for="timeNews">Time of Day / News</label>
        </div>
      </div>
      <!-- <ul>
        <li>4hr Trend (Uptrend or Downtrend)</li>
        <li>Using Limit Order</li>
        <li>Candle Close Confirmation</li>
        <li>Support and Resistance Lines</li>
        <li>Time of Day / News</li>
      </ul> -->
    </section>
    <section>
      <h2>Entry</h2>
      <form>
        <label>Date</label>
        <input />
        <label>Time</label>
        <input />
        <!-- Create a dropdown for Buy / Sell -->
        <label for="buy-sell">Buy / Sell</label>
        <select id="buy-sell">
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <label>Signal</label>
        <textarea rows="3"></textarea>
        <!-- Add multiple TP -->
        <label>TP 1</label>
        <button>Add TP</button>
        <input />
        <label>Invalidation Criteria</label>
        <textarea rows="3"></textarea>
        <label>Comments</label>
        <textarea rows="5"></textarea>
        <button type="submit">Add Entry</button>
      </form>
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
