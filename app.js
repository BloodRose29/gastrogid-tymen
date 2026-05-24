const restaurants = [
    {
        id: "15-86",
        name: "Кафе «15/86»",
        category: "европейская",
        coords: [57.1601, 65.5255],
        address: "ул. Володарского, 3",
        cuisine: "Европейская, Сибирская",
        price: "1 700 ₽",
        dishes: "Стейк из стерляди, пельмени с косулей, запеченный камамбер с брусничным соусом",
        style: "Панорамная терраса у набережной реки Туры",
        description: "Видовой ресторан на набережной. Сочетает локальные сибирские продукты с европейскими технологиями приготовления.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/caf-15-86/"
    },
    {
        id: "poseydon",
        name: "Ресторан «Посейдон»",
        category: "европейская",
        coords: [57.1558, 65.5398],
        address: "ул. Ленина, 2А",
        cuisine: "Рыбная, Морская, Европейская",
        price: "3 000 ₽",
        dishes: "Плато морепродуктов, уха из северных рыб, запеченный лобстер",
        style: "Классический премиальный интерьер, старейший рыбный ресторан города",
        description: "Легендарный рыбный ресторан Тюмени с многолетней историей и строгим премиальным сервисом.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-poseydon/"
    },
    {
        id: "chum",
        name: "Ресторан-музей «Чум»",
        category: "сибирская",
        coords: [57.1478, 65.5552],
        address: "ул. Малыгина, 59",
        cuisine: "Северная, Сибирская",
        price: "2 500 ₽",
        dishes: "Строганина на льду, стейк из оленины, морошка с кедровыми орехами",
        style: "Интерьер в виде традиционного чума с музейными экспонатами быта северных народов",
        description: "Уникальный ресторан-музей, где можно попробовать аутентичные блюда народов Севера в окружении настоящих предметов антиквариата.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-muzey-chum/",
        history: "Открыт в сотрудничестве с краеведами региона. Каждый экспонат внутри — от лодки до шаманского бубна — имеет историческую ценность и привезен из экспедиций по Ямалу и Югре."
    },
    {
        id: "vostok",
        name: "Ресторация «Восток»",
        category: "сибирская",
        coords: [57.1408, 65.5682],
        address: "ул. Республики, 159",
        cuisine: "Сибирская, Советская, Русская",
        price: "1 600 ₽",
        dishes: "Уха с расстегаем, пельмени ручной лепки, жаркое из дичи",
        style: "Исторический сибирский ампир, обилие знаковых советских элементов декора",
        description: "Ресторан, бережно реконструирующий гастрономическую историю Тюмени советского и дореволюционного периодов.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoratsiya-vostok/"
    },
    {
        id: "myata",
        name: "Ресторан «Мята»",
        category: "европейская",
        coords: [57.1432, 65.5621],
        address: "ул. Советская, 20",
        cuisine: "Европейская, Авторская",
        price: "1 800 ₽",
        dishes: "Тартар из тунца с авокадо, утиная грудка с грушей, легкие десерты",
        style: "Стильный эко-модерн с обилием живых растений и мягким зонированием",
        description: "Светлое и просторное заведение с акцентом на современную европейскую классику и авторскую коктейльную карту.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-myata/"
    },
    {
        id: "potaskuy",
        name: "Ресторан «Потаскуй»",
        category: "сибирская",
        coords: [57.1582, 65.5312],
        address: "ул. Хохрякова, 21",
        cuisine: "Старосибирская, Купеческая",
        price: "2 300 ₽",
        dishes: "Запеченный муксун, дичь в брусничном взваре, купеческие пироги",
        style: "Реставрированный купеческий особняк XIX века, классические интерьеры",
        description: "Аутентичный купеческий ресторан, воссоздающий атмосферу старой Тюмени и гастрономические традиции сибирского купечества.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-potaskuy/"
    },
    {
        id: "katso",
        name: "Ресторан «Кацо»",
        category: "грузинская",
        coords: [57.1465, 65.5589],
        address: "ул. Республики, 143А",
        cuisine: "Грузинская",
        price: "1 300 ₽",
        dishes: "Ассорти хинкали, шашлык из баранины, лобио, хачапури по-имеретински",
        style: "Традиционные кавказские мотивы, открытый гриль, теплая кирпичная кладка",
        description: "Колоритный ресторан грузинской кухни с акцентом на сытные мясные блюда, приготовленные на углях.",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-gruzinskoy-kukhni-katso/"
    },
    {
        id: "sibirsibir",
        name: "Ресторан «#СибирьСибирь»",
        category: "сибирская",
        coords: [57.1575, 65.5298],
        address: "ул. Первомайская, 1А",
        cuisine: "Современная сибирская, Деликатесы",
        price: "2 800 ₽",
        dishes: "Тартар из оленьего сердца, пельмени с четырьмя видами рыб, строганина на ледяной глыбе",
        style: "Ультрасовременный концептуальный дизайн, обилие инсталляций из ложек и банок соленья",
        description: "Ресторан высокой сибирской кухни от известного ресторатора Дениса Иванова. Трендовое прочтение традиционных блюд.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-sibirsibir/"
    },
    {
        id: "sedlo",
        name: "Гриль-бар «Седло»",
        category: "европейская",
        coords: [57.1448, 65.5492],
        address: "ул. Максима Горького, 44",
        cuisine: "Мясная, Американская, Европейская",
        price: "1 500 ₽",
        dishes: "Стейк Мачете, бургер с рваной говядиной, копченые свиные ребра",
        style: "Брутальный лофт, натуральная кожа и дерево, полумрак и акцентный свет",
        description: "Мясной бар с собственной коптильней и классическими стейками сухой и влажной выдержки.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/gril-bar-sedlo/"
    },
    {
        id: "chito-grito",
        name: "Кафе «Чито-Грито»",
        category: "грузинская",
        coords: [57.1501, 65.5309],
        address: "ул. Урицкого, 5",
        cuisine: "Грузинская, Домашняя",
        price: "1 100 ₽",
        dishes: "Хачапури по-мегрельски, чашушули, домашние купаты",
        style: "Маленькое семейное кафе, наполненное южным теплом и домашним уютом",
        description: "Демократичное и душевное заведение, где блюда готовятся строго по старинным рецептам грузинских семей.",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/kafe-chito-grito/"
    },
    {
        id: "remezov",
        name: "Ресторан «Ремезов»",
        category: "сибирская",
        coords: [57.1518, 65.5381],
        address: "ул. Грибоедова, 6 (Отель Ремезов)",
        cuisine: "Русская купеческая, Сибирская",
        price: "2 200 ₽",
        dishes: "Запеченный стерляжий бок, строганина из нельмы, наливки собственного производства",
        style: "Аристократичный дореволюционный сибирский стиль, панорамный вид на город",
        description: "Высокая кухня сибирских губернаторов, расположенная на верхнем этаже одноименного отеля.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-remezov/"
    },
    {
        id: "razgovory",
        name: "Семейное кафе «Разговоры»",
        category: "европейская",
        coords: [57.1352, 65.5714],
        address: "ул. 50 лет Октября, 57Б",
        cuisine: "Европейская, Детское меню",
        price: "1 200 ₽",
        dishes: "Крем-суп из тыквы, паста карбонара, авторские эклеры",
        style: "Светлый пастельный сканди-интерьер, большая детская игровая зона",
        description: "Идеальное пространство для уютных семейных обедов, детских праздников и спокойных разговоров.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/semeynoe-kafe-razgovory/"
    },
    {
        id: "legkiy-chek",
        name: "Гастробар «Легкий Чек»",
        category: "европейская",
        coords: [57.1561, 65.5414],
        address: "ул. Республики, 42",
        cuisine: "Европейская, Смешанная, Азиатская",
        price: "1 300 ₽",
        dishes: "Салат с хрустящими баклажанами, том ям, стейки по фиксированной стоимости",
        style: "Современный лофт с неоновыми вывесками, концепция честных цен",
        description: "Популярный гастробар, работающий по системе True Cost (вход платный, блюда по себестоимости).",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/gastrobar-legkiy-chek/"
    },
    {
        id: "top-hop",
        name: "Крафтовый паб «Top Hop»",
        category: "европейская",
        coords: [57.1589, 65.5271],
        address: "ул. Республики, 39",
        cuisine: "Американская, Пивные закуски",
        price: "1 400 ₽",
        dishes: "Бургер Блю Чиз, крылья Баффало, картофельные вафли с брискетом",
        style: "Классический крафтовый паб с огромной стеной из пивных кранов",
        description: "Культовое место для любителей качественного пенного со всего мира и сытной американской уличной классики.",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/kraftovyy-pab-top-hop/"
    },
    {
        id: "chito-didi",
        name: "Грузинский ресторан «Чито-Диди»",
        category: "грузинская",
        coords: [57.1214, 65.6112],
        address: "ул. Широтная, 112А",
        cuisine: "Грузинская",
        price: "1 400 ₽",
        dishes: "Хачапури по-аджарски, оджахури из свинины, люля-кебаб из курицы",
        style: "Большой просторный зал с глиняным декором и этническими коврами",
        description: "Ресторан больших кавказских застолий в спальном районе Тюмени для семейных торжеств.",
        image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/gruzinskiy-restoran-chito-didi/"
    },
    {
        id: "ayva",
        name: "Ресторан «Айва»",
        category: "грузинская",
        coords: [57.1415, 65.5654],
        address: "ул. Салтыкова-Щедрина, 53",
        cuisine: "Восточная, Грузинская, Узбекская",
        price: "1 550 ₽",
        dishes: "Узбекский плов праздничный, манты с бараниной, шурпа",
        style: "Восточный шик, мягкие роскошные диваны, резные деревянные перегородки",
        description: "Ресторан, объединяющий кулинарные шедевры Центральной Азии и Кавказа под одной крышей.",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-ayva/"
    },
    {
        id: "gornitsa",
        name: "Ресторан «Горница»",
        category: "сибирская",
        coords: [57.1441, 65.5299],
        address: "ул. Семакова, 21",
        cuisine: "Русская, Старославянская",
        price: "1 500 ₽",
        dishes: "Грузди соленые в сметане, блины с икрой, кулейка костромская",
        style: "Классическая русская изба в благородном исполнении, беленые стены",
        description: "Уютный ресторан в историческом центре, специализирующийся на традиционной русской кухне.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-gornitsa/"
    },
    {
        id: "sorrento",
        name: "Итальянский ресторан «Sorrento»",
        category: "европейская",
        coords: [57.1481, 65.5511],
        address: "ул. Мельникайте, 98",
        cuisine: "Итальянская, Европейская",
        price: "1 700 ₽",
        dishes: "Пицца из дровяной печи, паста с морепродуктами, тирамису классический",
        style: "Средиземноморский домашний интерьер, теплые пастельные тона",
        description: "Кусочек солнечной Италии в Тюмени. Традиционная неаполитанская пицца и домашняя паста.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/italyanskiy-restoran-sorrento/"
    },
    {
        id: "inkognito",
        name: "Бар «Инкогнито»",
        category: "европейская",
        coords: [57.1539, 65.5482],
        address: "ул. Володарского, 22",
        cuisine: "Европейская, Авторские закуски",
        price: "2 000 ₽",
        dishes: "Спикизи-закуски, ферментированные сыры, мясные деликатесы",
        style: "Тайный бар (Speakeasy), полумрак, камерная закрытая атмосфера",
        description: "Атмосферное скрытое заведение с изысканной коктейльной картой и уединенной атмосферой.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/bar-inkognito/"
    },
    {
        id: "apoint",
        name: "Ресторан «A Point Live»",
        category: "европейская",
        coords: [57.1592, 65.5211],
        address: "ул. 25 октября, 23/1",
        cuisine: "Фьюжн, Современная европейская",
        price: "2 500 ₽",
        dishes: "Гребешки с кремом из цветной капусты, осьминог на гриле",
        style: "Хай-тек лофт, живая музыка, профессиональная сцена и свет",
        description: "Премиальный ресторан-клуб с регулярными выступлениями джазовых и инструментальных коллективов.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-a-point-live/"
    },
    {
        id: "vaffel",
        name: "Кафе «Vaffel»",
        category: "европейская",
        coords: [57.1531, 65.5441],
        address: "ул. Челюскинцев, 26",
        cuisine: "Норвежские вафли, Скандинавская",
        price: "900 ₽",
        dishes: "Вафля с лососем и сливочным сыром, вафля с сыром дорблю и грушей",
        style: "Яркий молодежный поп-арт с элементами скандинавского уюта",
        description: "Концептуальное стритфуд-кафе, где основой каждого сытного или сладкого блюда служат шпинатные, томатные или классические норвежские вафли.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/kafe-vaffel/"
    },
    {
        id: "yamal",
        name: "Кафе «Ямал»",
        category: "сибирская",
        coords: [57.1421, 65.5891],
        address: "ул. 30 лет Победы, 52",
        cuisine: "Северная кулинария, Сибирская",
        price: "1 000 ₽",
        dishes: "Kотлеты из щуки, жаркое со свининой и грибами, брусничный морс",
        style: "Простой традиционный столовый зал с северной символикой",
        description: "Сытная домашняя сибирская еда по крайне доступным ценам.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/kafe-yamal/"
    },
    {
        id: "china",
        name: "Ресторан «China»",
        category: "азиатская",
        coords: [57.1491, 65.5322],
        address: "ул. Комсомольская, 57",
        cuisine: "Аутентичная китайская",
        price: "1 600 ₽",
        dishes: "Утка по-пекински, свинина в кисло-сладком соусе Гобаожоу, битые огурцы",
        style: "Классический китайский ресторан с красными фонарями и крутящимися столами",
        description: "Ресторан аутентичной китайской кухни, возглавляемый приглашенными поварами из КНР.",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-panaziatskoy-kukhni-china/"
    },
    {
        id: "uzbechka",
        name: "Ресторан «Узбечка»",
        category: "грузинская",
        coords: [57.1322, 65.5611],
        address: "ул. Перекопская, 19",
        cuisine: "Узбекская, Среднеазиатская",
        price: "1 350 ₽",
        dishes: "Плов Чайханский, казан-кебаб, лепешки из тандыра, чебуреки",
        style: "Яркие узбекские хан-атласы, расписная посуда Риштанской керамики",
        description: "Ресторан традиционной восточной кухни с настоящим тандыром и сытными порциями.",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-domashney-kukhni-uzbechka/"
    },
    {
        id: "tehnikum",
        name: "Гастробистро «Техникум»",
        category: "европейская",
        coords: [57.1551, 65.5432],
        address: "ул. Советская, 51/3",
        cuisine: "Модерн Фьюжн, Европейская",
        price: "1 700 ₽",
        dishes: "Хрустальные димсамы, пастрами-сэндвич, авторские эклеры",
        style: "Модный поп-арт, минималистичная дизайнерская мебель, открытый бар",
        description: "Трендовое гастрономическое бистро с ироничным интерьером и передовыми кулинарными экспериментами.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/gastrobistro-tehnikum/"
    },
    {
        id: "koffein",
        name: "Кофейня-пекарня «Koffein»",
        category: "кофейня",
        coords: [57.1471, 65.5562],
        address: "ул. Максима Горького, 68/4",
        cuisine: "Спешелти кофе, Выпечка",
        price: "600 ₽",
        dishes: "Миндальный круассан, флэт уайт, синнабоны с корицей",
        style: "Уютный городской лофт, аромат свежего хлеба и обжаренного зерна",
        description: "Уютная городская пекарня с акцентом на ремесленный хлеб длительного брожения и качественный кофе.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/kofeynya-pekarnya-koffein/"
    },
    {
        id: "palermo",
        name: "Кофейня «Palermo Caffe»",
        category: "кофейня",
        coords: [57.1512, 65.5411],
        address: "ул. Водопроводная, 6",
        cuisine: "Итальянский кофе, Десерты",
        price: "550 ₽",
        dishes: "Капучино по-итальянски, панини с моцареллой, канноли",
        style: "Маленькая Сицилия, легкая музыка, винтажные итальянские плакаты",
        description: "Камерное тихое кафе в европейском стиле для утренней чашки эспрессо.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/kofeynya-palermo-caffe-casa/"
    },
    {
        id: "karty-govoryat",
        name: "Кофейня «Карты говорят»",
        category: "кофейня",
        coords: [57.1549, 65.5391],
        address: "ул. Дзержинского, 38",
        cuisine: "Авторские напитки, Кондитерская",
        price: "700 ₽",
        dishes: "Матча-лате черника, тарталетки с малиной, завтраки-конструкторы",
        style: "Мистический и таинственный декор на первой пешеходной улице Тюмени",
        description: "Концептуальная инстаграмная кофейня на улице Дзержинского с тематической подачей десертов.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/kofeynya-karty-govoryat/"
    },
    {
        id: "talk",
        name: "Гастробар «Talk»",
        category: "европейская",
        coords: [57.1522, 65.5499],
        address: "ул. Республики, 48",
        cuisine: "Европейская авторская",
        price: "1 600 ₽",
        dishes: "Брускетта со страчателлой, утиная ножка конфи, cocktail-истории",
        style: "Глубокие темные тона, барная стойка по центру, evening приглушенный свет",
        description: "Место вечерней гастрономической культуры и интеллектуальных бесед за барной стойкой.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/gastrobar-talk/"
    },
    {
        id: "nasledie",
        name: "Ресторан «Наследие»",
        category: "сибирская",
        coords: [57.1502, 65.5512],
        address: "ул. Луначарского, 2",
        cuisine: "Дворянская русская, Сибирская",
        price: "2 400 ₽",
        dishes: "Медвежатина под соусом из дикой вишни, филе нельмы, царские блины",
        style: "Классический интерьер конца XIX века, хрустальные люстры, тяжелые портьеры",
        description: "Ресторан дворянской кухни, исследующий гастрономическое наследие великих сибирских династий.",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-nasledie/"
    },
    {
        id: "barkhan",
        name: "Ресторан «Бархан»",
        category: "грузинская",
        coords: [57.1399, 65.5582],
        address: "ул. Республики, 129",
        cuisine: "Среднеазиатская, Кавказская",
        price: "1 450 ₽",
        dishes: "Люля-кебаб из телятины, лагман уйгурский, самса слоеная тандырная",
        style: "Атмосфера восточного оазиса, уединенные мягкие кабинки",
        description: "Большой ресторанный комплекс восточного гостеприимства и традиционных кавказских и азиатских шашлыков.",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-barkhan/"
    },
    {
        id: "omar-khayyam",
        name: "Ресторан «Омар Хайям»",
        category: "грузинская",
        coords: [57.1451, 65.5521],
        address: "ул. Малыгина, 4/1",
        cuisine: "Персидская, Восточная, Кавказская",
        price: "1 500 ₽",
        dishes: "Плов Самаркандский, каре ягненка на углях, восточные сладости ручной работы",
        style: "Ковры ручной работы, резные арки, восточная каллиграфия в декоре",
        description: "Ресторан изысканной восточной культуры, названный в честь великого поэта и философа.",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/set-restoranov-omar-khayyam/"
    },
    {
        id: "marina-koroleva",
        name: "Шоколадное ателье Марины Королевой",
        category: "кофейня",
        coords: [57.1554, 65.5344],
        address: "ул. Кирова, 40",
        cuisine: "Кондитерское искусство, Шоколад",
        price: "850 ₽",
        dishes: "Трюфели ручной работы, французский горячий шоколад, муссовые пирожные",
        style: "Парижский шик, утонченный премиальный дизайн в пудровых тонах",
        description: "Авторское шоколадное ателье, выпускающее эксклюзивные конфеты ручной работы из премиального бельгийского сырья.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/shokoladnoe-atele-marina-koroleva/"
    },
    {
        id: "pasta-family",
        name: "Ресторан «Pasta Family»",
        category: "европейская",
        coords: [57.1509, 65.5577],
        address: "ул. Фабричная, 5",
        cuisine: "Итальянская",
        price: "1 400 ₽",
        dishes: "Домашняя паста тальятелле с грибами, равиоли со шпинатом, пицца Четыре сыра",
        style: "Светлый семейный ресторан, концепт домашней итальянской кухни",
        description: "Уютное заведение, где паста изготавливается вручную из итальянской муки твердых сортов прямо перед подачей.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-italyanskoy-kukhni-pasta-femili/"
    },
    {
        id: "istorii-khleba",
        name: "Ремесленная пекарня «Истории хлеба»",
        category: "кофейня",
        coords: [57.1489, 65.5612],
        address: "ул. Максима Горького, 32",
        cuisine: "Хлебобулочные изделия, Выпечка",
        price: "450 ₽",
        dishes: "Тартин на закваске, круассаны классические, ремесленный багет",
        style: "Эко-минимализм, открытая зона выпекания, аромат теплого хлеба",
        description: "Ремесленная пекарня полного цикла, специализирующаяся на традиционных бездрожжевых хлебах.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/remeslennaya-pekarnya-istorii-khleba/"
    },
    {
        id: "principle",
        name: "Ресторан «Principle»",
        category: "европейская",
        coords: [57.1599, 65.5302],
        address: "ул. Хохрякова, 47",
        cuisine: "Авторская высокая кухня, Европейская",
        price: "3 200 ₽",
        dishes: "Филе-миньон с фуа-гра, суп из лесных сморчков, деконструированные десерты",
        style: "Строгий дорогой премиальный минимализм, идеальная геометрия интерьера",
        description: "Ресторан высокой гастрономической концепции. Исключительный сервис и сложнейшие кулинарные техники.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-principle/"
    },
    {
        id: "mayrik",
        name: "Ресторан «Майрик»",
        category: "грузинская",
        coords: [57.1411, 65.5422],
        address: "ул. Герцена, 82",
        cuisine: "Армянская, Кавказская",
        price: "1 650 ₽",
        dishes: "Долма в виноградных листьях, кюфта, армянский шашлык Хоровац",
        style: "Каменный армянский декор, мягкие теплые ковровые орнаменты",
        description: "Ресторан аутентичной армянской кухни, воспевающий тепло семейных кулинарных традиций.",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-armyanskoy-kukhni-mayrik/"
    },
    {
        id: "pasta-salsa",
        name: "Ресторан «Pasta Salsa Osteria»",
        category: "европейская",
        coords: [57.1528, 65.5412],
        address: "ул. Водопроводная, 25",
        cuisine: "Итальянская региональная",
        price: "1 800 ₽",
        dishes: "Ризотто с белыми грибами, лазанья Болоньезе, винная тарелка",
        style: "Классическая итальянская остерия, винные шкафы, состаренное дерево",
        description: "Элегантное заведение с богатой винотекой и акцентом на гастрономические традиции Тосканы и Сицилии.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-pasta-salsa-osteria/"
    },
    {
        id: "brew-s-lee",
        name: "Азиатская бироварня «Brew's Lee»",
        category: "азиатская",
        coords: [57.1541, 65.5372],
        address: "ул. Дзержинского, 13",
        cuisine: "Паназиатский стритфуд, Крафт",
        price: "1 250 ₽",
        dishes: "Бао с уткой, свиные ребра в азиатском глазури, вок с морепродуктами",
        style: "Киберпанк лофт, обилие неона, азиатские комиксы на стенах",
        description: "Концептуальный паб на пешеходной улице, соединивший культуру крафтового пивоварения и взрывной паназиатский стритфуд.",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/aziatskaya-birovarnya-brew-s-lee/"
    },
    {
        id: "radis",
        name: "Ресторан «Радис»",
        category: "европейская",
        coords: [57.1402, 65.5699],
        address: "ул. Республики, 164",
        cuisine: "Современная европейская, Русская",
        price: "1 500 ₽",
        dishes: "Медальоны из говядины, салат с подкопченной уткой, фирменные настойки",
        style: "Сдержанный неоклассический стиль, удобное зонирование для банкетов",
        description: "Элегантный ресторан при деловом центре, отлично подходящий как для бизнес-ланчей, так и для вечерних торжеств.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        link: "https://visittyumen.ru/places/restoran-radis/"
    }
];

