const currDate = document.querySelector('.left');
const dateOfMonth = document.querySelector('.days');
const dayOfMonth = document.querySelector('.weeks');
const prevNextIcon = document.querySelectorAll('.right span');

let listMonth = ['January', 'February', 'March', 'April', 'Mei', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let listDay = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();


let calenderInformation = (monthNow)=>{
    //get day
    let temp2 = "";
    for (let i = 0; i < listDay.length; i++) {
        text = listDay[i].substring(0,3)
        temp2 += `<li id ="${text}">${text}</li>`
    }
    dayOfMonth.innerHTML = temp2;

    //get year and month 
    currDate.innerText = `${listMonth[month]} ${year}`

    let temp = "";

    //first day off month
    let getFirstDayOfMonth = new Date(year, month, 1).getDay();
    //last day of prev month
    let getLastDateOfPrevMonth = new Date(year, month,0).getDate();
    for (let i = getFirstDayOfMonth; i > 0; i--) {
        temp += `<li class="inactive">${getLastDateOfPrevMonth - i + 1}</li>`
    }

    //last day of month
    let getLastDayMonth = new Date(year, month+1,0).getDate();
    //gat date each month

    for (let i = 1; i <= getLastDayMonth; i++) {  
        if(i == dateNow && month === monthNow){
            temp += `<li class="active">${i}</li>`
        } else{
            temp += `<li>${i}</li>`
        }
    }

    //fill the blank
    let totalData = getLastDayMonth + getFirstDayOfMonth;
    for (let i = 1; i <= 42 - totalData; i++) {
        temp += `<li class="inactive">${i}</li>`
    }

    dateOfMonth.innerHTML = temp;
}

let dateNow = date.getDate();
let monthNow = date.getMonth();
calenderInformation(monthNow);

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", function(){
        month = icon.id === "next" ? month+1 : month-1;
        calenderInformation(monthNow);
    });
});




