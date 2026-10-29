const express = required('express'); 
const cors = required('cors'); 

const app = express(); 
const db = required('./db');

const PORT = 3000;

app.use(cors());
app.use(express.json());

//GET
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if(err) return res.status(500).json({error: err.message})
             res.json(results);
    });
    

})

//GET com id 
app.get('/tasks/:id', (req, res) => {
    db.query('SElECT * FROM tasks WHERE id = ?', [req, params.id], (err, results) => {
        if(err) return res.status(500).json({error: err.message});
        if(results.length === 0) return res.status(404).json({error: 'tarefa não foi encontrada'});
        res.json(results[0]); //posição na linha
    })

});

//POST
app.post('/tasks', (req, res) => {
    const {title, escription} = req.body;
    db.query('INSERT INTO tasks(title, description) VALUES (?,?)', [title, description], (err, results) => {
        if(err) return res.status(500).json({error: err.message});
        res.status(201).json({id: results.insertId, description, completed: false });
    });
});

