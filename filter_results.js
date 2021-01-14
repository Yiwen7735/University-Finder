
var mysql = require('mysql'); //require mysql package

//make connection with AWS RDS
var connection = mysql.createConnection({
	host: 'us-uni.cgcckfsxakvi.us-east-1.rds.amazonaws.com', 
	user: 'admin', 
	password: '1234abcd',
	database: 'us_uni',
	multipleStatements: true
});

//check if connection is successful
connection.connect(function(err){
	if (err){
		console.error('Database connection failed: ' + err.stack);
		return ;
	}
	console.log('Connected to database.');
});

//make some random query for testing only
var q = 'SELECT COUNT(*) FROM uni'
connection.query(q, function(error, results){
	if (error) throw error;
	console.log(results)
});

connection.end();


