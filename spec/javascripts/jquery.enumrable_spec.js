describe('jquery.enumerable', function() {
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
