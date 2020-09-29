
console.log('加载成功');

// 管理所有模块
require.config({
    paths: {
        "index": "demo/index",
        "scale": "demo/scale",
        "drag": "demo/drag",

        "jquery": "jquery",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola"
    },
    shim: {
        // 设置依赖关系，先引入JQ，然后在引入JQ-cookie
        "jquery-cookie": ["jquery"],
        // 声明当前模块不遵循AMD规范,也就是里边的声明不是define
        "parabola": {
            "exports": "_"
        }
    }
})

// 使用模块，AMD规范

require(['index'], function (index) {
    index.init();
})