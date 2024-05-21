import { Component } from "react";
import "./footer.scss";
import google from "../../../assets/google.svg";
import gallery from "../../../assets/gallery.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__top container">
          <ul>
            <h3>Покупателям</h3>
            <li>
              <a href="#">Поддержка</a>
            </li>
            <li>
              <a href="#">Календарь распродаж</a>
            </li>
            <li>
              <a href="#">Гид по AliExpress</a>
            </li>
          </ul>
          <ul>
            <h3>Партнёрам</h3>
            <li>
              <a href="#">Продавайте на AliExpress</a>
            </li>
            <li>
              <a href="#">Аффилиатная программа</a>
            </li>
            <li>
              <a href="#">Блог для продавца</a>
            </li>
          </ul>
          <ul>
            <h3>О компании</h3>
            <li>
              <a href="#">Пресс-центр</a>
            </li>
            <li>
              <a href="#">AliTech</a>
            </li>
            <li>
              <a href="#">Блог о жизни компании</a>
            </li>
          </ul>
          <ul>
            <h3>Мы в соцсетях</h3>
            <li>
              <a href="#">Вконтакте</a>
            </li>
            <li>
              <a href="#">Одноклассники</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">Дзен</a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom container">
          <ul>
            <p>© AliExpress®</p>
            <p>2019 – 2024</p>
          </ul>
          <ul>
            <p>На информационном ресурсе применяются</p>
            <a href="#">рекомендательные технологии</a>
            <a href="#">Пользовательские соглашения</a>
            <a href="#">Политика конфиденциальности</a>
          </ul>
          <ul>
            <img src={google} alt="" />
            <img src={gallery} alt="" />
          </ul>
        </div>
      </footer>
    );
  }
}
