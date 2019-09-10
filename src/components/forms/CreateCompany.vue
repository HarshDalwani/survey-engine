<template>
<div class="container">
       <table class="table table-striped">
          <tbody>
             <tr>
                <td colspan="1">
                   <form class="well form-horizontal" @submit.prevent=" addCompanyName">
                      <fieldset>
                         <div class="form-group">
                            <label class="col-md-4 control-label">Company Name</label>
                            <div class="col-md-8 inputGroupContainer">
                               <div class="input-group"><span class="input-group-addon"><i class="mdi mdi-account-circle"></i></span><input id="fullName" name="fullName" placeholder="Company full name" class="form-control" required="true" value="" type="text" v-model="newCompany.companyName"></div>
                            </div>
                         </div>
                         <!-- <div class="form-group">
                            <label class="col-md-4 control-label">Address Line 1</label>
                            <div class="col-md-8 inputGroupContainer">
                               <div class="input-group"><span class="input-group-addon"><i class="mdi mdi-home"></i></span><input id="addressLine1" name="addressLine1" placeholder="Address Line 1" class="form-control" required="true" value="" type="text"></div>
                            </div>
                         </div>
                         <div class="form-group">
                            <label class="col-md-4 control-label">Address Line 2</label>
                            <div class="col-md-8 inputGroupContainer">
                               <div class="input-group"><span class="input-group-addon"><i class="mdi mdi-home"></i></span><input id="addressLine2" name="addressLine2" placeholder="Address Line 2" class="form-control" required="true" value="" type="text"></div>
                            </div>
                         </div> -->
                         <div class="form-group">
                            <label class="col-md-4 control-label">Company type</label>
                            <div class="col-md-8 inputGroupContainer">
                               <div class="input-group"><span class="input-group-addon"><i class="mdi mdi-home"></i></span><input id="city" name="city" placeholder="Company Type" class="form-control" required="true" value="" type="text" v-model="newCompany.companyType"></div>
                            </div>
                         </div>
                         <div class="form-group">
                            <label class="col-md-4 control-label">State/Province/Region</label>
                            <div class="col-md-8 inputGroupContainer">
                               <div class="input-group"><span class="input-group-addon"><i class="mdi mdi-home"></i></span><input id="state" name="state" placeholder="State/Province/Region" class="form-control" required="true" value="" type="text" v-model="newCompany.companyState"></div>
                            </div>
                         </div>
                         <!-- <div class="form-group">
                            <label class="col-md-4 control-label">Postal Code/ZIP</label>
                            <div class="col-md-8 inputGroupContainer">
                               <div class="input-group"><span class="input-group-addon"><i class="mdi mdi-home"></i></span><input id="postcode" name="postcode" placeholder="Postal Code/ZIP" class="form-control" required="true" value="" type="text"></div>
                            </div>
                         </div> -->
                         <div class="form-group">
                            <label class="col-md-4 control-label">Country</label>
                             <div class="col-md-8 inputGroupContainer">
                               <div class="input-group">
                                   <country-select v-model="newCompany.companyCountry"/><i class="mdi mdi-earth" ></i>
                                </div>
                            </div>
                         </div>
                         <div class="form-group">
                            <label class="col-md-4 control-label">Email</label>
                            <div class="col-md-8 inputGroupContainer">
                               <div class="input-group"><span class="input-group-addon"><i class="mdi large mdi-email-outline"></i></span><input id="email" name="email" placeholder="Email" class="form-control" required="true" value="" type="text" v-model="newCompany.companyEmail"></div>
                            </div>
                         </div>

                         <div class="form-group">
                            <label class="col-md-4 control-label">Phone Number</label>
                            <div class="col-md-8 inputGroupContainer">
                               <div class="input-group"><span class="input-group-addon"><i class="mdi mdi-phone"></i></span><input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" class="form-control" required="true" value="" type="text" v-model="newCompany.companyPhone"></div>
                            </div>
                            <div class="input-group">
                              <button type="submit" class="btn btn-outline-success">submit</button>
                              </div>
                         </div>
                      </fieldset>
                   </form>
                   </td>
                </tr>
                </tbody>
                </table>
                </div>
</template>

<script>


export default {
 
  data() {
    return {
      newCompany: {
        companyName: "",
        companyType: "",
        companyCountry: "",
        companyState:"",
        companyEmail:"",
        companyPhone:""
        

        
      }
    };
  },

  methods: {
    addCompanyName() {
     this.$store.dispatch('bindNames',{newCompany:this.newCompany})
     this.$router.replace('/companylist')
    },
    // updateItem(){
    //   this.$store.dispatch('updatebindNames')
    // }
  },
  computed: {
    name(){
    return this.$store.getters.names;
    console.log(name);
    }
   },
  
};
</script>