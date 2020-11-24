var addClass = function (dom, klass) {
    var k = dom.className;
    dom.className = k + ' ' + klass
}
var removeClass = function (dom, klass) {
    var k = dom.className;
    var reg = new RegExp(klass, 'ig')
    dom.className = k.replace(reg, '');
}

var search = document.getElementsByName("query");
var myNav = document.getElementById("my_nav");
search[0].onfocus = function () { addClass(myNav, "hidden") };

var cover = document.getElementsByClassName("md-search__overlay");
cover[0].onclick = function () {
    setTimeout(function () {
        removeClass(myNav, "hidden")
    }, 50)
};