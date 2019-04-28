//全局帮助的类库
function gobalFun() {
    gobalFun._version = 0.1;
    gobalFun.throttle = function (fn, wait) {
        var timer;
        return function (...args) {
            if (!timer) {
                timer = setTimeout(() => timer = null, wait)
                return fn.apply(this, args);
            }
        }
    }
}
