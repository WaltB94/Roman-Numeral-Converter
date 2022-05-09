function convertToRoman(num) {
    let numberArrayInString = num.toString().split("")
    
    
    let unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let decimales = [ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let centesimas = [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let milesimas = ["","M", "MM", "MMM"];
    
    
    //Unidades
    
    if (numberArrayInString.length === 1) {
    
    
    
    let numeroUnidad = Number(numberArrayInString[0]) 
    
    return unidades[numeroUnidad]
    
    }
    
    //Decimales
    
    else if (numberArrayInString.length === 2) {
    let numeroUnidad = Number(numberArrayInString[1]) 
    let numeroDecimal = Number(numberArrayInString[0])
    
    
    return  decimales[numeroDecimal] + unidades[numeroUnidad]
    
    }
    
    //Centesimas
    
    else if (numberArrayInString.length === 3) {
    let numeroUnidad = Number(numberArrayInString[2]) 
    let numeroDecimal = Number(numberArrayInString[1])
    let numeroCentesima = Number(numberArrayInString[0])
    return centesimas[numeroCentesima] + decimales[numeroDecimal] + unidades[numeroUnidad]
    
    }
    
    //Milesimas
    
    else if (numberArrayInString.length === 4 && Number(numberArrayInString[0]) < 4) {
    let numeroUnidad = Number(numberArrayInString[3]) 
    let numeroDecimal = Number(numberArrayInString[2])
    let numeroCentesima = Number(numberArrayInString[1])
    let numeroMilesima = Number(numberArrayInString[0])
    return milesimas[numeroMilesima] + centesimas[numeroCentesima] + decimales[numeroDecimal ] + unidades[numeroUnidad ]
    
    }
    
    
    // Out of range
    
    
    else {
    return "Out of range"
    }
    
    
    }
    
    
    
    
    
    console.log(convertToRoman(34))