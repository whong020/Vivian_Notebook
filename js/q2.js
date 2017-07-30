var threeSum = function(nums, target) {
    var count,sum,acc1 = 0;
    while(acc1 < nums.length-1){
      for(count = acc1+1; count < nums.length-1; count++){
        var count2 = count+1
        sum = nums[acc1] + nums[count] + nums[count2]
        if(sum == target){
          return true
        }
      }
      acc1 += 1
    }
  return false;
};


/**
 * DESIGN
 * A function which will return true if three numbers within the array is equal
 * to the target
 *  - must be done in O(n^2) time
 *
 * Parameters: array , int
 * The test spec is called with something like threeSum([1,2,3,4,5], 10)
 * Returns: Boolean
 */
