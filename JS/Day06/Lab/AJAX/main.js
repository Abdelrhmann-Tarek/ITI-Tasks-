
  var table = document.getElementById("comments-table");
  var detailsBox = document.getElementById("details-content");

  var request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts/1/comments");
  request.onload = function () {
    if (request.status === 200) {
      var data = JSON.parse(request.responseText);

      for (var i = 0; i < data.length; i++) {
        var comment = data[i];

        var row = document.createElement("tr");

        var idCell = document.createElement("td");
        idCell.textContent = comment.id;
        row.appendChild(idCell);

        var nameCell = document.createElement("td");
        nameCell.textContent = comment.name;
        row.appendChild(nameCell);

        var emailCell = document.createElement("td");
        emailCell.textContent = comment.email;
        row.appendChild(emailCell);

        var detailsCell = document.createElement("td");
        var button = document.createElement("button");
        button.textContent = "Details";

        button.commentData = comment; 
        button.onclick = function () {
          var c = this.commentData;
          detailsBox.innerHTML =
            "<strong>Post ID:</strong> " + c.postId + "<br>" +
            "<strong>ID:</strong> " + c.id + "<br>" +
            "<strong>Name:</strong> " + c.name + "<br>" +
            "<strong>Email:</strong> " + c.email + "<br>" +
            "<strong>Body:</strong> " + c.body;
        };

        detailsCell.appendChild(button);
        row.appendChild(detailsCell);

        table.appendChild(row);
      }
    } else {
      var row = document.createElement("tr");
      var cell = document.createElement("td");
      cell.colSpan = 4;
      cell.textContent = "Failed to load data.";
      row.appendChild(cell);
      table.appendChild(row);
    }
  };

  request.send();
