let handler ={

    handleSubmitTaskForm: function(event){
        TaskToAdd = event.currentTarget;
        event.preventDefault();
        task.createTask(TaskToAdd)
    }
}