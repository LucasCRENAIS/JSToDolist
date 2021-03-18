let app = {
   init: function(){

    app.BindButtons()

   },

   BindButtons: function(){

        let taskForm = document.querySelector("#task-form")
        taskForm.addEventListener('submit', handler.handleSubmitTaskForm);
   },
}

document.addEventListener('DOMContentLoaded', app.init);