<template>
  <div id="tips">
    <el-button class="tipsbtn" @click="toedit">发布博客</el-button>
    <el-card class="box-card pact">
      <span class="rule-title">社区公约</span>
      <p class="rule-content">提问内容描述一定要清楚，回答尽量靠近主题，禁止瞎水社区，违者暂停账号使用</p>
    </el-card>
    <el-card class="box-card tag">
     
      <el-tag  class="mt fontw"
      v-for="(item,index) in tags"
        :key="index"
        :type='item.color'
      >{{item.name}}</el-tag>
     
    </el-card>
    <el-card class="box-card friendlink">
      <span class="link-title">友情链接</span>
      <div class="link-title-value">
        <el-link href="https://element.eleme.io" target="_blank">张小飞的博客</el-link>
        <el-link type="primary">关小云的家</el-link>
        <el-link type="success">刘小备的秘密基地</el-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "tips",
  data() {
    return {
      tags:[]
    };
  },
  methods:{
    
    toedit(){
      this.$router.push("/user/blogedit");
    },
    qrytag(){
      const that = this;
      that.$axios
        .get("/tag/qrytag/-1")
        .then(function(response) {
          if(response==null){
              return;
          }
         
         
          that.tags = response.data.data;
        });
    }
  },
  created(){
    this.qrytag()
  }
};
</script>

<style >
.mt {
  margin-bottom: 9px;
}
.fontw{
  /* color: white !important; */
}
#tips {
  /* background: gray; */
}
.tipsbtn {
  width: 100%;
  background: #769fcd;
  color: white;
}
.pact {
  margin-top: 10px;
}
.tag {
  margin-top: 10px;
}
.friendlink {
  margin-top: 10px;
}
.rule-title {
  display: block;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
  color: red;
}
.rule-content {
  font-size: 15px;
  text-indent: 2em;
}
.link-title{
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #769fcd;
}
.link-title-value{
  
}
.link-title-value a{
  margin-left: 5px;
}
</style>