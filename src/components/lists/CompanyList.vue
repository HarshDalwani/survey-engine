<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Company</th>
        <th scope="col">Data</th>
        <th scope="col">
          <button class="btn-small btn-primary" @click="addCompany">Add Company</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in name" :key="data.name">
        <th scope="row">{{}}</th>
        <td>{{data.name}} {{data.lastname}}</td>
        <td></td>
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
  data() {
    return {
      names: [{ name, index }]
    };
  },
  computed: {
    name() {
      return this.$store.getters.names;
      console.log(name);
    }
  },
  created() {
    console.log("created");
    this.$store.dispatch("getbindNames");
  },
  methods: {
      
  },
};
</script>