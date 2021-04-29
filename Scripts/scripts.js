function openNav() {
    var x = document.getElementById("Spotify");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function closeNav() {
    document.getElementById("Spotify").style.width = "0";
}
