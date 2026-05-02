export function calculateStreak(logs) {
  // 1. Get all unique completed dates and sort them newest to oldest
  const completedDates = [...new Set(
    logs
      .filter(log => log.completed)
      .map(log => log.date)
  )].sort().reverse();

  if (completedDates.length === 0) return 0;

  let streak = 1;

  for (let i = 0; i < completedDates.length - 1; i++) {
    const current = new Date(completedDates[i]);
    const next = new Date(completedDates[i+1]);
    

    const diff = (current - next) / (1000 * 60 * 60 * 24);
    
    if (Math.round(diff) === 1) {
      streak++;
    } else if (Math.round(diff) === 0) {
      continue; // Skip same-day logs if they exist
    } else {
      break; // Gap detected, streak broken
    }
  }
  
  return streak;
}
