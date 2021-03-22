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
      // todos.forEach('name', task.createTask('name'))
      for (let index = 0; index < JSON.parse(localStorage.getItem('todos'))['name'].length; index++) {
         task.loadTasks(JSON.parse(localStorage.getItem('todos'))['name'][index])         
      }
   }
}
document.addEventListener('DOMContentLoaded', app.init);