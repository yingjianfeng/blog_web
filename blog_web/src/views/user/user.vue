<template>
    <div>
      <topbar></topbar>  
        
        <div class="c"></div>
    </div>

</template>

<script>
import topbar from '@/components/topbar'
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
.c{
  width: 100%;
  height: 1000px;
  background: rgb(148, 159, 165);
}
</style>