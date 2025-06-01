import { newProducts } from './newProducts';
import { gaming } from './gaming';
import { smartphones } from './smartphones';

const addProductDetails = (productsArray, defaultDescription, defaultSpecs) => {
  return productsArray.map(product => {
    let description = defaultDescription;
    let specs = [...defaultSpecs];

    if (product.id === 101 && product.name.includes('Pralka LG')) {
      description = 'Pralka LG F2W8S506J Vivace Steam AI DD 8kg 1200rpm to zaawansowane urządzenie, które dzięki technologii AI DD zapewnia optymalną pielęgnację tkanin, automatycznie dobierając idealne ruchy bębna. Funkcja Steam eliminuje alergeny i zmiękcza ubrania, a pojemność 8 kg sprawdzi się w większych rodzinach. Energooszczędna i cicha praca to dodatkowe atuty.';
      specs = [
        { name: 'Pojemność', value: '8 kg' },
        { name: 'Maksymalna prędkość wirowania', value: '1200 obr/min' },
        { name: 'Klasa energetyczna', value: 'A+++' },
        { name: 'Technologie', value: 'AI DD, Steam, ThinQ (Wi-Fi)' },
        { name: 'Wymiary (WxSxG)', value: '85 x 60 x 56 cm' },
        { name: 'Kolor', value: 'Czarny' },
      ];
    } else if (product.id === 102 && product.name.includes('Kuchenka mikrofalowa HISENSE')) {
      description = 'Kuchenka mikrofalowa HISENSE H23MOBSD1HG to stylowe i funkcjonalne urządzenie o mocy 800W, idealne do szybkiego podgrzewania i rozmrażania potraw. Wyposażona w technologię Pulse Technology, która zapewnia równomierne rozprowadzanie ciepła. Intuicyjny panel sterowania i elegancki czarny design sprawiają, że idealnie wpasuje się w każdą nowoczesną kuchnię.';
      specs = [
        { name: 'Moc mikrofal', value: '800 W' },
        { name: 'Pojemność', value: '23 litry' },
        { name: 'Sterowanie', value: 'Elektroniczne' },
        { name: 'Funkcje', value: 'Rozmrażanie, podgrzewanie, Pulse Technology' },
        { name: 'Kolor', value: 'Czarny' },
      ];
    } else if (product.id === 103 && product.name.includes('Aparat bezlusterkowy SONY Alpha')) {
      description = 'Aparat bezlusterkowy SONY Alpha ILCE6400LB to doskonały wybór dla entuzjastów fotografii i twórców wideo. Wyposażony w szybki autofokus (0.02s), zaawansowany system śledzenia oka w czasie rzeczywistym oraz możliwość nagrywania w 4K. Kompaktowy rozmiar i lekka konstrukcja czynią go idealnym towarzyszem podróży.';
      specs = [
        { name: 'Matryca', value: 'APS-C CMOS, 24.2 MP' },
        { name: 'Wideo', value: '4K (30p), Full HD (120p)' },
        { name: 'Autofokus', value: '425 punktów detekcji fazy' },
        { name: 'Wizjer', value: 'Elektroniczny OLED' },
        { name: 'Ekran', value: 'Odchylany dotykowy LCD' },
        { name: 'Łączność', value: 'Wi-Fi, Bluetooth' },
      ];
    } else if (product.id === 104 && product.name.includes('Hulajnoga elektryczna R.EVOLUTION')) {
      description = 'Hulajnoga elektryczna R.EVOLUTION R-EV42112 to idealny środek transportu po mieście. Zasięg do 20 km i silnik 350W pozwalają na sprawne poruszanie się. Składana konstrukcja ułatwia przechowywanie i transport. Wytrzymałe opony i solidna rama zapewniają bezpieczeństwo i komfort jazdy. Kolor czarny.';
      specs = [
        { name: 'Moc silnika', value: '350 W' },
        { name: 'Maksymalny zasięg', value: '20 km' },
        { name: 'Maksymalna prędkość', value: '25 km/h' },
        { name: 'Hamulce', value: 'Tarczowe' },
        { name: 'Rozmiar kół', value: '8.5 cala' },
        { name: 'Waga', value: '12 kg' },
      ];
    } else if (product.id === 105 && product.name.includes('Rower górski MTB INDIANA')) {
      description = 'Rower górski MTB INDIANA X-Pulser 2.7 M17 to solidna konstrukcja przeznaczona do jazdy w trudnym terenie. Aluminiowa rama, amortyzowany widelec i 21-biegowy napęd Shimano zapewniają komfort i precyzję. Idealny do rekreacyjnej jazdy po górskich szlakach i leśnych ścieżkach. Stylowy czarno-żółty design.';
      specs = [
        { name: 'Rama', value: 'Aluminiowa' },
        { name: 'Rozmiar ramy', value: '17 cali' },
        { name: 'Rozmiar kół', value: '27.5 cala' },
        { name: 'Liczba biegów', value: '21 (Shimano)' },
        { name: 'Amortyzacja', value: 'Przód' },
        { name: 'Kolor', value: 'Czarno-żółty' },
      ];
    } else if (product.id === 106 && product.name.includes('Ekspres SIEMENS EQ700')) {
      description = 'Ekspres automatyczny SIEMENS EQ700 TP713R19 to urządzenie klasy premium, które przygotuje Twoją ulubioną kawę za dotknięciem jednego przycisku. Intuicyjny wyświetlacz, system iAroma dla idealnego smaku i szeroki wybór napojów kawowych sprawią, że każda chwila będzie niezapomniana. Łatwe czyszczenie i elegancki czarny design.';
      specs = [
        { name: 'Rodzaj ekspresu', value: 'Automatyczny ciśnieniowy' },
        { name: 'Pojemność zbiornika na wodę', value: '2.4 litra' },
        { name: 'Pojemność pojemnika na kawę', value: '350 g' },
        { name: 'Ciśnienie', value: '19 bar' },
        { name: 'System mleczny', value: 'Automatyczny' },
        { name: 'Kolor', value: 'Czarny' },
      ];
    } else if (product.id === 107 && product.name.includes('Zegarek sportowy GARMIN')) {
      description = 'Zegarek sportowy GARMIN Vivoactive 6 to idealny kompan dla aktywnych. Oferuje zaawansowane monitorowanie zdrowia (tętno, pulsoksymetr, sen), GPS do śledzenia aktywności sportowych i powiadomienia ze smartfona. Długa żywotność baterii i wytrzymała konstrukcja sprawiają, że sprosta każdemu wyzwaniu. Zielony kolor dodaje stylu.';
      specs = [
        { name: 'Wyświetlacz', value: 'AMOLED' },
        { name: 'Łączność', value: 'GPS, Bluetooth, ANT+' },
        { name: 'Funkcje', value: 'Monitorowanie tętna, SpO2, snu, stresu, ponad 20 trybów sportowych' },
        { name: 'Wodoodporność', value: '5 ATM' },
        { name: 'Bateria', value: 'Do 11 dni (tryb smartwatcha)' },
        { name: 'Kolor', value: 'Zielony' },
      ];
    } else if (product.id === 108 && product.name.includes('Konsola NINTENDO Switch 2')) {
      description = 'Konsola NINTENDO Switch 2 to rewolucja w mobilnym gamingu. Graj w domu na telewizorze lub zabierz konsolę ze sobą i graj w trybie przenośnym. Ulepszona grafika, dłuższa żywotność baterii i nowe Joy-Cony zapewnią niezapomniane wrażenia. Zestaw z grą Mario Kart World!';
      specs = [
        { name: 'Typ konsoli', value: 'Hybrydowa' },
        { name: 'Wyświetlacz', value: 'OLED, 7 cali' },
        { name: 'Pamięć wewnętrzna', value: '64 GB' },
        { name: 'Bateria', value: 'Do 9 godzin' },
        { name: 'W zestawie', value: 'Gra Mario Kart World' },
        { name: 'Kolor', value: 'Czarny' },
      ];
    }

    if (product.id === 301 && product.name.includes('XBOX Series X')) {
      description = 'Konsola MICROSOFT XBOX Series X bez napędu to najszybsza i najpotężniejsza konsola w historii Xbox. Ciesz się rozgrywką w 4K z 120 FPS, Ray Tracingiem i ultraszybkimi czasami ładowania dzięki dyskowi SSD. Wersja bez napędu to futurystyczny design i cyfrowe gry.';
      specs = [
        { name: 'Pamięć wewnętrzna', value: '1 TB NVMe SSD' },
        { name: 'Procesor', value: '8-rdzeniowy AMD Zen 2' },
        { name: 'Układ graficzny', value: 'AMD RDNA 2' },
        { name: 'Rozdzielczość', value: 'Do 8K, 4K/120FPS' },
        { name: 'Kolor', value: 'Biały' },
      ];
    } else if (product.id === 302 && product.name.includes('PlayStation 5 Digital Slim')) {
      description = 'Konsola SONY PlayStation 5 Digital Slim to odchudzona wersja PS5, oferująca te same rewolucyjne wrażenia z gry w bardziej kompaktowej obudowie. Ultraszybki dysk SSD, technologia Tempest 3D AudioTech i kontroler DualSense z adaptacyjnymi spustami wciągną Cię w świat gier jak nigdy dotąd. Bez napędu optycznego, tylko gry cyfrowe.';
      specs = [
        { name: 'Pamięć wewnętrzna', value: '1 TB SSD' },
        { name: 'Procesor', value: '8-rdzeniowy AMD Zen 2' },
        { name: 'Układ graficzny', value: 'AMD RDNA 2' },
        { name: 'Rozdzielczość', value: 'Do 8K, 4K/120FPS' },
        { name: 'Kolor', value: 'Biało-Czarny' },
      ];
    } else if (product.id === 303 && product.name.includes('Doom: The Dark Ages')) {
      description = 'Doom: The Dark Ages to długo oczekiwana kontynuacja legendarnej serii FPS. Wciel się w Slayer-a i staw czoła hordom demonów w mrocznej, średniowiecznej scenerii. Dynamiczna walka, nowe bronie i zapierająca dech w piersiach grafika gwarantują niezapomniane wrażenia. Dostępna na Xbox Series X.';
      specs = [
        { name: 'Platforma', value: 'Xbox Series X' },
        { name: 'Gatunek', value: 'FPS' },
        { name: 'Wydawca', value: 'Bethesda Softworks' },
        { name: 'Tryb gry', value: 'Singleplayer' },
        { name: 'Wersja językowa', value: 'Polska (napisy)' },
      ];
    } else if (product.id === 304 && product.name.includes('Assassin\'s Creed Shadows')) {
      description = 'Assassin\'s Creed Shadows to najnowsza odsłona kultowej serii, przenosząca graczy do feudalnej Japonii. Wciel się w dwie postacie – samuraja i ninja – i odkryj mroczne sekrety kraju Kwitnącej Wiśni. Niesamowita grafika, wciągająca fabuła i swoboda działania w otwartym świecie. Gra PS5.';
      specs = [
        { name: 'Platforma', value: 'PS5' },
        { name: 'Gatunek', value: 'Akcji, RPG' },
        { name: 'Wydawca', value: 'Ubisoft' },
        { name: 'Tryb gry', value: 'Singleplayer' },
        { name: 'Wersja językowa', value: 'Polska (dubbing)' },
      ];
    } else if (product.id === 305 && product.name.includes('Słuchawki STEELSERIES Arctis Nova 7')) {
      description = 'Słuchawki STEELSERIES Arctis Nova 7 Dragon Edition to bezprzewodowe słuchawki gamingowe nowej generacji. Zapewniają niezrównaną jakość dźwięku dzięki systemowi Nova Acoustic System, komfort noszenia przez wiele godzin oraz krystalicznie czysty mikrofon z redukcją szumów AI. Połącz się bezprzewodowo z wieloma urządzeniami jednocześnie.';
      specs = [
        { name: 'Łączność', value: 'Bezprzewodowa (2.4 GHz, Bluetooth)' },
        { name: 'Pasmo przenoszenia', value: '20-22000 Hz' },
        { name: 'Mikrofon', value: 'ClearCast Gen 2 (chowany)' },
        { name: 'Bateria', value: 'Do 38 godzin' },
        { name: 'Kompatybilność', value: 'PC, PS5, PS4, Switch, Mobile' },
      ];
    } else if (product.id === 306 && product.name.includes('Słuchawki REDRAGON Zeus Lite H510-LT')) {
      description = 'Słuchawki REDRAGON Zeus Lite H510-LT to nauszne słuchawki gamingowe oferujące dźwięk przestrzenny 7.1 w przystępnej cenie. Wyposażone w duże, 53 mm przetworniki, zapewniające mocne basy i czyste wysokie tony. Komfortowe nauszniki i odpinany mikrofon sprawiają, że są idealne do długich sesji gamingowych i komunikacji zespołowej.';
      specs = [
        { name: 'Łączność', value: 'Przewodowa (USB)' },
        { name: 'Dźwięk', value: 'Wirtualny 7.1 surround' },
        { name: 'Przetworniki', value: '53 mm' },
        { name: 'Mikrofon', value: 'Odpinany, z redukcją szumów' },
        { name: 'Kompatybilność', value: 'PC, PS4, Xbox One, Switch' },
      ];
    } else if (product.id === 307 && product.name.includes('Kontroler MICROSOFT bezprzewodowy Xbox Carbon Black')) {
      description = 'Kontroler MICROSOFT bezprzewodowy Xbox w kolorze Carbon Black to klasyka gamingu. Precyzyjne drążki, responsywne przyciski i teksturowane uchwyty zapewniają komfort i kontrolę. Wbudowane gniazdo jack 3.5 mm pozwala podłączyć ulubiony zestaw słuchawkowy. Kompatybilny z konsolami Xbox Series X|S, Xbox One oraz PC.';
      specs = [
        { name: 'Łączność', value: 'Bezprzewodowa (Xbox Wireless, Bluetooth)' },
        { name: 'Gniazda', value: '3.5 mm jack' },
        { name: 'Zasilanie', value: 'Baterie AA' },
        { name: 'Kompatybilność', value: 'Xbox Series X|S, Xbox One, PC' },
        { name: 'Kolor', value: 'Carbon Black' },
      ];
    } else if (product.id === 308 && product.name.includes('Kontroler SONY DualSense Edge')) {
      description = 'Kontroler SONY DualSense Edge to profesjonalny kontroler dla graczy, oferujący personalizację i zaawansowane funkcje. Wymienne moduły drążków, regulowane przyciski i spusty, a także programowalne tylne przyciski pozwalają dopasować go do każdego stylu gry. Wytrzymała bateria i etui w zestawie. Kolor biało-czarny.';
      specs = [
        { name: 'Łączność', value: 'Bezprzewodowa (Bluetooth)' },
        { name: 'Funkcje', value: 'Adaptacyjne spusty, efekty dotykowe, wbudowany mikrofon, gniazdo jack 3.5 mm' },
        { name: 'Personalizacja', value: 'Wymienne nakładki drążków, konfigurowalne przyciski' },
        { name: 'Kompatybilność', value: 'PS5, PC' },
        { name: 'Kolor', value: 'Biało-Czarny' },
      ];
    }

    if (product.id === 201 && product.name.includes('SAMSUNG Galaxy A26')) {
      description = 'Smartfon SAMSUNG Galaxy A26 to solidne urządzenie ze średniej półki, oferujące duży wyświetlacz 6.7" i pojemną baterię. Idealny do codziennego użytkowania, przeglądania mediów społecznościowych i lekkich gier. 6GB RAM i 128GB pamięci wewnętrznej zapewniają płynną pracę. Klasyczny czarny kolor.';
      specs = [
        { name: 'Wyświetlacz', value: '6.7 cala Super AMOLED' },
        { name: 'Pamięć RAM', value: '6 GB' },
        { name: 'Pamięć wbudowana', value: '128 GB' },
        { name: 'Procesor', value: 'Octa-core' },
        { name: 'Aparat (tył)', value: 'Potrójny (48 MP + 8 MP + 5 MP)' },
        { name: 'Bateria', value: '5000 mAh' },
        { name: 'Kolor', value: 'Czarny' },
      ];
    } else if (product.id === 202 && product.name.includes('SAMSUNG Galaxy S25 Edge')) {
      description = 'Smartfon SAMSUNG Galaxy S25 Edge to flagowiec z najnowocześniejszymi technologiami. Wyposażony w niesamowity wyświetlacz Dynamic AMOLED 2X, potężny procesor Exynos 2500, zaawansowany system aparatów 108 MP i pojemną baterię z szybkim ładowaniem. Idealny dla najbardziej wymagających użytkowników.';
      specs = [
        { name: 'Wyświetlacz', value: '6.7 cala Dynamic AMOLED 2X, 120 Hz' },
        { name: 'Pamięć RAM', value: '12 GB' },
        { name: 'Pamięć wbudowana', value: '512 GB' },
        { name: 'Procesor', value: 'Exynos 2500' },
        { name: 'Aparat (tył)', value: 'Czteroobiektywowy (108 MP + 12 MP + 10 MP + 10 MP)' },
        { name: 'Bateria', value: '5000 mAh, szybkie ładowanie 45W' },
        { name: 'Kolor', value: 'Czarny' },
      ];
    } else if (product.id === 203 && product.name.includes('MOTOROLA Edge 60')) {
      description = 'Smartfon MOTOROLA Edge 60 to połączenie eleganckiego designu i wysokiej wydajności. Zakrzywiony wyświetlacz OLED 6.67" z wysoką częstotliwością odświeżania, potężny procesor i aparat 64 MP zapewniają płynne działanie i doskonałe zdjęcia. Kolor niebieski.';
      specs = [
        { name: 'Wyświetlacz', value: '6.67 cala OLED, 144 Hz' },
        { name: 'Pamięć RAM', value: '12 GB' },
        { name: 'Pamięć wbudowana', value: '512 GB' },
        { name: 'Procesor', value: 'Qualcomm Snapdragon 7 Gen 3' },
        { name: 'Aparat (tył)', value: 'Podwójny (64 MP + 13 MP)' },
        { name: 'Bateria', value: '4500 mAh, szybkie ładowanie 68W' },
        { name: 'Kolor', value: 'Niebieski' },
      ];
    } else if (product.id === 204 && product.name.includes('GOOGLE Pixel 9 Pro XL')) {
      description = 'Smartfon GOOGLE Pixel 9 Pro XL to potężne urządzenie z najnowszym chipem Google Tensor G5, gwarantującym niesamowitą wydajność i zaawansowane funkcje AI. Duży wyświetlacz 6.8", profesjonalne aparaty i czyste doświadczenie Androida to tylko niektóre z jego zalet. Kolor zielonoszary.';
      specs = [
        { name: 'Wyświetlacz', value: '6.8 cala OLED, 120 Hz' },
        { name: 'Pamięć RAM', value: '16 GB' },
        { name: 'Pamięć wbudowana', value: '128 GB' },
        { name: 'Procesor', value: 'Google Tensor G5' },
        { name: 'Aparat (tył)', value: 'Potrójny (50 MP + 48 MP + 48 MP)' },
        { name: 'Bateria', value: '5500 mAh' },
        { name: 'Kolor', value: 'Zielonoszary' },
      ];
    } else if (product.id === 205 && product.name.includes('MOTOROLA Razr 60 Ultra')) {
      description = 'Smartfon MOTOROLA Razr 60 Ultra to ikoniczny składany smartfon z odświeżonym designem i potężnymi możliwościami. Duży, elastyczny wyświetlacz 7.0" wewnątrz i funkcjonalny ekran zewnętrzny. Idealny dla tych, którzy cenią styl i innowacje. 16GB RAM i 512GB pamięci zapewnią płynną pracę. Kolor brązowy.';
      specs = [
        { name: 'Wyświetlacz główny', value: '7.0 cala pOLED, 165 Hz' },
        { name: 'Wyświetlacz zewnętrzny', value: '3.6 cala pOLED' },
        { name: 'Pamięć RAM', value: '16 GB' },
        { name: 'Pamięć wbudowana', value: '512 GB' },
        { name: 'Procesor', value: 'Qualcomm Snapdragon 8+ Gen 2' },
        { name: 'Aparat (tył)', value: 'Podwójny (50 MP + 13 MP)' },
        { name: 'Bateria', value: '3800 mAh' },
        { name: 'Kolor', value: 'Brązowy' },
      ];
    } else if (product.id === 206 && product.name.includes('REALME 14 Pro+')) {
      description = 'Smartfon REALME 14 Pro+ to urządzenie o imponujących możliwościach fotograficznych i wydajności. Główne cechy to duży ekran 6.83", 512GB pamięci wewnętrznej i zaawansowany aparat. Idealny do zdjęć i multitaskingu. Perłowy kolor dodaje elegancji.';
      specs = [
        { name: 'Wyświetlacz', value: '6.83 cala AMOLED, 120 Hz' },
        { name: 'Pamięć RAM', value: '12 GB' },
        { name: 'Pamięć wbudowana', value: '512 GB' },
        { name: 'Procesor', value: 'MediaTek Dimensity 9200+' },
        { name: 'Aparat (tył)', value: 'Potrójny (200 MP + 8 MP + 2 MP)' },
        { name: 'Bateria', value: '5000 mAh, szybkie ładowanie 100W' },
        { name: 'Kolor', value: 'Perłowy' },
      ];
    } else if (product.id === 207 && product.name.includes('XIAOMI Poco X7 Pro')) {
      description = 'Smartfon XIAOMI Poco X7 Pro to idealny wybór dla graczy i entuzjastów mobilnych technologii. Potężny procesor, szybkie ładowanie i wyświetlacz o wysokiej częstotliwości odświeżania zapewniają płynną i komfortową rozgrywkę. Aparat 64 MP pozwoli uchwycić ważne momenty. Klasyczny czarny kolor.';
      specs = [
        { name: 'Wyświetlacz', value: '6.67 cala AMOLED, 120 Hz' },
        { name: 'Pamięć RAM', value: '12 GB' },
        { name: 'Pamięć wbudowana', value: '512 GB' },
        { name: 'Procesor', value: 'Qualcomm Snapdragon 8 Gen 2' },
        { name: 'Aparat (tył)', value: 'Potrójny (64 MP + 8 MP + 2 MP)' },
        { name: 'Bateria', value: '5000 mAh, szybkie ładowanie 120W' },
        { name: 'Kolor', value: 'Czarny' },
      ];
    } else if (product.id === 208 && product.name.includes('NUBIA Focus Pro')) {
      description = 'Smartfon NUBIA Focus Pro to przystępny cenowo smartfon z solidnymi parametrami. Duży wyświetlacz 6.72" i aparat 108 MP z technologią AI to jego główne atuty. Idealny do codziennego użytkowania i robienia dobrych zdjęć. 8GB RAM i 256GB pamięci zapewniają płynną pracę. Elegancki czarny design.';
      specs = [
        { name: 'Wyświetlacz', value: '6.72 cala IPS LCD, 120 Hz' },
        { name: 'Pamięć RAM', value: '8 GB' },
        { name: 'Pamięć wbudowana', value: '256 GB' },
        { name: 'Procesor', value: 'Unisoc T760' },
        { name: 'Aparat (tył)', value: 'Podwójny (108 MP + 2 MP)' },
        { name: 'Bateria', value: '5000 mAh, szybkie ładowanie 33W' },
        { name: 'Kolor', value: 'Czarny' },
      ];
    }

    return { ...product, description, specs };
  });
};

const defaultProductDescription = 'Długi i szczegółowy opis produktu. Zawiera informacje o jego najważniejszych cechach, zastosowaniach i zaletach. Tutaj możesz opisać, dlaczego ten produkt jest idealnym wyborem dla klienta. Pamiętaj, aby tekst był angażujący i dostarczał wszystkich niezbędnych informacji.';
const defaultProductSpecs = [
  { name: 'Kategoria', value: 'Elektronika' },
  { name: 'Stan', value: 'Nowy' },
  { name: 'Gwarancja', value: '24 miesiące' },
  { name: 'Dostępność', value: 'Wysyłka w 24h' },
];

export const allProducts = [
  ...addProductDetails(newProducts, defaultProductDescription, defaultProductSpecs),
  ...addProductDetails(gaming, defaultProductDescription, defaultProductSpecs),
  ...addProductDetails(smartphones, defaultProductDescription, defaultProductSpecs),
];