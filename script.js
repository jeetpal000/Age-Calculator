const button = document.getElementById("btn");
const getyear = document.getElementById("birthdate");
const results = document.getElementById("result");



function calculateAge(){
    const birthdatevalue = getyear.value;
    if(birthdatevalue === ""){
        alert("Please enter your birthdate");
    
    }else{
        const age = getAge(birthdatevalue);
        results.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
 
    }
};

function getAge(birthdatevalue){
    const currentdate = new Date();
    const birthdateDate = new Date(birthdatevalue);
    let age = currentdate.getFullYear() - birthdateDate.getFullYear();
    const  month = currentdate.getMonth() -birthdateDate.getMonth();
    if (month < 0 || (month === 0 && currentdate.getDate() < birthdateDate.getDate())) {
        age--;
    }
    return age;

}
button.addEventListener("click",calculateAge); //

button.addEventListener('mouseover', function() {
button.textContent = "Lesssss Gooooo";
});

button.addEventListener('mouseout', function() {
button.textContent = "Calculate Your Age🤩";
});