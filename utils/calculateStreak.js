export function calculateStreak(logs) {
  
  const completedDates = new Set(
    logs
      .filter(log => log.completed)
      .map(log => log.date)
  );

  let streak = 0;
  const today = new Date();

  for (let i = 0; i < 365; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    
    // Generate YYYY-MM-DD in "local" time (relative to the server/user)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    if (completedDates.has(dateStr)) {
      streak++;
    } else {
      // If we miss today (i=0), we should check if we have yesterday to keep the streak alive.
      // But if we miss any day after that, the streak is broken.
      if (i === 0) continue; 
      break; 
    }
  }

  return streak;
}

