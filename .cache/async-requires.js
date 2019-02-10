// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/abelquintero/code/portfolio/abel-portfolio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-jsx": () => import("/Users/abelquintero/code/portfolio/abel-portfolio/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/abelquintero/code/portfolio/abel-portfolio/.cache/data.json")

