describe('Rotate a Matrix', function() {
    var scope,
    MainCtrl,
    serviceMock;

    beforeEach(module('myApp'));
    beforeEach(inject(
        function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {});
        scope.$apply();
        }
    ));

    it("Rotating matrix one [[0]] ", function(){
        expect(MainCtrl.rotateMatrix([[0]])).toEqual([[0]]);
    })

    it("Rotating matrix two [[1,2,3],[4,5,6],[7,8,9]]", function(){
        let m1 = [[1,2,3],[4,5,6],[7,8,9]];
        let solM1 = [[7,4,1], [8,5,2], [9, 6 , 3]] 
        expect(MainCtrl.rotateMatrix(m1)).toEqual(solM1);
    })
});
