import Reviews__comment from "./Reviews__comment";
import Reviews__navigation from "./Reviews__navigation";

function Reviews__container() {
    return (
        <div class="reviews__container">
            <div class="reviews__title">Отзывы</div>
            <div class="reviews__thanks">Ваши благодарности</div>
            < Reviews__comment />
            < Reviews__navigation />
        </div>
    );
}
export default Reviews__container;