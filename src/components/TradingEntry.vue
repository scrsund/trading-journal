<!-- can be customized to user later on -->

<template>
  <main class="trading-entry">
    <section class="checklist-section">
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
    </section>
    <section class="entry-section">
      <h2>Entry</h2>
      <form @submit.prevent="addEntry">
        <label for="date" name="date">Date</label>
        <input type="date"/>
        <label for="time" name="time">Time</label>
        <input type="time"/>
        <!-- Create a dropdown for Buy / Sell -->
        <label for="buy-sell" name="buy-sell">Buy / Sell</label>
        <select id="buy-sell">
          <option value="" disabled selected>Select One</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <label for="signal" name="signal">Signal</label>
        <textarea rows="3"></textarea>
        <!-- Add multiple TP -->
        <div v-for="(tp, index) in tpList" :key="index">
          <label :for="'tp' + (index + 1)">TP {{ index + 1 }}</label>
          <input id="'tp' + (index + 1)" v-model="tp.value">
        </div>
        <button type="button" @click="addTP" class="add-tp-btn">Add TP</button>
        <label for="invalidation" name="invalidation">Invalidation Criteria</label>
        <textarea rows="3"></textarea>
        <label for="comments" name="comments">Comments</label>
        <textarea rows="5"></textarea>
        <button type="submit" class="submit-btn">Submit Entry</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  data(){
    return {
      tpList: [{value: ''}]
    }
  },
  methods: {
    addTP(){
      this.tpList.push({value: ''})
    }
  }
}

</script>

<style scoped>
/* main {
  padding: 1rem;
  margin: 1rem;
}

label {
  display: block;
}

input,
textarea {
  display: block;
} */

.trading-entry {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: .5rem;
  margin-bottom: 1rem;
}

/* checklist */
.checklist {
  list-style-type: none;
  padding: 0;
}

.checklist-item {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: .5rem;
}

.checklist-item label{
  display: inline;
  cursor: pointer;
}

.entry-section form {
  display: grid;
  gap: 1rem;
}

.entry-section label {
  font-weight: bold;
  margin-bottom: .25rem;
}

.entry-section input, .entry-section textarea, .entry-section select {
  width: 100%;
  padding: .5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.tp-input {
  display: grid;
  gap: .25rem;
}

.add-tp-btn{
  
}

.submit-btn{
  background-color: #007bff;
  color: white;
  border: none;
  padding: .5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-tp-btn:hover, .submit-btn:hover {
  background-color: #0056b3;
}

.submit-btn {
  margin-top: 1rem;
}

</style>
