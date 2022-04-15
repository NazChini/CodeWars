// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// You will receive the following data structure representing the stairs Suzuki logged in a year.

//Topics tested: FUNDAMENTALS | ARRAYS

function stairsIn20(s) {
  return (
    20 * s.reduce((sum, arr) => sum + arr.reduce((sum, num) => sum + num, 0), 0)
  );
}
