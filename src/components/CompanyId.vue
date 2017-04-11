<template>
  <div class="companyId">
    <h1>{{ msgs }}</h1>
    <h2>is this companyId</h2>
    <h2>companyId is {{ $route.params.companyId }}</h2>
    <button>
      <router-link to="/companies/7">
        Companies 7
      </router-link>
    </button>
    <button>
      <router-link to="/companies/5">
        Companies 5
      </router-link>
    </button>
    
  </div>
</template>

<script>
export default {
  name: 'companyId',
  data () {
    return {
      msgs: 'CompanyId Page'
    }
  },
  watch: {
    '$route' (to, from) {
    axios.get('//cuddly-robot-api.herokuapp.com/api/companies/' + this.$route.params.companyId).then(response => console.log(response.data));
    }
  },
  created() {
    axios.get('//cuddly-robot-api.herokuapp.com/api/companies/' + this.$route.params.companyId).then(response => console.log(response.data));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
