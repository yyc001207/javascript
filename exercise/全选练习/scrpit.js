// 获取按钮id
function myClick(id, fun) {
    var btn = document.getElementById(id);
    btn.onclick = fun;
}
window.onload = function () {
    // 获取单选框
    var items = document.getElementsByName("items");
    // 获取全选全不选
    var checkeAll = document.getElementById("checkedAllBox");
    // 调用获取按钮id函数，设置全选
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
    // 设置提交
    myClick("SendBtn", function () {
        for (var i = 0; i < items.length; i++) {
            if (items[i].checked) {
                console.log(items[i].value);
            }
        }
        console.log("--------");
    });
    // 设置全选全不选
    checkeAll.onclick = function () {
        for (var i = 0; i < items.length; i++) {
            items[i].checked = this.checked;
        }
    };
    // 设置当所有单选框选中时，全选全不选选中
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