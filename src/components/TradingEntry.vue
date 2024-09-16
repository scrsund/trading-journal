<!-- can be customized to user later on -->

<template>
  <main class="trading-entry">
    <section class="checklist-section">
      <h2>Trade Checklist</h2>
      <div class="checklist">
        <div class="checklist-item">
          <input type="checkbox" id="trend" name="trend" />
          <label for="trend">15m or 4hr Trend</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="limitOrder" name="limitOrder" />
          <label for="limitOrder">Using Limit Order</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="candleClose" name="candleClose" />
          <label for="candleClose">Candle Close</label>
        </div>
        <div class="checklist-item">
          <input
            type="checkbox"
            id="supportResistance"
            name="supportResistance"
          />
          <label for="supportResistance">Support and Resistance</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="timeNews" name="timeNews" />
          <label for="timeNews">Time of Day / News</label>
        </div>
      </div>
    </section>

    <!-- ENTRY SECTION -->
    <section class="entry-section">
      <h2>Entry</h2>
      <form @submit.prevent="addEntry" class="entry-form">
        <div class="form-row">
          <label for="date" name="date">Date</label>
          <input type="date" required />
        </div>
        <div class="form-row">
          <label for="time" name="time">Time</label>
          <input type="time" required />
        </div>
        <!-- Create a dropdown for Buy / Sell -->
        <div class="form-row">
          <label for="buy-sell" name="buy-sell">Buy / Sell</label>
          <select id="buy-sell">
            <option value="" disabled selected>Select One</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div class="form-row">
          <label for="signal" name="signal">Signal</label>
          <textarea rows="2"></textarea>
        </div>
        <div class="form-row">
          <label for="entryPrice" name="entryPrice">Entry Price</label>
          <input id="entryPrice" type="number" required />
        </div>
        <!-- Add multiple TP -->
        <div class="form-row" v-for="(tp, index) in tpList" :key="index">
          <label :for="'tp' + (index + 1)">TP {{ index + 1 }}</label>
          <input :id="'tp' + (index + 1)" v-model="tp.value" type="number" required />
        </div>
        <div class="form-row">
          <label></label>
          <button type="button" @click="addTP" class="add-tp-btn">Add TP</button>
        </div>
        <div class="form-row">
        <label for="invalidation" name="invalidation"
          >Invalidation Criteria</label
        >
        <textarea rows="2"></textarea>
        </div>
        <div class="form-row">
        <label for="comments" name="comments">Comments</label>
        <textarea rows="2"></textarea>
        </div>
        <div class="form-row">
          <label></label>
          <button type="submit" class="submit-btn">Submit Entry</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tpList: [{ value: "" }],
    };
  },
  methods: {
    addTP() {
      this.tpList.push({ value: "" });
    },
  },
};
</script>

<style scoped>
.trading-entry {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

/* SECTION 1 */
.checklist {
  list-style-type: none;
  padding: 0;
}

.checklist-item {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checklist-item label {
  display: inline;
  cursor: pointer;
}

/* SECTION 2 */
.entry-form {
  display: grid;
  gap: 1rem;
}

.form-row{
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 1rem;
}

.tp-input {
  display: flex;
}

.entry-section label {
  font-weight: bold;
  text-align: right;
}

.entry-section input, .entry-section textarea, .entry-section select {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.entry-section textarea {
  height: 100px;
}

.add-tp-btn, .submit-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 50%;
}

</style>
