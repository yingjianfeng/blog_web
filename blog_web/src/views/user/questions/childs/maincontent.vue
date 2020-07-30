<template>
  <div id="questionsmaincontent">
    <el-card class="box-card">
      <div class="top">
        <span class="top-title">Q&amp;A累计：</span>
        <span class="top-title-value">5</span>
      </div>
      
      <div class="item" v-for="(item,key) in questions.question" :key="key" @click="toshow(item)">
        
        <div class="item-left">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="item-right">
          <div class="item-right-top">{{item.question.title}}</div>
          <div class="item-right-content">{{item.question.content}}</div>
          <div class="item-right-bottom">
            <el-tag type="danger" v-if="item.question.resolve_id !=0">未解决</el-tag>
            <el-tag type="success" v-else>已解决</el-tag>
            <span class="item-right-bottom-time">{{item.question.create_time}}</span>
          </div>
        </div>
      </div>

      <div class="item-page">
        <el-pagination 
        layout="prev, pager, next"
          :page-size="questions.size"
          :total="questions.total"
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
  name: "maincontent",
  data() {
    return {
      questions:{
        question:[],
        size:3,
        total:5,
        pagenumber:1
      }
    };
  },
  methods: {
    qryquestion(pagenumber,size) {
      const that = this;
      that.$axios.get("/question/qryquestions/"+pagenumber+"/"+size).then(function(res){
           console.log(res.data.data.question);
           that.questions = res.data.data

      })
    },
     pre() {
      // console.log("pre");
      this.qryquestion(--this.questions.pagenumber, this.questions.size);
    },
    next() {
      // console.log("next");
      this.qryquestion(++this.questions.pagenumber, this.questions.size);
    },
    pagechange(cpage) {
      this.pagenumber = cpage;
      this.qryquestion(this.questions.pagenumber, this.questions.size);
    },
    toshow(question){
       this.$router.push({
        path: "/user/questions/show",
        query: {
          question: JSON.stringify(question)
        }
      });
    }
  },
  created(){
    this.qryquestion(this.questions.pagenumber,this.questions.size)
  }
};
</script>

<style>

#questionsmaincontent {
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
</style>