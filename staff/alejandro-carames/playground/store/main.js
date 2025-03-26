var products  = []

//populate

var cinquecento = {
    id: '20250315-1601',
    brand: 'Fiat',
    model: '500',
    color: 'pink',
    year: 2019,
    kilometers: 145000
}

products[0] = cinquecento

var clio = {
    id: '20250315-1603',
    brand: 'Renault',
    model: 'Clio',
    color: 'Red',
    year: 2015,
    kilometers: 225000
}

products[1] = clio

var c3 = {
    id: '20250315-1605',
    brand: 'Citröen',
    model: 'C3',
    color: 'black',
    year: 2010,
    kilometers: 310000
}

products[2] = c3

//logic

function addCar(brand, model, color, year, kilometers) {
    /*
    STEPS
    - create id for car
    - create object for car data and id
    - insert object in products
    */

    //var id = Match.random() + '-' + Match.random()

    var car = {
        id: '2025031-160' + products.length + 1,
        brand:brand,
        model:model,
        color:color,
        year:year,
        kilometers,kilometers,
    };
    //products[products.Legth] = car;
    products.push(car);
}

function updateCar(id, brand, model, color, year, kilometers) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products[i].kilometers = kilometers;
        products[i].year = year;
        products[i].color = color;
        products[i].model = model;
        products[i].brand = brand;
      }
    }
  }

addCar('audi', 'A1', 'gray', 2013, 170000)
addCar('Smart', 'ForTwo', 'yellow', 2024, 17000)
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000)
updateCar('20250315-1603', 'Renault', 'Clio', 'green', 2015, 225000)
updateCar('20250315-1605', 'Citröen', 'C3', 'black', 2012, 310000)

//view cars

console.table(products)