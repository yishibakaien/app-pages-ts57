'use strict';

var env = 'test'; // 这里配置环境

var baseURL = (function(env) {

    var baseURL,
        urls,
    urls = {
        dev: 'http://localhost:5000',
        // dev: 'http://192.168.1.249:8080',
        test: 'http://192.168.1.11:8080',
        prod: ''
    };
    if (env === 'dev') {
        baseURL = urls.dev;
    }
    if (env === 'test') {
        baseURL = urls.test;
    }
    if (env === 'prod') {
        baseURL = urls.prod;
    }
    return baseURL;

})(env);

// console.log(baseURL);
