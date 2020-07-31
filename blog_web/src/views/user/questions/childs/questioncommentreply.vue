<template>
  <div id="questioncommentreply">
    <div class="blogcommentreplydiv" v-for="(item,i) in comments" :key="i">
      <div class="replaytop">
        <span class="name">{{item.user.nickname}}:</span>
        <span
          class="replayname"
          v-if="item.p_blogCommentvo.user!=null"
        >@{{item.p_blogCommentvo.user.nickname}}</span>
        <span class="repalycontent">{{item.questionComment.comment}}</span>
      </div>
      <div class="replaybottom">
        <span class="replaydate">{{item.questionComment.create_time}}</span>
        <i class="el-icon-chat-line-round" @click="doreply(item)">回复</i>
      </div>
    </div>
    <div class="new-reply" @click="doshowreplyinput">
      <i class="el-icon-edit"></i>添加新评论
    </div>

    <div class="reply-input-btn" v-show="isshowreplyinput">
      <el-input
        class="replyinput"
        type="textarea"
        v-model="reply.r_content"
        :autosize="{ minRows: 2, maxRows: 4}"
        :placeholder="reply.r_nickname"
      ></el-input>
      <div class="bottom">
        <el-button round plain @click="commit">点击发送</el-button>
      </div>
    </div>
    <!-- <blogcommentreplyinput :s_comments="s_comments" :r_item="ss_item" v-show="isshowreplyinput"></blogcommentreplyinput> -->
  </div>
</template>

<script>
export default {
  name: "questioncommentreply",
  props: ["p_id", "p_comment","question"],
  data() {
    return {
      comments: [],
      isshowreplyinput: false,
      reply: {
        r_nickname: "",
        r_content: "" //回复内容
        // r_u_id: "", //回复者
        // r_q_id: "", //问题id
        // r_p_id: "" //被回复的问题id
      }
    };
  },
  methods: {
    qrysecondcomment() {
      const that = this;
      that.$axios
        .get("/question/qrysecondcomment/" + that.p_id, {})
        .then(function(response) {
          console.log(response.data.data);
          that.comments = response.data.data;
        });
    },
    doshowreplyinput() {
      this.isshowreplyinput = !this.isshowreplyinput;
      this.reply.r_u_id = this.p_comment.user.id; //回复者
      this.reply.r_q_id = this.question.id; //问题id
      this.reply.r_p_id = this.p_comment.questionComment.id; //被回复的问题id
      this.reply.r_r_id = 0;
      this.reply.r_nickname = "回复：" + this.p_comment.user.nickname;
    },
    doreply(item) {
      this.isshowreplyinput = true;
      this.reply.r_u_id = this.p_comment.user.id; //回复者
      this.reply.r_q_id = this.question.id; //问题id
      this.reply.r_p_id =this.p_comment.questionComment.id; //被回复的问题id
      this.reply.r_r_id = item.questionComment.id;
      this.reply.r_nickname = "回复：" + item.user.nickname;
    },
    commit() {
      const that = this;
      that.$axios
        .post("/question/addcommentreply", {
          // u_id: this.reply.r_u_id,
          q_id: this.reply.r_q_id,
          p_id: this.reply.r_p_id,
          r_id: this.reply.r_r_id,
          r_content: this.reply.r_content
        })
        .then(function(response) {
          console.log(response);
          let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
          that.$router.push(NewPage);
          that.$router.go(-1);
        });
      console.log("回复");
    }
  },
  created() {
    this.qrysecondcomment();
  }
};
</script>

<style>
#questioncommentreply {
  padding-left: 15px;
  border-left: 1px solid gray;
}
.blogcommentreplydiv {
  margin-top: 10px;

  margin-bottom: 10px;
}
.name {
  color: #4398ed;
}
.replayname {
  color: #4398ed;
}
.repalycontent {
}
.replaydate {
  color: gray;
  font-size: 15px;
  margin-right: 5px;
}
</style>