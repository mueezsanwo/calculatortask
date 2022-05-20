/* write a series of conditional statements that 
prints "not a group" if musicians is less than or equal to 0
prints "solo" if musicians is equal to 1
prints "duet" if musicians is equal to 2
prints "trio" if musicians is equal to 3
prints "quartet" if musicians is equal to 4
prints "this is a large group" if musicians is greater than 4 */

function musicians(array) {
  if (array.length <= 0) {
  console.log("not a group")
} if (array.length === 1) {
  console.log("solo")
} if (array.length === 2) {
  console.log("duet")
} if (array.length === 3) {
  console.log("trio")
} if (array.length === 4) {
  console.log("quartet")
} if (array.length > 4)   {
  console.log("this is a large group")
}
}
musicians([])
musicians(["wizkid"])
musicians(["peter", "paul"])
musicians(["peter", "paul", 'jake',])
musicians(["peter", "paul", 'jake', 'kunle'])
musicians(["peter", "paul",'kun', 'davido', 'olamide'])


