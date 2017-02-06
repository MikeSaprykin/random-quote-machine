/**
 * Created by Mike on 06.02.17.
 */
module.exports = {
    trigger: document.getElementsByClassName('new-quote')[0],
    listener: function(callback){
        this.trigger.addEventListener('click',callback)
    }
};