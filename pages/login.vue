<template>
  <div class="page-login">
    <article class="login-header">
      <a href="/" class="logo" />
    </article>
    <div class="login-panel">
      <div class="banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="banner">
      </div>
      <el-form ref="loginForm" :model="formData" :rules="rules" class="form">
        <h4 v-if="error" class="tips">
          <i class="el-icon warning" />   {{ error }}
        </h4>
        账号登录
        <el-form-item prop="username">
          <el-input v-model="formData.username" placeholder="用户名" prefix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formData.password" placeholder="密码" type="password" prefix-icon="el-icon-lock" />
        </el-form-item>
        <div class="foot">
          <b><a href="#">忘记密码？</a> </b>
        </div>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  layout:"blank",
  data () {
    return {
      error:'',
      rules:{
        username:[
          {required:true,message:'请输入用户名'}
        ],
        password:[
          {required:true, message:'请输入密码'}
        ]
      },
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods:{
    login(){
      this.$refs.loginForm.validate((valid)=>{
        if(valid){
          this.$axios.post('/users/signin',{
            username:encodeURIComponent(this.formData.username),
            password:CryptoJS.MD5(this.formData.password).toString()
          }).then(({status,data})=>{
            if(status===200){
              if(data.code ===0){
                location.href = '/'
              }else{
                this.error = data.msg
              }
            }else{
              this.error =  `服务器错误${status}`
            }
            setTimeout(() => {
              this.error = ''
            }, 1500)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/login/index.scss';
.foot b{
font-size: 12px;
a{
color: #FE8C00;
}
}

</style>