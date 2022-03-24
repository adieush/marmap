Main.chatList = {
    init: function () {

        let lineNo = 1;
        let tableBody = $("#list");
        Main.chats.forEach(function (chat) {
            let markup = "<tr><td>"
                + lineNo + "</td>" +
                "<td><a href='"+chat.link+"' target='_blank'>"
                + chat.title+ "</a></td>" +
                "</tr>";
            tableBody.append(markup);
            lineNo++;
        });
    }
};