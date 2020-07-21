<template>
  <div id="blogedit">
    <el-col :xs="1" :sm="3" :md="3" :lg="3"></el-col>
    <el-col :xs="22" :sm="18" :md="18" :lg="18">
      <el-collapse-transition>
        <mavon-editor v-model="blog" @imgAdd="imgadd" @imgDel="imgdel"></mavon-editor>
      </el-collapse-transition>
    </el-col>

    <el-col :xs="0" :sm="3" :md="3" :lg="3"></el-col>
  </div>
</template>

<script>
export default {
  name: "blogedit",
  data() {
    return {
      blog: ""
    };
  },
  methods: {
    imgadd(pos, file) {
      console.log(pos);
      console.log(file);
      var formdata = new FormData();
      //这里定义为image，服务端需要用这个名字去接收
      formdata.append("file", file);
      console.log(formdata);
      const that = this;
      that
        .$axios({
          url: "/blog/uploadimg",
          method: "post",
          data: formdata,
          headers: {"Content-Type": "multipart/form-data"}
        })
        .then(url => {});
      
    },
    imgdel(pos) {
      const that = this;
      var name = pos[1].name;
      console.log(name);
       that.$axios
        .get("/blog/delimg/" + name )
        .then(function(response) {
          if(response==null){
              return;
          }
          that.bloginfo = response.data.data;
         
        });
    }
  }
};
</script>

<style>
#blogedit {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>