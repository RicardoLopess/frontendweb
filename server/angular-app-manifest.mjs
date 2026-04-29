
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ricardolopess.github.io/frontendweb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/frontendweb"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 585, hash: '71b865cc8fbbc671197e453b304dd99fee0545681ba36c5155a3b88a2c302072', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 928, hash: 'afbe8c5e65aa1ce6b5c60b0fae98e066607963fd9e177c352f0a9ba41855eb88', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8583, hash: '8f7a143504935a9f99b7aa8189e84ed7932649809c36da29f6696deaf0a2de00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZLRHFWXW.css': {size: 648, hash: 'MU9y+2UZ7ig', text: () => import('./assets-chunks/styles-ZLRHFWXW_css.mjs').then(m => m.default)}
  },
};
