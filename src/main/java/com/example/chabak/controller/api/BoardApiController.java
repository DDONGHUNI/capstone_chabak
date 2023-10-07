package com.example.chabak.controller.api;

import com.example.chabak.config.PrincipalDetails;
import com.example.chabak.dto.ResponseDto;
import com.example.chabak.model.Board;
import com.example.chabak.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
public class BoardApiController {
	
	@Autowired
	private BoardService boardService;
	
	@PostMapping("/api/board")
	public ResponseDto<Integer> save(@RequestBody Board board, @AuthenticationPrincipal PrincipalDetails principal) {
		boardService.write(board, principal.getUser());
		return new ResponseDto<Integer>(HttpStatus.OK.value(), 1); 
	}
	
	@DeleteMapping("/api/board/{id}")
	public ResponseDto<Integer> deleteById(@PathVariable int id){
		boardService.delete(id);
		return new ResponseDto<Integer>(HttpStatus.OK.value(), 1); 
	}
	
	@PutMapping("/api/board/{id}")
	public ResponseDto<Integer> update(@PathVariable int id, @RequestBody Board board){
		System.out.println("BoardApiController : update : id : "+id);
		System.out.println("BoardApiController : update : board : "+board.getTitle());
		System.out.println("BoardApiController : update : board : "+board.getContent());
		boardService.modify(id, board);
		return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
	}


//	@PostMapping("/api/board/{boardId}/reply")
//	public ResponseDto<Integer> replySave(@RequestBody ReplySaveRequestDto replySaveRequestDto) {
//		boardService.댓글쓰기(replySaveRequestDto);
//		return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
//	}
//
//	@DeleteMapping("/api/board/{boardId}/reply/{replyId}")
//	public ResponseDto<Integer> replyDelete(@PathVariable int replyId) {
//		boardService.댓글삭제(replyId);
//		return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
//	}
}



