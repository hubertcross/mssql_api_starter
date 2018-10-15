# mssql_api_starter

this is a starter kit for a RESTful API built on top of an MSSQL database. My proprietary models have been removed from contollers and db_apis. The users model is for demonstration purposes.

cool things to do in the future:
* bring in jwt code from my other projects
* add use of a query builder so as to easily be able use other dbms's

Check out services/database.js for the cool stuff - functions that wrap mssql and do simple query execution, query-in-transaction execution, bulk inserts, stored procedure inserts and more !!
