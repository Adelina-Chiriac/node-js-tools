#!/usr/bin/env node

// Require the File System module
const fs = require("fs");

// Require the Chalk module
const chalk = require("chalk");

// Promise-based implementation
const lstat = fs.promises.lstat;

fs.readdir(process.cwd(), async (err, filenames) => {
    if (err) {
        console.log(err);
    }

    // Map over the filenames array 
    const statPromises = filenames.map((filename) => {
        return lstat(filename); 
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
        // Get the index of each stats index (so we have a record of which filename the stats object belongs to)
        const index = allStats.indexOf(stats);

        // Print to the console the filename, normally if it's a file
        if (stats.isFile()) {
            console.log(filenames[index]);
        }
        // Print to the console the file, with red if it's a folder
        else {
            console.log(chalk.red(filenames[index]));
        }

    }
});