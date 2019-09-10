import { firestoreAction } from "vuexfire";
import { db } from "../../helpers/firebaseConfig";

const state = {
  names: []
};

const mutations = {
  setNames(state, payLoad) {
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




  // updatebindNames: firestoreAction(({ state },payLoad) => {
  //   db.collection('names')
  //     .doc(state.names.id)
  //     .update({payLoad})
  //     .then(() => {
  //       console.log('user updated!')
  //     })
  // })
};

const getters = {
  names(state) {
    return state.names;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
