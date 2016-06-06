Tests a list of URLs against a reged: `/^\/(ref|((aponline|reuters)\/)?\d{4}\/\d{2}\/\d{2})(\/([^\/])+){0,2}\/([^\/\.]+)\.html$/`


To run:

```
cd [install dir]
npm install
node index.js [url text file]
```

It is expected that text file contains one url per line
