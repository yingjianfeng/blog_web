<template>
  <div id="indexmaincontent">
    <el-card class="box-card item">
      <div class="title">问答</div>
      <div class="content">
        提供高质量的问答服务，致力于解决社区中小伙伴们遇到的问题，并给出
        解决方案，做到学有所伴，问有所答！
      </div>
      <div class="btndiv">
        <el-button class="btndivbtn questionsbtn" @click="topage('questions')">
          前往
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </div>
    </el-card>
    <el-card class="box-card item">
      <div class="title">博客</div>
      <div class="content">
        给小伙伴提供记录自己学习的地方，推出个人博客，优化博客样式
        ，更加方便的管理和展现文章，同时优质的文章会被更多人看到！
      </div>
      <div class="btndiv">
        <el-button class="btndivbtn blogbtn" @click="topage('blog/list')">
          前往
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </div>
    </el-card>
    <el-card class="box-card item">
      <div class="title">维护中心</div>
      <div class="content">
        让小伙伴发现的bug及时被我们发现，及时解决，也可以让小伙伴成为"需求管理
        员",可行的话，我们会考虑增加你提供的功能模块!
      </div>
      <div class="btndiv">
        <el-button class="btndivbtn bugbtn" @click="topage('bug')">
          前往
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "maincontent",
  data() {
    return {};
  },
  methods: {
    topage(name) {
      console.log(name);
      this.$router.push("/user/" + name);
    }
  }
};
</script>

<style >
#indexmaincontent {
  width: 100%;

  display: flex;
  flex-direction: row;
}

#indexmaincontent .item {
  width: 33%;
}
.title {
  font-size: 30px;
}
.content {
  font-size: 15px;
  margin-top: 10px;
  color: gray;
}
.btndiv {
  margin-top: 10px;
}
.btndivbtn {
  width: 80px;
  height: 30px;
  padding: 0px;
  line-height: 30px;
}
.questionsbtn {
  color: white;
  background: #769fcd;
}
.blogbtn {
  color: white;
  background: #67c23a;
}
.bugbtn {
  color: white;
  background: #f56c6c;
}
</style>