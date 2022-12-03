function Time(){
    
    let dt = new Date();
    let hour = dt.getHours()
    let min = dt.getMinutes()
    let sec = dt.getSeconds()
    if(hour>=12){
        document.querySelector("#session").textContent = "PM"
    }
    else{
        document.querySelector("#session").textContent = "AM"

    }



    if(hour>12){
        hour = hour-12
    }
    
    document.querySelector("#hour").textContent = `${hour}`;
    document.querySelector("#min").textContent= `${min}`;
    document.querySelector("#sec").textContent=`${sec}`;

}


setInterval(Time,1000)  // To make clock dynamic , caling the function at each interval of 1 second.



function fun(){
    document.querySelector("#alarm-btn").style.background="linear-gradient(to left,#6E54EC 25%,#CB52F8,#FC5EFF,#F1A7C5)"



    let wakeTime = document.querySelector("#drop-menu1").value;
    let lunchTime = document.querySelector("#drop-menu2").value;
    let napTime = document.querySelector("#drop-menu3").value;
    let nightTime = document.querySelector("#drop-menu4").value;

    let wakeArr = wakeTime.split(" ")
    let lunchArr = lunchTime.split(" ")
    let napArr = napTime.split(" ")
    let sleepArr = nightTime.split(" ")


    

    // time message box
    document.querySelector(".data").style.display="block"
    
    document.querySelector(".wakeData").textContent=`Wake Up Time : ${wakeTime}`;
    document.querySelector(".lunchData").textContent=`Lunch Time : ${lunchTime}`;
    document.querySelector(".napData").textContent=`Nap Time : ${napTime}`;
    document.querySelector(".nightData").textContent=`Night Time : ${nightTime}`;



    // image changing according to current time

    let currentTime = document.querySelector("#hour").textContent;
    let currentSession = document.querySelector("#session").textContent

    if(Number(currentTime)>=Number(wakeArr[0]) && Number(currentTime)<Number(wakeArr[3]) && currentSession===wakeArr[4]) {

        document.querySelector(".img").src="./assest/chant.jpg "
        document.querySelector(".msg1").textContent = "HAPPY KRISHNA CONCIOUS MORNING!! WAKE UP!!"
        document.querySelector(".msg2").innerHTML = "CHANT HARE KRISHNA AND BE HAPPY!! <br> हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे। हरे राम हरे राम, राम राम हरे हरे।। "
    }

    else if(Number(currentTime)>=Number(lunchArr[0]) && Number(currentTime)<Number(lunchArr[3]) && currentSession===lunchArr[4]){
        document.querySelector(".img").src="./assest/krishnaPrasad.jpg "
        document.querySelector(".msg1").textContent = "HAPPY KRISHNA CONCIOUS AFTERNOON!! TAKE PRASADAM!!"
        document.querySelector(".msg2").textContent = "Relishing the sacred food of Krishna prasadam purifies our heart and protects us from falling into illusion."


    }
    else if(Number(currentTime)>=Number(napArr[0]) && Number(currentTime)<Number(napArr[3]) && currentSession===napArr[4]){
        document.querySelector(".img").src="./assest/gita.jpg "
        document.querySelector(".msg1").textContent = "HAPPY KRISHNA CONCIOUS EVENING!! READ BHAGWAD GEETA!!"
        document.querySelector(".msg2").textContent = "नैनं छिद्रन्ति शस्त्राणि नैनं दहति पावक: । न चैनं क्लेदयन्त्यापो न शोषयति मारुत ॥"
        
    }
    else if(Number(currentTime)>=Number(sleepArr[0]) && Number(currentTime)<Number(sleepArr[3]) && currentSession===sleepArr[4]){
        document.querySelector(".img").src="./assest/sleep.jpg ";
        document.querySelector(".img").style.height= "250px"
        document.querySelector(".msg1").textContent = "HAPPY KRISHNA CONCIOUS NIGHT!!"
        document.querySelector(".msg2").textContent = "यदग्रे चानुबन्धे च सुखं मोहनमात्मनः। निद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम्।।18.39।।"
        
    }
    
    


    



setInterval(fun,1000)  // To make the page dynamic according to time set, calling the function at each interval of 1 second.



}


document.querySelector("#alarm-btn").addEventListener("click",fun);