<template>
  <div>
    <h1> Store Test </h1>
    <input type="text" v-model="inputText">
    <button @click="setData(inputText)">저장</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'Main',
    data(){
        return{
            inputText: '',
            ...mapState({
                input: 'input'
            })
        }
    },
    methods:{
        ...mapMutations({
            setData : 'setData',
        }),
    }
}
</script>

<style>

</style>