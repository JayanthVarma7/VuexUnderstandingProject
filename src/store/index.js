import { createStore } from 'vuex'
import counterModule from './modules/counterModule'
import employeeModule from './modules/employeeModule'
import userListModule from './modules/userListModule'

export default createStore({
  state: {
    counterState: counterModule.state,
    employeeState: employeeModule.state,
    userListState: userListModule.state
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule,
    employeeModule,
    userListModule
  },
  getters: {
    getCounterState: function(state){
      return state.counterState.counter;
    },
    getEmployeeState(state){
      return state.employeeState.employeeList;
    },
    getUserListState(state){
      return state.userListState.userList;
    }
  }
})
