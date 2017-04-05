<template>
  <div id="app">
    <img src="./assets/logo.png">
    </br>
    <button>
      <router-link to="/">
        Home
      </router-link>
    </button>
    <button>
      <router-link to="/companies">
        Companies
      </router-link>
    </button>
    <button>
      <router-link to="/companies/companyId">
        CompanyId
      </router-link>
    </button>
    <button>
      <router-link to="/companies/restAPI">
        RestAPI
      </router-link>
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
