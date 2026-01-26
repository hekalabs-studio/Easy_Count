let navigasi = document.getElementById("header") 
let nav = document.getElementsByClassName("nav_cards");
let roti = document.getElementsByClassName("roti")
let hamburger = document.getElementsByClassName("menu");
let container = document.getElementsByClassName("container")
let introduction = document.getElementById("introduction")



// Create a MediaQueryList object
var handphone = window.matchMedia("(max-width: 700px)")
function responsiveScroll() {
   if(handphone.matches) {
      if(document.documentElement.scrollTop > 150) {
         navigasi.style.position = "fixed"
      } else {
          navigasi.style.position = "relative"
      }
   } else {
      navigasi.style.position = "fixed"
   }
}
window.addEventListener("scroll", responsiveScroll);
handphone.addEventListener("change", responsiveScroll)



hamburger[0].addEventListener("click", ()=> {
   roti[0].style.transform = roti[0].style.transform ? "" : "translateY(10px) rotate(90deg)"
   roti[1].style.transform = roti[1].style.transform ? "" : "translateX(10px) rotate(60deg) translateY(15px)"
   roti[1].style.width = roti[1].style.width ? "" : "20px"
   roti[2].style.width = roti[2].style.width ? "" : "20px"
   roti[2].style.transform = roti[2].style.transform ? "" : "translateX(10px) rotate(-60deg) translateY(-6px)"

   let statusNav = window.getComputedStyle(nav[0]).display;
   if(statusNav === "none") {
      nav[0].style.display = "block"
   } else {
      nav[0].style.display = "none"
   }
})
function navLink() {
   let statusNav = [window.getComputedStyle(nav[0]).opacity,window.getComputedStyle(nav[0]).height];
   roti[0].style.transform = roti[0].style.transform ? "" : "translateY(10px) rotate(90deg)"
   roti[1].style.transform = roti[1].style.transform ? "" : "translateX(10px) rotate(60deg) translateY(15px)"
   roti[1].style.width = roti[1].style.width ? "" : "20px"
   roti[2].style.width = roti[2].style.width ? "" : "20px"
   roti[2].style.transform = roti[2].style.transform ? "" : "translateX(10px) rotate(-60deg) translateY(-6px)"
   nav[0].style.display = "none"
}
// lingkaran

outputBundar.innerHTML = `
      <span style="color: var(--blue)">Keliling</span> : ? cm<br>
      <span style="color: var(--blue)">Luas</span>   &nbsp;&nbsp;&nbsp; : ? cm²
   `
function countLingkaran() {
   let jari2 = Number(document.getElementById("jari").value);
   let diameter = Number(document.getElementById("diameter").value);
   let outputBundar = document.getElementById("outputBundar")
   
   let pie = Math.PI;
   if(jari2 > 0 && diameter === 0){
      oDiameter = jari2 * 2;
      keliling = (2 * pie * (oDiameter/2)).toFixed(2)
      luas = pie * ((oDiameter/2) **2).toFixed(2)
      outputBundar.innerHTML = `
      <span style="color: var(--blue)">Diameter</span> : ${oDiameter} cm<br>
      <span style="color: var(--blue)">Keliling</span> : ${keliling} cm<br>
      <span style="color: var(--blue)">Luas</span>     &nbsp;&nbsp;&nbsp;&nbsp: ${luas} cm²
   `
   } else if (diameter > 0 && jari2 === 0) {
      oJari2 = diameter /2;
      keliling = (2 * pie * oJari2).toFixed(2)
      luas = (pie * oJari2 **2).toFixed(2)

      outputBundar.innerHTML = `
      <span style="color: var(--blue)">Jari²</span> &nbsp;&nbsp;&nbsp: ${oJari2} cm<br>
      <span style="color: var(--blue)">Keliling</span> : ${keliling} cm<br>
      <span style="color: var(--blue)">Luas</span> &nbsp;&nbsp;&nbsp;&nbsp: ${luas} cm²
      `
   } else if (jari2 == 0 && diameter === 0) {
      alert("tolong diisi ya, jangan dikosongkan ^^")
   }
}
window.addEventListener("keydown", (event)=> {
   if(event.key === "Enter") {
      countLingkaran()
   }
})

