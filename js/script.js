function toggleDark(){
  document.body.classList.toggle("dark");
}

const text = ["BSIT Student", "Web Developer", "Backend Developer"];
let i=0,j=0,current="",isDeleting=false;

function type(){
  if(i<text.length){
    if(!isDeleting && j<=text[i].length){
      current=text[i].substring(0,j++);
    } else if(isDeleting && j>=0){
      current=text[i].substring(0,j--);
    }

    document.getElementById("typing").textContent=current;

    if(j==text[i].length) isDeleting=true;
    if(j==0){isDeleting=false;i++;}

    setTimeout(type,isDeleting?50:100);
  } else {
    i=0; type();
  }
}
type();