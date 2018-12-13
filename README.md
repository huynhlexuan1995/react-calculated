##Html,CSS,Javascript
#I. 3 cách nhúng CSS vào trang web
- Tạo ra 1 file .css (file này sẽ được link tới file HTML nhờ thẻ <link>)
- Chèn CSS Vào Thẻ HTML:
+ Mã CSS có thể được thêm trực tiếp vào thẻ (mở) HTML sử dụng thuộc tính style
+EX: <p style="color: red">Đoạn văn sẽ có màu đỏ.</p>
- Nhúng CSS sử dụng thẻ <style>
+Ex: 
     <style>
	body {
    	font-size: 12px;
	}
     </style>

#II. Sự khách nhau giữa các loại selector trong css
1. Element Selector trong CSS:
- Element Selector này sẽ chọn các phần tử dựa trên tên của chúng
EX:    p{
	 clor:red	
       }
2. Class Selector
- Áp dụng các style cho các phần từ dựa trên class của chúng
Ex	.xxx{background:white}
3. Id Selector trong CSS
- Áp dụng các style cho các phần từ dựa trên id của chúng
EX: #xxx{text-align:center}
4. Child Selector trong CSS
- DÙng để chọn phần tử con
EX:	body > p {
            color:blue
        } 
- Style này sẽ được áp dụng cho tất cả các phần tử p mà trực tiếp là con của phần tử body. Các phần tử p khác nằm bên trong các phần tử như div hoặc td sẽ không bị tác động.
5. Grouping Selector trong CSS
- Dùng để nhóm các phần tử lại và áp dụng style cho chúng
EX: h1,h2,h3 {color:red}
6. Attribute Selector trong CSS
- Dùng để áp dụng style cho các phần tử html có các thuôcj  tính cụ thể nào đó
EX: 	input[type="text"]{color:#fff0;}
7. Comment trong CSS
EX: p {
       color:red;
	/*start comment
	
	finish comment*/
       text-align:center;
      }
#III. Thứ tự ưu  tiên selector trong CSS
1.!important
2.Inline
3.Specificity của CSS selector
4.Thứ tự khai báo
#IV. Sự khác biệt giữ display:none và visibility:hidden
- Đối với display: none, thông thường nhất chúng ta sử dụng hai thuộc tính cơ bản sau:
+ display: block (Hiện)
+ display: none (Ẩn)
Khi dùng disable:none thì đối tướng bị ẩn đồng thời không gian mà đối tượng đó chiếm cũng bị mất đi nhường không gian đấy cho các đối tượng khác
- Đối với visibility: hidden, thông thường cũng sử dụng hai thuộc tính:
visibility: visible (Hiện)
visibility: hidden (Ân)
Khi dùng visibility:hidden Khác với display: none thuộc tính này chỉ làm ẩn đi đối tượng được chọn mà không mất đi vị trí, không gian chiếm dụng của nó
#V.Khái niệm của Object trong JS
- Một đối tượng (một object) là một danh sách các item, mỗi item là một cặp name-value, trong đó value có thể là: các kiểu dữ liệu cơ bản, function, hay cũng có thể là một object khác (kiểu dữ liệu phức hợp).

- Ta gọi mỗi item là một property(thuộc tính) của object nếu value của item đó có kiểu dữ liệu là kiểu phức hợp hoặc các kiểu dữ liệu cơ bản, ngược lại nếu value của item nó là một hàm (một function) thì ta gọi nó là method của object (phương thức của object).
- Các cách khởi tạo object:
1. Object literals.
Đây là cách khởi tạo rất phổ biến:
var emptyObj = {}; // initialize an empty object

// initialize a person with 4 properties
var person = {
    firstName: 'John';
    lastName: 'Doe',
    age: 24,
    greet: function() {
        console.log('Hello world');
    }
}

2. Object constructor
Cách khởi tạo này bạn sử dụng toán tử new để khởi tạo một object rỗng:

var dog = new Object();
dog.speech = 'bow-wow';
dog.apperance = 'cute';
dog.say = function() {
    console.log(this.speech);
}

#VI. Các cách khác nhau để tạo ra array trong JS
C1. var array-name = [item1, item2, …];
C2. var cars = new Array(“Saab”, “Volvo”, “BMW”);
#VII.
Array() dùng để định nghĩa và khởi tạo mãng với độ dài mãng được xác định, ví dụ:
let a;
a = new Array(5);
console.log(a.length); // 5

[] cũng mang ý nghĩa tương tự Array(), tuy nhiên [] trực tiếp khai báo giá trị mãng, số lượng phần tử tương đương với độ dài mãng, ví dụ:
let b = [];
b = [1, 2];
console.log(b.length) // 2




