<template>
    <div class="toDoContainer">
        <h1>Add a todo task</h1>
        <label class="toDoLabel">Priority of Task</label>
        <input type="textbox" v-model="priority" style="border-radius:35px;width: -webkit-fill-available;">
        <label class="toDoLabel">Enter the task to be done</label>
        <input type="textbox" v-model="todotask" style="border-radius:35px;width: -webkit-fill-available;">
        <button @click="submitTask()" class="confirmButton">Submit</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ToDo',
    data(){
        return{
            priority : '',
            todotask: ''
        }
    },
    methods:{
        async submitTask(){
            this.$router.push('to');
            const taskAdded = await axios
                .post(
                    "http://localhost:3000/todo",
                    {   tododata: `${this.todotask}` ,
                        priority: `${this.priority}`,  
                    },
                )
                .catch((err) => {
                    console.log(err);
                });
            taskAdded && taskAdded.status == 200
                ? console.log('successfull')
                : "";
        }
    }
}
</script>

<style lang="scss" scoped>
div[class="toDoContainer"]{
    display: flex;
    flex-direction: column;
    label[class="toDoLabel"]{
        margin: 1em;
    }
    button[class="confirmButton"]{
        margin:10em;
        align-self: center;
        background-color: darkmagenta;
        color: white;
    }
}
</style>