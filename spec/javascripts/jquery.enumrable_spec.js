describe('jquery.enumerable', function() {
  describe('all [-1, 0, 1]', function() {
    var arr;

    beforeEach(function() {
      arr = [-1, 0, 1];
    });

    it('All values should not be more equal 0', function() {
      expect($.all(arr, function() {
        return this >= 0;
      })).toBeFalsy();
    });

    it('All values should be more equal -1', function() {
      expect($.all(arr, function() {
        return this >= -1;
      })).toBeTruthy();
    });
  });

  describe('any [-1, 0, 1]', function() {
    var arr;

    beforeEach(function() {
      arr = [-1, 0, 1];
    });

    it('Any values should not be equal 10', function() {
      expect($.any(arr, function() {
        return this == 10;
      })).toBeFalsy();
    });

    it('Any values should be equal 0', function() {
      expect($.any(arr, function() {
        return this == 0;
      })).toBeTruthy();
    });
  });

  describe('inject [1, 2, 3]', function() {
    var arr;

    beforeEach(function() {
      arr = [1, 2, 3];
    });

    it('Array of squaring each values of array should be [1, 4, 9]', function() {
      var square = function(result) {
        result.push(this * this);
        return result;
      };
      expect($.inject(arr, [], square)).toEqual([1, 4, 9]);
    });

    it('Array of keys and values of array should be [[0, 1], [1, 2], [2, 3]]', function() {
      var pair = function(result, index) {
        result.push([index, this]);
        return result;
      };
      expect($.inject(arr, [], pair)).toEqual([[0, 1], [1, 2], [2, 3]]);
    });
  });
});
