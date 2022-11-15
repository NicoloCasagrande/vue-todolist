const { createApp } = Vue

createApp({
  data() {
    return {
      toDoList: [], 
      message: ''
    }
  },
  methods:{
    addToDo(){
        const toDo = {
            text: message,
            done: false
        }
        this.toDoList.push(toDo)
        message = '';
    }
  }
}).mount('#app')