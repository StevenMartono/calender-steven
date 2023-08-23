const currDate = document.querySelector('.left');
const dateOfMonth = document.querySelector('.days')

let listMonth = ['January', 'February', 'March', 'April', 'Mei', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = new Date();
const month = date.getMonth();
const year = date.getFullYear();

//get year and month 
currDate.innerText = `${listMonth[month]} ${year}`

//last day of month
let getLastDayMonth = new Date(year, month+1,0).getDate();

//gate date each month
for (let i = 1; i <= getLastDayMonth; i++) {    
    dateOfMonth.innerHTML += `<li>${i}</li>`
}


//Keperluan console agar lebih cepat
console.log();



