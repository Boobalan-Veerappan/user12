users1 = [
    { "name": "Krish", "age": 30 },
    { "name": "Manoj", "age": 38 },
    { "name": "Ramesh", "age": 33 },
    { "name": "Suresh", "age": 34 },
    { "name": "Jayesh", "age": 40 }

];
nameid=document.querySelector("#nameid");
add=document.querySelector("#addid");
ageid=document.querySelector("#ageid");

add.addEventListener("click",e=>{
    e.preventDefault();
    name=nameid.value;
age=ageid.value;
console.log('12333');
addUser(name,age);
})

addage=document.querySelector("#addage");
addage.addEventListener("click",e=>{
    e.preventDefault();
    search=document.querySelector("#addage").value;
    
})




if (localStorage.getItem("users") == null){
    localStorage.setItem("users", JSON.stringify(users));
}

addUser = function(name, age) {
    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
        users.push({ "name": name, "age": age });
        localStorage.setItem("users", JSON.stringify(users));
        showUsers(getUsers());
    }
}
removeUser = function (name) {
    //
}

incrementAge = function (name) {
    //
}
updateAge = function (name, age) {

}
getUsers = function () {
    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
        return users;
    }
}

searchUsers = function (name) {
    ulist = getUsers();
    ulist = ulist.filter(e=>e.name.toUpperCase().includes(name.toUpperCase()));
    return ulist;
}
incFunction= function(q)
{
   
    users = JSON.parse(localStorage.getItem("users"));
    users[q].age=Number.parseInt(users[q].age)+1;
    console.log(users[q].age);
    localStorage.setItem("users", JSON.stringify(users));
    showUsers(getUsers());
    
}
deleteFunction=function(w)
{
    users = JSON.parse(localStorage.getItem("users"));
    console.log(w);
        users.splice(w,1);
        localStorage.setItem("users", JSON.stringify(users));
        showUsers(getUsers());
    
}
editFunction=function(y)
{
    nameid.value=users[y].name;
    ageid.value=users[y].age;
    deleteFunction(y);
   
}

showUsers = function (usersData) {
    showusers = document.querySelector("#showusers");
    if (usersData.length > 0) {
        str = "<h5 class='text-muted'>User Details</h5>";
        var i=0;
        for (user of usersData) {
            str += `<div class="card">
        <div class="card-body">
                ${user.name} - ${user.age} 
                <p><button class="w3-btn w3-orange w3-xlarge" id="trash" onclick="deleteFunction(${i})">DELETE<i class="w3-margin-left fa fa-trash"></i></button>
                <button class="w3-btn w3-orange w3-xlarge" id="add"  onclick="incFunction(${i})">PLUSE<i class="w3-margin-left fa fa-add"></i></button>
                <button class="w3-btn w3-orange w3-xlarge" id="add"  onclick="editFunction(${i})">EDIT<i class="w3-margin-left fas fa-code"></i></button>
                </p>
                
        </div>
      </div>`
      i++;
        }
    } else {
        str = "There no users to show....";
    }
    showusers.innerHTML = str;
}


searchstr = document.querySelector("#searchstr");

searchstr.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        searchResult = searchUsers(e.target.value);
        showUsers(searchResult);
    }
})

showUsers(getUsers());

