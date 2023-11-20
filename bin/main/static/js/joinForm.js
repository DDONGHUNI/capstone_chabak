function idLength(value) {
  return value.length >= 4 && value.length <= 12
}

function onlyNumberAndEnglish(str) {
  return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
}

function strongPassword (str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

function isMatch (password1, password2) {
  return password1 === password2;
}






async function check(event) {
        event.preventDefault();
        const name = $("#name").val();
        if (name == "") {
            alert("닉네임을 입력해주세요. 필수항목입니다.");
            $("#name").focus();
            return false;
        }else if(idLength(name) === false) {
             alert("닉네임 글자 수를 4~12글자로 해주세요.")
             $("#name").focus();
             return false;
        }

        const username = $("#username").val();
        if (username == "") {
            alert("아이디를 입력해주세요. 필수항목입니다.");
            $("#username").focus();
            return false;
        } else if(onlyNumberAndEnglish(username) === false) {
            alert("아이디에 영어 또는 숫자만 입력 해주세요.");
            $("#username").focus();
            return false;
        } else if(idLength(username) === false) {
            alert("아이디의 글자 수를 4~12글자로 해주세요.")
            $("#username").focus();
            return false;
        }


        const password = $("#password").val();
        if (password == "") {
            alert("비밀번호를 입력해주세요. 필수항목입니다.");
            $("#password").focus();
            return false;
        } else if(strongPassword(password)===false) {
            alert("비밀번호는 8글자 이상, 영문, 숫자, 특수문자(@$!%*#?&)를 사용하세요");
            $("#password").focus();
            return false;
         }

        const email = $("#email").val();
        if (email == "") {
            alert("이메일을 입력해주세요. 필수항목입니다.");
            $("#email").focus();
            return false;
        }

        let data = {
                username: $("#username").val()
        };

         try {
                // Ajax를 사용하여 데이터 전송
                const result = await $.ajax({
                    type: "post",
                    url: "/api/user/usernameRegister",
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    dataType: "json",
                });

                // 결과에 따라 check() 함수의 반환 값 동적으로 변경
                if (result == "0") {
                    alert("회원가입 완료");
                    document.getElementById("joinForm").submit();
                } else {
                    alert("중복된 아이디 입니다.");
                    location.href = "/join";
                }
            } catch (error) {
                alert("ajax 실행 실패");
                alert("error: " + error);
                return false;
            }



}