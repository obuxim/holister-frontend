$(".variable-width").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  leftmode: true,
  variableWidth: true,
});

$(".right").slick({
  centerMode: true,
  Paddingleft: "40px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        rightPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        rightPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 22.3237516, lng: 91.8091193 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
