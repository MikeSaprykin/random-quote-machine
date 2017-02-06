/**
 * Created by Mike on 02.05.2016.
 */
var QUOTES = require('./quotes');
var clickListener = require('./click-listener');
var tweet = require('./twitter');

module.exports = function MessageGenerator() {

    var flipContainer = document.getElementsByClassName('flip-container')[0];

    var message = document.getElementsByClassName('message')[0];

    init();

    function init(){
        clickListener.listener(onClick);
        generateMessageLayout()
    }

    function removeTextNodes(){
        while (message.firstChild) {
            message.removeChild(message.firstChild);
        }
    }

    function onClick(){
        flipContainer.classList.toggle('flip');
        setTimeout(generateMessageLayout,200)
    }

    function generateMessageLayout() {
        removeTextNodes();
        var quote = QUOTES[getRandom(0, QUOTES.length - 1)];
        var layout = generateTextNodes(quote.text);
        generateMessageStyles(layout, quote.featuredLines);

        appendLayout(layout)
    }

    function appendLayout (layout) {
        for (var i = 0; i < layout.length; i++) {
            message.appendChild(layout[i])
        }
    }

    function generateMessageStyles(spanArr, styles) {
        if(!styles) return;
        for (var i = 0; i < styles.length; i++) {
            for (var j = 0; j < styles[i].index.length; j++) {
                var index = styles[i].index[j];
                setMessageStyles(spanArr[index], styles[i].style)
            }
        }
    }

    function setMessageStyles(spanNode, styles) {
        for (var key in styles) {
            spanNode.style[key] = styles[key];
        }
    }

    function generateTextNodes(quotes) {
        var spanArr = [];
        for (var i = 0; i < quotes.length; i++) {
            var textNode = document.createElement('span');
            textNode.innerHTML = quotes[i];
            spanArr.push(textNode)
        }
        return spanArr;
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}();

