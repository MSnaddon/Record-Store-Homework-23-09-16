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
    assert.deepEqual([], recordStore.stock);
  })
})

describe("Record store functions", function(){

  beforeEach(function(){
    record1 = new Record("Paul", "The underwear and the undertear", 5.99)
    record2 = new Record("Patrisha", "Loungery", 13.99)
    record3 = new Record("The Backstrap Boys", "Function and form", 9.99)
    recordStore = new RecordStore("Underwave models ltd", "Catwalk");
    recordStore.addStock([record1, record2, record3]);
  })

  it("can add stock to inventory", function(){
    assert.equal(3, recordStore.stock.length);
  })

  it("can return a list the stock", function(){
    assert.equal(recordStore.listStock().length, 3);
  })

  it("can find record by name",function(){
    assert.equal(recordStore.findRecordByName("Function and form"), record3);
  })

  it("can sell a record", function(){
    recordStore.sellStock(record2);
    assert.equal(recordStore.stock.length,2)
  })

  it("can evaluate stock total", function(){
    assert.equal(29.97, recordStore.valueStock());
  })

})