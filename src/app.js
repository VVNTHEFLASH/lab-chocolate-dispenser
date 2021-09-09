var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {

    if (count > 0) {
        for (let i = 0; i < count; i++) {
            chocolates.unshift(color);
        }
    } else {
        return 'Number cannot be zero/negative';
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    
    var remove = [];
    if(number > chocolates.length) {
        return 'Insufficient chocolates in the dispenser';
    }
    else if(number > 0) {
        for(let i=0;i < number;i++) {
            remove[i] = chocolates.shift();
        }
        return remove;
    }
    else {
        return 'Number cannot be zero/negative';
    }
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number) {
    var dispense = [];
    if(number > chocolates.length) {
        return 'Insufficient chocolates in the dispenser';
    }
    else if(number > 0) {
        for(let i=0;i<number;i++) {
            dispense[i] = chocolates.pop();
        }
        return dispense;
    }
    else {
        return 'Number cannot be zero/negative';
    }
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color) {
    if(number > chocolates.length) {
        return 'Insufficient chocolates in the dispenser';
    }
    else if(number > 0) {
        var discolor = [];
        var count = 0;
        for(let i=chocolates.length;i >= 0; i--) {
            if(chocolates[i] == color) {
             discolor[count++] = chocolates.pop();
        }
    }
        return discolor;
    }
    else {
        return 'Number cannot be zero/negative';
    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates)
{
    var count = 0;
    var result=[];
    var a = 0;
    var color = ["green","silver", "blue", "crimson", "purple", "red", "pink"];
    while(count < color.length)
    {
    for(var i = 0; i<chocolates.length;i++)
    {
        if(chocolates[i]==color[count])
        result[count] = ++a; 
    }
    count++;
    a = 0;
    }
    return result.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let choco = chocolates.reduce(function(b ,a) {
        if(a in b) {
            b[a]++;
        }
        else {
            b[a] = 1;
        }
        return b;

    }, {})
    let Array = chocolates.sort((a , b) => {
        if(choco[b] > choco[a]) {
            return 1;
        }
        if(choco[b] < choco[a]) {
            return -1;
        }
        if(a > b) {
            return 1;
        }
        if(a < b) {
            return -1;
        }
    })
    chocolates = Array;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor) {

        if(color == finalColor) {
            return `Can't replace the same chocolates`;
        }
        else if(number > 0) {
            for(let i=0;i < chocolates.length;i++) {
                if(chocolates[i] == color) {
                    chocolates[i] = finalColor;
                }
            }
            return chocolates;
        }
        else {
        return 'Number cannot be zero/negative';
        }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalcolor) {
    if (chocolates.length === 0) {
        return [0, []];
    }
    var count = 0;
    if (color == finalcolor) {
        return "Can't replace the same chocolates";
    }
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] === color) {
            chocolates[i] = finalcolor;
        }
    }
    for (let j = 0; j < chocolates.length; j++) {
        if (chocolates[j] == finalcolor)
            count += 1;
    }
    var res = [count, chocolates];
    return res;
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor() {

}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates() {
    
}