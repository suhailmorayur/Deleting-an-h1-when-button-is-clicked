function deleteElement(){
    const element = document.getElementById("element")
element.parentNode.removeChild(element);
}


const deleteButton = document.getElementById("deleteButton");
const toDelete = document.getElementById("toDelete");

deleteButton.addEventListener('click', function() {
    toDelete.remove();
  });