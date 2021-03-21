const ADHDTimer = require("adhd-timer");
const exec = require("child_process").exec;

ADHDTimer([
  {
    schedule: "0 0 0 * * *",
    callback: function(){
      exec("nyan");
    },
  }
], [
  "firefox",
  "bash"
]);
