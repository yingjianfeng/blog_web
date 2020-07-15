<template>
  <el-card id="blogmaincontent">
    <div class="blog-top">
      <span class="blog-top-title">标题</span>
      <div class="blog-top-bottom">
        <el-col :xs="0" :sm="1" :md="1" :lg="1"></el-col>
        <el-col :xs="24" :sm="10" :md="10" :lg="10">
          <div class="blog-top-bottom-left">
            <span class="blog-top-bottom-left-date">2020-07-15 20:00:00</span>
            <span class="blog-top-bottom-left-name">张小飞</span>
            <i class="el-icon-view">50</i>
          </div>
        </el-col>
         <el-col :xs="0" :sm="8" :md="8" :lg="8"></el-col>
        <el-col :xs="0" :sm="5" :md="5" :lg="5">
          <div class="blog-top-bottom-right">
            <i class="el-icon-edit">编辑</i>
            <i class="el-icon-share">分享</i>
            <i class="el-icon-delete">删除</i>
          </div>
        </el-col>
       
      </div>
    </div>

    <div class="blog-main">内容</div>
    <div class="blog-bottom">底部</div>
  </el-card>
</template>

<script>
export default {
  name: "maincontent",
  data() {
    return {};
  }
};
</script>

<style >
#blogmaincontent {
  background: white;
  min-height: 600px;
}
.blog-top {
  width: 100%;
  border-bottom: 1px solid #000;
  /* background: gray; */
}
.blog-top-title {
  color: black;
  font-size: 30px;
}
.blog-top-bottom {
  /* display: flex;
     justify-content:  space-around; */
  width: 100%;
   display: flex;
  flex-direction: row;
}
.blog-top-bottom-left{
    font-size: 16px;
    line-height: 30px;
}
.blog-top-bottom-left-date{
    color: gray;
    font-size: 13px;
}
.blog-top-bottom-left-name{
    color: #769fcd;
    font-size: 13px;
}
</style>