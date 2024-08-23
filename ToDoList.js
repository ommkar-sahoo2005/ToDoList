let date = prompt("Enter Today's Date Plz (DD/MM/YYYY)");
let newDate = document.querySelector(".date");
let button = document.querySelector("#button");
let item = document.querySelector("#input");
let list = document.querySelector("#list");
let li = document.createElement("li");
let div = document.createElement("div");

let showDate = () => {
    newDate.innerText = `Date: ${date}`;
}

showDate();

button.addEventListener("click", () => {
    info();
})

let info = () => {
    if(item.value == ""){
        alert("Please Enter a Task first");
    }
    else{
        li.innerHTML = item.value;
        list.appendChild(li);
        div.innerHTML = "\u00d7"
        li.appendChild(div);
    }
    item.value="";
    dataSave();
}

list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "DIV"){
        e.target.parentElement.remove();
    }
});

let dataSave = () => {
    localStorage.setItem("data", list.innerHTML);
}

let taskShow = () => {
    list.innerHTML = localStorage.getItem("data");
}
taskShow();