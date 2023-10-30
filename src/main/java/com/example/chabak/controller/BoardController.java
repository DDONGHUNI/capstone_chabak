package com.example.chabak.controller;

import com.example.chabak.model.Board;
import com.example.chabak.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class BoardController {

    @Autowired
    private BoardService boardService;

//    @GetMapping("/board/saveForm")
//    public String saveForm() {
//        return "board/saveForm";
//    }

    @GetMapping("/saveForm/{categoryName}")
    public String saveForm(Model model, @PathVariable String categoryName) {
        model.addAttribute("categoryName", categoryName);
        return "board/saveForm";
    }

    @GetMapping("/mainMenu/{categoryName}")
    public String index(Model model, @PageableDefault(size=3, sort="id", direction = Sort.Direction.DESC) Pageable pageable, @PathVariable String categoryName) {
        model.addAttribute("boards", boardService.boardList(categoryName, pageable));
        return "mainMenu/" + categoryName;
    }

    @GetMapping("")
    public String noticeBoard(){
        return "index";
    }

    @GetMapping("/news/board/{id}")
    public String findById(@PathVariable int id, Model model) {
        Map ratingOptions = new HashMap();
        ratingOptions.put(0.0, "☆☆☆☆☆");
        ratingOptions.put(1.0, "★☆☆☆☆");
        ratingOptions.put(2.0, "★★☆☆☆");
        ratingOptions.put(3.0, "★★★☆☆");
        ratingOptions.put(4.0, "★★★★☆");
        ratingOptions.put(5.0, "★★★★★");

        model.addAttribute("board", boardService.boardDetail(id));
        model.addAttribute("ratingOptions", ratingOptions);
        return "board/detail";
    }

    @GetMapping("/news/board/{id}/updateForm")
    public String updateForm(@PathVariable int id, Model model) {
        model.addAttribute("board", boardService.boardDetail(id));
        return "board/updateForm";
    }


}
