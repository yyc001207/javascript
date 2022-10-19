window.onload = function () {
    var imglist = document.getElementById("imglist");
    var imgArr = document.getElementsByTagName("img");
    var navDiv = document.getElementById("navDiv");
    var allA = document.getElementsByClassName("navA");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    // 设置ul即图片容器的宽度由图片撑开，方便之后加入新的图片
    imglist.style.width = 520 * imgArr.length + "px";
    // 设置导航点保持在图片底部中间位置
    navDiv.style.left = (520 - allA.length * 25) / 2 + "px";
    var index = 0;
    allA[index].style.backgroundColor = "black";
    // 遍历所有的a标签实现点击切换
    for (var i = 0; i < allA.length; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            // 在点击按钮时关闭自动播放
            clearInterval(timer);
            index = this.num;
            // imglist.style.left = -520 * index + "px";
            // 调用move函数
            setA();
            move(imglist, "left", -520 * index, 20, function () {
                // 暂停后重新开始
                autoChange();
            });
        };
    }
    autoChange();
    next.onclick = function () {
        clearInterval(timer);
        if (index == imgArr.length - 2) {
            imglist.style.left = -520 * imgArr.length - 1;
            index = 0;
        } else {
            index++;
        }
        setA();
        move(imglist, "left", -520 * index, 20, function () {
            autoChange();
        });
    };
    prev.onclick = function () {
        clearInterval(timer);
        if (index == 0) {
            index = imgArr.length - 2;
        } else {
            index--;
        }
        setA();
        move(imglist, "left", -520 * index, 20, function () {
            autoChange();
        });
    };
    // 创建一个方法，改变a的选中状态
    function setA() {
        // 当播放到最后一张图片时，跳转到第一张图片
        if (index == imgArr.length - 1) {
            index = 0;
            imglist.style.left = 0;
        }
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = "";
        }
        allA[index].style.backgroundColor = "black";
    }
    // 设置轮播图的自动播放
    var timer;
    function autoChange() {
        timer = setInterval(function () {
            index++;
            // 取模运算，当index与长度相等时，模为0。图片回到第一张
            index %= imgArr.length;
            move(imglist, "left", -520 * index, 20, function () {
                setA();
            });
        }, 3000);
    }
    // 设置鼠标移入播放暂停的方法
    function pause(obj) {
        obj.onmouseover = function () {
            clearInterval(timer);
        };
        obj.onmouseout = function () {
            autoChange();
        };
    }
    pause(next);
    pause(prev);
    for (var i = 0; i < imgArr.length; i++) {
        pause(imgArr[i]);
        pause(allA[index]);
    }
};