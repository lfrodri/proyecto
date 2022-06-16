const aleatorio = (desde, hasta) =>{(Math.random)(Math.random()*(hasta - desde) + desde)}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let pos = 0;
for(let i = 1; i<= 15; i++){
    pos = aleatorio(0,arr.length - 1)

    document.getElementById(`b${arr[pos]}`).addEventListener("click", () =>{
            document.getElementById(`b${arr[pos]}`).style.backgroundImage = `url('img/0999${50 + pos}.jpg')`;
            document.getElementById(`b${arr[pos]}`).style.backgroundSize = "cover";
        })
    arr.splice(pos,1);
    document.getElementById(`b${pos}`).addEventListener("click", ()=>{
        document.getElementById(`b${pos}`).style.backgroundImage=`url('img/0999${50+pos}.jpg')`;
        document.getElementById(`b${pos}`).style.backgroundSize="cover";
    })
}






// function choosPic() {
//     var randomNum = Math.floor(Math.random() * myPix.length);
//     document.getElementById("myPicture").src = myPix[randomNum]; 

//     var myPix = new Array("images/lion.jpg", "images/tiger.jpg", "images/bear.jpg");
// }



