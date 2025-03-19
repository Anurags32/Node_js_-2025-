const https = require('https');

const server = https.createServer((req, res) => {
    if (req.url === '/') {
        
        res.write('Hello World');
        res.end();
    }else if(req.url === '/about'){
        res.write('About Page');
        res.end();
    }else if(req.url === '/contact'){
        res.write('Contact Page');
        res.end();
    }else if(req.url === '/portfolio'){
        res.write('Portfolio Page');
        res.end();
    }
    
});
PORT = 2000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
