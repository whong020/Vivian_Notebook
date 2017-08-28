describe('Zig Zag String', function() {
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

    it("convert PAYPALISHIRING", function(){
        expect(MainCtrl.zigZagString("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
    })

});