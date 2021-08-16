<template>
  <div class="container-fluid">
      <div id="nav">
        <nav class="nav nav-pills nav-justified">
          <a class="nav-link" ><router-link to="/">Contacts</router-link></a>
          <a class="nav-link" ><router-link to="/create">Create Contact</router-link></a>
          <a class="nav-link" ><router-link to="/search">Search Contact</router-link></a>

        </nav>
      </div>
      <router-view />
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
