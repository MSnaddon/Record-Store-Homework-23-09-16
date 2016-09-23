var Customer = function(name, cash){
  this.name = name;
  this.cash = cash
  this.description = "Smart and hairy"
  this.hoard = []
}

Customer.prototype = {
  buyRecord: function(record, store){
    if (this.cash>= record.price){
      store.sellStock(record);
      this.hoard.push(record);
    }
  }
}

module.exports = Customer