var temp = document.getElementById("headButton");
var dir = localStorage.getItem("dir");
temp.addEventListener('click', function(){
    window.location.replace(dir + "/web/atresium-wiki/index.html");
})

temp = document.getElementById("headButton2");
temp.addEventListener('click', function(){
    //window.location.replace(dir + "/web/atresium-download-page/index.html");
    window.open(dir + "/web/atresium-download-page/index.html", '_blank');
})