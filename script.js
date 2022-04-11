
        
        var armazenados = Array()

        var ids = Array()

        var contagem_vitoria = 0

        function revela(id) {

            document.getElementById(id).className

            var x = (document.getElementById(id).className)

            armazenados.push(x)
            ids.push(id)

            console.log(armazenados)
            console.log(ids)

            document.getElementById(ids[0]).className = 'revela' + ids[0]

            if(armazenados.length == 2) {
                if (armazenados[0] == armazenados[1]) {
                    swal("Você acertou!", "", "success");
                    contagem_vitoria++
                    verificaVitoria()
                    document.getElementById(ids[0]).className = 'revela' + ids[0]
                    document.getElementById(ids[1]).className = 'revela' + ids[1] 
                    zeraVetores()

                } else {
                    document.getElementById(ids[1]).className = 'revela' + ids[1]
                    swal("Você errou!", "", "error");
                    document.getElementById(ids[0]).className = armazenados[0]
                    document.getElementById(ids[1]).className = armazenados[1]
                    zeraVetores()
                }

            } else if (armazenados.length == 1 && armazenados[0] == 'sempar') {
                alert('Não há uma imagem corresponde a esta figura!')
                contagem_vitoria++
                verificaVitoria()
                armazenados.pop()
                ids.pop()
            }
        }

        function zeraVetores() {
            armazenados.pop()
            armazenados.pop()
            ids.pop()
            ids.pop()
        }

        function verificaVitoria() {
            if (contagem_vitoria == 13) {
                swal("PARABÉNS! VOCÊ VENCEU!", "", "success");
            }
        }

        
