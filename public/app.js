const newTask = document.getElementById('new-task');
const add = document.getElementById('add');
const list = document.getElementById('list');
const placeholder = document.getElementById('placeholder');

let id = 0;

add.onclick = () => {
    if(newTask.value) {
        id === 0 && list.removeChild(placeholder);
        const li = document.createElement("li");
        const p = document.createElement('p');
        const done = document.createElement('button');
        const remove = document.createElement('button');
        const check = document.createElement('i');
        const div = document.createElement('div');

        check.classList.add('fa-solid');
        check.classList.add('fa-check');

        remove.onclick = () => {
            list.removeChild(li);
        }
        remove.innerText = 'X';
        remove.classList.add('remove');

        done.onclick = () => {
            if(li.classList.contains('complete')) {
                li.classList.remove('complete');
            } else {
                li.classList.add('complete');
            }
        }
        done.appendChild(check);
        done.classList.add('done');
        
        p.innerText = newTask.value;
        li.id = id;
        div.appendChild(done);
        div.appendChild(remove);
        li.appendChild(p);
        li.appendChild(div);
        list.appendChild(li);
        newTask.value = '';
        id++;
    }
}