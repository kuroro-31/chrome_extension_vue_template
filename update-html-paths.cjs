const fs = require("fs");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const HTML_PATH = path.join(DIST_DIR, "index.html");

// Read the contents of the index.html file
let htmlContent = fs.readFileSync(HTML_PATH, "utf-8");

// Update the paths from absolute to relative
htmlContent = htmlContent.replace('src="/assets/', 'src="assets/');
htmlContent = htmlContent.replace('href="/assets/', 'href="assets/');

// Write the updated content back to index.html
fs.writeFileSync(HTML_PATH, htmlContent);

console.log("Updated paths in index.html");
