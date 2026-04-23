const fs = require('fs');
const path = require('path');

const globalsPath = path.join(__dirname, 'app', 'globals.css');
let css = fs.readFileSync(globalsPath, 'utf8');

// 1. Remove #00B8A3 completely
css = css.replace(/--color-primary-container:\s*#00B8A3;/g, '--color-primary-container: #00D2BE;');
// Gradients in globals.css
css = css.replace(/#00D2BE 0%,\s*#00B8A3 100%/g, '#00E6CF 0%, #00D2BE 100%');

// 2. Shadows: Replace any high opacity teal shadow with a deep black shadow + subtle teal glow
// Example: box-shadow: 0 8px 30px rgba(0, 210, 190, 0.35);
// Replace rgba(0, 210, 190, > 0.18) with a combo or clamp it.
css = css.replace(/box-shadow:\s*([^;]*?)rgba\(\s*0\s*,\s*210\s*,\s*190\s*,\s*(0\.[2-9][0-9]*|1\.0)\s*\)/g, (match, p1) => {
    // If it's a very high opacity, we replace it with a luxury black shadow + soft teal glow
    // Assuming p1 is something like "0 8px 30px "
    // Actually let's just make the shadows elegant:
    return `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 210, 190, 0.18)`;
});

// Also replace text-shadows or any other properties that use high opacity
css = css.replace(/rgba\(\s*0\s*,\s*210\s*,\s*190\s*,\s*(0\.[2-9][0-9]*|1\.0)\s*\)/g, 'rgba(0, 210, 190, 0.18)');

// Soft glass teal
css = css.replace(/rgba\(\s*0\s*,\s*210\s*,\s*190\s*,\s*0\.0[1-7]\s*\)/g, 'rgba(0, 210, 190, 0.08)');

// Hero gradient in globals.css
css = css.replace(/radial-gradient\(circle at 30% 50%, rgba\(0, 210, 190, 0.06\) 0%, transparent 60%\)/g, 'radial-gradient(circle at 30% 50%, rgba(0, 210, 190, 0.08) 0%, transparent 70%)');

// Darker glass (from 0.03/0.05 to 0.02)
css = css.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.0[4-6]\s*\)/g, 'rgba(255, 255, 255, 0.02)');

fs.writeFileSync(globalsPath, css);
console.log('globals.css updated.');
