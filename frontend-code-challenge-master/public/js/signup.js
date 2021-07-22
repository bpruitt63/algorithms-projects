const signup = document.querySelector('#signup');
const created = document.querySelector('#created');
const first = document.querySelector('#firstName');
const last = document.querySelector('#lastName');
const mail = document.querySelector('#email');
let data;
let res;

signup.addEventListener('submit', async function(e) {
    e.preventDefault();
    compileData();
    const valid = validate(data);
    if (!valid) return false;
    await sendData(data);
    clearData();
    created.innerText = `Successfully created ${res.data.firstName} ${res.data.lastName}`;
});

function compileData() {
    const firstName = first.value;
    const lastName = last.value;
    const email = mail.value;
    data = {firstName, lastName, email};
};

async function sendData(data) {
    res = await axios.post('http://localhost:3000/users', data);
};

function clearData() {
    first.value = '';
    last.value = '';
    mail.value = '';
};

function validate(data) {
    if (data.firstName === '' || data.lastName === '' || data.email ==='') {
        created.innerText = 'Must complete all fields';
        return false;
    };
    return true;
};