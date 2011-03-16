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

  it('collect should be equal $.map', function() {
    expect($.collect).toEqual($.map);
  });

  describe('select [1, 2, 3, 4, 5, 6]', function() {
    var arr;

    beforeEach(function() {
      arr = [1, 2, 3, 4, 5, 6];
    });

    it('Array of selected even number values from array should be [2, 4, 6]', function() {
      expect($.select(arr, function() {
        return this % 2 == 0;
      })).toEqual([2, 4, 6]);
    });

    it('Array of selected values more than 3 from array should be [4, 5, 6]', function() {
      expect($.select(arr, function() {
        return this > 3;
      })).toEqual([4, 5, 6]);
    });
  });

  describe('member [1, 2, 3]', function() {
    var arr;

    beforeEach(function() {
      arr = [1, 2, 3];
    });

    it('should have 1', function() {
      expect($.member(arr, 1)).toBeTruthy();
    });

    it('should not have 0', function() {
      expect($.member(arr, 0)).toBeFalsy();
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
