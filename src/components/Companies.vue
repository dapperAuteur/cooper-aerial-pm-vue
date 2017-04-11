<template>
  <div class="companies">
    <h1>{{ msg }}</h1>
    <h2>is this companies</h2>
    <router-view></router-view>
    <ul>
      <li v-for="company in companies">{{ company.id }} {{ company.name }} {{ company.website }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'companies',
  data () {
    return {
      msg: 'Welcome to the Cooper Aerial Project Management App',
      companies: []
    }
  },
  mounted(){
    axios.get('//cuddly-robot-api.herokuapp.com/api/companies').then(response => this.companies = response.data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
