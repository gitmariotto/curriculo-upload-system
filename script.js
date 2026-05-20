function enviarCurriculo() {

    const input = document.getElementById("arquivo");
    const arquivo = input.files[0];

    if (!arquivo) {
        alert("Selecione um arquivo!");
        return;
    }

    if (
        arquivo.type != "application/pdf" &&
        arquivo.type != "application/msword" &&
        arquivo.type != "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
        alert("Envie apenas PDF ou DOCX!");
        return;
    }

    document.getElementById("resultado").innerHTML =
        `
    Currículo enviado com sucesso! <br><br>

    Nome do arquivo: ${arquivo.name} <br>
    Tipo: ${arquivo.type} <br>
    Tamanho: ${(arquivo.size / 1024).toFixed(2)} KB
    `;

    document.getElementById("download").style.display = "inline-block";
}