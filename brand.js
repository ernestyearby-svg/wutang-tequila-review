export const officialGlobe = new URL('./wu-tang-tequila-globe.png', import.meta.url).href;
export function mountBrandIdentity() {
  document.querySelectorAll('[data-brand-identity]').forEach(node => {
    const image = document.createElement('img');
    image.src = officialGlobe; image.alt = 'Wu-Tang Brands official globe mark';
    image.width = 1254; image.height = 1254;
    const name = document.createElement('span');
    name.className = 'brand-name'; name.append('WU-TANG');
    const subtitle = document.createElement('small'); subtitle.textContent = 'TEQUILA';
    name.append(subtitle); node.replaceChildren(image, name);
  });
}
mountBrandIdentity();
