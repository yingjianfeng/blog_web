<template>
  <div id="index">
    <div class="main">
     
        <el-col :xs="0" :sm="24" :md="24" :lg="2"></el-col>
        <el-col :xs="0" :sm="24" :md="24" :lg="4">
          <intro></intro>
        </el-col>
        <el-col :xs="1" :sm="24" :md="24" :lg="1"></el-col>
        <el-col :xs="22" :sm="24" :md="24" :lg="12">
          <maincontent></maincontent>
        </el-col>
        <el-col :xs="1" :sm="24" :md="24" :lg="5"></el-col>
      
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