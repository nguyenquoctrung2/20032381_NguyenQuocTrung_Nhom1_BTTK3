// function KiemTraTenDN(){
//     var re=/^[a-z]\*w/;
//     if(re.test(document.getElementById('txtDN').value.trim())==false){
//         tendn.innerText = "* Bắt buộc, bắt đầu bằng ký tự";
//         return false;
//     } else{
//         tendn.innerText=' *';
//         return true;
//     }
// }
// function KiemTraPassWord(){
//     var re=/(?=.*\d).{6,}/;
//     if(re.test(document.getElementById('txtMK').value.trim())==false){
//         mk.innerText=" * phải có chữ , số ít nhất 6 ký tự";
//         return false;
//     } else {
//         mk.innerText=" *";
//         return true;
//     }
// }
// function KiemTraXacNhanPassword(){
//     if(document.getElementById('txtXNMK').value !=
//     document.getElementById('txtMK').value){
//         xnmk.innerText=" * phải giống ô mật khẩu";
//         return false
//     } else{
//         xnmk.innerText = " *";
//         return true;
//     }
// }
// function KiemTraNgaySinh(){
//     var ne=new Date(document.getElementById('txtNS').value);
//     var today=new Date();
//     if(eval(today.getFullYear()=ns.getFullYear())<=10){
//         ngaysinh.innerText=" Tuổi phải > 10";
//         return false;
//     } else {
//         ngaysinh.innerText ="";
//         return true;
//     }
// }
// function SubmitForm(){
//     if(KiemTraTenDN()==false || KiemTraPassWord()==false||
//     KiemTraXacNhanPassword()==false){
//         alert("Bạn chưa nhập đầy đủ và đúng thông tin");
//     } else{
//         var tt1 = document.getElementById("txtName").value;
//         var tt2 = document.getElementById("txtNS").value;
//         var w = open ("FormValidation_info.html", "Ketqua");
//         w.document.write("THONG TIN CA NHAN");
//         w.document.write("Ho ten: " + tt1 +"<br>");
//         w.document.write("Nam sinh: " + tt1 +"<br>");
//     }
// }