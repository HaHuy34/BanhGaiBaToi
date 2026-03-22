var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 1000, // Thay đổi giá trị này để điều chỉnh tốc độ chuyển slide
    disableOnInteraction: false, // Để autoplay không dừng khi người dùng tương tác
  },
  loop: true, // Đảm bảo vòng lặp qua các slide
});


// Hiển thị nút khi cuộn xuống 100px
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }
  
  // Cuộn từ từ về đầu trang khi nhấn nút
  document.getElementById("back-to-top").addEventListener("click", function(event){
    event.preventDefault();
    let scrollStep = -window.scrollY / 15;  // Mỗi bước cuộn sẽ là 1/15 của tổng số pixel
    let scrollInterval = setInterval(function(){
      if (window.scrollY != 0) {
        window.scrollBy(0, scrollStep);  // Cuộn mỗi bước
      } else {
        clearInterval(scrollInterval);  // Ngừng cuộn khi đến đầu trang
      }
    }, 15);  // Mỗi bước sẽ chạy sau 15ms
  });






// Lấy tất cả các thẻ <a> có class "add"
const addresses = document.querySelectorAll(".add");
const mapsContainer = document.getElementById("maps");
// Biến chứa div main-noti
const mainNoti = document.getElementById("main-noti");

// Lắng nghe sự kiện click vào các thẻ <a class="add">
addresses.forEach(function(address) {
    address.addEventListener("click", function(event) {
        // Lấy địa chỉ và số điện thoại từ thuộc tính data
        const addressText = this.textContent;
        const phone = this.getAttribute("data-phone");
        const mapSrc = this.getAttribute("data-map");

        // Chèn thông tin vào khu vực thông báo
        document.getElementById("address").textContent = addressText;
        document.getElementById("contact").textContent = phone;
        mapsContainer.innerHTML = `<iframe src="${mapSrc}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

        // Hiển thị div main-noti
        mainNoti.style.display = "block";

        // Ngăn việc click lan ra ngoài
        event.stopPropagation();
    });
});

// const daiLy = document.getElementById("phone-daily")
// daiLy.addEventListener("click", () => {
//   alert("0938402834")
// })













