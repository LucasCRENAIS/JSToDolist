let app = {
   init: function(){

    app.BindButtons()
    app.loadTodos()

   },

   BindButtons: function(){

      let taskForm = document.querySelector("#task-form")
      taskForm.addEventListener('submit', handler.handleSubmitTaskForm);
      
   },

   loadTodos: function(){
      task.getFromLocalStorage()
      for (let index = 0; index < JSON.parse(localStorage.getItem('todos')).length; index++) {
      // on charge les tâches, leurs id, leurs status
         let content = JSON.parse(localStorage.getItem('todos'))[index]['name']
         let id = JSON.parse(localStorage.getItem('todos'))[index]['id']
         let completed = JSON.parse(localStorage.getItem('todos'))[index]['completed']
         task.loadTasks(content, id, completed)         
      }
   }
}
document.addEventListener('DOMContentLoaded', app.init);