/**
 * set a reminder function that triggers based on the callback's return value.
 * @param timeInMilliseconds - time in milliseconds for when the reminder will trigger.
 * @param callback - reminder callback function that can return boolean or void.
 * @returns returns a setTimeout reference for manual reminder cancellation.
 */
function setReminder(timeInMilliseconds: number, callback: ReminderCallback): ReturnType<typeof setTimeout> {
  const reminderTimeout = setTimeout(function() {
    const result = callback(reminderTimeout);
    if (result === true) {
      setReminder(timeInMilliseconds, callback);
    } else {
      offReminder(reminderTimeout);
    }
  }, timeInMilliseconds);

  return reminderTimeout;
}

/**
 * stop a reminder function by canceling the reminder set using setTimeout.
 * @param reminderTimeout - setTimeout reference to identify the reminder to cancel.
 */
function offReminder(reminderTimeout: ReturnType<typeof setTimeout>) {
  clearTimeout(reminderTimeout);
}

export { setReminder, offReminder };
