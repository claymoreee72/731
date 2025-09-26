use client;

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const tokenomicsData = [
  { name: "Community Rewards", value: 40 },
  { name: "Team & Development", value: 20 },
  { name: "Liquidity & Listings", value: 20 },
  { name: "Partnerships", value: 10 },
  { name: "Reserve", value: 10 },
];

const COLORS = ["#FFD700", "#7C3AED", "#3B82F6", "#10B981", "#F43F5E"];

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-r from-purple-600 to-indigo-700">
        <motion.h1
          className="text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          [COIN NAME]
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          The Future of Decentralized Finance 🚀
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#buy"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300"
          >
            Buy Now
          </a>
          <a
            href="#whitepaper"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black"
          >
            Read Whitepaper
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">About [COIN NAME]</h2>
        <p className="text-gray-300 leading-relaxed">
          [COIN NAME] is a decentralized digital currency designed to provide
          fast, low-cost, and secure transactions worldwide. Built on
          [Blockchain], it empowers communities through transparency and
          innovation.
        </p>
      </section>

      {/* Tokenomics with Chart */}
      <section id="tokenomics" className="bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="h-80">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="space-y-4">
              {tokenomicsData.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-gray-700 p-4 rounded-xl"
                >
                  <span
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: COLORS[i] }}
                  ></span>
                  <p>
                    <strong>{item.name}:</strong> {item.value}%
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Roadmap</h2>
        <div className="grid gap-6">
          <motion.div
            className="p-6 bg-gray-800 rounded-xl"
            whileHover={{ scale: 1.05 }}
          >
            Q1 2025 – Token launch & community building
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800 rounded-xl"
            whileHover={{ scale: 1.05 }}
          >
            Q2 2025 – Exchange listings & staking
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800 rounded-xl"
            whileHover={{ scale: 1.05 }}
          >
            Q3 2025 – Ecosystem expansion
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800 rounded-xl"
            whileHover={{ scale: 1.05 }}
          >
            Q4 2025 – NFT & DeFi integration
          </motion.div>
        </div>
      </section>

      {/* How to Buy */}
      <section id="buy" className="bg-gray-800 py-20 px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">How to Buy</h2>
        <ol className="max-w-3xl mx-auto space-y-6 list-decimal list-inside text-gray-300">
          <li>Download a wallet (MetaMask, Trust Wallet, OKX Wallet).</li>
          <li>Buy ETH/USDT/BNB from an exchange.</li>
          <li>Connect wallet to [DEX Name].</li>
          <li>Swap for [COIN].</li>
        </ol>
      </section>

      {/* Community */}
      <section id="community" className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
        <div className="flex justify-center gap-8 text-lg">
          <a href="#" className="hover:text-yellow-400">Telegram</a>
          <a href="#" className="hover:text-yellow-400">Twitter/X</a>
          <a href="#" className="hover:text-yellow-400">Discord</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-800 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">FAQ</h2>
          <div className="space-y-6">
            <motion.div
              className="p-6 bg-gray-700 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <strong>What is [COIN NAME]?</strong>
              <p className="text-gray-300">
                A decentralized cryptocurrency powering the future of finance.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-700 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <strong>Where can I buy it?</strong>
              <p className="text-gray-300">
                On [Uniswap / PancakeSwap / OKX / Binance].
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-10 text-center">
        <p>📧 contact@[coinname].org</p>
        <p className="text-gray-500 mt-2">
          © 2025 [COIN NAME]. All rights reserved.
        </p>
      </footer>
    </main>
  );
}