//Main
const finResult= document.querySelector(".fin-result");
function resMsg(msg){
    finResult.innerHTML=msg;
}
// for 2nd
var firAngle=Math.floor(Math.random() * 60)+30;
var secAngle=Math.floor(Math.random() * 60)+30; 

// start
const btnNext= document.querySelector(".btn-next");
const mainMenu= document.querySelector(".main-menu");
const startMenu= document.querySelector(".start-menu");
const workImage= document.querySelector("#work-image");


btnNext.addEventListener("click",()=>{
    startMenu.style.display="none";
    mainMenu.style.display="flex";
})

// 1: Is it a triangle
const triCheck= document.querySelector("#triangle-check");
const angA= document.querySelector(".ang1-1");
const angB= document.querySelector(".ang1-2");
const angC= document.querySelector(".ang1-3");
const btnSum= document.querySelector(".btn-ang-sum");
const tab1TriCheck= document.querySelector(".tab-1-tri-check");
triCheck.addEventListener("click",()=>{
    resMsg(``);
    tab1TriCheck.style.display="block";
    tab6Area.style.display="none"; tab5Hypo.style.display="none"; tab2TriAng.style.display="none"; tab3AngType.style.display="none";tab4SideType.style.display="none";tab7Quiz.style.display="none";workImage.style.display="flex";
})
btnSum.addEventListener("click",()=>{
    var sum=Number(angA.value)+Number(angB.value)+Number(angC.value);
    if(sum===180){
    resMsg(`Triangle can be formed with entered angles: ${Number(angA.value)}°, ${Number(angB.value)}° & ${Number(angC.value)}°`);
    }else{
        resMsg(`Triangle can not be formed with entered angles: ${Number(angA.value)}°, ${Number(angB.value)}° & ${Number(angC.value)}°`);
    }
})

// 2: Find 3rd angle
const triAng= document.querySelector("#triangle-angle");
const ang1= document.querySelector("#ang2-1");
const ang2= document.querySelector("#ang2-2");
const ang3= document.querySelector("#ang2-3");
const btnFind= document.querySelector(".btn-ang-find");
const tab2TriAng= document.querySelector(".tab-2-tri-ang");
triAng.addEventListener("click",()=>{
    resMsg(``);
    tab2TriAng.style.display="block";
    tab6Area.style.display="none"; tab5Hypo.style.display="none";tab1TriCheck.style.display="none"; tab3AngType.style.display="none";tab4SideType.style.display="none";tab7Quiz.style.display="none";workImage.style.display="flex";
    ang1.innerHTML=`First Angle: ${firAngle}°`;
    ang2.innerHTML=`Second Angle: ${secAngle}°`;
})
btnFind.addEventListener("click",()=>{
    var thirdAng=180-firAngle-secAngle;
    if(ang3.value===thirdAng){
    resMsg(`Your ans is Correct, ${thirdAng}° will form a triangle with ${firAngle}° & ${secAngle}°`);
    }else{
        resMsg(`Your ans is Incorrect, ${thirdAng}° will form a triangle with ${firAngle}° & ${secAngle}°`)
    }
})

//********Code for asking 2 numbers and computer will return the third one************ */
// const triAng= document.querySelector("#triangle-angle");
// const ang1= document.querySelector(".ang2-1");
// const ang2= document.querySelector(".ang2-2");
// const btnFind= document.querySelector(".btn-ang-find");
// const tab2TriAng= document.querySelector(".tab-2-tri-ang");
// triAng.addEventListener("click",()=>{
//     resMsg(``);
//     tab2TriAng.style.display="block";
//     tab6Area.style.display="none"; tab5Hypo.style.display="none";tab1TriCheck.style.display="none"; tab3AngType.style.display="none";tab4SideType.style.display="none";
// })
// btnFind.addEventListener("click",()=>{
//     var third=180-(Number(ang1.value)+Number(ang2.value));
//     console.log(third);
//     resMsg(`Third angle must be = ${third} to form a triangle with ${Number(ang1.value)} & ${Number(ang2.value)}`);
// })

