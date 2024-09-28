use("student")
//db.s.find()
// "srn": 111,
// "sname": "rahul",
// "degree": "bca",
// "cgpa": 7.9,
// "subjects": [
//   "Mathematics",
//   "Computer Science",
//   "Statistics"
// ],
// "sem": 6

// db.s.replaceOne(
//     {srn:111},
//     {
//         srn:111,
//         sname:"madhan",
//         degree:"bca",
//         cgpa:9,
//         subjects:["chandramukhi","chandramukhi2"],
//         sem:6
//     }
// )

// db.s.deleteOne({srn:111})

// db.s.findOne({srn:111})

// db.s.deleteMany({sem:4})

// db.s.remove({srn:113})

// db.s.find({srn:112},{projection:{sname:1}})


//db.s.find()

// const docw=[
//     {
//       "srn": 121,
//       "sname": "neha",
//       "degree": "bca",
//       "cgpa": 8.0,
//       "subjects": ["Software Engineering", "Database Systems", "Algorithms"],
//       "sem": 7
//     },
//     {
//       "srn": 122,
//       "sname": "rajesh",
//       "degree": "bca",
//       "cgpa": 7.5,
//       "subjects": ["Mathematics", "Networking", "Cyber Security"],
//       "sem": 6
//     },
//     {
//       "srn": 123,
//       "sname": "priya",
//       "degree": "bca",
//       "cgpa": 8.2,
//       "subjects": ["Computer Graphics", "Operating Systems", "Data Science"],
//       "sem": 5
//     },
//     {
//       "srn": 124,
//       "sname": "ajay",
//       "degree": "bca",
//       "cgpa": 6.9,
//       "subjects": ["Web Development", "Database Systems", "Artificial Intelligence"],
//       "sem": 6
//     },
//     {
//       "srn": 125,
//       "sname": "vijay",
//       "degree": "bca",
//       "cgpa": 7.8,
//       "subjects": ["Machine Learning", "Statistics", "Networking"],
//       "sem": 7
//     },
//     {
//       "srn": 126,
//       "sname": "deepak",
//       "degree": "bca",
//       "cgpa": 8.1,
//       "subjects": ["Computer Architecture", "Data Structures", "Algorithms"],
//       "sem": 5
//     },
//     {
//       "srn": 127,
//       "sname": "aarti",
//       "degree": "bca",
//       "cgpa": 7.6,
//       "subjects": ["Software Engineering", "Cyber Security", "Mathematics"],
//       "sem": 6
//     },
//     {
//       "srn": 128,
//       "sname": "sita",
//       "degree": "bca",
//       "cgpa": 8.3,
//       "subjects": ["Database Systems", "Web Development", "Programming"],
//       "sem": 7
//     },
//     {
//       "srn": 129,
//       "sname": "rahul",
//       "degree": "bca",
//       "cgpa": 7.2,
//       "subjects": ["Data Science", "Computer Science", "Networking"],
//       "sem": 5
//     },
//     {
//       "srn": 130,
//       "sname": "mona",
//       "degree": "bca",
//       "cgpa": 7.9,
//       "subjects": ["Artificial Intelligence", "Software Engineering", "Algorithms"],
//       "sem": 6
//     }
//   ]
// db.w.insertMany(docw) 


// db.w.bulkWrite([
//     {insertOne:{document:{name:"basha",age:21}}},
//     {updateOne:{
//         filter:{srn:130},
//        update:{$set:{cgpa:8}}}
//     },
//     {deleteOne:{filter:{srn:129}}}
// ],{ordered:true})

// db.createCollection("vp",{capped:true,size:100000})

