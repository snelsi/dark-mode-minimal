# Gatsby Dark Mode (minimal example)

This codebase creates an "MVP" version of rehydration-safe, flicker-free Dark Mode. It's described in more detail on my blog:

https://joshwcomeau.com/gatsby/dark-mode/

You can also play with it live (though, fair warning, it's not a terribly exciting application): https://dark-mode.snelsi.now.sh/

---

Notable files:

• themes/               - Folder with css themes<br />
• gatsby-browser.js     - Here we globally import our css themes<br />
• gatsby-ssr.js         - Script for client initial theme choose<br />
• scripts/useTheme.js   - Hook, reactive to current theme value<br />
• src/components/ThemeContext.js   - Component that updates html 'data-theme' attribute on theme change
