<template>
  <el-card id="blogedit">
    <div class="blog-top">
      <span class="blog-top-title">{{blog.title}}</span>
      <div class="blog-top-bottom">
        <el-col :xs="0" :sm="1" :md="1" :lg="1"></el-col>
        <el-col :xs="24" :sm="10" :md="10" :lg="10">
          <div class="blog-top-bottom-left">
            <span class="blog-top-bottom-left-name">{{user.name}}</span>
            <span class="blog-top-bottom-left-date">{{blog.create_date}}</span>
            <i class="el-icon-view">{{visit_times}}</i>
          </div>
        </el-col>
        <el-col :xs="0" :sm="8" :md="8" :lg="7"></el-col>
        <el-col :xs="0" :sm="5" :md="5" :lg="6">
          <div class="blog-top-bottom-right">
            <i class="el-icon-edit">编辑</i>
            <i class="el-icon-share">分享</i>
            <i class="el-icon-delete">删除</i>
          </div>
        </el-col>
      </div>
    </div>

    <div class="blog-main">
      <mavon-editor
        ref="md"
        v-model="blog.content"
        :toolbarsFlag="false"
        defaultOpen="preview"
        :subfield="false"
        previewBackground="white"
        :boxShadow="false"
      ></mavon-editor>
    </div>
    <el-divider></el-divider>
    <div class="blog-bottom">
      <blogcommentinput :flag="flag" :blog="blog"></blogcommentinput>
      <blogcomment :firstcomments="firstcomments"></blogcomment>
    </div>
  </el-card>
</template>

<script>
import blogcommentinput from "@/views/user/blog/childs/blogcommentinput";
import blogcomment from "@/views/user/blog/childs/blogcomment";
export default {
  name: "blogshow",
  components: {
    blogcomment,
    blogcommentinput
  },
  computed: {
    jsonflag() {
      return JSON.parse(JSON.stringify(this.flag));
    }
  },
  data() {
    return {
      flag: {
        first: 1
      },
      blog: JSON.parse(this.$route.query.blog).blog,
      visit_times: JSON.parse(this.$route.query.blog).visit_times,
      user: JSON.parse(this.$route.query.blog).user,
      firstcomments: []
    };
  },
  watch: {
    jsonflag: {
      handler(newValue, oldValue) {
        const that = this;
        if (oldValue.first < newValue.first) {
          that.qryfirstcomment();
        }

        //
      },
      deep: true
    }
  },
  methods: {
    qryfirstcomment() {
      ++this.index;
      const that = this;
      var id = that.blog.id;
      that.$axios.get("/blog/qryfirstcomment/" + id).then(function(response) {
        that.firstcomments = response.data.data;
      });
    },
    addblogvisit() {
      console.log("增加次数");
      const that = this;
       var id = that.blog.id;
      that.$axios.get("/blog/addblogvisittimes/" + id).then(function(response) {
       
        console.log(response.data);
        ++that.visit_times
      });
    }
  },
  created() {
    this.qryfirstcomment();
    this.addblogvisit();
  }
};
</script>

<style >
#blogmaincontent {
  background: white;
  min-height: 600px;
}
.blog-top {
  width: 100%;
  border-bottom: 1px solid #000;
  /* background: gray; */
}
.blog-main {
  min-height: 50px;
}
.blog-bottom {
  width: 100%;
}
.blog-top-title {
  color: black;
  font-size: 30px;
}
.blog-top-bottom {
  /* display: flex;
     justify-content:  space-around; */
  width: 100%;
  display: flex;
  flex-direction: row;
}
.blog-top-bottom-left {
  font-size: 16px;
  line-height: 30px;
}
.blog-top-bottom-left-date {
  color: gray;
  font-size: 13px;
}
.blog-top-bottom-left-name {
  color: #769fcd;
  font-size: 13px;
}
</style>