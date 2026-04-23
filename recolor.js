npm run devconst fs = require('fs');
const path = require('path');

const replacements = [
    ['#16cc9b', '#00D2BE'],
    ['#0ea87d', '#00B8A3'],
    ['#06c897', '#00B8A3'],
    ['22, 204, 155', '0, 210, 190'],
    ['22,204,155', '0,210,190'],
    ['#060b0e', '#0A0A0A'],
    ['rgba(6, 11, 14, 0.85)', 'rgba(10, 10, 10, 0.85)'],
    ['rgba(6, 11, 14, 0.98)', 'rgba(10, 10, 10, 0.98)'],
    ['#f1f7fc', '#FFFFFF'],
    ['#94a0a6', 'rgba(255, 255, 255, 0.72)'],
    ['rgba(14, 21, 25, 0.7)', '#101010'],
    ['rgba(10, 16, 20, 0.6)', '#101010'],
    ['rgba(20, 29, 33, 0.75)', '#101010'],
    ['rgba(25, 35, 39, 0.85)', '#101010'],
    ['rgba(25, 35, 39, 0.7)', 'rgba(255, 255, 255, 0.03)'],
    ['rgba(30, 42, 46, 0.7)', '#101010'],
    ['#005f46', '#0A0A0A'],
    ['#003828', '#0A0A0A'],
    ['#c8e8f4', '#00D2BE'],
    ['#1c3a44', '#101010'],
    ['#b6d5e2', '#FFFFFF'],
    ['#6f777a', 'rgba(0, 210, 190, 0.18)'],
    ['#42494c', 'rgba(0, 210, 190, 0.18)'],
    ['#73e0ff', '#00D2BE'],
    ['#53f0bd', '#00E6CF'],
    ['#64ffca', '#00D2BE'],
    ['#0a0f12', '#0A0A0A'],
    ['rgba(22, 204, 155', 'rgba(0, 210, 190'],
    // WhatsApp button specifically
    ['#25D366', '#25D366'], // Keep green
    ['rgba(37,211,102,0.4)', 'rgba(10,20,15,0.8)'],
    ['rgba(37,211,102,0.6)', 'rgba(10,20,15,0.95)']
];

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(process.cwd());

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    replacements.forEach(([oldStr, newStr]) => {
        // use split join for global replacement
        newContent = newContent.split(oldStr).join(newStr);
    });
    
    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated ' + file);
    }
});
