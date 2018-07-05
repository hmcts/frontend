const moment = require('moment');

module.exports = function () {

  var filters = {
    
    date: function(str, format) {
      return moment(str).format(format || 'MM DDD YYYY');
    },

    hmctsDate: function(str) {
      return moment(str).format('D MMMM YYYY');
    },

    hmctsShortDate: function(str) {
      return moment(str).format('D MMM YYYY');
    },

    hmctsTime: function(str) {
      var m = moment(str);
      if(m.minutes() > 0) {
        return m.format('h:mma');
      } else {
        return m.format('ha');
      }
    }

  };

  return filters;

};