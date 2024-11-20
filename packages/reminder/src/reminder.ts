export type Reminder = ReturnType<typeof setTimeout>;
export type ReminderCallback = (
  offReminder: (reminder: Reminder) => void
) => boolean;

/**
 * set a reminder function that triggers based on the callback's return value.
 * @param timeInMilliseconds - time in milliseconds for when the reminder will trigger.
 * @param callback - reminder callback function that can return boolean or void.
 * @returns returns a setTimeout reference for manual reminder cancellation.
 */
export function setReminder(
  timeInMilliseconds: number,
  callback: ReminderCallback
): Reminder {
  const reminderTimeout = setTimeout(function () {
    const result = callback(() => offReminder(reminderTimeout));

    if (result) {
      offReminder(reminderTimeout);
    } else {
      setReminder(timeInMilliseconds, callback);
    }
  }, timeInMilliseconds);

  return reminderTimeout;
}

/**
 * stop a reminder function by canceling the reminder set using setTimeout.
 * @param reminderTimeout - setTimeout reference to identify the reminder to cancel.
 */
export function offReminder(reminderTimeout: Reminder) {
  clearTimeout(reminderTimeout);
}
