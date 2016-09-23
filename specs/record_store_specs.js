var assert = require("assert");
var RecordStore = require("../record_store");
var Record = require("../record")


describe("Record store", function(){

  var recordStore;

  beforeEach(function(){
    record1 = new Record("Paul", "The underwear and the undertear", 5.99)
    record2 = new Record("Patrisha", "Loungery", 13.99)
    record3 = new Record("The Backstrap Boys", "Function and form", 9.99)
    recordStore = new RecordStore("Underwave models ltd", "Catwalk");
  })

  it("should have a name and city", function(){
    assert.equal(recordStore.name, "Underwave models ltd")
    assert.equal(recordStore.city, "Catwalk")
  })

  it("should have a property of how much cash is in the shop", function(){
    assert.equal(recordStore.cash, 1500);
  })

  it("somewhere to put records", function(){
    assert.deepEqual([], recordStore.stock)
  })

  it("can add stock to inventory", function(){
    recordStore.addStock([record1, record2, record3]);
    assert.equal(3, recordStore.stock);
  })

})