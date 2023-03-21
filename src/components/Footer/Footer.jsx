import React from "react";
import '../../Styles/Footer.css'
const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__general">
                <div className="footer__info">
                    <div className="footer__logo">
                        <img src="https://vinfastdongnai3s.com/wp-content/uploads/2021/10/logo.png"></img>
                    </div>
                    <div className="footer__logo-content">
                        <p className="info">CÔNG TY TNHH KINH DOANH THƯƠNG MẠI VÀ DỊCH VỤ VINFAST</p>
                        <p><span>MST/MSDN:</span> 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 01/10/2019 và các lần thay đổi tiếp theo.</p>
                        <p><span>Địa chỉ trụ sở chính:</span> Số 7, đường Bằng Lăng 1, Khu đô thị sinh thái Vinhomes Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội, Việt Nam</p>
                    </div>
                </div>



                <div className="footer__container">
                    <div className="footer__box">
                        <div className="footer__menu">
                            <p>VỀ VINFAST</p>
                            <p>VỀ VINGROUP</p>
                            <p>CỘNG ĐỘNG VINFAST TOÀN CẦU</p>
                            <p>TIN TỨC</p>
                            <p>ƯU ĐÃI</p>
                            <p>SHOWROOM & ĐẠI LÝ</p>
                            <p>ĐIỀU KHOẢN CHÍNH SÁCH</p>
                        </div>

                        <div className="footer__hotline">
                            <div className="hotline">
                                <p>HOTLINE</p>
                                <div className="phone">
                                    <div className="icon__phone"><i class="ri-phone-line"></i></div>
                                    <div className="phone__number">1900 23 23 89</div>
                                </div>

                                <div className="mail">
                                    <div className="icon__mail"><i class="ri-mail-line"></i></div>
                                    <div className="hotline__mail">support.vn@vinfastauto.com</div>
                                </div>

                                <div className="contact__title">LIÊN HỆ</div>

                                <div className="connect__title">
                                    <div className="title">Kết nối với VinFast</div>
                                    <div className="icon">
                                        <div className="icon-fa"><i class="ri-facebook-circle-fill"></i></div>
                                        <div className="icon-ytb"><i class="ri-youtube-fill"></i></div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div className="footer__register">
                            <div className="register__inf">
                                <p className="header-text">ĐĂNG KÝ NHẬN THÔNG TIN</p>
                                <div className="inf-title"><p>ĐĂNG KÝ NHẬN THÔNG TIN CHƯƠNG TRÌNH KHUYẾN MÃI, DỊCH VỤ TỪ VINFAST</p></div>

                                <div className="input-email">
                                    <div className="input">
                                        <input placeholder="nhập email của quý khách"></input>
                                    </div>
                                    <div className="btn-register">
                                        <button>Đăng ký</button>
                                    </div>
                                </div>
                                <div className="inf-title"><p>BẰNG CÁCH ĐĂNG KÝ, QUÝ KHÁCH XÁC NHẬN ĐÃ ĐỌC, HIỂU VÀ ĐỒNG Ý<span>VỚI CHÍNH SÁCH QUYỀN RIÊNG TƯ</span> CỦA VINFAST.</p></div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>


            <div className="footer__ecosysterm">
                <div className="ecosysterm-general">
                    <div className="ecosysterm">
                        <div className="menu-title">
                            Hệ sinh thái
                        </div>
                        <div className="menu-item">
                            <p>Vinhomems</p>
                            <p>Vinmec</p>
                            <p>Vsmart</p>
                            <p>Vinpearl</p>
                        </div>
                    </div>
                    <div className="logo-inf">
                        <div className="img-logo">
                            <img src="https://vinfastauto.com/themes/porto/img/bct.svg" alt="" />
                        </div>
                        <div className="text-right">
                            <p>VinFast. All rights reserved.© Copyright 2020</p>
                        </div>
                    </div>
                </div>

            </div>

        </footer>


    )

}

export default Footer