function delA() {
    var tr = this.parentNode.parentNode;
    if (confirm("是否删除" + tr.getElementsByTagName("td")[0].innerHTML)) {
        tr.parentNode.removeChild(tr);
    }
}
window.onload = function () {
    // 获取所有超链接
    var allA = document.getElementsByTagName("a");
    // 绑定每一个a的单击响应函数
    for (var i = 0; i < allA.length; i++) {
        allA[i].onclick = delA;
    }
    var btn = document.getElementById("addEmpButton");
    btn.onclick = function () {
        var employeeTable = document.getElementById("employeeTable");
        var name = document.getElementById("empName").value;
        var email = document.getElementById("email").value;
        var salary = document.getElementById("salary").value;
        var error=document.getElementById("error");
        var tr = document.createElement("tr");
            tr.innerHTML = "<td>" + name + "</td>" +
            "<td>" + email + "</td>" +
            "<td>" + salary + "</td>" +
            "<td><a href='deleteEmp?id=001'>Delete</a></td>";
        tr.getElementsByTagName("a")[0].onclick = delA;
        employeeTable.appendChild(tr);
        var tbody = employeeTable.getElementsByTagName("tbody")[0];
        tbody.appendChild(tr);
        
    };
}