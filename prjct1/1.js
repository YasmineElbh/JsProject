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
    }
}