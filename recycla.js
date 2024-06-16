

function addItemId() {
  const selectoneVal = document.getElementById("select1");
  const selecttwoVal = document.getElementById("select2");
  const selectthreeVal = document.getElementById("select3");

  if (selectoneVal && selecttwoVal && selectthreeVal) {

    const h6 = document.createElement('h6');
    h6.textContent = `${selectoneVal}, ${selecttwoVal}, ${selectthreeVal}`;

    const removedbtn = document.createElement("button");
    removedbtn.textContent = "Remove-";
    removedbtn.className = "remove-btn";
    removedbtn.onclick = function () {
      h6.remove();
    }
    h6.appendChild(removedbtn);

    document.getElementById('lblmaterial').appendChild(h6);

  } else {
    alert("plz select values for all fields")
  }
}


