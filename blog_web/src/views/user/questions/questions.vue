<template>
  <div id="questions">
    <el-col :xs="1" :sm="1" :md="1" :lg="3"></el-col>
    <el-col :xs="22" :sm="4" :md="4" :lg="13">
      <maincontent></maincontent>
    </el-col>
    <el-col :xs="1" :sm="1" :md="1" :lg="1"></el-col>
    <el-col :xs="0" :sm="4" :md="4" :lg="4">
      <tips></tips>
    </el-col>
    <el-col :xs="0" :sm="1" :md="1" :lg="3"></el-col>
  </div>
</template>

<script>
import tips from "@/views/user/questions/childs/tips";
import maincontent from "@/views/user/questions/childs/maincontent";
export default {
  name: "questions",
  components: {
    tips,
    maincontent
  },
  data() {
    return {};
  }
};
</script>

<style>
#questions {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>