async function runScript() {
    const response = await fetch("/test", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
                input: document.getElementById("input").value
            })
    });

    const data = await response.json();
    console.log(data)
    console.log(data.txt);
}

document.querySelector("button").addEventListener("click", runScript);