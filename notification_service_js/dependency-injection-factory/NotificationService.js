class NotificationService {
  constructor(fileHandler) {
    this.fileHandler = fileHandler;
  }

  sendEmail(recipient, message) {
    const notification = {
      type: 'email',
      recipient,
      message,
      timestamp: new Date(),
    };
    this.saveNotification(notification);
    console.log(`Email sent to ${recipient}: ${message}`);
  }

  sendSMS(recipient, message) {
    const notification = {
      type: 'sms',
      recipient,
      message,
      timestamp: new Date(),
    };
    this.saveNotification(notification);
    console.log(`SMS sent to ${recipient}: ${message}`);
  }

  sendPushNotification(recipient, message) {
    const notification = {
      type: 'push',
      recipient,
      message,
      timestamp: new Date(),
    };
    this.saveNotification(notification);
    console.log(`Push notification sent to ${recipient}: ${message}`);
  }

  saveNotification(notification) {
    const notifications = this.fileHandler.readFile();
    notifications.push(notification);
    this.fileHandler.writeFile(notifications);
  }

  getNotifications() {
    return this.fileHandler.readFile();
  }
}

module.exports = NotificationService;