// pythagoras


outputPythagoras.innerHTML = `
      Garis<span style="color: var(--blue)"> A</span> : ?<br>
      Garis<span style="color: var(--blue)"> B</span> : ?<br>
      Garis<span style="color: var(--blue)"> C</span> : ?<br>
   `

function countPythagoras() {
   let garisA = Number(document.getElementById("garisA").value)
   let garisB = Number(document.getElementById("garisB").value)
   let garisC = Number(document.getElementById("garisC").value)
   let outputPythagoras = document.getElementById("outputPythagoras")

   if(garisA > 0 && garisB > 0 && garisC === 0) {
      // menghitungGarisC
      let outputGarisC =  Math.sqrt(garisA**2 + garisB**2).toFixed(2);
      
      outputPythagoras.innerHTML = `
      Garis<span style="color: var(--blue)"> A</span> : <span style="color: yellow">${garisA}</span><br>
      Garis<span style="color: var(--blue)"> B</span> : <span style="color: yellow">${garisB}</span><br>
      Garis<span style="color: var(--blue)"> C</span> : ${outputGarisC}<br>
      `

   } else if (garisA > 0 && garisB === 0 && garisC > 0 ) { 
       // menghitungGarisB
      if(garisC <= garisA) {
         outputPythagoras.innerHTML = `
         Garis<span style="color: var(--blue)"> A</span> : <span style="color: yellow">${garisA}</span><br>
         Garis<span style="color: var(--blue)"> B</span> : <span style="color: red">Error "GarisC > GarisA"</span><br>
         Garis<span style="color: var(--blue)"> C</span> : <span style="color: yellow">${garisC}</span><br>
         `
      } else{
         let outputGarisB =  Math.sqrt(garisC**2 - garisA**2).toFixed(2);
         outputPythagoras.innerHTML = `
         Garis<span style="color: var(--blue)"> A</span> : <span style="color: yellow">${garisA}</span><br>
         Garis<span style="color: var(--blue)"> B</span> : ${outputGarisB}<br>
         Garis<span style="color: var(--blue)"> C</span> : <span style="color: yellow">${garisC}</span><br>
      `
      }
      
   } else if(garisA === 0 && garisB > 0 && garisC > 0) {
       // menghitungGarisA
      if(garisC <= garisB) {
         outputPythagoras.innerHTML = `
         Garis<span style="color: var(--blue)"> A</span> : <span style="color: red">Error "GarisC > GarisB"</span><br>
         Garis<span style="color: var(--blue)"> B</span> : <span style="color: yellow">${garisB}</span><br>
         Garis<span style="color: var(--blue)"> C</span> : <span style="color: yellow">${garisC}</span><br>
         `
      } else{
         let outputGarisA =  Math.sqrt(garisC**2 - garisB**2).toFixed(2);
         outputPythagoras.innerHTML = `
         Garis<span style="color: var(--blue)"> A</span> : ${outputGarisA}<br>
         Garis<span style="color: var(--blue)"> B</span> : <span style="color: yellow">${garisB}</span><br>
         Garis<span style="color: var(--blue)"> C</span> : <span style="color: yellow">${garisC}</span><br>
      `
      }
   }
}
window.addEventListener("keydown", (event)=> {
   if(event.key === "Enter") {
      countPythagoras()
   }
})

// kalkulator
function appendToDisplay(value) {
   let display = document.getElementById("display");
   if(value == "kurungbuka") {
      display.value += "(";
   } else if(value == "kurungtutup") {
      display.value += ")";
   } else {
      display.value += value;
   }
      
}
function clearDisplay() {
   let display = document.getElementById("display");
   display.value = "";
}
function calculateResult() {
   let display = document.getElementById("display");
   try {
      let result = eval(display.value);
      display.value = result;
   } catch (error) {
      display.value = "Error";
      display.style.color = "red";
   }
}

