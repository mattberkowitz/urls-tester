Tests a list of URLs against a regex: `/^\/(ref|((aponline|reuters)\/)?\d{4}\/\d{2}\/\d{2})(\/([^\/])+){0,2}\/([^\/\.]+)\.html$/`


To run:

```javascript
git clone git@github.com:mattberkowitz/urls-tester.git
cd urls-tester
npm install
node index.js [url text file]
```

It is expected that text file contains one url per line
