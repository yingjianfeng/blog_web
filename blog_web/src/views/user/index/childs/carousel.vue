<template>
  <div id="carousel">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in carousel" :key="item">
       <img :src="item" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      carousel :[]
    };
  },
  methods: {
    qrycarousel() {
      const that = this;
      that.$axios.get("/index/qrycarousel").then(function(response) {
        var vo = response.data.data;
        console.log(vo);
        that.carousel =vo;
      });
    }
  },
  created(){

    this.qrycarousel()
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(n) {
  background-color: #769fcd;
}

.el-carousel__item:nth-child(2n) {
  background-color: #67c23a;
}
.el-carousel__item:nth-child(3n) {
  background-color: #f56c6c;
}
</style>