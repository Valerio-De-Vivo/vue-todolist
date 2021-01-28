var i = 0;
var txt = 'Cose da fare??';
var speed = 100; 

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var app = new Vue({
    el: "#container",
    data: {
        todo: '',
        todos: [],
        todosDone: []
    },
    methods: {
        aggiungi(){
            this.todos.push(this.todo);
            this.todos.sort();

            this.todo = '';
        },

        fatto(i) {
            this.todosDone.push(this.todos[i]);
            this.todos.splice(i,1)
        },

        undo(i) {
            this.todos.push(this.todosDone[i]);
            this.todosDone.splice(i,1);
            this.todos.sort();
        },

        cestino(i) {
            let r = confirm("Sei sicuro??");
            if (r == true) {
                this.todosDone.splice(i,1);
            } 
            
        },

        cancellaTutto () {
            let r = confirm("Sei sicuro??");
            if (r == true) {
                this.todosDone = [];
            } 
            
        }

    }
}); 