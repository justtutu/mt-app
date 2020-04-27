<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in $store.state.home.menu" :key="index" @mouseenter="enter">
        <i :class="item.type" />
        {{ item.name }}
        <span class="arrow" />
      </dd>
    </dl>
    <div v-if="kind" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curdetail.child">
        <h4 :key="index">
          {{ item.title }}
        </h4>
        <span v-for="(v,idx) in item.child" :key="''+idx+index">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: '',
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: '美食',
              child: [
                '代金券', '甜点', '饮品', '火锅'
              ]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "外卖",
              child: ['外卖']
            }
          ]
        }, {
          type: "hotel",
          name: "酒店",
          child: [
            {
              title: '酒店星级',
              child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }, {
              title: '酒店星级2',
              child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        }
      ]
    }
  },
  computed: {
    curdetail () {
      console.log(this.$store.state.menu)
      return this.$store.state.home.menu.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    mouseleave () {
      this._timer = setTimeout(() => {
        this.kind = ""
      }, 150)
    },
    enter (e) {
      this.kind = e.target.querySelector('i').className
    },
    // 一移入详情层不隐藏
    detailEnter () {
      clearTimeout(this._timer)
    },
    detailLeave () {
      this.kind = ''
    }
  },
}
</script>

<style lang="scss" scoped>
</style>