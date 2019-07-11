function loadXMLDoc1()
{
    //setTimeout(function(){ alert("Hello"); }, 1000);
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var str = xmlhttp.responseText;
            var obj = JSON.parse(str);//JSON字符串转JSON对象
            code1='http://fund.eastmoney.com/'+( "0000000000000000" + document.getElementById("no1").innerText ).substr( -6 )+'.html?spm=search';
            document.getElementById("no1").innerHTML = ( "0000000000000000" + document.getElementById("no1").innerText ).substr( -6 );
            document.getElementById("nam1").innerHTML = obj[0].fundName;
            document.getElementById("inc1").innerHTML = obj[0].fundIncre;
            document.getElementById("typ1").innerHTML = obj[0].fundType;
            document.getElementById("ris1").innerHTML = obj[0].fundRisk;
        }
    };
    xmlhttp.open("GET","http://47.100.120.235:8081/mainInfo?fundId="+document.getElementById("no1").innerText,true);
    //xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}

function loadXMLDetail1()
{
    //setTimeout(function(){ alert("Hello"); }, 1000);
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var str = xmlhttp.responseText;
            var obj = JSON.parse(str);//JSON字符串转JSON对象
            document.getElementById("sca1").innerHTML = obj[0].fundScale;
            document.getElementById("est1").innerHTML = obj[0].fundEstablishTime;
            document.getElementById("com1").innerHTML = obj[0].funCompany;
            document.getElementById("man1").innerHTML = obj[0].fundManager;
            document.getElementById("sto1").innerHTML = obj[0].stockRatio;
            document.getElementById("bon1").innerHTML = obj[0].bondRatio;
            document.getElementById("cas1").innerHTML = obj[0].cashRatio;
        }
    };
    xmlhttp.open("GET","http://47.100.120.235:8081/detailInfo?fundId="+document.getElementById("no1").innerText,true);
    //xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}

function loadXMLDoc2()
{
    //setTimeout(function(){ alert("Hello"); }, 1000);
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var str = xmlhttp.responseText;
            var obj = JSON.parse(str);//JSON字符串转JSON对象
            code2='http://fund.eastmoney.com/'+( "0000000000000000" + document.getElementById("no2").innerText ).substr( -6 )+'.html?spm=search';
            document.getElementById("no2").innerHTML = ( "0000000000000000" + document.getElementById("no2").innerText ).substr( -6 );
            document.getElementById("nam2").innerHTML = obj[0].fundName;
            document.getElementById("inc2").innerHTML = obj[0].fundIncre;
            document.getElementById("typ2").innerHTML = obj[0].fundType;
            document.getElementById("ris2").innerHTML = obj[0].fundRisk;
        }
    };
    xmlhttp.open("GET","http://47.100.120.235:8081/mainInfo?fundId="+document.getElementById("no2").innerText,true);
    //xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}

function loadXMLDetail2()
{
    //setTimeout(function(){ alert("Hello"); }, 1000);
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var str = xmlhttp.responseText;
            var obj = JSON.parse(str);//JSON字符串转JSON对象
            document.getElementById("sca2").innerHTML = obj[0].fundScale;
            document.getElementById("est2").innerHTML = obj[0].fundEstablishTime;
            document.getElementById("com2").innerHTML = obj[0].funCompany;
            document.getElementById("man2").innerHTML = obj[0].fundManager;
            document.getElementById("sto2").innerHTML = obj[0].stockRatio;
            document.getElementById("bon2").innerHTML = obj[0].bondRatio;
            document.getElementById("cas2").innerHTML = obj[0].cashRatio;
        }
    };
    xmlhttp.open("GET","http://47.100.120.235:8081/detailInfo?fundId="+document.getElementById("no2").innerText,true);
    //xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}

function loadXMLDoc3()
{
    //setTimeout(function(){ alert("Hello"); }, 1000);
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var str = xmlhttp.responseText;
            var obj = JSON.parse(str);//JSON字符串转JSON对象
            code3='http://fund.eastmoney.com/'+( "0000000000000000" + document.getElementById("no3").innerText ).substr( -6 )+'.html?spm=search';
            document.getElementById("no3").innerHTML = ( "0000000000000000" + document.getElementById("no3").innerText ).substr( -6 );
            document.getElementById("nam3").innerHTML = obj[0].fundName;
            document.getElementById("inc3").innerHTML = obj[0].fundIncre;
            document.getElementById("typ3").innerHTML = obj[0].fundType;
            document.getElementById("ris3").innerHTML = obj[0].fundRisk;
        }
    };
    xmlhttp.open("GET","http://47.100.120.235:8081/mainInfo?fundId="+document.getElementById("no3").innerText,true);
    //xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}

function loadXMLDetail3()
{
    //setTimeout(function(){ alert("Hello"); }, 1000);
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var str = xmlhttp.responseText;
            var obj = JSON.parse(str);//JSON字符串转JSON对象
            document.getElementById("sca3").innerHTML = obj[0].fundScale;
            document.getElementById("est3").innerHTML = obj[0].fundEstablishTime;
            document.getElementById("com3").innerHTML = obj[0].funCompany;
            document.getElementById("man3").innerHTML = obj[0].fundManager;
            document.getElementById("sto3").innerHTML = obj[0].stockRatio;
            document.getElementById("bon3").innerHTML = obj[0].bondRatio;
            document.getElementById("cas3").innerHTML = obj[0].cashRatio;
        }
    };
    xmlhttp.open("GET","http://47.100.120.235:8081/detailInfo?fundId="+document.getElementById("no3").innerText,true);
    //xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}
