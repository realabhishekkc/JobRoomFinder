/**
 * Sets the theme class before first paint to avoid a flash. Reads a saved
 * choice, else falls back to the OS preference. Runs inline in <head>.
 */
export function ThemeScript() {
  const js = `(function(){try{var s=localStorage.getItem('theme');var d=s? s==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark', d);}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
