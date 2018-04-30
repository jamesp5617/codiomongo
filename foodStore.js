db.inventory.remove({})
db.inventory.insert({"Pname":"lays","PType":"chips", "UPC":84932, "NumOfItemInStock":60, 
           "vendors":["chucks", "nerf", "wins"], "Aisle": "3",
                     "stock":[
                       {"name":"mark",
                      "date":new Date("2018-01-06"),"note":"all clear"},{"name":"boby",
                      "date":new Date("2018-01-10"),"note":"wipe shelf"}
                             ]
                    })
db.inventory.insert({"Pname":"cracker jacks","PType":"crackers", "UPC":74922, "NumOfItemInStock":40, 
           "vendors":["barts", "nerf", "lincs"], "Aisle": "3", "stock":[
             {"name":"Tod",
                      "date":new Date("2018-02-05"),"note":"expires soon"},{"name":"Tobby",
                      "date":new Date("2018-02-11"),"note":"nothing wrong"}
                 ]
                  })
                  
db.inventory.insert({"Pname":"snicker Doodles","PType":"candy", "UPC":86332, "NumOfItemInStock":50, 
           "vendors":["chucks", "berts"], "Aisle": "4", 
                     "stock":[
                       {"name":"mark",
                      "date":new Date("2018-01-05"),"note":"replace in 3 days"},{"name":"tod",
                      "date":new Date("2018-01-08"),"note":"replace in another 3 days"}
                     ]
                    })
db.inventory.insert({"Pname":"barbells","PType":"ice cream", "UPC":76239, "NumOfItemInStock":50, 
           "vendors":["chucks", "berts", "MOes"], "Aisle": "4", "stock":[
             {"name":"Alvin",
                      "date":new Date("2018-01-11"),"note":"Restock soon"},{"name":"Calvin",
                      "date":new Date("2018-01-21"),"note":"Freezer not working"}
                 ]
                  })
db.inventory.insert({"Pname":"Laughfy Taffy","PType":"candy", "UPC":84232, "NumOfItemInStock":10, 
           "vendors":["walmart", "cvs"], "Aisle": "1", "stock":[
             {"name":"Kalvin",
                      "date":new Date("2018-01-01"),"note":"candy melted"},{"name":"Boody",
                      "date":new Date("2018-01-21"),"note":"no complaints"}
                 ]
                  })
db.inventory.insert({"Pname":"Smarties","PType":"candy", "UPC":81932, "NumOfItemInStock":40, 
           "vendors":["cvs", "nerfs"], "Aisle": "1", "stock":[
             {"name":"Tobby",
                      "date":new Date("2018-02-01"),"note":"cleaned shelf"},{"name":"Broady",
                      "date":new Date("2018-02-11"),"note":"candy ran out"}
                 ]
                  })
//db.inventory.update({"Pname":"barbells"},{"$push":{"vendors":"hoganddosh"}})
//db.inventory.update({"Pname":"barbells"},{"$push":{"vendors":{"$each":["publix","windixie","amazon"]}}})
//db.inventory.update({"Pname":"lays"},{"$inc":{"NumOfItemInStock":-5}})
//db.inventory.update({"Pname":"lays"},{"$inc":{"NumOfItemInStock":20}})
//db.inventory.update({"Pname":"lays"},{"$set":{"Aisle":5}})
//db.inventory.update({"Pname":"barbells"},{"$push":{"stock":{"name":"Bobby","date":new Date("01-14-2018"), "note":"clean",}}}
//)
//db.inventory.update({"Pname":"lays"},{"$set":{"stock":{"mark":{"note":"Looks good"}}}})
//db.inventory.update({"Pname":"Smarties"},{"$unset":{"vendors":1}})
//> db.inventory.find({"stock.name":"Kalvin"})
//> db.inventory.find({"stock.note":/candy/})
//db.inventory.find({"NumOfItemInStock":{"$lt":50}})