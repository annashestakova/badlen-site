export const telegramHandle = "@svadebnyeplatya_bot";
export const telegramUrl = "https://t.me/svadebnyeplatya_bot";

export const navigation = [
  { href: "/wedding-dresses", label: "Платья" },
  { href: "/atelier", label: "Ателье" },
  { href: "/corsets", label: "Корсеты" },
  { href: "/lookbook", label: "Образы" },
  { href: "/about", label: "О салоне" },
  { href: "/blog", label: "Блог" },
  { href: "/contacts", label: "Запись" },
] as const;

export const heroBenefits = [
  "Свадебные платья в Бресте",
  "Примерки только по записи",
  "Подгонка по фигуре в ателье",
  "Корсеты на заказ по Беларуси",
] as const;

export const proofPoints = [
  {
    value: "≠ склад",
    title: "только пошив",
    text: "У нас нет готовых платьев в наличии. Каждое шьётся впервые — специально для вас, по вашим меркам.",
  },
  {
    value: "7 дней",
    title: "корсет по всей РБ и РФ",
    text: "Отправляем СДЭК в любой уголок Беларуси и России. Мерки снимаете сами по нашему гайду — без поездки к нам.",
  },
  {
    value: "1:1",
    title: "платье = невеста",
    text: "Никакой «средней фигуры». Строим выкройку от ваших мерок — каждая линия пошита под вас.",
  },
  {
    value: "2–3 мес",
    title: "начинайте заранее",
    text: "Даёт время выбрать ткань, спокойно сделать поправки и войти в день без спешки.",
  },
] as const;

export const services = [
  {
    href: "/wedding-dresses",
    kicker: "Платья",
    title: "Свадебные",
    text: "Силуэт, ткань и посадка на примерке.",
    image: "https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=960",
  },
  {
    href: "/evening-dresses",
    kicker: "Платья",
    title: "Вечерние",
    text: "Роспись, выпускной, ужин и второй образ.",
    image: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=960",
  },
  {
    href: "/atelier",
    kicker: "Посадка",
    title: "Ателье",
    text: "Длина, корсет, шлейф и финальный образ.",
    image: "https://assets.marytrufel.ru/assets/web2/atelier/1-7b073804dcf5981f33656aa34395eb9050184c709637ac107144c3b29e089352.jpg",
  },
  {
    href: "/corsets",
    kicker: "Онлайн",
    title: "Корсеты",
    text: "Bridal и вечерние модели с доставкой по РБ.",
    image: "https://assets.marytrufel.ru/assets/web2/atelier/3-b2bcec302b8ed3cd10aafb36520ee6947a505dc27d866c4290501d9bc72ebdec.jpg",
  },
] as const;

export const atelierStats = [
  { label: "Брест", text: "консультация и пошив в мастерской" },
  { label: "Платья", text: "свадебные и вечерние под ваш сценарий" },
  { label: "СДЭК · 7 дней", text: "корсеты по всей РБ и РФ" },
  { label: "Посадка", text: "доводим длину, талию и линию лифа" },
] as const;

export const weddingSilhouettes = [
  {
    title: "А-силуэт",
    note: "Подчеркивает талию и раскрывается к низу. Хороший первый силуэт.",
    image: "/dresses/silhouettes/sketch-aline.jpg",
  },
  {
    title: "Пышное",
    note: "Полная юбка от талии — торжественный образ для банкета.",
    image: "/dresses/silhouettes/sketch-ballgown.jpg",
  },
  {
    title: "Русалка",
    note: "По фигуре с акцентом на талии, бедрах и линии спины.",
    image: "/dresses/silhouettes/sketch-mermaid.png",
  },
  {
    title: "Прямое",
    note: "Чистая вертикаль и современный образ без лишнего декора.",
    image: "/dresses/silhouettes/sketch-straight.jpg",
  },
  {
    title: "Ампир",
    note: "Завышенная талия, свободная юбка — воздушно и нежно.",
    image: "/dresses/silhouettes/sketch-empire.png",
  },
  {
    title: "Короткое",
    note: "Роспись, второй образ или камерная свадьба.",
    image: "/dresses/silhouettes/sketch-short.jpg",
  },
] as const;

export const bridalEdits = [
  {
    title: "Простые",
    text: "Гладкая ткань, чистая форма и спокойный силуэт без визуального шума.",
  },
  {
    title: "Романтичные",
    text: "Мягкий объем, драпировки, спущенные плечи, прозрачные слои и легкость.",
  },
  {
    title: "Классические",
    text: "Корсетная база, понятная линия лифа, собранная талия и вневременный образ.",
  },
  {
    title: "Акцентные",
    text: "Открытая спина, разрез, фактура, вышивка или более смелая линия корсета.",
  },
] as const;

export const menuSections = [
  {
    title: "Силуэт",
    links: ["А-силуэт", "Русалка", "Прямое", "Пышное", "Мини", "Миди"],
  },
  {
    title: "Материал",
    links: ["Атлас", "Сатин", "Фатин", "Кружево", "Креп", "Жаккард"],
  },
  {
    title: "Стиль",
    links: ["Минимализм", "Классика", "Романтика", "Акцент", "Роспись", "Второй образ"],
  },
  {
    title: "Детали",
    links: ["Открытая спина", "Шлейф", "Разрез", "Рукава", "Бант", "Жемчуг"],
  },
] as const;

export const weddingDetails = [
  "Открытая спина",
  "V-образный вырез",
  "Квадратный корсет",
  "Форма сердца",
  "Длинные рукава",
  "Спущенные бретели",
  "Разрез",
  "Шлейф",
] as const;

export const featuredWeddingDresses = [
  {
    title: "Ariana",
    subtitle: "атлас, мягкий корсет, шлейф",
    meta: "от 900 BYN",
    image: "https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=960",
  },
  {
    title: "Selene",
    subtitle: "сатин, без бретелей, чистая линия",
    meta: "от 1 200 BYN",
    image: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=960",
  },
  {
    title: "Carrie",
    subtitle: "корсетная спина, объём, бант",
    meta: "от 1 700 BYN",
    image: "https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg?auto=compress&cs=tinysrgb&w=960",
  },
] as const;

// Image pool (Pexels for dresses, assets.marytrufel.ru for atelier photos)
const CDN = {
  fit1: "https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=960",
  fit2: "https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg?auto=compress&cs=tinysrgb&w=960",
  salon1: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=960",
  salon2: "https://images.pexels.com/photos/2261972/pexels-photo-2261972.jpeg?auto=compress&cs=tinysrgb&w=960",
  interior: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=960",
  atelier1: "https://assets.marytrufel.ru/assets/web2/atelier/1-7b073804dcf5981f33656aa34395eb9050184c709637ac107144c3b29e089352.jpg",
  atelier2: "https://assets.marytrufel.ru/assets/web2/atelier/2-ru-79240bc874f0cdbaa5c3796c9f39261b53fc1ef542080357faadf32fac2409b4.jpg",
  atelier3: "https://assets.marytrufel.ru/assets/web2/atelier/3-b2bcec302b8ed3cd10aafb36520ee6947a505dc27d866c4290501d9bc72ebdec.jpg",
  atelier4: "https://assets.marytrufel.ru/assets/web2/atelier/4-b68fd97d412ad22e980845bd7af93f754ef0e1dbc9fc37d3651a17535f51cc59.jpg",
};

