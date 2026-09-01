const fs = require('fs');
let file = 'src/app/[locale]/cv/page.tsx';
let text = fs.readFileSync(file, 'utf8');

// Replace top-bar block
let topBarRegex = /<div className="top-bar">[\s\S]*?<div className="wrapper">/;
text = text.replace(topBarRegex, '<div className="wrapper">');

// Replace Cloudflare obfuscated emails
text = text.replace(/<a href="\/cdn-cgi\/l\/email-protection[^>]*><span className="__cf_email__" data-cfemail="[^"]*">\[email&#160;protected\]<\/span><\/a>/g, '<a href="mailto:erick@mino.solutions">erick@mino.solutions</a>');
text = text.replace(/<a href="\/cdn-cgi\/l\/email-protection" className="__cf_email__" data-cfemail="[^"]*">\[email&#160;protected\]<\/a>/g, '<a href="mailto:erick@mino.solutions">erick@mino.solutions</a>');

fs.writeFileSync(file, text);
console.log('Fixed CV');
