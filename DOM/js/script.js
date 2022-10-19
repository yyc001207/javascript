function myClick(idStr, fun) {
    var btn = document.getElementById(idStr);
    btn.onclick = fun;
}
window.onload = function () {
    // 查找#bj节点
    var btn01 = document.getElementById("btn01");
    btn01.onclick = function () {
        var bj = document.getElementById("bj");
        console.log(bj.innerHTML);
    };
    // 查找所有li节点
    var btn02 = document.getElementById("btn02");
    btn02.onclick = function () {
        // 返回一个类数组对象
        var lis = document.getElementsByTagName("li");
        // console.log(lis);
        for (var i = 0; i < lis.length; i++) {
            console.log(lis[i].innerHTML);
        }
    };
    // 查找name=gender的所有节点
    var btn03 = document.getElementById("btn03");
    btn03.onclick = function () {
        var input = document.getElementsByName("gender");
        for (var i = 0; i < input.length; i++) {
            console.log(input[i].value);
        }
    };
    // 查找#city下的所有li节点
    var btn04 = document.getElementById("btn04");
    btn04.onclick = function () {
        var city = document.getElementById("city");
        var lis = city.getElementsByTagName("li");
        for (var i = 0; i < lis.length; i++) {
            console.log(lis[i].innerHTML);
        }
    };
    // 查找#city的左右子节点
    var btn05 = document.getElementById("btn05");
    btn05.onclick = function () {
        var city = document.getElementById("city");
        // 获取包括文本节点在内的所有节点
        var node = city.childNodes;
        for (var i = 0; i < node.length; i++) {
            console.log(node[i].innerHTML);
        }
    };
    // 返回#phone的第一个子节点
    var btn06 = document.getElementById("btn06");
    btn06.onclick = function () {
        var phone = document.getElementById("phone");
        var fristchild = phone.firstChild;
        console.log(fristchild);
    };
    // 返回#bj的父亲节点
    myClick("btn07", function () {
        var bj = document.getElementById("bj");
        var pn = bj.parentNode;
        console.log(pn.innerText);
    });
    // 返回#android的前一个兄弟节点
    myClick("btn08", function () {
        var and = document.getElementById("android");
        var ps = and.previousSibling;
        console.log(ps.innerHTML);
    });
    // 读取#username的value属性值
    myClick("btn09", function () {
        var um = document.getElementById("username");
        var value = um.value;
        console.log(value);
    });
    // 设置#username的value属性值
    myClick("btn10", function () {
        var um = document.getElementById("username");
        um.value="12345";
    });
    // 返回#bj的文本值
    myClick("btn11", function () {
        var bj=document.getElementById("bj");
        console.log(bj.innerHTML);
    });
};