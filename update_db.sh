echo "Enter local pw"
mysql -u root -p < schema.sql
echo "Enter local pw"
mysqldump --databases us_uni -u root -p -r uni.sql
echo "Enter RDS pw"
mysql -h us-uni.cgcckfsxakvi.us-east-1.rds.amazonaws.com -P 3306 -u admin -p < uni.sql
