console.log("script loaded");

const API = "http://localhost:5000";

// ➕ ADD USER
async function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please enter both fields");
        return;
    }

    await fetch(API + "/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    });

    // clear inputs after adding
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    loadUsers();
}

// ❌ DELETE USER
async function deleteUser(id) {
    await fetch(API + "/delete/" + id, {
        method: "DELETE"
    });

    loadUsers();
}

// 🔄 LOAD / REFRESH USERS
async function loadUsers() {
    const res = await fetch(API + "/users");
    const data = await res.json();

    document.getElementById("list").innerHTML =
        data.map(user =>
            `<li>
                <strong>${user.name}</strong><br>
                ${user.email}<br>
                <button class="delete-btn" onclick="deleteUser(${user.id})">
                    Delete
                </button>
            </li>`
        ).join("");

    // ✅ CLEAR INPUT FIELDS ON REFRESH
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}

// initial load
loadUsers();