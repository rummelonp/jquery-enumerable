(function($) {

  var Enumerable = function() {

    var inject = function(enumerable, result, iterator) {
      $.each(enumerable, function(index, value) {
        result = iterator.call(value, result, index, value);
      });
      return result;
    };

    return {
      inject: inject
    };
  }();

  $.extend(Enumerable);

})(jQuery);
