let currentRating = 0;
function rate(stars) {
    currentRating = stars;
}

let index = {
		init: function(){
			$("#btn-save").on("click", ()=>{
				this.save();
			});
			$("#btn-delete").on("click", ()=>{
				this.deleteById();
			});
			$("#btn-update").on("click", ()=>{
				this.update();
			});
			$("#btn-reply-save").on("click", ()=>{
				this.replySave();
			});
		},

		save: function(){
//		    oEditors.getById["ir1"].exec("UPDATE_CONTENTS_FIELD",[])

			let data = {
					title: $("#title").val(),
					content: $("#summernote").val(),
					categoryName: $("#categoryName").val()
			};

			 if(data.title == '') {
                    alert("제목을 입력해주세요.")
                    return
                  }


			$.ajax({
				type: "POST",
				url: "/api/board",
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				dataType: "json"
			}).done(function(resp){
				alert("글쓰기가 완료되었습니다.");
				location.href = "/mainMenu/"+data.categoryName;
			}).fail(function(error){
				alert(JSON.stringify(error));
			});
		},

		deleteById: function(){
			let id = $("#id").text();

			$.ajax({
				type: "DELETE",
				url: "/api/board/"+id,
				dataType: "json"
			}).done(function(resp){
				alert("삭제가 완료되었습니다.");
				location.href = "/";
			}).fail(function(error){
				alert(JSON.stringify(error));
			});
		},

		update: function(){
			let id = $("#id").val();

			let data = {
					title: $("#title").val(),
					content: $("#summernote").val()
			};

			if(data.title == '') {
                                alert("제목을 입력해주세요.")
                                return
                              }

			$.ajax({
				type: "PUT",
				url: "/api/board/"+id,
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				dataType: "json"
			}).done(function(resp){
				alert("글수정이 완료되었습니다.");
				location.href = "/board/"+id;
			}).fail(function(error){
				alert(JSON.stringify(error));
			});
		},

		replySave: function(){
			let data = {
			        rating: currentRating,
					userId: $("#userId").val(),
					boardId: $("#boardId").val(),
					content: $("#reply-content").val()
			};

			$.ajax({
				type: "POST",
				url: `/api/board/${data.boardId}/reply`,
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				dataType: "json"
			}).done(function(resp){
				alert("댓글작성이 완료되었습니다.");
				location.href = `/board/${data.boardId}`;
			}).fail(function(error){
				alert(JSON.stringify(error));
			});
		},

		replyDelete : function(boardId, replyId){

			$.ajax({
				type: "DELETE",
				url: `/api/board/${boardId}/reply/${replyId}`,
				dataType: "json"
			}).done(function(resp){
				alert("댓글삭제 성공");
				location.href = `/board/${boardId}`;
			}).fail(function(error){
				alert(JSON.stringify(error));
			});
		},

}



index.init();
