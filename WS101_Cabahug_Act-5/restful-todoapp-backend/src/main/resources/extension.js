let data = [
    { id: 1, name: "Bryan", email: "bryan@gmail.com" },
    { id: 2, name: "Alice", email: "alice@gmail.com" },
]

function readAll() {
    var tbdata = document.querySelector(".table_data");
    var elements = "";
    data.map(d => (
        elements += `<tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>
                <button onclick="edit(${d.id})">Update</button>
                <button onclick="delet(${d.id})">Delete</button>
            </td>
        </tr>`
    ))
    tbdata.innerHTML = elements;
}

function createForm() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".addbtn").style.display = "none";

}

function add() {
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var newObj = {id:3, name, email};
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".addbtn").style.display = "block";
    readAll();
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";
    document.querySelector(".addbtn").style.display = "none";

    var updateObj = data.find(f => f.id === id);
    document.querySelector(".update_id").value = updateObj.id;
    document.querySelector('.uname').value = updateObj.name;
    document.querySelector('.uemail').value = updateObj.email;
}

function update() {
    var id = parseInt(document.querySelector(".update_id").value);
    var name = document.querySelector('.uname').value;
    var email = document.querySelector('.uemail').value;
    var updateObj = {id, name, email};

    var index = data.findIndex(f => f.id == id);
    data[index] = updateObj;
    document.querySelector(".update_form").style.display = "none";
    document.querySelector(".addbtn").style.display = "block";

    readAll();
}

function delet(id) {
    var newdata = data.filter(f=>  f.id !== id);
    data = newdata;
    readAll();

}