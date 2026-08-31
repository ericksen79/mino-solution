const fs = require('fs');

try {
  let html = fs.readFileSync('_legacy_site/cv.html', 'utf8');
  
  let cssMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  let css = cssMatch ? cssMatch[1] : '';
  
  let bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
  let body = bodyMatch ? bodyMatch[1] : '';
  
  let jsx = body
    .replace(/class=/g, 'className=')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script>[\s\S]*?<\/script>/g, '')
    .replace(/<img([^>]*)>/g, '<img$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/<input([^>]*)>/g, '<input$1 />')
    .replace(/style="([^"]*)"/g, (match, p1) => {
      let styles = p1.split(';').filter(s => s.trim() !== '').map(s => {
        let [key, ...vals] = s.split(':');
        let val = vals.join(':');
        if (!key || !val) return '';
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        return `'${key}': '${val.trim().replace(/'/g, "\\'")}'`;
      }).join(', ');
      return `style={{ ${styles} }}`;
    })
    .replace(/<svg ([^>]*)>/g, (match, p1) => {
      let newAttrs = p1
        .replace(/stroke-width/g, 'strokeWidth')
        .replace(/aria-hidden/g, 'ariaHidden')
        .replace(/fill-rule/g, 'fillRule')
        .replace(/clip-rule/g, 'clipRule');
      return `<svg ${newAttrs}>`;
    });

  jsx = jsx.replace(/onclick="[^"]*"/g, '');
  
  fs.mkdirSync('src/app/[locale]/cv', { recursive: true });
  fs.writeFileSync('src/app/[locale]/cv/CVStyles.css', css);
  
  let simpleComponentCode = `
'use client';
import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import './CVStyles.css';

export default function CVPage() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState('cv');

  useEffect(() => {
    document.body.classList.remove('es', 'en');
    document.body.classList.add(locale);
    return () => {
      document.body.classList.remove('es', 'en');
    };
  }, [locale]);

  return (
    <div className="cv-container" style={{ background: 'var(--paper)', minHeight: '100vh', paddingTop: '60px' }}>
      ${jsx}
    </div>
  );
}
`;

  let finalJsx = simpleComponentCode
    .replace(/<button className="tab active"[^>]*>/g, '<button className={`tab ${activeTab === "cv" ? "active" : ""}`} onClick={() => setActiveTab("cv")}>')
    .replace(/<button className="tab"[^>]*>/g, '<button className={`tab ${activeTab === "refs" ? "active" : ""}`} onClick={() => setActiveTab("refs")}>')
    .replace(/<div id="cv" className="panel active">/g, '<div id="cv" className={`panel ${activeTab === "cv" ? "active" : ""}`}>')
    .replace(/<div id="refs" className="panel">/g, '<div id="refs" className={`panel ${activeTab === "refs" ? "active" : ""}`}>');

  fs.writeFileSync('src/app/[locale]/cv/page.tsx', finalJsx);
  console.log('Successfully generated CV page');
  
} catch (e) {
  console.error(e);
}
