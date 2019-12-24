const http = require('http');

let app = http.createServer((req, res) => {

    const method = req.method
    if( method === "GET") {
        const interval = setInterval(() => console.log(new Date().toLocaleString()), process.env.PARAM1)
        setTimeout(()=>{
            clearInterval(interval)
            console.log(`stopped ${new Date().toLocaleString()}`)
        }, process.env.PARAM2)
    }
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');