const quizQuestions = [
    {
        question: "Какая атмосфера вечера вам ближе всего?",
        answers: [
            { text: "Аутентичный уют, дерево, история и традиции", category: "сибирская" },
            { text: "Элегантный европейский ресторан с красивым видом", category: "европейская" },
            { text: "Шумное застолье, гостеприимство и много еды", category: "грузинская" },
            { text: "Современный динамичный лофт, неон и музыка", category: "азиатская" },
            { text: "Уединенный уголок, ноутбук, книга и чашка кофе", category: "кофейня" }
        ]
    },
    {
        question: "Выберите идеальное основное блюдо:",
        answers: [
            { text: "Строганина из северной рыбы или сочная оленина", category: "сибирская" },
            { text: "Изысканный стейк рибай или рыбное филе с соусом", category: "европейская" },
            { text: "Пряные хинкали сочные со специями внутри", category: "грузинская" },
            { text: "Острый суп том ям или классический свежий рамен", category: "азиатская" },
            { text: "Свежий круассан с лососем или сытный сырник", category: "кофейня" }
        ]
    },
    {
        question: "Карому напитку вы отдадите предпочтение?",
        answers: [
            { text: "Настойка на таежных ягодах или морс из брусники", category: "сибирская" },
            { text: "Бокал сухого белого или красного вина", category: "европейская" },
            { text: "Традиционное домашнее грузинское вино", category: "грузинская" },
            { text: "Авторский cocktail на основе азиатских спиртов", category: "азиатская" },
            { text: "Спешелти кофе, альтернативная заварка или раф", category: "кофейня" }
        ]
    }
];

