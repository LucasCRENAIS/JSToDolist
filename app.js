let app = {
   init: function(){
       let taskForm = document.querySelector("#task-form")
       taskForm.addEventListener('submit', handler.handleSubmitTaskForm);

       app.deleteTask();
   },

   deleteTask: function (){
        deleteButton = document.querySelector("li>button")
        deleteButton.addEventListener('click', handler.handleDeleteTask)
        
   }
}

document.addEventListener('DOMContentLoaded', app.init);