import Microsoft from "./Microsoft";
import Work__navigation from "./Work__navigation";

function Work__container() {
    return (
        <div class="work__container">
            <div class="work__client">Наши клиенты</div>
            <div class="work__title">С нами работают</div>
            < Microsoft />
            < Work__navigation />
        </div>
    );
}
export default Work__container;