/*=========================================================
    REN AI MODEL V3 - OPTIMIZED RUNTIME ENGINE
=========================================================*/
"use strict";

const REN = { version: "3.0", model: "REN AI MODEL", build: "V3", status: "ONLINE" };

// Shortcut DOM (Hanya dipanggil sekali saat load untuk menghemat memori)
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// Helper Fungsi Angka Acak
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Ambil semua elemen DOM yang sering diperbarui
const el = {
    clock: $("#clock"), status: $("#status"), systemVersion: $("#systemVersion"),
    cpu: $("#cpuValue"), gpu: $("#gpuValue"), memory: $("#memoryValue"), storage: $("#storageValue"),
    network: $("#networkValue"), latency: $("#latencyValue"), accuracy: $("#accuracyValue"),
    quantum: $("#quantumValue"), temp: $("#tempValue"), server: $("#serverValue"), mode: $("#modeValue"),
    signal: $("#signalValue"), bandwidth: $("#bandwidthValue"), power: $("#powerValue"),
    aiLoad: $("#aiLoadValue"), packet: $("#packetValue"), consoleBody: $("#consoleBody"),
    security: $("#securityValue"), networkEvent: $("#networkEvent"), activity: $("#activityValue"),
    uptime: $("#uptimeValue"), centerTitle: $("#centerTitle"), warning: $("#warningText"),
    scanStatus: $("#scanStatus"), targetLock: $("#targetLock"), thinking: $("#thinkingText"),
    signalNode: $("#signalNode"), coreEnergy: $("#coreEnergy"), confidence: $("#confidenceValue"),
    bootMessage: $("#bootMessage"), globalNode: $("#globalNode"), diagnostic: $("#diagnosticValue"),
    cloud: $("#cloudValue"), process: $("#processValue"), thread: $("#threadValue"), cache: $("#cacheValue"),
    response: $("#responseValue"), encrypt: $("#encryptValue"), score: $("#scoreValue"),
    bootStatus: $("#bootStatus"), dateValue: $("#dateValue"), systemID: $("#systemID"),
    sessionValue: $("#sessionValue"), buildValue: $("#buildValue"), hudCanvas: $("#hudCanvas")
};

// Data Pools
const lists = {
    status: ["AI ONLINE", "QUANTUM READY", "SERVER CONNECTED", "MODEL STABLE", "GPU ACTIVE", "DATA SECURED", "NETWORK NORMAL", "SYSTEM HEALTHY"],
    modes: ["LEARNING", "ANALYZING", "PREDICTING", "OPTIMIZING", "TRAINING", "PROCESSING"],
    logs: ["AI Kernel Initialized", "GPU Compute Ready", "Quantum Engine Synced", "Security Scan Complete", "Memory Allocation Stable", "Cloud Node Connected", "Neural Network Updated", "Firewall Integrity Verified", "Data Encryption Enabled", "Prediction Engine Running", "Background Optimization Complete", "Realtime Analysis Active", "Vision Module Online", "AI Learning Cycle Finished", "Packet Verification Successful", "Database Synchronization Complete"],
    security: ["SECURE", "PROTECTED", "VERIFIED", "MONITORING"],
    netEvents: ["Network Sync", "Cloud Upload", "Packet Routed", "Gateway Connected", "Node Optimized", "Data Cached"],
    activity: ["Scanning Face", "Analyzing Pattern", "Training Dataset", "Generating Prediction", "Optimizing Network", "Rendering Vision", "Processing Language", "Monitoring System"],
    titles: ["REN AI MODEL", "NEURAL ENGINE", "QUANTUM CORE", "VISION SYSTEM", "AI DASHBOARD"],
    warnings: ["SYSTEM NORMAL", "AI OPTIMIZING", "MEMORY CLEANUP", "NETWORK STABLE", "SECURITY VERIFIED"],
    scans: ["Scanning Face...", "Detecting Object...", "Analyzing Emotion...", "Reading Environment...", "Tracking Motion...", "Building Neural Map..."],
    thinking: ["Predicting...", "Reasoning...", "Learning...", "Rendering...", "Processing...", "Optimizing..."],
    boot: ["Loading Neural Kernel...", "Checking GPU Cluster...", "Synchronizing AI Memory...", "Connecting Quantum Core...", "Initializing Vision Engine...", "Loading Security Layer...", "Starting Runtime Engine...", "REN AI MODEL READY"],
    encrypt: ["AES-256", "RSA-4096", "SHA-512", "Quantum Lock"],
    diagnostic: ["System Healthy", "No Error Found", "AI Stable", "Memory Verified", "Runtime Stable", "GPU Temp Normal", "Security Protected"],
    cloud: ["ONLINE", "SYNCING", "CONNECTED", "ACTIVE"]
};

