
document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById('showSelectedButton');
  const select = document.getElementById('mySelect');
  const dropdown = document.getElementById('mydropdown');

  const selectedValueParagraph = document.getElementById('selectedValue');
  const selectedValueDropdown = document.getElementById('selecteddropdown');

  showButton.addEventListener('click', function () {
    const selectedValue = select.value; 
    const selecteddropdown = dropdown.value; 
    selectedValueParagraph.textContent = `${selectedValue}`;
    selectedValueDropdown.textContent = `${selecteddropdown}`;
  });

});

document.addEventListener("DOMContentLoaded", function(){
  const selectValue = select.value;
  const selecteddropdown = dropdown.value;
  selectedvalueParagraph.textContent = `${selectValue}`
  selectedValueDropdown.textContent = `${selecteddropdown}`
})



