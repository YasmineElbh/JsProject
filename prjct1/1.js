document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newatask input').value.length == 0){
        alert("Please Enter a Task");
    }
    else{
        document.querySelector('#tasks').innerHTML += 
        `<div class="task">
            <span id ="takename"> ${document.querySelector('#newatask input').value}</span>
            <button class="delete"><i class="fa-solid fa-delete-left"></i></button>
        </div>`;
        var current_task = document.querySelectorAll(".delete");
        for(var i = 0;i < current_task.length;i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}