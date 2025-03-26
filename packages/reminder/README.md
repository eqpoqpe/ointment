# @ointment/reminder

Set a reminder.

## Overview
A simple utility to schedule and manage reminders.

## Installation
Install via npm:
```bash
npm install @ointment/reminder
```

## Usage
Import and use the reminder functionality in your project:
```javascript
import { setReminder } from '@ointment/reminder';
// Set a reminder for 3000ms; the callback cancels the reminder if it returns true.
const reminder = setReminder(3000, (cancelReminder) => {
	console.log('Reminder triggered');
	// Cancel further reminder if condition met.
	return true;
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
