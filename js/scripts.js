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
                { lat: 47.10246359081581, lng: 37.62977171190159 },//
                { lat: 47.102302924473875, lng: 37.632196428827136 },//
                { lat: 47.10152149489685, lng: 37.6317887330609 },//
                { lat: 47.10092993777622, lng: 37.63238954787431 },//
                { lat: 47.10036028396641, lng: 37.63159561401373 },//
                { lat: 47.101097911454005, lng: 37.62976098306564 },//
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
            link: "https://t.me/+JPlAUI1RnFM1MWMy"
        },
        {
            title: "Азовстальская 41",
            coordinates: [
                { lat: 47.10200709951212, lng: 37.636905321619345 },//,
                { lat: 47.10176888426269, lng: 37.639979952431815 },//,
                { lat: 47.10080240003026, lng: 37.63981497224188 },//,
                { lat: 47.101397946966436, lng: 37.63686032702209 },//,
            ],
            link: "https://t.me/+kd2PpPJUUxo4NDEy"
        },
        {
            title: "Азовстальская 63",
            coordinates: [
                { lat: 47.10138471230725, lng: 37.64645047178639 },//,
                { lat: 47.101349563341664, lng: 37.64693929489079 },//,
                { lat: 47.1010589976707, lng: 37.646894543479824 },//,
                { lat: 47.10108008716792, lng: 37.646481453532445 },//,
            ],
            link: ""
        },
        {
            title: "Гонды д.2 и рядом ",
            coordinates: [
                { lat: 47.12238079137538, lng: 37.56601284537189 },//,
                { lat: 47.12210320893142, lng: 37.567584803632506 },//,
                { lat: 47.12143330400145, lng: 37.567383549460736 },//,
                { lat: 47.121688683118826, lng: 37.56567560865162 },//,
            ],
            link: "https://t.me/+SwaAgv5Il7QxM2Qy"
        },
        {
            title: "Горловская 2, 4, 6",
            coordinates: [
                { lat: 47.103826539409106, lng: 37.66278425925925 },//,
                { lat: 47.10468368955183, lng: 37.66392548240618 },//,
                { lat: 47.10437118849425, lng: 37.66548646579105 },//,
                { lat: 47.10335331518811, lng: 37.664378036412714 },//,
                { lat: 47.10355867715917, lng: 37.66121671712066 },//,
                { lat: 47.10393814828213, lng: 37.66146594976194 },//,
            ],
            link: ""
        },
        {
            title: "Казанцева 25, 27, 29",
            coordinates: [
                { lat: 47.103557647566596, lng: 37.54303717747207 },//,
                { lat: 47.10782812228061, lng: 37.54768468141221 },//,
                { lat: 47.10741690628903, lng: 37.54859869052043 },//,
                { lat: 47.10322021273828, lng: 37.54427651185611 },//,
            ],
            link: "https://t.me/K27TKc6F8k6LkBmMWQy"
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
