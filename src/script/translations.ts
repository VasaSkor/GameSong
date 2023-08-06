interface TranslationData {
    home: string,
    game: string,
    gallery: string,
    language: string,
    title: string,
    start: string,
    scoreText: string,
    scoreTextIn: string,
    next: string,
    Congratulations: string,
    NewGame: string,

    GenshinTitle: string,
    TesTitle: string,
    MinecraftTitle: string,
    WitcherTitle: string,
    LeftDeadTitle: string,
    MetroTitle: string,
    EverlastingSummerTitle: string,
    GTATitle: string,
    HearthstoneTitle: string,
    IsaacTitle: string,
    StarRailTitle: string,
    FalloutTitle: string,
    AtomicTitle: string,
    PaydayTitle: string,
    MarioTitle: string,

    GenshinDescription: string,
    TesDescription: string,
    MinecraftDescription: string,
    WitcherDescription: string,
    LeftDeadDescription: string,
    MetroDescription: string,
    EverlastingSummerDescription: string,
    GTADescription: string,
    HearthstoneDescription: string,
    IsaacDescription: string,
    StarRailDescription: string,
    FalloutDescription: string,
    ListenDescription: string,

    Beginner: string,
    Easy: string,
    Medium: string,
    Hard: string,
    Adept: string,
    Legend: string,
    Great: string,
    Cool: string,
    Titan: string,
    God: string,
}

interface Translations {
    en: TranslationData;
    ru: TranslationData;
}

