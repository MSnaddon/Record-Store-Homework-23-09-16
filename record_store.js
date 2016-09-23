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
      return("Record name : " + item.title + " | Artist : "+ item.artist + " | Price : " + item.price)
    })
  },

}

module.exports = RecordStore;