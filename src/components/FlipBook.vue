
<template>
<div id="app">
  <!-- <img src="../assets/pictures/pic1.jpg" alt=""> -->
    <button @click="changePage">1</button>
    <!-- <img alt="Vue logo" src="./assets/logo.png" width="25%" /> -->
    <Flipbook
      ref="flipbook"
      class="flipbook"
      :pages="pages"
      v-slot="flipbook"
      :zooms="null"
      @flip-right-start="onFlipRightStart"
    >
      <button @click="flip(false)">Previous Page</button>
      <button @click="flip(true)">Next Page</button>
      <p>{{ flipbook }}</p>
      <p @click="flipbook.page = 1">1</p>
      {{ flipbook.numPages }}
    </Flipbook>
  </div>



</template>

<script >
import Flipbook from "flipbook-vue";
import pdf from "vue-pdf";


export default {
  name: "App",
  components: {
    Flipbook,pdf
  },
  methods: {
    flip(next){
if(next){
  this.flip.flipRight()
  this.location++

}else{
this.flip.flipLeft()
this.location--
}
if(this.pages[this.location]==='./empty.jpg'){

}
    },
    changePage() {
      this.$refs.flipbook.frontImage = this.$refs.flipbook.pageUrl(4);
      this.$refs.flipbook.backImge = this.$refs.flipbook.pageUrl(5);
      this.$refs.flipbook.firstPage = 4;
      this.$refs.flipbook.secondPage = 5;

      // this.$refs.flipbook.flipAuto(true);
    },
    onFlipRightStart(page) {
      console.log(page);
    },
   
    
  },
  data() {
    return {
      location:0,
      singlePage: false,
      src:pdf.createLoadingTask("sidur.pdf"),
      pages:
       (new Array(50)).map(()=>"../empty.jpg")
       // [
      //   null,    
      //   "google.com",
      //   "https://picsum.photos/200/300?id=3",
      //   "https://picsum.photos/200/300?id=4",
      //   "https://picsum.photos/200/300?id=5",
      //   "https://picsum.photos/200/300?id=6",
      //   "https://picsum.photos/200/300?id=7",
      //   "https://picsum.photos/200/300?id=8",
      // ],
    };
  },


  mounted()
  {
    const test = this.$store.getters.getPdfSrc;
    console.log(test);
    this.test()
  }
};

</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ccc;
  overflow: hidden;
}
a {
  color: inherit;
}
.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.action-bar .btn {
  font-size: 30px;
  color: #999;
}
.action-bar .btn svg {
  bottom: 0;
}
.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}
.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}
.action-bar .btn:active {
  filter: none !important;
}
.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}
.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}
.flipbook .viewport {
  width: 90vw;
  height: calc(100vh - 50px - 40px);
}
.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}
.credit {
  font-size: 12px;
  line-height: 20px;
  margin: 10px;
}
</style>
