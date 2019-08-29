<template>
  <div id="body-container">
    <div id="top">
    <ul>
    <li><router-link to="/jdjs">经典旧世</router-link></li>
    <li><router-link to="/rsdyz">燃烧的远征</router-link></li>
    <li><router-link to="/wywzn">巫妖王之怒</router-link></li>
    <li><router-link to="/dddlb">大地的裂变</router-link></li>
    <li><router-link to="/xmrzm">熊猫人之谜</router-link></li>
    <li><router-link to="/dlnzw">德拉诺之王</router-link></li>
    <li><router-link to="/jtzl">军团再临</router-link></li>
  </ul>
    </div>
    <div id="bottom">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped>
 #body-container{

 }
 #top{
    height:70px;
 }
  #top ul{
    display:flex;
    list-style:none;
    justify-content:center;
    align-items:center;
    position:relative;
    top:22px;
  }
  #top ul li{
    flex:1;
    text-align: center;
    font-size:20px;
    font-weight:bold;

  }
  a{
    text-decoration:none;
  }
  .router-link-active{
    color:red;
  }

</style>
