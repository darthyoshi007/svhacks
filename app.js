var localGoals = [];
var socket = io('http://localhost:8080');
var userName;
userName = prompt("Please enter your username.").value;
socket.emit('userAdded', userName);
socket.on('userAlreadyAdded', function(data){
  if (data == true){
    window.alert("Welcome Back");
  }
  else {
    socket.emit('login', userName);
  }
});

document.getElementById("name").innerHTML = userName;

function addGoal() {
   var dinp = document.createElement("DIV");
   dinp.id = "overlay";
   dinp.className = "mdl-textfield mdl-js-textfield mdl-textfield"
   var inp = document.createElement("TEXTAREA");
   inp.placeholder = "Enter a Goal..."
   inp.id = "newGoal";
   inp.className = "mdl-textfield__input";
   inp.name = "Goalz";
   inp.type = "textarea";
   inp.rows = "25";
   inp.cols = "50";
   var lab = document.createElement("LABEL");
   lab.className = "mdl-textfield__label"
   lab.htmlFor = "newGoal";
   dinp.appendChild(inp);
   dinp.appendChild(lab);
   var brk = document.createElement("BR");
   dinp.appendChild(brk);
   var brk1 = document.createElement("BR");
   dinp.appendChild(brk1);
   var brk2 = document.createElement("BR");
   dinp.appendChild(brk2);
   var brk3 = document.createElement("BR");
   dinp.appendChild(brk3);
   var btn = document.createElement("BUTTON");
   btn.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
   btn.id = "submitbtn";
   btn.onclick = getGoal;
   var bt = document.createTextNode("Submit");
   btn.appendChild(bt);
   dinp.appendChild(btn);
   var asdf = document.getElementById("goals");
   asdf.appendChild(dinp);
}

function getGoal() {
  // console.log(document.getElementById("newGoal").value);
  localGoals.push(document.getElementById("newGoal").value);
  document.getElementById("overlay").remove("newGoal");
  listGoal();
}

function listGoal() {
  // for (var i = 0; i < localGoals.length; i++){
  var divGoals = document.getElementById("goals");
  var u1 = document.createElement("U1");
  u1.className = "demo-list-item mdl-list";
  var li = document.createElement("LI");
  li.className = "mdl-list__item";
  var span = document.createElement("SPAN");
  span.className = "mdl-list__item-primary-content";
  var goal = document.createTextNode(localGoals[localGoals.length-1]);
  span.appendChild(goal);
  li.appendChild(span);
  u1.appendChild(li);
  divGoals.appendChild(u1);
  // }
}
