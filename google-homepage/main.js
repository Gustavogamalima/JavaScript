const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1FCXM_pt-PTBR953BR953&oq=" + input + "&aqs=chrome.0.69i59j0i512l2j46i512j0i512j46i512j0i512j69i61.2167j0j4&sourceid=chrome&ie=UTF-8"
}