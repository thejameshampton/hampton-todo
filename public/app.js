const newTask = document.getElementById('new-task');
const add = document.getElementById('add');
const table = document.getElementById('table');
const tableBody = document.getElementById('body');

let id = 0;

add.onclick = () => {
    if(newTask.value) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const done = document.createElement('button');
        const doneTD = document.createElement('td');
        const remove = document.createElement('button');
        const removeTD = document.createElement('td');
        
        remove.onclick = () => {
            tableBody.removeChild(tr);
        }
        remove.innerText = 'X';
        remove.classList.add('remove');
        removeTD.appendChild(remove);

        done.onclick = () => {
            if(tr.classList.contains('complete')) {
                tr.classList.remove('complete');
            } else {
                tr.classList.add('complete');
            }
        }
        done.innerText = "Complete";
        done.classList.add('done');
        doneTD.appendChild(done);

        td.innerText = newTask.value;
        td.id = id;
        tr.appendChild(td);
        tr.appendChild(doneTD);
        tr.appendChild(removeTD);
        tableBody.appendChild(tr);
        newTask.value = '';
        id++;
    }
}