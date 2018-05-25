
let express=require("express");
let session=require("express-session")
let app=express();

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret:"codingdojo"}));


app.use(express.static(__dirname +"/static"));

app.set('views',__dirname +'/views');


app.set('view engine','ejs');

app.get('/',(req,res)=>{

	if(req.session.number===undefined){
		req.session.number=0;
	}

	req.session.number+=1;

	res.render('index',{'number':req.session.number});});


app.post('/increment',(req,res)=>{
	
	req.session.number+=1;

     res.redirect('/')
});


app.post('/reset',(req,res)=>{
	
	req.session.number=0;

     res.redirect('/')
});



app.listen(8000,()=>{
	console.log("listening on 8000");});