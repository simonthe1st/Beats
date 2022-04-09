let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.736417, 37.622346],
        zoom: 13,
        controls: []
    });

    const coords = [
        [55.763012, 37.628280],
        [55.757369, 37.612991],
        [55.745904, 37.607601]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/marker.svg",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);