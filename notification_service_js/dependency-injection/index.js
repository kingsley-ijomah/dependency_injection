const FileHandler = require('./FileHandler');
const NotificationService = require('./NotificationService');

const filePath = './notifications.json';
const fileHandler = new FileHandler(filePath);
const notificationService = new NotificationService(fileHandler);

// Sending different types of notifications
notificationService.sendEmail('patient@example.com', 'Your appointment is confirmed.');
notificationService.sendSMS('+1234567890', 'Reminder: Your dental appointment is tomorrow.');
notificationService.sendPushNotification('patient123', 'Your aftercare instructions have been updated.');

// Retrieving notifications
const notifications = notificationService.getNotifications();
console.log('All Notifications:', notifications);