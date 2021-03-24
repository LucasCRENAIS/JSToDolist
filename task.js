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

        // on met un eventListener sur le bouton delete
        deleteButton = document.querySelector('#listedTasks :last-child button.delete')
        deleteButton.onclick = handler.handleDeleteButton;  

        // on met un eventListener sur les checkboxes
        checkbox = document.querySelector('#listedTasks :last-child .newtask.checkbox input[type="checkbox"]')
        checkbox.onchange = handler.handleCheckBoxEvent;   

        // si il s'agit d'un tâche achivée, on lui applique un visuel spécifique
        if (completed === true) 
        {
            archivedTask = document.querySelector('#listedTasks :last-child.notification.task.box')
            archivedTask.className = "slide-right notification task box has-background-warning"
            archivedCheckbox = document.querySelector('#listedTasks :last-child .newtask.checkbox input[type="checkbox"]')
            archivedCheckbox.checked = true
        }
        
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

        TaskToArchive.className = "notification task box has-background-warning"
        this.toggleStatus(true, id)
    },

    unarchiveTask: function(TaskToUnArchive, id){
        
        TaskToUnArchive.className = "notification task box has-background-grey-lighter"
        this.toggleStatus(false, id)
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

    deleteTask: function(taskToDelete, id){

    // on décode les données su localstorage (
    item = JSON.parse(localStorage.getItem('todos'))

    // si il y a des données décodées
    item != null

        // on sait que c'est un tableau qui est stocké donc on parcours chaque index
        for (let index = 0; index < item.length; index++) 
        {
            const element = item[index];
            // si un des id correspond à l'id en paramètre
            if (id == element.id)
            {
                // on supprime cet objet de l'index courant dans le tableau todos
                todos.splice(index, 1)    
                // on encode ce tableau en JSON et on le replace dans le localStorage  
                localStorage.setItem('todos', JSON.stringify(todos));
                // on supprime la carte correspondante
                taskToDelete.className = "slide-out-bck-center notification task box has-background-danger"
                let divToDelete = document.getElementById(id)
                // on attend la fin de l'animation pour supprimer la div
                divToDelete.addEventListener("animationend",
                (ev) => {
                    taskToDelete.remove()
                })                
            }
        }
    },

    resetInput: function(){
        document.querySelector("#task-form input").value = ''
    },
}