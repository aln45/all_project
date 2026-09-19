function checkTyping() {

    const original = "Frontend development is fun and creative.";

    const typed = document.getElementById("input").value.trim();

    const result = document.getElementById("result");

    if (typed === original) {
        result.innerHTML = "✅ Perfect Typing!";
    } else {
        result.innerHTML = "❌ Try Again!";
    }

}