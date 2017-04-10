<template>
  <div class="restA">
    <h1>RestAPI</h1>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'restA',
    mounted(){
      axios.get('//cuddly-robot-api.herokuapp.com/api/companies').then(response => console.log(response.data));
    }
  }
</script>
