db.players.remove({})
db.players.insert({"F_name":"Tod", "L_name":"Smith", "PPT":23, "Steals":4, "FTP":70, "Home City":"lak Worth",
                  "State":"Florida", "Hobbies":["Basketball", "reading"]})
db.players.insert({"F_name":"Chad", "L_name":"Brown", "PPT":14, "Steals":6, "FTP":60, "Home City":"Lake Worth",
                  "State":"Florida", "Hobbies":["Basketball", "Nascar"]})
db.players.insert({"F_name":"Danny", "L_name":"Bowlen", "PPT":26, "Steals":5, "FTP":40, "Home City":"Houston",
                  "State":"Texas", "Hobbies":["Track", "boat racing", "reading"]})
db.players.insert({"F_name":"Micheal", "L_name":"Myers", "PPT":23, "Steals":6, "FTP":80, "Home City":"Atlanta",
                  "State":"Georgia", "Hobbies":["Basketball", "Football"]})
db.players.insert({"F_name":"James", "L_name":"Small", "PPT":12, "Steals":4, "FTP":60, "Home City":"Sanfransico",
                  "State":"California", "Hobbies":["Singing", "Nascar"]})

//1. db.players.find({State:{"$in":["Florida", "Georgia"]}})
//2. db.players.find({"L_name":"Smith"}, {_id:0, L_name:1, F_name:1, State:1})
//3. db.players.find({Steals:{"$gte":3}})
//4. db.players.find({PPT:{"$gte":10, "$lte": 22}})
//5. db.players.find({"$or":[{"Home City": "Lake Worth"}, {"L_name":"Smith"}]})
//6. db.players.find({"State":"Georgia", "FTP":{"$gte":70}},{"F_name":1,"L_name":1,"Home City":1, "FTP":1})
//7.db.players.find({"Hobbies": "reading"})
//8. db.players.find({"Hobbies": {"$size":2}})