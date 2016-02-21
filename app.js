var localGoals = [];

function addGoal() {
  window.location.assign("/addGoal");
}

function getGoal() {
  console.log(document.getElementById("goalText").value);
  localGoals.push(document.getElementById("goalText").value);
  window.location.assign("/goals");
  listGoals();
}

function listGoals() {
  for (var i = 0; i < localGoals.length; i++){
    console.log(localGoals[i]);
  }
  for (var i = 0; i < localGoals.length; i++){
    var divGoals = document.getElementById("goals");
    var u1 = document.createElement("U1");
    u1.className = "demo-list-item mdl-list";
    var li = document.createElement("LI");
    li.className = "mdl-list__item";
    var span = document.createElement("SPAN");
    span.className = "mdl-list__item-primary-content";
    var goal = document.createTextNode(localGoals[i]);
    span.appendChild(goal);
    li.appendChild(span);
    u1.appendChild(li);
    divGoals.appendChild(u1);
  }
}
