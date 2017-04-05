<template>
  <div class="companies">
    <h1>{{ msg }}</h1>
    <h2>is this companies</h2>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'companies',
  data () {
    return {
      msg: 'Welcome to the Cooper Aerial Project Management App'
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
