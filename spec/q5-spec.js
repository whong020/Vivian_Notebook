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

    it("convert ABC", function(){
        expect(MainCtrl.zigZagString("ABC", 2)).toEqual("ACB");
    })

    it("convert PAYPALISHIRING", function(){
        expect(MainCtrl.zigZagString("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
    })

    it("convert ABCDE", function(){
        expect(MainCtrl.zigZagString("ABCDE", 4)).toEqual("ABCED");
    })
});