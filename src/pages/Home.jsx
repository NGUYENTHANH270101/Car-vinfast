import React from "react";
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


    const handleClickClose = () => {
        const eleVideo = document.getElementById("video")
        const eleMain = document.getElementsByClassName("main__container")
        const eleContent = document.getElementsByClassName("menu__content")
        const eleMoto = document.getElementsByClassName("container__moto")
        const elePin = document.getElementsByClassName("container__pin")
        const eleDevice = document.getElementsByClassName("container__device")
        const eleService = document.getElementsByClassName("container__service")
        const eleFooter = document.getElementsByClassName("footer")


        eleContent[0].classList.remove("activemenu")
        eleVideo.classList.remove("activeShadow")
        eleMain[0].classList.remove("activeShadow")
        eleMain[0].classList.remove("activeBox")
        eleMoto[0].classList.remove("activeShadow")
        eleMoto[0].classList.remove("activeBox")
        elePin[0].classList.remove("activeShadow")
        elePin[0].classList.remove("activeBox")
        eleDevice[0].classList.remove("activeShadow")
        eleDevice[0].classList.remove("activeBox")
        eleService[0].classList.remove("activeShadow")
        eleService[0].classList.remove("activeShadow")
        eleService[0].classList.remove("activeBox")
        eleFooter[0].classList.remove("activeShadow")
        eleFooter[0].classList.remove("activeBox")
    }
    return (
        <>
            <div className="container__video">
                <div className="box-video">
                    <video autoPlay loop muted id='video'>
                        <source src="https://storage.googleapis.com/vinfast-data-01/VinFast-VF8-VF9-electric-SUV-cars.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="menu__content">
                    <div className="icon-cross" onClick={handleClickClose}><i class="ri-close-fill"></i></div>
                    <div className="inf-content">
                        <div className="text">
                            Tiện ích
                        </div>
                        <p>So sánh xe</p>
                        <p>Dự toán chi phí lăn bánh</p>
                        <p>Dự toán vay trả góp</p>
                        <p>Thẩm định vay trả góp</p>

                    </div>
                    <div className="inf-content">
                        <div className="text">
                            Tin tức
                        </div>
                        <p>Công ty</p>
                        <p>Cộng đồng</p>
                    </div>
                    <div className="inf-content">
                        <div className="text">
                            Hỗ trợ
                        </div>
                        <p>Tìm Showroom & rạm sạc</p>
                        <p>Câu hỏi thường gặp</p>
                    </div>
                    <div className="inf-content">
                        <div className="text">
                            Thảo luận
                        </div>
                        <p>Cộng đồng Vinfast Toàn cầu</p>
                    </div>
                </div>
            </div>


            <Slider {...settings} className="main__container">


                <div className="box-car">
                    <div className="img__car">
                        <Link to="/cardetail"><img class="static-img" src="https://storage.googleapis.com/vinfast-data-01/vf-5_1670631186.png" alt="Xe điện VinFast VF5 Plus" /></Link>
                    </div>
                    <div className="title__car">
                        <h2>VF 5 PLUS</h2>
                        <p>Kiến tạo xu hướng mới</p>
                        <div className="inf__car">
                            <div className="inf-vehicles">
                                <p>Dòng xe</p>
                                <span>SUV</span>
                            </div>
                            <div className="inf-number">
                                <p>Số chỗ ngồi</p>
                                <span>5 chỗ</span>
                            </div>
                            <div className="inf-distance">
                                <p>Quãng đường</p>
                                <span>>300 Km</span>
                            </div>
                        </div>
                    </div>


                    <div className="price__car">
                        <p>Từ 458.000.000 VND</p>
                    </div>

                    <div className="btn__car">
                        <button className="deposit">Đặt cọc</button>
                        <button className="detail">Xem chi tiết</button>
                    </div>
                </div>
                <div className="box-car">
                    <div className="img__car">
                        <Link to='/cardetail'><img class="static-img" src="https://storage.googleapis.com/vinfast-data-01/vfe34_1666149852.png" alt="Xe điện VinFast VFe34" /></Link>
                    </div>
                    <div className="title__car">
                        <h2>VF e34</h2>
                        <p>Cùng bạn bức phá mọi giới hạn</p>
                        <div className="inf__car">
                            <div className="inf-vehicles">
                                <p>Dòng xe</p>
                                <span>SUV</span>
                            </div>
                            <div className="inf-number">
                                <p>Số chỗ ngồi</p>
                                <span>5 chỗ</span>
                            </div>
                            <div className="inf-distance">
                                <p>Quãng đường</p>
                                <span>~285 Km</span>
                            </div>
                        </div>
                    </div>


                    <div className="price__car">
                        <p>Từ 710.000.000 VND</p>
                    </div>

                    <div className="btn__car">
                        <button className="deposit">Đặt cọc</button>
                        <button className="detail">Xem chi tiết</button>
                    </div>
                </div>

                <div className="box-car">
                    <div className="img__car">
                        <Link to='/cardetail'><img class="static-img" src="https://storage.googleapis.com/vinfast-data-01/vf8_1666149860.png" alt="Xe điện VinFast VF8 cao cấp" /></Link>
                    </div>
                    <div className="title__car">
                        <h2>VF 8</h2>
                        <p>Hơn cả sự hứng khởi</p>
                        <div className="inf__car">
                            <div className="inf-vehicles">
                                <p>Dòng xe</p>
                                <span>SUV</span>
                            </div>
                            <div className="inf-number">
                                <p>Số chỗ ngồi</p>
                                <span>5 chỗ</span>
                            </div>
                            <div className="inf-distance">
                                <p>Quãng đường</p>
                                <span>~420 Km</span>
                            </div>
                        </div>
                    </div>


                    <div className="price__car">
                        <p>Từ 1.129.000.000 VND</p>
                    </div>

                    <div className="btn__car">
                        <button className="deposit">Đặt cọc</button>
                        <button className="detail">Xem chi tiết</button>
                    </div>
                </div>


                <div className="box-car">
                    <div className="img__car">
                        <Link to='/cardetail'><img class="static-img" src="https://storage.googleapis.com/vinfast-data-01/vf9_1666149884.png" alt="Xe điện VinFast VF9 cao cấp" /></Link>
                    </div>
                    <div className="title__car">
                        <h2>VF 9</h2>
                        <p>Hơn cả sự tận hưởng</p>
                        <div className="inf__car">
                            <div className="inf-vehicles">
                                <p>Dòng xe</p>
                                <span>SUV</span>
                            </div>
                            <div className="inf-number">
                                <p>Số chỗ ngồi</p>
                                <span>6-7 chỗ</span>
                            </div>
                            <div className="inf-distance">
                                <p>Quãng đường</p>
                                <span>>300 Km</span>
                            </div>
                        </div>
                    </div>


                    <div className="price__car">
                        <p>Từ 1.491.000.000 VND</p>
                    </div>

                    <div className="btn__car">
                        <button className="deposit">Đặt cọc</button>
                        <button className="detail">Xem chi tiết</button>
                    </div>
                </div>

                <div className="box-car">
                    <div className="img__car">
                        <Link to='/cardetail'><img class="static-img" src="https://storage.googleapis.com/vinfast-data-01/lux-a_1666149834.png" alt="Xe ô tô VinFast LUX A2.0" /></Link>
                    </div>
                    <div className="title__car">
                        <h2>LUX A2.0</h2>
                        <p>Tận hưởng từng khoảnh khắc</p>
                        <div className="inf__car">
                            <div className="inf-vehicles">
                                <p>Dòng xe</p>
                                <span>SEDAN</span>
                            </div>
                            <div className="inf-number">
                                <p>Số chỗ ngồi</p>
                                <span>5 chỗ</span>
                            </div>
                            <div className="inf-distance">
                                <p>Quãng đường</p>
                                <span>~6.9 1/100 km</span>
                            </div>
                        </div>
                    </div>


                    <div className="price__car">
                        <p>Từ 1.115.120.000 VND</p>
                    </div>

                    <div className="btn__car">
                        <button className="deposit">Đặt cọc</button>
                        <button className="detail">Xem chi tiết</button>
                    </div>
                </div>
            </Slider>
            <div className="icon__car">
                <div className="prev"><i class="ri-skip-back-fill"></i></div>
                <div className="next"><i class="ri-skip-forward-fill"></i></div>
            </div>


            <div className="container__moto">
                <div className="menu-moto">
                    <ul className="nav-menu">
                        <li className="nav-item">Xe máy điện cao cấp</li>
                        <li className="nav-item">Xe máy điện trung cấp</li>
                        <li className="nav-item">Xe máy điệnn phổ thông</li>
                    </ul>
                </div>

                <div className="moto-electric">
                    <ul className="list-moto">
                        <div className="box-moto">
                            <li className="moto">
                                <div className="img-moto">
                                    <a href="https://shop.vinfastauto.com/vn_vi/bike-vento.html" class="bike-img" onclick="gtag_custom_link(this);">

                                        <img src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png" alt="Xe máy điện Vento" />
                                    </a>
                                </div>
                                <div className="title-moto">
                                    <h3>VENTO</h3>
                                </div>

                                <div className="inf-moto">
                                    <div className="inf-distance">
                                        <p>Quãng đường</p>
                                        <span>lên tới 110 km/1 lần sạc</span>
                                    </div>

                                    <div className="speed-moto">
                                        <p>Tốc độ</p>
                                        <span>Lên tới 80km/h</span>
                                    </div>
                                </div>

                                <div className="price-moto">
                                    <h5>Từ 56.350.000 VND</h5>
                                </div>

                                <div className="btn__car">
                                    <button className="deposit">Đặt cọc</button>
                                    <button className="detail">Xem chi tiết</button>
                                </div>
                            </li>
                        </div>


                        <div className="box-moto">
                            <li className="moto">
                                <div className="img-moto">
                                    <a href="https://shop.vinfastauto.com/vn_vi/bike-vento-s.html" class="bike-img" onclick="gtag_custom_link(this);">
                                        <img class="" src="https://storage.googleapis.com/vinfast-data-01/VentoS_1656325991.png" alt="Xe máy điện Vento S" />
                                    </a>
                                </div>
                                <div className="title-moto">
                                    <h3>VENTO S</h3>
                                </div>

                                <div className="inf-moto">
                                    <div className="inf-distance">
                                        <p>Quãng đường</p>
                                        <span>lên tới 160 km/1 lần sạc</span>
                                    </div>

                                    <div className="speed-moto">
                                        <p>Tốc độ</p>
                                        <span>Lên tới 89km/h</span>
                                    </div>
                                </div>

                                <div className="price-moto">
                                    <h5>Từ 56.000.000 VND</h5>
                                </div>

                                <div className="btn__car">
                                    <button className="deposit">Đặt cọc</button>
                                    <button className="detail">Xem chi tiết</button>
                                </div>
                            </li>
                        </div>

                        <div className="box-moto">
                            <li className="moto">
                                <div className="img-moto">
                                    <img class="" src="https://storage.googleapis.com/vinfast-data-01/Theon_1656326137.png" alt="Xe máy điện Theon" />
                                </div>
                                <div className="title-moto">
                                    <h3>THEON</h3>
                                </div>

                                <div className="inf-moto">
                                    <div className="inf-distance">
                                        <p>Quãng đường</p>
                                        <span>lên tới 101 km/1 lần sạc</span>
                                    </div>

                                    <div className="speed-moto">
                                        <p>Tốc độ</p>
                                        <span>Lên tới 90km/h</span>
                                    </div>
                                </div>

                                <div className="price-moto">
                                    <h5>Từ 63.900.000 VND</h5>
                                </div>

                                <div className="btn__car">
                                    <button className="deposit">Đặt cọc</button>
                                    <button className="detail">Xem chi tiết</button>
                                </div>
                            </li>
                        </div>
                        <div className="box-moto">
                            <li className="moto">
                                <div className="img-moto">
                                    <img class="" src="https://storage.googleapis.com/vinfast-data-01/TheonS_1656326218.png" alt="Xe máy điện Theon S" />
                                </div>
                                <div className="title-moto">
                                    <h3>THEON S</h3>
                                </div>

                                <div className="inf-moto">
                                    <div className="inf-distance">
                                        <p>Quãng đường</p>
                                        <span>lên tới 150 km/1 lần sạc</span>
                                    </div>

                                    <div className="speed-moto">
                                        <p>Tốc độ</p>
                                        <span>Lên tới 99km/h</span>
                                    </div>
                                </div>

                                <div className="price-moto">
                                    <h5>Từ 69.900.000 VND</h5>
                                </div>

                                <div className="btn__car">
                                    <button className="deposit">Đặt cọc</button>
                                    <button className="detail">Xem chi tiết</button>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="container__pin">
                <div className="battery-item">
                    <h1>Pin và trạm sạc</h1>
                    <p>Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp dụng chính sách cho thuê pin độc đáo, ưu việt và khác biệt với tất cả các mô hình cho thuê pin từ trước tới nay trên thế giới.</p>
                </div>

                <div className="battery-items">
                    <div className="item-show">
                        <div className="item-img">
                            <a href="https://vinfastauto.com/vn_vi/dich-vu-pin-oto-dien" onclick="gtag_custom_link(this);">
                                <img src="https://storage.googleapis.com/vinfast-data-01/image-pin-tramsac-oto_1666149988.png" alt="Pin và trạm sạc ô tô điện" typeof="foaf:Image" />
                            </a>
                        </div>
                        <div className="item-inf">
                            <p>Pin và trạm sạc ô tô</p>
                            <div className="btn__car">
                                <button className="detail">Xem chi tiết</button>
                            </div>
                        </div>

                    </div>

                    <div className="item-show">
                        <div className="item-img">
                            <a href="https://vinfastauto.com/vn_vi/dich-vu-pin-xe-may-dien" onclick="gtag_custom_link(this);">
                                <img src="https://storage.googleapis.com/vinfast-data-01/image-pin-tramsac-xmd_1666150010.png" alt="Pin và trạm sạc xe máy điện" typeof="foaf:Image" />

                            </a>
                        </div>
                        <div className="item-inf">
                            <p>Pin và trạm sạc xe máy điện</p>
                            <div className="btn__car">
                                <button className="detail">Xem chi tiết</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container__device">
                <div className="img-device">
                    <img src="https://storage.googleapis.com/vinfast-data-01/thiet-bi-sac-di-dong_1666150099.png" alt="Thiết bị sạc pin di động" typeof="foaf:Image" />
                </div>
                <div className="inf-device">
                    <h3>Thiết bị sạc di động</h3>
                    <p>VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng của khách hàng một cách thuận tiện nhất.</p>
                    <div className="btn__car">
                        <button className="deposit">Tìm hiểu thêm</button>
                    </div>
                </div>
            </div>

            <div className="container__service">
                <div className="img-service">
                    <img src="https://vinfast-chevrolet.net/upload/hinhanh/unnamed5085_1366x515.png" alt="Bảo hành &amp; " />
                </div>

                <div className="inf-service">
                    <h3>Bảo hành & Dịch vụ</h3>
                    <p>Bảo hành & Dịch vụ
                        VinFast đã đầu tư nghiêm túc và bài bản để phát triển hệ thống Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng tối đa nhu cầu của Khách hàng.</p>

                    <span>Chính sách bảo hành</span>
                    <p>Bảo hành vượt trội lên đến 10 năm.</p>
                    <div className="btn__car">
                        <button className="detail">Xem chi tiết</button>
                    </div>
                    <span>Đặt lịch bảo dưỡng</span>
                    <p>Lên lịch sửa chữa, bảo dưỡng cho xe</p>
                    <div className="btn__car">
                        <button className="deposit">Đặt lịch bảo dưỡng</button>
                    </div>
                </div>
            </div>

        </>




    )

}

export default Home