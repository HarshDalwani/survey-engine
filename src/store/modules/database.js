import { firestoreAction } from "vuexfire";
import { db } from "../../helpers/firebaseConfig";

const state = {
  names: ''
};

const mutations = {
  getNames(state, payLoad) {
   state.names = payLoad;
  }
};

const actions = {
  bindNames: firestoreAction(({ bindFirestoreRef }, payLoad) => {
    db.collection("names")
      .doc()
      .set(payLoad.newCompany);
   
    return bindFirestoreRef("names", db.collection("names"));
  }),

  
  getbindNames: firestoreAction(context => {
    return context.bindFirestoreRef("names", db.collection("names"));
  }),

   updatebindNames: firestoreAction(({state} ,payLoad) => {
     db.collection("names")
      .doc(payLoad.value.id)
      .update({
        "companyCountry": payLoad.value.testCountry ,
        "companyName":  payLoad.value.testName ,
        "companyType":  payLoad.value.testType,
        "companyState":  payLoad.value.testState,
        "companyPhone":  payLoad.value.testPhone,
        "companyEmail":  payLoad.value.testEmail
        
        })
      // console.log(payLoad.value)
      .then(() => {
        console.log('user updated!')
      })
  }),

  deleteNames: firestoreAction((context, payLoad) => {
    db.collection('names')
      .doc(payLoad.value.id)
      .delete()
      .then(() => {
        console.log('user deleted')
      }).catch((e) =>{
        console.error(e)
      })  
 
  })
};

const getters = {
  names: state => state.names.reduce((byId,value)=> {
    byId[value.id] = value;
    return byId;
  },{})
 
};

export default {
  state,
  mutations,
  actions,
  getters
};
