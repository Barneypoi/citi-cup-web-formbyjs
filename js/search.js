var object ,searchSequence;
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
            searchSequence=xmlhttp.responseText;
            object=JSON.parse(searchSequence);
            var ul = document.getElementById('ul1');
            for(i=0;i<object.length;i++){
                var li = document.createElement("li");
                var a = document.createElement("a");
                ul.appendChild(li);
                li.setAttribute("id", i + 1);
                li.setAttribute("onclick", "getId(this)");
                li.appendChild(a);
                a.innerHTML = object[i].fundName;
                function getId(obj) {
                    //获得点击li元素的id
                    var id = obj.id;
                    alert("你点击的元素id是" + id);
                }
            }
            // window.location.href = 'search.html';
        }
    }
    xmlhttp.open("GET", "http://47.100.120.235:8081/srcInfo?fundNameorId=" + document.getElementById("searchBox").value, true);
    xmlhttp.send();
}

