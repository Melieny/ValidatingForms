export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);

    console.log(validaIdade(dataNascimento))
}

function validaIdade(data){
    const dataATual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataATual >= dataMais18;
}