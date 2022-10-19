/* 
     move方法是使用定时器生成简易的改变目标样式的工具方法
     obj 需要改变的对象
     attr 需要改变的对象的样式
     target 样式改变的目标
     speed 样式改变速度和方向，在原有基础上加或减像素值
     callback 回调函数
 */
function move(obj, attr, target, speed, callback) {
    // 获取初始样式
    var current = parseInt(getStyle(obj, attr));
    // 初始样式与目标样式比较确定speed的正负值
    if (current > target) {
        speed = -speed;
    }
    // 关闭同一对象的定时器，防止同一对象生成多个定时器
    clearInterval(obj.timer);
    // 设置定时器实现多次调用
    obj.timer = setInterval(function () {
        // 获取事件执行前的元素样
        var oldValue = parseInt(getStyle(obj, attr));
        // 获取新样式
        var newValue = oldValue + speed;
        // 判断新样式是否超过或等于目标
        if ((speed > 0 && newValue > target) || (newValue < target && speed < 0)) {
            newValue = target;
        }
        // 设置新样式
        obj.style[attr] = newValue + "px";
        // 当新样式到达目标后，停止定时器执行
        if (newValue == target) {
            clearInterval(obj.timer);
            // 有回调函数执行回调函数，没有不执行
            callback && callback();
        }
    }, 30);
}
/* 
    获取元素样式
    obj 需要改变样式的对象
    name 样式名
*/
function getStyle(obj, name) {
    return getComputedStyle(obj, null)[name];
}