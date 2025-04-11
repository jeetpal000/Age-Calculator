let birthdateInput = document.getElementById('birthdate');
let button = document.getElementById('button');
let years = document.getElementById('years');
let months = document.getElementById('months');
let days = document.getElementById('days');

button.addEventListener('click', getAge);

function getAge(){
    let birthDate = birthdateInput.value;
    if(!birthDate){
        return alert("Please select your birhdate!!");
    }
        const age = calculateAge(new Date (birthDate));
        if(age.years<0){
            alert("please enter a correct birthdate");
            birthdateInput.value = "";
            return;
        }
    
        years.innerText = age.years.toString().padStart(2, '0');
        months.innerText = age.months.toString().padStart(2, '0');
        days.innerText = age.days.toString().padStart(2, '0');
        birthdateInput.value = "";
    
}
function calculateAge(){
let currentDate = new Date();
let birthdate = new Date(birthdateInput.value); // By defualt value is string manually change it to date formate for calculation.

let getYear = currentDate.getFullYear()-birthdate.getFullYear(); // Subtract currentyear to birthyear 
let getMonth = currentDate.getMonth()-birthdate.getMonth();  // subtract currentmonth to birthmonth
let getDay = currentDate.getDate()- birthdate.getDate(); // Subtract currentday to birthday

// condition check if month is less than zero or equal zero and again month is less than zero than i will do one year minus and add one year in month 
if(getMonth<0 || getMonth===0&&getMonth<0){
    getYear--;
    getMonth+=12;
}

// here check if day is less than zero after subtracting than  
if(getDay<0){
    let previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    getDay += previousMonth.getDate();
    getMonth--;
}
return{years:getYear, months:getMonth, days:getDay};
}

