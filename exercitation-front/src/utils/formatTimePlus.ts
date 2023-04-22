import dayjs from 'dayjs'
function dateFormat(time:any) {
    // let time = '2020-09-29T18:02:02.000Z'
    time = dayjs(time).format("YYYY-MM-DD HH:mm:ss");
    // console.log(time); // 2020-09-30 02:02:02
    return time
  }
  export {dateFormat}
