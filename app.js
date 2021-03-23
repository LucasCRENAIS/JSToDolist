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
         task.loadTasks(JSON.parse(localStorage.getItem('todos'))[index]['name'])         
      }
   }
}
document.addEventListener('DOMContentLoaded', app.init);