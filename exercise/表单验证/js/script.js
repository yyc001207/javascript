// 创建按钮绑定函数
function myClick(idStr, fun) {
    var btn = document.getElementById(idStr);
    btn.onclick = fun;
}
// 信息输入错误处理函数
function showError(elem, message) {
    var error = elem.nextElementSibling;
    error.innerHTML = message;
    error.style.display = "block";
};
// 信息输入正确处理函数
function hideError(elem) {
    var error = elem.nextElementSibling;
    error.innerHTML = "";
    error.style.display = "none";
    console.log(elem + "输入成功");
};
// a标签的单击响应函数方法，点击删除整行
function delA() {
    var tr = this.parentNode.parentNode;
    if (confirm("是否删除" + tr.getElementsByTagName("td")[0].innerHTML)) {
        tr.parentNode.removeChild(tr);
    }
}
// 定义正则表达式
// 用户名规则，只含有汉字、字母、数字
var usernameReg = /^[A-z0-9\u4e00-\u9fa5]{4,}$/;
// 密码规则，必须拥有数字，必须拥有大写字母，必须拥有小写字母，必须拥有特殊符号(.!@#$%^&*)，密码长度在8位到16位
var passwordReg = /^(?![a-zA-Z.!@#$%^&*]+$)(?![a-z0-9.!@#$%^&*]+$)(?![A-Z0-9.!@#$%^&*]+$)(?![0-9A-z]+$)[0-9A-z.!@#$%^&*]{8,16}$/;
// 定义邮箱规则：任意字符数字下划线 @ 任意字母数字 .任意字母（2-5位) 
var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
// 定义手机号码规则：长度11位，第一位为1.第二位不能为0，1，2
var phoneReg = /^1[3-9][0-9]{9}$/;
// 定义微信号第一位必须是字母，只能使用字母数字下划线以及减号
var wechatReg = /^[A-z][A-z0-9-_]{5,19}$/;
window.onload = function () {
    // 获取表单中的元素
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var date = document.getElementById("date");
    var wechat = document.getElementById("wechat");
    var phone = document.getElementById("phone");
    var checkeAll = document.getElementById("checkedAllBox");
    var items = document.getElementsByName("items");
    // 获取表格中的元素
    var table = document.getElementById("Table");
    var allA = document.getElementsByTagName("a");
    //  绑定每一个a的单击响应函数
    for (var i = 0; i < allA.length; i++) {
        allA[i].onclick = delA;
    }
    // 点击提交,响应函数
    myClick("btnSubmit", function () {
        if (usernameReg.test(username.value)) {
            hideError(username);
        } else {
            showError(username, "用户名只能含有汉字、字母、数字");
            return false;
        }
        if (passwordReg.test(password.value)) {
            hideError(password);
        } else {
            showError(password, "必须拥有至少一位大写字母、小写字母、特殊符号(.!@#$%^&*)以及数字，位数8位到16位");
            return false;
        }
        if (emailReg.test(email.value)) {
            hideError(email);
        } else {
            showError(email, "邮箱格式错误！应为XXXXXX@XXX.XXX");
            return false;
        }
        if (phoneReg.test(phone.value)) {
            hideError(phone);
        } else {
            showError(phone, "电话号码格式错误");
            return false;
        }
        if (wechatReg.test(wechat.value)) {
            hideError(wechat);
        } else {
            showError(wechat, "微信号第一位必须是字母，只能使用字母数字下划线以及减号");
            return false;
        }
        if (date.value == 0) {
            showError(date, "请输入日期");
            return false;
        } else {
            hideError(date);
        }
        // 获取复选框选中状态下的值
        var str = "";
        for (var i = 0; i < items.length; i++) {
            if (items[i].checked) {
                if (i == 0) {
                    str = str + items[i].value;
                } else {
                    str = str + " " + items[i].value;
                }
            }
        }
        // 创建新的tr td标签存储获取的值
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>" + username.value + "</td>" +
            "<td>" + password.value + "</td>" +
            "<td>" + email.value + "</td>" +
            "<td>" + phone.value + "</td>" +
            "<td>" + wechat.value + "</td>" +
            "<td>" + date.value + "</td>" +
            "<td>" + str + "</td>" +
            "<td><a href='javascript:;'>Delete</a></td>";
        // 为新建的a标签绑定响应函数
        tr.getElementsByTagName("a")[0].onclick = delA;
        table.appendChild(tr);
        // 浏览器会在table元素下生成一个tbody标签保存html结构中原有的tr td元素，通过js新建的tr td元素无法自动存储至tbody中。
        var tbody = table.getElementsByTagName("tbody")[0];
        tbody.appendChild(tr);
    });
    //设置全选按钮
    myClick("checkedAllBtn", function () {
        for (var i = 0; i < items.length; i++) {
            items[i].checked = true;
            checkeAll.checked = true;
        }
    });
    // 设置全不选
    myClick("checkedNoBtn", function () {
        for (var i = 0; i < items.length; i++) {
            items[i].checked = false;
            checkeAll.checked = false;
        }
    });
    // 设置反选
    myClick("checkedRevBtn", function () {
        checkeAll.checked = true;
        for (var i = 0; i < items.length; i++) {
            items[i].checked = !items[i].checked;
            if (!items[i].checked) {
                checkeAll.checked = false;
            }
        }
    });
    // 设置全选全不选框
    checkeAll.onclick = function () {
        for (var i = 0; i < items.length; i++) {
            items[i].checked = this.checked;
        }
    };
    // 设置当所有单选框选中时，全选全不选框选中
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            checkeAll.checked = true;
            for (var j = 0; j < items.length; j++) {
                if (!items[j].checked) {
                    checkeAll.checked = false;
                    break;
                }
            }
        };
    }
};