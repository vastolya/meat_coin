export interface Dish {
  id: number
  name: string
  description: string
  weight: string
  image: string
  category: string
}

export interface MenuCategory {
  id: string
  label: string
}

// TODO: удалить после подключения меню к CRM — категории (в т.ч. label) будут приходить с бэкенда
export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'breakfast', label: 'Завтраки' },
  { id: 'lunch', label: 'Закуски' },
  { id: 'dinner', label: 'Салаты' },
  { id: 'steaks', label: 'Стейки' },
  { id: 'bar', label: 'Бар / Винная карта' },
  { id: 'desserts', label: 'Десерты' },
]

// TODO: удалить после подключения меню к CRM — данные будут приходить с бэкенда
const P = '/dish_placeholder.webp'
const B = '/bar_placeholder.webp'

export const DISHES: Dish[] = [
  // breakfast
  { id: 1,  name: 'Яйца Бенедикт',        description: 'Яйца пашот, бекон, голландский соус, булочка бриошь',       weight: '320 г',   image: P, category: 'breakfast' },
  { id: 2,  name: 'Стейк Рибай',           description: 'Говядина мраморная, трюфельное масло, тимьян',               weight: '280 г',   image: P, category: 'breakfast' },
  { id: 3,  name: 'Омлет с трюфелем',      description: 'Яйца, сливки, трюфельное масло, пармезан',                   weight: '200 г',   image: P, category: 'breakfast' },
  { id: 4,  name: 'Авокадо тост',          description: 'Хлеб на закваске, авокадо, яйцо пашот, редис, микрозелень', weight: '250 г',   image: P, category: 'breakfast' },
  { id: 5,  name: 'Гранола с ягодами',     description: 'Домашняя гранола, греческий йогурт, сезонные ягоды, мёд',   weight: '300 г',   image: P, category: 'breakfast' },
  { id: 6,  name: 'Панкейки',              description: 'Три пышных панкейка, кленовый сироп, сливочное масло',       weight: '350 г',   image: P, category: 'breakfast' },
  { id: 7,  name: 'Сырники со сметаной',   description: 'Творожные сырники, сметана, варенье из лесных ягод',         weight: '280 г',   image: P, category: 'breakfast' },
  { id: 8,  name: 'Тост с лососем',        description: 'Ржаной хлеб, слабосолёный лосось, крем-сыр, каперсы',       weight: '220 г',   image: P, category: 'breakfast' },
  { id: 9,  name: 'Шакшука',               description: 'Яйца в томатном соусе, перец, зира, кориандр, лаваш',       weight: '380 г',   image: P, category: 'breakfast' },
  { id: 10, name: 'Каша с ягодами',        description: 'Овсяная каша на кокосовом молоке, черника, малина',          weight: '260 г',   image: P, category: 'breakfast' },
  { id: 11, name: 'Круассан с ветчиной',   description: 'Масляный круассан, ветчина, сыр грюйер, горчица дижон',     weight: '180 г',   image: P, category: 'breakfast' },
  { id: 12, name: 'Фруктовая тарелка',     description: 'Сезонные фрукты, ягоды, мятный сироп, лайм',                weight: '320 г',   image: P, category: 'breakfast' },
  { id: 13, name: 'Яичница в хлебе',       description: 'Хлеб на закваске, яйцо, пармезан, руккола, томаты черри',   weight: '240 г',   image: P, category: 'breakfast' },
  { id: 14, name: 'Сэндвич с индейкой',    description: 'Цельнозерновой хлеб, индейка, авокадо, листья салата',      weight: '300 г',   image: P, category: 'breakfast' },
  { id: 15, name: 'Вафли с мороженым',     description: 'Хрустящие вафли, ванильное мороженое, карамельный соус',    weight: '340 г',   image: P, category: 'breakfast' },
  { id: 16, name: 'Ачма',                  description: 'Слоёная выпечка с сыром сулугуни и зеленью',                 weight: '200 г',   image: P, category: 'breakfast' },
  // lunch
  { id: 17, name: 'Говяжий бургер',        description: 'Рибай 180г, сыр чеддер, карамелизованный лук, соус BBQ',   weight: '420 г',   image: P, category: 'lunch' },
  { id: 18, name: 'Цезарь с курицей',      description: 'Ромейн, куриное филе гриль, пармезан, крутоны',             weight: '350 г',   image: P, category: 'lunch' },
  { id: 19, name: 'Том Ям',                description: 'Кокосовый бульон, тигровые креветки, грибы, лайм, чили',   weight: '400 мл',  image: P, category: 'lunch' },
  { id: 20, name: 'Паста карбонара',       description: 'Паппарделле, гуанчале, желток, пармезан, чёрный перец',    weight: '320 г',   image: P, category: 'lunch' },
  { id: 21, name: 'Боул с лососем',        description: 'Рис, лосось, авокадо, огурец, кунжутный соус, нори',       weight: '380 г',   image: P, category: 'lunch' },
  { id: 22, name: 'Греческий салат',       description: 'Томаты, огурцы, фета, маслины, красный лук, орегано',      weight: '280 г',   image: P, category: 'lunch' },
  { id: 23, name: 'Суп харчо',             description: 'Говядина, рис, грецкие орехи, аджика, зелень',             weight: '380 мл',  image: P, category: 'lunch' },
  { id: 24, name: 'Лепёшка с бараниной',   description: 'Тандырная лепёшка, баранина, лук, зелень, острый соус',   weight: '360 г',   image: P, category: 'lunch' },
  { id: 25, name: 'Пицца маргарита',       description: 'Томатный соус, моцарелла, базилик, оливковое масло',       weight: '450 г',   image: P, category: 'lunch' },
  { id: 26, name: 'Ризотто с грибами',     description: 'Арборио, белые грибы, пармезан, белое вино, тимьян',       weight: '340 г',   image: P, category: 'lunch' },
  { id: 27, name: 'Тако с говядиной',      description: 'Три тако, говядина барбакоа, сальса, авокадо, кинза',      weight: '300 г',   image: P, category: 'lunch' },
  { id: 28, name: 'Шашлык из курицы',      description: 'Куриное бедро, маринад из йогурта и специй, лаваш',        weight: '380 г',   image: P, category: 'lunch' },
  { id: 29, name: 'Окрошка',               description: 'Телятина, огурцы, редис, зелень, квас, сметана',           weight: '400 мл',  image: P, category: 'lunch' },
  { id: 30, name: 'Вок с уткой',           description: 'Утиное филе, рисовая лапша, бок чой, соус хойсин',         weight: '360 г',   image: P, category: 'lunch' },
  { id: 31, name: 'Хинкали',               description: 'Пять хинкали с говядиной и свининой, зелень, перец',       weight: '400 г',   image: P, category: 'lunch' },
  { id: 32, name: 'Сэндвич с тунцом',      description: 'Чиабатта, тунец, каперсы, красный лук, руккола',           weight: '280 г',   image: P, category: 'lunch' },
  // dinner
  { id: 33, name: 'Утиная ножка конфи',    description: 'Конфи из утки, картофельное пюре, соус из вишни',          weight: '400 г',   image: P, category: 'dinner' },
  { id: 34, name: 'Дорадо на гриле',       description: 'Целая дорадо, лимон, тимьян, каперсный соус',              weight: '500 г',   image: P, category: 'dinner' },
  { id: 35, name: 'Ягнёнок в специях',     description: 'Каре ягнёнка, соус из граната, булгур с овощами',          weight: '380 г',   image: P, category: 'dinner' },
  { id: 36, name: 'Телятина оссобуко',     description: 'Голяшка телёнка, гремолата, шафрановое ризотто',           weight: '520 г',   image: P, category: 'dinner' },
  { id: 37, name: 'Осьминог гриль',        description: 'Осьминог, картофель с паприкой, айоли, лимон',             weight: '360 г',   image: P, category: 'dinner' },
  { id: 38, name: 'Лосось с трюфелем',     description: 'Филе лосося, трюфельное пюре, шпинат, икра',               weight: '340 г',   image: P, category: 'dinner' },
  { id: 39, name: 'Перепёлки на гриле',    description: 'Две перепёлки, соус из инжира, полента, микрозелень',      weight: '420 г',   image: P, category: 'dinner' },
  { id: 40, name: 'Свиные рёбра',          description: 'Рёбра в медово-горчичном маринаде, печёный картофель',     weight: '600 г',   image: P, category: 'dinner' },
  { id: 41, name: 'Баранина с нутом',      description: 'Тушёная баранина, нут, томаты, специи рас-эль-ханут',     weight: '450 г',   image: P, category: 'dinner' },
  { id: 42, name: 'Крем-суп из тыквы',     description: 'Тыква, имбирь, кокосовые сливки, семена тыквы',           weight: '380 мл',  image: P, category: 'dinner' },
  { id: 43, name: 'Говяжьи щёки',          description: 'Томлёные щёки, пюре из сельдерея, соус из красного вина', weight: '400 г',   image: P, category: 'dinner' },
  { id: 44, name: 'Треска с овощами',      description: 'Запечённая треска, ратату из прованских овощей',           weight: '380 г',   image: P, category: 'dinner' },
  { id: 45, name: 'Цыплёнок табака',       description: 'Цыплёнок под прессом, чесночный соус, картофель фри',     weight: '700 г',   image: P, category: 'dinner' },
  { id: 46, name: 'Морской окунь',         description: 'Филе окуня, соус верблан, спаржа, картофель дофинуа',     weight: '360 г',   image: P, category: 'dinner' },
  { id: 47, name: 'Телячья котлета',       description: 'Котлета де-воляй, грибной жульен, запечённые томаты',     weight: '340 г',   image: P, category: 'dinner' },
  { id: 48, name: 'Мусака',                description: 'Баранина, баклажаны, бешамель, томатный соус',             weight: '420 г',   image: P, category: 'dinner' },
  // steaks
  { id: 49, name: 'Томагавк',              description: 'Говядина PRIME 1,2–1,5 кг, соль, перец, масло с травами', weight: '1 400 г', image: P, category: 'steaks' },
  { id: 50, name: 'Рибай',                 description: 'Мраморная говядина PRIME, масло с тимьяном и чесноком',   weight: '350 г',   image: P, category: 'steaks' },
  { id: 51, name: 'Стриплойн',             description: 'Говядина CHOICE, соус беарнез, картофель конфи',          weight: '300 г',   image: P, category: 'steaks' },
  { id: 52, name: 'Филе-миньон',           description: 'Вырезка PRIME, фуа-гра, соус из мадеры, трюфель',         weight: '220 г',   image: P, category: 'steaks' },
  { id: 53, name: 'Ти-бон',                description: 'Говядина PRIME, масло с травами, жареные грибы',          weight: '800 г',   image: P, category: 'steaks' },
  { id: 54, name: 'Вагю А5',               description: 'Японская говядина вагю, соль флёр де сель, лимон',        weight: '150 г',   image: P, category: 'steaks' },
  { id: 55, name: 'Мачете',                description: 'Говядина CHOICE, острый чимичурри, картофель',            weight: '350 г',   image: P, category: 'steaks' },
  { id: 56, name: 'Флэт айрон',            description: 'Лопатка PRIME, соус из красного вина, спаржа',            weight: '280 г',   image: P, category: 'steaks' },
  { id: 57, name: 'Скёрт стейк',           description: 'Говяжья диафрагма, маринад из цитрусов, сальса верде',   weight: '300 г',   image: P, category: 'steaks' },
  { id: 58, name: 'Денвер',                description: 'Говядина PRIME, трюфельное масло, печёные томаты черри',  weight: '260 г',   image: P, category: 'steaks' },
  { id: 59, name: 'Шатобриан',             description: 'Двойная вырезка, соус периго, картофель дофинуа',         weight: '500 г',   image: P, category: 'steaks' },
  { id: 60, name: 'Пиканья',               description: 'Бразильский отруб, крупная соль, соус хрен',              weight: '320 г',   image: P, category: 'steaks' },
  { id: 61, name: 'Рамп стейк',            description: 'Говядина CHOICE, соус из голубого сыра, картофель фри',  weight: '300 г',   image: P, category: 'steaks' },
  { id: 62, name: 'Тендерлойн',            description: 'Нежная вырезка, соус демиглас, спаржа гриль',            weight: '240 г',   image: P, category: 'steaks' },
  { id: 63, name: 'Каре говядины',         description: 'Рёбрышки PRIME, карамелизованный лук, соус барбекю',     weight: '600 г',   image: P, category: 'steaks' },
  { id: 64, name: 'Клаб стейк',            description: 'Говядина CHOICE, чесночное масло, жареный розмарин',     weight: '350 г',   image: P, category: 'steaks' },
  // desserts
  { id: 65, name: 'Шоколадный фондан',     description: 'Тёплый шоколадный кекс, ванильное мороженое, карамель',  weight: '180 г',   image: P, category: 'desserts' },
  { id: 66, name: 'Тирамису',              description: 'Маскарпоне, савоярди, эспрессо, амаретто, какао',        weight: '160 г',   image: P, category: 'desserts' },
  { id: 67, name: 'Крем-брюле',            description: 'Ваниль бурбон, карамельная корочка, ягоды',              weight: '140 г',   image: P, category: 'desserts' },
  { id: 68, name: 'Медовик',               description: 'Тонкие медовые коржи, сметанный крем, грецкие орехи',   weight: '200 г',   image: P, category: 'desserts' },
  { id: 69, name: 'Панна котта',           description: 'Сливочная панна котта, ягодный кули, мята',              weight: '150 г',   image: P, category: 'desserts' },
  { id: 70, name: 'Пахлава',               description: 'Слоёное тесто, фисташки, мёд, розовая вода',             weight: '180 г',   image: P, category: 'desserts' },
  { id: 71, name: 'Эклер с шоколадом',     description: 'Заварное тесто, шоколадный крем, глазурь',              weight: '120 г',   image: P, category: 'desserts' },
  { id: 72, name: 'Чизкейк',               description: 'Нью-йоркский чизкейк, ягодный соус, крамбл',            weight: '170 г',   image: P, category: 'desserts' },
  { id: 73, name: 'Мусс из маракуйи',      description: 'Воздушный мусс, манго, кокосовая пена, безе',           weight: '140 г',   image: P, category: 'desserts' },
  { id: 74, name: 'Сорбе из клубники',     description: 'Три шарика клубничного сорбе, свежая мята',             weight: '120 г',   image: P, category: 'desserts' },
  { id: 75, name: 'Штрудель с яблоком',    description: 'Хрустящее слоёное тесто, яблоки, корица, ванильный соус', weight: '220 г', image: P, category: 'desserts' },
  { id: 76, name: 'Профитроли',            description: 'Заварные шарики, ванильный крем, шоколадный соус',       weight: '160 г',   image: P, category: 'desserts' },
  { id: 77, name: 'Трюфели ручной работы', description: 'Шесть трюфелей — тёмный, молочный, белый шоколад',      weight: '90 г',    image: P, category: 'desserts' },
  { id: 78, name: 'Банановый сплит',       description: 'Банан, три вида мороженого, взбитые сливки, вишня',      weight: '300 г',   image: P, category: 'desserts' },
  { id: 79, name: 'Рахат-лукум',           description: 'Ассорти турецких сладостей, фисташки, розовая вода',    weight: '150 г',   image: P, category: 'desserts' },
  { id: 80, name: 'Кекс с лимоном',        description: 'Влажный лимонный кекс, лимонный курд, сахарная глазурь', weight: '140 г',  image: P, category: 'desserts' },
  // bar
  { id: 81, name: 'Негрони',               description: 'Кампари, сладкий вермут, джин, апельсиновая цедра',      weight: '100 мл',  image: B, category: 'bar' },
  { id: 82, name: 'Апероль Шприц',         description: 'Апероль, просекко, содовая, апельсин',                   weight: '200 мл',  image: B, category: 'bar' },
  { id: 83, name: 'Олд Фэшн',              description: 'Бурбон, биттер, коричневый сахар, апельсиновая цедра',  weight: '100 мл',  image: B, category: 'bar' },
  { id: 84, name: 'Маргарита',             description: 'Текила, куантро, лаймовый сок, соль',                    weight: '120 мл',  image: B, category: 'bar' },
  { id: 85, name: 'Кир Руаяль',            description: 'Шампанское брют, ликёр из чёрной смородины',             weight: '150 мл',  image: B, category: 'bar' },
  { id: 86, name: 'Эспрессо Мартини',      description: 'Водка, кофейный ликёр, эспрессо, сахарный сироп',       weight: '100 мл',  image: B, category: 'bar' },
  { id: 87, name: 'Мохито',                description: 'Ром, мята, лайм, тростниковый сахар, содовая',           weight: '300 мл',  image: B, category: 'bar' },
  { id: 88, name: 'Пина Колада',           description: 'Белый ром, кокосовые сливки, ананасовый сок',            weight: '250 мл',  image: B, category: 'bar' },
  { id: 89, name: 'Виски сауэр',           description: 'Бурбон, лимонный сок, сахар, яичный белок',             weight: '120 мл',  image: B, category: 'bar' },
  { id: 90, name: 'Том Коллинз',           description: 'Джин, лимонный сок, сахар, содовая, вишня',             weight: '200 мл',  image: B, category: 'bar' },
  { id: 91, name: 'Пальома',               description: 'Текила, грейпфрутовый сок, соль, содовая, лайм',        weight: '200 мл',  image: B, category: 'bar' },
  { id: 92, name: 'Беллини',               description: 'Просекко, персиковое пюре, малиновый биттер',            weight: '150 мл',  image: B, category: 'bar' },
  { id: 93, name: 'Дайкири',               description: 'Белый ром, лаймовый сок, тростниковый сахар',           weight: '100 мл',  image: B, category: 'bar' },
  { id: 94, name: 'Лимончелло Тоник',      description: 'Лимончелло, тоник, лимон, мята',                         weight: '200 мл',  image: B, category: 'bar' },
  { id: 95, name: 'Французский 75',        description: 'Джин, лимонный сок, сахар, шампанское',                  weight: '150 мл',  image: B, category: 'bar' },
  { id: 96,  name: 'Гибискус Спритц',       description: 'Каркаде, просекко, розовый грейпфрут, тимьян',          weight: '200 мл',  image: B, category: 'bar' },
  { id: 97,  name: 'Клевер Клаб',          description: 'Джин, малиновый сироп, лимонный сок, яичный белок',      weight: '120 мл',  image: B, category: 'bar' },
  { id: 98,  name: 'Сингапурский слинг',   description: 'Джин, вишнёвый ликёр, куантро, гренадин, ананасовый сок', weight: '200 мл', image: B, category: 'bar' },
  { id: 99,  name: 'Кайпиринья',           description: 'Кашаса, лайм, тростниковый сахар, лёд',                  weight: '150 мл',  image: B, category: 'bar' },
  { id: 100, name: 'Манхэттен',            description: 'Ржаной виски, сладкий вермут, ангостура',                 weight: '100 мл',  image: B, category: 'bar' },
  { id: 101, name: 'Авиация',              description: 'Джин, ликёр из фиалки, маraschino, лимонный сок',         weight: '100 мл',  image: B, category: 'bar' },
  { id: 102, name: 'Космополитен',         description: 'Водка, куантро, клюквенный сок, лаймовый сок',            weight: '120 мл',  image: B, category: 'bar' },
  { id: 103, name: 'Сайдкар',              description: 'Коньяк, куантро, лимонный сок, сахарный сироп',           weight: '100 мл',  image: B, category: 'bar' },
  { id: 104, name: 'Последнее слово',      description: 'Джин, зелёный Шартрёз, мараскино, лаймовый сок',          weight: '100 мл',  image: B, category: 'bar' },
  { id: 105, name: 'Бумажный самолётик',   description: 'Бурбон, Апероль, Амаро Нонино, лимонный сок',             weight: '100 мл',  image: B, category: 'bar' },
  { id: 106, name: 'Дымный Робин Гуд',     description: 'Мескаль, фиалковый ликёр, лимон, имбирный биттер',        weight: '120 мл',  image: B, category: 'bar' },
  { id: 107, name: 'Джунгли',              description: 'Ром, кокос, манго, маракуйя, лайм',                       weight: '200 мл',  image: B, category: 'bar' },
  { id: 108, name: 'Красный закат',        description: 'Текила, гренадин, апельсиновый сок, маракуйя',            weight: '200 мл',  image: B, category: 'bar' },
  { id: 109, name: 'Золотой час',          description: 'Джин, куркума, мёд, лимон, имбирь',                       weight: '150 мл',  image: B, category: 'bar' },
  { id: 110, name: 'Северное сияние',      description: 'Водка, блуберри, лаванда, тоник, лайм',                   weight: '200 мл',  image: B, category: 'bar' },
  { id: 111, name: 'Горький апельсин',     description: 'Кампари, ром, апельсиновый биттер, содовая',               weight: '180 мл',  image: B, category: 'bar' },
  { id: 112, name: 'Мясной мартини',       description: 'Водка, дымный биттер, бальзамик, розмарин, оливка',       weight: '100 мл',  image: B, category: 'bar' },
]
