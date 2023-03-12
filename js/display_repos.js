// var links = document.getElementById("links");
var request = new XMLHttpRequest();
const main = document.getElementsByTagName("main")[0];

request.open('GET','https://api.github.com/users/jeremyverweij/repos' , true)
request.onload = function() {
    var data = JSON.parse(this.response);
    for (let o = 0; o < data.length; o++) {
        const element = data[o];

        var tmp = document.createElement("a");
        var tmp2 = element.full_name;
        if(element.has_pages){
            tmp2 = tmp2.replace("JeremyVerweij", "https://JeremyVerweij.github.io");
            tmp.href = tmp2;
            tmp2 = tmp2.replace("https://JeremyVerweij.github.io/", "")
        }else{
            tmp.href = element.html_url;
            tmp2 = tmp2.replace("JeremyVerweij/", "");
        }
        tmp.innerHTML = tmp2;
        main.appendChild(tmp);
    }
}
request.send();