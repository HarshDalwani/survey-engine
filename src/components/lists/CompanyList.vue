<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Company</th>
        <th scope="col">Type</th>
        <th scope="col">Country</th>
        <th scope="col">Contact</th>
        <th scope="col">State</th>
        <th scope="col">Mail</th>
        <th scope="col">
          <button class="btn-small btn-primary" @click="addCompany">Add Company</button>
        </th> 
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data,i) in name" :key="data.name">
        <th scope="row">{{i}}</th>
        <td>{{data.companyName}}</td>
        <td>{{data.companyType}}</td>
        <td>{{data.companyCountry}}</td>
        <td>{{data.companyPhone}}</td>
        <td>{{data.companyState}}</td>
        <td>{{data.companyEmail}}</td>
      </tr>
      <!-- <tr>
      <th scope="row"></th>
      <td>Jacob</td>
    
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Larry</td>
      </tr>-->
    </tbody>
  </table>
</template>

<script>
export default {
 
  computed: {
    name() {
      return this.$store.getters.names;
      console.log(name);
    },
  
  },
  created() {
    console.log("created");
    this.$store.dispatch("getbindNames");
  },
  methods: {
      addCompany(){
          this.$router.push('/createcompany')
      },
   
  },
};
</script>