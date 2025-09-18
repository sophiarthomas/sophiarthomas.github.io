export default function Hero() {
    const handleClick = async () => {
        try {
            const res = await fetch("http://localhost:3000/user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    //    const user = new User
                    name: "Benjamin Thomas",
                    email: "deadbeatnik92@gmail.com",
                    linkedIn: "linkedIn/in/deadbeatnik",
                    age: 60,
                    hobbies: [
                        "drawing",
                        "watching sumo"
                    ]
                })
            })
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(error => console.error('Error:', error));

        } catch (error) {
            console.error("Fetch failed", error);
        }

    };
    return (
        <section className="flex flex-col items-center text-center py-20 bg-[#fff9f1]">
            <h2 className="text-4xl text-[#4b2e2e]/80 font-[Almendra_SC]">Welcome to Soph’s Café ☕</h2>
            <p className="mt-4 text-lg text-[#4b2e2e]/80">
                Serving code brewed with passion
            </p>
            <button onClick={handleClick} className="mt-6 bg-[#a8c686] text-[#4b2e2e] px-6 py-2 rounded-full shadow-md hover:bg-[#f6caca] transition">
                View Menu
            </button>
        </section>
    );
}