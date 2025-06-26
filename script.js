document.querySelector(".btn1").addEventListener("click", () => {
    let n1 = parseInt(document.querySelector(".inp1").value)
    let n2 = parseInt(document.querySelector(".inp2").value)
    document.querySelector(".btn1").style.backgroundColor = "grey"
    document.querySelector(".dec").innerHTML = "Choosing..."
    document.querySelector(".num").innerHTML = "?"
    setTimeout(() => {
        // let sum= parseInt(n1)+parseInt(n2)
        // document.querySelector(".num").innerHTML=`${sum}`
        let rand = Math.random()
        let reqrand = parseInt(n1 + rand * (n2 + 1 - n1))
        document.querySelector(".dec").innerHTML = `A Random number between ${n1} and ${n2} (both inclusive) is : `
        document.querySelector(".num").innerHTML = `${reqrand}`
        console.log(rand);

    }, 1500);
    setTimeout(() => {
        document.querySelector(".btn1").style.backgroundColor = "yellow"
    }, 1500);



})
