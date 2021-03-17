  const http = require('http');
  const { URL } = require('url');
  
  const dt = require('./mymodule');
  http
    .createServer(function(req, res) {
      res.writeHead(200,{'Content-Type':'text/html'});
     
      
      res.write(`The date and time: ` 
       + dt.myDateTime());

      // query string extraction
      //res.write(req.url + '\n');
      // query string parts
     //const myURL1 = new URL({ toString: () => 'https://example.org/' });
     //res.write(myURL1.toString());
      
     // const myURL2 = new URL('https://你好你好');
     // res.write(myURL2.toString());

      const myURL3 = URL.domainToUnicode('xn--fiq228c.com');
      res.write(myURL3.toString());
      
      res.end();
    })
    .listen(8080);

    /**
     * Exercise:
     * - Read “index.html.template” file
     *  - On the request, read user browser information such as device (let’s check if user is mobile, tablet or desktop) and language (in en-gb form) (don’t tell the candidate to use headers, correct ones are “User-Agent” and “Accept-Language”, candidate can use any library to parse “User-Agent”)
     *  - Return read template file with replaced “{{device}}” with user device info and “{{language}}” with user preferred language
     */