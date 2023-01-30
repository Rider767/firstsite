const monetization = new Monetize(document.querySelector('meta[name="monetization"]'))

let total = 0
let scale
monetization.addEventListener("monetization", event => { console.log("Payment started")
    const monetizationDisplay = document.getElementById("monetization-info")
    monetizationDisplay.textContent = "Monitized"
    monetizationDisplay.classList.add("monetized")
    monetizationDisplay.classList.remove("not-monitized")
    
    document.getElementById("exclusive").classList.remove("hidden")
    
    const {amount, assetCode, assetScale} = e
    
    if (total === 0) {
        scale = assetScale 
        document.getElementById("currency"). innerText = assetCode 
    }
    
    total += Number(amount)
    
    const formattedTotal = (total * Math.pow(10, -scale)).toFixed(scale)
    document.getElementById("total").innerText = formattedTotal 




 })
    
    

