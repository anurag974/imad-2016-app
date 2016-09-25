var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
  'article-one' :{
  title:'this is anurag gupta',
  heading:'aricle one',
  date:'september 21',
  content:`<p>
          This is the content This is the content 
         This is the content This is the content This is the content    
         </p>
         
         <p>
         This is the content This is the content 
         This is the content This is the content This is the content 
         </p>
         
         <p>
         This is the content This is the content 
         This is the content This is the content This is the content 
         </p>`
},
  'article-two':{
    title:'this is anurag gupta',
  heading:'aricle two',
  date:'september 21',
  content:`<p>
          we are in the second article   
         </p>
        `
},
   'article-three':{
   title:'this is anurag gupta',
  heading:'aricle Three',
  date:'september 21',
  content:`<p>
          we are in the second article   
         </p>
        `
}
};
function createTemp(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemp=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
   
 <body>
     <div class="container">
     <div>
         <a href="/">Home</a>
         
     </div>
     <hr/>
     
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
</html>

`;
return htmlTemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res)
{
    counter=cunter+1;
    res.send(counter.toString());
}
);

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemp(articles[articleName]));
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
