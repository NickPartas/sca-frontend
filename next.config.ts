import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    env: {
        NEXT_PUBLIC_API: "http://localhost:8000",   // ← адрес бэкенда
    },
};

export default nextConfig;
