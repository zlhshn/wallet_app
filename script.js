const tarih = document.getElementById('tarih')

const harcamaMiktari = document.getElementById('harcamaMiktari')

const harcamaAlani = document.getElementById('harcamaAlani')

const kaydet = document.getElementById('kaydet')


const tbody = document.getElementById('table1')



kaydet.addEventListener('click',() =>{
if(!(tarih.value && harcamaAlani.value &&harcamaMiktari.value )){
    alert('eksik bilgi girdiniz')
}
else {


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
    

    budget()
    tarih.value = ''
    harcamaAlani.value = ''
    harcamaMiktari.value = ''
}

localStorage.setItem('bütce',tbody.innerHTML)
})




document.querySelector("tbody").addEventListener("click", (event)=>{

    if(event.target.classList.contains('fa-trash')){
        event.target.closest("tr").remove()
    }

    budget()
    localStorage.setItem('bütce',tbody.innerHTML)
    
})


const ekle = document.getElementById('ekle')
const gelirInput = document.getElementById('gelirInput')



const budget = ()=>{

    ekle.addEventListener('click',()=>{
       
        document.getElementById('gelir').textContent = gelirInput.value
        localStorage.setItem('bütce',tbody.innerHTML)

        gelirInput.value = ''
         //? kalanı bulma

      const kalan = document.getElementById('kalan')
       kalan.textContent = Number(gelirInput.value) - Number(gider.textContent )
       
    })

    const gider = document.getElementById('gider')
    const miktar = document.querySelectorAll('#data')
 
    const totalGider = [...miktar].reduce((sum,m)=> sum + Number(m.textContent),0)
    gider.textContent =totalGider
    
    //? kalanı bulma

    const kalan = document.getElementById('kalan')
    kalan.textContent = Number(gelirInput.value) - Number(gider.textContent )
    // tbody.innerHTML = localStorage.getItem('bütce')

}

budget()



const reset = document.getElementById('reset')

reset.addEventListener('click',()=>{
    document.getElementById('gelir').textContent = 0
    document.getElementById('gider').textContent = 0
    document.getElementById('kalan').textContent = 0

    tbody.textContent =''
   
   

})