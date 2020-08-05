import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ToDo from './components/todo.vue'
import ToDoList from './components/todoList.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/todo' , component: ToDo},
  { path: '/to' , component: ToDoList}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
        router
}).$mount('#app')
