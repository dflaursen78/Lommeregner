function octal() {
    equal();
    var number = document.getElementById("results").value

    document.getElementById("results").value = (+number).toString(8)
    //[1-7, 8 = 10] dvs.  var /8 + rest som ikke kan overstige 7
}

function e() {
    document.getElementById("results").value += "e"; // (Eulers tal) naturlige logaritme (2,7182818....)
}

function zero() {
    document.getElementById("results").value += 0;
}

function period() {
    document.getElementById("results").value += '.';
}

function equal() {
    var results = document.getElementById("results").value
    results = results.replace('^', '**');
    results = results.replace('e', Math.E); // laver Math.E om til e. (Eulers tal) naturlige logaritme
    results = results.replace('π', Math.PI); //π i stedet for at skrive 3.1415.......

    document.getElementById("calculate").value = document.getElementById("results").value;
    document.getElementById("results").value = eval(results);
}

function plus() {
    document.getElementById("results").value += '+';
}
//-------------------------------------------------------------------------------------------------
function bin() {
    equal();
    var number = document.getElementById("results").value
    let binary = [];

    while (number > 0) {

        if (number % 2 === 1) {
            //strict equal ==:= det sidste lig med indikere 
            //at det skal være af samme type ellers fejl

            binary.push(1);
            number = (number - 1) / 2;

        } else {

            binary.push(0);
            number /= 2;
        }
    }

    binary = binary.reverse().join('');
    document.getElementById("results").value = binary

    //document.getElementById("results").value = (+number).toString(2) 0 og 1 taller
}

function procent() {
    document.getElementById("results").value += '/100*'; //  var (% = (/100*)) var = procent
}

function one() {
    document.getElementById("results").value += 1;
}

function two() {
    document.getElementById("results").value += 2;

}

function three() {
    document.getElementById("results").value += 3;
}

function minus() {
    document.getElementById("results").value += '-';
}

//-------------------------------------------------------------------------------------------------

function hex() {
    equal();
    var number = document.getElementById("results").value

    document.getElementById("results").value = (+number).toString(16)
    // [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f] hvor mange gange 16 gå op i et tal + rest

}

function elevated() {
    document.getElementById("results").value += '^'; // opløftet eller potens
}

function four() {
    document.getElementById("results").value += 4;
}

function five() {
    document.getElementById("results").value += 5;
}

function six() {
    document.getElementById("results").value += 6;
}

function multiply() {
    document.getElementById("results").value += '*';
}

//-------------------------------------------------------------------------------------------------

function tal() {
    equal();
    var string = document.getElementById("results").value
    let results = +0;
    let bits = +1;
    for (let i = 0; i < string.length; i++) {

        let currNum = +(string[string.length - i - 1]);
        if (currNum === 1) { //stict equal
            results += bits;
        }
        bits *= 2;
    }
    document.getElementById("results").value = results;

    //document.getElementById("results").value = (+number).toString(10)
}

function sqrt() {
    equal();
    document.getElementById("calculate").value = '√(' + document.getElementById("calculate").value + ')';
    var results = document.getElementById("results").value;
    results = Math.sqrt(results);
    document.getElementById("results").value = results; // var tryk √ så får man resultat (ikke tryk =)

}

function seven() {
    document.getElementById("results").value += 7;
}

function eight() {
    document.getElementById("results").value += 8;
}

function nine() {
    document.getElementById("results").value += 9;
}

function devide() {
    document.getElementById("results").value += '/';
}

//-------------------------------------------------------------------------------------------------

function mod() {
    document.getElementById("results").value += '%'; //Tegn for modulus (rest)
}

function pi() {
    document.getElementById("results").value += 'π';
}

function sin() {
    equal();
    document.getElementById("calculate").value = 'Math.sin(' + document.getElementById("calculate").value + ')';
    var results = document.getElementById("results").value;
    results = Math.sin(results);
    document.getElementById("results").value = results;
    //  10.3*sin(58.5) = 9.563...man skriver det baglæns 58.5sin * 10.3 = 9.563...
}

function tan() {
    equal();
    document.getElementById("calculate").value = 'Math.tan(' + document.getElementById("calculate").value + ')';
    var results = document.getElementById("results").value;
    results = Math.tan(results);
    document.getElementById("results").value = results;
}

function cos() {
    equal();
    document.getElementById("calculate").value = 'Math.cos(' + document.getElementById("calculate").value + ')';
    var results = document.getElementById("results").value;
    results = Math.cos(results);
    document.getElementById("results").value = results;
}

function clearField() {
    document.getElementById("calculate").value = ""; // sletter alt i calculate og results
    document.getElementById("results").value = "";
}

//-------------------------------------------------------------------------------------------------

function dec(tal) {

    var results = document.getElementById("calculate").value
    results = results.replace('^', '**');
    results = results.replace('e', Math.E);
    results = results.replace('π', Math.PI);

    document.getElementById("results").value = eval(results).toFixed(tal);

}