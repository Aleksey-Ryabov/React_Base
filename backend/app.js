const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

const users = { email: "al@geekbrains.ru", password: "123" };

app.get ('/', (req, res)=> {
    
    res.send('hello2')
})

app.post ('/auth', (req, res)=> {
    const emailAuth = req.body.email;
    const passwordAuth = req.body.password;
    
    if(emailAuth.length > 0 && passwordAuth.length > 0) {
        if(users.email === emailAuth && users.password === passwordAuth){
            res.send(true)
        }else {
            res.send(false)
        }
    }
});

app.listen(3001, ()=> {
    console.log('server start');
});
