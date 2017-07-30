var twoSum = function(nums, target) {
    var count,sum,acc1 = 0;
    while(acc1 < nums.length-1){
      for(count = acc1+1; count < nums.length; count++){
        sum = nums[acc1] + nums[count]
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
 * A function which will return true if two numbers within the array is equal
 * to the target
 *  - must be done in O(n) time \ O(n) space
 *  - brute force with O(n^2)
 *
 * Parameters: array , int
 * The test spec is called with like twoSum([1,2,3,4,5], 10)
 * Returns: Boolean
 */
