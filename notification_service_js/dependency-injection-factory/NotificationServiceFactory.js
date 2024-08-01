const FileHandler = require('./FileHandler');
const NotificationService = require('./NotificationService');

class NotificationServiceFactory {
  static create(filePath) {
    const fileHandler = new FileHandler(filePath);
    return new NotificationService(fileHandler);
  }
}

module.exports = NotificationServiceFactory;
