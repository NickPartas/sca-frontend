"use client";
import { useState } from "react";
import { api } from "@/lib/api";

export default function Row({ cat }: { cat:any }) {
    const [salary, setSalary] = useState(cat.salary);
    const [err, setErr] = useState("");

    async function save() {
        try {
            await api(`/cats/${cat.id}`, {
                method:"PATCH",
                body: JSON.stringify({ salary }),
            });
        } catch (e:any) { setErr(e.message); }
    }

    async function remove() {
        if (!confirm("Delete cat?")) return;
        try {
            await api(`/cats/${cat.id}`, { method:"DELETE" });
            location.reload();
        } catch (e:any) { setErr(e.message); }
    }

    return (
        <tr className="border-t">
            <td className="px-2">{cat.name}</td>
            <td className="px-2">{cat.breed}</td>
            <td className="px-2 text-center">{cat.years_experience}</td>
            <td className="px-2">
                <input type="number" value={salary}
                       onChange={e=>setSalary(+e.target.value)}
                       className="w-24 border px-1" />
                <button onClick={save} className="ml-1 text-xs text-blue-600">Save</button>
            </td>
            <td className="px-2">
                <button onClick={remove} className="text-xs text-red-600">Delete</button>
                {err && <div className="text-red-600 text-xs">{err}</div>}
            </td>
        </tr>
    );
}
