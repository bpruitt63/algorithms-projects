document.addEventListener('load', makeList());

let users;
const list = document.querySelector('#list');

async function makeList() {
    await getUsers();
    removeLoading();
    loop(users);
};

async function getUsers() {
    const res = await axios.get('http://localhost:3000/users');
    users = res.data;
};

function loop(users) {
    for (let user of users) {
        listUser(user);
    };
};

function listUser(user) {
    const li = document.createElement('li');
    li.innerText = `${user.firstName} ${user.lastName}`;
    li.classList.add('list-group-item')
    list.append(li);
};

function removeLoading() {
    const loading = document.querySelector('#loading');
    loading.remove();
};