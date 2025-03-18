const https = require('https');

const server = https.createServer((req, res) => {
    if (req.url === '/') {
        
        res.write('Hello World');
        res.end();
    }else if(req.url === '/about'){
        res.write('About Page');
        res.end();
    }
    
});
server.listen(3000);
