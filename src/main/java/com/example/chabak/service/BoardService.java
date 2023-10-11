package com.example.chabak.service;

import com.example.chabak.dto.ReplySaveRequestDto;
import com.example.chabak.model.Board;
import com.example.chabak.model.User;
import com.example.chabak.repository.BoardRepository;
import com.example.chabak.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final ReplyRepository replyRepository;


    @Transactional
    public void write(Board board, User user) { // title, content
        board.setCount(0);
        board.setUser(user);
        boardRepository.save(board);
    }

    @Transactional(readOnly = true)
    public Page<Board> boardList(Pageable pageable){

        return boardRepository.findAll(pageable);
    }


    @Transactional(readOnly = true)
    public Board boardDetail(int id) {
        return boardRepository.findById(id)
                .orElseThrow(()->{
                    return new IllegalArgumentException("글 상세보기 실패 : 아이디를 찾을 수 없습니다.");
                });
    }

    @Transactional
    public void delete(int id) {
        System.out.println("글삭제하기 : "+id);
        boardRepository.deleteById(id);
    }

    @Transactional
    public void modify(int id, Board requestBoard) {
        Board board = boardRepository.findById(id)
                .orElseThrow(()->{
                    return new IllegalArgumentException("글 찾기 실패 : 아이디를 찾을 수 없습니다.");
                }); // 영속화 완료
        board.setTitle(requestBoard.getTitle());
        board.setContent(requestBoard.getContent());
    }

    @Transactional
    public void replyWrite(ReplySaveRequestDto replySaveRequestDto) {
        int result = replyRepository.mSave(replySaveRequestDto.getUserId(),
                replySaveRequestDto.getBoardId(), replySaveRequestDto.getContent(), replySaveRequestDto.getRating());
        System.out.println("BoardService : "+result);
    }

    @Transactional
    public void replyDelete(int replyId) {
        replyRepository.deleteById(replyId);
    }
}
