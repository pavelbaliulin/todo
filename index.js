window.onload = function () {
    var todolist = [];
    document.getElementById('create').onclick = function (){
        var d = document.getElementById('in').value;
        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todolist.length;
        todolist[i] = temp;
        console.log(todolist);
        out();

    }
    function out(){
    var out='';
    for(var key in todolist){
        if(todolist[key].check == true){
            out += '<input type="checkbox" checked>'

        }else{
            out += '<input type="checkbox">'
        }

        out += todolist[key].todo + '<br>';

    }
    document.getElementById('out').innerHTML = out;

    }
    function del() {
       if(document.getElementById('in').checked){
        $('delete').removeProp('checked');
       }
    }
    
    
}




