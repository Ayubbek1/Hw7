let name = "Alex"
let money = 10000
let account = 7777

let names = prompt("Как вас зовут")

if(names===name){
    let moneys= +prompt("Номер счета?")
    if(moneys===account){
        let nal = +prompt("Сколько обналичить")
        if(nal>money){
            alert("Денег не хватает")
        }else if(nal<=money){

            alert("Все отлично")
            alert("Ты снял " + String(nal) + "\n" + "Осталось " + String(money - nal) )       
        }

    }else if(moneys!==account){
        alert("Досвидули")
    }
}else if(names !== name){
    alert("Досвидули")
}

let imya = prompt("Имя:").toLowerCase()
let people = 1
let mesto = 10

if(mesto-people>0){
    if(imya[0]==="a" ){
        let age = +prompt("Возраст:")
        if(age>=20 && age<=40){
            let dengi = +prompt("Скок денег:")
            if(dengi>=100){
                alert("Welcome")
            }else{
                alert("Досвидули")
            }
            
        }else{
            alert("Досвидули")
        }
        
    }else{
        alert("Досвидули ваше имя не начинается на A")
    }    
}else{
    alert("Нету мест")
}

