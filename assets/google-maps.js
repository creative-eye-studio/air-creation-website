function initMaps(){
    let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 2,
            center: new google.maps.LatLng(44.6197, 4.39028),
            mapTypeId: "roadmap",
        }
    );
    return map;
}

function callPoints(marker){
    google.maps.event.addEventListener(marker, 'click', function(){
        const list = document.getElementById("list");
        var blocks = document.querySelectorAll('.partner-block');
        blocks.forEach((block) => {
            block.classList.remove('selected');
        });
        const target = document.querySelector("[data-id-name='" + feature.name + "']");
        list.scrollTo({
            top: target.offsetTop
        });
        target.classList.add('selected');
    });
}
