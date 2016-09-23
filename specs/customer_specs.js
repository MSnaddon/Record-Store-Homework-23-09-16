var assert = require('assert')

var Customer = require('../customer')
var RecordStore = require('../record_store')
var Record = require("../record")


describe("Customer", function(){

  var customer;
  var recordStore;

  beforeEach(function(){
    customer = new Customer("Craig", 5)
    recordStore = new RecordStore("It's friday, friday, friday", "Edinburgh")
    recordStore.addStock([
      new Record("Rebecca Black", "Friday", 0.5),
      new Record("Rebecca Black", "Saturday", 6),
      new Record("The Beatles", "Yesterday", 4.99) ])
  })

  it("should be smart and hairy", function(){
    assert.equal(customer.description, "Smart and hairy");
  })

  it("should be able to buy stock", function(){
    var buyingRecord = recordStore.stock[0]
    customer.buyRecord(buyingRecord, recordStore);
    assert.equal(customer.inventory.length, 1);
  })

})