function changVoyel() {
  var ch = document.getElementById("test").value;
  var T = ["a", "e", "i", "o", "u"];
  var result = "";
  var V = "";
  for (let i = 0; i < ch.length; i++) {
    V = ch[i];
    for (let j = 0; j < T.length; j++) {
      if (V == T[j]) {
        V = "*";
        break;
      }
    }
    result = result + V;
  }
  alert(result);
}
