import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ahaybzcmpcuhjlavnpln.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nWHvtntUuZeU4vRfpoOHLQ_l4T0oa6t";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Telegram Mini App
const tg = window.Telegram.WebApp;
tg.ready();

const user = tg.initDataUnsafe.user;

if (user) {
    console.log("Telegram User:", user);
}

let balance = 0;
let adsWatched = 0;
let todayEarn = 0;

const maxAds = 20;
const reward = 2;

const balanceText = document.getElementById("balance");
const adsCount = document.getElementById("adsCount");
const todayEarnText = document.getElementById("todayEarn");
const status = document.getElementById("status");

const watchBtn = document.getElementById("watchAd");
const claimBtn = document.getElementById("claimReward");

watchBtn.onclick = () => {

    if (adsWatched >= maxAds) {
        status.innerHTML = "❌ Today's ad limit reached.";
        return;
    }

    window.open("https://omg10.com/4/11368110", "_blank");

    setTimeout(() => {
        adsWatched++;
        todayEarn += reward;
        balance += reward;

        adsCount.innerHTML = adsWatched;
        todayEarnText.innerHTML = todayEarn;
        balanceText.innerHTML = balance + " ৳";

        status.innerHTML = "✅ Reward Added";

        if (adsWatched >= maxAds) {
            watchBtn.disabled = true;
        }

        claimBtn.disabled = false;

    }, 15000);
};

claimBtn.onclick = () => {
    status.innerHTML = "🎉 Reward Claimed!";
};
