import {Router} from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/sobre", "/pages/sobre.html")
router.add("/contato", "/pages/contato.html")
router.add(404, "/pages/404.html")

router.handle()

window.route = () => router.route()
window.onpopstate = () => router.route()


