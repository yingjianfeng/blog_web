<template>
  <div id="blogcommentreply">
    <div class="blogcommentreplydiv" v-for="(item,i) in s_comments" :key="i">
      <div class="replaytop">
        <span class="name">{{item.user.nickname}}:</span>

        <span
          class="replayname"
          v-if="item.p_blogCommentvo.user!=null"
        >@{{item.p_blogCommentvo.user.nickname}}</span>
        <span class="repalycontent">{{item.blogComment.content}}</span>
      </div>
      <div class="replaybottom">
        <span class="replaydate">{{item.blogComment.create_date}}</span>
        <i class="el-icon-chat-line-round" @click="doreply(item)">回复</i>
      </div>
    </div>
    <div class="new-reply" @click="doshowreplyinput">
      <i class="el-icon-edit"></i>添加新评论
    </div>
    <blogcommentreplyinput :s_comments= 's_comments' :r_item="ss_item" v-show="isshowreplyinput"></blogcommentreplyinput>
  </div>
</template>

<script>
import blogcommentreplyinput from "@/views/user/blog/childs/blogcommentreplyinput";
export default {
  name: "blogcommentreply",
  props: ["s_item",'ramdom'],
  components: {
    blogcommentreplyinput
  },
  data() {
    return {
      ss_item: this.s_item,
      s_comments: {},
      isshowreplyinput: false
    };
  },
  methods: {
    qrysecondcomment() {
      const that = this;
      that.$axios
        .get("/blog/qrysecondcomment/" + that.s_item.blogComment.id)
        .then(function(response) {
          that.s_comments = response.data.data;
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
  },
  watch: {
    ramdom(newValue, oldValue) {
        this.fc = this.firstcomments;
      }
  }
};
</script>

<style>
#blogcommentreply {
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