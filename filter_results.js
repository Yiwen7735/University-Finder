
//Load packages
var mysql = require('mysql'); 
var express = require('express');
var http = require('http');
var parser = require('body-parser');

//set up express framework
var app = express();
app.set('view engine', 'ejs');
app.use(parser.urlencoded({extended: true}));
//app.use(express.static(__dirname + '/style'))
app.use(express.static(__dirname))

//make connection with AWS RDS
var connection = mysql.createConnection({
	host: 'us-uni.cgcckfsxakvi.us-east-1.rds.amazonaws.com', 
	user: 'admin', 
	password: '1234abcd',
	database: 'us_uni',
	multipleStatements: true
});

//function to obtain probabilities given a z-score
function getProb(z){
	if (z < -6.5) return 0.0;
	if (z > 6.5) return 1.0;
 	
 	var factK = 1;
 	var sum = 0;
  	var term = 1;
  	var k = 0;
  	var loopStop = Math.exp(-23);

  	while(Math.abs(term) > loopStop) {
	    term = .3989422804 * Math.pow(-1,k) * Math.pow(z,k) / (2*k+1) / Math.pow(2,k) * Math.pow(z,k+1) / factK;
	    sum += term;
	    k++;
	    factK *= k;
	  }

  	sum += 0.5;
	return sum;
}

//console.log(getProb(-0.675)); //check if getProb() works

//go to home page index.html
app.get('/index', function(req, res){
	res.render('index.html');
});

//after user inputs their information
app.post("/your-schools", function(req, res){
	var scores = {
		test: req.body.test_type, 
		satvr: req.body.sat_read,
		satmt: req.body.sat_math, 
		actcm: req.body.act_comp, 
		acten: req.body.act_eng,
		actmt: req.body.act_math
	}
	var q;
	var reach = []
	var match = []
	var safety = []

	console.log(scores.satvr);
	console.log(scores.satmt);

	if (scores.test === 'sat')
		q = `SELECT INSTNM, RANKING, TUITION2, TUITION3, ADMR, 
			 (${scores.satvr} - SATVRM) / SATVRSD AS zVR, 
			 (${scores.satmt} - SATMTM) / SATMTSD AS zMT FROM uni;`;

	else if (scores.test === 'act')
		q = `SELECT INSTNM, RANKING, TUITION2, TUITION3, ADMR, 
			 (${scores.actcm} - ACTCMM) / ACTCMSD AS zCM, 
		 	 (${scores.acten} - ACTENM) / ACTENSD AS zVR, 
		     (${scores.actmt} - SATMTM) / SATMTSD AS zMT FROM uni;`;

	connection.query(q, function(error, results){
		if (error) throw error;
		if (scores.test === 'sat'){
			for (var result of results){
				result.pVR = getProb(result.zVR);
				result.pMT = getProb(result.zMT);
				result.p = (result.pVR + result.pMT) / 2;
			}
		}

		else if (scores.test === 'act'){
			for (var result of results){
				result.pCM = getProb(result.zCM)
				result.pVR = getProb(result.zVR);
				result.pMT = getProb(result.zMT);
				result.p = 0.4 * result.pVR + 0.4 * result.pMT + 0.2 * result.pCM
			}	
		}
		//filter by probability
		for (var result of results){
			if (result.p >= 0.25 && result.p < 0.4) reach.push(result);
			if (result.p >= 0.6 && result.p < 0.75) match.push(result);
			if (result.p >= 0.9) safety.push(result);
		}
		//sort by ranking within each probability range
		reach.sort((x, y) => x.RANKING - y.RANKING);
		match.sort((x, y) => x.RANKING - y.RANKING);
		safety.sort((x, y) => x.RANKING - y.RANKING);
		
		//print out results to console
		console.log("reach schools: \n")
		console.log(reach.slice(0, 10));
		console.log("match schools: \n")
		console.log(match.slice(0, 10));
		console.log("safety schools: \n")
		console.log(safety.slice(0, 10));

		//res.send("TODO: pass along school results to page2.ejs");
		res.render("your-schools", {reach_schools: reach});
	});
});

/*
//after user searches for a specific school (search bar)
app.post('/search-school', function(req, res){
	var instid = 
});
*/
http.createServer(app).listen(80);




