const SHOP_DOMAIN = ""; 
const API_TOKEN = "";  //PRIVATE API TOKEN
const SHOPIFY_PRODUCT_ID = 1283682;
const PLATFORM = "shopify";

const reviews = [
    {
        name: "Sneha Kapoor",
        email: "sneha.k88@gmail.com",
        rating: 5,
        title: "Absolute essential",
        body: "I didn't think I needed this, but honestly, I used everything in the box. A life saver for recovery.",
    },
    {
        name: "Sneha Kapoor",
        email: "sneha.k88@gmail.com",
        rating: 5,
        title: "Absolute essential",
        body: "I didn't think I needed this, but honestly, I used everything in the box. A life saver for recovery.",
    },
]

// ================= HELPERS =================
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function normalizeEmail(rawEmail, index) {
    if (typeof rawEmail === "string" && rawEmail.includes("@")) {
        // make unique per run to avoid duplicates
        return rawEmail.trim().toLowerCase().replace("@", `+seed${index}@`);
    }
    return `seed_${Date.now()}_${index}@example.com`;
}

// ================= MAIN =================
async function seedReviews() {
    console.log(`🚀 Seeding ${reviews.length} reviews\n`);

    for (let i = 0; i < reviews.length; i++) {
        const r = reviews[i];

        // 🔒 map to EXACT API shape
        const payload = {
            shop_domain: SHOP_DOMAIN,
            platform: PLATFORM,
            id: SHOPIFY_PRODUCT_ID, // remove if want to post to shop
            email: normalizeEmail(r.email, i),
            name: r.name?.trim() || "Anonymous",
            reviewer_name_format: "",
            rating: Number(r.rating) || 5,
            title: r.title || "",
            body: r.body || ""
        };

        try {
            const res = await fetch(
                `https://judge.me/api/v1/reviews?api_token=${API_TOKEN}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                }
            );

            if (!res.ok) {
                const errorText = await res.text();
                console.error(`❌ FAILED [${i + 1}]`, res.status, errorText);
                continue;
            }

            const data = await res.json();
            console.log(`✅ SUCCESS [${i + 1}] Review ID:`, data.review?.id);

            await sleep(400);

        } catch (err) {
            console.error(`🔥 ERROR [${i + 1}]`, err.message);
        }
    }

    console.log("\n🎉 Done");
}

seedReviews();


