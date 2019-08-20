<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-17 15:03:40
 * @LastEditTime: 2019-08-20 18:07:49
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tap border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import { urlParse } from './common/js/util'
import { getSeller } from 'api'

export default {
  name: 'app',
  data () {
    return {
      seller: {
        id: () => {
          let queryParam = urlParse()
          return queryParam.id
        }
      }
    }
  },
  created () {
    this._getSeller()
    // let data = get('/api/seller?id=' + this.seller.id)
    //  this.seller = Object.assign({}, this.seller, data)
  },
  methods: {
    _getSeller () {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  components: {
    'v-header': header
  }
}
</script>
<style lang="stylus">
@import './common/stylus/mixin.styl'
.tap
  display flex
  width 100%
  height 40px
  line-height 40px
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex 1
    text-align center
    & > a
      display block
      font-size 14px
      color rgb(77, 85, 93)
      &.active
        color rgb(240, 20, 20)
</style>
