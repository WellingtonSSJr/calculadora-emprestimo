let valorEmprestimo = document.querySelector('#valor-emprestimo');
let juros = document.querySelector('#juros');
let periodoAno = document.querySelector('#periodoAno');
let cep = document.querySelector('#cep');
let pagAprox = document.querySelector('#pagAprox');

let total = document.querySelector('.total');
let pagamentoMes = document.querySelector('.pagamento-mes');
let jurosTotais = document.querySelector('.juros-totas');
let btn = document.querySelector('.btn-calcular');


// valorEmprestimo.addEventListener('change', calcular)
// juros.addEventListener('change', calcular)
// periodoAno.addEventListener('change', calcular)
// cep.addEventListener('change', calcular)

btn.addEventListener('click', calcular)

let key = 'empre'
onload = ()=>{
    valorEmprestimo.value = localStorage.getItem(key)
}

function calcular(){
    function calcJuros(){
        // valorEmprestimo.addEventListener('onChange', calcPagMensal)
        
        let valorPrincipal = parseFloat(valorEmprestimo.value);
        let valorJuros     = parseFloat(juros.value) / 100 / 12
        let periodoPag     = parseFloat(periodoAno.value) * 12
        
            let valor = Math.pow(1 + valorJuros, periodoPag)
            let porMes = (valorPrincipal * valor * valorJuros) / (valor - 1)
        
            if(isFinite(porMes)){
                pagamentoMes.innerHTML = porMes.toFixed(2)
                total.innerHTML = (porMes * periodoPag).toFixed(2)
                jurosTotais.innerHTML = ((porMes * periodoPag)-valorPrincipal).toFixed(2)
    
            }
            
            localStorage.setItem(key, valorEmprestimo.value)
    }
    calcJuros();
    
}



