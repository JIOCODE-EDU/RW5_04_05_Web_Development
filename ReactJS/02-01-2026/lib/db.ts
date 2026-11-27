// lib/db.js -> a very simple "database" using a JSON file.
// Real projects use MongoDB / MySQL, but a file is easy for students to understand.
import fs from "fs";
import path from "path";
import type { Student } from "@/lib/types";

const filePath = path.join(process.cwd(), "data", "students.json");

export function readStudents(): Student[] {
  try {
    const text = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(text || "[]") as Student[];
  } catch (error) {
    return []; 
  }
}

export function writeStudents(list: Student[]) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2));
}
