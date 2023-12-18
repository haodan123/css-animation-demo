<template>
  <div>
    <header>
      <div class="logo">test-sliter-1</div>
      <nav>
        <a href="">Home</a>
        <a href="">Info</a>
        <a href="">Contact</a>
      </nav>
    </header>
    <div class="carousel" :class="[animationType,showDetail]">
      <!-- 数据列表 -->
      <div class="list" ref="listRef">
        <div ref="itemRef" class="item" v-for="item in listData" :key="item.img">
          <img :src="item.img" alt="">
          <!-- 正常显示 -->
          <div class="introduce">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="topic">
              {{ item.topic }}
            </div>
            <div class="des">
              {{ item.des }}
            </div>
            <!-- 点击查看详情 -->
            <button class="seeMore" @click="showDetailFn">查看详情</button>
          </div>
          <!-- 详情显示 -->
          <div class="detail">
            <div class="title">{{  item.detail.title}}</div>
            <div class="des">{{  item.detail.des}}</div>
            <div class="specifications">
              <div>
                <p>Used Time</p>
                <p>6 hours</p>
              </div>
              <div>
                <p>Charging port</p>
                <p>Type-C</p>
              </div>
              <div>
                <p>Compatible</p>
                <p>Android</p>
              </div>
              <div>
                <p>Bluetooth</p>
                <p>5.3</p>
              </div>
              <div>
                <p>Controlled</p>
                <p>Touch</p>
              </div>
            </div>
            <!-- 检查按钮 暂时无用 -->
            <div class="checkout">
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 箭头 -->
      <div class="arrows">
        <button id="prev" @click="showSlider('prev')">{{'<'}}</button>
        <button id="back" @click="seeAll">See All </button>
        <button id="next" @click="showSlider('next')">{{'>'}}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  import img1 from '@/assets/images/img1.png'
  import img2 from '@/assets/images/img2.png'
  import img3 from '@/assets/images/img3.png'
  import img4 from '@/assets/images/img4.png'
  import img5 from '@/assets/images/img5.png'
  import img6 from '@/assets/images/img6.png'

  const listData = ref([{
    img: img1,
    title: 'title!',
    topic: 'Aerphone',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam beatae maxime',
    detail: {
      title: 'detailTitle1',
      des: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animimodi explicabo quod corrupti impedit illoaccusantium in eaque nam quia adipisci autdistinctio porro eligendi.Reprehenderit nostrum consequuntur ea!Accusamus architecto dolores modi ducimus facilis quas voluptatibus!Tempora ratione accusantium magnam nulla tenetur autembeatae'
    }
  }, {
    img: img2,
    title: 'title!',
    topic: 'Aerphone',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam beatae maxime',
    detail: {
      title: 'detailTitle1',
      des: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animimodi explicabo quod corrupti impedit illoaccusantium in eaque nam quia adipisci autdistinctio porro eligendi.Reprehenderit nostrum consequuntur ea!Accusamus architecto dolores modi ducimus facilis quas voluptatibus!Tempora ratione accusantium magnam nulla tenetur autembeatae'
    }
  }, {
    img: img3,
    title: 'title!',
    topic: 'Aerphone',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam beatae maxime',
    detail: {
      title: 'detailTitle1',
      des: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animimodi explicabo quod corrupti impedit illoaccusantium in eaque nam quia adipisci autdistinctio porro eligendi.Reprehenderit nostrum consequuntur ea!Accusamus architecto dolores modi ducimus facilis quas voluptatibus!Tempora ratione accusantium magnam nulla tenetur autembeatae'
    }
  }, {
    img: img4,
    title: 'title!',
    topic: 'Aerphone',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam beatae maxime',
    detail: {
      title: 'detailTitle1',
      des: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animimodi explicabo quod corrupti impedit illoaccusantium in eaque nam quia adipisci autdistinctio porro eligendi.Reprehenderit nostrum consequuntur ea!Accusamus architecto dolores modi ducimus facilis quas voluptatibus!Tempora ratione accusantium magnam nulla tenetur autembeatae'
    }
  }, {
    img: img5,
    title: 'title!',
    topic: 'Aerphone',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam beatae maxime',
    detail: {
      title: 'detailTitle1',
      des: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animimodi explicabo quod corrupti impedit illoaccusantium in eaque nam quia adipisci autdistinctio porro eligendi.Reprehenderit nostrum consequuntur ea!Accusamus architecto dolores modi ducimus facilis quas voluptatibus!Tempora ratione accusantium magnam nulla tenetur autembeatae'
    }
  }, {
    img: img6,
    title: 'title!',
    topic: 'Aerphone',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam beatae maxime',
    detail: {
      title: 'detailTitle1',
      des: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animimodi explicabo quod corrupti impedit illoaccusantium in eaque nam quia adipisci autdistinctio porro eligendi.Reprehenderit nostrum consequuntur ea!Accusamus architecto dolores modi ducimus facilis quas voluptatibus!Tempora ratione accusantium magnam nulla tenetur autembeatae'
    }
  }])

  const listRef = ref() //list的dom
  const itemRef = ref() //item的dom

  const animationType = ref('') //next为下一个 prev为上一个

  const loadingTap = ref(false) //按钮不能短时间点击
  const showSlider = (type) => {
    if (loadingTap.value) return
    loadingTap.value = true
    animationType.value = ''
    if (type == 'next') {
      // 用vue的方法  把数组的第一位删除 拿出来  然后添加到最后
      const firstElement = listData.value.shift();
      listData.value.push(firstElement);
      // 用js的原生操作dom方法  把第一位的数据放到最后 来达到切换的效果
      // const firstDom = itemRef.value[0]
      // listRef.value.appendChild(firstDom)
      // console.log('listdom', listRef.value);
    } else if (type == 'prev') {
      // vue的方法
      const lastElement = listData.value.pop();
      listData.value.unshift(lastElement);
      // 用js的原生操作dom方法  
      // const lastDom = itemRef.value[itemRef.value.length -1]
      // listRef.value.pend(lastDom)
    }
    // 给父盒子添加动画的css
    animationType.value = type

    setTimeout(() => {
      loadingTap.value = false
    }, 2000)
  }

  const showDetail = ref('') //是否显示详情

  // 查看详情
  const showDetailFn = () => {
    // console.log('点击');
    showDetail.value = 'showDetail'
  }
  // 取消详情
  const seeAll = () => {
    showDetail.value = ''
  }
  console.log(listData.value);
  // const test = listData.value[0]
