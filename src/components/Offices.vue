<template>
  <div id="offices">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script type="text/javascript">
export default {
  name: 'offices',
  data () {
    return {
      msg: 'Cooper Aerial | Offices'
    }
  }
}

//  new Vue({
//   el: '#offices',
//   data: {
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     zip: '',
//     phone: '',
//     fax: '',
//     loading: true,
//     apiLink: '//localhost:3000/offices'
//   },
//
//   mounted: function() {
//     this.getList();
//   },
//
//   methods: {
//     getList: function() {
//       this.$http.get(this.apiLink, function(data, status, request) {
//         this.$set('offices', data);
//         this.loading = false
//       }).error(function (data, status, request) {
//         console.log('error');
//       })
//     },
//     postItem: function(address1, address2, city, state, zip, phone, fax) {
//       this.$http.post(this.apiLink, {
//         address1: address1,
//         address2: address2,
//         city: city,
//         state: state,
//         zip: zip,
//         phone: phone,
//         fax: fax
//       }, function(data, status, request) {
//         this.offices.push(data);
//       });
//     },
//     editItem: function(item, address1, address2, city, state, zip, phone, fax) {
//       var itemId = item.id;
//       console.log(arguments);
//       this.$http.put(this.apiLink + '/' + itemId, {
//         address1: address1,
//         address2: address2,
//         city: city,
//         state: state,
//         zip: zip,
//         phone: phone,
//         fax: fax
//       }, function (data, status, request) {
//         this.getList();
//       });
//     },
//     delItem: function(item) {
//       var ItemId = item.id;
//       this.offices.$remove(item);
//       this.$http.delete(this.apiLink + '/' + itemId, {
//
//       }, function(data, status, request) {
//         this.getList();
//       });
//     },
//     onSubmit: function() {
//       console.log(this.newAddress1, this.newAddress2, this.newCity, this.newState, this.newZip, this.newPhone, this.newFax)
//       this.postItem(this.newAddress1, this.newAddress2, this.newCity, this.newState, this.newZip, this.newPhone, this.newFax);
//       this.newAddress1 = '';
//       this.newAddress2 = '';
//       this.newCity = '';
//       this.newState = '';
//       this.newZip = '';
//       this.newPhone = '';
//       this.newFax = '';
//     }
//   }
// });

</script>

<style scoped>
h1 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
