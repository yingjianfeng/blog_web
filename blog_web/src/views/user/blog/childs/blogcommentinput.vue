<template>
  <div id="blogcommentinput">
    <!-- <span class="commentspan">评论一下吧</span> -->
    <el-input 
    class="replyinput"
      type="textarea"
      v-model="comment"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="写下你的评论"
    ></el-input>
    <div class="bottom">
      <el-button @click="submitcomment" round plain>点击发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogcommentinput",
  props: ["blog", "flag"],
  data() {
    return {
      comment: ""
    };
  },
  methods: {
    submitcomment() {
      const that = this;
      that.$axios
        .get("/blog/addfirstcomment/" + that.blog.id + "/" + that.comment)
        .then(function(response) {
          ++that.flag.first;
          //刷新页面
          let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
          that.$router.push(NewPage);
          that.$router.go(-1);
        });
    }
  }
};
</script>

<style>
#blogcommentinput {
}
#blogcommentinput .bottom {
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row-reverse;
}
.commentspan {
  color: gray;
  size: 18px;
}
.replyinput{
    background: gray;
}
</style>