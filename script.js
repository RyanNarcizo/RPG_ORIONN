<script>
  var history = [];

  function rollDice(sides) {
    var result = Math.floor(Math.random() * sides) + 1;
    history.push("d" + sides + ": " + result);
    updateHistory();
    return result;
  }

  function updateHistory() {
    var historyElement = document.getElementById("history");
    historyElement.innerHTML = "Histórico: " + history.join(", ");
  }
</script>