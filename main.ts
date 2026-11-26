import { mkdirSync, writeFileSync } from "node:fs";

const firstHalf = "Corporate Mascot Costume ";
const secondHalf = "Sweat Auditor";
const title = firstHalf + secondHalf;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", title, "utf8");
