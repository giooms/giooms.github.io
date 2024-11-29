var myCal = document.getElementById("adventCal");
var currentDate = new Date();

// Function to show the modal with the message
function showModal(message) {
  var modal = document.getElementById("messageModal");
  var modalMessage = document.getElementById("modalMessage");
  var span = document.getElementsByClassName("close")[0];

  modalMessage.innerText = message;
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function Door(calendar, day) {
  this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
  this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
  this.adventMessage = 'Day ' + day + ' of Advent\n\n' + '"' + adventCalendarMessages[day - 1][0] + '"\n\n';
  this.x = (0.04 * calendar.width + ((day - 1) % 4) * (1.1 * this.width));
  this.y = -(0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height));

  this.content = function() {
    var node = document.createElement("li");
    document.getElementById("adventDoors").appendChild(node);
    node.id = "door" + day;
    node.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";

    var innerNode = document.createElement("a");
    document.getElementById("door" + day).appendChild(innerNode);
    innerNode.innerHTML = day;
    innerNode.href = "#";

    if (( currentDate.getMonth() + 1 ) < 12 || currentDate.getDate() < day) {
      innerNode.className = "disabled";
      innerNode.onclick = function() {
        return false;
      }
    } else {
      var adventMessage = this.adventMessage;
      innerNode.onclick = function() {
        showModal(adventMessage);
        return false;
      }
    }
  };
}

(function() {
  var doors = [];
  for (var i = 0; i < 24; i++) {
    doors[i] = new Door(myCal, i + 1);
    doors[i].content();
  }
  return doors;
})();