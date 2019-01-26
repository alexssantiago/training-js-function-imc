(function () {

    const trs = document.querySelectorAll(".js-tabela tbody .aluno");

    let x = 0;
    while (trs[x]) {

        var linhaAluno = trs[x];

        var tds = linhaAluno.querySelectorAll("td");
        var notas = GetNumerosDeColunas(tds);
        var media = calcularMedia.apply(this, notas);
        
        linhaAluno.querySelector(".aluno-m").textContent = media;

        x++;
    }

    function GetNumerosDeColunas(tds){
        var numeros = [];
        for (let item of tds) {
            if(!isNaN(item.textContent) && item.textContent !== '')
            numeros.push(parseFloat(item.textContent ));
        }
        return numeros;
    }

})();