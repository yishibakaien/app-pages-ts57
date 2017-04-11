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
function blackTip(msg, time, callback) {
    if (document.getElementById('blackTipSpan')) {
        var blackTip = document.getElementById('blackTipSpan');
        var info = blackTip.getElementsByClassName('info')[0];
        blackTip.getElementsByTagName('span')[0].innerText = msg;
    } else {
        var blackTip = document.createElement('span');
        var info = document.createElement('div');
        var text = document.createElement('span');
        var animation = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(animation);
        info.className = 'info';
        text.style.display = 'block';
        blackTip.appendChild(info);
        blackTip.appendChild(text);
        blackTip.id = 'blackTipSpan';
        text.innerText = msg;
    }
    blackTip.style.cssText = "z-index:100;position:fixed;width:110px;background:rgba(7,17,27,0.8);color:#fff;padding:1rem;font-size:14px;top:30%;left:50%;border-radius:5px;line-height:18px;text-align:center;word-break:break-all;-moz-transform:translateZ(0) translateX(-50%) translateY(-50%);-webkit-transform:translateZ(0) translateX(-50%) translateY(-50%);transform:translateZ(0) translateX(-50%) translateY(-50%);";
    info.style.cssText = 'display:inline-block;width:70px;height:70px;background: url("data:image/png;base64,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") no-repeat center;background-size:80%';

    document.getElementsByTagName('body')[0].appendChild(blackTip);

    var timer = setTimeout(function() {
        if (window.jQuery) {
            $(blackTip).stop().fadeOut();
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

function Ajax(opts) {
    var defaults = {
        method: 'GET',
        url: '',
        data: '',
        async: true,
        cache: true,
        contentType: 'application/x-www-form-urlencoded',
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
    xhr.open(defaults.method, defaults.url, defaults.async);

    // 处理 GTE POST
    if (defaults.method === 'GET') {
        xhr.setRequestHeader('x-client', '1');
        xhr.setRequestHeader('x-version', '1.0');
        xhr.send(null);
    } else {
        xhr.setRequestHeader('content-type', defaults.contentType);
        xhr.send(defaults.data);
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                defaults.success.call(xhr, xhr.responseText);
            } else {
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
    return /\d{6}/.test(str || "");
}
