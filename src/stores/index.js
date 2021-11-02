import Vue from 'vue'
import Vuex from 'vuex'
import moduleStudents from './moduleStudents'
import { createLogger } from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
      student:moduleStudents //mot quan ly ngan chua dl
    },
    plugins: [createLogger()]
 
})

export default store