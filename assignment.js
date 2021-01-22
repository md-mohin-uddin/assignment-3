// 1.Kilometer to Meter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var oneKiloMeter = kilometerToMeter(1);
console.log(oneKiloMeter);

// 2.Budget Calculator 
function budgetCalculator(watch, mobile, laptop){
    var totalWatchesPrice = watch *50;
    var totalMobilesPrice = mobile *100;
    var totalLaptopsPrice = laptop *250;
    var total = totalWatchesPrice + totalMobilesPrice + totalLaptopsPrice ;
    return total;
}
    var result = budgetCalculator(5, 6, 7);
console.log(result)

// 3.Hotel Cost
function hotelCost(days){
    var rent= 0;
    if(days<=10){
        rent = days *100;
    }else if(days<=20){
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        rent = firstTenDays + secondTenDays;
    }else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var remainingDays = remaining * 50;
        rent = firstTenDays + secondTenDays + remainingDays;
    }
    return rent;
}
var count = hotelCost(30);
console.log(count);

// 4.Mega Friend 

function megaFriend(friendsName) {
    var size = 0;
    var max;
    for (var i = 0; i < friendsName.length; i++) {

        if (friendsName[i].length > size) {
            size = friendsName[i].length;
            max = friendsName[i];
        }
    } return max;
}
var friendsName = ["Arman Ul Alam", "Arman Hossain", "Shahed Alam", "Mujibul Bashar", "Ammman Abedin"];
console.log(megaFriend(friendsName));
