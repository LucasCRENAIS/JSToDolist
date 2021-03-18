let task ={

    createTask: function(content){

        let list = document.querySelector("#listedTasks");
        let newTask = document.createElement('li');
        newTask.innerText = content;
        let newButton = document.createElement('button');
        newButton.innerText  = 'Archiver'
        list.appendChild(newTask)
        newTask.appendChild(newButton)

        // pour chaque bouton de suppression crée, on branche un écouteur d'évennement
        newButton.addEventListener('click', handler.handleArchiveTask)        
    },

    archiveTask: function(TaskToArchive){
        //  on supprimer la tâche de la liste
        let list = document.querySelector("#listedTasks");
        list.removeChild(TaskToArchive)
        // on crée une section dédiées aux tâches archivées et on y place la tâche
        let archive = document.querySelector("#archivedTasks");
        let newArchive = document.createElement('li');
        newArchive.innerText = TaskToArchive;
        archive.prepend(TaskToArchive)
        // on change le texte du bouton
        let replaceButton = document.querySelector('#archivedTasks>li>button')
        replaceButton.innerText = 'Effacer'
    },

    resetInput: function(){
        document.querySelector("#task-form input").value = ''
    }

}