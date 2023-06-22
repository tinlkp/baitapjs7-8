var listNumer = [];
function themSo() {
    var number = document.getElementById("txtNumber").value * 1;


    listNumer.push(number);

    console.log(listNumer);
    var result = "Số đã nhập là: " + listNumer;
    document.getElementById("hienThiSoDaNhap").innerHTML = result;
    return listNumer;

}



function tongSoDuong() {

    var tongSoDuong = 0;
    for (var i = 0; i < listNumer.length; i++) {
        if (listNumer[i] > 0) {
            tongSoDuong += listNumer[i];

        }


    }
    var result = "Tổng các số dương là: " + tongSoDuong;

    document.getElementById("hienThiTongSoDuong").innerHTML = result;

}


function soDuong() {
    var soLuongSoDuong = 0;
    for (var i = 0; i < listNumer.length; i++) {
        if (listNumer[i] > 0) {
            soLuongSoDuong++;
        }

    }
    var result = "Có " + soLuongSoDuong + " Số dương";
    document.getElementById("hienThiSoDuong").innerHTML = result;
    return soLuongSoDuong;

}
function soNhoNhat() {
    var soMin = listNumer[0];
    for (var i = 1; i < listNumer.length; i++) {
        if (soMin > listNumer[i]) {
            soMin = listNumer[i];

        }
    }
    var result = "Số Nhỏ nhất là: " + soMin;
    document.getElementById("hienThiSoNhoNhat").innerHTML = result;

}



function soDuongNhoNhat() {

    var soMin = listNumer[0];
    for (var i = 1; i < listNumer.length; i++) {
        if (listNumer[i] > 0) {
            if (listNumer[0] < 0) {
                soMin = listNumer[1];

            } else if (soMin > listNumer[i]) {
                soMin = listNumer[i];
            }
        }
    }
    var result = "Số Dương Nhỏ nhất là: " + soMin;
    document.getElementById("hienThiSoDuongNhoNhat").innerHTML = result;

}

function soChanCuoiCung() {
    var soChan = "";
    for (var i = 0; i < listNumer.length-1; i++) {
        if (listNumer[i] % 2 === 0) {
            soChan = listNumer[i];
        } else {
            soChan = -1;
        }


    }
    var result = "Số chẳn cuối cùng là số: " + soChan;
    document.getElementById("hienThiSoDuongNhoNhat").innerHTML = result;

}
function thayDoiViTri() {
    var vitri1 = document.getElementById("vitri1").value * 1;
    var vitri2 = document.getElementById("vitri2").value * 1;
    var so1 = listNumer[vitri1];
    var so2 = listNumer[vitri2];
    console.log(so1, so2);
    var so3 = "";
    if (so1 !== so2) {
        so3 = so1;
        so1 = so2;
        so2 = so3;
    }
    listNumer[vitri1] = so1;
    listNumer[vitri2] = so2;
    console.log(listNumer);

    var result = "Số đã nhập là: " + listNumer;
    document.getElementById("hienThiSoDaNhap").innerHTML = result;

}

function sapXepTangDan() {
    for (var i = 0; i < listNumer.length - 1; i++) {
        for (var j = i + 1; j < listNumer.length; j++)
            if (listNumer[i] > listNumer[j]) {
                var temp = listNumer[i];
                listNumer[i] = listNumer[j];
                listNumer[j] = temp;

            }
    }
    console.log(listNumer);
    var result = "Số đã nhập là: " + listNumer;
    document.getElementById("hienThiSoDaNhap").innerHTML = result;

}

function soNguyenToDauTien() {

    for (var i = 0; i < listNumer.length; i++) {
        var songuyento = listNumer[i];
        if (listNumer[i] < 2 || listNumer[i] % 2 === 0) {
            songuyento = -1;
        } else {
            break;

        }

    }
    console.log(songuyento);
    var result = "Số nguyên tố đầu tiên là: " + songuyento;
    document.getElementById("hienThiSoNguyenToDauTien").innerHTML = result;

}




function themSoThuc() {
    var soThuc = document.getElementById("mangSoThuc").value * 1;

    listNumer.push(soThuc);
    console.log(listNumer);
    var result = "Số đã nhập là: " + listNumer;
    document.getElementById("hienThiSoDaNhap").innerHTML = result;
    return listNumer;
}

function timSoNguyen() {
    var soLuongSoNguyen = 0;
    for (var i = 0; i < listNumer.length; i++) {
        var testSo = listNumer[i];
        if (Number.isInteger(testSo) === true) {
            soLuongSoNguyen++;
        }
    }
    console.log(soLuongSoNguyen);
    var result = "Số lượng số nguyên trong mảng là: " + soLuongSoNguyen + " số";
    document.getElementById("hienThiSoNguyen").innerHTML = result;

}

function soSanhSoAmVaDuong() {
    // số lượng số âm
    var soLuongSoAm = 0;
    for (var i = 0; i < listNumer.length; i++) {
        if (listNumer[i] < 0) {
            soLuongSoAm++;
        }
    }
    var result = "Số lượng số âm là: " + soLuongSoAm;
    document.getElementById("hienThiSoLuongSoAm").innerHTML = result;
    // số lượng số dương
    var soLuongSoDuong = 0;
    for (var i = 0; i < listNumer.length; i++) {
        if (listNumer[i] > 0) {
            soLuongSoDuong++;
        }

    }
    var result = "Có " + soLuongSoDuong + " Số dương";
    document.getElementById("hienThiSoDuong").innerHTML = result;
    // so sánh 2 số
    var result = "";
    if (soLuongSoAm < soLuongSoDuong) {
        result = "Số lượng số âm < số lượng số dương";
    } else if (soLuongSoAm > soLuongSoDuong) {
        result = "Số lượng số âm > số lượng số dương";
    } else if (soLuongSoAm = soLuongSoDuong) {
        result = "Số lượng số âm = số lượng số dương";
    }
    console.log(result);
    document.getElementById("hienThiSoSanhSo").innerHTML = result;

}