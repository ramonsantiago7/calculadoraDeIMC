function calcular_IMC(event){
    event.preventDefault()

   let peso = parseFloat(document.querySelector("#peso").value)
   let altura = document.querySelector("#altura").value.trim().replace(/[. ,]/g, "")
   altura = parseFloat(altura)

  
   console.log(peso, altura)
   altura = altura / 100
   
    let imc = (peso / (altura * altura)).toFixed(2)
    console.log(imc)
    
 

    if(!altura){
        document.querySelector(".aviso_altura").innerHTML = "Por favor, preencha este campo!"
    
    }
    
    if(!peso){
        document.querySelector(".aviso_peso").innerHTML = "Por favor, preencha este campo!"
        let peso = document.querySelector("#peso")
        peso.style.margin = "0px"

    }
        
    document.querySelector("#resultado").innerText = ""
    
    if (!peso || !altura){
        document.querySelector("#aviso").innerText = "Por favor, preencha todos os campos!"
    } else{
        classificacao_IMC(imc)
    }

    


}


function classificacao_IMC(imc){
     let classificacao = ""
    const resultado = document.querySelector("#resultado")
     
        if (imc < 18.5){
            classificacao = "abaixo do peso"
            resultado.style.color = "#0abdc7"
        }else if(imc < 24.9){
            classificacao = "peso normal"
            resultado.style.color = "#00ed14"        
        }else if(imc < 29.9){
            classificacao = "sobrepeso"
            resultado.style.color = "#d8db30"
        }else if(imc < 34.9){
            classificacao = "obesidade grau I"
            resultado.style.color = "#ffa600"
        }else if(imc < 39.9){
            classificacao = "obesidade grau II"
            resultado.style.color = "#db1600"
        }else{
            classificacao = "obesidade grau III!"
            resultado.style.color = "#8400db"
        }
        document.querySelector("#resultado").innerHTML = `IMC: ${imc} - ${classificacao}`
        document.querySelector("#aviso").innerText = ""
        document.querySelector(".aviso_peso").innerHTML = ""
        document.querySelector(".aviso_altura").innerHTML = ""
        
    }





 