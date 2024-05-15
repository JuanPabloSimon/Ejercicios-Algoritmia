
export default function encontrarLaMedia(developers) {
    let total = 0;
    developers.forEach(element => {
        total += element.age
    });
  return total / developers.length; 
}