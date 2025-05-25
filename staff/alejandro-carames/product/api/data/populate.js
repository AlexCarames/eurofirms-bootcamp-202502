import { data } from "./index"
const users = []
let usersCount = 0
usersCount++;
users.push({
    id: "user-" + usersCount,
    name: "Wendy Darlin",
    email: "wendy@darlin.com",
    userName: "wendidarlin",
    password: "123456789"
});
usersCount++;
users.push({
    id: "user-" + usersCount,
    name: "Peter Pan",
    email: "peter@pan.com",
    userName: "peterpan",
    password: "123456789"
});

data.setUsers(users);
data.setUsersCount(usersCount);

const posts = [];
let postsCount = 0

postsCount++

posts.push({
    id: "post-" + postsCount,
    author: users[0].id,
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2thYnZhYzVpdXc0bG1tZjQ4aTRnZzhsZ2sxaWQybDBqejl6NndueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8592ghhkChZtlPckIT/giphy.gif",
    text: "Gatito adorable",
    date: new Date(2024, 0, 11, 10, 0).toISOString(),
    likes: [],
});
postsCount++
posts.push({
    id: "post-" + postsCount,
    author: users[1].id,
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFiZjd3bHJxcnUxbWpqaDJxdjlsMzV3MTBoempuMmZvaGp0aGIxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2A75RyXVzzSI2bx4Gj/giphy.gif",
    text: "Gatito en unicornio",
    date: new Date().toISOString(),
    likes: [],
});
data.setPosts(posts)
data.setPostsCount(postsCount)