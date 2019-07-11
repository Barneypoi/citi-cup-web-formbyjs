var object ,searchSequence;
function search(){
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
            searchSequence = xmlhttp.responseText;
            object = JSON.parse(searchSequence);
            var ul = document.getElementById('ul1');
            for (var i = 0; i < object.length; i++) {
                var li = document.createElement("li");
                var a = document.createElement("a");
                ul.appendChild(li);
                li.setAttribute("id", i + 1);
                li.setAttribute("onclick", "getId(this)");
                li.appendChild(a);
                a.innerHTML = object[i].fundName + "   " + ("0000000000000000" + object[i].fundId).substr(-6);

                // window.location.href = 'search.html';
            }
        }
    }
        xmlhttp.open("GET", "http://47.100.120.235:8081/srcInfo?fundNameorId=" + document.getElementById("searchBox").value, true);
        xmlhttp.send();

}

function getId(obj) {
    //获得点击li元素的id
    var strClick,objectClick
    var oid = object[obj.id-1].fundId;
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
            strClick = xmlhttp.responseText;
            objectClick = JSON.parse(strClick);
            alert("基金规模："+ objectClick[0].fundScale+"\n"+"基金建立时间："+ objectClick[0].fundEstablishTime+"\n"+"基金公司："+objectClick[0].funCompany+"\n"+"基金经理："+objectClick[0].fundManager+"\n"+"股票率："+objectClick[0].stockRatio+"\n"+"债券率："+objectClick[0].bondRatio+"\n"+"现金率："+objectClick.cashRatio);
        }
    }
    xmlhttp.open("GET", "http://47.100.120.235:8081/detailInfo?fundId=" + oid, true);
    xmlhttp.send();
}
