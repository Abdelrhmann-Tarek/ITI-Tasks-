var users = [];

      
      var nameInput = document.getElementById("name");
      var ageInput = document.getElementById("age");

      nameInput.addEventListener("input", function () {
        var name = nameInput.value.trim();
        document.getElementById("name-required").textContent =
          name === "" ? "Name is required" : "";
        document.getElementById("name-length").textContent =
          name.length > 0 && name.length <= 3
            ? "Name must be more than 3 characters"
            : "";
      });

      ageInput.addEventListener("input", function () {
        var age = ageInput.value.trim();
        document.getElementById("age-required").textContent =
          age === "" ? "Age is required" : "";
        document.getElementById("age-valid").textContent =
          age !== "" && parseInt(age) <= 18
            ? "Age must be greater than 18"
            : "";
      });

      function addUser() {
        var name = nameInput.value.trim();
        var age = ageInput.value.trim();

        document.getElementById("name-required").textContent =
          name === "" ? "Name is required" : "";
        document.getElementById("name-length").textContent =
          name.length > 0 && name.length <= 3
            ? "Name must be more than 3 characters"
            : "";

        document.getElementById("age-required").textContent =
          age === "" ? "Age is required" : "";
        document.getElementById("age-valid").textContent =
          age !== "" && parseInt(age) <= 18
            ? "Age must be greater than 18"
            : "";

        if (
          name === "" ||
          name.length <= 3 ||
          age === "" ||
          parseInt(age) <= 18
        ) {
          return;
        }

        var exists = users.some(function (user) {
          return user.name === name && user.age === age;
        });

        if (exists) {
          alert("User already exists.");
          return;
        }

        users.push({ name: name, age: age });
        renderTable();
        nameInput.value = "";
        ageInput.value = "";

        document.getElementById("name-required").textContent = "";
        document.getElementById("name-length").textContent = "";
        document.getElementById("age-required").textContent = "";
        document.getElementById("age-valid").textContent = "";
      }

      function renderTable() {
        var table = document.getElementById("user-table");

        while (table.rows.length > 1) {
          table.deleteRow(1);
        }

        for (var i = 0; i < users.length; i++) {
          var row = table.insertRow();

          var idCell = row.insertCell(0);
          idCell.textContent = i + 1;

          var nameCell = row.insertCell(1);
          nameCell.textContent = users[i].name;

          var ageCell = row.insertCell(2);
          ageCell.textContent = users[i].age;

          var delCell = row.insertCell(3);
          var btn = document.createElement("button");
          btn.textContent = "Delete";
          btn.style.color = "black";
          btn.style.border = "none";
          btn.style.padding = "5px";
          btn.style.cursor = "pointer";
          btn.setAttribute("data-index", i);
          btn.onclick = function () {
            var index = parseInt(this.getAttribute("data-index"));
            users.splice(index, 1);
            renderTable();
          };
          delCell.appendChild(btn);
        }
      }