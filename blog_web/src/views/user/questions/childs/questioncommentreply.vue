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
      <!-- <blogcommentreplyinput :s_comments="s_comments" :r_item="ss_item" v-show="isshowreplyinput"></blogcommentreplyinput> -->
    </div>
</template>

<script>
export default {
  name: "questioncommentreply",
  props: ["p_id"],
  data() {
    return {
      comments: [],
      isshowreplyinput: false
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
    },
    doreply(item) {
      this.isshowreplyinput = true;
      this.ss_item = item;
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