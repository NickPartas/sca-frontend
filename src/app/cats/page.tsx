import { api } from "@/lib/api";
import NewCatForm from "./new-form";
import Row from "./row";

export default async function CatsPage() {
    const cats = await api("/cats") as any[];
    return (
        <main className="p-6 space-y-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold">Spy Cats</h1>
            <NewCatForm />
            <table className="w-full text-sm border">
                <thead className="bg-gray-100">
                <tr><th>Name</th><th>Breed</th><th>XP</th><th>Salary</th><th /></tr>
                </thead>
                <tbody>{cats.map(c => <Row key={c.id} cat={c} />)}</tbody>
            </table>
        </main>
    );
}
