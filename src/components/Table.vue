<template>
  <div class="table">
    <div class="update">
      <el-input placeholder="sua thong tin" v-model="nameUpdate"></el-input>
      <el-button
        type="primary"
        v-on:click="updateStudent({ id: id, name: nameUpdate })"
        >update</el-button
      >
    </div>

    <div class="search">
      <el-input
        placeholder="nhap thong tin can tim"
        v-model="textSearch"
      ></el-input>
    </div>

    <el-button
      type="primary"
      v-on:click="searchStudent({ activePage: 1, textSearch: textSearch })"
      >SEARCH</el-button
    >

    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>tên</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listStudent" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>
            <el-button type="danger" @click="deleteStudent(item._id)"
              >DELETE</el-button
            >
          </td>
          <td>
            <el-button
              type="danger"
              @click="handleClickUpdate(item._id, item.name)"
              >Chon</el-button
            >
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="pagination">
      <el-button
        v-for="n in totalPage"
        :key="n"
        @click="handleButton(n)"
        :style="activePage == n ? 'background:blue' : ''"
        >{{ n }}</el-button
      >
    </div> -->

    <div class="search" v-if="textSearch != ''">
      <el-button
        v-for="n in totalPage"
        :key="n"
        @click="searchStudent({ textSearch: textSearch, activePage: n })"
        :style="activePage == n ? 'background: blue' : ''"
      >
        {{ n }}
      </el-button>
    </div>

     <div class="search" v-else>
      <el-button
        v-for="n in totalPage"
        :key="n"
        @click="paginationStudent(n)"
        :style="activePage == n ? 'background: red' : ''"
      >
        {{ n }}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      id: "",
      nameUpdate: "",
     
    };
  },

  props: {
    listStudent: {
      types: Array,
      default: () => [],
    },

    deleteStudent: Function,
    updateStudent: Function,
    paginationStudent: Function,
    searchStudent: Function,
    activePage: Number,
    totalPage: Number,
    textSearch:String
  },
  methods: {
    handleClickUpdate(id, nameUpdate) {
      (this.id = id), (this.nameUpdate = nameUpdate);
    },
    handleButton(n) {
      this.paginationStudent(n);
    },
  },
};
</script>

<style>
</style>