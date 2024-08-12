
function searchPlace(){
    var search_area = document.getElementById("search-area");
    var search_value = document.getElementById("search-bar").value.toLowerCase();
    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        search_area.innerHTML= ``;
        search_area.style.backgroundColor = "white";
        if (search_value == 'country'){
            // let countries = [...data.countries];
            for (let country of data.countries){
                    search_area.innerHTML+= `
                    <div style="flex-wrap: wrap; border-radius:6px ;background-color: white;">
                        <img src="${country.cities[0].imageUrl}" alt="" style="width:100%; height:40vh; border-top-right-radius: 3px; border-top-left-radius: 3px;">
                        <div style="margin-left:3%;">
                            <div>
                                <h5>${country.cities[0].name}</h5>
                                <p style="">${country.cities[0].description}</p>
                            </div>
                        </div>
                    </div>`;
                
            }
        }
        if (search_value == 'temple'){
            let temples = [...data.temples];
            for (let temple of temples){

                    search_area.innerHTML+= `
                    <div style="flex-wrap: wrap; border-radius:6px ;background-color: white;">
                        <img src="${temple.imageUrl}" alt="" style="width:100%; height:40vh;border-top-right-radius: 3px; border-top-left-radius: 3px;">
                        <div>
                            <div>
                                <h5>${temple.name}</h5>
                                <p style="">${temple.description}</p>
                            </div>
                        </div>
                    </div>
                    `;
            }
        }
        if (search_value == 'beach'){
            let beaches = [...data.beaches];
            for (let beach of beaches){
                    search_area.innerHTML+= `
                    <div style="flex-wrap: wrap; border-radius:6px ;background-color: white;">
                        <img src="${beach.imageUrl}" alt="" style="width:100%; height:40vh; border-top-right-radius: 3px; border-top-left-radius: 3px;">
                        <div>
                            <div>
                                <h5>${beach.name}</h5>
                                <p style="">${beach.description}</p>
                            </div>
                        </div>
                    </div>
                    `;
            }

        }
    })
    .catch( error => {
            console.error("Error: ",error);
        }

    )
}
function clearSearch(){
    var search_area = document.getElementById("search-area");
    document.getElementById('search-bar').value = "";
    search_area.innerHTML= ``;
    search_area.style.backgroundColor = "transparent";
}

