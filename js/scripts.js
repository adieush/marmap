Main = {
    map: '',
    mapProp: {},
    chats: [
        {
            title: "бр Шевченко 70",
            coordinates: [
                { lat: 47.10721135744143, lng: 37.555174668304964 },
                { lat: 47.10595313614079, lng: 37.554628127342696 },
                { lat: 47.10546807477313, lng: 37.55600519623088 },
                { lat: 47.10590207725761, lng: 37.55761802788591 },
            ],
            link: "https://t.me/+E8dWsvcMlKQzYjcy"
        },
        {
            title: "пр Мира 10/20",
            coordinates: [
                { lat: 47.09369158242039, lng: 37.55940666728296 },//,
                { lat: 47.09357339072438, lng: 37.559953343021284 },//,
                { lat: 47.092901956324766, lng: 37.55967261764214 },//,
                { lat: 47.09293464808333, lng: 37.55942144230291 },//,
            ],
            link: "https://t.me/+UaI4gNqRtik3YjM6"
        },
    ],
    init: function(){
        this.myMap();
    },
    myMap: function () {
let self = this;
        self.mapProp = {
            center:new google.maps.LatLng(47.1193857410282, 37.56049021240345),
            zoom:13,
        };
        self.map = new google.maps.Map(document.getElementById("googleMap"), this.mapProp);


        this.chats.forEach(function (chat) {
            self.setChat(chat.title, chat.coordinates, chat.link);
        });
    },
    setChat: function (title, coordinates, link) {
        let bermudaTriangle = new google.maps.Polygon({
            paths: coordinates,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
        });
        console.log(this.map, typeof this.map);
        bermudaTriangle.setMap(this.map);
        google.maps.event.addListener(bermudaTriangle, 'click', function (object) {
            window.open(link,'_blank');
        });

    }
};
