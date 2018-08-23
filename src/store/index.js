import Vue from 'vue'
import Vuex from 'vuex'

// import mutations from './mutations/index'
// import actions from './actions/index'
// import getters from './getters/index'

// import { CONTACT_DEFAULT_CREDIT_SCORE } from '../utils/config'

Vue.use(Vuex);

const state = {
	document : {},
	blocks : [
		{ title : "Navigation is the greatest form of flattery", lines : [{ title : "Stories" }, { title : "Memoirs" }, { title : "Notifications", event : "tap", target : "elsewhere" }, { title : "Thingy" }, { title : "Profile/Friends" }, { title : "Create New Story" }] },
		{ title : "Page 2", lines : [{ title : "Other" }] }

	]
};

export default new Vuex.Store({
  // mutations,
  // actions,
  // getters,
  state
})