export const pinterestWeddingDresses = [
  {
    id: "wedding-ariana",
    title: "Ariana",
    price: "от 900 BYN",
    image: "/dresses/wedding/wedding-1.jpeg",
    silhouette: "А-силуэт",
    style: "Классика",
    material: "Duchess satin",
    details: ["Открытые плечи", "Шлейф"],
    availability: "Под заказ",
    description: "Ivory duchess satin с открытыми плечами — классический образ для большого дня.",
  },
  {
    id: "wedding-carrie",
    title: "Carrie",
    price: "от 1 400 BYN",
    image: "/dresses/wedding/wedding-2.jpeg",
    silhouette: "А-силуэт",
    style: "Романтичное",
    material: "Шифон / кружево",
    details: ["Кружевной рукав", "Открытые плечи", "Шлейф"],
    availability: "Под заказ",
    description: "Шифоновое платье с кружевными рукавами — нежный образ романтичной невесты.",
  },
  {
    id: "wedding-selene",
    title: "Selene",
    price: "от 1 100 BYN",
    image: "/dresses/wedding/wedding-3.jpeg",
    silhouette: "А-силуэт",
    style: "Романтичное",
    material: "Кружево / тюль",
    details: ["Кружево", "Корсет", "Шлейф"],
    availability: "Под заказ",
    description: "Кружевной корсет с тюлевой юбкой — примерка в ателье BADLEN.",
  },
  {
    id: "wedding-noelle",
    title: "Noelle",
    price: "от 1 600 BYN",
    image: "/dresses/wedding/wedding-4.jpeg",
    silhouette: "Пышное",
    style: "Романтичное",
    material: "Кружево",
    details: ["Длинный рукав", "Открытые плечи", "Объемная юбка"],
    availability: "Индивидуальный пошив",
    description: "Пышное кружевное платье с длинным рукавом — роскошный bridal образ.",
  },
  {
    id: "wedding-iman",
    title: "Iman",
    price: "от 950 BYN",
    image: "/dresses/wedding/wedding-5.jpeg",
    silhouette: "А-силуэт",
    style: "Simple bride",
    material: "Тюль / кружево",
    details: ["Открытые плечи", "Кружево"],
    availability: "Под заказ",
    description: "Кружевной верх и тюлевая юбка — лёгкость и нежность.",
  },
  {
    id: "wedding-vela",
    title: "Vela",
    price: "от 1 800 BYN",
    image: "/dresses/wedding/wedding-6.jpeg",
    silhouette: "Пышное",
    style: "Классика",
    material: "Кружево / тюль",
    details: ["Длинный рукав", "Открытые плечи", "Объемная юбка"],
    availability: "Индивидуальный пошив",
    description: "Пышное кружево с длинным рукавом — элегантность без ограничений.",
  },
  {
    id: "wedding-luna",
    title: "Luna",
    price: "от 1 200 BYN",
    image: "/dresses/wedding/wedding-7.jpeg",
    silhouette: "А-силуэт",
    style: "Романтичное",
    material: "Кружево / тюль",
    details: ["Пышный рукав", "Прозрачный верх", "Шлейф"],
    availability: "Под заказ",
    description: "Прозрачный кружевной лиф с пышными рукавами — boho-романтика.",
  },
  {
    id: "wedding-iris",
    title: "Iris",
    price: "от 1 700 BYN",
    image: "/dresses/wedding/wedding-8.jpeg",
    silhouette: "Пышное",
    style: "Классика",
    material: "Кружево",
    details: ["Длинный рукав", "Кружево", "Шлейф"],
    availability: "Индивидуальный пошив",
    description: "Кружевные рукава и пышная юбка — классика, которая вне времени.",
  },
  {
    id: "wedding-alba",
    title: "Alba",
    price: "от 1 100 BYN",
    image: "/dresses/wedding/wedding-9.jpeg",
    silhouette: "А-силуэт",
    style: "Классика",
    material: "Duchess satin",
    details: ["Открытые плечи", "Шлейф"],
    availability: "Под заказ",
    description: "Ivory атлас в тёплом свете — чистая элегантность.",
  },
  {
    id: "wedding-esme",
    title: "Esme",
    price: "от 850 BYN",
    image: "/dresses/wedding/wedding-10.jpeg",
    silhouette: "А-силуэт",
    style: "Simple bride",
    material: "Сатин",
    details: ["Открытые плечи", "Чистая линия"],
    availability: "Под заказ",
    description: "Лаконичный атлас с мягкими складками — для уверенной невесты.",
  },
  {
    id: "wedding-nova",
    title: "Nova",
    price: "от 1 050 BYN",
    image: "/dresses/wedding/wedding-11.jpeg",
    silhouette: "А-силуэт",
    style: "Элегантное",
    material: "Атлас",
    details: ["Открытые плечи", "V-вырез", "Шлейф"],
    availability: "Под заказ",
    description: "Глубокий V-вырез и ivory атлас — акцентный силуэт.",
  },
  {
    id: "wedding-demi",
    title: "Demi",
    price: "от 900 BYN",
    image: "/dresses/wedding/wedding-12.jpeg",
    silhouette: "А-силуэт",
    style: "Simple bride",
    material: "Атлас",
    details: ["Открытые плечи", "Корсет"],
    availability: "Под заказ",
    description: "Атласная осанка с открытыми плечами — для outdoor-свадьбы.",
  },
  {
    id: "wedding-hera",
    title: "Hera",
    price: "от 1 300 BYN",
    image: "/dresses/wedding/wedding-13.jpeg",
    silhouette: "Русалка",
    style: "Элегантное",
    material: "Крепсатин",
    details: ["Без бретелей", "Корсет", "Шлейф"],
    availability: "Под заказ",
    description: "Корсетный мермейд с тонкой фатой — драматичная элегантность.",
  },
  {
    id: "wedding-cleo",
    title: "Cleo",
    price: "от 1 100 BYN",
    image: "/dresses/wedding/wedding-14.jpeg",
    silhouette: "А-силуэт",
    style: "Классика",
    material: "Атлас",
    details: ["Открытые плечи", "Открытая спина", "Шлейф"],
    availability: "Под заказ",
    description: "Атлас и длинная фата — полный классический свадебный образ.",
  },
  {
    id: "wedding-zara",
    title: "Zara",
    price: "от 1 000 BYN",
    image: "/dresses/wedding/wedding-15.jpeg",
    silhouette: "Прямое",
    style: "Минимализм",
    material: "Крепсатин",
    details: ["Кейп", "Закрытая линия"],
    availability: "Под заказ",
    description: "Прямое платье с кейпом — минималистичный образ современной невесты.",
  },
  {
    id: "wedding-maya",
    title: "Maya",
    price: "от 1 500 BYN",
    image: "/dresses/wedding/wedding-16.jpeg",
    silhouette: "А-силуэт",
    style: "Романтичное",
    material: "Кружево / глиттер",
    details: ["Длинный рукав", "Открытые плечи", "Шлейф"],
    availability: "Под заказ",
    description: "Шампанское кружево с мерцанием и длинным рукавом — сказочный образ.",
  },
  {
    id: "wedding-nora",
    title: "Nora",
    price: "от 650 BYN",
    image: "/dresses/wedding/wedding-17.jpeg",
    silhouette: "Короткое",
    style: "Второй образ",
    material: "Кружево / тюль",
    details: ["Корсет", "Прозрачный рукав"],
    availability: "Под заказ",
    description: "Короткий корсет с прозрачными рукавами в лавандовом поле — второй образ.",
  },
  {
    id: "wedding-sia",
    title: "Sia",
    price: "от 1 800 BYN",
    image: "/dresses/wedding/wedding-18.jpeg",
    silhouette: "Пышное",
    style: "Романтичное",
    material: "Тюль",
    details: ["Открытые плечи", "Объемная юбка", "Шлейф"],
    availability: "Индивидуальный пошив",
    description: "Воздушный тюль в розовом саду — dreamlike образ невесты.",
  },
  {
    id: "wedding-elia",
    title: "Elia",
    price: "от 1 150 BYN",
    image: "/dresses/wedding/wedding-19.jpeg",
    silhouette: "Прямое",
    style: "Элегантное",
    material: "Шифон",
    details: ["Одно плечо", "Разрез", "Шлейф"],
    availability: "Под заказ",
    description: "Драпированное одно плечо с разрезом и видом на город.",
  },
  {
    id: "wedding-lara",
    title: "Lara",
    price: "от 750 BYN",
    image: "/dresses/wedding/wedding-20.jpeg",
    silhouette: "Короткое",
    style: "Второй образ",
    material: "Глиттер / тюль",
    details: ["Трансформер", "Блеск", "Без бретелей"],
    availability: "Под заказ",
    description: "Сверкающий трансформер: мини со съёмной тюлевой юбкой.",
  },
  {
    id: "wedding-aria",
    title: "Aria",
    price: "от 1 600 BYN",
    image: "/dresses/wedding/wedding-21.jpeg",
    silhouette: "Пышное",
    style: "Классика",
    material: "Микадо / кружево",
    details: ["Без бретелей", "Объемная юбка", "Шлейф"],
    availability: "Индивидуальный пошив",
    description: "Стропелес-корсет с пышной юбкой во дворцовом интерьере.",
  },
  {
    id: "wedding-belle",
    title: "Belle",
    price: "от 950 BYN",
    image: "/dresses/wedding/wedding-22.jpeg",
    silhouette: "Прямое",
    style: "Минимализм",
    material: "Крепсатин",
    details: ["Кейп", "Закрытый верх"],
    availability: "Под заказ",
    description: "Прямое платье с накидкой в золотом свете — minimalist drama.",
  },
  {
    id: "wedding-claire",
    title: "Claire",
    price: "от 1 400 BYN",
    image: "/dresses/wedding/wedding-23.jpeg",
    silhouette: "Пышное",
    style: "Элегантное",
    material: "Кружево / органза",
    details: ["Без бретелей", "Корсет", "Многоярусная юбка"],
    availability: "Индивидуальный пошив",
    description: "Корсет и многоярусная юбка в золотом дворцовом интерьере.",
  },
  {
    id: "wedding-dawn",
    title: "Dawn",
    price: "от 700 BYN",
    image: "/dresses/wedding/wedding-24.jpeg",
    silhouette: "Короткое",
    style: "Романтичное",
    material: "Кружево / тюль",
    details: ["Корсет", "Прозрачные рукава"],
    availability: "Под заказ",
    description: "Короткое кружевное платье в лавандовом поле — нежный второй образ.",
  },
  {
    id: "wedding-eden",
    title: "Eden",
    price: "от 1 750 BYN",
    image: "/dresses/wedding/wedding-25.jpeg",
    silhouette: "Русалка",
    style: "Элегантное",
    material: "Крепсатин",
    details: ["Длинный рукав", "Открытая спина", "Шлейф"],
    availability: "Под заказ",
    description: "Мермейд с длинным рукавом и открытой спиной — современная утончённость.",
  },
  {
    id: "wedding-faye",
    title: "Faye",
    price: "от 1 300 BYN",
    image: "/dresses/wedding/wedding-26.jpeg",
    silhouette: "Пышное",
    style: "Элегантное",
    material: "Органза / тюль",
    details: ["Без бретелей", "Корсет", "Асимметричный подол"],
    availability: "Под заказ",
    description: "Стропелес-корсет с асимметричным шлейфом — эффектный выход.",
  },
  {
    id: "wedding-grace",
    title: "Grace",
    price: "от 850 BYN",
    image: "/dresses/wedding/wedding-27.jpeg",
    silhouette: "Прямое",
    style: "Simple bride",
    material: "Атлас",
    details: ["Тонкие бретели", "Cowl-вырез", "Открытая спина"],
    availability: "Под заказ",
    description: "Атласный слип-дресс с мягким cowl-вырезом — элегантная простота.",
  },
  {
    id: "wedding-haven",
    title: "Haven",
    price: "от 1 600 BYN",
    image: "/dresses/wedding/wedding-28.jpeg",
    silhouette: "Русалка",
    style: "Романтичное",
    material: "Атлас",
    details: ["Пышный рукав", "Прямой вырез", "Шлейф"],
    availability: "Индивидуальный пошив",
    description: "Мермейд с пышными рукавами — couture drama.",
  },
  {
    id: "wedding-isla",
    title: "Isla",
    price: "от 1 100 BYN",
    image: "/dresses/wedding/wedding-29.jpeg",
    silhouette: "А-силуэт",
    style: "Романтичное",
    material: "Шифон",
    details: ["Пышный рукав", "Открытые плечи", "Шлейф"],
    availability: "Под заказ",
    description: "Шифоновые пышные рукава и А-силуэт — воздушная классика.",
  },
  {
    id: "wedding-june",
    title: "June",
    price: "от 800 BYN",
    image: "/dresses/wedding/wedding-30.jpeg",
    silhouette: "Короткое",
    style: "Второй образ",
    material: "Атлас",
    details: ["Без бретелей", "Бант", "Трансформер"],
    availability: "Под заказ",
    description: "Атласное мини с бантом и съёмным шлейфом — два образа в одном.",
  },
  {
    id: "wedding-kaia",
    title: "Kaia",
    price: "от 1 200 BYN",
    image: "/dresses/wedding/wedding-31.jpeg",
    silhouette: "Русалка",
    style: "Минимализм",
    material: "Крепсатин",
    details: ["Кейп", "Разрез", "Прямой вырез"],
    availability: "Под заказ",
    description: "Мермейд с кейпом и дерзким разрезом — для смелой невесты.",
  },
  {
    id: "wedding-lyra",
    title: "Lyra",
    price: "от 1 900 BYN",
    image: "/dresses/wedding/wedding-32.jpeg",
    silhouette: "Пышное",
    style: "Романтичное",
    material: "Кружево / тюль",
    details: ["Длинный рукав", "Открытые плечи", "Шлейф"],
    availability: "Индивидуальный пошив",
    description: "Кружево и тюль в оранжерее роз — voluminous fairytale.",
  },
  {
    id: "wedding-mora",
    title: "Mora",
    price: "от 1 350 BYN",
    image: "/dresses/wedding/wedding-33.jpeg",
    silhouette: "Русалка",
    style: "Элегантное",
    material: "Атлас",
    details: ["Открытая спина", "Пуговицы", "Шлейф"],
    availability: "Под заказ",
    description: "Атласный мермейд с пуговицами по спине — безупречная линия.",
  },
  {
    id: "wedding-oona",
    title: "Oona",
    price: "от 1 050 BYN",
    image: "/dresses/wedding/wedding-35.jpeg",
    silhouette: "Прямое",
    style: "Минимализм",
    material: "Атлас",
    details: ["Без бретелей", "Закрытый верх", "Чистая линия"],
    availability: "Под заказ",
    description: "Шампанская атласная колонна — contemporary minimalism.",
  },
] as const;

