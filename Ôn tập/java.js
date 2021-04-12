//tao lop ung dung
class ung_dung {
    constructor() {
        this.cuoc_hen = document.getElementById('cuoc_hen');
        this.cac_cuoc_hen = [];
        this.DSCV = [];
    }
    // tao phuong thuc hien thi danh sach
    hien_thi_danh_sach() {
        let hien_thi = '';

        /* Lấy ra với khóa là key_data_arr*/
        let get_data_arr    = localStorage.getItem("DaTa");
        get_data_arr        = JSON.parse(get_data_arr); // chuyển từ json sang mảng

        
        //console.log(this.cac_cuoc_hen);

        for (let i = 0; i < this.cac_cuoc_hen.length; i++) {
            hien_thi += '<tr>';
            hien_thi += `<td>${i + 1}. ${this.cac_cuoc_hen[i][0]} </td>`;
            hien_thi += `<td> ${this.cac_cuoc_hen[i][1]} </td>`;
           
            hien_thi += '<td><button onclick="objung_dung.xoa(' + i + ')">Đã hoàn thành/Xóa</button></td>';
            hien_thi += '</tr>';
        }
        //dua html vao

        this.cuoc_hen.innerHTML = hien_thi;
    }
    //them cuoc hen moi vao danh sach 
    them_moi() {
        let mang = [];
        let them_cuoc_hen = document.getElementById('them_cuoc_hen').value;
        let thoi_gian_hen = document.getElementById('thoi_gian_hen').value;
        if(them_cuoc_hen != 0 && thoi_gian_hen != 0){
        mang.push(them_cuoc_hen, thoi_gian_hen);
        this.cac_cuoc_hen.push( mang ); 
    }else{
        alert('"Vui lòng ghi nội dung và thời gian trước khi thêm mới cuộc hẹn"')
    }
        //lay data cu
        let get_data_arr    = localStorage.getItem("DaTa");
        get_data_arr        = JSON.parse(get_data_arr);

        //push vao data moi
        get_data_arr.push(mang);
        localStorage.setItem("DaTa", JSON.stringify(get_data_arr));
        
    }
    xoa(item){
        this.cac_cuoc_hen.splice(item,1);
        this.hien_thi_danh_sach();

    }
    
}



// khoi tao doi tuong
let objung_dung = new ung_dung();

let them_moi = document.getElementById('them_moi');
them_moi.addEventListener('click', function () {
    objung_dung.them_moi();
    // goi phuong thuc
    objung_dung.hien_thi_danh_sach();
});
objung_dung.hien_thi_danh_sach();
objung_dung.xoa();
