window.onload = function () {
    var site = window.location.host;
    if (site.indexOf("shjdgwj") !== -1 ||
        site.indexOf("localhost") !== -1 ||
        site.indexOf("127.0.0.1") !== -1) {
        
    } else {
        alert("当前站点：" + site + "为仿冒网站，即将为您跳转原始网站：www.shjdgwj.cn");
        document.location.href = 'http://www.shjdgwj.cn';
    }
};