export const pinterestEveningDresses = [
  { id: "evening-mira",    title: "Mira",    price: "от 380 BYN", image: "/dresses/evening/evening-1.jpeg",  color: "Золотой",      length: "В пол",     style: "Statement",       material: "Пайетки / тюль",  details: ["Блеск", "Трансформер"],              description: "Золотые пайетки с тюлевым шлейфом — cinematic выход." },
  { id: "evening-alba",    title: "Alba",    price: "от 550 BYN", image: "/dresses/evening/evening-2.jpeg",  color: "Изумрудный",   length: "В пол",     style: "Statement",       material: "Тафта / тюль",    details: ["Без бретелей", "Корсет", "Шлейф"],   description: "Тёмно-зелёный мермейд с воланами — властная красота." },
  { id: "evening-nova",    title: "Nova",    price: "от 490 BYN", image: "/dresses/evening/evening-3.jpeg",  color: "Лавандовый",   length: "В пол",     style: "Романтичное",     material: "Тюль",            details: ["Открытые плечи", "Пышный рукав", "Объемная юбка"], description: "Лавандовый тюль в несколько ярусов — воздушная романтика." },
  { id: "evening-luna",    title: "Luna",    price: "от 320 BYN", image: "/dresses/evening/evening-5.jpeg",  color: "Пудровый",     length: "Миди",      style: "Романтичное",     material: "Кружево / тюль",  details: ["Длинный рукав", "V-вырез"],          description: "Короткое кружевное платье с длинным рукавом — изысканная нежность." },
  { id: "evening-stella",  title: "Stella",  price: "от 430 BYN", image: "/dresses/evening/evening-6.jpeg",  color: "Бордо",        length: "В пол",     style: "Evening classic", material: "Атлас",           details: ["Открытая спина", "Тонкие бретели"],  description: "Бордовый атласный слип с откровенной спиной — pure seduction." },
  { id: "evening-rose",    title: "Rose",    price: "от 460 BYN", image: "/dresses/evening/evening-7.jpeg",  color: "Золотой",      length: "В пол",     style: "Statement",       material: "Атлас",           details: ["Открытые плечи", "Драпировка"],      description: "Золотой атлас с драпировкой drop-waist — Hollywood glamour." },
  { id: "evening-carmen",  title: "Carmen",  price: "от 410 BYN", image: "/dresses/evening/evening-8.jpeg",  color: "Шоколадный",   length: "В пол",     style: "Минимализм",      material: "Атлас",           details: ["Без бретелей", "Объемная драпировка"], description: "Шоколадный атлас с объемной драпировкой — sculptural elegance." },
  { id: "evening-jade",    title: "Jade",    price: "от 480 BYN", image: "/dresses/evening/evening-9.jpeg",  color: "Лавандовый",   length: "В пол",     style: "Романтичное",     material: "Тюль",            details: ["V-вырез", "Пышный рукав", "Объемная юбка"], description: "Лавандовый тюль с пышными рукавами — princess gown." },
  { id: "evening-celeste", title: "Celeste", price: "от 510 BYN", image: "/dresses/evening/evening-11.jpeg", color: "Тёмно-синий",  length: "В пол",     style: "Evening classic", material: "Атлас / тафта",   details: ["Без бретелей", "Корсет", "Шлейф"],  description: "Тёмно-синий мермейд с peplum — архитектурная элегантность." },
  { id: "evening-amber",   title: "Amber",   price: "от 570 BYN", image: "/dresses/evening/evening-12.jpeg", color: "Чёрный",       length: "Асимметричный", style: "Statement",   material: "Пайетки / тюль",  details: ["Без бретелей", "Корсет", "Блеск"],  description: "Чёрный корсет с пайетками и асимметричной юбкой — night queen." },
  { id: "evening-vera",    title: "Vera",    price: "от 340 BYN", image: "/dresses/evening/evening-13.jpeg", color: "Голубой",      length: "В пол",     style: "Романтичное",     material: "Тюль",            details: ["V-вырез", "А-силуэт"],              description: "Пыльно-голубой тюль с V-вырезом — нежная вечерняя классика." },
  { id: "evening-diana",   title: "Diana",   price: "от 440 BYN", image: "/dresses/evening/evening-14.jpeg", color: "Шоколадный",   length: "В пол",     style: "Statement",       material: "Атлас",           details: ["Одно плечо", "Разрез", "Длинный рукав"], description: "Шоколадный атлас на одном плече с разрезом — urban glamour." },
  { id: "evening-sage",    title: "Sage",    price: "от 390 BYN", image: "/dresses/evening/evening-15.jpeg", color: "Шампань",      length: "Миди",      style: "Evening classic", material: "Тюль / перья",    details: ["Без бретелей", "Перья", "Пышная юбка"], description: "Чайная длина и перья на лифе — коктейльная классика." },
  { id: "evening-ruby",    title: "Ruby",    price: "от 530 BYN", image: "/dresses/evening/evening-17.jpeg", color: "Тёмно-синий",  length: "В пол",     style: "Evening classic", material: "Атлас / тафта",   details: ["Без бретелей", "Структурированный верх"], description: "Насыщенный синий с чистой структурной линией — elegant statement." },
  { id: "evening-opal",    title: "Opal",    price: "от 370 BYN", image: "/dresses/evening/evening-18.jpeg", color: "Серебристый",  length: "В пол",     style: "Statement",       material: "Атлас",           details: ["Тонкие бретели", "Cowl-вырез", "Разрез"], description: "Серебристый атлас с cowl-вырезом и высоким разрезом — liquid drama." },
  { id: "evening-noir",    title: "Noir",    price: "от 500 BYN", image: "/dresses/evening/evening-19.jpeg", color: "Бордо",        length: "В пол",     style: "Statement",       material: "Бархат",          details: ["Без бретелей", "По фигуре", "Шлейф"], description: "Бордовый бархатный мермейд — роскошь тёмного тона." },
  { id: "evening-flora",   title: "Flora",   price: "от 450 BYN", image: "/dresses/evening/evening-20.jpeg", color: "Шампань",      length: "В пол",     style: "Романтичное",     material: "Кружево",         details: ["Открытые плечи", "Длинный рукав", "Шлейф"], description: "Шампанское кружево с длинным рукавом — романтичный вечерний образ." },
  { id: "evening-iris",    title: "Iris",    price: "от 380 BYN", image: "/dresses/evening/evening-21.jpeg", color: "Изумрудный",   length: "В пол",     style: "Evening classic", material: "Атлас",           details: ["Тонкие бретели", "Cowl-вырез", "По фигуре"], description: "Изумрудный атласный слип — effortless sophistication." },
  { id: "evening-grace",   title: "Grace",   price: "от 420 BYN", image: "/dresses/evening/evening-22.jpeg", color: "Чёрный",       length: "В пол",     style: "Evening classic", material: "Атлас",           details: ["Открытая спина", "Шлейф", "По фигуре"], description: "Чёрный мермейд с открытой спиной — вечная классика." },
  { id: "evening-scarlet", title: "Scarlet", price: "от 360 BYN", image: "/dresses/evening/evening-23.jpeg", color: "Медный",       length: "Асимметричный", style: "Statement",   material: "Атлас",           details: ["Корсет", "Асимметричный подол"],    description: "Медный атлас с асимметричным подолом — дерзкая новизна." },
  { id: "evening-pearl",   title: "Pearl",   price: "от 310 BYN", image: "/dresses/evening/evening-24.jpeg", color: "Лавандовый",   length: "В пол",     style: "Минимализм",      material: "Атлас",           details: ["Свободный силуэт", "Разрезные рукава"], description: "Лавандовый атласный кафтан — flowing свобода." },
  { id: "evening-lyra",    title: "Lyra",    price: "от 580 BYN", image: "/dresses/evening/evening-25.jpeg", color: "Бордо",        length: "В пол",     style: "Statement",       material: "Бархат",          details: ["Открытые плечи", "Перчатки", "Разрез"], description: "Бордовый бархат с перчатками и разрезом — cinematic femme fatale." },
  { id: "evening-haze",    title: "Haze",    price: "от 350 BYN", image: "/dresses/evening/evening-26.jpeg", color: "Фуксия",       length: "В пол",     style: "Statement",       material: "Атлас",           details: ["Тонкие бретели", "Многоярусная юбка"], description: "Фуксия с многоярусной юбкой — statement на каждой вечеринке." },
  { id: "evening-ivory",   title: "Ivory",   price: "от 520 BYN", image: "/dresses/evening/evening-27.jpeg", color: "Синий",        length: "В пол",     style: "Statement",       material: "Атлас / тафта",   details: ["Без бретелей", "Перчатки", "Пышная юбка"], description: "Королевский синий с перчатками — кинематографичный образ." },
  { id: "evening-aurora",  title: "Aurora",  price: "от 440 BYN", image: "/dresses/evening/evening-28.jpeg", color: "Изумрудный",   length: "В пол",     style: "Элегантное",      material: "Атлас",           details: ["Открытые плечи", "А-силуэт"],       description: "Изумрудный атлас с открытыми плечами — природная роскошь." },
  { id: "evening-ember",   title: "Ember",   price: "от 390 BYN", image: "/dresses/evening/evening-30.jpeg", color: "Красный",      length: "В пол",     style: "Evening classic", material: "Атлас",           details: ["Тонкие бретели", "Cowl-вырез", "Разрез"], description: "Алый атласный слип — для выхода, который запомнят." },
  { id: "evening-snow",    title: "Snow",    price: "от 470 BYN", image: "/dresses/evening/evening-31.jpeg", color: "Изумрудный",   length: "В пол",     style: "Элегантное",      material: "Атлас",           details: ["Без рукавов", "Закрытый верх", "По фигуре"], description: "Изумрудная атласная колонна — лаконичная элегантность." },
  { id: "evening-viva",    title: "Viva",    price: "от 410 BYN", image: "/dresses/evening/evening-32.jpeg", color: "Бронзовый",    length: "В пол",     style: "Элегантное",      material: "Атлас",           details: ["Открытые плечи", "А-силуэт"],       description: "Бронзовый атлас с открытыми плечами — тёплое сияние вечера." },
] as const;

