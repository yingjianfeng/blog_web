<template>
  <div id="bloglist">
    <el-card class="box-card">
      <div class="top">
        <span class="top-title">Q&amp;A累计：</span>
        <span class="top-title-value">{{bloginfo.total}}</span>
      </div>

      <div
        class="item"
        @click="showblogcontent(item)"
        v-for="(item,index) in bloginfo.blogs"
        :key="index"
      >
        <div class="item-left">
          <el-avatar :src="item.user.head_img"></el-avatar>
        </div>
        <div class="item-right">
          <div class="item-right-top">{{item.blog.title}}</div>
          <div class="item-right-bottom">
            <i class="el-icon-view item-right-bottom-views">{{item.visit_times}}</i>
            <span class="item-right-bottom-time">{{item.blog.create_date}}</span>
          </div>
        </div>
      </div>

      <div class="item-page">
        <el-pagination
          layout="prev, pager, next"
          :page-size="bloginfo.size"
          :total="bloginfo.total"
          @prev-click="pre"
          @next-click="next"
          @current-change="pagechange"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "bloglist",
  data() {
    return {
      pagenumber: 1,
      pagesize: 3,
      bloginfo: {
        blogs: {},
        current: 1,
        size: 1,
        total: 5
      }
    };
  },
  methods: {
    qryblogs(pagenumber, pagesize) {
      const that = this;
      that.$axios
        .get("/blog/qryblogs/" + pagenumber + "/" + pagesize)
        .then(function(response) {
          if(response==null){
              return;
          }
          that.bloginfo = response.data.data;
          console.log(that.bloginfo);
        });
    },
    showblogcontent(blog) {
      const that = this;
      that.$router.push({
        path: "/user/blog/show",
        query: {
          blog: JSON.stringify(blog)
        }
      });
    },
    pre() {
      // console.log("pre");
      this.qryblogs(--this.pagenumber, this.pagesize);
    },
    next() {
      // console.log("next");
      this.qryblogs(++this.pagenumber, this.pagesize);
    },
    pagechange(cpage) {
      this.pagenumber = cpage;
      this.qryblogs(this.pagenumber, this.pagesize);
    }
  },
  created() {
    this.qryblogs(this.pagenumber, this.pagesize);
  }
};
</script>

<style>
#bloglist {
  background: white;
}

.top {
  margin-left: 10px;
  line-height: 30px;
  font-size: 15px;
}
.top-title {
  color: #769fcd;
}
.top-title-value {
  color: #769fcd;
}
.item {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  box-sizing: border-box;
}
.item:hover {
  border-right: 0.8px solid #769fcd;
}
.item-left {
  /* width: 6%; */
}
.item-right {
  width: 94%;
  border-bottom: 0.1px solid #e1d6d6;
}

.item-right-top {
  margin-top: 2px;
  font-size: 15px;
  font-weight: bold;
}
.item-right-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-left: 5px;
  margin-bottom: 4px;
}
.item-right-bottom-views {
  font-size: 12px;
  margin-left: 5px;
}
.item-right-bottom-time {
  font-size: 12px;
}
.item-page {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.el-tag {
  height: 15px;
  line-height: 15px;
  font-size: 10px;
}
</style>