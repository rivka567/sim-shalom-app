<template>
  <div id="app">
     <!-- <Home/> -->
    <!-- <pdf src="sidur.pdf" :page="54"/> -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import Home from './views/Home.vue'
import pdf from 'vue-pdf'

var loadingTask = pdf.createLoadingTask('sidur.pdf');

export default{
  name:'app',
  components:{
    pdf,Home
  },
 
}

</script>


<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
