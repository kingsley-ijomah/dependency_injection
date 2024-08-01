require_relative 'file_handler'

class NotificationService
  def initialize(file_path)
    @file_handler = FileHandler.new(file_path)
  end

  def send_email(recipient, message)
    notification = {
      type: 'email',
      recipient: recipient,
      message: message,
      timestamp: Time.now
    }
    save_notification(notification)
    puts "Email sent to #{recipient}: #{message}"
  end

  def send_sms(recipient, message)
    notification = {
      type: 'sms',
      recipient: recipient,
      message: message,
      timestamp: Time.now
    }
    save_notification(notification)
    puts "SMS sent to #{recipient}: #{message}"
  end

  def send_push_notification(recipient, message)
    notification = {
      type: 'push',
      recipient: recipient,
      message: message,
      timestamp: Time.now
    }
    save_notification(notification)
    puts "Push notification sent to #{recipient}: #{message}"
  end

  def get_notifications
    @file_handler.read_file
  end

  private

  def save_notification(notification)
    notifications = @file_handler.read_file
    notifications << notification
    @file_handler.write_file(notifications)
  end
end
