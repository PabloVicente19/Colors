
const generateColor = () =>{
    const numsHexa = ['1','2','3','4','5','6','7',"8","9","A","B","C","D","E","F"]
    let color= '#';
      for(let i = 0; i < 6; i ++){
        color = color + numsHexa[Math.floor(Math.random() * 15)];
      }
      content.style.background = color;
      CodeColor.innerHTML= color
      CodeColor.style.display = 'block'
}

const showColor = (e) => {
    e.preventDefault();
    generateColor()
    form.reset()

}

const init = () => { form.addEventListener('click', showColor)}
init()