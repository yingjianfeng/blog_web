<template>
  <div id="questionshow">
    <div class="questioninfo">
      <div class="top">
        <span class="title">{{question.title}}</span>
      </div>
      <div class="center">
        <span class="nickname">
          <i class="el-icon-edit"></i>
          {{user.nickname}}
        </span>
        <span class="create_time">
          <i class="el-icon-time"></i>
          {{question.create_time}}
        </span>
      </div>
      <div class="bottom">
        <div class="content">{{question.content}}</div>
      </div>
    </div>
    <div class="resolve-comment">
      <span>正确解答</span>
    </div>
    <div class="reply">
      <el-input
        v-model="content"
        class="replyinput"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="写下你的评论"
      ></el-input>
      <div class="bottom">
        <el-button @click="addreply" round plain>点击发送</el-button>
      </div>
    </div>
    <div class="all-comment">
      <div class="blogcomment" v-for="(item,i) in comment" :key="i">
        <div class="comment-left">
          <el-avatar class="avatar" :src="item.user.head_img"></el-avatar>
        </div>
        <div class="comment-right">
          <div class="comment-right-top">
            <span class="nickname">{{item.user.nickname}}</span>
            <span class="time">{{item.questionComment.create_time}}</span>
          </div>
          <div class="comment-right-center">{{item.questionComment.comment}}</div>
          <div class="comment-right-bottom">
            <i class="el-icon-chat-line-round">{{item.commoent_number}}</i>
            &nbsp;
            <i class="el-icon-thumb">{{item.comment_like}}</i>
          </div>
          <questioncommentreply
            :question="question"
            :p_comment="item"
            :p_id="item.questionComment.id"
          ></questioncommentreply>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questioncommentreply from "@/views/user/questions/childs/questioncommentreply";
export default {
  name: "questionshow",
  components: {
    questioncommentreply
  },
  data() {
    return {
      question: JSON.parse(this.$route.query.question).question,
      user: JSON.parse(this.$route.query.question).user,
      content: "",
      comment: [] //一级评论
    };
  },
  methods: {
    addreply() {
      const that = this;
      that.$axios
        .post("/question/addquestionreply", {
          comment: that.content,
          q_id: that.question.id
        })
        .then(function(response) {
          console.log(response);
          let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
          that.$router.push(NewPage);
          that.$router.go(-1);
        });
    },
    qryfirstcomment() {
      const that = this;
      that.$axios
        .get("/question/qryfirstcomment/" + that.question.id, {})
        .then(function(response) {
          that.comment = response.data.data;
          console.log("comment");
          console.log(response.data.data);
          console.log("comment");
        });
    },
    qrysecondcomment(id) {
      const that = this;
      var content = ["xx", "zz"];
      that.$axios
        .get("/question/qrysecondcomment/" + id, {})
        .then(function(response) {
          console.log(response.data.data);
          that.content = response.data.data;
        });
      console.log(content);
      return this.content;
    }
  },
  computed: {
    // qrysecondcomment: function() {
    //   //所有计算属性都以函数的形式写在Vue实例内的computed选项内，最终返回计算后的结果
    //   return function(id) {
    //     const that = this;
    //     var content = ["xx", "zz"];
    //     that.$axios
    //       .get("/question/qrysecondcomment/" + that.id, {})
    //       .then(function(response) {
    //         console.log(response.data.data);
    //         that.content = response.data.data;
    //       });
    //     return content;
    //   };
    // }
  },
  created() {
    this.qryfirstcomment();
  }
};
</script>

<style>
#questionshow {
  background: white;
}
.questioninfo {
}
.questioninfo .top {
  text-align: center;
}
.questioninfo .title {
  line-height: 50px;
  font-size: 35px;
}
.questioninfo .center {
  width: 100%;
  display: flex;
  justify-content: center;
}
.bottom .content {
  margin-top: 20px;
  font-size: 23px;
  background-color: #aed9d3;
  padding-left: 10px;
  line-height: 40px;
  text-align: center;
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
</style>