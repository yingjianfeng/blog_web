<template>
  <div id="blogedit">
    <el-col :xs="1" :sm="3" :md="3" :lg="3"></el-col>
    <el-col :xs="22" :sm="18" :md="18" :lg="18">
      <el-collapse-transition>
        <mavon-editor></mavon-editor>
      </el-collapse-transition>
    </el-col>

    <el-col :xs="0" :sm="3" :md="3" :lg="3"></el-col>
  </div>
</template>

<script>
export default {
  name: "blogedit",
  data() {
    return {};
  }
};
</script>

<style>
#blogedit {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>