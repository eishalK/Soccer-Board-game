let countEl= document.getElementById("count_el")
let countEl2=document.getElementById("count_el2")
let Win=document.getElementById("Winner")
let Tim= document.getElementById("Timer")
let count1=0
let count2=0

function incrementP1(){
    count1+=1
    countEl.textContent= "Score: "+ count1
}   
function IncrementP1(){
    count1+=2
    countEl.textContent="Score: "+count1
    
}
function incrementP2(){
    count2+=1
    countEl2.textContent="Score: "+ count2

}
function IncrementP2(){ 
    count2+=2
    countEl2.textContent="Score: "+count2

}
function winner_Player(){
    if(count1==count2){
        Win.textContent="The match is a tie"
    } else if(count1>count2){
        Win.textContent="Winner: Player 1"
        
    }else{
        Win.textContent="Winner: Player 2"
    }
}
function Timer(){
    let sec=50
    let timer=setInterval(function(){
       Tim.textContent="Timer: 00: "+sec
        sec--
        if(sec<0){
            clearInterval(timer)
            winner_Player()
            save()
        }
    }, 1000)

}
function save(){
    count1=0
    count2=0
    countEl.textContent="Score: "+count1
    countEl2.textContent="Score: "+count2

}