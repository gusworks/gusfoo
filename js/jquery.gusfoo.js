(function( $ ){
  $.fn.gusfoo = function(method) {

    var startDate;
    var finalDate;

    var settings = {
      'startMonth'          : '2011-01',
      'finalMonth'          : '2011-12',
      'singleYearCaption'   : 'Enter the text here: ',
      'multipleYearCaption' : 'Select the year and enter the text here: '
    };

    var methods = {
      init   : function(options) {
      console.log('----');
      if(options){
          $.extend(settings, options);
        };

        var startSplit = settings['startMonth'].split('-');
        var finalSplit = settings['finalMonth'].split('-');
        
        startDate = new Date(startSplit[0], startSplit[1] - 1, 1);
        finalDate = new Date(finalSplit[0], finalSplit[1] - 1, 1);

        this.html(draw());
        this.addClass('gusfoo');

        console.log(this);
        console.log(startDate);
        console.log(finalDate);
        console.log(settings);
      }
    }

    function draw(){
      var html = '<p><b>';
      var startYear = startDate.getFullYear();
      var finalYear = finalDate.getFullYear();

      if(startYear == finalYear){
        html += settings['singleYearCaption'];
      } else {
        html += settings['multipleYearCaption'];
        html += '<select id="gusfooYear">';
        for(var year = startYear; year <= finalYear; year++){
          html += '<option value="' + year + '">' + year + '</option>';
        }
        html += '</select>';
      }
      html += '</b></p>';
      return html;
    }

    // Method calling logic
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.gusfoo');
    }
    return this;
  };
})( jQuery );
