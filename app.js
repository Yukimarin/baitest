// Bài 1: Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
// in ra kết quả.
// let a = String(prompt ('Nhập vào chuỗi kí tự bất kỳ'));
// let b = String();
// for (i= a.length-1; i >=0; i--){
//     b= b + a[i]
// }
// alert(`${b}`);

// Bài 2: Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
// chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
// let a = prompt('Nhập vào chuỗi kí tự').toLowerCase();
// let b = a.split(' ')
// for (let i = 0; i < b.length; i++) {
//     b[i] = b[i][0].toUpperCase() + b[i].slice(1);    
// }
// let c = b.join(' ')
// console.log(c);

// Bài 3: Viết một chương trình xóa các phần tử trùng của một
// mảng và in ra kết quả. (1đ)
// let a = [1,2,3,4,5,4,4,4,5,5];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) === -1){
//         b.push(a[i])
//     }    
// }
// console.log(b);


// Bài 4: Viết một chương sắp xếp các phần tử là số ở trong
// mảng theo thứ tự tăng dần. (1đ)
// let a = [5,2,3,4,1];
// let b = [];

// Bài 5:Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên
// nhân viên). Xây dựng chương trình quản lý nhân viên với các
// chức năng (Read, Create, Update, Delete). (2đ)
// let teacher = ["Phú", "Cường", "Diệp"];
// let state = true;
// while (state){
//     let user = prompt('Nhập vào 1 trong 5 chữ cái C/R/U/D/E').toUpperCase();
//     if (user === "C"){
//         let c1 = prompt('Nhập thêm tên giáo viên mới');
//         teacher.push(c1);
//         console.log(teacher);
//     }else if (user === "R"){
//         console.log(teacher);
//     }else if (user === "U"){
//         let u1 = Number(prompt('Nhập vào vị trí muốn cập nhật'));
//         let r1 = String(prompt('Nhập vào tên giáo viên thay thế'));
//         teacher[u1]= `${r1}`;
//         console.log(teacher);
//     }else if (user === "D"){
//         let d1 = Number(prompt('Nhập vào vị trí muốn xóa tên'));
//         teacher.splice(`${d1}`,1);
//         console.log(teacher);
//     }else if (user === "E"){  
//         state = false;
//         console.log('Cảm ơn đã sử dụng chương trình');
//     }
// }    

// Bài 6: Viết chương trình cho phép người dùng nhập vào ngày
// tháng năm. (2đ)
// let a = prompt('Nhập ngày tháng năm bất kì ngăn bằng dấu /');
// let b = a.split('/');
// console.log(b);


// Bài 7: Cho 2 array: 
// let bookStore = ["Tôi thấy hoa vàng trên cỏ xanh","Đắc Nhân Tâm"];
// let cart =[["Tôi thấy hoa vàng trên cỏ xanh",0], ["Đắc Nhân Tâm",0]];
// let state = true;
// console.log("Chào mừng quý khách đến với cửa hàng");
//     for (let i = 0; i < bookStore.length; i++) {
//         console.log(`${i+1}. ${bookStore[i]}`);        
//     }  
// while (state){    
// let user = prompt('Nhập vào 1 trong 5 chữ cái C/R/U/D/E').toUpperCase();
//     if (user === "C"){
//         let buyItem= prompt('Nhập vào tên sách muốn mua');
//         let findIndex = -1; 
//         for (let i = 0; i < bookStore.length; i++) {
//             if (buyItem === bookStore[i]){
//             findIndex=i;   
//             } 
//         }
//         if (findIndex ===-1){
//             console.log(`Không có đầu sách ${buyItem} trong cửa hàng`);
//         } else {
//             let findIndex2 = -1 
//             for (let i = 0; i < cart.length; i++) {
//                 if (buyItem === cart[i][0]){
//                     findIndex2=i;
//                 }                
//             }
//             let number = Number(prompt('Nhập số lượng sách muốn mua'));
//             if (findIndex2 === -1){
//                 cart.push([buyItem,number]);
//             }else{
//                 cart[findIndex2][1]= cart[findIndex2][1] + number
//             }
//             for (let i = 0; i < cart.length; i++) {
//                 console.log('Giỏ hàng của bạn:');
//                 console.log(`${i+1}. ${cart[i][0]} - ${cart[i][1]}`);             
//             }            
//         }    
//     }else if (user === "R"){
//         for (let i = 0; i < bookStore.length; i++) {
//             console.log(`${i+1}. ${bookStore[i]}`);        
//         }  
//         for (let i = 0; i < cart.length; i++) {
//             console.log('Giỏ hàng của bạn:');
//             console.log(`${i+1}. ${cart[i][0]} - ${cart[i][1]}`);             
//         }    
//     }else if (user === "U"){
//         let updateItem = prompt('Nhập vào đầu sách muốn cập nhật');
//         let findIndex=-1;
//         for (let i = 0; i < cart.length; i++) {
//             if (updateItem === cart[i][0]){
//                 findIndex=i
//             }            
//         }
//         if (findIndex === -1){
//             console.log(`${updateItem} không có trong giỏ hàng`);
//         } else {
//             let updatenumber = Number(prompt('Nhập số lượng mới'));
//             cart[findIndex][1]=updatenumber;
//             for (let i = 0; i < cart.length; i++) {
//                 console.log('Giỏ hàng của bạn:');
//                 console.log(`${i+1}. ${cart[i][0]} - ${cart[i][1]}`);             
//             } ;
//         }
//     }else if (user === "D"){
//         let deleteItem = prompt('Nhập đầu sách muốn xóa')
//         let findIndex=-1;
//         for (let i = 0; i < cart.length; i++) {
//             if (deleteItem === cart[i][0]){
//                 findIndex=i
//             }            
//         }
//         if (findIndex === -1){
//             console.log(`${deleteItem} không có trong giỏ hàng`);
//         } else {
//             cart.splice(findIndex,1);
//             for (let i = 0; i < cart.length; i++) {
//                 console.log('Giỏ hàng của bạn:');
//                 console.log(`${i+1}. ${cart[i][0]} - ${cart[i][1]}`);             
//             } 
//         }
//     }else if (user === "E"){
//         state = false 
//         console.log('Cảm ơn quý khách. Hẹn gặp lại!');
//     }
// }    
