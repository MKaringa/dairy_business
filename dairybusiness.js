/*
var shed_A ={
    shed_no : "A",
    total_amount_of_milk_per_day : 510,
};
var shed_B ={
    shed_no : "B",
    total_amount_of_milk_per_day : 308,
}
var shed_C ={
    shed_no : "C",
    total_amount_of_milk_per_day : 486,
}
var shed_D ={
    shed_no : "D",
    total_amount_of_milk_per_day : 572,
}
var sheds =[shed_A, shed_B, shed_C, shed_D]
var totalMilk = function(){
        return shed_A.total_amount_of_milk_per_day + shed_B.total_amount_of_milk_per_day + shed_C.total_amount_of_milk_per_day + shed_D.total_amount_of_milk_per_day;
}
console.log(shed_A.total_amount_of_milk_per_day + shed_B.total_amount_of_milk_per_day + shed_C.total_amount_of_milk_per_day + shed_D.total_amount_of_milk_per_day)
for(i=0; i<sheds; i++){
    console(i)
}
*/

function findTotal(){
    var arr = document.getElementsByName('qty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
}
  

