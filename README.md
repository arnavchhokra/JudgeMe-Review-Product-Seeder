# Judge.me Product Review Seeder (Shopify)

A Node.js script to **programmatically seed reviews directly to Shopify products** using the Judge.me API.

This script correctly attaches reviews to **individual products** (not just shop-level reviews) by resolving and using **Judge.me’s internal product IDs**, which is required but poorly documented.

---

## 🚀 Features

- ✅ Attaches reviews to **specific Shopify products**
- ✅ Automatically resolves **Judge.me internal product IDs**
- ✅ Works with existing review data (no schema changes needed)
- ✅ Auto-fixes missing or duplicate emails
- ✅ Rate-limited to avoid Judge.me API throttling
- ✅ Safe error handling and logging
- ✅ Node 18+ (native `fetch`, no dependencies)

---

## ❗ Why This Script Exists

Judge.me’s API allows creating reviews, but **reviews will silently attach at shop level** unless you provide the **internal Judge.me product ID** — not the Shopify product ID or handle.

This script handles that missing step correctly.

---

## 📦 Requirements

- Node.js **18 or later**
- A Shopify store with Judge.me installed
- Judge.me **API token** (Admin → Settings → Developer)

---

## ⚙️ Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/arnavhhokra/JudgeMe-Review-Product-Seeder.git
cd judgeme-review-product-seeder.
