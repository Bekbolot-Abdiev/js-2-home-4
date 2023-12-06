const ol=document.querySelector('ol')


const users=[
    {firstName:'Кёртис', surname:'Дже́ксон(50 Cent)', kesip:'Репер', maalymat:'Кёртис Джеймс Дже́ксон III — американский рэпер, актёр, писатель, боксёрский промоутер и продюсер, известный под сценическим псевдонимом 50 Cent, который переводится как «Пятьдесят центов». Известность пришла к нему с выпуском альбомов Get Rich or Die Tryin’ и The Massacre.', tel:'(427) 893-2349', img:'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS9h4MLEPDysW5YdcNh0xthCRqcIebIp4-SCg4lcJ6VJtv36kjMv3FbGP7Ms4WkPUSs', email:'50Centt@gmail.com'},

    {firstName:'Дже́йсон', surname:'Сте́йтем', kesip:'Aктёр', maalymat:'Дже́йсон Сте́йтем — британский актёр, известный по фильмам режиссёра Гая Ричи, дилогии «Адреналин», а также сериям «Перевозчик», «Неудержимые» и «Форсаж».', tel:'0256166880', img:'https://celebbio.org/wp-content/cache/thumb/af/6f7872ea99621af_400x400.jpg', email:'jason1@gmail.com'},

    {firstName:'Э́рлинг', surname:'Хо́ланн', kesip:'Футболист', maalymat:'Э́рлинг Брёут Хо́ланн — норвежский футболист, нападающий английского клуба «Манчестер Сити» и национальной сборной Норвегии. Рекордсмен английской Премьер-лиги по голам за сезон.', tel:'+41 (0)04 239 65 97', img:'https://img.championat.com/c/900x900/news/big/v/m/erling-holand-v-srednem-tratit-na-gol-11-kasanij_16630750641613711643.jpg', email:'xolland78@gmail.com'},

    {firstName:'Дже́ки', surname:'Чан', kesip:'Актёр', maalymat:'Дже́ки Чан — гонконгский актёр, каскадёр, кинорежиссёр, кинопродюсер, сценарист, постановщик трюков и боевых сцен, певец, филантроп, мастер боевых искусств. Посол доброй воли ЮНИСЕФ. Кавалер ордена Британской империи, главный режиссёр Чанчуньской киностудии — старейшей киностудии в КНР.', tel:'14755580933', img:'https://cdnn11.img.sputnik.by/img/07e5/04/05/1047309090_705:0:2517:1994_1920x0_80_0_0_e8e0c63dac50783fccef91f93375e65c.jpg', email:'chan85@gmail.com'},

    {firstName:'Муха́ммед', surname:'Али́', kesip:'Боксёр', maalymat:'Муха́ммед Али́ — американский боксёр-профессионал, выступавший в тяжёлой весовой категории; один из самых известных боксёров в истории мирового бокса. Чемпион XVII Летних Олимпийских игр 1960 года в полутяжёлой весовой категории, абсолютный чемпион мира в тяжёлом весе.', tel:'1-636-860-3711 x069', img:'https://avatars.dzeninfra.ru/get-zen_doc/1860621/pub_5ea07fa7f5567254fc3531c1_5ea09ed6603e850f1fe85f41/scale_1200', email:'alii002@gmail.com'},

    {firstName:'И́лон', surname:'Маск', kesip:'Инженер', maalymat:'И́лон Рив Маск — американский предприниматель, инженер и миллиардер. Основатель, генеральный директор и главный инженер компании SpaceX; инвестор, генеральный директор и архитектор продукта компании Tesla; основатель The Boring Company; соучредитель Neuralink и OpenAI; владелец Twitter (X).', tel:'+15349030974', img:'https://sputnik.kg/img/07e6/05/16/1064604479_69:0:2116:2047_1920x0_80_0_0_e6612978938d81ea8a6161bf973bc648.jpg', email:'Maskk89@gmail.com'},
    
    {firstName:'А́лан', surname:'Уо́кер', kesip:'Диджей', maalymat:'А́лан О́лав Уо́кер — англо-норвежский музыкальный продюсер и диджей. Стал известен в 2015 году после выпуска сингла «Faded», который получил платиновый статус в нескольких странах и собрал более 3 млрд просмотров на YouTube. В 2018 году выпустил свой дебютный студийный альбом Different World.', tel:'9841743113', img:'https://i.scdn.co/image/ab6761610000e5ebbf753c009fd9c2d53351dd3c', email:'walker99@gmail.com'},

    {firstName:'Сти́вен', surname:'Джобс', kesip:'Американский предприниматель', maalymat:'Сти́вен Пол Джобс — американский предприниматель, изобретатель и промышленный дизайнер, получивший широкое признание в качестве пионера эры информационных технологий. Один из основателей, председатель совета директоров и CEO корпорации Apple. Один из основателей и CEO киностудии Pixar.', tel:'(726) 285-1473', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/274px-Steve_Jobs_Headshot_2010-CROP.jpg', email:'jobs78@gmail.com'},

    {firstName:'Снуп', surname:'Догг', kesip:'Репер', maalymat:'Ке́лвин Кордоза́р Бро́дус-мла́дший, известный профессионально как Snoop Dogg — американский рэпер и актёр. Его известность восходит к 1992 году, когда он появился на дебютном сольном сингле Dr. Dre Deep Cover, а затем на дебютном сольном альбоме Dre The Chronic.', tel:'+14858671201', img:'https://icdn.lenta.ru/images/2019/10/19/22/20191019224029914/square_320_487f0f3189bb70e2fede476e7c8c3c8a.jpg', email:'snoop85@gmail.com'},

    {firstName:'Дуэйн', surname:'Джонсон', kesip:'Актёр', maalymat:'Дуэ́йн Ду́глас Джо́нсон — американский киноактёр, предприниматель, музыкант, певец, в прошлом — рестлер. Известен под псевдонимом Скала́. Его считают одним из величайших рестлеров всех времён, до начала актёрской карьеры он восемь лет выступал в WWE.', tel:'+1-549-346-8086', img:'https://avatars.dzeninfra.ru/get-zen_doc/60808/pub_5b69e5422ef71f00a88a0aa9_5b69eddec3288d00a833f0c9/scale_1200', email:'jon366@gmail.com'},
]

function showUsers(array){
    for (const user of array) {
        ol.innerHTML+=`
        <div style=' border: 2px solid white; padding: 20px;'>
        <li style='margin:20px;'>
        <h2>${user.firstName} ${user.surname}</h2>
        <br>
        <img width="150" src='${user.img}'
        <br>
        <h3>Профессия: ${user.kesip}</h3>
        <br>
        <p style='width="100px"'>${user.maalymat}</p>
        <br>
        <h4>Номер телефона: ${user.tel}</h4>
        <br>
        <h4>Gmail: ${user.email}</h4>
        </li>
        </div>
        `
    }
    
}
showUsers(users)