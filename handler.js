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

    handleArchiveTask: function(event){

        let TasktoArchive = event.currentTarget;
        let TaskParentToArchive = TasktoArchive.closest("#listedTasks>checkbox")
        task.archiveTask(TaskParentToArchive)
    }
}