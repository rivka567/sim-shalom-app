<template>
<div id="nav">
     <div class="header" style="color:black">
       <h1>סידור שים שלום</h1>
           </div>
 <div class="btn">

   <button @click="getTfila('השכמת הבוקר')" > השכמת הבוקר </button>
  
 </div>

 <div class="btn">
   <button @click="getTfila('תפילת שחרית')"> תפילת שחרית </button>
 </div>

 <div class="btn">
   <button @click="getTfila('תפילות וסגולות')"> תפילות וסגולות </button>
 </div>

 <div class="btn">
   <button @click="getTfila('תפילת מנחה')"> תפילת מנחה </button>
 </div>

 <div class="btn">
   <button @click="getTfila('תפילת ערבית')">תפילת ערבית </button>
 </div>

 <div class="btn">
   <button @click="getTfila('קריאת שמע שעל המיטה')"> קריאת שמע שעל המיטה </button>
 </div>

 <div class="btn">
   <button @click="getTfila('ערב שבת')"> ערב שבת </button>
 </div>

</div> 

 

</template>

 <script lang="ts">
import Vue from 'vue'

 export default Vue.extend({
  name:'Home',
  components:{
  
  },
  data()
  {
    return{
     'tfila':''
    }
  },
 methods:{
   getTfila(tfila:string)
     {
       this.$router.push({
            name: 'Tfila',
            params: {
                tfilaTitle: tfila
            }
});
     }
     
 }


})
 
 </script>



<style>

#nav {
  /* position: absolute; */
  /* top: 10%; */
  /* left: 40%; */
  background-color: rgb(154, 149, 149);
  margin: 0 auto;
  /* width: 100%; */
  min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
  padding: 30px;
 border-radius: 3%;
 box-sizing: border-box;
 
}



#nav a {
  font-weight: bold;
  color: #2c3e50;
  height: 100%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.btn{
  width: 100%;
  margin:0 auto;
}
button{
  margin: auto;
  width:80%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin: 10px;
  font-size: 16px;
  color:black;
  
}

</style>
