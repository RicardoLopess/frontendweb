
export default {
  basePath: 'https://ricardolopess.github.io/frontendweb',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
