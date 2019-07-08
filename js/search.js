function search() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
// //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert("success");
            window.location.href = 'search.html';
        }
    }
    xmlhttp.open("GET", "http://47.100.120.235:8081/srcInfo?fundNameorId=" + document.getElementById("searchBox").value, true);
    xmlhttp.send();
}
