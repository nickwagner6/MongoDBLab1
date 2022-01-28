// 1. Add a person to the collection. You pick the data, but they should have an empty array for children.
//db.people.insertOne({first_name: 'Matt', last_name: 'Murdock', email: 'daredevil@email.com', gender: 'male', age: '30', state: 'New York', children: []});

// 2.Add another person. They should have at least two children.
//db.people.insertOne({first_name: 'Frank', last_name: 'Castle', email: 'punisher@email.com', gender: 'male', age: '30', state: 'New York', children: [{name: 'Lisa', age: 12}, {name: 'Frank Jr', age: 9}]});

// 3. Update one person named Clarence. He moved from North Dakota to South Dakota.
//db.people.updateOne({name: 'Clarence'}, {$set:{state: 'South Dakota'}});

// 4. Update Rebecca Hayes. Remove her email address.
//db.people.updateOne({first_name: 'Rebecca', last_name: 'Hayes'}, {$set:{email: ''}});

// 5. Update everyone from Missouri. They all had a birthday today, so add one to their age.
//db.people.updateMany({state: 'Missouri'}, {$inc: {age: 1}});

// 6. Jerry Baker has updated information. Replace with a new document:
//db.people.updateOne({first_name: 'Jerry', last_name: 'Baker'}, {$set: {last_name: 'Baker-Mendez', email: 'jerry@classic.ly', age: 28, state: 'Vermont', children: [{name: 'Alan', age: 13},{name: 'Jenny', age: 3}]}});

// 7. Delete Wanda Bowman.
//db.people.deleteOne({first_name: 'Wanda', last_name: 'Bowman'});

// 8. Delete everyone who does not have an email address specified. (expect 36 matches - maybe more depending what you added above)
//db.people.deleteMany({email: null}); //i got 35 people

// 9. Add several documents to a new submissions collection. Do it all in one command.
//db.submissions.insertMany([{title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("61f3ff6afbcb864e88a74d27")},{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("61f3ff6afbcb864e88a74d55")}, {title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("61f3ff6afbcb864e88a74dd8")}, {title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("61f3ff6afbcb864e88a74d5e")}, {title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("61f3ff6afbcb864e88a74d25")}]);

// 10. Add 2 upvotes for "The River Bend".
//db.submissions.updateOne({title: 'The River Bend'}, {$inc: {upvotes: 2}});

// 11. Add a field round2 = true to all submissions with at least 10 upvotes. (expect 3 matches)
//db.submissions.updateMany({upvotes: {$gte: 10} }, {$set: {round2: true}});
