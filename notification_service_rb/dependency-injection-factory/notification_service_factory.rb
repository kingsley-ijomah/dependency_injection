require_relative 'file_handler'
require_relative 'notification_service'

class NotificationServiceFactory
  def self.create(file_path)
    file_handler = FileHandler.new(file_path)
    NotificationService.new(file_handler)
  end
end
