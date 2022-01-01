<template>
  <div class="hello">
<pdf src="sidur.pdf" :page="4"/>
  </div>
</template>

<script lang="ts">
import pdf from 'vue-pdf'
var loadingTask = pdf.createLoadingTask('sidur.pdf');


export default{
  name:'tfila',
  props:['tfilaTitle'],
  components:{
    pdf
  },
  mounted()
  {

  }
  
}

</script>

<style>

</style>