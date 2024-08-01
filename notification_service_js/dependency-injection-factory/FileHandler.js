const fs = require('fs');

class FileHandler {
  constructor(filePath) {
    this.filePath = filePath;
  }

  readFile() {
    if (fs.existsSync(this.filePath)) {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  }

  writeFile(data) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }
}

module.exports = FileHandler;
