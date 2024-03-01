window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitorsCount();
})

const funcitonApi = '';

const getVisitorsCount = () => {
    let count = 30;
    fetch(funcitonApi).then(response =>{
        return response.json
    }).then(response => {
        console.log("Website called function Api");
        count = response.count;
        doucument.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
    return count;
}