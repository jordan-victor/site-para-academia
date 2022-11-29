function enviar(){
    window.alert("Ficha enviada")
    var mensagem = document.createElement("p")
    mensagem.innerText = "Ficha enviada com sucesso"
}

function calcular(){
    var peso = document.getElementById("peso")
    var p = Number(peso.value)

    var altura = document.getElementById("altura")
    var a = Number(altura.value)

    var res = document.getElementById("resultado")

    var nome = document.getElementById("nome")

    var imc = (p/a**2)

    res.innerHTML = `Seu IMC vale ${imc.toFixed("2")}`
    
    if (p===0 || a===0){
        res.innerHTML += " <br>Campo do peso ou altura vazios<br>preencha todos os campos"
    }

    else{
        if (imc<18.5){
            res.innerHTML += `<br> Peso Baixo`
        }
    
        else if (imc >= 18.5 && imc <= 24.9){
            res.innerHTML += `<br> Peso Normal`
        }
    
        else if (imc >= 25 && imc <= 29.9){
            res.innerHTML += `<br> Sobrepeso`
        }
    
        else if (imc >= 30 && imc <= 34.9){
            res.innerHTML += `<br> Obesidade Grau I`
        }

        else if (imc >= 35 && imc <= 39.9){
            res.innerHTML += `<br> Obesidade Grau II`
        }
    
        else{
            res.innerHTML += `<br> Obesidade Grau III`
        } 
    }
}