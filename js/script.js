const { createApp } = Vue

createApp({
  data() {
    return {
      toDoList: [
        {
            text: 'ciao', 
            done: false
        }
      ], 
      message: ''
    }
  },
  methods: {
    addToDo(){
        if(this.message === ''){
            alert(`Devi inserire qualcosa all'interno del campo input`);
        }else{
            const toDo = {
                text: this.message,
                done: false
            };
            this.toDoList.push(toDo);
            this.message = '';
        }
    }, 
    toDoDone(index){
        if(this.toDoList[index].done === false){
            this.toDoList[index].done = true;
        }else{
            this.toDoList[index].done = false;
        }
    }, 
    removeToDo(index){
        this.toDoList.splice(index, 1)
    }
  }
}).mount('#app')