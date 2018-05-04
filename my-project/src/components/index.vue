<template>
  <div class="wapper">
    <!-- 头部导航 -->
    <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-search slot="title"  cancel-text="取消" placeholder="搜索"></mt-search>
    <!-- 底部bar -->
    <mt-tabbar fixed>
      <mt-tab-item id="home">
        <img slot="icon">
        外卖
      </mt-tab-item>
      <mt-tab-item id="classify">
        <img slot="icon">
        分类
      </mt-tab-item>
      <mt-tab-item id="shop">
        <img slot="icon">
        联盟商家
      </mt-tab-item>
      <mt-tab-item id="wealth">
        <img slot="icon">
        财富
      </mt-tab-item>
      <mt-tab-item id="main">
        <img slot="icon">
        财富
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: ''
    }
  }
}
</script>
