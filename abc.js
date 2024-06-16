
function addItem() {
  const select1 = document.getElementById('select1').value;
  const select2 = document.getElementById('select2').value;
  const select3 = document.getElementById('select3').value;

  const itemList = document.getElementById('itemList');

  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.textContent = `${select1}, ${select2}, ${select3}`;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function () {
    itemList.removeChild(listItem);
  };

  listItem.appendChild(removeButton);
  itemList.appendChild(listItem);
}











