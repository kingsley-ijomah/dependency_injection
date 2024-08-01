require_relative 'notification_service_factory'

file_path = 'notifications.json'
notification_service = NotificationServiceFactory.create(file_path)

# Sending different types of notifications
notification_service.send_email('patient@example.com', 'Your appointment is confirmed.')
notification_service.send_sms('+1234567890', 'Reminder: Your dental appointment is tomorrow.')
notification_service.send_push_notification('patient123', 'Your aftercare instructions have been updated.')

# Retrieving notifications
notifications = notification_service.get_notifications
puts "All Notifications: #{notifications.inspect}"
