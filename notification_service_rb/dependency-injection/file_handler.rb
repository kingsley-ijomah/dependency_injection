require 'json'

class FileHandler
  def initialize(file_path)
    @file_path = file_path
  end

  def read_file
    return [] unless File.exist?(@file_path)

    file_content = File.read(@file_path)
    JSON.parse(file_content, symbolize_names: true)
  end

  def write_file(data)
    File.write(@file_path, JSON.pretty_generate(data))
  end
end
