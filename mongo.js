1. db.people.insertOne({first_name: 'Matt', last_name: 'Murdock', email: 'daredevil@email.com', gender: 'male', age: '30', state: 'New York', children: []});
2. db.people.insertOne({first_name: 'Frank', last_name: 'Castle', email: 'punisher@email.com', gender: 'male', age: '30', state: 'New York', children: [{name: 'Lisa', age: 12}, {name: 'Frank Jr', age: 9}]});
3. db.people.updateOne({name: 'Clarence'}, {$set:{state: 'South Dakota'}});
4. db.people.updateOne({first_name: 'Rebecca', last_name: 'Hayes'}, {$set:{email: ''}});
5. db.people.updateMany({state: 'Missouri'}, {$inc: {age: 1}});
6. db.people.updateOne({first_name: 'Jerry', last_name: 'Baker'}, {$set: {last_name: 'Baker-Mendez', email: 'jerry@classic.ly', age: 28, state: 'Vermont', children: [{name: 'Alan', age: 13},{name: 'Jenny', age: 3}]}});
7. db.people.deleteOne({first_name: 'Wanda', last_name: 'Bowman'});
8. db.people.deleteMany({email: null}); //i got 35 people
9. db.submissions.insertMany([{title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("61f3ff6afbcb864e88a74d27")},{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("61f3ff6afbcb864e88a74d55")}, {title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("61f3ff6afbcb864e88a74dd8")}, {title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("61f3ff6afbcb864e88a74d5e")}, {title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("61f3ff6afbcb864e88a74d25")}]);
10. db.submissions.updateOne({title: 'The River Bend'}, {$inc: {upvotes: 2}});
11. 