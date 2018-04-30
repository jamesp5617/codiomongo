db.people.remove({})
db.people.insert({"FName":"Bob", "LName":"Lyne", "hobbies":["Basketball",
                   "Football"], "Quote":"cant keep a strong man down"})
db.people.insert({"FName":"Jackie", "LName":"Chan", "hobbies":["Fighting",
                   "Movies"], "Quote":"eye of the tiger you will find yourself"})
db.people.insert({"FName":"Jet", "LName":"Lee", "hobbies":["making movies",
                   "Playing basketball", "riding motorcylce"], 
                  "Quote":"It takes one to know one "})
db.people.insert({"FName":"Bobby", "LName":"Shmurda", "hobbies":["Rapping",
                   "Joking"], "Quote":"My moves drives em crazy"})
db.people.insert({"FName":"Bruce", "LName":"Wayne", "hobbies":["Saving the world",
                   ], "Quote":"I'm batman"})
//db.people.find({"hobbies":"Basketball"})
//db.people.find({"Quote":/cant/})
//db.people.update({"FName":"Bob"},{"$pull":{"hobbies":"Basketball"}})