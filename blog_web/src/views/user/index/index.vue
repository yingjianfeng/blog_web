<template>
  <div id="index">
    <div class="index-top">
      <el-col :xs="0" :sm="1" :md="1" :lg="2"></el-col>
      <el-col :xs="24" :sm="22" :md="22" :lg="20">
        <carousel class="top-carousel"></carousel>
      </el-col>
      <el-col :xs="0" :sm="1" :md="1" :lg="2"></el-col>
    </div>
    <div class="index-main">
      <el-col :xs="1" :sm="1" :md="1" :lg="3"></el-col>
      <el-col :xs="22" :sm="22" :md="22" :lg="18">
        <maincontent></maincontent>
    
      </el-col>
      <el-col :xs="1" :sm="1" :md="1" :lg="3"></el-col>
    </div>
  </div>
</template>

<script>
import carousel from "@/views/user/index/childs/carousel";
import maincontent from "@/views/user/index/childs/maincontent";

export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    carousel,
    maincontent
  }
};
</script>

<style>
#index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
.index-top {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.index-main {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
</style>