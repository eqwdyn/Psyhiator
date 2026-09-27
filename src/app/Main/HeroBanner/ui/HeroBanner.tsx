import Image from "next/image";
import cl from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <section className={cl.container}>
      {/* Блок с фото (синий фон + диагональный срез) */}
      <div className={cl.topLeftSide}>
        {/* <div className={`${cl.leftWrapper} ${cl.wrapper}`}> */}
        <div className={cl.imageWrapper}>
          <Image
            src="/Alina.png"
            alt="Алина Белугина, гештальт-терапевт"
            width={600}
            height={686}
            className={cl.image}
            priority
          />
        </div>
        {/* </div> */}
      </div>

      {/* Блок с текстом (лимонный фон) */}
      <div className={cl.bottomRightSide}>
        <div className={cl.rightWrapper}>
          <div className={cl.content}>
            <div className={cl.titleGroup}>
              <h1 className={cl.smallTitle}>Гештальт-терапевт</h1>
              <h2 className={cl.bigTitle}>Алина Белугина</h2>
            </div>
            <hr className={cl.line} />
            <p className={cl.description}>
              Здравствуйте! Меня зовут Алина, я психолог, работающий в
              гештальт-подходе. Я не верю в «волшебные таблетки», которые решают
              проблемы за один сеанс. Моя главная задача — не просто временно
              облегчить ваше состояние, а научить вас опираться на себя. Как в
              известной поговорке: я не дам вам готовую рыбу, я помогу вам
              научиться рыбачить... Ваш запрос на терапию — это часто лишь
              верхушка айсберга. Например, если вы приходите с жалобой на срывы
              в спорах, мы не будем просто «гасить» агрессию. Мы пойдем глубже и
              найдем её истинную причину (например, страх быть отвергнутым).
              <br />
              Вместе мы учимся слышать ваши чувства, понимать настоящие
              потребности и выстраивать бережные отношения с собой и миром.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
