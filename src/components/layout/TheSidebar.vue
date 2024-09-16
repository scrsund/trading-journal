<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
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
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  padding: 10px 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: block;
  transition: 0.3s;
}

nav ul li a:hover {
  background-color: #34495e;
}

.router-link-active {
  background-color: #34495e;
  font-weight: bold;
}
</style>