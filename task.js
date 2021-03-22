const todos = [];

let task ={

    createTask: function(content){

        // on ajoute le texte de la tâche au tableau todos
        todos.push(content)
        console.log(todos)
        this.addToLocalStorage(todos);

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

        // on met un eventListener sur le bouton delete
        deleteButton = document.querySelector('#listedTasks :last-child button.delete')
        deleteButton.onclick = handler.handleDeleteButton;  
        
        task.appendChild(label)
        
    },

    addToLocalStorage: function(todos){
        localStorage.setItem('todos', JSON.stringify(todos));
    },

    getFromLocalStorage: function() {
        const reference = localStorage.getItem('todos');
        // if reference exists
        if (reference) {
          // converts back to array and store it in todos array
          todos = JSON.parse(reference);
          return todos
        }
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
        
        // on clone la tâche à déplacer et on change son background en jaune
        archiveDiv.appendChild(TaskToArchive.cloneNode(true)).className = "notification task box has-background-warning"

        // on raye la tâche
        document.querySelector("#archivedTasks :last-child label :last-child ").style = "text-decoration:line-through"
        
        // on supprime l'ancienne tâche
        let list = document.querySelector("#listedTasks")
        list.removeChild(TaskToArchive)
        
        // on lui assigne un écouteur d'évennement sur la checkbox
        checkbox = document.querySelector('#archivedTasks :last-child .newtask.checkbox input[type="checkbox"]')
        checkbox.onchange = handler.handleCheckBoxEvent;   

        // on replace un eventListener sur le bouton delete
        deleteButton = document.querySelector('#archivedTasks :last-child button.delete')
        deleteButton.onclick = handler.handleDeleteButton;  

    },

    unarchiveTask: function(TaskToUnArchive){
        
        let listDiv = document.querySelector("#listedTasks")
        // on clone la tâche à déplacer et on change son background en gris
        listDiv.appendChild(TaskToUnArchive.cloneNode(true)).className = "notification task box has-background-grey-lighter"

        // on déraye la tâche
        document.querySelector("#listedTasks :last-child label :last-child ").style = ""
        // on lui remet un écouteur d'évennement sur la checkbox
        checkbox = document.querySelector('#listedTasks :last-child .newtask.checkbox input[type="checkbox"]')
        checkbox.onchange = handler.handleCheckBoxEvent;   

        // on replace un eventListener sur le bouton delete
        deleteButton = document.querySelector('#listedTasks :last-child button.delete')
        deleteButton.onclick = handler.handleDeleteButton;  
        
        // on supprime l'ancienne tâche
        let list = document.querySelector("#archivedTasks")
        list.removeChild(TaskToUnArchive)

        if (document.querySelector('.task.box.has-background-warning') == null)
        {
            document.querySelector('#archive-title').remove()
        }
    },

    deleteTask: function(taskToDelete){

        taskToDelete.remove()

        if (document.querySelector('.task.box.has-background-warning') == null)
        {
            document.querySelector('#archive-title').remove()
        }
    },

    resetInput: function(){
        document.querySelector("#task-form input").value = ''
    }
}