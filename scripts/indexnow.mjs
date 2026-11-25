#!/usr/bin/env node
/**
 * Ping IndexNow for 2240 Speed Shop URLs. No Bing login required.
 * Usage: node scripts/indexnow.mjs [url ...]
 * With no args, reads out/sitemap.xml if present, else fetches the live sitemap.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const HOST = "2240speedshop.com";
const KEY = 'yrf27guttnj047keb0l53xtg67px0x54';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

function urlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

async function collectUrls(cli) {
  if (cli.length) return cli;
  const local = resolve("out/sitemap.xml");
  if (existsSync(local)) {
    return urlsFromSitemap(readFileSync(local, "utf8"));
  }
  const res = await fetch("https://2240speedshop.com/sitemap.xml");
  if (!res.ok) throw new Error(`Failed to fetch live sitemap: ${res.status}`);
  return urlsFromSitemap(await res.text());
}

const urlList = [...new Set(await collectUrls(process.argv.slice(2)))];
if (!urlList.length) {
  console.error("No URLs to submit.");
  process.exit(1);
}

// IndexNow accepts at most a few thousand URLs per request; this site is well under that.
const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

const text = await res.text();
if (!res.ok && res.status !== 202 && res.status !== 200) {
  console.error(`IndexNow failed: ${res.status} ${text}`);
  process.exit(1);
}
console.log(`IndexNow ${res.status}: submitted ${urlList.length} URLs for ${HOST}`);
