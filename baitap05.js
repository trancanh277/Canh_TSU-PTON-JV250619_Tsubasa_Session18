const studentList = document.getElementById("studentList");
const addBtn = document.getElementById("addBtn");
const search = document.getElementById("search");

let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents(list = students) {
  studentList.innerHTML = "";
  list.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.className}</td>
      <td>
        <button class="action-btn edit" onclick="editStudent(${index})">Sửa</button>
        <button class="action-btn delete" onclick="deleteStudent(${index})">Xóa</button>
      </td>
    `;
    studentList.appendChild(row);
  });
}

addBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const className = document.getElementById("class").value.trim();

  if (!name || !age || !className) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (editIndex === -1) {
    students.push({ name, age, className });
  } else {
    students[editIndex] = { name, age, className };
    editIndex = -1;
    addBtn.textContent = "Thêm sinh viên";
  }

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("class").value = "";

  saveToLocalStorage();
  renderStudents();
});

function deleteStudent(index) {
  students.splice(index, 1);
  saveToLocalStorage();
  renderStudents();
}

function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("age").value = student.age;
  document.getElementById("class").value = student.className;
  editIndex = index;
  addBtn.textContent = "Cập nhật";
}

search.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(keyword)
  );
  renderStudents(filtered);
});

renderStudents();
