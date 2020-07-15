<template>
  <div id="blog">
    <el-col :xs="1" :sm="1" :md="1" :lg="3"></el-col>
    <el-col :xs="22" :sm="4" :md="4" :lg="17">
      <maincontent></maincontent>
    </el-col>
    <el-col :xs="1" :sm="1" :md="1" :lg="1"></el-col>
    <el-col :xs="0" :sm="1" :md="1" :lg="3"></el-col>
  </div>
</template>

<script>
import maincontent from "@/views/user/blog/childs/maincontent";
export default {
  name: "blog",
  data() {
    return {};
  },
  components: {
    maincontent
  }
};
</script>

<style>
#blog{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>