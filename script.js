let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    // Append the image to the paragraph
    inputBox.appendChild(img);

    // Append the paragraph to the notesContainer
    notesContainer.appendChild(inputBox);

    updateStorage(); // Call updateStorage after creating a new note
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        
        let notes = document.querySelectorAll(".input-box");

        notes.forEach((nt) => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});
