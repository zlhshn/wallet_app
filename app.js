const tarih = document.getElementById('tarih')
const harcamaMiktari = document.getElementById('harcamaMiktarı')
const harcamaAlani = document.getElementById('harcamaAlanı')
const kaydet =document.getElementById('kaydet')

const gelirİnput = document.getElementById('gelirInput')

const ekle = document.getElementById('ekle')


kaydet.addEventListener('click',()=>{


const tbody = document.querySelector('#table1')


const row = tbody.insertRow()


const td1 = row.insertCell(0);
const td2 = row.insertCell(1);
const td3 = row.insertCell(2);
const td4 = row.insertCell(3);

td1.textContent = tarih.value;
td2.textContent = harcamaMiktari.value;
td3.textContent = harcamaAlani.value;



})



const budgetCount = function(){

    document.getElementById('gelir').textContent = gelirİnput.value
    document.querySelectorAll('.data').textContent

}



// ekle.addEventListener('click',()=>{

//     document.getElementById('gelir').textContent = gelirİnput.value
// })


// const container = getElementById('container')

// container.addEventListener('click' ,(e)=>{

// if(e.target.getElementById('kaydet')){

    
// }

// })