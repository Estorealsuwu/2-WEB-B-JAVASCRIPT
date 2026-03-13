   function addTask() {
      const input = document.getElementById("taskInput");
      const category = document.getElementById("selector").value;
      const taskText = input.value.trim();

      if (taskText === "") {
        alert("Escribe una actividad");
        return;
      }

      const li = document.createElement("li");
      li.textContent = taskText;


      document.getElementById(category).appendChild(li);

      input.value = "";
    }