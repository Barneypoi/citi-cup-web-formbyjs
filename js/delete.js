function deleteLi(){
    //清空搜索结果
    var del = document.getElementById("ul1")
    var chills = del.childNodes;
    for (var i=chills.length-1;i>=0;i--){
        del.removeChild(chills[i]);
    }
}