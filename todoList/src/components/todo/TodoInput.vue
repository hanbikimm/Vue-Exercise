<template>
  <div class="inputBox shadow">
    <input type="text" v-model="todo" @keyup.enter="addTodoThenInit(todo)"/>
    <span class="addContainer">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {

  data(){
    return{
      todo: ''
    }
  },

  computed: {
    ...mapGetters({
      getTodo: 'getTodo'
    }),
    
  },

  methods:{
    ...mapMutations({
      addTodo: 'addTodo'
    }),
    
    addTodoThenInit(todo){
      this.addTodo(todo);
      this.todo = '';
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: 95%;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeBtn{
  color: cadetblue;
}
</style>
