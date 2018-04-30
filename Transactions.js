db.transaction.remove({})
db.transaction.insert({"Name":"big dipper", "Ptype":"candy", 
     "Price":1.50, "Date":new Date("2018-01-06"), "location":{
       "SNumber":23415, "city":"Lake worth", "State":"Florida"},
       "Payment":"Credit card", "CType":"Visa", "Last 4":4326})
db.transaction.insert({"Name":"Juicy pops", "Ptype":"candy", 
     "Price":2.50, "Date":new Date("2018-02-06"), "location":{
       "SNumber":23415, "city":"Lake worth", "State":"Florida"},
       "Payment":"Credit card", "CType":"Master Card", "Last 4":7362})
db.transaction.insert({"Name":"Gooblers", "Ptype":"Candy", 
     "Price":2.50, "Date":new Date("2018-01-16"), "location":{
       "SNumber":23415, "city":"Lake worth", "State":"Florida"},
       "Payment":"Credit card", "CType":"Visa", "Last 4":6271})
db.transaction.insert({"Name":"Cheetos", "Ptype":"snack", k
     "Price":1.00, "Date":new Date("2018-03-04"), "location":{
       "SNumber":82913, "city":"Austin", "State":"Texas"},
       "Payment":"Credit card", "CType":"Visa", "Last 4":8472})
db.transaction.insert({"Name":"Ribeye", "Ptype":"Meat", 
     "Price":7.50, "Date":new Date("2018-01-16"), "location":{
       "SNumber":48271, "city":"Atlanta", "State":"Georgia"},
       "Payment":"Cash", "CType":"Express", "Last 4":9731})
db.transaction.insert({"Name":"Drumstick", "Ptype":"poultry", 
     "Price":6.50, "Date":new Date("2018-02-18"), "location":{
       "SNumber":48271, "city":"Atlanta", "State":"Georgia"},
       "Payment":"Credit card", "CType":"Visa", "Last 4":7264})
db.transaction.insert({"Name":"Cheese danish", "Ptype":"snack", 
     "Price":1.50, "Date":new Date("2018-01-26"), "location":{
       "SNumber":9628, "city":"Jacksonvile", "State":"North Carolina"},
       "Payment":"Cash", "CType":"Master Card", "Last 4":4628})
db.transaction.insert({"Name":"Gushers", "Ptype":"candy", 
     "Price":2.50, "Date":new Date("2018-03-01"), "location":{
       "SNumber":9621, "city":"Jacksonvile", "State":"Florida"},
       "Payment":"Cash", "CType":"Visa", "Last 4":7361})

//db.transaction.aggregate([{"$match":{"Price":{"$gt":2.00}}}])
//db.transaction.aggregate([{"$project":{"Name":1, "Price":1}}])
//db.transaction.aggregate([{"$project":{"discount":{"$multiply":["$Price",.10]}}}])
//db.transaction.aggregate([{$match:{"location.city":"Lake worth"}}, {"$project":{"Name":1, "Date":1}}])
//db.transaction.aggregate([{$match:{"Ptype":"candy", "Price":{"$lt":2.50}}},{"$project":{"location.SNumber":1, "Payment":1, "
//_id":0}}])
//
//db.transaction.aggregate({$match:{"Last 4":4326}},{$project:{"_id":0, "Ptype":1, "Date":1}})
//db.transaction.aggregate({"$group":{"_id":"$Ptype", "total":{"$sum":1}}})
//db.transaction.aggregate({"$group":{"_id":"$Ptype", "totalprice":{"$avg":"$Price"}}}, {"$sort":{"totalprice":-1}})
//db.transaction.aggregate({"$group":{"_id":"$Ptype", "purchased":{"$push":"$Date"}}})
//db.transaction.aggregate({"$group":{"_id":"$CType", "total":{"$sum":1}}},{"$sort":-1}, {"$limit":2})
//
//db.academyawards.find({"Year":1991, "Winner":1})
//db.academyawards.find({"Name":/Denzel/})
//> db.academyawards.find({"Name":/jane/i, "Winner":1}).pretty()
//
//db.players_stats.aggregate({"$group":{"_id":"$Team", "avgWeight":{"$avg":"$Weight"}}})
//db.players_stats.aggregate({"$sort":{"Games Played":-1}}, {"$limit":5},{"$project":{"Name":1, "Games Played":1, "PTS":1}})
//db.players_stats.aggregate({"$group":{"_id":"$Birth_Place", "TotalPoints":{"$sum":"$PTS"}}})
//db.players_stats.aggregate({"$group":{"_id":"$Team", "MaxPoint":{"$first":"$PTS"}}})
// db.players_stats.aggregate({"$project":{"Name":1, "AvgPergame":{"$divide":["$PTS","$Games Played"]}}})