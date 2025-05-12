import fs from "fs";

export const data = {
  setUsers(users) {
    localStorage.users = JSON.stringify(users);
    fs.writeFileSync('./data/user.json', json)
  },

  getUsers() {
    const json = fs.readFileSync('./data/users.json', 'utf8')
    const users = JSON.parse(json);
    return users;
  },

  setUsersCount(usersCount) {
    const json  = JSON.stringify(usersCount);
    fs.writeFileSync('./data/usersCount.json', json)
  },

  getUsersCount() {
    const json = fs.readFileSync('./data/usersCount.json', 'utf8')
    const usersCount = JSON.parse(json)
    return JSON.parse(json);
  },

  setPosts(posts) {
    const json  = JSON.stringify(posts);
    fs.writeFileSync('./data/posts.json', json)
  },

  getPosts() {
    const json = fs.readFileSync('./data/posts.json', 'utf8')
    const posts = JSON.parse(json);
    return posts
  },

  setPostCount(postsCount) {
   const json = JSON.stringify(postCount);
   fs.writeFileSync('./data/postCount.json', json)
  },

  getPostCount() {
    const json = JSON.stringify('./data/postsCount.json', 'utf8')
    const postsCount = JSON.parse(json)
    return postsCount
  },

  /*setUserId(userId) {
    sessionStorage.userId = userId;
  },

  getUserId() {
    return sessionStorage.userId;
  },

  removeUserId() {
    delete sessionStorage.userId;
  },
  */
 
};
