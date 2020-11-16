const express = require('express');
const app = express();
const port =process.env.PORT || 3000;

const db=require('./models');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const shopRouter=require('./routes/shop-route');
app.use('/api/eshtri/shop',shopRouter);

const imageRouter=require('./routes/image-route');
app.use('/api/eshtri/image',imageRouter);





app.get('/', (req, res) => res.send('Hello World!'));
db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log(`Example app listening on http://localhost:${port}`);
    });
});
