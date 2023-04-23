import router from "@/router/index"
const RoutesByRole =(routes: any[],name:string)=>{
  const roleName = localStorage.getItem("role_name")
  const r= (routes: any[],name:string)=>{
    routes.forEach((item)=>{
      if(item.meta.roles.includes(roleName)){
        if(item.children) {
          router.addRoute(name,{path:item.path,name:item.path,meta:item.meta,component:item.component})
          r(item.children,item.name)
        }
        else {
          router.addRoute(name,item)
        }
      }
    })
  }
  r(routes,name)
}

export default RoutesByRole