</script>

<style scoped lang="scss">
  header {
    width: 1140px;
    max-width: 90%;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-weight: bold;
    }

    nav a {
      margin-left: 30px;
      color: #555;
      font-weight: 500;
    }
  }

  /* carousel */
  .carousel {
    position: relative;
    height: 800px;
    overflow: hidden;
    margin-top: -50px; //抵消header的高度

    .list {
      position: absolute;
      width: 1140px;
      max-width: 90%;
      left: 50%;
      transform: translateX(-50%);
      height: 80%;

      .item {
        // item start
        position: absolute;
        left: 0%;
        width: 70%;
        height: 100%;
        font-size: 15px;
        transition: left 0.5s, opacity 0.5s, width 0.5s; //改变位置的动画

        &:nth-child(n + 6) {
          opacity: 0;
        }

        &:nth-child(2) {
          z-index: 10;
          transform: translateX(0);
        }

        img {
          width: 50%;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: right 1.5s;
        }


        .introduce {
          // 正常显示的盒子
          opacity: 0;
          pointer-events: none; //禁止事件

          .title {
            font-size: 2em;
            font-weight: 500;
            line-height: 1em;
          }

          .topic {
            font-size: 4em;
            font-weight: 500;
          }

          .des {
            font-size: small;
            color: #5559;
          }

          // 查看详情按钮
          .seeMore {
            font-family: Poppins;
            margin-top: 1.2em;
            padding: 5px 0;
            border: none;
            border-bottom: 1px solid #555;
            background-color: transparent;
            font-weight: bold;
            letter-spacing: 3px;
            transition: background 0.5s;

            &:hover {
              background-color: #eee;
            }
          }
        }

        &:nth-child(2) .introduce {
          opacity: 1;
          pointer-events: auto;
          width: 400px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: opacity 0.5s;
        }

        // 第一个盒子的偏移
        &:nth-child(1) {
          transform: var(--item1-transform);
          filter: var(--item1-filter);
          z-index: var(--item1-zIndex);
          opacity: var(--item1-opacity);
          pointer-events: none;
        }

        &:nth-child(3) {
          transform: var(--item3-transform);
          filter: var(--item3-filter);
          z-index: var(--item3-zIndex);
        }

        &:nth-child(4) {
          transform: var(--item4-transform);
          filter: var(--item4-filter);
          z-index: var(--item4-zIndex);
        }

        &:nth-child(5) {
          transform: var(--item5-transform);
          filter: var(--item5-filter);
          opacity: var(--item5-opacity);
          pointer-events: none;
        }

        // 第二个盒子 中的动画文本 出现的时候从上往下滑动
        &:nth-child(2) {
          .introduce {

            .title,
            .topic,
            .des,
            .seeMore {
              opacity: 0;
              animation: showContent 0.5s 1s ease-in-out 1 forwards;
            }



            .topic {
              // 以下三个属性是让文字有顺序的出来
              animation-delay: 1s;
            }

            .des {
              animation-delay: 1.2s;
            }

            .seeMore {
              animation-delay: 1.4s;
            }
          }
        }

        // item end
      }
    }
  }

  // 点击下一个 的动画
  .carousel.next {

    // 给每个dom都转移位置  1到2 2到3 3到4 4到5
    .item:nth-child(1) {
      animation: transformFromPosition2 0.5s ease-in-out 1 forwards;
    }

    .item:nth-child(2) {
      animation: transformFromPosition3 0.7s ease-in-out 1 forwards;
    }

    .item:nth-child(3) {
      animation: transformFromPosition4 0.9s ease-in-out 1 forwards;
    }

    .item:nth-child(4) {
      animation: transformFromPosition5 1.1s ease-in-out 1 forwards;
    }


  }

  // 点击上一个的动画
  .carousel.prev {

    // 给每个dom都转移位置  5到4 4到3 3到2 2到1
    .item:nth-child(5) {
      animation: transformFromPosition4 0.5s ease-in-out 1 forwards;

    }

    .item:nth-child(4) {
      animation: transformFromPosition3 .7s ease-in-out 1 forwards;

    }

    .item:nth-child(3) {
      animation: transformFromPosition2 .9s ease-in-out 1 forwards;

    }

    .item:nth-child(2) {
      animation: transformFromPosition1 1.1s ease-in-out 1 forwards;

    }
  }


  // 转移到item1的位置
  @keyframes transformFromPosition1 {
    from {
      transform: var(--item1-transform);
      filter: var(--item1-filter);
      opacity: var(--item1-opacity);
    }
  }

  // 转移到item2的位置
  @keyframes transformFromPosition2 {
    from {
      transform: var(--item2-transform);
      filter: var(--item2-filter);
      opacity: var(--item2-opacity);
    }
  }

  // 转移到item3的位置
  @keyframes transformFromPosition3 {
    from {
      transform: var(--item3-transform);
      filter: var(--item3-filter);
      opacity: var(--item3-opacity);
    }
  }

  // 转移到item4的位置
  @keyframes transformFromPosition4 {
    from {
      transform: var(--item4-transform);
      filter: var(--item4-filter);
      opacity: var(--item4-opacity);
    }
  }

  // 转移到item5的位置
  @keyframes transformFromPosition5 {
    from {
      transform: var(--item5-transform);
      filter: var(--item5-filter);
      opacity: var(--item5-opacity);
    }
  }

  // 展示详情的动画
  @keyframes showContent {
    from {
      transform: translateY(-30px);
      filter: blur(10px);
    }

    to {
      transform: translateY(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  /* 详情的样式  */
  .carousel .list .item .detail {
    opacity: 0;
    pointer-events: none;
  }

  // 点击详情后 的详情样式

  .carousel.showDetail {

    // 让右边的两个盒子移到最右边
    .item:nth-child(3),
    .item:nth-child(4) {
      left: 100%;
      opacity: 0;
      pointer-events: none;
    }

    // 显示的盒子宽度百分百
    .item:nth-child(2) {
      width: 100%;

      // 正常的数据隐藏
      .introduce {
        opacity: 0;
        pointer-events: none;
      }

      // 让盒子移到左边
      img {
        right: 50%;
      }

      // 让详情的盒子显示出来 让盒子到右边 start
      .detail {
        opacity: 1;
        width: 50%;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        text-align: right;
        pointer-events: auto;

        .title {
          font-size: 4em;
        }

        // 小表格start
        .specifications {
          display: flex;
          gap: 10px;
          width: 100%;
          border-top: 1px solid #5553;
          margin-top: 20px;

          div {
            width: 90px;
            text-align: center;
            flex-shrink: 0;

            p:nth-child(1) {
              font-weight: bold;
            }
          }
        }

        // 小表格end

        // 详情按钮start
        .checkout button {
          font-family: Poppins;
          background-color: transparent;
          border: 1px solid #555555;
          margin-left: 5px;
          padding: 5px 10px;
          letter-spacing: 2px;
          font-weight: 500;
        }

        .checkout button:nth-child(2) {
          background-color: #693EFF;
          color: #fff;
        }

        // 详情按钮end

        .title,
        .des,
        .specifications,
        .checkout {
          opacity: 0;
          animation: showContent 0.5s 1s ease-in-out 1 forwards;
        }

        .des {
          animation-delay: 1.2s;
        }

        .specifications {
          animation-delay: 1.4s;
        }

        .checkout {
          animation-delay: 1.6s;
        }



      }

      // 让详情的盒子显示出来 让盒子到右边 end
    }
  }

  // 箭头
  .arrows {
    position: absolute;
    bottom: 10px;
    width: 1140px;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    left: 50%;
    transform: translateX(-50%);
  }

  #prev,
  #next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-family: monospace;
    border: 1px solid #5555;
    font-size: large;
    bottom: 20%;
    left: 10%;
  }

  #next {
    left: unset;
    right: 10%;
  }

  #back {
    position: absolute;
    z-index: 100;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    border-bottom: 1px solid #5555;
    font-family: Poppins;
    font-weight: bold;
    letter-spacing: 3px;
    background-color: transparent;
    padding: 10px;
    transition: opacity 0.5s;
  }

  // 详情下显示的按钮
  .carousel.showDetail {
    #back {
      opacity: 1;
    }

    #prev,
    #next {
      opacity: 0;
      pointer-events: none;
    }
  }

  // 盒子背景
  .carousel::before {
    width: 500px;
    height: 300px;
    content: '';
    background-image: linear-gradient(70deg, #DC422A, blue);
    position: absolute;
    z-index: -1;
    border-radius: 20% 30% 80% 10%;
    filter: blur(150px);
    top: 50%;
    left: 50%;
    transform: translate(-10%, -50%);
    transition: 1s;
  }

  // 详情下的背景 偏移
  .carousel.showDetail::before {
    transform: translate(-100%, -50%) rotate(90deg);
    filter: blur(130px);
  }


  @media screen and (max-width:991px) {

    // 平板下适配
    .carousel .list .item {
      width: 90%;
    }

    .carousel.showDetail .list {
      .item:nth-child(2) {
        .detail {
          .specifications {
            overflow: auto;
          }

          .title {
            font-size: 2em;
          }
        }
      }
    }
  }

  @media screen and (max-width:767px) {
    // 手机下的适配
    .carousel{
        height: 600px;
    }
    .carousel .list .item{
        width: 100%;
        font-size: 10px;
    }
    .carousel .list{
        height: 100%;
    }
    .carousel .list .item:nth-child(2) .introduce{
        width: 50%;
    }
    
    .carousel .list .item img{
        width: 40%;
    }
    .carousel.showDetail .list .item:nth-child(2) .detail{
        backdrop-filter: blur(10px);
        font-size: small;
    }
    .carousel .list .item:nth-child(2) .introduce .des,
    .carousel.showDetail .list .item:nth-child(2) .detail .des{
        height: 100px;
        overflow: auto;
    }
    .carousel.showDetail .list .item:nth-child(2) .detail .checkout{
        display: flex;
        width: max-content;
        float: right;
    }

  }
</style>