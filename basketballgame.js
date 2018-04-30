db.game.remove({})
db.game.insert({"Venue":"BigBend Coliseum", "Hometeam":{
  "TeamName":"LakeCharles", "Fouls":15, "SBQ":[20,40,34,15],
"Final":109},
   "AwayTeam":{
         "TeamName":"lakeworth", "Fouls":10, "SBQ":[15, 20, 33,40],
          "Final":108
               }  })
db.game.insert({"Venue":"Larry Bird Arena", "Hometeam":{
  "TeamName":"Wellington", "Fouls":10, "SBQ":[14,35,34,15],
"Final":98},
   "AwayTeam":{
         "TeamName":"Boyton", "Fouls":17, "SBQ":[20, 30, 31,19],
          "Final":100
               }  })
db.game.insert({"Venue":"BigBend Coliseum", "Hometeam":{
  "TeamName":"Lantana", "Fouls":16, "SBQ":[],
"Final":114},
   "AwayTeam":{
         "TeamName":"Miami", "Fouls":20, "SBQ":[10,26,16],
          "Final":156
               }  })
db.game.insert({"Venue":"Broward Gym", "Hometeam":{
  "TeamName":"Broward", "Fouls":15, "SBQ":[21, 12],
"Final":96},
   "AwayTeam":{
         "TeamName":"Boca", "Fouls":15, "SBQ":[15, 40, 22,40],
          "Final":117
               }  })
//db.game.find({"$and":[{"Hometeam.TeamName": "Lantana"}, {"AwayTeam.TeamName":"Miami"}]}, {"Hometeam.Fouls":1})
//db.game.update({"$and":[{"Hometeam.TeamName": "Lantana"}, {"AwayTeam.TeamName":"Miami"}]}, {"$push":{"Hometeam.SBQ":10}})
//db.game.update({"$and":[{"Hometeam.TeamName": "Lantana"}, {"AwayTeam.TeamName":"Miami"}]},{"$inc":{"Hometeam.Fouls":1}})
//db.players_stats.aggregate({"$project":{"Name":1, "AvgPergame":{"$divide":["$PTS","$Games Played"]}}})
//db.featuresdf.find({"name":"Believer"})
//db.spotifyClass.aggregate({"$project":{"song_title":1, "artist":1}})
//db.featuresdf.update({"name":"Believer", "artists":"Imagine Dragons"}, {"$inc":{"tempo":20}})
//db.featuresdf.find({"$or":[{"energy":{"$gte":.50}}, {"liveness":{"$gte":.10}}]})
//db.featuresdf.aggregate({"$match":{"danceability":{"$gte":.60}}}, {"$limit":5})
//db.featuresdf.aggregate({"$group" : {"_id" : "$artists", "hits" : {"$sum" : 1}}})
//db.spotifyClass.find({"danceability":{"$gte":.60}}, {"artist":1})
//db.spotifyClass.update({"artist":"Chief Keef", "song_title":"Love Sosa"},{"$inc":{"time_signature":5}})
//db.spotifyClass.find({"time_signature":{"$gte":8}})
//db.spotifyClass.find({"artist":/Chief/})
//db.spotifyClass.aggregate({"$group":{"_id":"$artist", "temp":{"$sum":"$tempo"}}})
//db.spotifyClass.aggregate({"$project":{"artist":1, "SongLiked":{"$divide":["$danceability","$acousticness"]}}})
//db.spotifyClass.aggregate({"$group":{"_id":"$artist"}})
//db.spotifyClass.aggregate({"$group":{"_id":"$artist", "times artist appear":{"$sum":1}}})
//db.spotifyClass.find({},{"_id":0, "artist":1, "speechiness":1})
//db.spotifyClass.findOne()
//db.spotifyClass.aggregate({"$match":{"liveness":{"$gt":0.233}}},{"$sort":{"liveness":-1}}, {"$limit":5})
//db.spotifyClass.update({"artist":"Chief Keef"}, {"$unset":{"song_title":1}})
//https://docs.mongodb.com/manual/reference/operator/aggregation/mergeObjects/