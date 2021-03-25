let handler ={

    handleSubmitTaskForm: function(event){

        event.preventDefault();
        let taskToAdd = document.querySelector("#task-form input")
        
        if (taskToAdd.value == ''){
            // si le champ est vide on envoie une erreur dans la console et on lance une animation sur le bouton
            console.error('Veuillez entrer une valeur');
            let addButton = document.querySelector("#task-form button")
            addButton.className = "button is-primary mt-5 bounce-top shake-bottom is-danger"
            taskToAdd.className = "input is-danger"
            addButton.addEventListener("animationend",
            (ev) => {
                addButton.className = "button is-primary mt-5"
                taskToAdd.className = "input"
            })   

        }else{
            task.createTask(taskToAdd.value)
        }
        task.resetInput();
    },

    // TODO : factoriser
    handleCheckBoxEvent: function(event){
        let tasktoArchive = event.currentTarget;

        if (tasktoArchive.closest("#listedTasks > div.notification.task.box.has-background-grey-lighter") !== null){
            let taskParentToArchive = tasktoArchive.closest("#listedTasks > div.notification.task.box.has-background-grey-lighter")
            let id = taskParentToArchive.id
            task.archiveTask(taskParentToArchive, id)
        }else{
            let taskParentToUnArchive = tasktoArchive.closest("#listedTasks > div.notification.task.box.has-background-warning")
            let id = taskParentToUnArchive.id
            task.unarchiveTask(taskParentToUnArchive, id)
        }
    },

    handleDeleteButton: function(event){

        let taskToDelete = event.currentTarget.closest("div>.notification")
        let id = event.currentTarget.closest("div>.notification").id
        task.deleteTask(taskToDelete , id)
    },

    handleLabelUpdateEvent: function(event){
        let labelUpdate = event.currentTarget
        let id = event.currentTarget.closest("div").id
        task.updateTask(labelUpdate.innerText, id)
    }
}