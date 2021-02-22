var clickd = false;
function clicked() {
    
    if (clickd) {
        document.getElementById("one-bar").classList.toggle('after-cross-upper-bar');
        document.getElementById("two-bar").classList.toggle('after-cross-lower-bar');
        clickd = false;
    }
    document.getElementById("one-bar").classList.toggle('upper-bar-clicked');

    document.getElementById("two-bar").classList.toggle('lower-bar-clicked');

    document.getElementById("three-bar").classList.toggle('text-clicked');

    clickd = true;
}