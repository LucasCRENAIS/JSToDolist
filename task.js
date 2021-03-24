let todos = [];

let task ={

    createTask: function(content){
        
        let newTodo = {
            id: Date.now(),
            name: content,
            completed: false
        };
        
        // on ajoute le texte de la tâche au tableau todos
        todos.push(newTodo)
        // on passe ce tableau au localstorage
        localStorage.setItem('todos', JSON.stringify(todos));
        let id = newTodo.id
        let completed = newTodo.completed
        // on passe le contenu à la fonction qui va charger la tâche sur la page
        this.loadTasks(content, id, completed)
    },


    loadTasks: function(content, id, completed){

        let taskTemplate = document.getElementById('newtask-template')
        let newTask = taskTemplate.content.cloneNode(true);

        let label = document.createElement('label')
        label.appendChild(document.createTextNode(content));

        // on peut rendre le contenu éditable ! (comme Trello)
        label.contentEditable = "true"
        
        let list = document.querySelector("#listedTasks");
        list.appendChild(newTask)
        let task = document.querySelector("#listedTasks :last-child .newtask.checkbox")

        // si il s'agit d'une tâche archivée

        // on met un eventListener sur les checkboxes
        checkbox = document.querySelector('#listedTasks :last-child .newtask.checkbox input[type="checkbox"]')
        checkbox.onchange = handler.handleCheckBoxEvent;   

        // si il s'agit d'un tâche achivée, on lui applique un visuel spécifique
        if (completed === true) 
        {
            archivedTask = document.querySelector('#listedTasks :last-child.notification.task.box')
            archivedTask.className = "notification task box has-background-warning"
            archivedCheckbox = document.querySelector('#listedTasks :last-child .newtask.checkbox input[type="checkbox"]')
            archivedCheckbox.checked = true
        }

        // on met un eventListener sur le bouton delete
        deleteButton = document.querySelector('#listedTasks :last-child button.delete')
        deleteButton.onclick = handler.handleDeleteButton;  
        
        task.appendChild(label)


        
        // on donne un id à notre tâche
        if (id){
            let taskId = document.querySelector('#listedTasks :last-child.notification.task.box')
            taskId.id = id
        }


    },

    getFromLocalStorage: function() {
        const reference = localStorage.getItem('todos');
        // si il y a une entrée "todos" en 
        if (reference) {
          // on reconverti cette entrée en tableau et on la stock dans le tableau "todos"
          todos = JSON.parse(reference);
          return todos
        }
    },

    archiveTask: function(TaskToArchive, id){
        
        // si elle n'existe pas déjà, on crée une section dédiées aux tâches archivées
        // let archiveDiv = document.querySelector("#archivedTasks")
        // if (document.getElementById('archive-title') == null)
        // {
        //     let archiveSection = document.createElement('h2')
        //     archiveDiv.appendChild(archiveSection)
        //     archiveSection.innerText  = 'Tâches complétées'
        //     archiveSection.className  = 'title is-4'
        //     archiveSection.id = "archive-title"
        // }
       
        // on clone la tâche à déplacer et on change son background en jaune
        // archiveDiv.appendChild(TaskToArchive.cloneNode(true)).className = "notification task box has-background-warning"

        // // on raye la tâche
        // document.querySelector("#archivedTasks :last-child label :last-child ").style = "text-decoration:line-through"
        
        // // on supprime l'ancienne tâche
        // let list = document.querySelector("#listedTasks")
        // list.removeChild(TaskToArchive)
        
        // // on assigne un écouteur d'évennement sur la checkbox
        // checkbox = document.querySelector('#archivedTasks :last-child .newtask.checkbox input[type="checkbox"]')
        // checkbox.onchange = handler.handleCheckBoxEvent;   

        // // on replace un eventListener sur le bouton delete
        // deleteButton = document.querySelector('#archivedTasks :last-child button.delete')
        // deleteButton.onclick = handler.handleDeleteButton;  

        TaskToArchive.className = "notification task box has-background-warning"
        this.toggleStatus(true, id)
    },

    toggleStatus : function(status, id) {
        
        // on décode les données su localstorage (
        item = JSON.parse(localStorage.getItem('todos'))

        // si il y a des données décodées
        item != null

        // on sait que c'est un tableau qui est stocké donc on parcours chaque index
        for (let index = 0; index < item.length; index++) {
            const element = item[index];
            // si un des id correspond à l'id en paramètre
            if (id == element.id)
            {
            // on construit un nouvel objet qui contient le status fourni en paramètre
            // pour remplir les autres valeurs on récupère les données déjà existantes 
                let newStatus = 
                {
                    id: element.id,
                    name: element.name,
                    completed: status
                };

                // on place cet objet a l'index courant dans le tableau todos
                todos.splice(index, 1, newStatus)    
                // on encode ce tableau en JSON et on le stocke dans le localStorage  
                localStorage.setItem('todos', JSON.stringify(todos));

            }
        }
    },

    unarchiveTask: function(TaskToUnArchive, id){
        
        // let listDiv = document.querySelector("#listedTasks")
        // // on clone la tâche à déplacer et on change son background en gris
        // listDiv.appendChild(TaskToUnArchive.cloneNode(true)).className = "notification task box has-background-grey-lighter"

        // // on déraye la tâche
        // document.querySelector("#listedTasks :last-child label :last-child ").style = ""
        // // on lui remet un écouteur d'évennement sur la checkbox
        // checkbox = document.querySelector('#listedTasks :last-child .newtask.checkbox input[type="checkbox"]')
        // checkbox.onchange = handler.handleCheckBoxEvent;   

        // // on replace un eventListener sur le bouton delete
        // deleteButton = document.querySelector('#listedTasks :last-child button.delete')
        // deleteButton.onclick = handler.handleDeleteButton;  
        
        // // on supprime l'ancienne tâche
        // let list = document.querySelector("#archivedTasks")
        // list.removeChild(TaskToUnArchive)

        // if (document.querySelector('.task.box.has-background-warning') == null)
        // {
        //     document.querySelector('#archive-title').remove()
        // }

        TaskToUnArchive.className = "notification task box has-background-grey-lighter"
        this.toggleStatus(false, id)
    },

    deleteTask: function(taskToDelete){

        taskToDelete.remove()
        // on enlève le titre de la section tâches archivées si cette dernière est vide
        if (document.querySelector('.task.box.has-background-warning') == null)
        {
            document.querySelector('#archive-title').remove()
        }
    },

    resetInput: function(){
        document.querySelector("#task-form input").value = ''
    }
}