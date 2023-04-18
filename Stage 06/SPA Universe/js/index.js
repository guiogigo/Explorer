import {Router} from "./router.js"
const router = new Router()

router.add("/home", "/pages/home.html")
router.add("/explorer", "/pages/explorer.html")
router.add("/universe", "/pages/universe.html")
router.add(404, "/pages/404.html")

router.handle()

window.route = () => router.route()
window.onpopstate = () => router.route()