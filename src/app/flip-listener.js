/**
 * Created by Mike on 06.02.17.
 */
/**
 * Flip listener that adds an event listener on click on the new quote button
 * @type {{trigger, listener}}
 */
module.exports = function FlipListener(){
    return {
        /**
         * HTML element button with New Quote
         */
        trigger: document.getElementsByClassName('new-quote')[0],
        /**
         * Adds callback to trigger html element
         * @param callback
         */
        listener: function (callback) {
            this.trigger.addEventListener('click', callback)
        }
    }
}();