const translations: Translations = {
    en: {
        home: 'Home',
        game: 'Game',
        gallery: 'Gallery',
        language: 'En',
        title: 'GAME SOUND QUIZ',
        start: 'START',
        scoreText: 'Score',
        scoreTextIn: 'in',
        next: 'Next',
        Congratulations: 'Congratulations you completed the game',
        NewGame: 'New Game',

        GenshinTitle: 'Genshin Impact',
        TesTitle: 'Tes V: Skyrim',
        MinecraftTitle: 'Minecraft',
        WitcherTitle: 'The Witcher 3: Wild Hunt',
        LeftDeadTitle: 'Left 4 Dead 2',
        MetroTitle: 'Metro 2033',
        EverlastingSummerTitle: 'Everlasting Summer',
        GTATitle: 'Grand Theft Auto IV',
        HearthstoneTitle: 'Hearthstone',
        IsaacTitle: 'The Binding of Isaac',
        StarRailTitle: 'Star Rail',
        FalloutTitle: 'Fallout 4',
        AtomicTitle: 'Atomic Heart',
        PaydayTitle: 'Payday',
        MarioTitle: 'Mario',

        GenshinDescription: 'Genshin Impact is an open world action RPG inspired by' +
            ' The Legend of Zelda series. Players are waiting for the fantasy world' +
            ' of Teyvat, which is full of ruins of ancient cities, fortresses,' +
            ' magical forests and the like.',
        TesDescription: 'The Elder Scrolls V: Skyrim — is a multi-platform open world' +
            ' RPG developed by Bethesda Game Studios and published by Bethesda Softworks.',
        MinecraftDescription: 'Minecraft is a game for those who like to put blocks on' +
            ' top of each other and find adventures on their own.',
        WitcherDescription: 'The Witcher 3: Wild Hunt is an action role-playing game with' +
            ' a third-person perspective. Players control Geralt of Rivia, a monster slayer' +
            ' known as a Witcher.',
        LeftDeadDescription: 'Left 4 Dead 2 - the game focuses on four new Survivors,' +
            ' fighting against hordes of zombies known as the Infected, who develop ' +
            'severe psychosis and act extremely aggressive.',
        MetroDescription: 'Metro 2033 is a first-person shooter video game. It is predominantly' +
            ' set within the tunnels of the Moscow Metro, though some sections take place on' +
            ' the surface, in the ruins of Moscow.',
        EverlastingSummerDescription: 'Everlasting Summer is a visual novel that tells' +
            ' the story of a man living in modern Russia who finds himself mysteriously' +
            ' transported to a summer camp somewhere in the Soviet Union.',
        GTADescription: 'Grand Theft Auto IV follows the story of Niko Bellic;' +
            ' Before the events of the game, he fought in the Bosnian War as a' +
            ' teenager, was betrayed by one of the members (which got most of the squad killed)' +
            ' and is now obsessed with getting revenge.',
        HearthstoneDescription: 'Hearthstone - the game is a turn-based card game between' +
            ' two opponents, using constructed decks of 30 cards along with a selected hero' +
            ' with a unique power.',
        IsaacDescription: 'The Binding of Isaac is a top-down dungeon crawler game, presented' +
            ' using two-dimensional sprites, in which the player controls Isaac or other unlockable' +
            ' characters as they explore the dungeons located in Isaac\'s basement.',
        StarRailDescription: 'Honkai Star Rail is a free-to-play turn-based RPG' +
            ' that uses original characters and familiar units from HoYoverse\'s other beloved ' +
            'title – Honkai Impact. However, unlike Genshin Impact and Honkai Impact, Star Rail' +
            ' purely focuses on turn-based action.',
        FalloutDescription: 'Fallout 4 is set in and around the Boston area in 2287,' +
            ' 10 years after Fallout 3. Along the way, the Sole Survivor discovers a' +
            ' world in fear of a mysterious organization known as the Institute, consumed' +
            ' by paranoia of a race of robotic yet also biological human-like beings known as synths.',
        ListenDescription: 'Listen audio!!!',

        Beginner: 'Beginner',
        Easy: 'Easy',
        Medium: 'Medium',
        Hard: 'Hard',
        Adept: 'Adept',
        Legend: 'Legend',
        Great: 'Great',
        Cool: 'Cool',
        Titan: 'Titan',
        God: 'God',
    },
    ru: {
        home: 'Главная',
        game: 'Игра',
        gallery: 'Галерея',
        language: 'Ru',
        title: 'Викторина игровых звуков',
        start: 'CТАРТ',
        scoreText: 'Счёт',
        scoreTextIn: 'из',
        next: 'Далее',
        Congratulations: 'Поздравляю вы прошли игру',
        NewGame: 'Новая игра',

        GenshinTitle: 'Геншин Импакт',
        TesTitle: 'Древние свитки 5: Скайрим',
        MinecraftTitle: 'Шахтерское ремесло',
        WitcherTitle: 'Ведьмак 3: Дикая Охота',
        LeftDeadTitle: 'Левый 4 Мертвый 2',
        MetroTitle: 'Метро 2033',
        EverlastingSummerTitle: 'Бесконечное Лето',
        GTATitle: 'Угонщик автомобилей 4',
        HearthstoneTitle: 'Сердце камня',
        IsaacTitle: 'Связывание Иссака',
        StarRailTitle: 'Звездный экспресс',
        FalloutTitle: 'Осадки 4',
        AtomicTitle: 'Атомное сердце',
        PaydayTitle: 'День платежа',
        MarioTitle: 'Марио',

        GenshinDescription: 'Геншин Импакт - это ролевая игра с открытым миром, вдохновленная' +
            ' серией Легенда об Зелди. Игроков ждет фэнтезийный мир Тейват, который полон руин' +
            ' древних городов, крепостей, волшебных лесов и тому подобного.',
        TesDescription: 'Древние свитки 5: Скайрим - это ролевая игра в жанре фэнтези, в которую можно' +
            ' играть как от первого, так и от третьего лица. Игрок может свободно перемещаться по земле' +
            ' Скайрима, среде открытого мира, состоящей из диких просторов, подземелий, пещер, городов,' +
            ' поселков, крепостей и деревень.',
        MinecraftDescription: 'Шахтерское ремесло - игра для тех, кто любит ставить блоки друг' +
            ' на друга и находить приключения самостоятельно.',
        WitcherDescription: 'Ведьмак 3: Дикая Охота это ролевая игра с видом от третьего лица.' +
            ' Игроки управляют Геральтом из Ривии, убийцей монстров, известным как Ведьмак.',
        LeftDeadDescription: 'Левый 4 Мертвый 2 - игра фокусируется на четырех новых Выживших, сражающихся ' +
            'с полчищами зомби, известных как Зараженные, у которых развивается тяжелый психоз и которые' +
            ' ведут себя крайне агрессивно.',
        MetroDescription: 'Метро 2033 - компьютерная игра в жанре шутер от первого лица. Действия' +
            ' игры происходит в тоннелях Московского метрополитена, хотя некоторые участки проходят' +
            ' на поверхности, в руинах Москвы.',
        EverlastingSummerDescription: 'Бесконечное Лето - это визуальная новелла, рассказывающая историю ' +
            'человека, живущего в современном мире, который таинственным образом оказывается в летнем лагере' +
            ' где-то в Советском Союзе.',
        GTADescription: 'Угонщик автомобилей 4 рассказывает историю Нико Беллика; До событий игры он участвовал' +
            ' в боснийской войне подростком, был предан одним из членов (в результате чего погибла большая часть' +
            ' отряда) и теперь одержим желанием отомстить.',
        HearthstoneDescription: 'Сердце камня — игра представляет собой пошаговую карточную игру между двумя' +
            ' противниками с использованием сконструированных колод из 30 карт вместе с выбранным героем,' +
            ' обладающим уникальной силой.',
        IsaacDescription: 'Жертвоприношение Иссака - это игра-сканер по подземельям с видом сверху,' +
            ' представленная с использованием двухмерных спрайтов, в которой игрок управляет Исааком ' +
            'или другими разблокируемыми персонажами, исследуя подземелья, расположенные в подвале Исаака.',
        StarRailDescription: 'Звездный экспресс — бесплатная пошаговая ролевая игра, в которой' +
            ' используются оригинальные персонажи и знакомые юниты из другой любимой игры Геншин импакт',
        FalloutDescription: 'Действие Осадков 4 происходит в районе Бостона в 2287 году, через 10 лет после' +
            ' Осадков 3. По пути Единственный выживший обнаруживает мир, напуганный таинственной организацией,' +
            ' известной как Институт, охваченный паранойей расы роботов, но также биологических человекоподобные' +
            ' существа, известные как синты.',
        ListenDescription: 'Послушайте аудио!!!',

        Beginner: 'Начало',
        Easy: 'Изи',
        Medium: 'Средний',
        Hard: 'Тяжко',
        Adept: 'Адепт',
        Legend: 'Легенда',
        Great: 'Идеально',
        Cool: 'Круто',
        Titan: 'Титан',
        God: 'Бог',
    },
};

export default translations;
