var firstName = "Ismingiz nima?";
var lastName = "Familiyangiz nima?";
var contry = "Tug'ulgan yurtingiz?";
var sity = "Viloyatingiz?";
var hobby ="Sevimli mashg'ulotingiz?";
var bookReading = "Kitob o'qishni yoqtirasizmi?";
var text2 = "Dasturlashga qiziqasizmi?";
var text3 = "Qaysi dasturlash tillarini bilasiz?";
var text4 = "Qaysi dasturlash tilini yoqtirasiz?";
var text5 = "Dasturlash bo'yicha qayerda taxsil olgasiz?";
var text6 = "Dasturlash soxasida qancha vaqt o'qigansiz?";
var text8 = "Javoblaringiz uchun kattakon raxmat";

var textStart = alert("Hush kelibsiz!");
var question1 = prompt(firstName).trim()
var question2 = prompt(lastName).trim()
var question3 = prompt(contry).trim()
var question4 = prompt(sity).trim()
var question6 = prompt(hobby).trim()
var question7 = prompt(bookReading).trim()
var question8 = prompt(text2).trim()
var question9 = prompt(text3).trim()
var question10 = prompt(text4).trim()
var question11 = prompt(text5).trim()
var question12 = prompt(text6).trim()
var textEnd = alert(text8)

var elContainerInner = document.querySelector('.container-inner');
var elTitle = document.createElement("h2");
var elText = document.createElement("p");

elTitle.setAttribute("class", "title");
elText.setAttribute("class", "text");

var answer7 = ""
if(question7 === "ha" || question7 === "yoqtiraman") {
    answer7 = " va kitob o'qishni ham yoqtiraman"
}
else{
    answer7 = ""
}

var answer8 = ``
if(question8 === "ha" || question8 === "qiziqaman") {
    answer8 = `Men dasturlash soxasiga ham qiziqaman hozirda ${question9} dasturlash tillarini bilaman va yoqtirgan dasturlash tilim ${question10}. Men dasturlash bo'yicha ${question12} vaqt ${question11} taxsil olganman`
}
else{
    answer8 = ``
}

elTitle.textContent = "O'zingiz haqingizda qisqacha ma'lumot";
elText.textContent = `Men ${question2} ${question1}. Men ${question3}ning ${question4} viloyatida tug'ulganman. Mening yoqtirgan mashg'ulotim  ${question6} ${answer7}. ${answer8}`;

elContainerInner.appendChild(elTitle);
elContainerInner.appendChild(elText);
console.log(elContainerInner);
