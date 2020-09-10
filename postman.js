# dl the REST Client extension to be able to add routes to test.



GET http://localhost:8000/api/cities
###

GET http://localhost:8000/api/cities/1


###

POST http://localhost:8000/api/rsvps
content-type: application/json

{
    "userId": "5",
    "eventId": "3"
}

###
DELETE http://localhost:8000/api/rsvps/13




# POST https://example.com/comments HTTP/1.1
# content-type: application/json

# {
#     "name": "sample",
#     "time": "Wed, 21 Oct 2015 18:27:50 GMT"
# }