const quizProfiles = {
    сибирская: { title: "Сибирский Первопроходец", desc: "Вы цените глубину традиций, локальные продукты и суровую, но невероятно богатую культуру сибирского региона." },
    европейская: { title: "Изысканный Эстет", desc: "Для вас важна гармония вкуса, безупречный сервис, красивая подача и классические кулинарные школы." },
    грузинская: { title: "Душа Застолья", desc: "Вы любите искреннее гостеприимство, насыщенные пряные вкусы, домашнее тепло и трапезы в кругу близких." },
    азиатская: { title: "Искатель Трендов", desc: "Вам близки контрасты, яркие экзотические специи, современная городская культура и кулинарные эксперименты." },
    кофейня: { title: "Урбанист-Мыслитель", desc: "Вы цените комфорт, баланс, качественные кофейные зерна и пространства, располагающие к размышлениям или работе." }
};

let map;
let geoCollection;
let currentCategory = 'all';
let currentQuestionIndex = 0;
let quizScores = { сибирская: 0, европейская: 0, грузинская: 0, азиатская: 0, кофейня: 0 };

function initMap() {
    map = new ymaps.Map("map", {
        center: [57.1522, 65.5499],
        zoom: 13,
        controls: ['zoomControl', 'fullscreenControl']
    }, {
        searchControlProvider: 'yandex#search'
    });

    geoCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="%23d47b52" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
        iconImageSize: [36, 36],
        iconImageOffset: [-18, -36]
    });

    map.geoObjects.add(geoCollection);

    updateRestaurantCount();
    renderRestaurants();
}

