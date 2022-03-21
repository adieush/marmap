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
        {
            title: "4 больница",
            coordinates: [
                { lat: 47.10950371735909, lng: 37.631456403265176 },//,
                { lat: 47.11223704315821, lng: 37.631811422926745 },//,
                { lat: 47.11205583253289, lng: 37.63584977157704 },//,
                { lat: 47.10926209064606, lng: 37.63553912937317 },//,
            ],
            link: "https://t.me/+3NYGeht4BEhjYjcx"
        },
        {
            title: "Азовстальская 7",
            coordinates: [
                { lat: 47.1019158626743, lng: 37.62777614837634 },//
                { lat: 47.101857438004984, lng: 37.629278185409866 },//
                { lat: 47.10157261682388, lng: 37.62924599890201 },//
                { lat: 47.10165295115743, lng: 37.62776541954038 },//
            ],
            link: "https://t.me/+3NYGeht4BEhjYjcx"
        },
        {
            title: "Азовстальская 13, 15, 17, 19/1, 19/2, 21",
            coordinates: [
                { lat: 47.10246359081581, lng: 37.62977171190159 },//,
                { lat: 47.102302924473875, lng: 37.632196428827136 },//,
                { lat: 47.10152149489685, lng: 37.6317887330609 },//,
                { lat: 47.10092993777622, lng: 37.63238954787431 },//,
                { lat: 47.10036028396641, lng: 37.63159561401373 },//,
                { lat: 47.101097911454005, lng: 37.62976098306564 },//,
            ],
            link: "https://t.me/azovstalskaya1315171921"
        },
        {
            title: "Азовстальская 31",
            coordinates: [
                { lat: 47.10195805286599, lng: 37.63403410128396 },//,
                { lat: 47.101658625995306, lng: 37.63436669519853 },//,
                { lat: 47.10119122458714, lng: 37.63359421900986 },//,
                { lat: 47.101483350948115, lng: 37.6331650655717 },//,
            ],
            link: "https://t.me/+JPlAUI1RnFM1MWMy "
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
