import "./mystyle.scss";




const message:string = "Hola Mundo! entorno: " + process.env.NODE_ENV;

const para:HTMLParagraphElement = document.createElement("p");
para.innerText = message;
document.getElementById("texto").appendChild(para);




