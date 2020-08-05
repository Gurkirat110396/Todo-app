<template>
    <div>
        <h1>Todo Tasks List</h1>
        <table>
            <tr>
                <th>Priority of task</th>
                <th>Task to be done</th>
            </tr>
            <tr v-for="todotask in todotasks" :key="todotask.id">
                <td>{{todotask.priority}}</td>
                <td>{{todotask.tododata}}</td>
            </tr>
        </table>
        <button class="addNewTask" @click="addNewTask()">Add New Task</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'ToDoList',
    data(){
        return{
            todotasks: Object
        }
    },
    mounted(){
        axios.get("http://localhost:3000/todo",{
          }).then(response => {
            this.todotasks = response.data
            console.log(this.todotasks)
        })
    },
    methods:{
        addNewTask(){
            this.$router.push('todo');
        }
    }
}
</script>>

<style lang="scss" scoped>
table{
    align-self: center;
    display: -webkit-inline-box;
    th,tr,td{
        border: 1px solid black;
        border-collapse: collapse;
    }
}
button[class="addNewTask"]{
    align-self: center;
    color: white;
    background-color: darkmagenta;
    margin:1em;
}
</style>