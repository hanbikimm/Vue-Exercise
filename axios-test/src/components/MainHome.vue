<template>
  <div>
    <h1> Axios Test </h1>
    <input type="text" v-model="input.name" placeholder="name"> <br/>
    <input type="text" v-model="input.job" placeholder="job"><br/>
    <button @click="postUser()">저장</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MainHome',
    data(){
        return{
            input: {
              name: '',
              job: ''
            },
        }
    },
    methods:{
      postUser(){
        axios.post('https://reqres.in/api/users', this.input)
          .then(response => console.log(response.data))
          .catch(error => console.log(error));
      }
    }
}
</script>

<style>

</style>