const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const app = express();

app.use(express.urlencoded({ extended : false }));

app.get('/users', (req, res) => {
    const html = `
        <div>
            ${users.map(user => `<h1>${user.id} = ${user.first_name} </h1>`).join("")}
        </div>
    `
    res.send(html);
});

app.get('/api/users', (req, res) => {
    return res.send(users)
});

app.route('/api/users/:id')
.get((req, res) => {
    const user = users.find(user => user.id === Number(req.params.id))
    return res.send(user);
})
.patch((req, res) => {
    const UpadtedUser = users.map(user => {
        if (user.id === Number(req.params.id)){
            return { ...user, ...req.body }
        }
        return user;
    });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(UpadtedUser), (err, data) => {
        return res.json({
            status : 'Success',
            id : req.params.id
        });
    });
})
.delete((req, res) => {
    const RemainingUsers = users.filter(user => user.id !== Number(req.params.id));
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(RemainingUsers), (err, data) => {
        return res.json({
            status : 'Success',
            id : req.params.id
        });
    });
})

app.post('/api/users', (req, res) => {
    users.push({ id: users.length + 1, ...req.body });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({
            status : 'Success',
            id : users.length
        });
    });
});


app.listen(3000, () => console.log('Server Started'));