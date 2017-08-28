var rotateMatrix = function(matrix) {
    var m = matrix.reverse();
    for (i = 0 ; i < m.length ; i++){
        for (j=0; j <i ; j++){
             var temp = m[i][j];
             m[i][j] = m[j][i];
             m[j][i] = temp;  
        }
    }    
    return m;
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