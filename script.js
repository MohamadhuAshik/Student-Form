var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var input4 = document.getElementById("input4")
var input5 = document.getElementById("input5")
var input6 = document.getElementById("input6")
var input7 = document.getElementById("input7")

var tableitem = document.getElementById("tableitem")

function updateChange() {
    var tbody = document.createElement("tbody")
    tbody.innerHTML = "<tbody><tr><td>" + input1.value + "</td><td>" + input2.value + "</td><td>" + input3.value + "</td><td>" + input4.value + "</td><td>" + input5.value + "</td><td>" + input6.value + "</td><td><button onclick='del(event)'>Delete</button></td></tr></tbody>"
    tableitem.append(tbody)
}
function del(event) {

    event.target.parentElement.parentElement.remove();
}