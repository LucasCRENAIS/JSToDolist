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

    handleCheckBoxEvent: function(event){
        let TasktoArchive = event.currentTarget;

        if (TasktoArchive.closest("#listedTasks > div.task.box.has-background-grey-lighter") !== null){
            let TaskParentToArchive = TasktoArchive.closest("#listedTasks > div.task.box.has-background-grey-lighter")
            task.archiveTask(TaskParentToArchive)
        }

        if (TasktoArchive.closest("#archivedTasks > div.task.box.has-background-warning") !== null) {
            let TaskParentToUnArchive = TasktoArchive.closest("#archivedTasks > div.task.box.has-background-warning")
            task.unarchiveTask(TaskParentToUnArchive)
        }
    }
}