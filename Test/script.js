document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("tasks");
    function createItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        const del = document.createElement("button");
        del.textContent = "🗑";
        del.className = "delete-btn";
        del.addEventListener("click", function (e) { e.stopPropagation(); li.remove(); });
        li.addEventListener("click", function () { li.classList.toggle("done"); });
        li.appendChild(del);
        return li;
    }
    addBtn.addEventListener("click", function () {
        const v = taskInput.value.trim();
        if (!v) { alert("من فضلك أدخل نص المهمة"); return; }
        taskList.appendChild(createItem(v));
        taskInput.value = "";
        taskInput.focus();
    });
    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") addBtn.click();
    });
});