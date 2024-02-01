function togglePhone() {
    var phoneDiv = document.querySelector('.phone');
    phoneDiv.style.display = (phoneDiv.style.display === 'none' || phoneDiv.style.display === '') ? 'block' : 'none';
}
function disablePhone() {
    var phoneDiv = document.querySelector('.phone');
    phoneDiv.style.display = 'none';
}