if (typeof ymaps !== 'undefined') {
    ymaps.ready(initMap);
}

function updateRestaurantCount() {
    const el = document.getElementById('restaurants-count');
    if (el) el.innerText = `Заведений в базе: ${restaurants.length}`;
}

function renderRestaurants(filterText = '') {
    const filtered = restaurants.filter(r => {
        const matchesCategory = currentCategory === 'all' || r.category === currentCategory;
        const matchesSearch = filterText === '' || 
            r.name.toLowerCase().includes(filterText.toLowerCase()) ||
            r.cuisine.toLowerCase().includes(filterText.toLowerCase()) ||
            r.dishes.toLowerCase().includes(filterText.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const listContainer = document.getElementById('restaurants-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    if (geoCollection) {
        geoCollection.removeAll();
    }

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div class="text-center py-8 text-zinc-500 text-sm">
                <i class="fa-solid fa-folder-open text-2xl mb-2 block"></i>
                Ничего не найдено
            </div>
        `;
        return;
    }

    filtered.forEach(r => {
        const card = document.createElement('div');
        card.id = `card-${r.id}`;
        card.className = 'restaurant-card p-4 rounded-xl cursor-pointer';
        card.onclick = () => showRestaurantDetails(r.id, true);
        card.innerHTML = `
            <div class="flex justify-between items-start gap-2">
                <h4 class="font-bold text-sm text-white">${r.name}</h4>
                <span class="text-[10px] uppercase font-bold tracking-wider text-[#d47b52] px-2 py-0.5 rounded bg-[#d47b52]/10 border border-[#d47b52]/20 shrink-0">${r.category}</span>
            </div>
            <p class="text-xs text-zinc-400 mt-1.5 line-clamp-2">${r.description}</p>
            <div class="flex items-center gap-3 mt-3 text-[11px] text-zinc-500 font-medium">
                <span class="flex items-center gap-1"><i class="fa-solid fa-location-dot text-[#d47b52]"></i> ${r.address}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-wallet text-[#d47b52]"></i> ${r.price}</span>
            </div>
        `;
        listContainer.appendChild(card);

        if (geoCollection) {
            const placemark = new ymaps.Placemark(r.coords, {
                hintContent: r.name,
                restaurantId: r.id
            });
            placemark.events.add('click', function () {
                showRestaurantDetails(r.id, false);
            });
            geoCollection.add(placemark);
        }
    });
}

function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('#category-filters button').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = event.currentTarget;
    if (activeBtn) activeBtn.classList.add('active');
    
    const searchInput = document.getElementById('search-input');
    renderRestaurants(searchInput ? searchInput.value : '');
}

function handleSearch(val) {
    renderRestaurants(val);
}

function showRestaurantDetails(id, panTo = false) {
    const r = restaurants.find(item => item.id === id);
    if (!r) return;

    document.querySelectorAll('.restaurant-card').forEach(card => card.classList.remove('active'));
    const activeCard = document.getElementById(`card-${id}`);
    if (activeCard) {
        activeCard.classList.remove('hidden');
        activeCard.classList.add('active');
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    document.getElementById('details-img').src = r.image;
    document.getElementById('details-badge').innerText = r.category;
    document.getElementById('details-name').innerText = r.name;
    document.getElementById('details-cuisine').innerText = r.cuisine;
    document.getElementById('details-desc').innerText = r.description;
    document.getElementById('details-address').innerText = r.address;
    document.getElementById('details-price').innerText = `Средний чек: ${r.price}`;
    document.getElementById('details-dishes').innerText = r.dishes;
    document.getElementById('details-style').innerText = r.style;

    const historyBlock = document.getElementById('details-history-block');
    if (r.history) {
        document.getElementById('details-history').innerText = r.history;
        historyBlock.classList.remove('hidden');
    } else {
        historyBlock.classList.add('hidden');
    }

    document.getElementById('details-link').href = r.link;
    document.getElementById('details-slide').classList.remove('hidden');

    if (panTo && map) {
        const targetCoords = [parseFloat(r.coords[0]), parseFloat(r.coords[1])];
        map.panTo(targetCoords, { flying: true, duration: 600 }).then(() => {
            map.setZoom(16, { duration: 200 });
        });
    }
}

function closeDetails() {
    document.getElementById('details-slide').classList.add('hidden');
    document.querySelectorAll('.restaurant-card').forEach(card => card.classList.remove('active'));
}

function toggleQuizModal(show) {
    const modal = document.getElementById('quiz-modal');
    if (show) {
        modal.classList.remove('hidden');
        resetQuiz();
    } else {
        modal.classList.add('hidden');
    }
}

function loadQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
    document.getElementById('quiz-question-text').innerText = q.question;

    const answersContainer = document.getElementById('quiz-answers');
    answersContainer.innerHTML = '';

    q.answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/40 hover:border-zinc-600 p-3.5 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white transition-all';
        btn.innerText = ans.text;
        btn.onclick = () => handleAnswer(ans.category);
        answersContainer.appendChild(btn);
    });
}

function handleAnswer(category) {
    quizScores[category]++;
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById('quiz-progress').style.width = '100%';
    document.getElementById('quiz-question-container').classList.add('hidden');
    document.getElementById('quiz-result-container').classList.remove('hidden');

    let topCategory = 'сибирская';
    let maxScore = -1;
    for (const cat in quizScores) {
        if (quizScores[cat] > maxScore) {
            maxScore = quizScores[cat];
            topCategory = cat;
        }
    }

    const result = quizProfiles[topCategory];
    document.getElementById('quiz-result-title').innerText = result.title;
    document.getElementById('quiz-result-desc').innerText = result.desc;

    const recs = restaurants.filter(r => r.category === topCategory).slice(0, 3);
    const recsContainer = document.getElementById('quiz-recommendations');
    recsContainer.innerHTML = '';

    recs.forEach(r => {
        const el = document.createElement('div');
        el.className = 'bg-zinc-800/40 border border-zinc-700/20 p-3 rounded-xl flex items-center justify-between';
        el.innerHTML = `
            <div class="text-left">
                <h5 class="text-xs font-bold text-white">${r.name}</h5>
                <p class="text-[10px] text-zinc-400 mt-0.5">${r.address}</p>
            </div>
            <button onclick="toggleQuizModal(false); showRestaurantDetails('${r.id}', true);" class="bg-[#d47b52] hover:bg-amber-600 text-white text-[9px] uppercase tracking-wider font-extrabold py-1.5 px-3 rounded-lg transition-colors">
                Открыть
            </button>
        `;
        recsContainer.appendChild(el);
    });
}

function resetQuiz() {
    currentQuestionIndex = 0;
    quizScores = { сибирская: 0, европейская: 0, грузинская: 0, азиатская: 0, кофейня: 0 };
    document.getElementById('quiz-question-container').classList.remove('hidden');
    document.getElementById('quiz-result-container').classList.add('hidden');
    loadQuestion();
}

window.onload = function() {
    if (typeof ymaps === 'undefined') {
        updateRestaurantCount();
        renderRestaurants();
    }
};