const form = document.querySelector('.add-form');  //ekleme
const liste = document.querySelector('.todos') //silme
const aramaInput = document.querySelector('.search input') //arama


aramaInput.addEventListener('keyup',e=>{
    const ifade = aramaInput.value.trim().toLowerCase();
    // console.log(ifade);
    filtreolustur(ifade);
});


const filtreolustur=(ifade)=>{
    // console.log(Array.from(liste.children));
    
    Array.from(liste.children).filter((yapilacak)=>{
        
        return !yapilacak.textContent.toLowerCase().includes(ifade);

    }).forEach((yapilacak)=>{
        
        yapilacak.classList.add('filtered');
    });
    

    Array.from(liste.children).filter((yapilacak)=>{
        
        return yapilacak.textContent.toLowerCase().includes(ifade);

    }).forEach((yapilacak)=>{
        
        yapilacak.classList.remove('filtered');
    });
    
    

} 

function templateOlustur(yapilacak){
    let html='<li class="list-group-item d-flex justify-content-between align-items-center"><span>'+yapilacak+'</span><i class="far fa-trash-alt delete"></i></li>';
    liste.innerHTML +=html;
}

//added

form.addEventListener('submit',e=>{
    e.preventDefault();
    const yapilacak = form.add.value.trim().toLowerCase();    
    
    if(yapilacak.length){
        templateOlustur(yapilacak);
        form.reset();

    }    
  
})

//deleted
liste.addEventListener('click',e=>{
   
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    
    }

})


//search 


