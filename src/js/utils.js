/*选择器*/
function c(a) {
    var b = a.charAt(0);
    switch (b) {
        case "#":
            return document.getElementById(a.substring(1));
        case ".":
            return document.getElementsByClassName(a.substring(1));
        default:
            return document.getElementsByTagName(a);
    }
}
/*黑色提示*/
function blackTip(msg, time, callback, type) {
    var blackTip,
        icon,
        blackTipStyle,
        text;
    if (document.getElementById('__blackTipSpan__')) {
        blackTip = document.getElementById('__blackTipSpan__');
        // icon = blackTip.getElementsByClassName('icon')[0];
    } else {
        blackTip = document.createElement('div');
        icon = document.createElement('span');
        text = document.createElement('span');

        text.className = 'msg';
        blackTipStyle = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(blackTipStyle);
        icon.className = 'icon';
        icon.innerText = '!';
        text.style.display = 'block';
        blackTip.appendChild(icon);
        blackTip.appendChild(text);
        blackTip.id = '__blackTipSpan__';

        icon.style.cssText = 'display:inline-block;height:50px;line-height:50px;width:50px;margin-bottom:10px;text-align:center;border-radius:50%;font-size:30px;color:rgba(7,17,27,0.8);background:#fff';

        icon.style.display = 'none'; /*先隐藏*/

        blackTip.style.cssText = 'z-index:100;position:fixed;min-width:25%;max-width:60%;background:rgba(7,17,27,0.8);color:#fff;padding:16px;font-size:14px;top:30%;left:50%;border-radius:5px;line-height:18px;text-align:center;word-break:break-all;-moz-transform:translateZ(0) translateX(-50%) translateY(-50%);-webkit-transform:translateZ(0) translateX(-50%) translateY(-50%);transform:translateZ(0) translateX(-50%) translateY(-50%);';
        document.getElementsByTagName('body')[0].appendChild(blackTip);
    }
    blackTip.getElementsByClassName('msg')[0].innerText = msg || '提示信息';
    blackTip.style.display = 'block';

    var timer = setTimeout(function() {
        if (window.jQuery) {
            jQuery(blackTip).stop().fadeOut();
        } else {
            blackTip.style.display = 'none';
        }
        typeof callback === 'function' && callback();
        clearTimeout(timer);
    }, time || 2100);
}
/*弹窗*/
/**
 * [myAlert description]
 * @param  {[json]} msg [传入一个json 格式的对象,foot 中可以自定义按钮的类名、并且自动识别个数]
 * 
 * DEMO：
 * myAlert({
 *   mask: "true", //mask 黑色蒙板，默认不显示，可不写
 *   title : "标题",
 *   body : "删除后将无法恢复，请确认是否删除。",
 *   foot : {
 *       cancel : "取消",
 *       cofirm : "确认" 
 *   }
 * });
 *
 */
function myAlert(msg) {
    var body = document.getElementsByTagName('body')[0];
    var head = document.getElementsByTagName('head')[0];
    if (!document.getElementById('myAlertStyle')) {
        var style = document.createElement('style');
        style.setAttribute('id', 'myAlertStyle');
        style.innerHTML = '#myAlert{position:fixed;background-color:rgba(255,255,255,.9);width:80%;font-size:.9rem;border-radius:.5rem;text-align:center;word-break:break-all;box-shadow:0 0 1rem #333;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-moz-transform:translateX(-50%) translateY(-50%)}' + '#myAlert header{padding:1.3rem 1rem 0.7rem 1rem;font-size:1.05rem;font-weight:700}' + '#myAlert section{padding:0 1rem 1.3rem 1rem;line-height:1.3rem}' + '#myAlert footer{line-height:2.5rem;font-weight:500;display:flex;display:-webkit-flex;justify-content:center;-webkit-justify-content:center;border-top:1px solid #e2e2e2;color:#3385ff;font-size:1.05rem}' + '#myAlert span{box-sizing:border-box;-webkit-box-sizing:border-box;width:50%}' + '#myAlert footer>span:not(:first-child){border-left:1px solid #e2e2e2}' + '#myAlertMask{position: absolute;top: 0;left: 0;bottom: 0;right: 0;background: rgba(0, 0, 0, 0);display: none;}';
        head.appendChild(style);
    }
    if (document.getElementById('myAlert')) {
        var mask = document.getElementById("myAlertMask");
        a();
    } else {
        var mask = document.createElement('div');
        mask.setAttribute('id', 'myAlertMask');

        var _myAlert = document.createElement('div');
        _myAlert.setAttribute('id', 'myAlert');
        nodes = '<header></header><section></section><footer></footer>';
        _myAlert.innerHTML = nodes;
        mask.addEventListener('touchmove', function(e) {
            e.preventDefault();
            e.stopPropagation();
        }, false)
        mask.appendChild(_myAlert);
        body.appendChild(mask);
        a();
    }

    function a() {
        var _myAlert = document.getElementById('myAlert'),
            str = '';
        _myAlert.getElementsByTagName('header')[0].innerText = msg.title;
        _myAlert.getElementsByTagName('section')[0].innerText = msg.body;
        for (var i in msg.foot) {
            str += '<span class="' + i + '">' + msg.foot[i] + '</span>';
        }
        _myAlert.getElementsByTagName('footer')[0].innerHTML = str;
        if (window.$) {
            if (msg.mask === true || msg.mask === "true") {
                mask.style.background = "rgba(0,0,0,.5)";
                $(mask).fadeIn(300);
            } else {
                $(mask).fadeIn(300);
            }
        } else {
            if (msg.mask === true || msg.mask === "true") {
                mask.style.background = "rgba(0,0,0,.5)";
                mask.style.display = "block";
            } else {
                mask.style.display = "block";
            }
        }
    }
}
/**
 * [getRequest description]
 * @return {[obj]} [description]
 * 使用方法：
 * 1、声明一个 var request = getRequset() 变量，里面包含了各个参数 
 * 2、获取具体参数的值 request['paramName']  
 */
