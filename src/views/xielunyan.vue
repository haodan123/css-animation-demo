<template>
  <div class="xielunyanPage">
    <div class="container">
      <!-- 左眼start -->
      <div class="eyesBoxs pullLeft">
        <!--轮廓开始-->
        <div class="profile skewLeft"></div>
        <div class="shadow skewLeft"></div>
        <!--轮廓结束-->
        <div class="basic ani-narrow"></div>
        <!--写轮眼开始-->
        <div class="eyes ani-zoom">
          <div class="line">
            <!--三勾玉-->
            <div class="hook ani-rotateHook">
              <span class="bar"><b></b></span>
              <span class="bar"><b></b></span>
              <span class="bar"><b></b></span>
            </div>
            <!--end-->
            <!--万花筒-->
            <div class="tube ani-rotateTube">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <!--end-->
          </div>
        </div>
        <!--写轮眼结束-->
      </div>
      <!-- 左眼end -->
      <!-- 右眼start -->
      <div class="eyesBoxs pullRight">
        <!--轮廓开始-->
        <div class="profile skewRight"></div>
        <div class="shadow skewRight"></div>
        <!--轮廓结束-->
        <div class="basic ani-narrow"></div>
        <!--写轮眼开始-->
        <div class="eyes ani-zoom">
          <div class="line">
            <!--三勾玉-->
            <div class="hook ani-rotateHook">
              <span class="bar"><b></b></span>
              <span class="bar"><b></b></span>
              <span class="bar"><b></b></span>
            </div>
            <!--end-->
            <!--万花筒-->
            <div class="tube ani-rotateTube">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <!--end-->
          </div>
        </div>
        <!--写轮眼结束-->
      </div>
      <!-- 右眼end -->
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .xielunyanPage {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .container {
    width: 800px;
    position: relative;
    height: 200px;
    overflow: hidden;
    background: #000;
    position: relative;
  }

  .eyesBoxs {
    width: 130px;
    height: 70px;
    position: absolute;
    top: 50px;
    /* background-color: #fff; */
  }

  .pullLeft {
    left: 100px;
  }

  .pullRight {
    right: 100px;
  }

  .profile {
    width: 130px;
    height: 70px;
    background-color: #fff;
    top: 0;
    left: 0;
    overflow: hidden;
    border-radius: 0 70px 0 50px;
  }

  .shadow {
    display: block;
    width: 130px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    border-radius: 0 90px 0 60px;
    /* 加一个眼睛左上角内阴影 */
    box-shadow: 5px 12px 2px 5px rgba(0, 0, 0, .25) inset;
  }

  .skewLeft {
    /* 让长方形像左边倾斜变成菱形 */
    transform: skewX(15deg);
  }

  .skewRight {
    /* 让长方形像右边倾斜变成菱形 */
    transform: skewX(-15deg) scale(-1, 1);
  }

  /* 黑色眼珠子 */
  .basic {

    width: 60px;
    height: 60px;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translateY(-50%); */
    margin-top: -30px;
    z-index: 10;
    border-radius: 60%;
  }

  /* 给黑色眼珠加一点眼白 */
  .basic::before {
    content: '';
    display: block;
    width: 10px;
    height: 11px;
    position: absolute;
    left: 15px;
    top: 15px;
    z-index: 100;
    border-radius: 60%;
    background-image: radial-gradient(circle, rgb(225, 225, 225), rgb(225, 225, 225), rgba(225, 225, 225, 0.9), rgba(225, 225, 225, 0.3));
  }


  /* 让左边的黑眼珠居中 */
  .pullLeft .basic {
    margin-left: -33px;
    /* 暂时不显示  */
    /* display: none; */
  }

  /* 让右边的黑眼珠居中 */
  .pullRight .basic {
    margin-left: -27px;
  }

  /* 写轮眼底色 */
  .eyes {
    width: 55px;
    height: 55px;
    background-color: #ff0000;
    position: absolute;
    top: 8px;
    border-radius: 50%;
    /* 内阴影 */
    box-shadow: 0 0 2px 4px #bd0000 inset, 0 0 0 2px #000;
  }

  /* 让左边的写轮眼底色居中 */
  .pullLeft .eyes {
    left: 35px;

  }

  .pullLeft .hook {
    /* 暂时不显示  */
    /* display: none; */
  }

  /* 让左边的写轮眼底色居中 */
  .pullRight .eyes {
    right: 35px;
  }

  /* 写轮眼中的线 */
  .eyes .line {
    width: 64%;
    height: 64%;
    background-color: #ff0000;
    position: absolute;
    right: 0;
    left: 0;
    top: 10px;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0 0 2px 0 #b20000 inset;
  }

  /* 给写轮眼加一个眼白 */
  .eyes .line::before {
    content: '';
    display: block;
    width: 10px;
    height: 11px;
    position: absolute;
    left: 3px;
    top: 4px;
    z-index: 100;
    border-radius: 50%;
    background-image: radial-gradient(circle, rgb(225, 225, 225), rgb(225, 225, 225), rgba(225, 225, 225, 0.7), rgba(225, 225, 225, 0.3));
  }

  .eyes .line:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    background: #000;
    right: 0;
    left: -1px;
    top: 13px;
    z-index: 100;
    margin: 0 auto;
    border-radius: 60%;
    transform: rotate(150deg);
    animation: colour 0.5s ease-in 6s;
  }

  @keyframes colour {
    0% {
      background: #000;
    }

    100% {
      background: #f00;
    }
  }

  /* 三勾玉开始 */
  .hook {
    width: 92%;
    height: 92%;
    position: absolute;
    right: 0;
    left: 0;
    top: 5%;
    margin: 0 auto;
  }

  /* 给勾玉定位的父元素 */
  .hook .bar {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    /* background-color: #fff; */
  }

  /* 勾玉 */
  .hook .bar b {
    display: block;
    width: 8px;
    height: 8px;
    background-color: #000;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 50%;
  }

  /* 勾玉的尖尖 */
  .hook .bar b::after {
    content: '';
    width: 8px;
    height: 8px;
    border-color: transparent transparent #000 transparent;
    border-style: solid;
    border-width: 0 0 5px 0;
    position: absolute;
    top: -1px;
    left: -3px;
    z-index: 100;
    border-radius: 0 0 0 70%;
    transform: rotate(-75deg);
  }

  .hook .bar:nth-child(1) {
    transform: rotate(10deg);
  }

  .hook .bar:nth-child(2) {
    transform: rotate(130deg);
  }

  .hook .bar:nth-child(3) {
    transform: rotate(250deg);
  }

  /* 三勾玉结束 */

  /*万花筒开始 */
  .tube {
    width: 93%;
    height: 93%;
    position: absolute;
    right: 0;
    left: 0px;
    top: 2px;
    margin: 0 auto;
    background: #000;
    border-radius: 60%;
  }

  .tube .bar {
    display: block;
    width: 10px;
    height: 20px;
    border-style: solid;
    border-width: 0 0 0 10px;
    border-color: transparent transparent transparent black;
    position: absolute;
    border-radius: 100% 0 0 0;
  }

  .tube .bar:nth-child(1) {
    top: -10px;
    left: 2px;
    transform: rotate(-10deg);
  }

  .tube .bar:nth-child(2) {
    bottom: 0px;
    right: -5px;
    transform: rotate(105deg);
  }

  .tube .bar:nth-child(3) {
    bottom: -3px;
    left: -4px;
    transform: rotate(235deg);
  }


  /*万花筒结束 */




  /* 动画 */

  .ani-narrow {
    /*基本眼*/
    animation: ani-narrow 0.5s linear 1s;
  }

  @keyframes ani-narrow {
    from {
      transform: scale(1);
    }

    to {
      opacity: 0;
      transform: scale(0);
    }
  }


  .ani-zoom {
    /*红色眼*/
    animation: ani-zoom 11s linear 0.8s;
  }

  @keyframes ani-zoom {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    6% {
      opacity: 1;
      transform: scale(1);
    }

    95% {
      opacity: 1;
      transform: scale(1);
    }

    100% {
      /* opacity: 0;
      transform: scale(1.5); */
    }
  }


  .ani-rotateHook {
    /*三勾玉*/
    animation: ani-rotateHook 5s ease-in 1.5s;
  }

  @keyframes ani-rotateHook {
    0% {
      opacity: 0;
      transform: scale(0) rotate(0);
    }

    90% {
      opacity: 1;
      transform: scale(1) rotate(-3240deg);
    }

    100% {
      opacity: 0;
      transform: scale(1.4) rotate(-540deg);
    }
  }



  .ani-rotateTube {
    /*万花筒*/
    animation: ani-rotateTube 5s ease-in-out 5.5s;
    -webkit-animation: ani-rotateTube 5s ease-in-out 5.5s;
    -o-animation: ani-rotateTube 5s ease-in-out 5.5s;
  }

  @keyframes ani-rotateTube {
    0% {
      opacity: 0;
      transform: scale(0) rotate(0);
    }

    30% {
      opacity: 1;
      transform: scale(1) rotate(-360deg);
    }

    100% {
      opacity: 1;
      transform: scale(1) rotate(-360deg);
    }
  }


  .ani-narrow,
  .ani-zoom,
  .ani-rotateHook,
  .ani-rotateTube,
  .ani-shadow,
  .eyes .line:after {
    /* animation-fill-mode: both; 是 CSS 中用于指定动画填充模式的属性。这个属性定义了在动画执行之前和之后，动画是否应该应用到目标元素的样式。
具体而言，both 值表示在动画未执行时应该应用动画的样式，而在动画执行完毕后也应该保留最后一个关键帧的样式。例如，如果你有一个从A到B再到C的动画，animation-fill-mode: both; 将在动画执行之前将目标元素的样式设置为A，然后在动画执行完毕后保持在C的样式。 */
    animation-fill-mode: both;
  }
</style>