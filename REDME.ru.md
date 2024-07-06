## О проекте GardenProject

Проект GardenProject был создан для людей, которые любят садоводство и ценят свое время. Наш веб-сайт предлагает широкий ассортимент садовых товаров, удовлетворяющих потребности любителей садоводства. Кроме того, мы предлагаем разнообразные товары, подходящие для других членов семьи, делая наш магазин универсальным решением для всех ваших нужд.

## Особенности

- **Широкий выбор садовых инструментов:** От лопат до секаторов — все, что вам нужно для ваших садоводческих проектов.
- **Продукты для ухода за растениями:** Удобрения, почва и питание для растений, чтобы ваш сад процветал.
- **Садовая мебель:** Улучшите ваше садовое пространство стильной и удобной садовой мебелью.
- **Товары для всей семьи:** Откройте для себя разнообразие товаров для других членов вашей семьи, чтобы каждый нашел что-то нужное.

## Почему выбирают нас?

- **Качественные продукты:** Мы предлагаем продукцию от проверенных брендов, чтобы обеспечить долговечность и эффективность.
- **Удобство:** Экономьте время, находя все ваши садоводческие и семейные потребности в одном месте.

## <a id="backend">Backend</a>
Backend [https://github.com/tel-ran-de/telran_backend_garden_shop]
 [https://telran-backend.onrender.com/products/all]

## <a id="contributors">Участники проекта</a>

- Олена Каспрук - Team Lead / Developer
  - [GitHub](https://github.com/Ferst1)
  - [LinkedIn](https://www.linkedin.com/in/coding777/)

- Эльвира Гибнер - Scrum Master / Developer  
  - [GitHub](https://github.com/ghibnerelvira)
  - [LinkedIn](https://www.linkedin.com/in/elvira-ghibner/)

## Структура проекта

├───components
│   ├───AllProducts
│   ├───BasketCard
│   ├───CardDetailsSceleton
│   ├───CardSkeleton
│   ├───CategoriesCard
│   ├───CategoriesSection
│   ├───CategoryProductsCard
│   ├───DiscountAndOrderForm
│   ├───DiscountedCheckBox
│   ├───Favorites
│   ├───FilterPrice
│   ├───Footer
│   ├───Header
│   │   ├───BurgerMenu
│   │   ├───ButtonDiscount
│   │   ├───Logo
│   │   ├───Navigation
│   │   └───Switcher
│   ├───Hero
│   ├───ImageModal
│   ├───MobileMenu
│   ├───ModalWindow
│   ├───ModalWindowContainer
│   ├───ModalWindowContent
│   ├───OrderDetailsCard
│   ├───ProductDetail
│   ├───ProductsCard
│   ├───SaleCards
│   ├───SaleModal
│   ├───SaleSection
│   ├───SharedLayout
│   ├───SorterSelect
│   ├───SortFilteredComponents
│   └───UI
│       ├───Basket
│       ├───BasketHeader
│       ├───Button
│       ├───ButtonAddToCard
│       ├───ButtonCounter
│       ├───ButtonSection
│       ├───Favorite
│       ├───FavoriteHeader
│       ├───Input
│       └───ScrollToTopButton
├───media
│   ├───icons
│   └───images
├───pages
│   ├───AllProductsPage
│   ├───AllSalesPage
│   ├───BasketProductsPage
│   ├───CategoriesPage
│   ├───CategoryProductsPage
│   ├───ErrorPage
│   ├───FavoritesPage
│   ├───MainPage
│   └───ProductDetailPage
└───redux
    └───slices

Брейкпоинты: [1440px, 1000px, 768px, 480px, 360px]

## Использованные библиотеки

Проект GardenProject использует различные библиотеки для обеспечения богатого и интерактивного пользовательского опыта. Ниже приведен краткий обзор ключевых библиотек и их назначения:

### Основные библиотеки
- **React**: JavaScript-библиотека для создания пользовательских интерфейсов.
- **React DOM**: Предоставляет методы, специфичные для работы с DOM, которые могут быть использованы на верхнем уровне вашего приложения.

### Управление состоянием
- **Redux**: Предсказуемый контейнер состояния для JavaScript-приложений.
- **React Redux**: Официальные привязки React для Redux.
- **Redux Toolkit**: Официальный набор инструментов для эффективной разработки с Redux.
- **Redux Thunk**: Промежуточное ПО, позволяющее писать генераторы действий, возвращающие функцию вместо действия.
- **Redux Persist**: Сохраняет и восстанавливает состояние хранилища Redux.

### Управление формами
- **React Hook Form**: Производительные, гибкие и расширяемые формы с простой в использовании валидацией.

### UI-компоненты и стилизация
- **@mui/material**: Материальные UI-компоненты для React.
- **@emotion/react**: Стилизация компонентов с использованием Emotion.

### Маршрутизация
- **React Router DOM**: Коллекция навигационных компонентов для React-приложений.

### HTTP-запросы
- **Axios**: HTTP-клиент на основе промисов для браузера и Node.js.

### Тестирование
- **@testing-library/react**: Простые и полные утилиты для тестирования React DOM, поощряющие хорошие практики тестирования.
- **@testing-library/jest-dom**: Пользовательские матчеры jest для тестирования состояния DOM.
- **@testing-library/user-event**: Симуляция пользовательских событий для тестирования.

### Утилиты
- **React Transition Group**: Компонент для управления анимациями в React.
- **React Loading Skeleton**: Создание скелетон-экранов, автоматически адаптирующихся к макету вашего приложения.
- **React Lazy**: Ленивый (отложенный) загрузчик компонентов для улучшения производительности путем разделения кода на управляемые части.

### Сборка и компиляция
- **@babel/plugin-proposal-private-property-in-object**: Плагин Babel для анализа частных свойств в объектах.
- **@svgr/webpack**: Преобразует SVG в React-компоненты.

Эти библиотеки работают вместе для создания бесшовной, эффективной и удобной платформы для садоводства и электронной коммерции.

## Развертывание

Проект был развернут на Netlify с автоматической интеграцией с GitHub и доступен по адресу [GardenProject на Netlify](https://gardensproject.netlify.app/).

## Адаптивность

Проект GardenProject полностью адаптивен и может быть просмотрен на различных устройствах. Макет плавно адаптируется под следующие брейкпоинты:
- **1440px**
- **1000px**
- **768px**
- **480px**
- **360px**

Это обеспечивает оптимальный опыт просмотра на настольных компьютерах, планшетах и мобильных устройствах.
