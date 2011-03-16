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

  it('include should be equal member', function() {
    expect($.include).toEqual($.member);
  });

  describe('max', function() {
    it('[1, 2, 3].max should be 3', function() {
      expect($.max([1, 2, 3])).toEqual(3);
    });

    it('[1, 10, 100, 1000].max should be 1000', function() {
      expect($.max([1, 10, 100, 1000])).toEqual(1000);
    });
  });

  describe('maxBy', function() {
    it('[-3, -2, -1].maxBy squaring value should be -3', function() {
      expect($.maxBy([-3, -2, -1], function() {
        return this * this;
      })).toEqual(-3);
    });
  });

  describe('min', function() {
    it('[1, 2, 3].min should be 1', function() {
      expect($.min([1, 2, 3])).toEqual(1);
    });

    it('[-1000, -100, -10, 0].min should be -1000', function() {
      expect($.min([-1000, -100, -10, 0])).toEqual(-1000);
    });
  });

  describe('minBy', function() {
    it('[-4, -2, 1, 3].minBy squaring value should be 1', function() {
      expect($.minBy([-4, -2, 1, 3], function() {
        return this * this;
      })).toEqual(1);
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
