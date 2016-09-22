var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articles = {
 article_one : {
    title : 'articleone',
    heading : 'one',
    date : 'smthing',
    content :`<p>
               one
            </p>
             <p>
                one
            </p>
             <p>
                one
            </p>
             <p>
               one
            </p>`
            },
 article_two : {
    title : 'article two',
    heading : 'two',
    date : 'smthing',
    content :`<p>
               two
            </p>
             <p>
                two
            </p>
             <p>
                two
            </p>
             <p>
               two
            </p>`
            },
 article_three : {
    title : 'article three',
    heading : 'three',
    date : 'smthing',
    content :` 
             <p>
               three
            </p>
             <p>
               three
            </p>
             <p>
               three
            </p>`
            }
};
function createTemplate(data){
       var title = data.title;
       var heading = data.heading;
       var date = data.date;
       var content = data.content;
       

        var htmltemplate = `
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width-device-width, initial-scale=1">
                <link href="/ui/style.css" rel="stylesheet" />
               
            </head>
            <body>
                <div class="container"> 
                <div>
                    <a href="/">home</a>
                </div>
                <hr />
                <h3>
                   ${heading}
                </h3>
                <div>
                   ${date}
                </div>
                <div>
                   ${content}
                </div>
                </div>
            </body>
        </html>
        
        `;
        return htmltemplate;
}

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
  //res.send('Article one requested'); 
 // res.sendFile(path.join(__dirname, '', 'article_one.html'));
 var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});


var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.tostring());
});


app.get('/article_two',function(req,res){
  res.send('Article two requested');  
});

app.get('/article_three',function(req,res){
  res.send('Article three requested');  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
