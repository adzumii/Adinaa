import White__phone from "../../img/white__phone.png";
import White__message from "../../img/white__message.png";
function Contact__icons() {
    return (
        <div class="contact__icons">
            <div class="phone">
                <img src={White__phone} alt="./img/white__phone.png"/>
                <div>+7 (111) 222-33-44</div>
            </div>
            <div class="message">
                <img src={White__message} alt="./img/white__message.png" />
                <div>order@bu-one.ru</div>
            </div>
        </div>
    );
}
export default Contact__icons;