export const catalogFilterGroups = [
  {
    title: "Силуэт",
    values: ["А-силуэт", "Русалка", "Прямое", "Пышное", "Ампир", "Короткое"],
  },
  {
    title: "Стиль",
    values: ["Классика", "Минимализм", "Романтичное", "Акцентное", "Второй образ"],
  },
  {
    title: "Материал",
    values: ["Атлас", "Сатин", "Кружево", "Фатин", "Креп", "Жаккард"],
  },
  {
    title: "Детали",
    values: ["Открытая спина", "Шлейф", "Бант", "Разрез", "Жемчуг", "Рукава"],
  },
] as const;

export const cmsReadyEntities = [
  "Салон и ателье в Бресте",
  "Свадебные и вечерние платья под ваш день",
  "Корсеты на заказ с доставкой по Беларуси",
  "Подгонка длины, талии, лифа и шлейфа",
  "Подбор ткани, декора и второго образа",
  "Запись на примерку без очереди и спешки",
] as const;

export const salonHighlights = [
  {
    title: "Примерка",
    text: "Платье выбирают не по одной фотографии. Важны посадка, ткань, вес и ощущение на себе.",
  },
  {
    title: "Посадка",
    text: "В BADLEN доводим длину, талию, линию лифа, корсет и шлейф под фигуру.",
  },
  {
    title: "Финальный образ",
    text: "Собираем не только платье, но и настроение для свадьбы, росписи или вечера.",
  },
] as const;

export const fittingSteps = [
  {
    title: "Запись",
    text: "Уточняем дату, формат события, пожелания по силуэту и удобное время.",
  },
  {
    title: "Подбор",
    text: "Смотрим ткань, форму корсета, длину, степень торжественности и настроение.",
  },
  {
    title: "Мерки",
    text: "Фиксируем параметры фигуры и нужную степень прилегания.",
  },
  {
    title: "Примерка",
    text: "Проверяем талию, спину, грудь, длину и баланс изделия в движении.",
  },
  {
    title: "Выдача",
    text: "Готовим изделие к вашему дню и обсуждаем аксессуары или второй образ.",
  },
] as const;

export const clientNotes = [
  {
    title: "Основной образ",
    text: "Главное платье выбирают по посадке, а не только по красивой картинке.",
  },
  {
    title: "Роспись",
    text: "Для короткой церемонии лучше работают мини, миди и чистые формы.",
  },
  {
    title: "Второй образ",
    text: "Корсет, мини или вечерний комплект помогают легче двигаться и сменить настроение.",
  },
] as const;

export const weddingChecklist = [
  {
    title: "Невеста",
    items: ["Платье", "Фата", "Украшения", "Туфли", "Корсет", "Второй образ"],
  },
  {
    title: "Посадка",
    items: ["Длина", "Талия", "Лиф", "Спина", "Шлейф", "Отпаривание"],
  },
  {
    title: "День",
    items: ["Роспись", "Ужин", "Фото", "Танец", "Переодевание", "Хранение"],
  },
] as const;

