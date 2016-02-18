//Some functions for lists 
exports.absoluteValue = function(pList){
	return pList.map(Math.abs);
}
exports.powNumbersList = function(pList, pPower){
	return pList.map(function(x){return x*pPower});
}
// sum up all the values of an array
exports.sumValues = function(pList){
	return pList.reduce(function(x,y){return x+y}, 0);
}
// find the largest number
exports.maxValue = function(pList){
	return numbers.reduce(function(a,b){
		return Math.max(a,b)}); 
}
// Capitalize every two words in a sentence
exports.CapitalizeWords = function(pString){
	return pString.split(' ').map(function(s, i){
		if (i%2 == 0) {
			return s.toUpperCase();
		}
		else {
			return s;
		}
	})
}
// some functions for days 
exports.isLeapYear= function(pYear){
	if (pYear < 1582){
        return false;
	}
    if (pYear%400==0){
        return true;
    }
    else if (pYear%100==0){
        return false;
    }
    else if (pYear%4==0){
        return true;
    }
    else{
        return false;
    }
}
/*
Descripcion: Determina el dia de la semana(0,1,2,3,4,5,6) dada una fecha válida
Logica: Siendo N el resultado del dia: 
	N = (A+B+C+D+E)%7 (N = (1: Lunes 2: Martes 3: Miércoles 4: Jueves 5: Viernes 6: Sábado 0: Domingo
	A = Un número asociado al siglo. Ver array "_YearKeys"
	B = Dos últimos dígitos del año en cuestión y a ese número de dos cifras le sumamos un cuarto del mismo
	C = si el año es bisiesto, y el mes es enero o febrero el coeficiente será C = –1. En cualquier otro caso C = 0.
	D = Numeros predefinidos segun el mes. Ver array "_MonthKeys"
	E = dia
*/
exports.weekDay = function(pDay,pMonth,pYear){
	var _YearsKeys = [8,7,5,3,1,0,-2,-4,-6,-7,-9,-11,-13]
	var _MonthKeys = [6,2,2,5,0,3,5,1,4,6,2,4];

    var A = _YearsKeys[Math.floor((pYear-1500)/100)]  ;  
    var B_aux = pYear % 100;
    var B = B_aux + Math.floor(B_aux/4);
    var C = 0; 
    if (isLeapYear(pYear)&& pMonth<=2) {
    	C = -1;
    }
    var D = _MonthKeys[pMonth-1];
    var E = pDay;
    var N = (A+B+C+D+E)%7;
    return N;
}



