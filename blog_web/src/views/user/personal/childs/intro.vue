<template>
  <div id="intro">
    <el-card class="box-card">
      <el-avatar :size="80">张小飞</el-avatar>
      <div class="tag">
        <el-tag type>普通用户</el-tag>
      </div>
      <div class="introduce">
        <span>张小飞个人简介张小飞个人简介张小飞个人简介</span>
      </div>
      <el-button plain class="qrcode" @click="showqrcode">二维码</el-button>
      <el-image-viewer v-if="isshowqrcode" :on-close="closeshowqrcode"  class="qrcodepng"  
      :url-list="qrcodes"></el-image-viewer >
      <div class="data">
        <div>
          <span>博客</span>
          <el-divider direction="vertical"></el-divider>
          <span>问题</span>
          <el-divider direction="vertical"></el-divider>
          <span>回复</span>
        </div>
        <el-divider></el-divider>
        <div>
          <span>20</span>
          <el-divider direction="vertical"></el-divider>
          <span>30</span>
          <el-divider direction="vertical"></el-divider>
          <span>40</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
 import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
  name: "intro",
   components: { ElImageViewer },
  data() {
    return {
      isshowqrcode:false,
      qrcodes:[
         'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
         'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    };
  },
  methods:{
    showqrcode(){
      console.log("showqrcode")
      this.isshowqrcode = true;
    },
    closeshowqrcode(){
       this.isshowqrcode = false;
    }
  }
};
</script>

<style scoped>
.box-card {
  display: flex;
  flex-flow: column;
  text-align: center;
}
.el-button {
  height: 30px;
  width: 90%;
  padding: 0px;
  line-height: 30px;
}
.data {
  /* height: 200px; */
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 200px;
  margin: 10px 0;
  margin: 10px auto;
}
.el-tag {
  height: 20px;
  line-height: 20px;
}
.tag {
  margin-top: 6px;
}
.introduce {
  margin-top: 6px;
  font-size: 12px;
  color: gray;
}
.qrcode {
  margin-top: 12px;
}
.data {
  margin-top: 30px;
}
.data span {
  font-size: 15px;
  color: gray;
  display: inline-block;
  width: 20%;
  text-align: center;
}
.qrcodepng{
  margin: 50px auto;
  width: 400px;
  height:  300px;
}

</style>