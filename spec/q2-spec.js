describe('Three Sum Test Spec', function() {
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

  it("Can find the sum [1,2,3,4,5], 8 ", function(){
     expect(MainCtrl.threeSum([1,2,3,4,5], 8)).toEqual(true);
  })

  it("Can find the sum [1,2,3,4,5], 6 ", function(){
     expect(MainCtrl.threeSum([1,2,3,4,5], 6)).toEqual(true);
  })

  it("Can find the sum [1,2,3,4,5], 10 ", function(){
     expect(MainCtrl.threeSum([1,2,3,4,5], 10)).toEqual(true);
  })

  it("Can not find the sum [1,2,3,4,5], 5 ", function(){
     expect(MainCtrl.threeSum([1,2,3,4,5], 5)).toEqual(false);
  })

  it("Can not find the sum [1,5,10,12], 22 ", function(){
     expect(MainCtrl.threeSum([1,5,10,12], 22)).toEqual(false);
  })

  it("Can find the sum [1,5,10,12], 16 ", function(){
     expect(MainCtrl.threeSum([1,5,10,12], 16)).toEqual(true);
  })

});
