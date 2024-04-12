const soBiAn = Math.floor(Math.random() * 100) + 1;
let soLanDoanConLai = 5;

function kiemTraDoan() {
    const doan = parseInt(document.getElementById('doan').value);
    const amThanhDung = document.getElementById('amThanhDung');
    const amThanhSai = document.getElementById('amThanhSai');

    if (doan === soBiAn) {
        hienThongDiep(`Chúc mừng! Bạn đã tìm ra số bí ẩn: ${soBiAn}`, 'green');
        voHieuHoaNhap();
        phatAmThanh(amThanhDung);
        openGoogleForm()
    } else {
        soLanDoanConLai--;
        if (soLanDoanConLai === 0) {
            hienThongDiep(`Rất tiếc! Bạn đã hết số lần đoán. Số bí ẩn là: ${soBiAn}`, 'red');
            voHieuHoaNhap();
            phatAmThanh(amThanhSai);
        } else {
            hienThongDiep(`Số của bạn quá ${doan > soBiAn ? 'lớn' : 'nhỏ'}. Bạn còn ${soLanDoanConLai} lần đoán.`, 'black');
            phatAmThanh(amThanhSai);
        }
    }
}

function hienGoiY() {
    const goiY = soBiAn > 50 ? 'Số bí ẩn lớn hơn 50' : 'Số bí ẩn nhỏ hơn hoặc bằng 50';
    hienThongDiep(`Gợi ý: ${goiY}`, 'blue');
}

function hienThongDiep(thongDiep, mauSac) {
    const phanThongDiep = document.getElementById('thongDiep');
    phanThongDiep.textContent = thongDiep;
    phanThongDiep.style.color = mauSac;
}

function voHieuHoaNhap() {
    document.getElementById('doan').disabled = true;
    document.querySelectorAll('button').forEach(button => button.disabled = true);
}

function phatAmThanh(amThanh) {
    amThanh.play();
}


function openGoogleForm() {
    window.open('https://forms.gle/T69aDpyZDpNFhBbK6', '_blank');
}