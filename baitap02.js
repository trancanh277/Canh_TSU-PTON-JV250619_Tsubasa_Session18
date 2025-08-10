// let products = [
//     {
//         id: 1, name: "Milk", count: 100
//     },
//     {
//         id: 2, name: "Orange", count: 100
//     },
//     {
//         id: 3, name: "Butter", count: 100
//     }];


// let doituongA ={
//     id: 4, name: "Ege", count: 100
// }
// products.push(doituongA);
// console.log(products);
// products.splice(1, 1);
// console.log(products);
// let index = products.findIndex(products => products.id === 3);
// if(index !== -1) {
//     products[index].count = 0;
// }
// console.log(products);
// let keyword = "Butter";
// let findName = products.find(products => products.name === keyword);
// if(findName){
//     console.log(findName);
// }
// else{
//     console.log("Không có dữ liệu bạn tìm kiếm");
// }

let arr = [
  { name: "HTML", complete: false },
  { name: "CSS", complete: false },
  { name: "Basic of Javascript", complete: false },
  { name: "Node package Manager (npm)", complete: false },
  { name: "Git", complete: false }
];
function showArr() {
    arr.forEach((arr, index) => {
        console.log(`${i + 1}. ${arr.name}`);
        console.log(`complete: ${arr.complete}`)
    });
}
while(true) {
    let input = prompt("Nhập C / R / U / D / E:").toUpperCase();
    if(input === " C") {
        let newArr = prompt("Nhập tên khóa học mới:");
        arr.push({name: newArr, complete: false});
        showArr();
    }
    else if (input === "R") {
        showArr();
    }
    else if (input === "U") {
        let oldName = prompt("Nhập tên khóa học muốn update:");
        let updateName = arr.find(c => c.name.toLowerCase() === oldName.toLowerCase());
        if(updateName){
            updateName.name = prompt("Nhập tên mới:");
            updateName.complete = confirm("Đã hoàn thành? OK = true / Cancel = false");
            showArr();
        }
    }
    else if (input === "d") {
        let delName = prompt("Nhập tên khóa học muốn xóa:");
        let index = arr.find(c => c.name.toLowerCase() === delName.toLowerCase());
        if (index !== -1){
            arr.splice(index, 1);
            showArr();
        }
        else {
            console.log("Không tìm thấy khóa học!");
        }
    }
    else if ( input === "E") {
        console.log("Cảm ơn bạn đã đến với Rikkei Academy!");
    break;
    }
    else {

    }console.log("Lệnh không hợp lệ!");
}