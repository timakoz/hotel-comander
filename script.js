(function(k,o,t,e,l){
    l = document.createElement("script");
    l.type = "text/javascript";
    l.src = "https://bookonline24.ru/widget.js";
    l.async = !0;
    l.onload = l.onreadystatechange = function() {
        e = this.readyState;
        !o && (!e || e === "complete") && (o = 1) && k();
    };
    t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(l, t);
})(function(){
    HotelWidget.init({
        // ID организации; ID html элемента нужно проставить ниже в поле container
        hotelId: "5928aea2-7b70-4f70-9ddc-1b64505a35b6",
        version: "2",
        hooks: {
            onError: function(e) { console.error("onError", e); },
            onInit: function() { console.log("onInit"); },
            onBooking: function(v) { console.log("onBooking", v) }
        }
    }); 

    // Поиск и бронирование номеров — горизонтальный блок
    HotelWidget.add({
        type: "bookingForm",
        inline: true,
        appearance: {
            // Замените на ID html элемента, в который нужно вставить виджет
            container: "WidgetHorizontalBlockId"
        }
    });
});






