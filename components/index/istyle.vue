<template>
  <div class="m-istyle">
    <ul class="m-istyle-nav">
      <li
        v-for="(item,index) in istyleList"
        :key="index"
        class="nav-item"
        :class="{'title':item.type==='title','active':item.type===kind}"
        @mouseenter="doSelectType(item.type)"
      >
        {{ item.title }}
      </li>
    </ul>
    <ul class="m-istyle-list">
      <li v-for="(good,index) in selectGoods[0].goods" :key="index" class="list-item">
        <img :src="good.imgUrl" alt="商品图片">
        <div class="title">
          {{ good.title }}
        </div>
        <div class="sub-title">
          {{ good.subTitle }}
        </div>
        <div class="price-info">
          <span class="price-wrapper">
            <span class="price-symbol">￥</span>
            <span class="price-count">{{ good.price }}</span>
          </span>
          <span class="old-price">{{ good.oldPrice }}</span>
          <span class="address">{{ good.address }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: "all",
      istyleList: [
        {
          type: "title",
          title: "有格调"
        },
        {
          type: "all",
          title: "全部",
          goods: [
             {
              title: "欧品动物奶油蛋糕（龙湖时代天街店）",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/bbia/d908da2425934fbe9db0baa6f4d6165c430593.jpg@368w_208h_1e_1c"
            },
             {
              title: "欧品动物奶油蛋糕（龙湖时代天街店）",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/bbia/d908da2425934fbe9db0baa6f4d6165c430593.jpg@368w_208h_1e_1c"
            },
             {
              title: "欧品动物奶油蛋糕（龙湖时代天街店）",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/bbia/d908da2425934fbe9db0baa6f4d6165c430593.jpg@368w_208h_1e_1c"
            },
             {
              title: "欧品动物奶油蛋糕（龙湖时代天街店）",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/bbia/d908da2425934fbe9db0baa6f4d6165c430593.jpg@368w_208h_1e_1c"
            },
             {
              title: "欧品动物奶油蛋糕（龙湖时代天街店）",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/bbia/d908da2425934fbe9db0baa6f4d6165c430593.jpg@368w_208h_1e_1c"
            },
             {
              title: "欧品动物奶油蛋糕（龙湖时代天街店）",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/bbia/d908da2425934fbe9db0baa6f4d6165c430593.jpg@368w_208h_1e_1c"
            }
          ]
        },
        {
          type: "party",
          title: "约会聚餐",
          goods: [
            {
              title: "李子坝梁山鸡",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/msmerchant/4c85a1a112c960732503ebc4af8f3aba479582.jpg@368w_208h_1e_1c"

            },
            {
              title: "李子坝梁山鸡",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/msmerchant/4c85a1a112c960732503ebc4af8f3aba479582.jpg@368w_208h_1e_1c"

            },
            {
              title: "李子坝梁山鸡",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/msmerchant/4c85a1a112c960732503ebc4af8f3aba479582.jpg@368w_208h_1e_1c"

            },
            {
              title: "李子坝梁山鸡",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/msmerchant/4c85a1a112c960732503ebc4af8f3aba479582.jpg@368w_208h_1e_1c"

            },
            {
              title: "李子坝梁山鸡",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/msmerchant/4c85a1a112c960732503ebc4af8f3aba479582.jpg@368w_208h_1e_1c"

            },
            {
              title: "李子坝梁山鸡",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/msmerchant/4c85a1a112c960732503ebc4af8f3aba479582.jpg@368w_208h_1e_1c"

            }
          ]
        },
        {
          type: "spa",
          title: "丽人spa",
          goods: [
            {
              title: "米娜造型",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p0.meituan.net/merchantpic/ab02907d83e7fd72892665bc3335cfb0139375.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c"

            },
            {
              title: "米娜造型",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p0.meituan.net/merchantpic/ab02907d83e7fd72892665bc3335cfb0139375.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c"

            },
            {
              title: "米娜造型",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p0.meituan.net/merchantpic/ab02907d83e7fd72892665bc3335cfb0139375.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c"

            },
            {
              title: "米娜造型",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p0.meituan.net/merchantpic/ab02907d83e7fd72892665bc3335cfb0139375.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c"

            },
            {
              title: "米娜造型",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p0.meituan.net/merchantpic/ab02907d83e7fd72892665bc3335cfb0139375.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c"

            },
            {
              title: "米娜造型",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p0.meituan.net/merchantpic/ab02907d83e7fd72892665bc3335cfb0139375.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c"

            }
          ]
        },
        {
          type: "travel",
          title: "品质出游",
          goods: [
            {
              title: "希尔顿酒店",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/tdchotel/4b19d1ac3aa285cacce3eeb1253e3a7d433166.jpg@368w_208h_1e_1c"
            },
            {
              title: "希尔顿酒店",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/tdchotel/4b19d1ac3aa285cacce3eeb1253e3a7d433166.jpg@368w_208h_1e_1c"
            },
            {
              title: "希尔顿酒店",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/tdchotel/4b19d1ac3aa285cacce3eeb1253e3a7d433166.jpg@368w_208h_1e_1c"
            },
            {
              title: "希尔顿酒店",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/tdchotel/4b19d1ac3aa285cacce3eeb1253e3a7d433166.jpg@368w_208h_1e_1c"
            },
            {
              title: "希尔顿酒店",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/tdchotel/4b19d1ac3aa285cacce3eeb1253e3a7d433166.jpg@368w_208h_1e_1c"
            },
            {
              title: "希尔顿酒店",
              subTitle: "发财树/钱罐子/麻将蛋糕，法国进口天然动物奶油，新鲜水果夹心，好吃到家1个，约6英寸，圆形",
              price: "149",
              oldPrice: "门市价¥218",
              address: "大坪",
              imgUrl: "//p1.meituan.net/tdchotel/4b19d1ac3aa285cacce3eeb1253e3a7d433166.jpg@368w_208h_1e_1c"
            }
          ]
        }
      ]
    }
  },
  computed: {
    selectGoods () {
      console.log(this.istyleList.filter(item => item.type === this.kind))
      return this.istyleList.filter(item => item.type === this.kind)
    }
  },
  methods: {
    doSelectType (type) {
      if (type !== 'title') {
        this.kind = type
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.m-istyle {
  margin: 40px 0;
  .m-istyle-nav {
    height: 44px;
    border-radius: 5px 5px 0 0;
    background: #bfa77c;
    color: #fff;
    line-height: 44px;
    list-style: none;
    .nav-item {
      position: relative;
      float: left;
      padding: 0 5px;
      cursor: pointer;
      &.title {
        font-size: 18px;
        margin-left: 13px;
        margin-right: 10px;
      }
      &.active:after {
          margin: auto;
        content: " ";
        display: block;
        position: absolute;
        left: 0;
        top: 37px;
        right: 0;
        width: 0;
        height: 0;
        border-right: 7px solid transparent;
        border-left: 7px solid transparent;
        border-bottom: 7px solid #fff;
      }
    }
  }
  .m-istyle-list {
    .list-item {
      float: left;
      width: 33.3%;
      height: 314px;
      padding: 10px;
      box-sizing: border-box;
      list-style: none;
      .title {
        margin-bottom: 8px;
        font-size: 16px;
        color: #222;
        line-height: 22px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
        font-weight: 500;
      }
      .sub-title {
        font-size: 12px;
        color: #999;
        line-height: 18px;
        height: 18px;
        margin-bottom: 7px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price-info {
        height: 27px;
        overflow: hidden;
        margin-bottom: 10px;
        .price-wrapper {
          float: left;
          .price-symbol {
            font-size: 14px;
            color: #be9e4d;
            font-weight: 500;
          }
          .price-count {
            font-size: 22px;
            color: #be9e4d;
            letter-spacing: -0.8px;
            margin-right: 4px;
          }
        }
        .old-price {
          font-size: 12px;
          line-height: 3;
          color: #999;
          text-decoration: line-through;
        }
        .address {
          font-size: 12px;
          color: #999;
          float: right;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>