<template>
  <div id="blog">
    <el-col :xs="1" :sm="1" :md="1" :lg="3"></el-col>
    <el-col :xs="22" :sm="4" :md="4" :lg="13">
      <el-collapse-transition>
     <router-view></router-view>
      </el-collapse-transition>
    </el-col>
    <el-col :xs="1" :sm="1" :md="1" :lg="1"></el-col>
    <el-col :xs="0" :sm="4" :md="4" :lg="4">
      <tips></tips>
    </el-col>
    <el-col :xs="0" :sm="1" :md="1" :lg="3"></el-col>
  </div>
</template>

<script>
import bloglist from "@/views/user/blog/childs/bloglist";
import tips from "@/views/user/blog/childs/tips";
export default {
  name: "blog",
  data() {
    return {};
  },
  components: {
    tips,
    bloglist
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