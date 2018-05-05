<template>
  <div class="wapper">
    <!-- 头部导航 -->
    <!-- <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> -->
    <!-- <mt-search class="search" cancel-text="取消" placeholder="搜索"></mt-search> -->
    <!-- 轮播 -->
    <mt-swipe :auto="4000" class="swiper">
      <mt-swipe-item>
        <img src="http://ofkzpykzq.bkt.clouddn.com/one.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://ofkzpykzq.bkt.clouddn.com/three.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://ofkzpykzq.bkt.clouddn.com/two.png" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 应用导航 -->
    <mt-swipe :auto="0" class="content">
      <mt-swipe-item>
        <ul>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类1</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类2</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类3</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类4</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类5</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类6</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类7</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类8</span>
            </a>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类1</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类2</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类3</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类4</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类5</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类6</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类7</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="../assets/img/classify1.png" alt="">
              </i>
              <span>分类8</span>
            </a>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
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
<style lang="less" scoped>
@import '../assets/less/index.less';
</style>

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
