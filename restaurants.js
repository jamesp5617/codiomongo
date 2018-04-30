db.restaurant.remove({})

db.restaurant.insert({ "name": "geges" , "rating" : 85,
                      "cuisine" :["chicken", "fish"], "location" : [ {"address": {"city" : "atlanta",
                                                                "state": "ga", "street" : "blair"} },
                                                                   {"address": {"city" : "atlanta",
                                                                "state": "ga", "street" : "gostoc"} }
                                                                   ]})
                     
db.restaurant.insert({ "name": "bobos" , "rating" : 95,
                      "cuisine" :["vegetables", "fish"], "location" : [ {"address": {"city" : "baltimore",
                                                                      "state": "md", "street" : "blase"}}]})
                     
db.restaurant.insert({ "name": "hokis" , "rating" : 98,
                      "cuisine" :["vegetables", "beef"], "location" : [ {"address": {"city" : "baltimore",
                                                                      "state": "md", "street" : "blase"}},
                                                                      {"address": {"city" : "seattle",
   