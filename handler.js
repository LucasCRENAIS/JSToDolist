let handler ={

    handleSubmitTaskForm: function(event){

        event.preventDefault();
        let TaskToAdd = document.querySelector("#task-form input").value
        if (TaskToAdd == ''){
            console.error('Veuillez entrer une valeur');
        }else{
            task.createTask(TaskToAdd)
        }
        document.querySelector("#task-form input").value = ''
    },

    handleDeleteTask: function(event){

        event.preventDefault();
        let TaskToDelete = document.querySelector("#task-form input").value
        task.deleteTask(TaskToDelete)
    }
}