<template>
  <div class="studentContainer">
    <Form :addStudent="addStudent" />

    <Table 
    :listStudent="listStudent" 
    :deleteStudent="deleteStudent"
    :updateStudent="updateStudent"
    :paginationStudent="paginationStudent"
    :searchStudent="searchStudent"
    :activePage='activePage'
    :totalPage='totalPage'
    :textSearch='textSearch' />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import Table from "../components/Table.vue";
import { mapState, mapActions } from "vuex";
import * as types from "../stores/moduleStudents/types";
export default {
  components: {
    Form,
    Table,
  },
  computed: {
    
    ...mapState({
      listStudent: (state) => state.student.listStudent,
      activePage:(state)=>state.student.activePage,
      totalPage:(state)=>state.student.totalPage,
      textSearch:(state)=>state.student.textSearch
      

    }),
  },
  mounted() {
   console.log(this.listStudent,"state");
    this.paginationStudent(1); //giong componentDidMount
    
  },
  

  methods: {
    ...mapActions({
      getListStudent: "student/" + types.GET_LIST_STUDENT_REQUEST,
      addStudent: "student/" + types.ADD_LIST_STUDENT_REQUEST,
      deleteStudent: "student/" + types.DELETE_LIST_STUDENT_REQUEST,
      updateStudent: "student/" + types.UPDATE_LIST_STUDENT_REQUEST,
      paginationStudent: "student/" + types.PAGINATION_LIST_STUDENT_REQUEST,
      searchStudent: "student/" + types.SEARCH_LIST_STUDENT_REQUEST,
      
    }),
  },
};
</script>

<style scoped lang='scss'>
.studentContainer {
  max-width: 500px;
  margin: auto;
}
</style>