<template>
  <div>
    <el-input
      class="replyinput"
      type="textarea"
      v-model="r_content"
      :autosize="{ minRows: 2, maxRows: 4}"
      :placeholder="r_nickname"
    ></el-input>
    <div class="bottom">
      <el-button round plain @click="submit">点击发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogcommentreplyinput",
  props: ["r_item", "s_comments"],
  data() {
    return {
      r_content: "",
      r_nickname: "回复：" + this.r_item.user.nickname
    };
  },
  watch: {
    r_item: {
      handler(newValue, oldValue) {
        this.r_content = "";
        this.r_nickname = "回复：" + this.r_item.user.nickname;
      },
      deep: true
    }
  },
  methods: {
    submit() {
      const that = this;
      that.$axios
        .post("/blog/addsecondcomment/", {
          content: that.r_content,
          r_id: that.r_item.blogComment.id,
          b_id: that.r_item.blogComment.b_id,
          p_id: that.r_item.blogComment.p_id
        })
        .then(function(response) {
          var vo = response.data.data;
          vo.p_blogCommentvo = that.r_item;
          that.s_comments.push(vo);
          
        });
    }
  }
};
</script>

<style>
</style>