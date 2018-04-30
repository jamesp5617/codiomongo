db.course.remove({})
db.course.insert({"Instructor":"Allen","Course":{"Prefix":"COP",
                  "Number":4710,"Title":"Advance DataBase Managment",
                    "days":["monday"],"CreditHours":3}})
db.course.insert({"Instructor":"Jacobs","Course":{"Prefix":"CEN",
                  "Number":4213,"Title":"Embedded Systems Programming",
                    "days":["Tuesday", "Thursday"],"CreditHours":3}})
db.course.insert({"Instructor":"Chi","Course":{"Prefix":"CAP",
                  "Number":3770,"Title":"Introduction to Data Mining",
                    "days":["monday","wednsday"],"Hours":3}})
db.course.insert({"Instructor":"Mark","Course":{"Prefix":"COP",
                  "Number":3060,"Title":"Concept Adv App Dev",
                    "days":["Wednday"],"CreditHours":3}})
db.course.insert({"Instructor":"Prasad","Course":{"Prefix":"CEN",
                  "Number":4721,"Title":"Human Comp Interaction",
                    "days":["monday", "wednsday"],"CreditHours":3}})
db.course.insert({"Instructor":"McQueen","Course":{"Prefix":"CEN",
                  "Number":3710,"Title":"Pro Development 1",
                    "days":["Tuesdau","Thursday"],"CreditHours":2}})

// db.course.find({"Course.Prefix":"COP"}).sort({"Instructor":1})
// db.course.find({"Course.days":["monday", "wednsday"]})
// db.course.find({"Course.days":["monday"]}).pretty()
// db.course.find({"Instructor":"Allen"},{"Course.Title":1,"Course.CreditHours":1})
// > db.course.find({"Course.Title":"Advance DataBase Managment"},{"Instructor":1})
// db.course.find().sort({"Course.Title":1}).limit(4).pretty()
// db.course.find({"Course.days":["Tuesday","Thursday"],"Course.CreditHours":{"$gt":2}},{"Instructor":1, "Course.Title":1})
//
//  B db.course.find({Prefix:{$not:/COP/}})
// C db.course.find({Instructor:{$regex:/All/}})