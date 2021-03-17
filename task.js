let task ={

    createTask: function(content){

        let list = document.querySelector("#listedTasks");
        let newTask = document.createElement('li');
        newTask.innerText = content;
        let newButton = document.createElement('button');
        newButton.innerText  = 'Supprimer'
        list.appendChild(newTask)
        newTask.appendChild(newButton)
    },

    deleteTask: function(newTask){

        let list = document.querySelector("#listedTasks");
        list.removeChild(newTask)
    }

}