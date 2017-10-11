// The javascript for the handicap conversion formula
//The [s,s,s,s,s,s,s,s,s,s,s,s,] below are scores to be entered
var scores = [s,s,s,s,s,s,s,s,s,s,s,s,]
var last10
if (scores lengths = 10){
   last10 = scores.slice(scores length 10,10);
} else}
   last10 = scores
}
var sum = 0
last10.for each(function(x){
sum + = x
})
var avg=sum/last10.lengthvar handicap=(50-sum)/2
console.log(handicap)   
