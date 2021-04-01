function dang_ky_1() {
    let enter = "<br>";
    let ho_1 = document.getElementById("ho").value;
    let ten_1 = document.getElementById("ten").value;
    let email_1 = document.getElementById("email").value;
    let day_1 = document.getElementById("day").value;
    let month_1 = document.getElementById("month").value;
    let year_1 = document.getElementById("years").value;
    let gender_1 = document.getElementsByName("gender");
    let alert1 = document.getElementById("alert_1");
    let alert2 = document.getElementById("alert_2");
    let alert3 = document.getElementById("alert_3");
    let alert4 = document.getElementById("alert_4");
    let alert5 = document.getElementById("alert_5");
    if (ho_1==''){
        alert1.innerText = "Vui lòng nhập họ";
    }
    
    if (ten_1==''){
        alert2.innerText = "Vui lòng nhập tên";
    }
    
    if (email_1==''){
        alert3.innerText = "Vui lòng nhập email";
    }
    if ( day_1=='' || month_1=='' || year_1==''){
        alert4.innerText = " Vui lòng nhập ngày/tháng/năm sinh";
    }
    for (let i = 0; i < gender_1.length; i++){
        if (gender_1[i].checked === true){
           gender_1 = "anh";
        }else if(gender_1[i].checked === false){
            gender_1 = "chị";
        }else{
            alert5.innerText = " Vui lòng chọn giới tính";
        }
    }
    if(ho_1 !=='' && ten_1 !==''&& email_1 !=='' && day_1!=='' && month_1!=='' && year_1!=='' && gender_1 !==''){
    document.write("Chào mừng " + gender_1+ " " + ho_1 +" "+ ten_1 + " đã đăng ký thành công!" + enter 
    +"Họ và tên: " + ho_1 + " " + ten_1 + enter 
    + "Email: " + email_1 + enter
    +" Ngày sinh: " + day_1 +"/" + month_1 +"/"+year_1);
    }
    
}