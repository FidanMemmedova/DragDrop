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
    ev.target.value = "";
    // console.log(ev.target.files);
};
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
            table.lastElementChild.innerHTML += tablerow;
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

//---------TASK2----------------------

function removeRow(removeIcon) {
    let row = removeIcon.parentNode.parentNode;
    // console.log(row);
    table.lastElementChild.removeChild(row);
    if (tbody.innerText.length == 0) {
        table.style.visibility = "hidden";
    }
    index = 1;
    let rowIndexs = document.querySelectorAll("tbody>tr>th");
    [...rowIndexs].forEach(item => item.innerText = index++);
    if (rowIndexs.length === 0) {
        table.style.visibility = "hidden";
    }
    index = 1
}
//-------- TASK3-----------
function myFunction() {
    if (tbody.innerText.length == 0) {
        table.style.visibility = "hidden";
    }
}
let removeAll = document.querySelector(".removeall");
removeAll.onclick = () => {
    tbody.innerText = ' ';
    myFunction();
    index = 1;
}