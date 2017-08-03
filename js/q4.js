var rotateMatrix = function(matrix) {
    return [[0,0,0], [0,0,0]];
};


/**
 * DESIGN
 * A function which will rotate a matrix
 * [[1,2,3],[4,5,6],[7,8,9]]
 *   
 *   1 , 2 , 3               7, 4 , 1 
 *   4 , 5 , 6      =>       8, 5 , 2
 *   7 , 8 , 9               9, 6 , 3
 * 
 * Parameters: Array<Array<int>>
 * List will be an object the following:
 *  
 * The test spec is called with something like rotateMatrix(arr1,arr2 )
 * Returns: int
 */