<template>
  <div id="app">
  <div id="container">
    <div id="head"><ihead></ihead></div>
    <div id="banner"><ibanner></ibanner></div>
    <div id="body">
       <ibody></ibody>
    </div>
  </div>
  </div>
</template>

<script>
   import ihead from './components/head/index.vue'
   import ibanner from './components/banner/index.vue'
   import ibody from './components/body/index.vue'
  export default {

      components:{ihead,ibanner,ibody}
}
</script>

<style>
#app {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
#app #container{
  width: 1200px;
  height:100%;
  margin:0 auto;

}
#app #container #head{
  height:100px;

}
#app #container #banner{


}
</style>
