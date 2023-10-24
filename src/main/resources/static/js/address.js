let index = {
    init: function(){
        $("#btn-save").on("click", ()=>{
            this.save();
        });
    },

    save: function(){
        let data = {
                lat: $("#lat").val(),
                lng: $("#lng").val(),
                address: $("#address").val()
        };

        $.ajax({
            type: "POST",
            url: "/api/map",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function(resp){
            alert("저장이 완료되었습니다.");
            location.href = "/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    },
}

index.init();
