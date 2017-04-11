<template>
  <div>
    <h1>RestAPI</h1>
    <router-view></router-view>
    <main>
      <div class="container">
            <h1>Companies</h1>
            <div id="restA">
                <table class="table table-striped">
                    <tr>
                        <th>Company Id</th>
                        <th>Company Name</th>
                        <th>Company Website</th>
                        <th>NOT</th>
                        <th>NOT</th>
                    </tr>
                    <tr v-for="company in companies" is="company" :company="company"></tr>
                </table>
                <p class="lead">Here's a list of all the companies.
                    <button @click="createCompany()" class="btn btn-primary">Add a new one?</button>
                </p>
                <pre>{{ $data }}</pre>
            </div>
        </div>
    </main>
    <div id="template-story-raw">
        <tr>
            <td>
                {{company.id}}
            </td>
            <td class="col-md-6">
                <input v-if="company.editing" v-model="company.name" class="form-control">
                </input>
                <!--in other occasions show the story plot-->
                <span v-else>
                    {{company.name}}
                </span>
            </td>
            <td>
                <input v-if="company.editing" v-model="company.website" class="form-control">
                </input>
                <!--in other occasions show the story writer-->
                <span v-else>
                    {{company.website}}
                </span>
            </td>
            <td>

            </td>
            <td>
                <div class="btn-group" v-if="!company.editing">
                    <button @click="editCompany(company)" class="btn btn-default">Edit</button>
                    <button @click="deleteCompany(company)" class="btn btn-danger">Delete</button>
                </div>
                <div class="btn-group" v-else>
                    <!--If the story is taken from the db then it will have an id-->
                    <button v-if="company.id" class="btn btn-primary" @click="updateCompany(company)">Update Company
                    </button>
                    <!--If the company is new we want to store it-->
                    <button v-else class="btn btn-success" @click="storeCompany(company)">Save New Company</button>
                    <!--Always show cancel-->
                    <button @click="company.editing=false" class="btn btn-default">Cancel</button>
                </div>
            </td>
        </tr>
    </div>
  </div>
</template>
<script>
  Vue.component('company', {
    template: '#template-story-raw',
    props: ['company'],
    methods: {
        deleteStory: function (company) {
            var index = this.$parent.companies.indexOf(company);
            this.$parent.companies.splice(index, 1)
            this.$http.delete('//dry-sands-81401.herokuapp.com/companies/' + id)
        },
        editCompany: function (company) {
            company.editing = true;
        },
        updateCompany: function (company) {
            this.$http.patch('//dry-sands-81401.herokuapp.com/companies/' + id, company)
            //Set editing to false to show actions again and hide the inputs
            company.editing = false;
        },
        storeCompany: function (company) {
            this.$http.post('//dry-sands-81401.herokuapp.com/companies/', company).then(function (response) {
                /*
                After the the new story is stored in the database fetch again all stories with
                vm.fetchCompanies();
                Or Better, update the id of the created company
                */
                Vue.set(company, 'id', response.data.id);

                //Set editing to false to show actions again and hide the inputs
                company.editing = false;
            });
        },
    }
  })

  new Vue({
    el: '#restA',
    data: {
        companies: [],
        company: {}
    },
    mounted: function () {
        this.fetchStories()
    },
    methods: {
        createCompany: function () {
            var newCompany = {
                name: "",
                editing: true
            };
            this.companies.push(newCompany);
        },
        fetchCompanies: function () {
            var vm = this;
            this.$http.get('//dry-sands-81401.herokuapp.com/companies/')
                .then(function (response) {
                    // set data on vm
                    var companiesReady = response.data.map(function (company) {
                        company.editing = false;
                        return company
                    })
                    Vue.set(vm, 'companies', companiesReady)
                });
        },
    }
  });

</script>
