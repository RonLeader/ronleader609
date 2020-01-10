// let i = 5
// while (i <= 70) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
//     i++
// }

// let sum =0;
// for (i =10; i<=100;i++)
// {
//  sum = sum +i
// }
// console.log(sum = sum+i)

// let sum =0;
// for (i = 1; i <= 100; i++) {
// if (i%2==0){
//     console.log (i)
// }
// }

// let sum = 0;
// for (i = 0; i <= 100; i = i + 2) {
//     sum = sum + i
// }
// console.log(sum)

// let sum = 0
// for (let i = 0;  i<=100; i++) {
//     if(i%2 ===0){  
//         sum = sum + i;   
//     }
// }
// console.log(sum)

// let arr = [`Ronaldo`, `Messi`, `Neymar`]
// let nhapten = prompt(`Ban co muon nhap them cau thu khong:`)
// if (nhapten == `N` || nhapten == `n`) {
//     alert(`Good bye!`)
// }
// else if (nhapten ==`y`) {
//     let nhapten1 = prompt(`Ten cau thu muon nhap:`)
//     arr.push(nhapten1)
//     alert(arr)
// }
// else 

// document.getElementById(`click-button:`)
// let name = prompt(`Nhap ten cau thu:`)
// let body = document.body
// body.innerHTML = `<ul id="haha"> </ul>`
// let ul = docoment.getElementById(`haha`)
// ul.innerHTML += `<li>Ronaldo</li>`
// ul.innerHTML += `<li>Messi</li>`
// ul.innerHTML += `<li>Neymar</li>`


let square = document.getElementsByClassName(`square`)[0]
let buttonRight = document.getElementById(`right`)
let position = {
    top: 0,
    left: 0
}

buttonRight.addEventListener(`click`, function () {
    position.left += 10
    square.style.left = position.left + 'px'
})
buttonLeft.addEventListener(`click`, function () {
    position.right += -10
    square.style.right = position.right + 'px'
})
