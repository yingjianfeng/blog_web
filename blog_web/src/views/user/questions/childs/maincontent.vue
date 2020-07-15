<template>
  <div id="questionsmaincontent">
    <el-card class="box-card">
      <div class="top">
        <span class="top-title">Q&amp;A累计：</span>
        <span class="top-title-value">5</span>
      </div>
      <div class="item">
        <div class="item-left">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="item-right">
          <div class="item-right-top">【张小飞】 blog开发日记</div>
          <div class="item-right-bottom">
            <i class="el-icon-view item-right-bottom-views">50</i>
            <span class="item-right-bottom-time">2020-07-13 12:00:00</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-left">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="item-right">
          <div class="item-right-top">【张小飞】 blog开发日记</div>
          <div class="item-right-bottom">
            <i class="el-icon-view item-right-bottom-views">50</i>
            <span class="item-right-bottom-time">2020-07-13 12:00:00</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-left">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="item-right">
          <div class="item-right-top">【张小飞】 blog开发日记</div>
          <div class="item-right-bottom">
            <i class="el-icon-view item-right-bottom-views">50</i>
            <span class="item-right-bottom-time">2020-07-13 12:00:00</span>
          </div>
        </div>
      </div>

      <div class="item-page">
        <el-pagination layout="prev, pager, next" :total="30"></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "maincontent",
  data() {
    return {};
  }
};
</script>

<style>
#questionsmaincontent {
  background: white;
}
.top {
  margin-left: 10px;
  line-height: 30px;
  font-size: 15px;
}
.top-title {
  color: #769fcd;
}
.top-title-value {
  color: #769fcd;
}
.item {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}
.item-left {
  /* width: 6%; */
}
.item-right {
  width: 94%;
  border-bottom: 0.1px solid #e1d6d6;
}

.item-right-top {
  margin-top: 2px;
  font-size: 15px;
  font-weight: bold;
}
.item-right-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-left: 5px;
  margin-bottom: 4px;
}
.item-right-bottom-views {
  font-size: 12px;
  margin-left: 5px;
}
.item-right-bottom-time {
  font-size: 12px;
}
.item-page {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>