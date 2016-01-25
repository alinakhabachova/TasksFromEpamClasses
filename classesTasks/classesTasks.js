//Эратосфеново решето
function sieveOfEratosthenes() {
    var n = prompt("enter size of array");
    var array = [];
    var k = 2;

    for (var i = 0; i < n; i++) {
        array[i] = i + 1;
    }

    for (var i = 2; (i * i) < n; i++) {
        for (var j = (i * i) - 1; j < n; j += i) {
            array[j] = 0;
        }
    }
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== 0) {
            document.write(array[i] + " ");
        }
    }
}

//Сортировка вставками
function sortVst() {
    var n = prompt("Enter size of array");
    var tmp;
    var i;

    if (!isNaN(n)) {
        var randomArray = [];
        for (i = 0; i < n; i++) {
            randomArray.push(Math.floor((Math.random() * 100) + 1));
        }
        var original = randomArray;
        document.write("<p>" + original + "</p>");

        for (var j = 1; j < n; j++) {
            tmp = randomArray[j];
            i = j - 1;
            while (i >= 0 && randomArray[i] > tmp) {
                randomArray[i + 1] = randomArray[i];
                i -= 1;
                randomArray[i + 1] = tmp;
            }
        }
        document.write(randomArray);
    }
}

//Работа с матрицей
function workWithMatrix() {
    var array = [];
    var n = 6;
    for (var i = 0; i < n; i++) {
        array[i] = [];
        for (var j = 0; j < n; j++) {
            array[i][j] = Math.floor((Math.random() * 9) + 1);
            document.write(array[i][j] + "   ");
        }
        document.write("<p></p>");
    }

    document.write("result <br>");
    var chain = [];
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (array[i][j] === chain[0]) {
                chain.push(array[i][j]);
            } else {
                if (chain.length > 1) {
                    document.write(chain + "<br>");
                }
                chain = [array[i][j]];
            }
            if (j === (n - 1)) {
                if (chain.length > 1) {
                    document.write(chain + "<br>");
                }
                chain = [];
            }
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (array[j][i] === chain[0]) {
                chain.push(array[j][i]);
            } else {
                if (chain.length > 1) {
                    document.write(chain + "<br>");
                }
                chain = [array[j][i]];
            }
            if (j === (n - 1)) {
                if (chain.length > 1) {
                    document.write(chain + "<br>");
                }
                chain = [];
            }
        }
    }
}

//Циклический сдвиг
function circularShift() {
    var n = prompt("Enter number:");
    var shift = prompt("Enter shift:");
    var array = [];
    for (var i = 31; i >= 0; i--) {
        array.push(1 & (n >> i));
    }
    document.write(n + "<br>");
    document.write(array + "<br>");
    n = (n >>> 32 - shift) + (n << shift);
    array = [];
    for (var i = 31; i >= 0; i--) {
        array.push(1 & (n >> i));
    }
    document.write(n + "<br>");
    document.write(array + "<br>");
}

//Использование реккурсии
function exponentialFunction() {
    var x = prompt("Введите x:", 0);
    var eps = prompt("Введите точность:", 0);
    var i = 1;
    var z = 1;

    function exp(x, eps, i) {
        z *= x / i;
        if (z > eps) {
            return z + exp(x, eps, i + 1);
        } else {
            return z;
        }
    }

    document.write(exp(x, eps, i))
}

//Корректор
function corrector() {
    var str = prompt("Введите строку:");
    document.write(str + "<br>")
    str = str.trim();
    var strWithoutSpaces = str.replace(/\s{2,}/g, " ");
    document.write(strWithoutSpaces + "<br>");
    var result = strWithoutSpaces.replace(/[A-ZА-Я]\S*/g, function toLow(x) {
        return x.charAt(0) + x.substr(1).toLowerCase();
    });
    document.write(result + "<br>");
    var resultWithDots = result.replace(/[a-zа-я]\s[A-ZА-Я]/g, function addDot(x) {
        return x.charAt(0) + ". " + x.charAt(2)
    });
    document.write(resultWithDots + "<br>");

    result = result.split(" ");
    var arrayWithSing = [];
    for (var i = 0; i < result.length; i++) {
        if (result[i].charAt(0) === "ь" || result[i].charAt(0) === "Ь") {
            arrayWithSing.push(result[i]);
        }
    }
    document.write(arrayWithSing);
}

