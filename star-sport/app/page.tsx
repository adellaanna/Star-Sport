
"use client";

import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Running Shoes", category: "Sepatu", price: 299000, icon: "👟", color: "bg-blue-50", tag: "BEST SELLER" },
  { id: 2, name: "Training Jersey", category: "Pakaian", price: 149000, icon: "👕", color: "bg-orange-50", tag: "NEW" },
  { id: 3, name: "Dumbbell Set", category: "Fitness", price: 199000, icon: "🏋️", color: "bg-slate-100", tag: "" },
  { id: 4, name: "Sports Backpack", category: "Aksesori", price: 179000, icon: "🎒", color: "bg-amber-50", tag: "" },
];

const categories = [
  { name: "Semua", icon: "✦" },
  { name: "Sepatu", icon: "👟" },
  { name: "Pakaian", icon: "👕" },
  { name: "Fitness", icon: "🏋️" },
  { name: "Aksesori", icon: "🎒" },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [cart, setCart] = useState(0);
  const [message, setMessage] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        category === "Semua" || product.category === category;
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  function addToCart(name: string) {
    setCart((current) => current + 1);
    setMessage(`${name} ditambahkan ke keranjang`);
    window.setTimeout(() => setMessage(""), 2200);
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-24 text-slate-900">
      <header className="sticky top-0 z-30 bg-[#10243d] text-white shadow-md">
        <div className="mx-auto max-w-lg px-4 pb-4 pt-4">
          <div className="flex items-center justify-between gap-3">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400 text-xl font-black text-[#10243d]">
                S
              </span>
              <span>
                <span className="block text-lg font-black tracking-wide">
                  STARSPORT<span className="text-orange-400">.ID</span>
                </span>
                <span className="block text-[9px] tracking-[0.2em] text-slate-300">
                  SPORTS & LIFESTYLE
                </span>
              </span>
            </a>

            <button
              onClick={() => {
                setMessage(`Keranjang berisi ${cart} barang`);
              }}
              aria-label="Lihat keranjang"
              className="relative rounded-xl p-2 text-2xl hover:bg-white/10"
            >
              🛒
              <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-400 px-1 text-xs font-bold text-slate-950">
                {cart}
              </span>
            </button>
          </div>

          <label className="mt-4 flex items-center gap-2 rounded-xl bg-white px-3 py-3 text-slate-500">
            <span aria-hidden="true">⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari perlengkapan olahraga..."
              aria-label="Cari produk"
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            {search && (
              <button onClick={() => setSearch("")} aria-label="Hapus pencarian">
                ✕
              </button>
            )}
          </label>
        </div>
      </header>

      <div className="mx-auto max-w-lg px-4">
        <section className="relative mt-5 overflow-hidden rounded-3xl bg-[#173b60] p-5 text-white">
          <div className="relative z-10 max-w-[75%]">
            <p className="text-[10px] font-bold tracking-[0.2em] text-orange-300">
              YOUR SPORTS ESSENTIALS
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight">
              LEVEL UP
              <br />
              YOUR GAME.
            </h1>
            <p className="mt-3 text-xs leading-5 text-slate-200">
              Perlengkapan pilihan untuk menemani setiap langkah dan targetmu.
            </p>
            <button
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-5 rounded-xl bg-orange-400 px-4 py-3 text-xs font-extrabold text-[#10243d] active:scale-95"
            >
              BELANJA SEKARANG →
            </button>
          </div>
          <div className="pointer-events-none absolute -right-5 bottom-0 text-[115px] opacity-20">
            ⚽
          </div>
          <div className="pointer-events-none absolute -right-2 top-4 h-28 w-28 rounded-full border-[18px] border-orange-300/20" />
          <div className="absolute bottom-0 left-0 h-1 w-full bg-orange-400" />
        </section>

        <section className="mt-7">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-orange-600">
                FIND YOUR GEAR
              </p>
              <h2 className="mt-1 text-lg font-extrabold">Kategori Pilihan</h2>
            </div>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button
                key={item.name}
                onClick={() => setCategory(item.name)}
                className={`flex min-w-[76px] flex-col items-center gap-2 rounded-2xl border px-3 py-3 text-xs font-semibold transition ${
                  category === item.name
                    ? "border-[#10243d] bg-[#10243d] text-white"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </section>

        <section id="products" className="mt-7 scroll-mt-40">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-orange-600">
                PICKED FOR YOU
              </p>
              <h2 className="mt-1 text-lg font-extrabold">Produk Pilihan</h2>
            </div>
            <span className="text-xs text-slate-500">
              {filteredProducts.length} produk
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div
                  className={`relative flex aspect-square items-center justify-center ${product.color}`}
                >
                  <span className="text-7xl" role="img" aria-label={product.name}>
                    {product.icon}
                  </span>
                  {product.tag && (
                    <span className="absolute left-2 top-2 rounded-md bg-orange-400 px-2 py-1 text-[9px] font-black text-slate-950">
                      {product.tag}
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 rounded-full bg-white/80 px-2 py-1 text-[9px] font-medium text-slate-600">
                    {product.category}
                  </span>
                </div>

                <div className="p-3">
                  <h3 className="truncate text-sm font-bold">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm font-extrabold text-orange-600">
                    {formatPrice(product.price)}
                  </p>
                  <button
                    onClick={() => addToCart(product.name)}
                    className="mt-3 w-full rounded-xl bg-[#10243d] py-2.5 text-xs font-bold text-white transition active:scale-95"
                  >
                    + Tambah
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="rounded-2xl bg-white px-4 py-12 text-center">
              <p className="text-3xl">🔎</p>
              <p className="mt-3 font-bold">Produk tidak ditemukan</p>
              <p className="mt-1 text-sm text-slate-500">
                Coba kata kunci atau kategori lain.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("Semua");
                }}
                className="mt-4 rounded-xl bg-[#10243d] px-4 py-2 text-sm font-bold text-white"
              >
                Reset pencarian
              </button>
            </div>
          )}
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-extrabold">Why Starsport?</p>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            Temukan perlengkapan olahraga pilihan dengan pengalaman belanja
            yang praktis, nyaman, dan mudah dari HP.
          </p>
        </section>
      </div>

      {message && (
        <div
          role="status"
          className="fixed bottom-20 left-1/2 z-50 w-max max-w-[90%] -translate-x-1/2 rounded-xl bg-[#10243d] px-4 py-3 text-center text-sm font-medium text-white shadow-lg"
        >
          {message}
        </div>
      )}

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-3">
          <a href="#" className="flex flex-col items-center gap-1 text-[#10243d]">
            <span className="text-xl">⌂</span>
            <span className="text-[10px] font-bold">Beranda</span>
          </a>
          <button
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="flex flex-col items-center gap-1 text-slate-500"
          >
            <span className="text-xl">▦</span>
            <span className="text-[10px]">Produk</span>
          </button>
          <button
            onClick={() => setMessage(`Keranjang berisi ${cart} barang`)}
            className="flex flex-col items-center gap-1 text-slate-500"
          >
            <span className="text-xl">🛒</span>
            <span className="text-[10px]">Keranjang ({cart})</span>
          </button>
          <button
            onClick={() =>
              setMessage("Fitur akun akan kita buat pada tahap berikutnya.")
            }
            className="flex flex-col items-center gap-1 text-slate-500"
          >
            <span className="text-xl">♙</span>
            <span className="text-[10px]">Akun</span>
          </button>
        </div>
      </nav>
    </main>
  );
}

