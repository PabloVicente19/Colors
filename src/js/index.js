
const createColor = () =>{
    

        const simbolos = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
          // simbolos = "0123456789ABCDEF";
          let color = "#";
      
          for(var i = 0; i < 6; i++){
              color = color + simbolos[Math.floor(Math.random() * 16)];
          }
        console.log(color)
        content.style.background = color;
      }
  


const generateColor = (e) => {
    e.preventDefault();
    createColor()
    e.reset()
    // printColor();
    // // cardColor()
    // // exampleColor()
}












const showColor = () => { form.addEventListener('click', generateColor) }
const init = () => {
    showColor()
}
init()