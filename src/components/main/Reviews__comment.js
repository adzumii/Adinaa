import Author from "../../img/author.png";
function Reviews__comment() {
    return(
        <div class="reviews__comment">
            <div class="comment">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. </div>
            <div class="author">
                <div class="avatar"><img src={Author} alt="./img/author.png" /></div>
                <div class="avatar__name">
                    <div class="name">Екатерина Иванова</div>
                    <div class="company">Директор ООО “Раз-два”</div>
                </div>
            </div>
        </div>
    );
}
export default Reviews__comment;