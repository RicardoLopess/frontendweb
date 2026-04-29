
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'frontendweb',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/frontendweb"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 552, hash: 'a71d360e49470fb77d5e365d9021a3843a4ddd8198663cf5150442666911d21b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 895, hash: 'da17cf621f837d22e391c67d45740324536106ada51f2079e2eb75f9b34ac633', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8550, hash: 'f953923b020013c4f7be29505a96bcea976ad9dccaadb65c883f2668f726fc10', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZLRHFWXW.css': {size: 648, hash: 'MU9y+2UZ7ig', text: () => import('./assets-chunks/styles-ZLRHFWXW_css.mjs').then(m => m.default)}
  },
};
