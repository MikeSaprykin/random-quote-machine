/**
 * Created by Mike on 02.05.2016.
 */
/**
 * Dependencies requirements
 * QUOTES = Array of quotes objects
 */
var QUOTES = require('./quotes');

/**
 * Flip listener require
 */
var flipListener = require('./flip-listener');

/**
 * Ulits methods require
 */
var utils = require('./utils');

/**
 * Tweet button bootstrapping
 */
var tweet = require('./twitter');

module.exports = function MessageGenerator() {

    /**
     * Flip container element, that represents the block to toggle quotes
     */
    var flipContainer = document.getElementsByClassName('flip-container')[0];

    /**
     * Message div element, that is a container for all quotes
     */
    var message = document.getElementsByClassName('message')[0];

    /**
     * Call of the {@link init} function on {@link MessageGenerator} function call
     */
    init();

    /**
     * Init function, that registers flip event listener and
     * calls {@link generateMessageLayout} method
     */
    function init(){
        flipListener.listener(onClick);
        generateMessageLayout()
    }

    /**
     * On click event listener, that will be binded to flipListener click,
     * to toggle flip class, and call {@link generateMessageLayout} message
     */
    function onClick(){
        flipContainer.classList.toggle('flip');
        setTimeout(generateMessageLayout,200)
    }

    /**
     * Function that calls {@link removeElementChildren} method to clear all quotes
     * that get random quote with {@link getRandom} method,
     * calls {@link generateTextNodes}, then calls {@link generateMessageStyles} method
     * and {@link appendQuotesLayout}
     */
    function generateMessageLayout() {
        utils.removeElementChildren(message);
        var quote = QUOTES[utils.getRandom(0, QUOTES.length - 1)];
        var layout = generateTextNodes(quote.text);
        generateMessageStyles(layout, quote.featuredLines);
        appendQuotesLayout(layout)
    }

    /**
     * Function to generate span elements array with quotes text,
     * assigning inner html for each span to {@link QUOTES} text array item
     * @param quotes
     * @returns {Array}
     */
    function generateTextNodes(quotes) {
        var spanArr = [];
        for (var i = 0; i < quotes.length; i++) {
            var textNode = document.createElement('span');
            textNode.innerHTML = quotes[i];
            spanArr.push(textNode)
        }
        return spanArr;
    }

    /**
     * Function, that loops through layout array of html elements
     * and appends them to {@link message}
     * @param layout - Array of html elements
     */
    function appendQuotesLayout (layout) {
        for (var i = 0; i < layout.length; i++) {
            message.appendChild(layout[i])
        }
    }

    /**
     * Method to add unique styles out of styles passed in featuredLines object
     * Loops for index property, then loops each and calls {@link setMessageStyles} function
     * with element by index and styles passed in style object
     * Reference {@link QUOTES}
     * @param spanArr - array of span html elements
     * @param styles
     */
    function generateMessageStyles(spanArr, styles) {
        if(!styles) return;
        for (var i = 0; i < styles.length; i++) {
            for (var j = 0; j < styles[i].index.length; j++) {
                var index = styles[i].index[j];
                setMessageStyles(spanArr[index], styles[i].style)
            }
        }
    }

    /**
     * Loops for the styles, passed as a parameter, and then adds styles according to
     * styles passed in object
     * @param spanNode - HTML node
     * @param styles - Styles object
     */
    function setMessageStyles(spanNode, styles) {
        for (var key in styles) {
            spanNode.style[key] = styles[key];
        }
    }
}();

