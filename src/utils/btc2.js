export default async function getcat2() {
    const res1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const resp1 = await res1.json()
    return resp1.time.updated
}