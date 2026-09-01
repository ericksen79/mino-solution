const fs = require('fs');

try {
  let html = fs.readFileSync('_legacy_site/projects.html', 'utf8');
  let matches = html.match(/<section id="projects"[^>]*>([\s\S]*?)<\/section>/);
  if (matches) {
    let jsx = matches[1]
      .replace(/class=/g, 'className=')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<img([^>]*)>/g, '<img$1 />')
      .replace(/<br>/g, '<br />')
      .replace(/<input([^>]*)>/g, '<input$1 />')
      .replace(/style="([^"]*)"/g, (match, p1) => {
        let styles = p1.split(';').filter(s => s.trim() !== '').map(s => {
          let [key, val] = s.split(':');
          if (!key || !val) return '';
          key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          return `'${key}': '${val.trim()}'`;
        }).join(', ');
        return `style={{ ${styles} }}`;
      })
      .replace(/<svg ([^>]*)>/g, (match, p1) => {
        let newAttrs = p1.replace(/stroke-width/g, 'strokeWidth').replace(/aria-hidden/g, 'ariaHidden').replace(/fill-rule/g, 'fillRule').replace(/clip-rule/g, 'clipRule');
        return `<svg ${newAttrs}>`;
      });
      
    fs.writeFileSync('src/components/ui/projects/Portfolio.tsx', `import styles from './Portfolio.module.css';\n\nexport default function Portfolio() {\n  return (\n    <section className={styles.projects}>\n      ${jsx}\n    </section>\n  );\n}\n`);
    console.log('Successfully converted');
  } else {
    console.log('No matches found for projects section');
  }
} catch (e) {
  console.error(e);
}
