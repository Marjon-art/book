const fontSizeClasses = document.querySelectorAll(".font-size");
const bookClass = document.querySelector(".book");

for(let i = 0; i < fontSizeClasses.length; i++) {
    fontSizeClasses[i].addEventListener("click", (event) => {
     event.preventDefault();
let fontsCurent = event.target.parentElement.children;
for(let j = 0; j < fontsCurent.length; j++) {
    fontsCurent[j].classList.remove("font-size_active");
   }
    event.target.classList.add('font-size_active'); 
  let datas = event.target.dataset.size;
 let className = `font-size_${datas}`;
 //присвоила в это свойство массив с одним нужным классом
 bookClass.classList = ['book'];
 //eсли в datas ничего нет, то и добавлять в bookClass.classList нeчего не надо
 datas ? bookClass.classList.add(className) : '';
}) 
}

