// Gabrielle Higgins

document.addEventListener("DOMContentLoaded", ()=>{
    const button = document.querySelector("#search");
    let heroName;
    
    const divResult = document.querySelector("#result");
    
    button.addEventListener("click", () => {
        heroName = document.getElementById("input").value;
        $.get("superheroes.php", 
        {
            query: heroName 
        }).done(function(response){ 
            let resp = response; 
            divResult.innerHTML= response;
        }).fail(()=>{
            alert("Something went wrong");
        });
    });
});
