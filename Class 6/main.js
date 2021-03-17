$(document).ready(function () {
    fetch("https://corona-api.com/countries/bd")
    .then(response => {
        return response.json()
    })
    .then(element => {
        console.log(element.data.latest_data.confirmed)
        $("#place").append(
            `
            <div class="col">
                <div class="card my-3">
                    <div class="card-body">
                        <h4 class="card-title">Death</h4>
                        <p class="card-text">${element.data.latest_data.deaths}</p>
                    </div>
                </div>
                <div class="card my-3">
                    <div class="card-body">
                        <h4 class="card-title">Critical</h4>
                        <p class="card-text">${element.data.latest_data.critical}</p>
                    </div>
                </div>
                <div class="card my-3">
                    <div class="card-body">
                        <h4 class="card-title">Confirmed</h4>
                        <p class="card-text">${element.data.latest_data.confirmed}</p>
                    </div>
                </div>
                <div class="card my-3">
                    <div class="card-body">
                        <h4 class="card-title">Recovered</h4>
                        <p class="card-text">${element.data.latest_data.recovered}</p>
                    </div>
                </div>
            </div>
            `
            );
        // element.forEach(singleComment => {
        //     $("#place").append(
        //         `
        //         <div class="col">
        //             <div class="card my-4">
        //                 <img class="card-img-top" src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt="">
        //                 <div class="card-body">
        //                     <h4 class="card-title">${singleComment.email}</h4>
        //                     <p class="card-text">${singleComment.body}</p>
        //                 </div>
        //             </div>
        //         </div>
        //         `
        //     );
        // });
    })
});




$("#getBtn").click(function (e) { 
    e.preventDefault();
    
    
});