//db.createCollection("lookup")
// const docup=[
//     {
//       "srn": 121,
//       "sname": "neha",
//       "degree": "bca",
//       "cgpa": 8,
//       "subjects": [
//         "Software Engineering",
//         "Database Systems",
//         "Algorithms"
//       ],
//       "sem": 7
//     },
//     {
//       "srn": 122,
//       "sname": "rajesh",
//       "degree": "bca",
//       "cgpa": 7.5,
//       "subjects": [
//         "Mathematics",
//         "Networking",
//         "Cyber Security"
//       ],
//       "sem": 6
//     },
//     {
//       "srn": 123,
//       "sname": "priya",
//       "degree": "bca",
//       "cgpa": 8.2,
//       "subjects": [
//         "Computer Graphics",
//         "Operating Systems",
//         "Data Science"
//       ],
//       "sem": 5
//     },
//     {
//       "srn": 124,
//       "sname": "ajay",
//       "degree": "bca",
//       "cgpa": 6.9,
//       "subjects": [
//         "Web Development",
//         "Database Systems",
//         "Artificial Intelligence"
//       ],
//       "sem": 6
//     },
//     {
//       "srn": 125,
//       "sname": "vijay",
//       "degree": "bca",
//       "cgpa": 7.8,
//       "subjects": [
//         "Machine Learning",
//         "Statistics",
//         "Networking"
//       ],
//       "sem": 7
//     }
// ]

// db.lookup.insertMany(docup)
//
// db.createCollection("sd")
// db.sd.insertMany([
//     { "_id": "Software Engineering", "description": "Study of software development." },
//     { "_id": "Database Systems", "description": "Study of database management systems." },
//     { "_id": "Algorithms", "description": "Study of algorithms and data structures." },
//     { "_id": "Mathematics", "description": "Study of mathematical concepts." },
//     { "_id": "Networking", "description": "Study of computer networks." },
//     { "_id": "Cyber Security", "description": "Study of cybersecurity principles." },
//     { "_id": "Computer Graphics", "description": "Study of computer graphics techniques." },
//     { "_id": "Operating Systems", "description": "Study of operating system concepts." },
//     { "_id": "Data Science", "description": "Study of data analysis and machine learning." },
//     { "_id": "Web Development", "description": "Study of web development techniques." },
//     { "_id": "Artificial Intelligence", "description": "Study of AI and machine learning." },
//     { "_id": "Machine Learning", "description": "Study of machine learning algorithms." },
//     { "_id": "Statistics", "description": "Study of statistical methods." }
//   ]
//   )

// db.lookup.aggregate([
//     {
//         $lookup: {
//           from: "sd",
//           localField: "subjects",
//           foreignField: "_id",
//           as: "course details"
//         }
//     }
// ])/


// db.createCollection("products")

// db.orders.insertMany([
//     { "_id": 1, "productId": 101, "quantity": 5 },
//     { "_id": 2, "productId": 102, "quantity": 2 }
//   ]
// )

// db.products.insertMany([
//     { "_id": 101, "name": "Laptop", "price": 1000 },
//     { "_id": 102, "name": "Phone", "price": 500 }
//   ]
// )

//db.orders.find()
//db.products.find()

// db.orders.aggregate([
//     {
//         $lookup:
//         {
//             from:"products",
//             localField:"productId",
//             foreignField:"_id",
//             as:"product details"
//         }
//     }
// ])

// db.s.find()
// db.s.deleteMany({},{$or:[
//     {sem:{$gte:4}},
//     {sem:{lte:7}}
// ]})

//db.s.find()

// db.s.insertMany([
//     { "_id": 1, "name": "Alice" },
//     { "_id": 2, "name": "Bob" },
//     { "_id": 3, "name": "Charlie" },
//     { "_id": 4, "name": "Alison" }
//   ]
//   )
//db.s.find()

//db.s.find({})
//db.s.find({name:/Ali/})
//db.s.find({name:/ali/i})

//db.s.find({name:/^a/i})
// db.s.find({name:/n$/i})

// db.s.deleteMany({},{$and:[{_id:{$gte:1}},{_id:{$lte:4}}]})

// db.s.insertMany([
//     { "_id": 1, "name": "Alice", "age": 30 },
//     { "_id": 2, "name": "Bob", "age": 25 },
//     { "_id": 3, "name": "Charlie", "age": 35 },
//     { "_id": 4, "name": "David", "age": 30 }
//   ]
//   )

//db.s.createIndex({age:1})
// db.s.getIndexes()
//db.s.find({age:30})
// db.createCollection("product")
// db.product.insertMany([
//     { "_id": 1, "name": "Laptop", "price": 1000 },
//     { "_id": 2, "name": "Smartphone", "price": 700 },
//     { "_id": 3, "name": "Tablet", "price": 400 }
//   ])

  const cursor=db.product.find()

  cursor.forEach(function(doc) {
    printjson(doc)
  })