var scores = [88, 62, 65, 21, 47, 92,  57, 89, 79, 89, 54, 82, 69, 72, 74, 54, 66, 92, 64, 96, 47, 89, 95, 93, 70, 30, 84, 93, 81, 98, 78, 96, 32, 56, 64, 42, 67];

// Write your code below
var sum = 0;
for (var i = 0; i < scores.length; i++) {
  // Add each score to the sum variable
  sum += scores[i];
}

// Calculate the average score with total sum / number of scores
var avg = sum / scores.length;
console.log("The average score is " + avg);

var bestScore = 0;
for (var i = 0; i < scores.length; i++) {
  sum += scores[i];
  
  // If a value is greater than bestScore, 
  // assign that value to the bestScore variable
  if (scores[i] > bestScore) {
    bestScore = scores[i];
  }
}
console.log("The max score is " + bestScore);
