<template>
  <aside class="sidebar">
    <h1>Ridge Journal</h1>
    <button class="add-trade-btn">+ Add Trade</button>
    <nav>
      <ul class="sidebar-items">
        <li><i class="fa-solid fa-border-all"></i><router-link to="/dashboard">Dashboard</router-link></li>
        <li><i class="fa-regular fa-pen-to-square"></i><router-link to="/dailyjournal">Daily Journal</router-link></li>
        <li><i class="fa-solid fa-chart-column"></i><router-link to="/tradearchive">Trade Archive</router-link></li>
        <li><i class="fa-solid fa-book"></i><router-link to="/predictions">Predictions</router-link></li>
        <li><i class="fa-solid fa-calendar-days"></i><router-link to="/calendar">Calendar</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "TheSidebar",
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 20px;
  overflow-y: auto;
  z-index: 1000;
}

h1 {
  margin-top: 0;
  margin-left: 2rem;
  font-size: 22px;
  padding: .5rem 0;
}

.add-trade-btn {
  margin-left: 2rem;
  padding: 5px 50px;
  border-radius: .5rem;
  cursor: pointer;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar-items {
  margin-left: 1rem;
}

nav ul li {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  transition: 0.3s;
}

nav ul li a:hover {
  background-color: #34495e;
}

nav ul li i {
  margin-right: 10px;
  width: 20px;
  text-align: center;
  font-weight: 300;
}

.router-link-active {
  font-weight: bold;
}
</style>