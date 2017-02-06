/**
 * Created by Mike on 06.02.17.
 */
/**
 * Function, that returns object with utils methods, like get random and
 * remove element children
 * @type {{getRandom, removeElementChildren}}
 */
module.exports = function Utils(){
    return {
        /**
         * Returns random number in a range of numbers
         * @param min
         * @param max
         * @returns {*}
         */
        getRandom: function(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        /**
         * Removes all elements for html element passed in parameter
         * @param element
         */
        removeElementChildren: function(element){
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }
}();