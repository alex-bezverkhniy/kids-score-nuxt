import fs from "fs";
export default defineEventHandler((event) => {
  fs.exists("./content/eva/tasks.json", function (exists) {
    if (exists) {
      console.log("yes file exists");
    }
  });

  return {
    api: "works"
  };
});
