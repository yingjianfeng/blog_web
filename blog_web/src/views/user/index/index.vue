<template>
  <div id="index">
    <div class="main">
      <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
      <el-col :xs="0" :sm="4" :md="4" :lg="4">
        <intro></intro>
      </el-col>
      <el-col :xs="1" :sm="1" :md="1" :lg="1"></el-col>
      <el-col :xs="22" :sm="17" :md="17" :lg="15">
        <maincontent></maincontent>
      </el-col>
      <el-col :xs="1" :sm="0" :md="0" :lg="2"></el-col>
    </div>
  </div>
</template>

<script>
import intro from "@/views/user/index/childs/intro";
import maincontent from "@/views/user/index/childs/maincontent";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    intro,
    maincontent
  }
};
</script>

<style>
#index {
  /* background: gray; */
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  justify-content: flex-start;
}
</style>