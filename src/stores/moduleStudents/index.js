import actions from "./actions"
import * as types from './types'

const INITIAL_STATE = {
    listStudent: [],
    isLoading: false,
    error: false,
    message: "",
    activePage: 0,
    totalPage: 0,
    textSearch:''

}




const studentModule = {
    namespaced: true,//trỏ đúng tên dữ liệu để tránh trùng lặp
    state: () => INITIAL_STATE,
    getters: {},
    actions,
    mutations: {

        //get
        [types.GET_LIST_STUDENT_REQUEST](state) {
            state.isLoading = true
        },
        [types.GET_LIST_STUDENT_SUCCESS](state, listStudent) {
            state.isLoading = false,
                state.error = false,
                state.listStudent = listStudent
            console.log(listStudent, "lissss");
        }
        ,
        [types.GET_LIST_STUDENT_FAILURE](state, error) {
            state.isLoading = false
            state.error = true
            state.message = error.message
        },
        [types.INITIAL_STATE](state) {
            state.isLoading = false
            state.listStudents = []
            state.message = ''
            state.error = false
        },

        //add
        [types.ADD_LIST_STUDENT_REQUEST](state) {
            state.isLoading = true;
        },
        [types.ADD_LIST_STUDENT_SUCCESS](state) {
            state.isLoading = false,
                state.error = false
        },
        [types.ADD_LIST_STUDENT_FAILURE](state, error) {
            state.isLoading = false
            state.error = true
            state.message = error.message
        },
        [types.INITIAL_STATE](state) {
            state.isLoading = false
            state.listStudents = []
            state.message = ''
            state.error = false
        },
        //delete
        [types.DELETE_LIST_STUDENT_REQUEST](state) {
            state.isLoading = true;
        },
        [types.DELETE_LIST_STUDENT_SUCCESS](state) {
            state.isLoading = false,
                state.error = false
        },
        [types.DELETE_LIST_STUDENT_FAILURE](state, error) {
            state.isLoading = false
            state.error = true
            state.message = error.message
        },
        [types.INITIAL_STATE](state) {
            state.isLoading = false
            state.listStudents = []
            state.message = ''
            state.error = false
        },
        //update
        [types.UPDATE_LIST_STUDENT_REQUEST](state) {
            state.isLoading = true;
        },
        [types.UPDATE_LIST_STUDENT_SUCCESS](state) {
            state.isLoading = false,
                state.error = false
        },
        [types.UPDATE_LIST_STUDENT_FAILURE](state, error) {
            state.isLoading = false;
            state.error = true;
            state.message = error.message;
        },
        [types.INITIAL_STATE](state) {
            state.isLoading = false;
            state.listStudents = [];
            state.message = '';
            state.error = false;
        },


        //pagination
        [types.PAGINATION_LIST_STUDENT_REQUEST](state) {
            state.isLoading = true;
        },
        [types.PAGINATION_LIST_STUDENT_SUCCESS](state,payload) {
                state.isLoading = false,
                state.error = false,
                state.listStudent =payload.pagination,
                state.activePage=payload.activePage,
                state.totalPage=payload.totalPage,


                console.log(state,"stateeee");

          

        },
    
        [types.PAGINATION_LIST_STUDENT_FAILURE](state, error) {
            state.isLoading = false;
            state.error = true;
            state.message = error.message;
        },
        [types.INITIAL_STATE](state) {
            state.isLoading = false;
            state.listStudents = [];
            state.message = '';
            state.error = false;
        },



  //search
        [types.SEARCH_LIST_STUDENT_REQUEST](state) {
            state.isLoading = true;
        },
        [types.SEARCH_LIST_STUDENT_SUCCESS](state,payload) {
                state.isLoading = false,
                state.error = false,
                state.listStudent =payload.search,
                state.activePage=payload.activePage,
                state.totalPage=payload.totalPage,
                state.textSearch=payload.textSearch
                

        },
    
        [types.SEARCH_LIST_STUDENT_FAILURE](state, error) {
            state.isLoading = false;
            state.error = true;
            state.message = error.message;
        },
        [types.INITIAL_STATE](state) {
            state.isLoading = false;
            state.listStudents = [];
            state.message = '';
            state.error = false;
        },



    }

}
export default studentModule
