// code your solution here
function saturdayFun(activity="roller-skate") {
  if (activity) {
      return `This Saturday, I want to ${activity}!`
  } else {
      return `This Saturday, I want to ${activity}!`
  }
}

function mondayWork(activity="go to the office") {
  if (activity) {
      return `This Monday, I will ${activity}.`;
  } else {
      return `This Monday, I will ${activity}.`;
  }
}

let wrapAdjective = function(symbol="*") {
  return function(character="special") {
      return `You are ${symbol}${character}${symbol}!`;
  }
}