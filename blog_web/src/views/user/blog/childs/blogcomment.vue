<template>
  <div class="comment-card">
    <div class="blogcomment" v-for="(item,i) in firstcomments" :key="i">
      <div class="comment-left">
        <el-avatar class="avatar" :src="item.user.head_img"></el-avatar>
      </div>
      <div class="comment-right">
        <div class="comment-right-top">
          <span class="nickname">{{item.user.nickname}}</span>
          <span class="time">{{item.blogComment.create_date}}</span>
        </div>
        <div class="comment-right-center">{{item.blogComment.content}}</div>
        <div class="comment-right-bottom">
          <i class="el-icon-chat-line-round">{{item.commoent_number}}</i>
          &nbsp;
          <i class="el-icon-thumb">{{item.comment_like}}</i>
        </div>
        <blogcommentreply :s_item="item" :ramdom='Math.ramdom'></blogcommentreply>
        <!-- <blogcommentinput></blogcommentinput> -->
      </div>
    </div>
  </div>
</template>

<script>
blogcommentreply;
import blogcommentinput from "@/views/user/blog/childs/blogcommentinput";
import blogcommentreply from "@/views/user/blog/childs/blogcommentreply";
export default {
  name: "blogcomment",
  components: {
    blogcommentinput,
    blogcommentreply
  },
  props: ["firstcomments"],
  data() {
    return {
    };
  },
  watch: {
    // firstcomments: {
    //   handler(newValue, oldValue) {
    //     this.fc = this.firstcomments;
    //   },
    //   deep: true
    // }
  }
};
</script>

<style>
.comment-card {
}
.blogcomment {
  padding-bottom: 5px;
  padding-right: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  border-bottom: 1px solid #769fcd;
  /* box-shadow: 3px 3px 3px #769fcd;
  border-top: 1px solid #769fcd;
  border-left: 1px solid #769fcd; */
  margin-bottom: 15px;
}

.comment-left {
  width: 10%;
  /* background: gray; */
}
.comment-right {
  width: 90%;
  /* background: rgb(215, 232, 235); */
  display: flex;
  flex-direction: column;
}
.comment-right-top .nickname {
  color: gray;
  font-size: 20px;
}
.comment-right-top .time {
  color: #769fcd;
  font-size: 15px;
}
.comment-right-center {
  min-height: 15px;
  word-wrap: break-word;
  word-break: break-all;
  padding-left: 5px;
  padding-right: 5px;
  /* width: 99%; */
}

.comment-right-bottom {
  padding-right: 5px;
  /* display: flex;
  flex-direction: row-reverse; */
}
.comment-left {
  line-height: 80px;
  text-align: center;
}
.avatar {
}
</style>