<template>
  <div class="container">
 

    <div class="header">

      <router-link to="/flip-book">flip book</router-link>

         <h1>{{ tfilaTitle }}</h1>

      <menu-icon class="contain-menu-icon" @click="showMenu = !showMenu" />

      <div v-if="showMenu" class="contain-menu" >

       <span @click="returnToHomePage()" >דף הבית</span>
       
       <div v-for="(tfila,i) in tfilaMenu" :key="i"> 

           <a  :href="`#${tfila.page}`" @click="hiddenMenu()"  > {{tfila.title}}</a>

       </div>  
      </div>
    </div >

     <div class="contain-pdf" v-for="i in numPages" :key="i" :id="i+start" >
          <pdf :src="src" :page="i+start"  > </pdf>
     </div>
 </div>
 
</template>

<script lang="ts">
import Vue from "vue";
import pdf from "vue-pdf";
import tfilaData from "../assets/tfila.json";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import Flipbook from "flipbook-vue";

export default Vue.extend({
  name: "Tfila",
  props: ["tfilaTitle"],
  components: {
    pdf,
    MenuIcon,
    Flipbook
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
    
    hiddenMenu()
    {
      this.start=0
      this.showMenu=!this.showMenu       
    },

    returnToHomePage(): void
    {
        this.$router.push({
            name: 'Home',
                    
        });
    },

    getSubTitle(id:number)
    {    
     
      let pageStart=Number(this.selectTfila?.subTitels?.find(f=>f.id==id)?.page)
     if(pageStart)
         this.$router.push('#'+pageStart);
    
         this.showMenu = !this.showMenu
     }
  },
  mounted(): void {

    //access to the store page

    // const test = this.$store.getters.getPdfSrc
    // console.log(test);

   this.src.promise.then((pdf: { numPages: undefined; }): void => {
    this.end = Number(this.selectTfila?.pages.end);
    this.start = Number(this.selectTfila?.pages.start);
    this.numPages =this.end-this.start;
    });
  },
});
</script>

<style scoped>
 

 .header{
  background-color:bisque; 
  width: 100%;
  position:fixed; 
  top: 0;
  z-index:1000;
  
}

.header h1{
  display: inline-block;
  z-index:1000;
}

.contain-menu-icon{
  display: inline-block;
  position: relative;
  top: 4px;
  left: 350px;
}

.contain-menu{
  cursor: pointer;
  position: relative;
  top: 2px;
  left: 400px;
 
}

.contain-menu span{
  font-size: large;
}

.contain-pdf{
  background-color: darkgrey;

} 


a{
  text-decoration: none;
}
</style>