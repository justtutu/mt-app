<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <a href="#">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
        </a>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="search" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input" />
          <button class="el-button el-button--primary">
            <i class="el-icon-search" />
          </button>
          <dl v-if="isHot" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotList" :key="index">
              {{ item }}
            </dd>
          </dl>
          <dl v-if="isSuggest" class="searchList">
            <dd v-for="(item,index) in searchList" :key="index">
              {{ item }}
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">洋人街</a>
          <a href="#">洋人街</a>
          <a href="#">洋人街</a>
          <a href="#">洋人街</a>
          <a href="#">洋人街</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">
              美团外卖
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">
              猫眼电影
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">
              美团酒店
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">
              民宿/公寓
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">
              商家入驻
            </nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund" /><p class="text">
              随时退
            </p>
          </li>
          <li>
            <i class="refund" /><p class="text">
              不满意免单
            </p>
          </li>
          <li>
            <i class="refund" /><p class="text">
              过期退
            </p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否聚焦
      isFocus: false,
      search:'',
      hotList:['火锅','火锅','火锅'],
      searchList:['洋人街','洋人街','洋人街']
    }
  },
  computed: {
    isHot(){
      return this.isFocus && !this.search
    },
    isSuggest() {
      return this.isFocus&& this.search
    }
  },
  methods: {
    focus() {
      this.isFocus  = true
    },
    blur(){
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input(){
      console.log('input')
    }
  },
}
</script>

<style>

</style>