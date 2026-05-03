export function calculateStreak(logs) {
  // 1. Get all unique completed dates and sort them newest to oldest
  const completedDates = [...new Set(
    logs
      .filter(log => log.completed)
      .map(log => log.date)
  )].sort().reverse();

  if (completedDates.length === 0) return 0;

  // 1. Check if the streak is still active (latest log must be today or yesterday)
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  if (completedDates[0] !== todayStr) {
    return 0;
  }

  let streak = 1;

  for (let i = 0; i < completedDates.length - 1; i++) {
    const current = new Date(completedDates[i]);
    const next = new Date(completedDates[i+1]);
    

    const diff = (current - next) / (1000 * 60 * 60 * 24);
    
    if (Math.round(diff) === 1) {
      streak++;
    } else if (Math.round(diff) === 0) {
      continue; 
    } else {
      break; 
    }
  }
  
  return streak;
}
