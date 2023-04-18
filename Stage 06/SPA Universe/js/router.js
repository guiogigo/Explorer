
export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    
    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#page').innerHTML = html
      })
      .then( () => {
        
        let UniverseBackground = pathname === "/universe"
        let ExplorerBackground = pathname === "/explorer"
      
        if(UniverseBackground) {
          document.querySelector('#body').style.setProperty('background-image', 'var(--img-Universe)');
          document.querySelector('#universePage').classList.add('pageSelected')
          document.querySelector('#explorerPage').classList.remove('pageSelected')
          document.querySelector('#homePage').classList.remove('pageSelected')
        } else if(ExplorerBackground) {
          document.querySelector('#body').style.setProperty('background-image', 'var(--img-Explorer)');
          document.querySelector('#universePage').classList.remove('pageSelected')
          document.querySelector('#explorerPage').classList.add('pageSelected')
          document.querySelector('#homePage').classList.remove('pageSelected')
        } else {
          document.querySelector('#body').style.setProperty('background-image', 'var(--img-Home)');
          document.querySelector('#universePage').classList.remove('pageSelected')
          document.querySelector('#explorerPage').classList.remove('pageSelected')
          document.querySelector('#homePage').classList.add('pageSelected')
        }
      })
  }
}