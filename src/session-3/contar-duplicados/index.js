export default function contarDuplicados(texto){
    const count = new Map()

    const formattedText = texto.toLowerCase()
    for (const char of formattedText) {
        count.set(char, (count.get(char) || 0) + 1)
    }
    const repeated = []
    count.forEach((el) => {
        if(el > 1) repeated.push(el)
    })
    return repeated.length;
}
