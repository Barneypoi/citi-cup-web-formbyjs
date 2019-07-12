function loadXMLDoc()//基金信息读取
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
        let rec1;
        let rec2;
        let rec3;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var str = xmlhttp.responseText;
            var obj = JSON.parse(str);//JSON字符串转JSON对象
            rec1 = obj[0].fundId;
            code1 = 'http://fund.eastmoney.com/' + ("0000000000000000" + rec1).substr(-6) + '.html?spm=search';
            document.getElementById("num1").innerHTML = rec1;
            document.getElementById("no1").innerHTML = ("0000000000000000" + rec1).substr(-6);
            document.getElementById("nam1").innerHTML = obj[0].fundName;
            document.getElementById("inc1").innerHTML = obj[0].fundIncre;
            document.getElementById("typ1").innerHTML = obj[0].fundType;
            document.getElementById("ris1").innerHTML = obj[0].fundRisk;
            document.getElementById("fxtz1").innerHTML = obj[0].fxtz;
            document.getElementById("fxzb1").innerHTML = obj[0].fxzb;
            document.getElementById("xgnl1").innerHTML = obj[0].xgnl;
            document.getElementById("zsnl1").innerHTML = obj[0].zsnl;
            document.getElementById("syzb1").innerHTML = obj[0].syzb;
            rec2 = obj[1].fundId;
            code2 = 'http://fund.eastmoney.com/' + ("0000000000000000" + rec2).substr(-6) + '.html?spm=search';
            document.getElementById("num2").innerHTML = rec2;
            document.getElementById("no2").innerHTML = ("0000000000000000" + rec2).substr(-6);
            document.getElementById("nam2").innerHTML = obj[1].fundName;
            document.getElementById("inc2").innerHTML = obj[1].fundIncre;
            document.getElementById("typ2").innerHTML = obj[1].fundType;
            document.getElementById("ris2").innerHTML = obj[1].fundRisk;
            document.getElementById("fxtz2").innerHTML=obj[1].fxtz;
            document.getElementById("fxzb2").innerHTML=obj[1].fxzb;
            document.getElementById("xgnl2").innerHTML=obj[1].xgnl;
            document.getElementById("zsnl2").innerHTML=obj[1].zsnl;
            document.getElementById("syzb2").innerHTML=obj[1].syzb;
            rec3 = obj[2].fundId;
            code3 = 'http://fund.eastmoney.com/' + ("0000000000000000" + rec3).substr(-6) + '.html?spm=search';
            document.getElementById("num3").innerHTML = rec3;
            document.getElementById("no3").innerHTML = ("0000000000000000" + rec3).substr(-6);
            document.getElementById("nam3").innerHTML = obj[2].fundName;
            document.getElementById("inc3").innerHTML = obj[2].fundIncre;
            document.getElementById("typ3").innerHTML = obj[2].fundType;
            document.getElementById("ris3").innerHTML = obj[2].fundRisk;
            document.getElementById("fxtz3").innerHTML=obj[2].fxtz;
            document.getElementById("fxzb3").innerHTML=obj[2].fxzb;
            document.getElementById("xgnl3").innerHTML=obj[2].xgnl;
            document.getElementById("zsnl3").innerHTML=obj[2].zsnl;
            document.getElementById("syzb3").innerHTML=obj[2].syzb;
            loadXMLDetail1();
            loadXMLDetail2();
            loadXMLDetail3();
            setRedar();
        }
    };
    xmlhttp.open("GET","http://47.100.120.235:8081/recommend",true);
    //xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}

function loadXMLDetail1()//基金1详细信息读取
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
    xmlhttp.open("GET","http://47.100.120.235:8081/detailInfo?fundId="+document.getElementById("num1").innerText,true);
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
    xmlhttp.open("GET","http://47.100.120.235:8081/detailInfo?fundId="+document.getElementById("num2").innerHTML,true);
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
    xmlhttp.open("GET","http://47.100.120.235:8081/detailInfo?fundId="+document.getElementById("num3").innerHTML,true);
    //xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}
