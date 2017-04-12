<template>
  <div class="companyId">
    <h1>{{ msgs }}</h1>
    <h2>companyId is {{ $route.params.companyId }}</h2>
    <button>
      <router-link to="/companies/company/5">
        Companies 5
      </router-link>
    </button>
    <button>
      <router-link to="/companies/company/7">
        Companies 7
      </router-link>
    </button>
    {{ company.name }} {{ company.website }}
    <button @click="getCompanyData">Get Company Data</button>
  </div>
</template>

<script>
export default {
  name: 'companyId',
  data () {
    return {
      company: '',
      msgs: 'is this companyId'
    }
  },
  watch: {
    '$route' (to, from) {
    axios.get('//cuddly-robot-api.herokuapp.com/api/companies/' + this.$route.params.companyId).then(response => this.companies = response.data);
    }
  },
  created() {
    axios.get('//cuddly-robot-api.herokuapp.com/api/companies/' + this.$route.params.companyId).then(response => this.companies = response.data);
  },
  methods: {
    getCompanyData(companyId){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
