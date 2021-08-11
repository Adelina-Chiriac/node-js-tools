#!/usr/bin/env node

// Require the File System module
const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }

    console.log(filenames);
});