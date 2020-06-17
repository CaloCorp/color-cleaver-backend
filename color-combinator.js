const colorCombinator = function(color1, color2){
let primaryColors = ['red','blue','yellow']

if (primaryColors.includes(color1) && primaryColors.includes(color2)) 



return 'When you combine red and yellow, you get orange!'

else return 'Sorry, one of those colors is not a primary color!'

}




module.exports = colorCombinator