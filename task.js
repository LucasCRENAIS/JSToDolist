let task ={

    createTask: function(content){

        let list = document.querySelector("#listedTasks");
        let newTask = document.createElement('li');
        newTask.className = 'task';
        newTask.innerText = content;
        // on rend le contenu éditable ! (comme Trello)
        newTask.contentEditable = "true"
        let newButton = document.createElement('button');
        newButton.innerText  = 'Archiver'
        newButton.className = 'button is-warning'
        list.appendChild(newTask)
        newTask.appendChild(newButton)

        // pour chaque bouton de suppression crée, on branche un écouteur d'évennement
        newButton.addEventListener('click', handler.handleArchiveTask)
        
        // on branche un écouteur d'évennement sur chaque tâche pour la rendre éditable
        document.querySelector("#listedTasks>li").addEventListener('click', handler.handleModifyTask)
    },

    archiveTask: function(TaskToArchive){
        
        // on supprime la tâche de la ToDolist
        let list = document.querySelector("#listedTasks");
        list.removeChild(TaskToArchive)
        // si elle n'existe pas déjà, on crée une section dédiées aux tâches archivées
        let archiveDiv = document.querySelector("#archivedTasks")
        if (document.getElementById('archive-title') == null)
        {
            let archiveSection = document.createElement('h2')
            archiveDiv.appendChild(archiveSection)
            archiveSection.innerText  = 'Tâches archivées'
            archiveSection.className  = 'title is-4'
            archiveSection.id = "archive-title"
        }
        // et on y place la tâche
        newArchive = document.createElement('li')
        newArchive.innerText  = TaskToArchive
        archiveDiv.append(TaskToArchive)
        // on remplace le texte du bouton
        TaskToArchive.querySelector('button').className = 'delete'
    },

    resetInput: function(){
        document.querySelector("#task-form input").value = ''
    }

}