var assert = require("assert");
var RecordStore = require("../record_store");


describe("Record store", function(){

  var recordStore;

  beforeEach(function(){
    recordStore = new RecordStore("Underwave models ltd", "Catwalk");
  })

  it("should have a name and city", function(){
    assert.equal(recordStore.name, "Underwave models ltd")
    assert.equal(recordStore.city, "Catwalk")
  })

  it("should have a property of how much cash is in the shop", function(){
    assert.equal(recordStore.cash, 1500);
  })

})