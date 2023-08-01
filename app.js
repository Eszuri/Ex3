const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
// app.set('view engine', 'ejs');
// app.use(express.static("views", { index: "true" }));
app.use(express.static("views"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index'); // 'index' sesuai dengan nama file EJS (tanpa ekstensi .ejs)
});


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