//Сведения о претендентах
var personalData = []
function informationAboutPerson() {
    document.write("<div>" +
        "<label>First name</label><input type='text' id='firstName' /><br>" +
        "<label>Second name</label><input type='text' id='secondName' /><br>" +
        "<label>Date of birthday</label><input type='date' id='bday'/><br>" +
        "<label>Email</label><input type='text' id='email'/><br>" +
        "<label>Skills</label><input type='text' id='skills'/><br>" +
        "<input onclick='validateEmail()' value='submit' type='button'>" +
        "</div>");

}

function getInformation() {
    personalData[(personalData.length + 1).toString()] = {
        'firstName': document.getElementById('firstName').value,
        'secondName': document.getElementById('secondName').value,
        'bday': document.getElementById('bday').value,
        'email': document.getElementById('email').value,
        'skills': document.getElementById('skills').value.split(/(?:,| )+/)
    }

    document.getElementById('firstName').value = null;
    document.getElementById('secondName').value = null;
    document.getElementById('bday').value = null;
    document.getElementById('email').value = null;
    document.getElementById('skills').value = null;

    console.log(personalData);
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var patt = /^([0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-w]*[0-9a-zA-Z].)+[a-zA-Z]{2,9})$/;
    var res = patt.test(email);
    if (!res) {
        alert("incorrect email!");
    } else {
        var unique = true;
        if (personalData.length > 0) {
            personalData.forEach(function (item) {
                if (item.email === email) {
                    alert("user already exists");
                    unique = false;
                }
            });
        }
        if (unique) {
            getInformation();
        }
    }
}

//страны
var countries = [];
countries["c1"] = {
    'name': 'United Kingdom',
    'capital': 'London',
    'area': 242495,
    'population': {'2015': 64716000, '2011': 63181775}
};

countries["c2"] = {
    'name': 'Ukraine',
    'capital': 'Kyiv',
    'area': 603500,
    'population': {'2015': 44429471, '2011': 48457102}
};

function populationDensity(popul, area) {
    return popul / area;
}

function fullInformationAboutCountry(countryId) {
    document.write('Country: ' + countries[countryId]['name'] +
        ', capital: ' + countries[countryId]['capital'] +
        ', area: ' + countries[countryId]['area'] + ', population:');
    for (var p in countries[countryId]['population']) {
        document.write(', ' + p + ': ' + countries[countryId]['population'][p] + ' ');
    }
    document.write(', population density:');
    for (var p in countries[countryId]['population']) {
        document.write(', ' + p + ': ' +
            populationDensity(countries[countryId]['population'][p], countries[countryId]['area']) + ' ');
    }
    document.write('<br/>');
}

function allCountries() {
    for (var countryId in countries) {
        fullInformationAboutCountry(countryId);
        document.write('<br/>');
    }
    countryWithAreaLessThenValue();
    countryWithDensityMoreThenValue();
}

function countryWithAreaLessThenValue() {
    var value = prompt("Enter value of area: ");
    for (var p in countries) {
        if (countries[p]['area'] < value) {
            fullInformationAboutCountry(p);
        }
    }
    document.write('<br/>');
}

function countryWithDensityMoreThenValue() {
    var year = prompt("Enter value of year: ");
    var value = prompt("Enter value of density: ");
    for (var p in countries) {
        for (var i in countries[p]['population']) {
            if (i === year && populationDensity(countries[p]['population'][i], countries[p]['area']) > value) {
                fullInformationAboutCountry(p);
            } else {
                continue;
            }
        }
    }
}




