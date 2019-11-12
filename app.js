// Gabrielle Higgins


document.addEventListener("DOMContentLoaded", ()=>{
    //console.log("hello world");
    //delete window.alert;
    const button = document.body.querySelector("#search");
    let heroName;
    button.addEventListener("click", () => {
        $.get("superheroes.php", 
        {
            query: heroName 
        }).done(function(response){ 
            let resp = response; 
            alert(resp); 
        }).fail(()=>{
            alert("Something went wrong");
        });
    });
});
