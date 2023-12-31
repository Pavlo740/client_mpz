import React from 'react';
import css from "./HomePage.module.css"
import ContentLayout from "../../component/ContentLayout/ContentLayout";

const HomePage = () => {
    return (
        <ContentLayout>
            <h1 className={css.title}>Вітаємо на платформі психологічного тестування військовослужбовців</h1>
            <p className={css.paragraph}>
                Іноді військова служба ставить перед нами виклики, що перевищують звичайне військове навантаження. У
                важливий момент збереження емоційного та психологічного здоров'я стає надзвичайно важливим для кожного
                військовослужбовця. PsyCheck розуміє це і пропонує набір тестів, спеціально розроблених для оцінки та
                збереження вашого психологічного благополуччя.
            </p>

            <h2 className={css.subTitle}>
                Навіщо це потрібно?
            </h2>

            <p className={css.paragraph}>
                На цій платформі ви знайдете широкий спектр тестів, що оцінюють різні аспекти психологічного стану. Вони
                допоможуть вам:
            </p>

            <p className={css.paragraph}>
                Оцінити емоційний стан: Тести, які допоможуть зрозуміти ваш емоційний стан та впоратися зі стресом.
                Аналізувати рівень стресу: Інструменти для визначення рівня стресу та рекомендації щодо його зменшення.
                Підтримувати психологічне здоров'я: Рекомендації та поради для підтримки психологічного здоров'я в
                умовах
                військової служби.
            </p>
            <h3 className={css.subTitle}>
                Наші Тести:
            </h3>

            <p className={css.paragraph}>
                Тест на визначення рівня стресу: Оцініть, наскільки сильно стрес впливає на ваше життя та як йому
                протидіяти.
            </p>

            <p className={css.paragraph}>
                Тест на емоційний інтелект: Оцініть свою здатність розуміти та керувати власними емоціями та емоціями
                оточуючих.
            </p>

            <p className={css.paragraph}>
                Тест на відновлення після емоційного навантаження: Дізнайтеся, наскільки ефективно ви відновлюєте свої
                емоційні сили після стресових ситуацій.
            </p>

            <p className={css.paragraph}>
                Ваше психологічне здоров'я - наш пріоритет:
                Портал має за мету підтримати вас у збереженні психологічного здоров'я, надати необхідні інструменти та
                ресурси для того, щоб ви могли легше справлятися з викликами військової служби.
            </p>
        </ContentLayout>
    );
};

export default HomePage;