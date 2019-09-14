<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Company</th>
        <th scope="col">Type</th>
        <th scope="col">Country</th>
        <th scope="col">Contact</th>
        <th scope="col">State</th>
        <th scope="col">Mail</th>
        <th scope="col">
          <button class="btn-sm btn-primary" @click="addCompany">Add Company</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(comp,i) in  calledNames" :key="comp.name">
        <th scope="row">{{i}}</th>

        <td>{{comp.companyName}}</td>
        <td>{{comp.companyType}}</td>
        <td>{{comp.companyCountry}}</td>
        <td>{{comp.companyPhone}}</td>
        <td>{{comp.companyState}}</td>
        <td>{{comp.companyEmail}}</td>
        <td>
          <div class="btn-group">
            <button class="btn small btn-outline-success" @click="updateCompany(comp,i)">Update</button>
            <button class="btn small btn-outline-danger" @click="deleteCompany(comp)">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>


    <!-- Modal -->
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Data</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label">Company Name</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="mdi mdi-account-circle"></i>
                  </span>
                  <input
                    id="fullName"
                    name="fullName"
                    placeholder="New Company full name"
                    class="form-control"
                    required="true"
                    value
                    type="text"
                     v-model="value.testName"
                   
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label">Company type</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="mdi mdi-home"></i>
                  </span>
                  <input
                    id="city"
                    name="city"
                    placeholder="New Company Type"
                    class="form-control"
                    required="true"
                    value
                    type="text"
                     v-model="value.testType"
                   
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">State/Province/Region</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="mdi mdi-home"></i>
                  </span>
                  <input
                    id="state"
                    name="state"
                    placeholder="New State/Province/Region"
                    class="form-control"
                    required="true"
                    value
                    type="text"
                     v-model="value.testState"
                  
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label">Country</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <country-select   v-model="value.testCountry"/>
                  <i class="mdi mdi-earth"></i>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">Email</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="mdi large mdi-email-outline"></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    placeholder="New Email"
                    class="form-control"
                    required="true"
                    value
                    type="text"
                    v-model="value.testEmail"
                 
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label">Phone Number</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="mdi mdi-phone"></i>
                  </span>
                  <input
                    id="newphoneNumber"
                    name="newphoneNumber"
                    placeholder="New Phone Number"
                    class="form-control"
                    required="true"
                    value
                    type="text"
                    v-model="value.testPhone"
                  
                  />
                </div>
              </div>
                    </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveEdits">Save changes</button>
          </div>
        </div>
      </div>


<!-- Modal-->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalCenterTitle" aria-hidden="true" 
 data-target="#deleteModalCenter">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 




    </div>
  </table>
</template>

<script>
export default {
  data() {
    return {
      value: {
        id: null,
        testName: null,
        testType: null,
        testCountry: null,
        testState:null,
        testEmail:null,
        testPhone: null
        },
        
     };
  },
  computed: {
   calledNames() {
      return this.$store.getters.names;
      console.log(name);
    }
   },
  created() {
    console.log("created");
    this.$store.dispatch("getbindNames");
  },
  methods: {
    addCompany() {
      this.$router.push("/createcompany");
    },
    updateCompany(comp,i) {
      console.log(comp.id)
      $('#editModal').modal('show')
     
      

      this.value.testName = comp.companyName
      this.value.testPhone = comp.companyPhone
      this.value.testEmail = comp.companyEmail
      this.value.testCountry = comp.companyCountry
      this.value.testType = comp.companyType
      this.value.testState = comp.companyState
      this.value.id = i;

      
    },
    saveEdits(){
      console.log('checking')
      this.$store.dispatch('updatebindNames',{value: this.value})
       $('#editModal').modal('hide')
      
    },
    deleteCompany(comp) {
 
      this.value = comp;
      this.$store.dispatch('deleteNames',{value: this.value})

    }
  }
};
</script>