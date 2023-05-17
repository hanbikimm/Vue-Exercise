<template>
  <div>
    <transition-group name="list" tag="ul"> <!--트랜지션 그룹으로 변경 -->
        <li class="shadow" v-for="todoItem in getTodoList" v-bind:key="todoItem.content">
        <!-- <li class="shadow"> -->
          <i class="checkBtn fas fa-check" @click="changeStateTodo(todoItem.id)" >
            <span :class="[todoItem.completed === true ? 'textCompleted':'']">{{todoItem.content}}</span>
          </i>

          <span class="moveBtn" @click="goToDetail(todoItem.id)">
              <i class="fas fa-trash-alt">이동</i>
          </span>
          <span class="removeBtn" @click="removeTodo(todoItem.id)">
              <i class="fas fa-trash-alt">삭제</i>
          </span>
        </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      getTodoList: 'getTodoList'
    })
  },

  methods: {
    ...mapMutations({
      removeTodo: 'removeTodo',
      changeStateTodo: 'changeStateTodo',
    }),

    goToDetail(todoID){
      this.$router.push({
        name: 'TodoDetail',
        params: { 
          id: todoID
        }
      })
    },

    
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #22a5fc;
  margin-right: 5px;
  cursor: pointer;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
  cursor: pointer;
}
.removeBtn {
  margin-left: 20px;
  color: #de4343;
  cursor: pointer;
}

.moveBtn {
  margin-left: auto;
  color:darkgreen;
  cursor: pointer;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>