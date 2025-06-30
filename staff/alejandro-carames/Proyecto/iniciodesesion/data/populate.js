import { data } from '../index'
const users = []
let usersCount = 0

usersCount++;
users.push({
    id:"user-" + usersCount,
    name: "Pepito Grilo",
    email: "pepito@grillo.com",
    userName "pepitogrillo",
    cardNumber: "123456",
    password: "123123123"
});

usersCount++;
users.push({
    id: "users-" + usersCount,
    name: "Pedro Picapiedra",
    email: "pedro@picapiedra.com",
    userName "pedropicapiedra",
    cardNumber: "123456",
    password: "123123123"
});

data.setUsers(users);
data.setUsersCount(usersCount);

//continuar pensando como ponerlo en l aplicción
const parkingSpaces = [];
let spaceCount = 0

spaceCount++ 
parkingSpaces.push({
    id: "spaces-" + spaceCount,
    author: users[0].id,
    imagen: //imagen de la calle y plaza
    notes: //alguna nota que quiran dejar sobre la plaza, el espacion o algun coche mal aparcado
    date: new Date(2024, 0, 11, 10, 0).toISOString(),
});

spaceCount++ 
parkingSpaces.push({
    id: "spaces-" + spaceCount,
    author: users[1].id,
    imagen: //imagen de la calle y plaza
    notes: //alguna nota que quiran dejar sobre la plaza, el espacion o algun coche mal aparcado
    date: new Date().toISOString(),
});

data.setParkingSpaces(parkingSpaces)
data.setSpaceCount(spaceCount)