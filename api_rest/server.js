import app from './app.js'


const port = process.env.SERVER_PORT || 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`CTRL + Clique http://localhost:${port}`);
})
