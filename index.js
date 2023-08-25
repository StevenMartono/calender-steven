const currDate = document.querySelector('.left');
const dateOfMonth = document.querySelector('.days')
const dayOfMonth = document.querySelector('.weeks');
const prevNextIcon = document.querySelectorAll('.right span');

let listMonth = ['January', 'February', 'March', 'April', 'Mei', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let listDay = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];

let date = new Date();
console.log(date);
let month = date.getMonth();
console.log(month)
let year = date.getFullYear();
console.log(year)
let iseng = new Date(2023, month-1,0).getDate();
let iseng2 = new Date(2023, 6,0).getDate();
console.log(iseng);
console.log(iseng2);
console.log('batas')

let calenderInformation = ()=>{

    //get year and month 
    currDate.innerText = `${listMonth[month]} ${year}`

    let temp = "";

    //first day off month
    let getFirstDayOfMonth = new Date(year, month, 1).getDay();
    //last day of prev month
    let getLastDateOfPrevMonth = new Date(year, month,0).getDate();
    console.log(getFirstDayOfMonth, getLastDateOfPrevMonth);

    for (let i = getFirstDayOfMonth; i > 0; i--) {
        temp += `<li class="inactive">${getLastDateOfPrevMonth}</li>`
    }
    // if(getFirstDayOfMonth != 6){
    // }
    
    //last day of month
    let getLastDayMonth = new Date(year, month+1,0).getDate();
    
    //gat date each month
    for (let i = 1; i <= getLastDayMonth; i++) {    
        temp += `<li>${i}</li>`
    }
    dateOfMonth.innerHTML = temp;

    //get day
    let temp2 = "";
    for (let i = 0; i < listDay.length; i++) {
        text = listDay[i].substring(0,3)
        temp2 += `<li id ="${text}">${text}</li>`
    }
    dayOfMonth.innerHTML = temp2;


}
calenderInformation();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", function(){
        month = icon.id === "next" ? month+1 : month-1;
        calenderInformation();
    });
});




//Keperluan console agar lebih cepat
// console.log();



