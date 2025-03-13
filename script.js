function calcular_IMC(){
   let peso = parseFloat(document.querySelector("#peso").value)
   let altura = parseFloat(document.querySelector("#altura").value)
   console.log(peso, altura)
   altura = altura / 100
    let classificacao = ""
    let imc = (peso / (altura * altura)).toFixed(2)
    console.log(imc)
    
    
    if (imc < 18.5){
        classificacao = "abaixo do peso"
    }else if(imc < 24.9){
        classificacao = "peso normal"        
    }else if(imc < 29.9){
        classificacao = "sobrepeso"
    }else if(imc < 34.9){
        classificacao = "obesidade grau I"
    }else if(imc < 39.9){
        classificacao = "obesidade grau II"
    }else{
        classificacao = "obesidade grau III!"
    }

    document.querySelector("#resultado").innerHTML = `IMC: ${imc} - ${classificacao}`


}
