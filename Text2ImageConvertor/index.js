

document.addEventListener('DOMContentLoaded',function(){
const btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let input = document.getElementById("input").value;
    const container = document.getElementById("imageContainer");

    container.innerHTML = '';
    if(input === ''){
        alert("Field cannot be empty");
        return;
    }


    fetch(`https://api.openverse.org/v1/images/?q=${input}`)
.then(response => response.json())
.then(data =>{
       
      const results = data["results"];
     

    let imageUrls = new Array();
      
    for(let result of results){
         imageUrls.push(result["thumbnail"]);
    }
    console.log(imageUrls);
     
   
      
      imageUrls.forEach(imageUrl =>{
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt="image";
        container.appendChild(img);
      })
      
})
.catch(error =>{
    console.log("Error:", error.data);
});
    

});
});
