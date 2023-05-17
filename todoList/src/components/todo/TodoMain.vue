<template>
  <div>
    <TodoHeader />
    
    <TodoInput/>
    <Modal v-if="isTodoNull"></Modal>
    
    <TodoList/>
    
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from "@/components/todo/TodoHeader.vue";
import TodoInput from "@/components/todo/TodoInput.vue";
import TodoList from "@/components/todo/TodoList.vue";
import TodoFooter from "@/components/todo/TodoFooter.vue";
import Modal from "@/components/common/Modal.vue";
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    Modal
  },

  computed: {
    ...mapGetters({
      isTodoNull: 'isTodoNull'
    })
  },

  methods: {
    ...mapMutations({
      setTodoList: 'setTodoList'
    }),
  },

  created(){
    if(localStorage.getItem("todoList") !== null){
      this.setTodoList(JSON.parse(localStorage.getItem("todoList")));
    }
  },

};
</script>

<style>
body {
  text-align: center;
  background: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>