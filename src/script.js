const desc = document.getElementById("desc")
const amount = document.getElementById("amount")

const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")

const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")

const balance = document.getElementById("balance")

let total = 0

incomeBtn.addEventListener("click",()=>{
    let text = desc.value
    let money = amount.value

if (text === "" || money === ""){
    return
}
if (isNaN(money)){
    return
}

let li = document.createElement("li")
li.textContent = text + " - " + money + " kr (Inkomst)"
incomeList.appendChild(li)

total = total + Number(money)
balance.textContent = total

desc.value = ""
amount.value = ""

})

expenseBtn.addEventListener("click", function(){

    let text = desc.value
    let money = amount.value

    if (text === "" || money === ""){
        return
    }

    if (isNaN(money)){
        return
    }

    let li = document.createElement("li")
    li.textContent = text + " - " + money + " kr (Utgift)"
    expenseList.appendChild(li)

    total = total - Number(money)
    balance.textContent = total

    desc.value = ""
    amount.value = ""
})