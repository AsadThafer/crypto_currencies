const BASE='https://api.coingecko.com/api/v3';
const KEY=import.meta.env.VITE_COINGECKO_DEMO_KEY;
const HEADERS=KEY?{'x-cg-demo-api-key':KEY}:{};
const cache=new Map();
export async function request(path,ttl=60000){
  const existing=cache.get(path);
  if(existing && Date.now()-existing.time<ttl) return existing.data;
  const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),12000);
  try{
    const response=await fetch(BASE+path,{headers:HEADERS,signal:controller.signal});
    if(!response.ok){if(response.status===429)throw new Error('CoinGecko rate limit reached. Please wait a minute and retry.');throw new Error(`CoinGecko request failed (${response.status}).`)}
    const data=await response.json();cache.set(path,{data,time:Date.now()});return data;
  }finally{clearTimeout(timer)}
}
export const getMarkets=()=>request('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d',90000);
export const getGlobal=()=>request('/global',120000);
export const getHistory=(id,days)=>request(`/coins/${encodeURIComponent(id)}/market_chart?vs_currency=usd&days=${days}`,120000);
