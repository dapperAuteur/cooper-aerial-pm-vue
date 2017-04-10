<template>
  <div class="restA">
    <h1>RestAPI</h1>
    <router-view></router-view>
    <ul>
      <li v-for="company in companies">{{ company.id }} {{ company.name }} {{ company.website }}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'restA',
    data(){
      return {
        companies: []
      }
    },
    mounted(){
      axios.get('//cuddly-robot-api.herokuapp.com/api/companies').then(response => this.companies = response.data);
    }
  }
</script>
