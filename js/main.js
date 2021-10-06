var counter = (function () {
    var i = 0;

    return function (num) {
        if (num === undefined) {
            i++;
        } else {
            i = num;
        }
        return i;
    };
}());

var counting = (function () {
    var i = 0;

    return {
        value(num) {
            if (num !== undefined) {
                i = num;
            }
            return i;
        },
        increment() {
            i++;
        },
        decrement() {
            i--;
        }
    };
}());


function myPrint(a, b, res) {
    return `${a}^${b}=${res}`;
}

function myPow(a, b, myPrint) {
    function pow(x, n) {
        if (n !== 1) {
            return x * pow(x, n - 1);
        }
        return x;
    }

    return myPrint(a, b, pow(a, b));
}

//  console.log(myPow(3, 4, myPrint)); // 3^4=81


var yearNow = new Date().getFullYear();

function getInfoString() {
    return this.name + ' ' + this.model + ', ' + this.engine + 'cc, year ' + this.year + ', ' + this.used;
}

var car = {
    engine: 2000,
    model: 'TT',
    name: 'Audi',
    year: 2021,
    info: getInfoString,
    get used() {
        if (this.year !== yearNow) {
            return 'used';
        }
        return 'new';
    },
    set used(value) {
        if (value === 'new' && this.year !== yearNow) {
            this.year = yearNow;
        }
    }
}

var car2 = {
    engine: 2000,
    model: '500',
    name: 'Mercedes',
    year: 2008,
    info: getInfoString,
    get used() {
        if (this.year !== yearNow) {
            return 'used';
        }
        return 'new';
    },
    set used(value) {
        if (value === 'new' && this.year !== yearNow) {
            this.year = yearNow;
        }
    }
}


function myMax(arr) {
    return Math.max.apply(null, arr)
}


function myMul(a, b) {
    return a * b;
}

var myDouble = myMul.bind(null, 2);

var myTriple = myMul.bind(null, 3);


function myUniq(arr) {
    var set = new Set();
    arr.forEach(val => set.add(val));
    return set;
}