// State Animasi & Waktu
let lastTime = 0;
let timers = { fast: 0, medium: 0, slow: 0, clock: 0 };
let counters = { boot: 0, status: 0, mode: 0, security: 0, title: 0, uptime: 0, antsOffset: 0 };

// Canvas Setup
let ctx = null;
if (el.hudCanvas) {
    ctx = el.hudCanvas.getContext("2d");
    const resizeCanvas = () => {
        const rect = el.hudCanvas.parentElement.getBoundingClientRect();
        el.hudCanvas.width = rect.width;
        el.hudCanvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
}

// 1. Logika Pembaruan Data (Dipanggil berkala lewat Main Loop untuk performa tinggi)
function updateTextData(timestamp) {
    // --- TIMEOUT CEPAT (Sekitar 1 Detik) ---
    if (timestamp - timers.fast >= 1000) {
        timers.fast = timestamp;
        
        if (el.cpu) el.cpu.textContent = random(28, 96) + "%";
        if (el.gpu) el.gpu.textContent = random(32, 99) + "%";
        if (el.memory) el.memory.textContent = random(41, 98) + "%";
        if (el.latency) el.latency.textContent = random(1, 15) + " ms";
        if (el.packet) el.packet.textContent = random(100000, 999999);
        if (el.process) el.process.textContent = random(1200, 9800);
        if (el.response) el.response.textContent = random(2, 12) + " ms";
        
        // Uptime counter
        counters.uptime++;
        if (el.uptime) {
            const h = String(Math.floor(counters.uptime / 3600)).padStart(2, "0");
            const m = String(Math.floor((counters.uptime % 3600) / 60)).padStart(2, "0");
            const s = String(counters.uptime % 60).padStart(2, "0");
            el.uptime.textContent = `${h}:${m}:${s}`;
        }
        
        // Console Log
        if (el.consoleBody) {
            const line = document.createElement("div");
            line.className = "console-line";
            line.textContent = `[${new Date().toLocaleTimeString()}] ${lists.logs[random(0, lists.logs.length - 1)]}`;
            el.consoleBody.appendChild(line);
            if (el.consoleBody.children.length > 8) el.consoleBody.removeChild(el.consoleBody.firstChild);
            el.consoleBody.scrollTop = el.consoleBody.scrollHeight;
        }
    }

    // --- TIMEOUT SEDANG (Sekitar 2-3 Detik) ---
    if (timestamp - timers.medium >= 2200) {
        timers.medium = timestamp;
        
        if (el.storage) el.storage.textContent = random(45, 99) + " TB";
        if (el.network) el.network.textContent = random(100, 980) + " Mbps";
        if (el.accuracy) el.accuracy.textContent = random(98, 100) + "%";
        if (el.quantum) el.quantum.textContent = random(8000, 9999);
        if (el.temp) el.temp.textContent = random(32, 64) + "°C";
        if (el.bandwidth) el.bandwidth.textContent = random(10, 100) + " Gbps";
        if (el.power) el.power.textContent = random(1200, 2400) + " W";
        if (el.aiLoad) el.aiLoad.textContent = random(60, 100) + "%";
        if (el.confidence) el.confidence.textContent = random(98, 100) + "%";
        
        // Rotasi Teks Status
        if (el.status) el.status.textContent = lists.status[counters.status++ % lists.status.length];
        if (el.mode) el.mode.textContent = lists.modes[counters.mode++ % lists.modes.length];
        if (el.security) el.security.textContent = lists.security[counters.security++ % lists.security.length];
        if (el.activity) el.activity.textContent = lists.activity[random(0, lists.activity.length - 1)];
        if (el.warning) el.warning.textContent = lists.warnings[random(0, lists.warnings.length - 1)];
        if (el.scanStatus) el.scanStatus.textContent = lists.scans[random(0, lists.scans.length - 1)];
        if (el.thinking) el.thinking.textContent = lists.thinking[random(0, lists.thinking.length - 1)];
        if (el.diagnostic) el.diagnostic.textContent = lists.diagnostic[random(0, lists.diagnostic.length - 1)];
        if (el.cloud) el.cloud.textContent = lists.cloud[random(0, lists.cloud.length - 1)];
        
        // Boot Sequence Simulation
        if (el.bootMessage && counters.boot < lists.boot.length) {
            el.bootMessage.textContent = lists.boot[counters.boot++];
        }
    }

    // --- TIMEOUT LAMBAT (Sekitar 5 Detik) ---
    if (timestamp - timers.slow >= 5000) {
        timers.slow = timestamp;
        if (el.server) el.server.textContent = "NODE-" + random(1, 12);
        if (el.centerTitle) el.centerTitle.textContent = lists.titles[counters.title++ % lists.titles.length];
        if (el.globalNode) el.globalNode.textContent = "NODE-" + random(100, 999);
    }
}

// 2. Lingkaran Semut Berjalan Super Smooth & Efisien via Canvas
function drawMarchingAnts() {
    if (!ctx) return;
    ctx.clearRect(0, 0, el.hudCanvas.width, el.hudCanvas.height);

    const cx = el.hudCanvas.width / 2;
    const cy = el.hudCanvas.height / 2;
    const radius = Math.min(el.hudCanvas.width, el.hudCanvas.height) * 0.23;

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    
    ctx.setLineDash([6, 5]); // Panjang badan semut dan jaraknya
    ctx.lineDashOffset = -counters.antsOffset; // Jalankan offset
    
    ctx.strokeStyle = "rgba(0, 255, 255, 0.75)";
    ctx.lineWidth = 1.5;
    ctx.shadowBlur = 8;
    ctx.shadowColor = "cyan";
    
    ctx.stroke();
    ctx.restore();

    counters.antsOffset += 0.4; // Mengatur kecepatan jalan semut (makin kecil makin halus)
    if (counters.antsOffset > 22) counters.antsOffset = 0;
}

// 3. MAIN ANIMATION LOOP (Satu-satunya jantung penggerak dashboard)
function mainLoop(timestamp) {
    // Jalankan kalkulasi data
    updateTextData(timestamp);
    
    // Jalankan rendering semut berjalan
    drawMarchingAnts();
    
    // Ulangi di frame berikutnya (60+ FPS mulus)
    requestAnimationFrame(mainLoop);
}

// 4. SISTEM INISIALISASI AWAL
document.addEventListener("DOMContentLoaded", () => {
    // Jam Realtime
    setInterval(() => {
        if (el.clock) el.clock.textContent = new Date().toLocaleTimeString();
    }, 1000);

    // Setup Info Statis Sekali Jalan
    if (el.systemVersion) el.systemVersion.textContent = `${REN.model} ${REN.build}`;
    if (el.dateValue) el.dateValue.textContent = new Date().toLocaleDateString();
    if (el.systemID) el.systemID.textContent = "REN-" + Math.random().toString(36).substring(2, 10).toUpperCase();
    if (el.sessionValue) el.sessionValue.textContent = Math.floor(Math.random() * 99999999);
    
    // Matikan Loading Screen
    setTimeout(() => {
        const loading = $("#loadingScreen");
        if (loading) {
            loading.style.opacity = "0";
            setTimeout(() => loading.remove(), 600);
        }
        if (el.bootStatus) el.bootStatus.textContent = "SYSTEM READY";
    }, 1500);

    // Efek Hover Panel Interaktif
    $$(".hud-panel").forEach(panel => {
        panel.addEventListener("mouseenter", () => panel.style.transform = "translateY(-4px) scale(1.01)");
        panel.addEventListener("mouseleave", () => panel.style.transform = "");
    });

    // Jalankan Engine Utama
    requestAnimationFrame(mainLoop);
    console.log("%cREN AI DASHBOARD LIGHTWEIGHT ENGINE ACTIVE", "color:#00ffff; font-weight:bold; font-size:14px;");
});