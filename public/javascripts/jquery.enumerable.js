(function($) {

  var Enumerable = function() {
    var all = function(enumerable, iterator) {
      return $.inject(enumerable, true, function(result, index, value) {
        return result && iterator.call(value, index, value);
      });
    };

    var any = function(enumerable, iterator) {
      return $.inject(enumerable, false, function(result, index, value) {
        return result || iterator.call(value, index, value);
      });
    };

    var collect = $.map;

    var select = function(enumerable, iterator) {
      var results = [];
      $.each(enumerable, function(index, value) {
        iterator.call(value, index, value) && results.push(value);
      });
      return results;
    };

    var inject = function(enumerable, result, iterator) {
      $.each(enumerable, function(index, value) {
        result = iterator.call(value, result, index, value);
      });
      return result;
    };

    var member = function(enumerable, val) {
      return $.any(enumerable, function(index, value) {
        return val == this;
      });
    };

    var include = member;

    var max = function(enumerable) {
      var result;
      $.each(enumerable, function(index, value) {
        if (result === undefined ||
           value > result)
        {
          result = value;
        }
      });
      return result;
    };

    var maxBy = function(enumerable, iterator) {
      var result;
      var iterator_result;
      $.each(enumerable, function(index, value) {
        var iterator_value = iterator.call(value, index, value);
        if (iterator_result === undefined ||
           iterator_value > iterator_result)
        {
          iterator_result = iterator_value;
          result = value;
        }
      });
      return result;
    };

    var min = function(enumerable) {
      var result;
      $.each(enumerable, function(index, value) {
        if (result === undefined ||
           value < result)
        {
          result = value;
        }
      });
      return result;
    };

    var minBy = function(enumerable, iterator) {
      var result;
      var iterator_result;
      $.each(enumerable, function(index, value) {
        var iterator_value = iterator.call(value, index, value);
        if (iterator_result === undefined ||
           iterator_value < iterator_result)
        {
          iterator_result = iterator_value;
          result = value;
        }
      });
      return result;
    };

    var partition = function(enumerable, iterator) {
      var true_results = [];
      var false_results = [];
      $.each(enumerable, function(index, value) {
        if (iterator.call(value, index, value)) {
          true_results.push(value);
        } else {
          false_results.push(value);
        }
      });
      return [true_results, false_results];
    };

    var reject = function(enumerable, iterator) {
      var results = [];
      $.each(enumerable, function(index, value) {
        !iterator.call(value, index, value) && results.push(value);
      });
      return results;
    };

    var pluck = function(enumerable, property) {
      var results = [];
      $.each(enumerable, function(index, value) {
        results.push(value[property]);
      });
      return results;
    };
    
    return {
      all: all,
      any: any,
      collect: collect,
      select: select,
      inject: inject,
      member: member,
      include: include,
      max: max,
      maxBy: maxBy,
      min: min,
      minBy: minBy,
      partition: partition,
      reject: reject,
      pluck: pluck
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
