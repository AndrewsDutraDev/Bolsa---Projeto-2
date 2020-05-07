function openMenu() {
    var button = document.getElementById('bt');
    button.style.height = '310px';
    document. getElementById('closebt').setAttribute('onclick', 'closeMenu()');
}

function closeMenu() {
    var button = document.getElementById('bt');
    button.style.height = '0px';
    document.getElementById('closebt').setAttribute('onclick', 'openMenu()');
}