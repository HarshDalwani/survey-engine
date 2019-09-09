<template>
  <form @submit.prevent="addName">
        <div class="form-group">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" v-model="newItem.name" />
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" v-model="newItem.lastname" />
      </div>
     
      <div class="form-group">
        <input type="submit" class="btn btn-primary" value="Add Item" />
      </div>
    
      <p>{{name}}</p>
    </div>
  </form>
</template>

<script>


export default {
 
  data() {
    return {
      newItem: {
        name: "",
        lastname: "",
        
      }
    };
  },

  methods: {
    addName() {
     this.$store.dispatch('bindNames',{newItem:this.newItem})
    },
    updateItem(){
      this.$store.dispatch('updatebindNames')
    }
  },
  computed: {
    name(){
    return this.$store.getters.names;
    console.log(name);
    }
   },
  
};
</script>