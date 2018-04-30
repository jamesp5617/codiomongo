db.movies.remove({})
db.movies.insert({"name":"Black Panther", "Rating": 9, "genre":["action", "comedy"],
                 "comments":[
                  {"F_name":"John","com":"was a great movie loved the ending"},
                   {"F_name":"Tobby", "com":"This movie showed black excellence"}
                 ]})
db.movies.insert({"name":"Pirates of the Carribean", "Rating": 3, "genre":["action", "comedy"],
                 "comments":[
                  {"F_name":"Larry","com":"I loved the shark scene"},
                   {"F_name":"Jodi", "com":"wish the movie was longer"}
                 ]})
db.movies.insert({"name":"daddys home", "Rating": 2, "genre":["comedy"],
                 "comments":[
                  {"F_name":"Mike","com":"The ending had me rolling"},
                   {"F_name":"Tobby", "com":"It was an okay movie"}
                 ]})
db.movies.insert({"name":"Superman", "Rating": 7, "genre":["Thriller", "action"],
                 "comments":[
                  {"F_name":"Darling","com":"this movie needed more love scenes"},
                   {"F_name":"Ashely", "com":"i love the guy playing superman"}
                 ]})
db.movies.insert({"name":"Batman", "Rating": 7, "genre":["action"],
                 "comments":[
                  {"F_name":"Paul","com":"I loved the one with joker"},
                   {"F_name":"Tobby", "com":"the movie was okay"}
                 ]})
db.movies.insert({"name":"Chapie", "Rating": 8, "genre":["action", "comedy", "suspense"],
                 "comments":[
                  {"F_name":"Josh","com":"almost cried at the end"},
                   {"F_name":"Tobby", "com":"Funny but sad movie"}
                 ]})

//db.movies.update({"name":"Batman"},{$push:{"genre":"Horror"}})
//db.movies.update({"name":"Batman"},{"$addToSet":{"genre":"action"}})
//db.movies.update({"name":"Batman"},{"$pull":{"genre":"action"}})
//db.movies.update({"name":"daddys home"},{"$pop":{"comments":1}})
//db.movies.find({"comments.com":/Funny/})
//db.movies.update({"Rating":{"$lt":4}},{"$push":{"comments":{"F_name":"Joe", "com":"attendance is low"}}},false, true)