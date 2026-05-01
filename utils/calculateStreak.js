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
    const dateStr = date.toISOString().split("T")[0];

    if (completedDates.has(dateStr)) {
      streak++;
    } else {
      break; 
    }
  }

  return streak;
}

