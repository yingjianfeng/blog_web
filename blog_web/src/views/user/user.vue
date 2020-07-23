<template>
  <div id="user">
    <topbar :isshow="showleftbar"></topbar>
    <leftbar :isshow="showleftbar"></leftbar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import topbar from "@/components/topbar";
import leftbar from "@/components/leftbar";
export default {
  name: "user",
  components: {
    topbar,
    leftbar
  },
  data() {
    return {
      showleftbar: {
        isshow: false
      }
    };
  }
};
</script>

<style>
#user {
  width: 100%;
  min-height: 100%;
}
.main {
  width: 100%;
  min-height: 100%;
  margin-top: 10px;
}
</style>