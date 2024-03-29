function readstar()
{
    var xmlhttp;
    var timestamp = Date.parse(new Date());
    if (window.XMLHttpRequest)
    {
        // //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else
        {
            // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //在收藏列表中循环动态插入新的元素
            var myStar = xmlhttp.responseText;
            var starObject = JSON.parse(myStar);
            var sl = document.getElementById('starlist');
            for (var j = 0; j < starObject.length; j++) {
                var div = document.createElement("div");
                var a = document.createElement("a");
                var i = document.createElement("i");
                sl.appendChild(div);
                div.setAttribute("class", "fund");
                div.appendChild(a);
                a.setAttribute("id", "chosenfund" + starObject[j].fundId);
                a.innerHTML = ("0000000000000000" + starObject[j].fundId).substr(-6);
                div.appendChild(i);
                i.setAttribute("class", "icon fa fa-star");
                i.setAttribute("id", starObject[j].fundId);
                i.setAttribute("style", "margin-top: 1%;margin-left:25%;font-size: 20px");
                i.setAttribute("onclick", "judgestar(this)");
                i.setAttribute("columnNum", j);
            }
        }
    };
        xmlhttp.open("POST","http://47.100.120.235:8081/collection",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("uuid=4cdfcb8a-a3b9-11e9-b20e-f42cb030f26f&operation=read&fundId=*&date="+timestamp);
}



    <!--用户信息界面取消收藏-->
    function judgestar(element) {
        var xmlhttp;
        var timestamp = Date.parse(new Date());
        if (window.XMLHttpRequest){
            // //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp = new XMLHttpRequest();
            } else {
                // IE6, IE5 浏览器执行代码
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    //移除对应的父节点
                    element.parentNode.parentNode.removeChild(element.parentNode);
                }
            };
            xmlhttp.open("POST", "http://47.100.120.235:8081/collection", true);
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp.send("uuid=4cdfcb8a-a3b9-11e9-b20e-f42cb030f26f&operation=delete&fundId="+element.id+"&date=" + timestamp);
    }