export const corsetLooks = [
  { title: "Ivory Ruffles",   text: "Корсет с рюшами и кнопками — нежная классика BADLEN.",          image: "/corsets/corset-18.jpeg" },
  { title: "Rose Flat-lay",   text: "Вышитый корсет с розами — для свадебного и вечернего образа.",   image: "/corsets/corset-19.jpeg" },
  { title: "Floral Cream",    text: "Кремовый корсет с флоральным принтом — нежная лёгкость.",        image: "/corsets/corset-32.jpeg" },
  { title: "Floral Hanger",   text: "Белый корсет с розовой вышивкой — деликатный романтик.",         image: "/corsets/corset-28.jpeg" },
  { title: "Denim Lace-up",   text: "Деним со шнуровкой — city-корсет для уверенных.",               image: "/corsets/corset-22.jpeg" },
  { title: "Hangers",         text: "Коллекция BADLEN — несколько моделей рядом.",                    image: "/corsets/corset-23.jpeg" },
  { title: "Bridal White",    text: "Свадебный корсет с лентами — чистота и объём.",                  image: "/corsets/corset-24.jpeg" },
  { title: "Ivory Satin",     text: "Атласный корсет с бантами — нежная классика.",                   image: "/corsets/corset-25.jpeg" },
  { title: "Pink Ruffle",     text: "Розовый с оборкой на плечах — романтичный образ.",               image: "/corsets/corset-27.jpeg" },
  { title: "Floral Bridal",   text: "Вышивка с розами — для нежного свадебного выхода.",              image: "/corsets/corset-29.jpeg" },
  { title: "Black Classic",   text: "Чёрный корсет без рукавов — вечный акцент.",                     image: "/corsets/corset-31.jpeg" },
  { title: "Denim Edit",      text: "Джинсовый со шнуровкой и цепью — street-style.",                 image: "/corsets/corset-33.jpeg" },
  { title: "Pink Bow",        text: "Пудровый flat-lay с лепестками — весенняя коллекция.",           image: "/corsets/corset-35.jpeg" },
  { title: "Blue Toile",      text: "Голубой тоиле с баской и завязками — Прованс.",                  image: "/corsets/corset-38.jpeg" },
  { title: "Sky Satin",       text: "Голубой атласный на одном плече — лёгкий и изящный.",            image: "/corsets/corset-41.jpeg" },
  { title: "Burgundy Peplum", text: "Бордовый с баской на вешалке — вечерний силуэт.",                image: "/corsets/corset-43.jpeg" },
  { title: "Black Rose",      text: "Чёрный атласный с цветком — для смелого образа.",               image: "/corsets/corset-45.jpeg" },
  { title: "Ivory Tie",       text: "Кремовый со шнуровкой на спине — минималистичная база.",         image: "/corsets/corset-48.jpeg" },
  { title: "Floral Hanger",   text: "Флоральный принт на вешалке — весна в коллекции.",               image: "/corsets/corset-50.jpeg" },
] as const;

export const lookbookPhotos = [
  { image: "/corsets/corset-1.jpeg",   mood: "Provence",       text: "Флорал · Корсет · Лавандa" },
  { image: "/corsets/corset-2.jpeg",   mood: "Collection",     text: "Три образа · BADLEN" },
  { image: "/corsets/corset-3.jpeg",   mood: "City Edit",      text: "Корсет · Блейзер · Лён" },
  { image: "/corsets/corset-4.jpeg",   mood: "Spring",         text: "Пастель · Корсет · Образ" },
  { image: "/corsets/corset-5.jpeg",   mood: "Minimal",        text: "Пеплум · Льняные брюки" },
  { image: "/corsets/corset-6.jpeg",   mood: "Editorial",      text: "Атлас · Образ · BADLEN" },
  { image: "/corsets/corset-7.jpeg",   mood: "Bridal Edit",    text: "Корсет · Атлас · Букет" },
  { image: "/corsets/corset-8.jpeg",   mood: "Soft Day",       text: "Ivory · Деталь · Утро" },
  { image: "/corsets/corset-9.jpeg",   mood: "Bridal",         text: "Корсет · Атлас · Midi" },
  { image: "/corsets/corset-10.jpeg",  mood: "Romantic",       text: "Флорал · Кардиган · Ярусы" },
  { image: "/corsets/corset-11.jpeg",  mood: "Garden",         text: "Корсет · Натуральный · Образ" },
  { image: "/corsets/corset-12.jpeg",  mood: "Classic",        text: "Корсет · Монохром · Стиль" },
  { image: "/corsets/corset-13.jpeg",  mood: "Ivory",          text: "Ivory · Корсет · Минимализм" },
  { image: "/corsets/corset-14.jpeg",  mood: "Lace Edit",      text: "Кружево · Корсет · Образ" },
  { image: "/corsets/corset-15.jpeg",  mood: "Morning Edit",   text: "Корсет · Кофе · Бежевый" },
  { image: "/corsets/corset-16.jpeg",  mood: "Neutral",        text: "Нейтральный · Корсет · Стиль" },
  { image: "/corsets/corset-17.jpeg",  mood: "Studio",         text: "Студия · Корсет · BADLEN" },
  { image: "/corsets/corset-92.jpeg",  mood: "Lavender Sunset", text: "Корсет · Лаванда · Закат" },
  { image: "/corsets/corset-93.jpeg",  mood: "Field Edit",     text: "Корсет · Юбка · Прованс" },
  { image: "/corsets/corset-95.jpeg",  mood: "Golden Hour",    text: "Корсет · Лаванда · Золотой час" },
  { image: "/corsets/corset-97.jpeg",  mood: "Bohème Bridal",  text: "Корсет · Спина · Лаванда" },
  { image: "/corsets/corset-98.jpeg",  mood: "French Girl",    text: "Корсет · Берет · Лён" },
  { image: "/corsets/corset-100.jpeg", mood: "Office Edit",    text: "Корсет · Блейзер · City" },
  { image: "/corsets/corset-102.jpeg", mood: "Atelier",        text: "Корсет · Midi · Лён" },
  { image: "/lookbook/c1.jpeg",        mood: "Editorial",      text: "Корсет · Образ · BADLEN" },
  { image: "/lookbook/c2.jpeg",        mood: "Bridal Edit",    text: "Свадебный · Корсет · Стиль" },
  { image: "/lookbook/c3.jpeg",        mood: "Romantic",       text: "Корсет · Нежность · Образ" },
  { image: "/lookbook/c4.jpeg",        mood: "City",           text: "City · Корсет · BADLEN" },
  { image: "/lookbook/c5.jpeg",        mood: "Ivory",          text: "Ivory · Корсет · Минимализм" },
  { image: "/lookbook/c6.jpeg",        mood: "Garden",         text: "Корсет · Натуральный · Образ" },
  { image: "/lookbook/c7.jpeg",        mood: "Soft Day",       text: "Корсет · Мягкий · День" },
  { image: "/lookbook/c8.jpeg",        mood: "Studio",         text: "Студия · Корсет · BADLEN" },
  { image: "/lookbook/c9.jpeg",        mood: "Classic",        text: "Классика · Корсет · Стиль" },
  { image: "/corsets/corset-115.jpeg", mood: "New Edit",       text: "Корсет · Новинка · BADLEN" },
  { image: "/corsets/corset-116.jpeg", mood: "New Edit",       text: "Корсет · Новинка · Образ" },
  { image: "/corsets/corset-117.jpeg", mood: "New Edit",       text: "Корсет · Новинка · Стиль" },
  { image: "/corsets/corset-118.jpeg", mood: "New Edit",       text: "Корсет · Детали · BADLEN" },
  { image: "/corsets/corset-119.jpeg", mood: "New Edit",       text: "Корсет · Образ · 2026" },
  { image: "/corsets/corset-120.jpeg", mood: "New Edit",       text: "Корсет · Лён · BADLEN" },
  { image: "/corsets/corset-121.jpeg", mood: "New Edit",       text: "Корсет · Нежный · Образ" },
  { image: "/corsets/corset-122.jpeg", mood: "New Edit",       text: "Корсет · Атлас · BADLEN" },
  { image: "/corsets/corset-123.jpeg", mood: "New Edit",       text: "Корсет · Свет · Образ" },
  { image: "/corsets/corset-124.jpeg", mood: "New Edit",       text: "Корсет · Новинка · 2026" },
  { image: "/corsets/corset-125.jpeg", mood: "New Edit",       text: "Корсет · Образ · Стиль" },
  { image: "/corsets/corset-126.jpeg", mood: "New Edit",       text: "Корсет · Минимализм · BADLEN" },
  { image: "/corsets/corset-127.jpeg", mood: "New Edit",       text: "Корсет · Детали · Образ" },
  { image: "/corsets/corset-128.jpeg", mood: "New Edit",       text: "Корсет · Новинка · Стиль" },
] as const;

export const corsetTypes = [
  { key: "underbust", label: "Под грудь", price: 145 },
  { key: "overbust", label: "С чашками", price: 199 },
  { key: "bridal", label: "Свадебный", price: 280 },
  { key: "peplum", label: "С баской", price: 240 },
  { key: "daily", label: "Повседневный", price: 210 },
  { key: "statement", label: "Акцентный", price: 260 },
] as const;

export const fabrics = [
  { key: "satin", label: "Атлас", price: 35 },
  { key: "lace", label: "Кружево", price: 55 },
  { key: "velvet", label: "Бархат", price: 48 },
  { key: "brocade", label: "Жаккард / парча", price: 62 },
  { key: "cotton", label: "Хлопок / бязь", price: 22 },
  { key: "mesh", label: "Сетка / прозрачные вставки", price: 29 },
] as const;

export const closures = [
  { key: "back-lacing", label: "Шнуровка сзади", price: 30 },
  { key: "front-lacing", label: "Шнуровка спереди", price: 40 },
  { key: "zipper", label: "Скрытая молния", price: 25 },
  { key: "busk", label: "Бюск", price: 45 },
  { key: "hooks-zip", label: "Крючки + молния", price: 55 },
] as const;

