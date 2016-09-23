var assert = require("assert")
var Record = require("../record")

describe("A record", function(){

  var record;

  beforeEach(function(){
    record = new Record("Paul", "A rant in my pants", 5.99)
  })

  it("Should have an artist, title and price", function(){
    assert.equal(record.artist, "Paul");
    assert.equal(record.title, "A rant in my pants");
    assert.equal(record.price, 5.99);
  })

})