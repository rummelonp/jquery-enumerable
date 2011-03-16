(function($) {

  var Enumerable = function() {
    var all = function(enumerable, iterator) {
      return $.inject(enumerable, true, function(result, index, value) {
        return result && iterator.call(value, index, value);
      });
    };

    var inject = function(enumerable, result, iterator) {
      $.each(enumerable, function(index, value) {
        result = iterator.call(value, result, index, value);
      });
      return result;
    };

    return {
      all: all,
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
