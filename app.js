var item = document.getElementById("btn-text");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func() {
    item.innerHTML = "Follow Me"
}

function func1() {
    item.innerHTML = "ShaneMcGeown94"
}

