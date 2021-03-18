let handler ={

    handleSubmitTaskForm: function(event){

        event.preventDefault();
        let TaskToAdd = document.querySelector("#task-form input").value
        if (TaskToAdd == ''){
            console.error('Veuillez entrer une valeur');
        }else{
            task.createTask(TaskToAdd)
        }
        task.resetInput();
    },

    handleDeleteTask: function(event){

        let TaskDotDelete = event.currentTarget;
        let TaskParentToDelete = TaskDotDelete.closest("#listedTasks>li")
        TaskParentToDelete.remove()
    }
}