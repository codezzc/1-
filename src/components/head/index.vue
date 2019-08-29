<template>
  <div id="container">
  <img src="../../assets/123.jpg">
    <ul>
      <li>游戏下载</li>
      <li>进入官网</li>
      <li>游戏论坛</li>
      <li>关于我们</li>
    </ul>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  #container{
    background-color: azure;
  }
  #container img{
    height:100px;
    width:160px;
    float:left;
    position:relative;
    border-radius:50%;


  }
  #container ul{
    float:right;
    padding-right:10px;
    position:relative;
    top:22px;

  }
  #container ul li{
    float:left;
    list-style:none;
    margin:15px;
    font-size:20px;
    font-weight:bold;

  }
</style>
