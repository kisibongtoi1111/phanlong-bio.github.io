window.onload = ()=> {
    renderTruck();
}

function renderTruck() {
    let list = document.getElementsByClassName('content-session__link-list')[0];
    let truck = document.getElementsByClassName('truck-animation')[0];
    let height = ((list.offsetHeight + list.offsetTop - 10) - truck.offsetHeight) + 4;
    console.log(height);
    truck.style.top = `${height}px`;
}