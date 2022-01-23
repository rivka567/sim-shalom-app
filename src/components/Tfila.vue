<template>
  <div id="hello">

    <div class="header">
      <h1>{{ tfilaTitle }}</h1>
      <menu-icon @click="showMenu = !showMenu" />
    </div>
      <div v-if="showMenu">
         <div v-for="tfila in tfilaMenu" :key="tfila.title">   <span  @click="getSubTitle(tfila.title)" style="cursor: pointer;">    {{tfila.title}}  </span>    </div>  
     
      </div>


    <pdf v-for="i in numPages" :key="i" :src="src" :page="i + start " > </pdf>
    <!-- style="display: inline-block; width: 25%" -->
  
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pdf from "vue-pdf";
import tfilaData from "../assets/tfila.json";
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default Vue.extend({
  name: "Tfila",
  props: ["tfilaTitle"],
  components: {
    pdf,
    MenuIcon,
  },
  data() {
    return {
      src:pdf.createLoadingTask("sidur.pdf"),
      numPages: 0,
      start: 0,
      end: 0,
      tfilaData: tfilaData,
      showMenu: false,
      selectTfila: tfilaData.find((f) => f.title == this.tfilaTitle),
      tfilaMenu: tfilaData.find((f) => f.title == this.tfilaTitle)?.subTitels,
    };
  },
  destroyed() {
    console.log("destory");
  },
  methods: {
    getSubTitle(subTitle:string)
    {
      alert(subTitle)
     let pageStart=Number(this.selectTfila?.subTitels?.find(f=>f.title==subTitle)?.page)
     this.start=pageStart
     alert(pageStart)
    }
  },
  mounted(): void {

    //access to the store page

    // const test = this.$store.getters.getPdfSrc
    // console.log(test);
    
    console.log("from mounted " + this.tfilaTitle);


    console.log("tfila " + this.selectTfila);

    this.end = Number(this.selectTfila?.pages.end);
    this.start = Number(this.selectTfila?.pages.start);
    this.numPages = Number(this.end) - Number(this.start);
    console.log("from mounted start " + this.start);
    console.log("from mounted end " + this.end);

    console.log("from mounted num pages " + this.numPages);

    // this.src.promise.then((pdf: { numPages: undefined; }): void => {

    // });
  },
});
</script>

<style>
#hello {
  background-color: rgb(154, 149, 149);
  margin: 0 auto;
  width: 20%;
  padding: 30px;
}
.header {
}
</style>