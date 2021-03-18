let task ={

    createTask: function(content){

        let list = document.querySelector("#listedTasks");
        let newTask = document.createElement('li');
        newTask.innerText = content;
        let newButton = document.createElement('button');
        newButton.innerText  = 'Supprimer'
        list.appendChild(newTask)
        newTask.appendChild(newButton)

        // pour chaque bouton de suppression crée, on branche un écouteur d'évennement
        let deleteButton = document.querySelector("li>button")
        deleteButton.addEventListener('click', handler.handleDeleteTask)        
    },

    deleteTask: function(TaskToDelete){

        let list = document.querySelector("#listedTasks");
        list.removeChild(TaskToDelete)
    },

    resetInput: function(){
        document.querySelector("#task-form input").value = ''
    }

}