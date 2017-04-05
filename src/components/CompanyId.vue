<template>
  <div class="companyId">
    <h1>{{ msg }}</h1>
    <h2>Is it working</h2>

  </div>
</template>

<script>
export default {
  name: 'companyId',
  data () {
    return {
      msg: 'CompanyId Component'
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
