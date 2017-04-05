<template>
  <div class="companyId">
    <h1>{{ msgs }}</h1>
    <h2>is this companyId</h2>
  </div>
</template>

<script>
export default {
  name: 'companyId',
  data () {
    return {
      msgs: 'CompanyId Page'
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
