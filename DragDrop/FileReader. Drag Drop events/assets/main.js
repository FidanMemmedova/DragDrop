// let box = document.querySelector(".box");
// let images = document.querySelectorAll("img");
// [...images].forEach(image => {
//     image.ondragstart = (ev) => ev.dataTransfer.setData("id", image.id)
// });
// console.log(images);

// box.ondragover = (ev) => ev.preventDefault();
// box.ondrop = (ev) => {
//     ev.preventDefault();
//     let id = ev.dataTransfer.getData("id");
//     box.append(document.getElementById(id));
// }
let uploadItem = document.querySelector(".upload-item");
let uploadIcon = document.querySelector(".upload-item i");
let input = document.querySelector("input");
let table = document.querySelector(".table");
let tbody = document.querySelector("tbody");
let thead = document.querySelector("thead");
//nextsibling=input
uploadIcon.onclick = function() {
    input.click();
};
uploadItem.ondragover = (ev) => {
    ev.preventDefault();
};
uploadItem.ondrop = (ev) => {
    ev.preventDefault();
    uploadImg(ev.dataTransfer.files);
};
input.onchange = (ev) => {
    uploadImg(ev.target.files); // let{files}=ev.target (destruction)
    // console.log(ev.target.files);
};
// let tbody = document.createElement("tbody");
// table.append(tbody);
let index = 1;
function uploadImg(files) {
    [...files].forEach(function(file) {
        let fileReader = new FileReader();
        fileReader.onloadend = function(ev) {
            let tablerow = `<tr>
                    <th scope="col">${index++}</th>
                    <td><img src="${ev.target.result}" alt="image" width="200px draggable="false"</td>
                    <td>${file.name}</td>
                    <td>${file.size}</td>
                    <td><button class = "deleteBtn" onclick="removeRow(this)">Delete Row</button></td>
                        </tr>`;
            // console.log(ev.target.result);
            // let tr = document.createElement("tr");
            table.lastElementChild.innerHTML += tablerow;
            // let th = document.createElement("th");
            // th.innerText = index + 1;
            // // tr.append(th);
            // tbody.append(tr);
        }
        fileReader.readAsDataURL(file);
    })
    table.style.visibility = "visible";

}
//---------TASK1----------------------
// function a() {
if (tbody.innerText.length == 0) {
    table.style.visibility = "hidden";
}
// if ($('#tbody').length == 0) {
//     table.style.display = "none";
// }

//---------TASK2----------------------
let counter;
function removeRow(removeIcon) {
    let row = removeIcon.parentNode.parentNode;
    // console.log(row);
    table.lastElementChild.removeChild(row);
    if (tbody.innerText.length == 0) {
        table.style.visibility = "hidden";
    }
}