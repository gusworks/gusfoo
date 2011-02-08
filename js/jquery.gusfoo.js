(function( $ ){
  $.fn.gusfoo = function(method) {

    var startDate;
    var finalDate;
    var startYear;
    var finalYear;
    var containerId;

    var settings = {
      'startMonth'          : '2011-01',
      'finalMonth'          : '2011-12',
      'singleYearCaption'   : 'Clique no valor que deseja alterar: ',
      'multipleYearCaption' : 'Selecione o ano e clique no valor que deseja alterar: ',
      'yearText'            : 'Ano: ',
      'months'              : ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
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

        startYear = startDate.getFullYear();
        finalYear = finalDate.getFullYear();

        containerId = this.attr('id');

        this.html(draw());
        this.addClass('gusfoo');

        var select = $('#' + containerId + '_select');
        select.change(onSelectChange);

        select.trigger('change');
      }
    }

    function draw(){
      var html = '<p><i>';
      var startYear = startDate.getFullYear();
      var finalYear = finalDate.getFullYear();

      if(startYear == finalYear){
        html += settings['singleYearCaption'] + '</i>';
      } else {
        html += settings['multipleYearCaption'] + '</i>';
        html += '<select  id="' + containerId + '_select">';
        for(var year = startYear; year <= finalYear; year++){
          html += '<option value="' + year + '">' + year + '</option>';
        }
        html += '</select>';
        html += '';
      }
      html += '</p>';

      for(var year = startYear; year <= finalYear; year++){
        html += '<div class="gusfoo_soft_box" id="' + containerId + '_year_' + year + '"><b>' + settings['yearText']  + year + '</b><table border="0">';
        html += '<tbody><tr><th></th>';
        for(var month = 0; month < 12; month++){
          html += '<th class">' + settings['months'][month] + '</th>';
        }
        html += '</tr>';
        html += '</tbody></table></div>';
      }
      return html;
    }

    function onSelectChange(){
      for(var year = startYear; year <= finalYear; year++){
        if($(this).attr('value') == year){
          $('#' + containerId + '_year_' + year).show();
        } else {
          $('#' + containerId + '_year_' + year).hide();
        };
      };
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