function getRequest() {
    var url = window.location.href; //获取url中"?"符后的字串 
    var theRequest = new Object();
    var index = url.indexOf("?");
    var str = null;
    var strs = null;

    if (index != -1 || ((index = url.indexOf("#")) && index != -1)) {
        str = url.substr(index + 1);
        strs = str.split("&");
        var entry = null;
        for (var i = 0; i < strs.length; i++) {
            entry = strs[i].split("=");
            theRequest[entry[0]] = decodeURIComponent(entry[1]);
        }
    }
    return theRequest;
}
// 添加active
function addActive(els) {
    var i,
        n,
        len = els.length;
    for (i = 0; i < len; i++) {
        (function(i) {
            els[i].onclick = function() {

                for (n = 0; n < len; n++) {
                    els[n].className = els[n].className.split('active').join(' ');
                }
                if (this.className.indexOf('active') === -1) {
                    this.className += ' active';
                }
            }
        })(i);
    }
}

/*格式化时间*/
function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            var str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : _padLeftZero(str));
        }
    }
    return fmt;

    function _padLeftZero(str) {
        return ('00' + str).substr(str.length);
    }
}


/**
 * ajax 封装
 * 这里将会自动添加 headers x-client x-version
 */
function Ajax(opts) {
    var defaults = {
        method: 'GET',
        url: '',
        data: '',
        async: true,
        cache: true,
        contentType: 'text/plain',
        headers: {},
        timeout: 10000,
        success: function() {},
        error: function() {}
    };
    // 为defaults赋值
    for (var key in opts) {
        defaults[key] = opts[key];
    }
    // 将data转为str
    if (typeof defaults.data === 'object') {
        var str = '';
        for (var key in defaults.data) {
            str += key + '=' + defaults.data[key] + '&';
        }
        defaults.data = str.substring(0, str.length - 1);
    }

    // 处理请求方式
    defaults.method = defaults.method.toUpperCase();
    // 处理cache
    defaults.cache = defaults.cache ? '' : '&' + new Date().getTime();

    // 处理url 拼接字符串
    if (defaults.method === 'GET' && (defaults.data || defaults.cache)) {
        
        defaults.url += '?' + defaults.data + defaults.cache;
    }
    // 创建ajax 对象
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    // console.info(defaults.method);

    xhr.open(defaults.method, defaults.url, defaults.async);

    // 设置header
    for (var key in defaults.headers) {
        if (!defaults.headers.hasOwnProperty(key)) {
            continue;
        }
        xhr.setRequestHeader(key, defaults.headers[key]);
        // console.log(xhr)
    }

    // 处理 GTE POST
    if (defaults.method === 'GET') {
        xhr.send(null);
    } else if (defaults.method === 'POST') {

        xhr.setRequestHeader('Content-Type', defaults.contentType);
        xhr.send(defaults.data);
    }
    var timer = setTimeout(function() {
        if (!(xhr.readyState === 4 && xhr.status === 200)) {
            xhr.abort();
            defaults.error({ message: '请求超时' });
        }
    }, defaults.timeout);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // console.log('xhr', xhr.responseText);
                var response = JSON.parse(xhr.responseText);
                clearTimeout(timer);
                defaults.success.call(xhr, response, xhr.status, xhr);
            } else {
                clearTimeout(timer);
                defaults.error(xhr.responseText);
            }
        }
    }
}


// 正则
/** 电话*/
function testTel(tel) {
    return /^1(3|4|5|7|8)[0-9]\d{8}$/.test(tel || "");
}
/**密码 */
function testPwd(pwd) {
    return /.{6,}/.test(pwd || "");
}
/**用户名 */
function testName(name) {
    return /^[\u4E00-\u9FA5]{2,4}$/.test(name);
}

/**企业名字 */
function testFirmName(str) {
    return /.{3,}/.test(str || "");
}
/**短信验证码 */
function testVcode(str) {
    return /\d{4}/.test(str || "");
}
