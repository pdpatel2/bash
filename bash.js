var commands = require('./commands.js');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === "pwd") {
    commands.pwd();
  } else if (cmd === "date") {
    commands.date();
  } else if (cmd === "ls") {
    commands.ls();
  } else if (cmd.split(" ")[0] === "echo") {
    commands.echo(cmd.split(" ")[1]);
  } else if (cmd.split(" ")[0] === "cat") {
    commands.cat(cmd.split(" ")[1]);
  } else if (cmd.split(" ")[0] === "head") {
    commands.head(cmd.split(" ")[1]);
  } else if (cmd.split(" ")[0] === "tail") {
    commands.tail(cmd.split(" ")[1]);
  } else if (cmd.split(" ")[0] === "sort") {
    commands.sortIt(cmd.split(" ")[1]);
  } else if (cmd.split(" ")[0] === "wc") {
    commands.wc(cmd.split(" ")[1]);
  } else if (cmd.split(" ")[0] === "uniq") {
    commands.uniq(cmd.split(" ")[1]);
  }

});
