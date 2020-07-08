<template>
  <div>
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

.main{
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
</style>