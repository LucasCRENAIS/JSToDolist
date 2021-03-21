let task ={

    createTask: function(content){

        let taskTemplate = document.getElementById('newtask-template')
        let newTask = taskTemplate.content.cloneNode(true);
        let label = document.createElement('label')
        label.appendChild(document.createTextNode(content));

        // on peut rendre le contenu éditable ! (comme Trello)
        label.contentEditable = "true"
        
        let list = document.querySelector("#listedTasks");
        list.appendChild(newTask)
        let task = document.querySelector("#listedTasks :last-child .newtask.checkbox")

        // on met un eventListener sur les checkboxes
        checkbox = document.querySelector('#listedTasks :last-child .newtask.checkbox input[type="checkbox"]')
        checkbox.onchange = handler.handleCheckBoxEvent;   

        task.appendChild(label)
        
    },

    archiveTask: function(TaskToArchive){
        
        // si elle n'existe pas déjà, on crée une section dédiées aux tâches archivées
        let archiveDiv = document.querySelector("#archivedTasks")
        if (document.getElementById('archive-title') == null)
        {
            let archiveSection = document.createElement('h2')
            archiveDiv.appendChild(archiveSection)
            archiveSection.innerText  = 'Tâches complétées'
            archiveSection.className  = 'title is-4'
            archiveSection.id = "archive-title"
        }
        
        // on clone la tâche à déplacer et on hange son background en jaune
        archiveDiv.appendChild(TaskToArchive.cloneNode(true)).className = "task box has-background-warning"
        
        // on supprime l'ancienne tâche
        let list = document.querySelector("#listedTasks")
        list.removeChild(TaskToArchive)
        
        // on lui assigne un écouteur d'évennement
        checkbox = document.querySelector('#listedTasks :last-child .newtask.checkbox input[type="checkbox"]')
        checkbox.onchange = handler.handleCheckBoxEvent;   

        //** Bouton de suppression */
        // newTask.appendChild(newButton)
        // pour chaque bouton de suppression crée, on branche un écouteur d'évennement
        // newButton.addEventListener('click', handler.handleArchiveTask)

    },

    resetInput: function(){
        document.querySelector("#task-form input").value = ''
    }
}