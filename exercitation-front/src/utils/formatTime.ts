 const formateTime = (dateTime:any)=>{
    let date = new Date(dateTime)
    let y = date.getFullYear()
let m:number|string= date.getMonth() + 1
m = m < 10 ? ('0' + m) : m
let d :number|string= date.getDate()
d = d < 10 ? ('0' + d) : d
const time =  y + '-' + m + '-' + d;
return time
 }

export default formateTime

