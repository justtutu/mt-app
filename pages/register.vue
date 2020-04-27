<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a href="/" class="site-logo" />
        <span class="login">
          <em class="blod">已有美团账号？</em>
          <a href="/login">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" />
          <el-button round size="mini" @click="sendMsg">
            发送验证码
          </el-button>
          <span>{{ statusMsg }}</span>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" placeholder="请输入" maxlength="4" />
        </el-form-item>
        <el-form-item label="创建密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="ruleForm.cpwd" type="password" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleRegister('ruleForm')">
            同意以下协议并注册
          </el-button>
          <div class="error">
            {{ error }}
          </div>
        </el-form-item>
        <el-form-item>
          <a
            class="f1"
            href="https://rules-center.meituan.com/rules-detail/4"
            target="_blank"
          >《美团点评用户服务协议》</a>
          <a
            class="f1"
            href="https://rules-center.meituan.com/rules-detail/2"
            target="_blank"
          >《美团点评隐私政策》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  layout: 'blank',
  data () {
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码！'))
      } else if (value !== this.ruleForm.pwd) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: "",
        code: '',
        pwd: "",
        cpwd: "",
        email: " "
      },
      rules: {
        name: [
          {
            required: true, message: "请输入昵称", trigger: "blur"
          }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        pwd: [
          {
            required: true, message: "请输入密码", trigger: "blur"
          }
        ],
        cpwd: [
          {
            validator: validatePass2, trigger: 'blur'
          }
        ]
      },
      error: '',
      statusMsg: ''
    }
  },
  methods: {
    sendMsg () {
      let nameError
      let emailError
      console.log(1)
      if (this.timer) {
        return false
      }
      this.$refs.ruleForm.validateField('name', (errorMessage) => {
        nameError = errorMessage
      }
      )
      this.statusMsg = ''
      this.$refs.ruleForm.validateField('email', (errorMessage) => {
        emailError = errorMessage
      }
      )
      if (!nameError && !emailError) {
        this.$axios.post('/users/verify', {
          username: this.ruleForm.name,
          email: this.ruleForm.email
        }).then(({ status, data }) => {
          if (status === 200 && data && data.code === 0) {
            let count = 60
            this.statusMsg = `验证码已发送，剩余${count--}秒`
            this.timer = setInterval(() => {
              this.statusMsg = `验证码已发送，剩余${count--}秒`
              if (count === 0) {
                clearInterval(this.timer)
              }
            }, 1000)
          } else {
            this.statusMsg = data.message
          }
        }
        )
      } else {
        return false
      }
    },
    handleRegister () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$axios.post('/users/signup',
           {
            username: encodeURIComponent(this.ruleForm.name) , 
            password: CryptoJS.MD5(this.ruleForm.pwd).toString(),
            email:this.ruleForm.email  
           }).then(({ status, data }) => {
            if (status === 200) {
              if(data&&data.code ===0){
                window.location = '/login'
              }else{
                this.error = data.msg
              }
            }else{
              this.error = `服务器错误：${status}`
            }
            setTimeout(() => {
              this.error=''
            }
            ,1500)
          }
          )
        } else {
          return false
        }
      }
      )
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/register/index.scss";
</style>