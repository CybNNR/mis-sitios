import express from 'express';
import cors from 'cors';
import pkg from 'pg'

const { Pool } = pkg;

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json);
const db = new Pool({
    user: 'admin_blog', 
    host: 'localhost', 
    database: 'bitacora_db',
    password: 'nismobnr32gtr',
    port: 5432,
});

app.get ('/status', async (req, res) => {
    try{
        const result = await db.query('SELECT NOW() AS actualtime');
        res.json({
            message: 'Node server is up!',
            database: 'Successfull conection', 
            timedata: result.rows[0].actualtime
        });
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Error ocured while conecting to the database'});
    }
});

app.listen(port , () => {
    console.log(`Api running on http://localhost:${port}$`)
});