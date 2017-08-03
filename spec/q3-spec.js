describe('Sum in linked list form', function() {
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
    function createNumber(arrayOfNum) {
        let numObj = {};
        let starter = numObj;
        for (let i = 0; i < arrayOfNum.length ; i++ ){
            starter.val = arrayOfNum[i];
            starter.next = {};
            starter = starter.next;
        }
        return numObj;
    }
    it("Can add 15 and 1 to 16 ", function(){
        let fifteen = createNumber([1,5]);
        let one = createNumber([1])
        expect(MainCtrl.sumLists(fifteen, one)).toEqual(16);
    })

    it("Can add 25 and 35 to 60 ", function(){
        let twentyFive = createNumber([2,5]);
        let sixtyFive = createNumber([3,5])
        expect(MainCtrl.sumLists(twentyFive, sixtyFive)).toEqual(60);
    })

    it("Can add 273 and 898 to 1171 ", function(){
        let twoSeventyThree = createNumber([2,7,3]);
        let eightNightyEight = createNumber([8,9,8])
        expect(MainCtrl.sumLists(twoSeventyThree, eightNightyEight)).toEqual(1171);
    })
});
