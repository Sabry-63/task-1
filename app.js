// Selected Eles
let textArea = document.getElementById('notsText');
let btnClear = document.getElementById('clear');

// Set Any Item In LocalStorage
// Use Set Name As String , Input
function autoSave(storage, filed) {
    localStorage.setItem(storage, filed.value);
}

// Start Set In LocalStorage
textArea.onkeyup = () => {
    autoSave('nots', textArea);
};

// Check Lo Has Keys
if (localStorage.length > 0) {
    textArea.value = localStorage.getItem('nots');
}

// Clear LocalStorage
function clearItems(e) {
    e.preventDefault();
    localStorage.clear();
    textArea.value = '';
}
btnClear.addEventListener('click', clearItems);
