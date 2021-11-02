<template>
  <div class="form">
    <el-input placeholder="them thong tin" v-model="name"></el-input>
    <el-button type="primary"
     v-on:click="addStudent({ name })">ADD</el-button>

  
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },

  props: {
    addStudent: Function,
  },
};
</script>

<style scoped lang='scss'>
.form {
  display: flex;
  margin: 20px 0;
}
</style>