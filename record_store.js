var _ = require("lodash")

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.cash = 1500;
  this.stock = [];
}

RecordStore.prototype = {
  addStock: function(stockArray){
    this.stock = this.stock.concat(stockArray);
  },
  listStock: function(){
    return _.map(this.stock, function(item){
      return("Artist : "+ item.artist + "Title : '" + item.title + "' Price : " + item.price)
    })
  },
  findRecordByName: function(name){
    return _.find(this.stock, function(item){
      return item.title === name;
    })
  },
  sellStock: function(item){
    var sale = this.stock.splice(this.stock.indexOf(item), 1);
    this.cash += sale.price;
  },
  valueStock: function(){
    var output = 0
    _.forEach(this.stock, function(item){
      output += item.price
    })
    return output
  },
  valueBusiness: function(){
    return this.valueStock() + this.cash
  }
}

module.exports = RecordStore;