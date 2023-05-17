<template>
      <div>
       <h1>
        TODO it! 
        <button class="btnAPI" @click="goToApiMain()">API TEST</button>
      </h1>
       
    </div>
</template>

<script>
export default {
  methods: {
    goToApiMain(){
      this.$router.push({
        name: 'UserMain'
      });
    }
    
  }
  
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
.btnAPI {
  border-color: gray;
  cursor: pointer;
}
</style>