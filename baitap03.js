let todoListDb = [
  {
    id: 1,
    content: "Xin việc ở Google",
    status: true,
  },
  {
    id: 2,
    content: "Mua biệt thự",
    status: true,
  },
  {
    id: 3,
    content: "Cưới vợ",
    status: false,
  },
  {
    id: 4,
    content: "Mua xe hơi",
    status: false,
  },
  {
    id: 5,
    content: "Sinh con",
    status: false,
  },
  {
    id: 6,
    content: "Đi du lịch vong quanh thế giới",
    status: false,
  },
];

let ul = document.getElementById("myUL");
let add = document.getElementById("addBtn");
let input = document.getElementById("myInput");

render();

add.onclick = function () {
  input.value;

  let newTodo = {
    id: todoListDb[todoListDb.length - 1].id + 1,
    content: input.value,
    status: false,
  };

  todoListDb.push(newTodo);

  ul.innerHTML = "";
  render();
  input.value = "";
};

function render() {
  for (let i in todoListDb) {
    let li;
    if (todoListDb[i].status === true) {
      li = `<li data-index=${i} class="list-item checked">
      ${todoListDb[i].content}
      <span class="close">×</span>
      </li>`;
    } else {
      li = `<li data-index=${i} class="list-item">
      ${todoListDb[i].content}
      <span class="close">×</span>
      </li>`;
    }
    ul.innerHTML = ul.innerHTML + li;
  }

  let liList = document.getElementsByClassName("list-item");
  for (let i = 0; i < liList.length; i = i + 1) {
    liList[i].onclick = function () {
      let index = +liList[i].getAttribute("data-index");

      todoListDb[index].status = !todoListDb[index].status;

      ul.innerHTML = "";
      render();
    };
  }

  let spanList = document.getElementsByClassName("close");
  for (let i = 0; i < spanList.length; i = i + 1) {
    spanList[i].onclick = function (event) {
      console.log(spanList[i]);

      event.stopPropagation();

      let deleteIndex = +spanList[i].parentElement.getAttribute("data-index");

      todoListDb.splice(deleteIndex, 1);

      ul.innerHTML = "";
      render();
    };
  }
}
