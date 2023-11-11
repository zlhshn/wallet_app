const tarih = document.getElementById('tarih')

const harcamaMiktari = document.getElementById('harcamaMiktari')

const harcamaAlani = document.getElementById('harcamaAlani')

const kaydet = document.getElementById('kaydet')


// const arrGider = []

kaydet.addEventListener('click',() =>{
if(!(tarih.value && harcamaAlani.value &&harcamaMiktari.value )){
    alert('eksik bilgi girdiniz')
}
else {

    const tbody = document.getElementById('table1')

    //    const tr = document.createElement('tr')
    //    tbody.appendChild(tr)
    
    const tr = tbody.insertRow()
    
    const tarihTd = tr.insertCell(0)
    const harcamaTd = tr.insertCell(1)
    const miktarTd = tr.insertCell(2)
     miktarTd.id = 'data'
    const islemTd = tr.insertCell(3)
    
    tarihTd.textContent = tarih.value ;
    harcamaTd.textContent = harcamaAlani.value;
    miktarTd.textContent = harcamaMiktari.value;
    islemTd.innerHTML = '<i class="fa-solid fa-trash text-danger d-block text-center"></i>'
    
    // const giderMiktarı = harcamaMiktari.value
    // console.log(giderMiktarı);

 
// const giderTotal = document.getElementById('gider')

// giderTotal.textContent = arrGider.reduce((sum,x)=>sum+Number(x),0)



    tarih.value = ''
    harcamaAlani.value = ''
    harcamaMiktari.value = ''

}



})




document.querySelector("tbody").addEventListener("click", (event)=>{

    if(event.target.classList.contains('fa-trash')){
        event.target.closest("tr").remove()
    }
   
    
})


const ekle = document.getElementById('ekle')
const gelirInput = document.getElementById('gelirInput')

ekle.addEventListener('click',()=>{

    document.getElementById('gelir').textContent = gelirInput.value
   
})




const budget = ()=>{

    const gider = document.getElementById('gider')
    console.log(gider);

    const miktar = document.querySelectorAll('#data')
    console.log(miktar);

    const totalGider = Array.from(miktar).reduce((sum,m)=> sum + Number(m.textContent),0)

    console.log(totalGider);

    gider.textContent =totalGider
    console.log(gider);

 

}

budget()