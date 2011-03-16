describe('jquery.enumerable', function() {
  describe('inject [1, 2, 3]', function() {
    var arr;

    beforeEach(function() {
      arr = [1, 2, 3];
    });

    it('Array of squaring each values of array should be [1, 4, 9]', function() {
      expect($.inject(arr, [], function(result) {
        result.push(this * this);
        return result;
      })).toEqual([1, 4, 9]);
    });
  });
});
