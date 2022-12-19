let HomeScore = 0
let GuestScore = 0


let HomeEl =document.getElementById("home")
let GuestEl = document.getElementById("guest")

  

function HomeAddOne(){
   HomeEl.textContent = HomeScore +=1    
}

function HomeAddTwo(){
     HomeEl.textContent  = HomeScore +=2
}

function HomeAddThree(){
    HomeEl.textContent = HomeScore +=3 
}

function GuestAddOne(){
  GuestEl.textContent = GuestScore +=1       
}

function GuestAddTwo(){ 
    GuestEl.textContent = GuestScore +=2   
}
function GuestAddThree(){
    GuestEl.textContent = GuestScore +=3   
}

