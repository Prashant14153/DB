const express = require('express');
const app = express();
const User = require('./userModel');
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/create', async (req, res) => {

    const createdUser = await User.create({
        name : 'John Doe',
        userName : 'johndoe',
        email : 'john.doe@example.com'
    })
    res.send(createdUser);
});


app.get('/update', async (req, res) => {

    const updatedUser = await User.findOneAndUpdate({userName : "johndoe"},{userName : "NodeJS"},{new : true})
    res.send(updatedUser);
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
