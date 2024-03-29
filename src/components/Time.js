const Time = ({timestamp}) => {
    const date = new Date(timestamp)
    const hours = '0'+date.getHours()
    const minutes = '0'+date.getMinutes()
    const seconds = '0'+date.getSeconds()
    const day = '0'+date.getDate()
    const month = '0'+(date.getMonth() + 1)
    const year = date.getFullYear()
    return `${day.substr(-2)}/${month.substr(-2)}/${year} ${hours.substr(-2)}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}

export default Time