// 3: Quiz:Obtuse, Acute
const angType= document.querySelector("#angle-type");
const ques3A= document.querySelector("#ques3-A");
const ques3B= document.querySelector("#ques3-B");
const ques3C= document.querySelector("#ques3-C");
const ques3D= document.querySelector("#ques3-D");
const btn3quiz= document.querySelector(".btn-quiz3");
const tab3AngType= document.querySelector(".tab-3-ang-type");
angType.addEventListener("click",()=>{
    resMsg(``);
    tab3AngType.style.display="inline-block";
    tab6Area.style.display="none"; tab5Hypo.style.display="none";tab1TriCheck.style.display="none";tab2TriAng.style.display="none";tab4SideType.style.display="none";tab7Quiz.style.display="none";workImage.style.display="flex";
})
btn3quiz.addEventListener("click",()=>{
    if(ques3A.value==="a"&&ques3B.value==="r"&&ques3C.value==="o"&&ques3D.value==="a"){
        resMsg(`Yeah,You are right! Correct Ans is 1:a, 2:r, 3:o, 4:a`);
    }else{
        resMsg(`Oops,You are wrong! Correct Ans is 1:a, 2:r, 3:o, 4:a`);
    }
    })

// 4: Quiz:Equilateral, Isosceles
const sideType= document.querySelector("#side-type");
const ques4A= document.querySelector("#ques4-A");
const ques4B= document.querySelector("#ques4-B");
const ques4C= document.querySelector("#ques4-C");
const ques4D= document.querySelector("#ques4-D");
const btn4quiz= document.querySelector(".btn-quiz4");
const tab4SideType= document.querySelector(".tab-4-side-type");
sideType.addEventListener("click",()=>{
    resMsg(``);
    tab4SideType.style.display="inline-block";
    tab6Area.style.display="none"; tab5Hypo.style.display="none";tab1TriCheck.style.display="none";tab2TriAng.style.display="none";tab3AngType.style.display="none";tab7Quiz.style.display="none";workImage.style.display="flex";
})
btn4quiz.addEventListener("click",()=>{
    if(ques4A.value==="i"&&ques4B.value==="e"&&ques4C.value==="s"&&ques4D.value==="i"){
        resMsg(`Yeah,You are right! Correct Ans is 1:i, 2:e, 3:s, 4:i`);
    }else{
        resMsg(`Oops,You are wrong! Correct Ans is 1:i, 2:e, 3:s, 4:i`);
    }
    })    


// 5: Hyotenuse
const hypoCalc= document.querySelector("#hypo-calc");
const base5= document.querySelector(".base5");
const altitude5= document.querySelector(".altitude5");
const calcHypo= document.querySelector(".calc-hypo");
const tab5Hypo= document.querySelector(".tab-5-hypo");
hypoCalc.addEventListener("click",()=>{
    resMsg(``);
    tab5Hypo.style.display="block"; 
    tab6Area.style.display="none"; tab1TriCheck.style.display="none";tab2TriAng.style.display="none";tab3AngType.style.display="none";tab4SideType.style.display="none";tab7Quiz.style.display="none";workImage.style.display="flex";
})
calcHypo.addEventListener("click",()=>{
    var b=base5.value*base5.value;
    var h=altitude5.value*altitude5.value;
    var hypo= Math.sqrt(b+h).toFixed(2);
    resMsg(`Hypotenuse value is ${hypo} of a triangle with other sides as ${base5.value} & ${altitude5.value}`)
})

// 6: Area
const areaCalc= document.querySelector("#area-calc");
const base6= document.querySelector(".base6");
const altitude6= document.querySelector(".altitude6");
const calcArea= document.querySelector(".calc-area");
const tab6Area= document.querySelector(".tab-6-area");
areaCalc.addEventListener("click",()=>{
    resMsg(``);
    tab6Area.style.display="block";
    tab5Hypo.style.display="none"; tab1TriCheck.style.display="none";tab2TriAng.style.display="none";tab3AngType.style.display="none";tab4SideType.style.display="none";tab7Quiz.style.display="none";
})
calcArea.addEventListener("click",()=>{
    var area=0.5*base6.value*altitude6.value;
    resMsg(`Area of a triangle is equal to  ${area} with base=${base6.value} & height= ${altitude6.value}`)
})

// 7: Quiz
const actQuiz= document.querySelector("#act-quiz");
const tab7Quiz= document.querySelector(".tab-7-quiz");
const quizBtn= document.querySelector("#quiz-btn");
const quizForm= document.querySelector("#quiz-form");
actQuiz.addEventListener("click",()=>{
    resMsg(``);
    workImage.style.display="none";
    tab7Quiz.style.display="block";
    tab1TriCheck.style.display="none";tab2TriAng.style.display="none";tab3AngType.style.display="none";tab4SideType.style.display="none";tab5Hypo.style.display="none"; tab6Area.style.display="none";
})
const correctAnswer= ["rig","48","obt","iso","set2"];
quizBtn.addEventListener("click",()=>{
    var score=0;
    var index=0;
    const formAns= new FormData(quizForm);
    for(let value of formAns.values()){
        if(value==correctAnswer[index]){
            score++;
        }
    index++;
    }
    resMsg(`Your Final score is ${score}/5`)
})
