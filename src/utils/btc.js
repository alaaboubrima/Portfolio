export default async function getcat() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const resp = await res.json()
    return resp.bpi.USD.rate
}