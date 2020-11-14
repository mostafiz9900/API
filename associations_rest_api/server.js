 const express = require('express')
const app = express()
const db=require('./models');
const port =process.env.PORT || 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
const userRoutes=require('./routes/user-routes');
app.use('/api/users',userRoutes);

// const profileRoutes=require('./routes/profile-routes');
// app.use('/api/profile', profileRoutes);


// const postRoutes=require('./routes/post-routes');
// app.use('/api/post/',postRoutes);



app.get('/', (req, res) => res.send('Hello World!'));

db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log(`listening on port : http://localhost:${port}`)
    });
});


