for(i = 100;i >= 60; i--)
{
    let Grade = assignGrade.call(this, i)
    console.log("For scoring " + i + " points, you get an " + Grade);
}

function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }