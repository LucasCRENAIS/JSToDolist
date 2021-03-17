let handler ={

    handleSubmitTaskForm: function(event){
        event.preventDefault();
        let TaskToAdd = document.querySelector("#task-form input").value
        task.createTask(TaskToAdd)
    }
}