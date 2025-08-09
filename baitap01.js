// let thongtin = {
//     ten: "Nguyen Van A",
//     tuoi: 19,
//     diachi: "Phu Yen",
//     sdt: "0378332097",
// };
// console.log(thongtin["ten"]);
// console.log(thongtin["tuoi"]);
// console.log(thongtin["diachi"]);
// console.log(thongtin["sdt"]);


let student = {
    id: 1,
    name: "Nguyen Van A",
    gender: "nam",
    age: 20,
    mark: 8,
};
let newStudent = {
    id: 2,
    name: "Nguyen Thi B",
    gender: "nu",
    age: 24,
    mark: 10,
};
let students = [student, newStudent];
console.log(students);
let lastIndex = students.length - 1;
let thongtin = students[lastIndex];
// console.log("Id:", thongtin.id);
// console.log("Tên:", thongtin.name);
// console.log("Giới tính:", thongtin.gender);
// console.log("Tuổi", thongtin.age);
// console.log("Điểm:", thongtin.mark);

function printmark(user) {
    let maxMark = user[0];
    for (i = 1; i < user.length; i++) {
        if (user[i].mark > maxMark.mark) {
            maxMark = user[i];
        }
    }
    return maxMark;
}
let best = printmark(students);

console.log("Id:", best.id);
console.log("Tên:", best.name);
console.log("Giới tính:", best.gender);
console.log("Tuổi", best.age);
console.log("Điểm:", best.mark);