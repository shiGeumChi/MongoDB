// Chapter 4: Advanced CRUD Operations

// Lab 2: Logic Operators
// Problem:

// To complete this exercise connect to your Atlas cluster using the in-browser IDE space at the end of this chapter
// How many companies in the sample_training.companies dataset were

// either founded in 2004

// [and] either have the social category_code [or] web category_code,
// [or] were founded in the month of October

// [and] also either have the social category_code [or] web category_code?
// Copy/paste the exact numeric value (without double quotes) of the result that you get into the response field.



Query :
db.companies.find({ '$or' : [ {'$and' : [{founded_year:2004} , { '$or' : [{'category_code':'web'},{'category_code':'social'}] } ] } , {'$and' : [ {founded_month:10} , { '$or' : [{'category_code':'web'},{'category_code':'social'}] } ] } ] }).count()
