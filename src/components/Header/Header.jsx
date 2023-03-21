import React from "react";
import { Link } from 'react-router-dom'
import '../../Styles/Header.css'

const Header = () => {

    const handleClick = () => {
        const ele = document.getElementsByClassName("menu__content")
        const eleVideo = document.getElementById("video")
        const eleMain = document.getElementsByClassName("main__container")
        const eleMoto = document.getElementsByClassName("container__moto")
        const elePin = document.getElementsByClassName("container__pin")
        const eleDevice = document.getElementsByClassName("container__device")
        const eleService = document.getElementsByClassName("container__service")
        const eleCarDetail = document.getElementsByClassName("container__img")
        const eleFooter = document.getElementsByClassName("footer")


        eleVideo.classList.add("activeShadow")
        ele[0].classList.add("activemenu")
        eleMain[0].classList.add("activeShadow")
        eleMain[0].classList.add("activeBox")
        eleMoto[0].classList.add("activeShadow")
        eleMoto[0].classList.add("activeBox")
        elePin[0].classList.add("activeShadow")
        elePin[0].classList.add("activeBox")
        eleDevice[0].classList.add("activeShadow")
        eleDevice[0].classList.add("activeBox")
        eleService[0].classList.add("activeShadow")
        eleService[0].classList.add("activeBox")
        eleCarDetail[0].classList.add("activeShadow")
        eleCarDetail[0].classList.add("activeBox")
        eleFooter[0].classList.add("activeShadow")
        eleFooter[0].classList.add("activeBox")
    }


    return (<>

        <div className="header">
            <div className="header_menu">
                <div className="img__logo">
                    <Link to='/home'><img src="https://vinfastdongnai3s.com/wp-content/uploads/2021/10/logo.png"></img></Link>
                </div>

                <div className="menu__navbar">
                    <div className="menu__navbar-list">
                        <Link to='/introduce'>Giới thiệu</Link>
                        <Link to='/cars'>Ô tô</Link>
                        <Link to='/motorcycle'>Xe máy điện</Link>
                        <Link to='/service'>Dịch vụ hậu mãi</Link>
                        <Link to='/pin'>Pin và trạm sạc</Link>
                    </div>
                </div>
                <div className="box__car">
                    <div className="btn">
                        <button className="btn__account" >Tài khoản</button>
                        <button className="btn__register" >Đăng kí lái thử</button>
                    </div>

                    <div className="icon__menu" onClick={handleClick}>
                        <i class="ri-menu-line"></i>
                    </div>
                </div>
            </div>


        </div>




    </>


    )

}

export default Header