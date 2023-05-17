<template>
    <div class="content">
        <div class="header">
            <span class="moveBtn" @click="goToList()">← 돌아가기</span>
        </div>
        <div class="body">
            <div>
            <h1>Post User</h1>
            <input type="text" v-model="inputUser.name" placeholder="이름을 입력하세요."> <br/>
            <input type="text" v-model="inputUser.job" placeholder="직업을 입력하세요."><br/>
            <br/>
            <button @click="postUser(inputUser)">
                저장
            </button>
        </div>

        <div>
            <h1>Get User</h1>
            <input type="text" v-model="id" placeholder="조회하실 숫자 ID를 입력하세요.">
            &nbsp;
            <button @click="getUser(id)">
                조회
            </button>
        </div>
        </div>
        
    </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'UserMain',
    data(){
        return{
            inputUser: {
                name:'',
                job: ''
            },

            id: '',
        }
    },
    
    methods: {
        ...mapActions({
            postUser: 'postUser',
            getUser: 'getUser'
        }),

        goToList(){
            this.$router.push({
                name: 'TodoMain'
            })
        }
    }
}
</script>

<style>
.content{
    text-align: left;
    background-color: white;
    margin: 130px 200px;
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