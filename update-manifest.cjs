const fs = require("fs");
const path = require("path");

const DIST_DIR = path.join(__dirname, "dist", "assets");
const MANIFEST_PATH = path.join(__dirname, "manifest.json");

// Read manifest.json
const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));

// Get filenames from dist/assets directory
const files = fs.readdirSync(DIST_DIR);

// Extract .js and .css filenames
const jsFiles = files.filter((file) => file.endsWith(".js"));
const cssFiles = files.filter((file) => file.endsWith(".css"));

// Update manifest.json with new filenames
manifest.content_scripts[0].js = jsFiles.map((file) => `dist/assets/${file}`);
manifest.content_scripts[0].css = cssFiles.map((file) => `dist/assets/${file}`);

// Write updated manifest.json back to file
fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

console.log("Manifest updated!");
