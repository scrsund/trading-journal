<!-- customize checklist and save presets for different strategies drop down menu to
toggle between correct strategy checklist

create separate component for app dropdownmenu, for reminders and strategy pages 

Pages:
1. Make a new entry
2. Make a new strategy
3. Create reminders/alerts (could be a sidebar accessible from any window)
4. View previous entries (or simple trading statistics) - in progress or not

-->

<template>
  <!-- <TheHeader /> -->
   <div id="app">
     <TheSidebar />
     <router-view></router-view>
   </div>
  <!-- <TradingEntry></TradingEntry> -->
</template>

<script>
// import TradingEntry from "./components/TradingEntry.vue";
// import TheHeader from "./components/layout/TheHeader.vue";
import TheSidebar from "./components/layout/TheSidebar.vue";

export default {
  name: "App",
  components: {
    // TradingEntry,
    // TheHeader,
    TheSidebar,
  },
  mounted(){
    console.log('App component mounted.')
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*color: #2c3e50;*/
</style>
