# MCIT On-Campus 2021 Winter Hackathon 
### Project/Team Name: University-Finder

**Team Members** 
Name | Year
------------ | -------------
Minzhong Gao | 1st
Vivian Xi | 1st
Haoyu Xia | 1st
Yiwen Zhu | 1st
  
### General Idea
When applying for undergraduate universities/colleges, applicants normally face an overwhelming amount of information regarding different schools. To make the process more efficient and information more accessible, we aim to develop a web application that allows applicants to search for basic information of a great number of US universities, including its admission rate, admission requirements, national ranking and tuition. More importantly, we intend to tell the applicants where they stand in the pool and make the appropriate school recommendations based on their test scores. 

Our app functions in a very simple way: applicants just need to input their admission test scores (SAT or ACT), and the app will recommend three packages of schools (reach, match, safety).

We hope this app could give applicants a more clear view of the schools that match them, thus helping them make informed decisions. 

All the data related to universities are obtained from the National Center for Education Statistics(NCES, https://nces.ed.gov/).

### Anticipated Stack
We rely on AWS RDS to host our database for US universities and use nodeJS to connect the database (query the information) and webpages (take user input).  

### Pages
- `index.html`: This is the home page where the user can find a search bar (-> `/searach-school`) and a section to input their test scores (-> `/your-schools`).
- `/your-schools`: Upon receiving user scores, the app will generate three different packages of schools (reach, match, safety) which will be displayed under different buttons. Depending on which test has been chosen, the mean and sd of past admission statistics (taken over 10 years) will also be displayed. Meanwhile, user can click on the name of the recommended school to go to `/searach-school` for additional requirements.
- `/search-school`: This page displays all the materials needed for applying for a specific university (high school records, essays, etc).

### Running The App
- Clone this git repo
- Set the variable `rds_pw` as password (please contact the repo owner for this)
- run the command line:
```
node filter_results.js
```

### Demo
https://youtu.be/3R1ovRm2Biw
