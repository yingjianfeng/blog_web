<template>
  <div id="blogedit">
    <el-col :xs="1" :sm="3" :md="3" :lg="3"></el-col>
    <el-col :xs="22" :sm="18" :md="18" :lg="18">
      <div class="blogedit-top">
        <el-col :xs="24" :sm="15" :md="15" :lg="15">
          <div class="blogedit-top-left">
            <div class="blogedit-top-left-itme-title mt">
              <span class="blogedit-top-left-itme-span">标题</span>
              <el-input
                v-model="blog.title"
                type="text"
                placeholder="请想个标题吧"
                maxlength="10"
                show-word-limit
              ></el-input>
            </div>
            <div class="blogedit-top-left-itme-intro mt">
              <span class="blogedit-top-left-itme-span">概述</span>
              <el-input
                v-model="blog.intro"
                type="textarea"
                placeholder="请简短概述"
                maxlength="30"
                show-word-limit
              ></el-input>
            </div>
          </div>
        </el-col>
        <el-col :xs="0" :sm="9" :md="9" :lg="9">
          <div class="blogedit-top-right"></div>
        </el-col>
      </div>

      <el-collapse-transition>
        <mavon-editor
          ref="md"
          v-model="blog.content"
          @imgAdd="imgadd"
          @imgDel="imgdel"
          @save="save"
        ></mavon-editor>
      </el-collapse-transition>
    </el-col>

    <el-col :xs="0" :sm="3" :md="3" :lg="3"></el-col>
  </div>
</template>

<script>
import timeline from "@/views/user/blog/childs/timeline";
export default {
  name: "blogedit",
  data() {
    return {
      imgs: [],
      blog: {}
    };
  },
  components: {
    timeline
  },
  methods: {
    imgadd(pos, file) {
      var formdata = new FormData();
      //这里定义为image，服务端需要用这个名字去接收
      formdata.append("file", file);

      const that = this;
      that
        .$axios({
          url: "/blog/uploadimg",
          method: "post",
          data: formdata,
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          var url = response.data.data;

          this.$refs.md.$img2Url(pos, url);
        });
    },
    imgdel(pos) {
      const that = this;
      var name = pos[1].name;
      console.log(name);
      that.$axios.get("/blog/delimg/" + name).then(function(response) {
        if (response == null) {
          return;
        }
        that.bloginfo = response.data.data;
      });
    },
    save(value, render) {
      console.log(value);
      const that = this;
      that.blog.content = value;
      that.blog.html_content = render;
      that.$axios
        .post("/blog/addblog", {
          title: that.blog.title,
          intro: that.blog.intro,
          content: that.blog.content,
          html_content: that.blog.html_content
        })
        .then(function(response) {
          if (response.data.code == 200) {
            that.$message.success("发布成功拉");
          } else {
            that.$message.error("发送失败,失败原因:" + response.data.$message);
          }
        });
    }
  }
};
</script>

<style >
#blogedit {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.blogedit-top {
  display: flex;
  justify-content: space-between;
}
.mt {
  margin: 10px;
}
/* .blogedit-top-left {
  width: 70%;
} */
.blogedit-top-left-itme-title {
  display: flex;
  flex-direction: row;
}
.blogedit-top-left-itme-intro {
  display: flex;
  flex-direction: row;
}
.blogedit-top-left-itme-span {
  display: block;
  min-width: 50px;
  line-height: 40px;
  color: gray;
}
</style>