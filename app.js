

let box
let primeNumbers=[]  // asal sayıları ekleeceğimiz dizimiz
for (let i = 0; i < 100; i++) {
    let counter=true // kontolcümüz. eğer true ise asal, false ise asal değil olacak
    for(j=2; j<i; j++){ // j = 2 den başlatıp sayının kendisine kadar artırıyoruz
        if (i%j==0) { // eğer bir sayı kendisi ve 1 dan başka bir sayıya bölünüyorsa asal değildir.
            counter=false
            break
        }
    }
    if(counter && i>1){  // 1 asal sayı olmadığında bunun haricindeki sayıları almayız
        primeNumbers.push(i)
    }
}


for(let i=0;i<=100;i++){
    box=document.createElement('h1')
    box.className='myDiv'
    box.style="float:left"
    box.textContent=i
    document.body.appendChild(box)
    if(primeNumbers.includes(i)){
        box.style.background="red"
    }else if(0==i%2){
        box.style.background="#15FF00" // yeşil
    }
}