export const corsetOptions = [
  { key: "bones", label: "Усиленные косточки", price: 40 },
  { key: "silk-lining", label: "Шелковая подкладка", price: 60 },
  { key: "beads", label: "Жемчуг / бусины", price: 100 },
  { key: "embroidery", label: "Ручная вышивка", price: 120 },
  { key: "gift", label: "Подарочная упаковка", price: 25 },
  { key: "straps", label: "Ленты или бретели", price: 35 },
  { key: "cup-shaping", label: "Сложная линия чашек", price: 65 },
] as const;

// Evening dress pricing
export const eveningDressBase = [
  { key: "short", label: "Короткое / мини", price: 220 },
  { key: "midi", label: "Миди", price: 350 },
  { key: "long", label: "В пол", price: 500 },
  { key: "corset", label: "С корсетом", price: 580 },
  { key: "statement", label: "Statement / кружево", price: 750 },
] as const;

export const eveningDressOptions = [
  { key: "open-back", label: "Открытая спина", price: 80 },
  { key: "slit", label: "Разрез", price: 50 },
  { key: "lining", label: "Подкладка", price: 60 },
  { key: "lace", label: "Кружевной декор", price: 180 },
  { key: "beads", label: "Камни / вышивка", price: 220 },
  { key: "urgent", label: "Срочность +30%", price: 0 },
] as const;

export const dressBase = [
  { key: "short", label: "Короткое", price: 500 },
  { key: "midi", label: "Миди", price: 700 },
  { key: "long", label: "Длинное", price: 1000 },
  { key: "decor", label: "С декором", price: 1500 },
  { key: "train", label: "Со шлейфом", price: 1800 },
  { key: "premium", label: "Кружево + ручная работа", price: 2300 },
] as const;

export const dressOptions = [
  { key: "corset-base", label: "Корсетная основа", price: 180 },
  { key: "open-back", label: "Открытая спина", price: 90 },
  { key: "sleeves", label: "Рукава", price: 140 },
  { key: "lace", label: "Кружевной декор", price: 220 },
  { key: "beads", label: "Жемчуг / бусины", price: 280 },
  { key: "urgent", label: "Срочность +30%", price: 0 },
] as const;

export const measurementPrep = [
  "Мягкая сантиметровая лента и помощь второго человека.",
  "Тонкий топ или белье без сильного push-up и объемных чашек.",
  "Ровная стойка, спокойное дыхание и расслабленный живот.",
  "Лента идет параллельно полу и не пережимает тело.",
] as const;

export const measurementGuideFields = [
  {
    key: "bust",
    number: "01",
    title: "Обхват груди",
    description:
      "Снимайте по самым выступающим точкам груди и по лопаткам. Лента должна лежать ровно, не подниматься на спине и не сползать вниз.",
    note: "Не затягивайте ленту. Нужен ваш естественный объем груди.",
    placeholder: "Например, 88",
    unit: "см",
    type: "number",
    min: "50",
    step: "0.1",
    required: true,
    sketch: "bust",
  },
  {
    key: "braSize",
    number: "02",
    title: "Размер бюстгальтера",
    description:
      "Укажите размер, который обычно носите: например, 75C. Это помогает понять форму чашки и базовую посадку overbust-корсета.",
    note: "Если между брендами размер отличается, укажите тот, в котором вам комфортнее.",
    placeholder: "Например, 75C",
    type: "text",
    required: true,
    sketch: "bra",
  },
  {
    key: "underBust",
    number: "03",
    title: "Обхват под грудью",
    description:
      "Лента проходит строго под основанием груди. Это одна из главных мерок для устойчивой корсетной посадки.",
    note: "Сантиметр прилегает плотно, но без лишнего давления.",
    placeholder: "Например, 73",
    unit: "см",
    type: "number",
    min: "45",
    step: "0.1",
    required: true,
    sketch: "underBust",
  },
  {
    key: "waist",
    number: "04",
    title: "Обхват талии",
    description:
      "Ищите самое узкое место корпуса. Обычно это линия чуть выше пупка. Мерка снимается на выдохе, без втягивания живота.",
    note: "Если сомневаетесь, завяжите тонкую ленту на талии и от нее стройте остальные вертикальные измерения.",
    placeholder: "Например, 67",
    unit: "см",
    type: "number",
    min: "45",
    step: "0.1",
    required: true,
    sketch: "waist",
  },
  {
    key: "desiredTight",
    number: "05",
    title: "Желаемая утяжка",
    description:
      "Напишите, насколько хотите утянуть талию в готовом корсете. Для первого изделия чаще выбирают диапазон 4-8 см.",
    note: "Если любите более мягкую посадку, укажите меньшее значение. Если не уверены, оставьте ориентир и уточните в комментарии.",
    placeholder: "Например, 6",
    unit: "см",
    type: "number",
    min: "0",
    max: "20",
    step: "0.1",
    required: true,
    sketch: "tight",
  },
  {
    key: "belly",
    number: "06",
    title: "Обхват живота",
    description:
      "Эта мерка нужна, если корсет опускается ниже линии талии или если вы хотите более точную посадку в нижней части корпуса.",
    note: "Снимайте по самой выступающей точке живота в естественной стойке.",
    placeholder: "Например, 79",
    unit: "см",
    type: "number",
    min: "0",
    step: "0.1",
    sketch: "belly",
  },
  {
    key: "hips",
    number: "07",
    title: "Обхват бедер",
    description:
      "Нужен для длинных и удлиненных корсетов, а также для моделей с баской. Лента проходит по самым выступающим точкам бедер.",
    note: "Если корсет короткий под грудь, эта мерка используется только как дополнительная.",
    placeholder: "Например, 96",
    unit: "см",
    type: "number",
    min: "60",
    step: "0.1",
    required: true,
    sketch: "hips",
  },
  {
    key: "waistToUnderBust",
    number: "08",
    title: "Талия до линии под грудью",
    description:
      "Вертикальная мерка по центру переда: от линии талии до точки под грудью. Она задает высоту корсета в верхней части.",
    note: "Измеряйте прямо по телу, без диагонали и без прогиба сантиметра.",
    placeholder: "Например, 16",
    unit: "см",
    type: "number",
    min: "10",
    step: "0.1",
    required: true,
    sketch: "vertical",
  },
  {
    key: "notes",
    number: "09",
    title: "Комментарий по посадке",
    description:
      "Напишите, если есть особенности фигуры, пожелания по степени прилегания, чувствительность к жесткой утяжке или важные детали по груди и спине.",
    note: "Сюда же можно добавить ссылку на пример образа, желаемый вырез overbust или комментарий по форме чашки.",
    placeholder: "Например: хочу более мягкую утяжку, открытый верх, спина чувствительная.",
    type: "textarea",
    sketch: "notes",
  },
] as const;

export const deliveryOptions = [
  {
    key: "autolight",
    label: "Автолайт",
    note: "Доставка оплачивается клиентом отдельно.",
  },
  {
    key: "belpost",
    label: "Белпочта",
    note: "Доплата за доставку при получении на почте.",
  },
] as const;

export const bannerIdeas = [
  "Примерьте силуэт и обсудите его под свой сценарий свадьбы",
  "Соберите корсет под отдельный образ или второй выход",
  "Выберите ткань, длину и детали без лишнего шума",
  "Посмотрите подборки: simple, classic, romantic, accent",
] as const;

export const faqEntries = [
  {
    question: "Можно ли выбрать платье без примерки?",
    answer:
      "Лучше нет. Свадебное или вечернее платье нужно проверить на фигуре: посадку лифа, длину, талию и баланс в движении.",
  },
  {
    question: "Корсеты можно заказать онлайн?",
    answer:
      "Да. Для корсета достаточно корректно снять мерки, выбрать конфигурацию на сайте и согласовать детали перед пошивом.",
  },
  {
    question: "Сколько стоит свадебное платье?",
    answer:
      "Ориентир начинается от 500 BYN. Дальше стоимость зависит от ткани, длины, декора, корсетной основы и ручной работы.",
  },
  {
    question: "Можно ли собрать второй образ на свадьбу?",
    answer:
      "Да. Для второго образа хорошо работают мини, миди, отдельные корсеты и более легкие вечерние комплекты.",
  },
] as const;

export const assistantAnswers = {
  corset:
    "Корсет BADLEN можно заказать онлайн по всей Беларуси. Вы выбираете тип, ткань и декор, проходите гайд по меркам, оплачиваете 100%, и изделие отправляется после пошива.",
  dresses:
    "Свадебные и вечерние платья ведутся через салон и ателье в Бресте. Для красивой посадки нужны консультация, мерки и примерка.",
  price:
    "Корсет стоит от 199 BYN. Платья начинаются от 500 BYN, дальше цена зависит от длины, ткани, корсетной основы, декора и срочности.",
  fabrics:
    "Для корсетов и платьев подбираются сатин, кружево, бархат, жаккард, сетка и другие ткани под задачу и сезон.",
  crm:
    "Сайт работает как витрина салона и точка входа в заявку: сначала выбор направления, затем примерка, мерки или онлайн-заказ корсета.",
} as const;

