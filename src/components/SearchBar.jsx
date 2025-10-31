import React, { useState } from "react";

export default function SearchBar({ onSearch, initial = "" }) {
    const [q, setQ] = useState(initial);

    function submit(e) {
        e.preventDefault();
        if (!q.trim()) return;
        onSearch(q.trim());
    }

    return (
        <form onSubmit={submit} className="w-full max-w-xl mx-auto my-6">
            <div className="flex gap-2">
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Type an ingredient (e.g., chicken, tomato)"
                    className="flex-1 px-4 py-3 rounded-md border focus:outline-none"
                    aria-label="ingredient"
                />
                <button
                    type="submit"
                    className="px-4 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700"
                >
                    Search
                </button>
            </div>
        </form>
    );
}
