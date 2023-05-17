<template>
  <div class="content">
    <div class="header">
        <span class="moveBtn" @click="goToList()">← 돌아가기</span>
    </div>
    
    <div class="body">
        <h1>
            {{ getTodoItem.id }}
        </h1>
        <p>
            할 일: {{ getTodoItem.content }}
        </p>
        <p>
            상태: {{ showState }}
        </p>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed:{
        ...mapGetters({
            getTodoItem: 'getTodoItem'
        }),

        showState(){
            if(this.getTodoItem.completed === true){
                return "완료";
            }else{
                return "진행 중";
            }
        }
    },

    methods: {
        ...mapMutations({
            setTodoItem: 'setTodoItem'
        }),

        goToList(){
            this.$router.push({
                name: 'TodoMain'
            })
        }
    },

    created(){
        this.setTodoItem(this.$route.params.id);
    }
}
</script>

<style>
.content{
    text-align: left;
    background-color: white;
    margin: 150px 200px;
}

.header{
    padding: 20px 20px;
}

.moveBtn{
    cursor: pointer;
}

.body{
    text-align: center;
    padding-bottom: 80px;
}

</style>