import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ahaybzcmpcuhjlavnpln.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nWHvtntUuZeU4vRfpoOHLQ_l4T0oa6t";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const SUPABASE_URL = "https://ahaybzcmpcuhjlavnpln.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nWHvtntUuZeU4vRfpoOHLQ_l4T0oa6t";
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

    let sec = 15;

    claimBtn.disabled = true;
    status.innerHTML = "⏳ Wait " + sec + " seconds...";

    let timer = setInterval(() => {

        sec--;

        status.innerHTML = "⏳ Wait " + sec + " seconds...";

        if (sec <= 0) {

            clearInterval(timer);

            claimBtn.disabled = false;

            status.innerHTML = "✅ Now click Claim Reward.";

        }

    },1000);

};

claimBtn.onclick = () => {

    balance += reward;
    todayEarn += reward;
    adsWatched++;

    balanceText.innerHTML = balance + " ৳";
    adsCount.innerHTML = adsWatched;
    todayEarnText.innerHTML = todayEarn;

    claimBtn.disabled = true;

    status.innerHTML = "🎉 Reward Added Successfully!";

};
