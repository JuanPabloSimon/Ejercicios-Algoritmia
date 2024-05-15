export default function marquesina(texto){
    const words = []
    for (let i = 0; i < texto.length; i++) {
        let current = words[i - 1] || texto;    
        words.push(reverser(current))
    }
    return words;
}

function reverser(text) {
    return text.slice(1).concat(text.slice(0,1))
}
