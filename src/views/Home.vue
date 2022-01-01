<template>
<div id="nav">
    <div class="header">
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
  <button @click="getTfila('קריאת שמע שעל המיטה')"> קריאת שמע שע המיטה </button>
</div>

<div class="btn">
  <button @click="getTfila('ערב שבת')"> ערב שבת </button>
</div>
  </div> 


 
</template>

 <script lang="ts">
  

 export default{
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
//this.tfila=tfila
     }
 }


}
 
 </script>



<style>

#nav {
  background-color: rgb(154, 149, 149);
  margin: 0 auto;
  width: 20%;
  padding: 30px;
 
 
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
  width:70%;
  background: #bbb;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin: 10px;
  font-size: 16px;
  color:black;
  background-color:#f7eaea;
  
}

</style>
