module.exports = function totalPhoneBill (amount) {
    // console.log(amount);
     var price = 0;
     var newPhoneBill = amount.split(',');
     for (var i=0;i<newPhoneBill.length;i++) {
     var newPhoneBill2 = newPhoneBill[i].trim();
    if (newPhoneBill2.startsWith("ca")) {
      price += 2.75
   } else if (newPhoneBill2.startsWith("sm")) {
     price += 0.65
   }
     }
       return "R" + price.toFixed(2)
   }