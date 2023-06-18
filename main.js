var listNumer = [];
function themSo() {
    var number = document.getElementById("txtNumber").value * 1;

    listNumer.push(number);
    console.log(listNumer);
    return listNumer;
}


function tongSoDuong() {
    var tongSoDuong = 0;
    for (var i = 0; i < listNumer.length; i++) {
        if (listNumer[i] > 0) {
            tongSoDuong += listNumer[i];
        } else {
            alert("vui lòng nhập số dương!!!");
        }
    }
    var result = "Tổng các số dương là: " + tongSoDuong;

    document.getElementById("hienThiTongSoDuong").innerHTML = result;
}
function soDuong() {
    var soDuong = 0;
    for (var i = 0; i < listNumer.length; i++) {
        if (listNumer[i] > 0) {
            soDuong++;
        }

    }
    var result = "Có " + soDuong + " Số dương";
    document.getElementById("hienThiSoDuong").innerHTML = result;

}