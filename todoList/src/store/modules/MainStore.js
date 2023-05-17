const state = {
    todo: '',
    todoList:[],
    todoIsNull: false,
    todoItem: {},

    registerUser: {},
    findUser: {}
}

const mutations = {
    setTodoList(state, data){
        state.todoList = data;
    },

    removeTodoList(state){
        state.todoList = [];
        localStorage.clear();
    },

    addTodo(state, todo){
        if(todo === ''){
            state.todoIsNull = true;
            setTimeout(() => state.todoIsNull = false, 1500);
        }else{
            var numID;
            if(state.todoList.length === 0){
                numID = 1;
            }else{
                // 배열 마지막 요소의 id값 +1
                numID = state.todoList.at(-1).id + 1
            }

            var todoItem = {
                id: numID,
                content: todo,
                completed: false
            }

            state.todoList.push(todoItem);
            localStorage.setItem('todoList', JSON.stringify(state.todoList));
        }
    },

    removeTodo(state, todoID){
        state.todoList = state.todoList.filter(item => item.id !== todoID);
        localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },

    changeStateTodo(state, todoID){
        state.todoList.forEach(item => {
          if(item.id === todoID){
            item.completed = !item.completed;
          }
        })
        localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },

    setTodoItem(state, todoID){
        var index = state.todoList.findIndex(item => item.id === todoID);
        state.todoItem = state.todoList[index];
    },

    setRegisterUser(state, data){
        state.registerUser = data;
    },

    setFindUser(state, data){
        state.findUser = data;
    }
}

const getters = {
    getTodo(state){
        return state.todo;
    },

    getTodoList(state){
        return state.todoList;
    },

    isTodoNull(state){
        return state.todoIsNull;
    },

    getTodoItem(state){
        return state.todoItem;
    },
}

import axios from 'axios';
const actions = {
    postUser({ commit, state }, user){
        return axios.post('https://reqres.in/api/users', user)
            .then(response => {
                commit('setRegisterUser', response.data);
                alert(`${state.registerUser.name}님의 아이디는 ${state.registerUser.id} 입니다.`);
            })
            .catch(error => error.response.data);
    },

    getUser({commit, state }, userID){
        return axios.post(`https://reqres.in/api/users/${userID}`)
            .then(response => {
                commit('setFindUser', response.data);
                alert(`아이디 ${state.findUser.id}는 ${state.findUser.createdAt} 에 생성되었습니다.`);
            })
            .catch(error => console.log(error));
    }
}


export default{
    state,
    mutations,
    getters,
    actions
}