export const blogPosts = [
  {
    slug: "svadebnye-platya-brest",
    coverImage: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Платья",
    title: "Свадебные платья в Бресте",
    excerpt:
      "Как выбрать свадебное платье в Бресте: силуэт под фигуру, ткань по сезону, корсетная посадка и живая примерка в BADLEN.",
    content: `Брест — небольшой город, где выбор свадебного платья часто сводится к двум-трём салонам и паре страниц Instagram. Мы решили рассказать, как подойти к этому вопросу осознанно.

**С чего начать**

До похода в салон определитесь с форматом свадьбы: загс и кафе, выездная церемония, банкет в зале или камерный ужин. Формат диктует длину, ткань и количество декора.

**Силуэт под фигуру**

Силуэт — первое, что выбирают на примерке. «А» и принцесса визуально балансируют фигуру. Русалка и облегающий подчёркивают рельеф. Бальный — создаёт объём от талии. На примерке в BADLEN мы примеряем несколько силуэтов, даже если кажется, что вы уже всё решили.

**Корсетная основа**

Хороший корсет держит форму без бретелей, не режет и не сползает. В BADLEN работает ателье, которое дорабатывает посадку под ваши параметры.

**Ткань и сезон**

Атлас и микадо — структурные, держат форму. Шифон и органза — лёгкие, воздушные. Кружево — нарядное, но требует точной посадки. Для летней свадьбы в Бресте лучше избегать тяжёлых тканей с большим количеством слоёв.

**Как записаться**

В BADLEN примерки проходят по записи, без случайных посетителей. Вы работаете с консультантом один на один. Запись через форму на сайте или по телефону.`,
  },
  {
    slug: "svadba-brest-2025",
    coverImage: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Свадьба",
    title: "Свадьба в Бресте 2025",
    excerpt:
      "Планирование свадьбы в Бресте: когда искать платье, что делает ателье и какой бюджет заложить на 2025 год.",
    content: `Планирование свадьбы в Бресте в 2025 году — это цепочка решений, которые лучше принимать последовательно. Платье занимает в этой цепочке одно из первых мест.

**Когда начинать искать платье**

Идеально — за 6–9 месяцев. Это даёт время на заказ, пошив и подгонку. Если свадьба через 2–3 месяца, салоны и ателье всё равно могут помочь, просто выбор будет ограничен.

**Что делают в ателье**

Готовое платье редко садится идеально. Ателье при BADLEN выполняет: подгонку по талии и бёдрам, укорочение длины и шлейфа, ушивание корсета, замену молнии, добавление бретелей или съёмного шлейфа.

**Бюджет на платье**

В 2025 году в Бресте свадебные платья в салонах стартуют от 500 BYN за базовые модели. Платья с кружевом и сложным корсетом — от 1200 BYN. Подгонка в ателье — отдельно, обычно 80–250 BYN в зависимости от объёма работ.

**Второй образ**

Многие невесты Бреста заказывают второй образ для банкета: мини, миди или лёгкое вечернее платье. В BADLEN есть вечерние модели под этот запрос.`,
  },
  {
    slug: "atelier-brest-poshiv",
    coverImage: "https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Ателье",
    title: "Ателье в Бресте — пошив и подгонка",
    excerpt:
      "Ателье BADLEN в Бресте: подгонка готового платья, пошив на заказ, работа с корсетом. Цены, сроки и как записаться.",
    content: `Ателье при BADLEN работает с готовыми платьями и выполняет пошив на заказ. Разбираем оба направления.

**Подгонка готового платья**

Это самая частая задача. Покупаете платье в нашем салоне или приносите своё — ателье адаптирует его под ваши параметры. Типичные работы:

- Ушивание корсета по спине
- Укорочение подола (обычно 1–3 слоя ткани)
- Подгонка лифа
- Замена застёжки
- Добавление подкладки или съёмного шлейфа

**Пошив на заказ**

Если вы не нашли подходящее готовое платье, ателье может пошить по вашим меркам. Это дольше (от 4–8 недель), но результат точно совпадает с вашей фигурой.

**Корсеты**

Отдельное направление — корсеты bridal и evening. Их шьют на заказ с нуля: вы выбираете форму, ткань и декор, снимаете мерки по гайду BADLEN, оформляете заказ онлайн. Доставка по всей Беларуси.

**Сроки и цены**

Подгонка — от 1 до 2 недель, стоимость от 80 BYN. Пошив — от 4 до 8 недель, стоимость зависит от сложности. Точную цену называют после примерки и обсуждения объёма работ.`,
  },
  {
    slug: "pochemu-poshit-plate",
    coverImage: "https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Советы",
    title: "Почему стоит пошить платье на заказ",
    excerpt:
      "Готовое или на заказ: разбираем плюсы обоих вариантов для свадьбы и выпускного. Когда пошив оправдан и как сэкономить.",
    content: `Готовое или на заказ — вопрос, который задаёт почти каждая невеста. Отвечаем честно.

**Плюсы готового платья**

Готовое платье можно примерить прямо сейчас. Вы видите, как оно садится, как выглядит ткань вживую, как ощущается корсет. Это быстро и понятно. Если нужна посадка точнее — ателье доработает.

**Когда пошив на заказ оправдан**

- Нестандартные параметры (большая грудь + узкие бёдра, высокий рост и т.д.)
- Чёткое представление о фасоне, которого нет в наличии
- Особые ткани или декор
- Время есть (минимум 2–3 месяца до события)

**Корсет на заказ как компромисс**

Если вы нашли платье, но посадка не идеальная, заказ корсета — промежуточное решение. Новый корсет шьют под ваши мерки и вшивают в платье. Это дешевле, чем пошив платья с нуля, и даёт точную посадку.

**Что выбрать**

Для большинства невест оптимально: готовое платье + подгонка в ателье. Это быстрее, дешевле и предсказуемее по результату. Пошив с нуля — для тех, кто чётко знает, чего хочет, и имеет время.`,
  },
  {
    slug: "corset-zakaz-brest",
    coverImage: "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Корсеты",
    title: "Корсет на заказ в Бресте",
    excerpt:
      "Корсет BADLEN: пошив на заказ от 199 BYN, онлайн-заказ с замером самостоятельно и доставкой по всей Беларуси.",
    content: `BADLEN шьёт корсеты на заказ и отправляет по всей Беларуси. Рассказываем, как это работает.

**Типы корсетов**

- **Bridal** — свадебный, под платье или как отдельный топ
- **Evening** — для выпускного, ужина, фотосессии
- **Корсет-топ** — повседневный или полуофициальный вариант

**Как оформить заказ**

1. Зайдите в конфигуратор на сайте BADLEN
2. Выберите форму, ткань и декор
3. Снимите мерки по нашему гайду (6 замеров)
4. Подтвердите заказ и внесите 100% предоплату
5. Получите корсет с доставкой СДЭК или Белпочтой

**Сроки**

Стандартный срок пошива — 3–4 недели. Срочный заказ (2 недели) — доступен при наличии ткани.

**Цены**

Корсет из сатина или костюмной ткани — от 199 BYN. Кружевной, с косточками и подкладкой — от 280 BYN. Точная цена — в конфигураторе после выбора опций.

**Мерки**

Основные: обхват груди, талии, бёдер, длина по спине, расстояние от плеча до талии, обхват под грудью. Гайд с фото есть на странице мерок.`,
  },
  {
    slug: "kak-vybrat-svadebnoe-plate",
    coverImage: "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Советы",
    title: "Как выбрать свадебное платье",
    excerpt:
      "Пошаговый гид по выбору свадебного платья: силуэт под фигуру, ткань по сезону, примерка и финальная посадка корсета.",
    content: `Выбор свадебного платья — процесс, в котором легко запутаться. Вот простой алгоритм.

**Шаг 1: Формат свадьбы**

Определите стиль события: камерная роспись, выездная церемония, банкет в зале. Это задаёт уровень торжественности и практические требования к платью (например, длина, если идти по траве или подниматься по лестнице).

**Шаг 2: Силуэт**

Примерьте хотя бы 3 разных силуэта — даже если кажется, что вы уже всё знаете. Платье на вешалке и платье на теле — разные вещи.

- **А-силуэт** — универсальный, подходит почти всем
- **Принцесса** — пышный, торжественный
- **Русалка** — облегающий до колена, потом расклёш
- **Прямой / облегающий** — минималистичный, современный

**Шаг 3: Ткань**

Ткань определяет, как платье ведёт себя в движении и на фото. Попробуйте пройтись, сесть, поднять руки. Тяжёлые ткани красиво лежат, но в них жарко. Лёгкие — воздушные, но требуют хорошей подкладки.

**Шаг 4: Корсет**

Корсет — основа посадки. Он должен держать грудь без бретелей, не давить, не съезжать. Если посадка не идеальна — ателье дошивает под ваши параметры.

**Шаг 5: Примерка с аксессуарами**

На финальную примерку приходите с туфлями на нужном каблуке. Это меняет длину, осанку и общее ощущение образа.`,
  },
  {
    slug: "svadebnye-trendy-2026",
    coverImage: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Стиль",
    title: "Свадебные платья 2026: что будут носить невесты",
    excerpt:
      "Я листала журналы и смотрела Vogue Bridal — и поняла, что 2026 год переписывает правила. Рассказываю, какие тренды выживут, а какие лучше обойти стороной.",
    content: `Я листала журналы. Смотрела Vogue Bridal, пролистывала Pinterest до самого дна, открывала показы и закрывала вкладки. И в какой-то момент я поняла: 2026 год — это не про «красиво». Это про точность.

Невесты 2026 года не хотят быть похожими на всех остальных невест. Они хотят, чтобы платье было про них. Именно про их тело, их стиль, их день.

**Минимализм, который работает**

Первый тренд, который я вижу повсюду — это чистый минимализм. Без россыпи стразов, без пышных юбок с пятью слоями фатина. Прямой крой, благородная ткань, идеальная посадка. Звучит просто. Но именно этот стиль не прощает ничего — ни лишнего сантиметра, ни неровного шва. Минимализм живёт только тогда, когда за ним стоит точная работа.

**Корсет как главный элемент**

Корсет вернулся — и на этот раз он не прячется под платьем. Он и есть платье. Структурированный верх с открытыми плечами, с косточками, с идеальной посадкой по грудной клетке. В 2026 году корсет-топ с юбкой — это не «пересобранный образ». Это осознанный выбор.

**Открытая спина**

Если и есть один элемент, который не выходит из моды последние пять лет — это открытая спина. Глубокий вырез, завязки, крапивная тесьма поперёк лопаток. В 2026 году спина снова в центре внимания — особенно на фото во время первого танца.

**Монохром и тёплые оттенки**

Белый уступает место. Молочный, экрю, шампань, слоновая кость — невесты выбирают тон, который работает именно с их оттенком кожи. И это, пожалуй, самое разумное, что случилось с индустрией.

**Почему всё это требует пошива**

Вот в чём ловушка трендов: большинство из них — минималистичный крой, открытая спина, точный корсет — работают только при идеальной посадке. Готовое платье шьётся на среднестатистическую фигуру. А тренды 2026 года прощают всё что угодно, кроме неточного кроя.

Именно поэтому BADLEN шьёт под вас. Не под таблицу размеров — под вас.`,
  },
  {
    slug: "poshiv-vs-gotovoe-plate",
    coverImage: "https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Советы",
    title: "Я хотела купить готовое. Но потом примерила.",
    excerpt:
      "Я была уверена, что найду платье в магазине. Примерила десять — и ни одно не подошло. Рассказываю, почему так происходит почти со всеми.",
    content: `Я была уверена, что найду. Зайду в несколько салонов, примерю пять-шесть платьев, влюблюсь в одно — и готово. Казалось, всё очень просто.

Потом началась примерка.

**Десять платьев — ни одного «да»**

Первое было красивым на вешалке. На мне — другая история: корсет не держал, ткань морщила на спине, длина не та. Второе лучше, но давило под мышками. Третье — идеально сзади, но спереди лишний объём там, где его быть не должно.

К десятому я уже понимала: дело не в платьях. Дело в том, что моя фигура не вписывается в стандартную выкройку.

**Почему готовое не подходит почти никому**

Готовое платье шьётся по усреднённым пропорциям: определённое соотношение груди, талии и бёдер, стандартная длина спины, типовое расстояние между плечами. Если ваши параметры не совпадают с этой формулой — платье либо морщит, либо давит, либо просто «не то».

Форма груди, высокая или низкая талия, широкие плечи, разные полуобхваты — всё это делает стандартную выкройку нерабочей. И это нормально. Нестандартной фигуры не существует — существуют неправильные выкройки.

**Что изменил пошив**

Когда я пришла в BADLEN с идеей о том, каким должно быть платье, разговор был совсем другим. Мы говорили о моей фигуре, о том, что я хочу подчеркнуть, о том, как я буду двигаться в этот день. Мерки, эскиз, ткань — и платье, которое сидит так, как будто оно всегда было моим.

Потому что оно и было моим. С первого стежка.

**Когда стоит попробовать пошив**

— Если вы уже примеряли готовые и ничего не подошло.
— Если у вас нестандартные пропорции (высокий рост, большой бюст, узкие плечи — что угодно).
— Если у вас есть чёткое представление об образе, но вы не можете его найти в готовом.
— Если до события есть хотя бы 2 месяца.

Пошив в BADLEN — это не про «дороже и дольше». Это про платье, которое сделано для вас.`,
  },
  {
    slug: "korset-trend-2026",
    coverImage: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Корсеты",
    title: "2026 — год корсета. И я могу объяснить почему.",
    excerpt:
      "Когда все кругом говорят о корсете, начинаешь думать: это правда тренд или просто шум? Я разобралась. И теперь знаю разницу между готовым и пошивным.",
    content: `Когда все кругом начинают говорить об одном и том же, я обычно настораживаюсь. Корсет — везде. В Instagram, в показах, в свадебных журналах, на выпускных. Я начала думать: это правда или просто очередной сезонный шум?

Я разобралась. И вот что я поняла.

**Почему корсет сейчас**

Корсет — это про форму. Не про прикрытость или открытость, не про длину и не про ткань. Про то, как одежда взаимодействует с телом. В эпоху, когда все устали от бесформенных силуэтов, корсет даёт структуру. Он говорит: вот талия. Вот грудь. Вот фигура.

Это честно. И именно поэтому это работает.

**Корсет в 2026: не то, что вы думаете**

Корсет 2026 года — это не историческая реконструкция и не бельевой топ из масс-маркета. Это структурированный верх с косточками, с посадкой по телу, с правильным распределением нагрузки. Его носят с юбками (пышными и прямыми), с брюками, под пиджак. Его надевают на свадьбу как bridal-корсет или на вечер как отдельный образ.

**Разница между готовым и пошивным**

Здесь я должна сказать прямо: готовый корсет из магазина и корсет на заказ — это разные вещи.

Готовый шьётся по стандарту. Он либо подходит, либо нет. Если ваша грудь, талия и рёбра не вписываются в типовую выкройку — корсет будет давить там, где не надо, и проваливаться там, где нужна поддержка.

Корсет на заказ строится вокруг ваших мерок. Шесть замеров — и мастер знает вашу фигуру точнее, чем любая готовая вещь.

**Как заказать корсет в BADLEN**

Всё онлайн. Конфигуратор на сайте, гайд по меркам, предоплата и доставка по Беларуси. Пошив занимает 7–14 дней. Вы не едете в Брест — корсет приедет к вам.

Если 2026 год и правда год корсета — пусть ваш будет сделан под вас.`,
  },
  {
    slug: "pochemu-individualny-poshiv-luchshe",
    coverImage: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=960",
    tag: "Советы",
    title: "Четыре причины, по которым готовое платье вас разочарует",
    excerpt:
      "Готовое шьётся на среднестатистическую фигуру. Вы — не средняя. Четыре честных тезиса о том, почему индивидуальный пошив — это не роскошь.",
    content: `Я буду прямой. Готовое платье разочарует вас. Не потому что оно плохое — а потому что оно сделано не для вас. Вот четыре причины.

**1. Оно сшито не для вашей фигуры**

Производитель шьёт по усреднённым меркам: стандартное соотношение груди, талии и бёдер, типовая длина спины, предсказуемое расстояние между лопатками. Если ваши пропорции хоть немного отличаются от этого шаблона — а они отличаются у большинства женщин — платье будет сидеть неправильно.

Морщины на спине. Лишний объём в груди. Корсет, который не держит. Это не дефект вашей фигуры. Это дефект выкройки.

**2. Вы не знаете, как оно сядет на вас — только на вешалке**

Платье на вешалке и платье на теле — два разных опыта. Готовое нельзя проверить до примерки. А после примерки оказывается, что именно эта модель не работает именно с вашим типом фигуры. И вы начинаете сначала.

При индивидуальном пошиве разговор начинается с вас. С вашей фигуры, ваших пожеланий, вашего дня. Платье строится под ответы, а не наоборот.

**3. Все особенности фигуры остаются без ответа**

Одно плечо ниже другого — классика. Разные полуобхваты по груди — норма. Высокая или низкая талия, длинная спина, широкие плечи — всё это требует индивидуальной выкройки.

Готовое платье этого не умеет. Оно решает задачу для «средней» невесты. Вы — конкретная, с вашей историей, вашим телом и вашим представлением о том, как вы хотите выглядеть.

**4. Подгонка не решает всё**

«Возьмёте готовое и подошьёте» — это план, который работает в половине случаев. Укоротить длину, немного ушить корсет — да. Но если посадка неправильная в основе, никакое ателье не исправит крой.

Индивидуальный пошив — это когда крой изначально правильный. Не исправленный, а правильный.

**Что делает BADLEN**

Пошив в Бресте, с примерками. Вечерние от 250 BYN, свадебные от 500 BYN. Вы приходите с идеей — мы строим платье под вас. Без компромиссов с выкройкой.

Запишитесь на консультацию — и начнём с разговора о вас.`,
  },
] as const;
