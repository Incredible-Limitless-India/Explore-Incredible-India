function parashow() {
    var x = document.getElementById("show");
    var para = document.getElementById("secondPara");

    var displayParaSetting  = para.style.display;

    if(displayParaSetting == 'none'){
        para.style.display = 'block';
        x.innerHTML = 'Read Less';
    }
    else{
        para.style.display = 'none';
        x.innerHTML = 'Read More';
    }
}

