export async function api(url: string, options?: RequestInit) {
    const res = await fetch(`http://localhost:8000${url}`, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });

    if (!res.ok) {
        let message = `Error ${res.status}`;
        try {
            const data = await res.json();
            if (Array.isArray(data.detail)) {
                message = data.detail[0]?.msg || message;
            } else if (typeof data.detail === 'string') {
                message = data.detail;
            }
        } catch (_) {}
        throw new Error(message);
    }

    return res.json(); // если всё ок — вернёт JSON
}
