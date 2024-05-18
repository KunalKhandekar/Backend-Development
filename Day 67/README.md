# Day 67

What is middleware ?
 - It's a function which runs on every requestt and response between client and server.
 - It has acccess to req, res and next miidleware function.
 - There can be multiple middleware in a code.
 - We can make changes to the req and res object.
 - Call next() after doing the neccesary task.

What are HTTP Headers ? 
 - They are meta data of req and res.
 - Headers are different for request and response.
 - we can add Custom Headers.
 - Good Practice - (add X in start for custom header).

Status Code ?
 - [100 - 199] => Informational Response
 - [200 - 299] => Successful Response
 - [300 - 399] => Redirectional Response
 - [400 - 499] => ClientSide Error Response
 - [500 - 599] => ServerSide Error Response

 - Use Different Status code every operation (Good Practice)