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

  var MethodizeEnumerable = {};
  $.each(Enumerable, function(key, method) {
    MethodizeEnumerable[key] = function() {
      return method.apply(this, [this].concat($.makeArray(arguments)));
    };
  });

  $.extend(Enumerable);
  $.fn.extend(MethodizeEnumerable);

})(jQuery);
