const form = document.querySelector("#record-form");
const recordsBody = document.querySelector("#records-body");
const recordCount = document.querySelector("#record-count");
const feedback = document.querySelector("#form-feedback");

const statusClasses = {
    Pending: "status-pending",
    "In review": "status-review",
    Complete: "status-complete"
};

function createCell(value) {
    const cell = document.createElement("td");
    cell.textContent = value;
    return cell;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const fullName = formData.get("fullName").trim();
    const email = formData.get("email").trim();
    const recordDate = formData.get("recordDate");
    const status = formData.get("status");

    const row = document.createElement("tr");
    row.append(
        createCell(fullName),
        createCell(email),
        createCell(recordDate)
    );

    const statusCell = document.createElement("td");
    const statusBadge = document.createElement("span");
    statusBadge.className = `status ${statusClasses[status]}`;
    statusBadge.textContent = status;
    statusCell.append(statusBadge);
    row.append(statusCell);
    recordsBody.append(row);

    recordCount.textContent = `(${recordsBody.rows.length})`;
    form.reset();
    feedback.textContent = "Record validated and added to this sample table. It has not been saved or sent.";
    form.querySelector("#full-name").focus();
});

form.addEventListener("reset", () => {
    feedback.textContent = "";
});
