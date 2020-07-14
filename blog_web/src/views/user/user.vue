<template>
  <div id="user">
    <topbar></topbar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import topbar from "@/components/topbar";

export default {
  name: "user",
  components: {
    topbar
  },
  data() {
    return {};
  }
};
</script>

<style>
#user{
  width: 100%;
  min-height: 100%;
}
.main{
  width: 100%;
  min-height: 100%;
  margin-top: 10px;
}
</style>