window.addEventListener("load",()=>{
  setTimeout(()=>{
    title.style.transform = "translateY(0px)";
    title.style.filter = "blur(0)";
  },500);
  setTimeout(()=>{
    invisible.style.opacity="1";
    invisible.style.filter = "blur(0)"
  },3000)
});

const target = document.getElementById('target');
let array = ["consectetur adipiscing elit.","sagittis turpis.","rhoncus."];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = ()=>{
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(()=>{
    letter.remove();
  },2800)
}

const loop = ()=>{
setTimeout(()=>{
  if(wordIndex>=array.length){
    wordIndex = 0;
    letterIndex = 0;
    loop();
  }else if(letterIndex<array[wordIndex].length){
createLetter();
letterIndex++;
loop();
  }else{
    wordIndex++;
    letterIndex=0;
    setTimeout(()=>{
      loop();
    },2800);
  }  
},50)
}
loop()