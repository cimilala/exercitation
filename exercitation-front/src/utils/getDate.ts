import { useUserStore } from "@/stores/user";
const getDate = ()=>{
    const userstore = useUserStore()
    const token = localStorage.getItem("token")
    if(token){
      userstore.saveUser()
    }
}
export default getDate
