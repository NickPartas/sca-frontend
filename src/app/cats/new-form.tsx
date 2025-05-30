"use client";
import { useState } from "react";
import { api } from "@/lib/api";

export default function NewCatForm() {
    const [f, set] = useState({ name:"", years:"", breed:"", salary:"" });
    const [err, setErr] = useState("");
    const input = (k: keyof typeof f, type="text") =>
        <input required type={type} value={f[k]}
               onChange={e=>set({ ...f, [k]:e.target.value })}
               placeholder={k} className="border px-1 py-0.5 rounded mr-2 w-32" />;

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault(); setErr("");
        try {
            await api("/cats", {
                method:"POST",
                body: JSON.stringify({
                    name: f.name,
                    years_experience: +f.years,
                    breed: f.breed,
                    salary: +f.salary,
                }),
            });
            location.reload();          // простая перезагрузка
        } catch (e:any) { setErr(e.message); }
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-wrap items-center gap-2">
            {input("name")}{input("years","number")}{input("breed")}{input("salary","number")}
            <button className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
            {err && <span className="err-messeage">{err}</span>}
        </form>
    );
}
