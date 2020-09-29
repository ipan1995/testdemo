define(["drag"], function (drag) {
    /**
     * 
     * @param {*} node1 被缩放的控件
     * @param {*} node2 被拖拽的控件
     */
    function scale(node1, node2) {
        node2.onmousedown = function (ev) {
            var e = ev || window.event;
            var w = node1.offsetWidth;
            var h = node1.offsetHeight;
            var l = e.clientX;
            var r = e.clientY;

            document.onmousemove = function (ev) {
                var e = ev || window.event;
                var W = w + (e.clientX - l);
                var H = h + (e.clientY - r);
                // 获取当前屏幕或body的宽度和高度
                var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;

                W = drag.range(W, node2.offsetWidth, windowWidth);
                H = drag.range(H, node2.offsetHeight, windowHeight);

                node1.style.width = W + 'px';
                node1.style.height = H + 'px';
            }
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }

    }

    return {
        scale: scale
    }
});