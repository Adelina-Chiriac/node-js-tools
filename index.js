#!/usr/bin/env node

// Require the File System module
const fs = require("fs");

// Promise-based implementation
const lstat = fs.promises.lstat;

fs.readdir(process.cwd(), (err, filenames) => {
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

        // Print to the console whether or not the filename is a file or not
        console.log(filenames[index], stats.isFile());

    }
});