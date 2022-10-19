window.onload = function () {
    var span = document.getElementsByClassName("menuSpan");
    var openDiv = span[0].parentNode;
    for (var i = 0; i < span.length; i++) {
        span[i].onclick = function () {
            var parent = this.parentNode;
            toggleMenu(parent);
            if (openDiv != parent && !hasClass(openDiv, "collapsed")) {
                toggleMenu(openDiv);
            }
            openDiv = parent;
        };
    }
    function toggleMenu(obj) {
        var begin = obj.offsetHeight;
        toggleClass(obj, "collapsed");
        var end = obj.offsetHeight;
        obj.style.height = begin + "px";
        move(obj, "height", end, 5, function () {
            obj.style.height = "";
        });
    }
};