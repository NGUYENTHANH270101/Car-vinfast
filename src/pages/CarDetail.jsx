import React from "react";
import "../Styles/CarDetail.css";
const CarDetail = () => {

    return (<>
        <div className="container__video">
            <div className="img-cardetail">
                <img src="https://cms-i.autodaily.vn/du-lieu/2022/12/11/vf5.jpeg" title="" type="image/webp" alt="" />
            </div>
            <div className="cardetail-inf">
                <div className="vehicles">
                    <p>Dòng xe</p>
                    <span>A-SUV</span>
                </div>

                <div className="distance">
                    <p>Quãng đường di chuyển(chuẩn NEDC)</p>
                    <span>>300 Km/lần sạc</span>
                </div>

                <div className="maximum">
                    <p>Công suất tối đa</p>
                    <span>134 Hp</span>
                </div>

                <div className="maximum-torque">
                    <p>Mô mem xoắn cực đại</p>
                    <span>135 Nm</span>
                </div>
                <div className="btn__cardetail">
                    <button className="deposit">Đặt cọc ngay</button>
                </div>
            </div>

        </div>
    </>



    )

}

export default CarDetail