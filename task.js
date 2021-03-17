let task ={

    createTask: function(content){

        let list = document.querySelector("#listedTasks");
        let newTask = document.createElement('li');
        newTask.innerText = content;
        list.appendChild(newTask)
        
    }
}