function showTable() {
  var semester = document.getElementById("semester").value;
  var tableContainer = document.getElementById("tableContainer");
  var table = document.getElementById("disciplinesTable");
  var tbody = table.getElementsByTagName("tbody")[0];
  tbody.innerHTML = ""; // Limpa o conteúdo da tabela

  if (semester === "2024.1") {
    // Se for o semestre atual, exibir botões de Aprovar e Reprovar
    for (var i = 0; i < 5; i++) {
      var row = tbody.insertRow();
      var professorCell = row.insertCell(0);
      var disciplineCell = row.insertCell(1);
      var evaluateCell = row.insertCell(2);

      professorCell.textContent = "Professor " + (i + 1);
      disciplineCell.textContent = "Disciplina " + (i + 1);

      var approveBtn = document.createElement("button");
      approveBtn.textContent = "Aprovar";
      approveBtn.className = "approve";
      approveBtn.onclick = function () {
        alert("Aprovado para " + semester);
      };
      evaluateCell.appendChild(approveBtn);

      var rejectBtn = document.createElement("button");
      rejectBtn.textContent = "Reprovar";
      rejectBtn.className = "reject";
      rejectBtn.onclick = function () {
        alert("Reprovado para " + semester);
      };
      evaluateCell.appendChild(rejectBtn);
    }
  } else {
    // Se for um semestre passado, exibir Aprovado ou Reprovado
    for (var i = 0; i < 5; i++) {
      var row = tbody.insertRow();
      var professorCell = row.insertCell(0);
      var disciplineCell = row.insertCell(1);
      var evaluateCell = row.insertCell(2);

      professorCell.textContent = "Professor " + (i + 1);
      disciplineCell.textContent = "Disciplina " + (i + 1);

      var status = semester === "2023.1" ? "Aprovado" : "Reprovado";
      evaluateCell.textContent = status;
    }
  }

  // Exibe a tabela após escolher o semestre
  tableContainer.style.display = "block";
}
