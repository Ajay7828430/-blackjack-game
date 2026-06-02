let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")
let message=""
let sum=0
let cards=[]
let isAlive=false
let hasBlackJack=false
function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1
    if(randomCard>=10){
        return 10
    }
    else if(randomCard===1){
        return 11
    }
    else{
        return randomCard
    }
}

function startGame(){
    if(sum===0){
        let firstCard=getRandomCard()
        let secondCard=getRandomCard()
        cards=[firstCard,secondCard]
        cardsEl.textContent+=firstCard+" "+secondCard+" "
        sum=firstCard+secondCard
        sumEl.textContent+=sum
        renderGame()
    }    
}

function renderGame(){
    
    if(sum<=20){
        message="you are in the game"
        messageEl.textContent=message
        isAlive=true
    }
    else if(sum===21){
        message="you got blackjack"
        messageEl.textContent=message
        hasBlackJack=true
    }
    else{
        message="you are out of the game"
        messageEl.textContent=message
        isAlive=false
    }
}

function newCard(){
    let anotherCard=getRandomCard()
    cards.push(anotherCard)
    if(hasBlackJack===false && isAlive===true){
        sum=0
        for(i=0;i<cards.length;i++){
            if(i===(cards.length-1)){
            cardsEl.textContent+=cards[i]+" "
            }
            sum+=cards[i]
            sumEl.textContent="Sum: "+sum
        }
    renderGame()
    }
}

function reset(){
    cards=[]
    sum=0
    cardsEl.textContent="Cards: "+cards
    sumEl.textContent="Sum: "
    messageEl.textContent="Want to play a round?"
    isAlive=false
    hasBlackJack=false
}