import LogoImage from "../../img/logo.png";
function Logo() {
    return (
        <div class="logo">
            <div><img src={LogoImage} alt="./img/logo.png" /></div>
            <div class="logo__name">BuhOne</div>
        </div>
    );
}
export default Logo;