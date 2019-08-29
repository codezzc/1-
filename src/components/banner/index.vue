<template>
  <div id="slider">
    <div
      class="slider-imgcontainer"
      ref="container"
    >
      <img v-for="img in imgs" :src="img.url">
    </div>
    <div class="slider-buttons">
      <span v-for="button in buttons"
            class="slider-imgindex"
            :class="{ 'slider-imgindex-active': currentIndex === button }"
            @mouseover="doTheAnimate(button)"
            @mouseout="autoAnimate"
      ></span>
    </div>
    <div class="slider-move">
      <span class="to-left" @click="doTheAnimate('left')"><i class="iconfont">&#xe637;</i></span>
      <span class="to-right" @click="doTheAnimate('right')"><i class="iconfont">&#xe70a;</i></span>
    </div>
  </div>
</template>

<script>
  export default {

    data () {

      return{
        imgs:[
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566237262303&di=b4401cc8cdddfb30146ae72bfc36e8d9&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F171117%2F1-1G11F95347.jpg'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566237262303&di=874e01f4fbfa69d958d7b6de5d69ffa0&imgtype=0&src=http%3A%2F%2Fwow.tgbus.com%2FUploadFiles_2396%2F201006%2F2010061311340990.jpg'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566237262302&di=94e839e172e1bedcf792406b3281f872&imgtype=0&src=http%3A%2F%2Fimg1.tgbusdata.cn%2Fv2%2Fthumb%2Fjpg%2FRTU5Qyw3MjAsMTAwLDQsMywxLC0xLDAscms1MA%3D%3D%2Fu%2Fwow.tgbus.com%2FUploadFiles_2396%2F201508%2F20150810222354570.jpg'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566237262302&di=60e33d7f80115a282be04f0106057492&imgtype=0&src=http%3A%2F%2Fwow.tgbus.com%2FUploadFiles_2396%2F200912%2F20091224181207764.jpg'}],
        currentIndex: 0,
        buttons: [0,1,2,3],
        timer: null
      }
    },
    methods: {

      move() {
        let left = `-${this.currentIndex * 100}%`
        this.$refs.container.style.left = left;
      },

      doTheAnimate(arg) {
        clearInterval(this.timer);
        this.timer = null;
        // 鼠标悬停
        if( typeof(arg) == 'number' ) {
          this.currentIndex = arg;
          // 鼠标点击
        }else if(typeof(arg) == 'string') {
          if(arg && arg === 'left' && this.currentIndex <= 2){
            this.currentIndex ++;
          }else if(arg && arg === 'right' && this.currentIndex >= 1){
            this.currentIndex --;
          }
          if(!this.timer) {
            this.autoAnimate();
          }
        }
        this.move();
      },

      autoAnimate() {
        this.timer = setInterval(() => {
          if(this.currentIndex === 3){
            this.currentIndex = 0;
          }else {
            this.currentIndex ++ ;
          }
          this.move();
        },4000)
      }
    },
    mounted () {
      this.autoAnimate();
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 847125 */
    src: url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.eot');
    src: url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.woff') format('woff'),
    url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_847125_qhbkbwtxr2.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family:"iconfont";
    font-size:16px;
    font-style:normal;
  }
  #slider{
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 400px;
  }
  .slider-imgcontainer {
    position: absolute;
    left: 0;
    width: 400%;
    height: 400px;
    transition: left .5s linear;
  }
  img {
     height:400px;
     width:1200px;
    display:inline-block;

  }
  .slider-buttons {
    position: absolute;
    width: 30%;
    left: 35%;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .slider-imgindex {
    cursor: pointer;
    width: 14px;
    height: 14px;
    margin: 0 10px;
    background-color: rgba(255, 248, 248, 0.98);
    border-radius: 7px;
    transition: width .3s linear;
  }
  .slider-imgindex-active {
    width: 60px;
  }
  .slider-move {
    position: absolute;
    top: 40%;
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .slider-move span {
    cursor: pointer;
    text-align: center;
    color: #fff;
    line-height: 60px;
    width: 50px;
    background-color: rgba(8,1,1,0.62);
  }
  .slider-move span:hover{
    background-color: rgba(8,1,1,0.9);
  }
</style>
