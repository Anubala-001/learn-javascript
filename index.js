// const h1 =document.querySelector('#header')
// const btn=document.querySelector('#btn')

// console.log(btn)
// console.log(h1)

//     const col=document.getElementById('header');
//     console.log('h1')
//     h1.style.backgroundColor="red"
//     h1.style.color="red"
//     h1.textAlign="centre"
//     h1.innerhtml="most welcome"
//     h1.classlist.add('momo');

const img = document.querySelector('#img');
const btn = document.querySelector('#btn');
// console.log(img);
// console.log(btn)

btn.addEventListener('click',()=>{
        // bulb.src = './bulbon.jpg';
        // console.log(bulb.src)

        if(img.src.match('off')){
                img.src = './bulbon.png'
                btn.textContent='Bulb on'
                
        }else{
                 img.src = './bulboff.png'
                 btn.textContent='Bulb off'
        }
})




    
