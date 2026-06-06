async function updateMarketData() {

  const data = {
    sp500: "+0.42%",
    nasdaq: "+0.71%",
    dow: "+0.28%",
    nikkei: "-0.15%",
    hangseng: "+0.33%",
    shanghai: "+0.12%",
    crude: "$92.40",
    gold: "$3,410",
    silver: "$35.10",
    usdinr: "85.12",
    vix: "14.2",
    giftnifty: "24,820"
  };

  set("giftnifty", data.giftnifty);
  set("vix", data.vix);
  set("sp500", data.sp500);
  set("nasdaq", data.nasdaq);
  set("dow", data.dow);
  set("nikkei", data.nikkei);
  set("hangseng", data.hangseng);
  set("shanghai", data.shanghai);
  set("crude", data.crude);
  set("gold", data.gold);
  set("silver", data.silver);
  set("usdinr", data.usdinr);
}

function set(id,value){
  const el=document.getElementById(id);
  if(el) el.innerText=value;
}

updateMarketData();
