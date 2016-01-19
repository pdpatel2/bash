var fs = require('fs');

module.exports = {
  pwd: function() {
    process.stdout.write(process.argv[1]);
    process.stdout.write('\nprompt > ');
  },
  date: function() {
    console.log(new Date());
    process.stdout.write('\nprompt > ');
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  }, 
  echo: function(thingToEcho) {
    process.stdout.write(thingToEcho);
  },
  cat: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
      process.stdout.write("prompt > ");
    });
  },
  head: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }

      var arr = data.split("\n").slice(0,5);
      console.log(arr.join("\n"))

      process.stdout.write("prompt > ");
    });
  },
  tail: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var arr = data.split("\n").slice(-5);
      console.log(arr.join("\n"))

      process.stdout.write("prompt > ");
    });
  },
  sortIt: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var arr = data.split("\n");

      console.log(arr.sort().join("\n"))

      process.stdout.write("prompt > ");
    });
  },
  wc: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var arr = data.split("\n");

      console.log(arr.length)

      process.stdout.write("prompt > ");
    });
  },
  uniq: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var arr = data.split("\n").sort();

      arr.forEach(function(elem) {
        if (newArr.indexOf(elem) < 0) {
          newArr.push(elem)
        }
      })
      console.log(newArr)
      process.stdout.write("prompt > ");
    });
  }
}




