package com.example.chabak.controller;

import java.util.Iterator;
import java.util.List;
import java.util.function.Supplier;

import com.example.chabak.config.PrincipalDetails;
import com.example.chabak.model.Board;
import com.example.chabak.model.PointEntry;
import com.example.chabak.model.User;
import com.example.chabak.repository.UserRepository;
import com.example.chabak.service.BoardService;
import com.example.chabak.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BoardService boardService;

    @Autowired
    private PointService pointService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;



//    @GetMapping("/user")
//    public @ResponseBody String user(@AuthenticationPrincipal PrincipalDetails principal) {
//        System.out.println("Principal : " + principal.getUser());
//        System.out.println("OAuth2 : "+principal.getUser().getProvider());
//        // iterator 순차 출력 해보기
//        Iterator<? extends GrantedAuthority> iter = principal.getAuthorities().iterator();
//        while (iter.hasNext()) {
//            GrantedAuthority auth = iter.next();
//            System.out.println(auth.getAuthority());
//        }
//
//        return "유저 페이지입니다.";
//    }

    //유저 정보 확인
    @Secured("ROLE_MANAGER")
    @GetMapping("/user/{id}")
    @ResponseBody
    public User detail(@PathVariable int id){
        User user = userRepository.findById(id).orElseThrow(new Supplier<IllegalArgumentException>(){
            @Override
            public IllegalArgumentException get() {
                return new IllegalArgumentException("해당 유저는 없습니다. id:"+id);
            }
        });
        return user;
    }
//
//
//    //유저 명단
//    @GetMapping("/users")
//    public String list(Model model){
//        List<User> users = userRepository.findAll();
//        model.addAttribute("users", users);
//        return "userList";
//    }

//    @GetMapping("/pointBoard")
//    public @ResponseBody String pointBoard() {
//        List<PointEntry> pl = pointService.pointEntryList();
//        for(PointEntry pe : pl) {
//            Board board = boardService.boardDetail(pe.getBoard().getId());
//            if (pe.getCategory().equals("유료캠핑장")) {
//                board.setCategoryName("place02");
//            }else{
//                board.setCategoryName("place03");
//            }
//            boardService.modify(pe.getBoard().getId(),board);
//
//
//
//        }
//        return "바꾸기 완료";
//    }



//        User user = userRepository.findById(99).orElseThrow(new Supplier<IllegalArgumentException>(){
//            @Override
//            public IllegalArgumentException get() {
//                return new IllegalArgumentException("해당 유저는 없습니다. id:"+99);
//            }
//        });
//        List<PointEntry> pl = pointService.pointEntryList();
//        int i = 200000;
//        for(PointEntry pe : pl){
//            Board b = new Board();
//            b.setId(i++);
//            b.setTitle(pe.getName());
//            b.setCategoryName("pointEntry");
//            Board board = boardService.write(b,user);
//            pe.setBoard(board);
//        }
//
//


    @GetMapping("/admin")
    public @ResponseBody String admin() {
        return "어드민 페이지입니다.";
    }

    @Secured("ROLE_MANAGER")
    @GetMapping("/manager")
    public @ResponseBody String manager() {
        return "매니저 페이지입니다.";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/join")
    public String join() {
        return "join";
    }
    

    @PostMapping("/joinProc")
    public String joinProc(User user) {
        System.out.println("회원가입 진행 : " + user);
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setPassword(encPassword);
        user.setRole("ROLE_USER");
        userRepository.save(user);
        return "redirect:/";
    }

}
