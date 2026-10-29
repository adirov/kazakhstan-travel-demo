(function () {
  "use strict";
  var D = window.KT_DATA;
  var PHONE = "+7 777 525 98 85";
  var WA = "https://wa.me/77775259885";
  var EMAIL = "kztravel@mail.ru";
  var IG = "https://www.instagram.com/kazakhstan_travel/";

  /* ---------- texts ---------- */
  var T = {
    ru: {
      tagline: "Туры из Алматы",
      nav: { tours: "Туры", services: "Услуги", winter: "Зима", contacts: "Контакты" },
      summer: "Лето", winterS: "Зима",
      infobar: "Цены на сайте не публикуются: стоимость рассчитает менеджер под ваши даты",
      demo: "Демо-макет",
      waShort: "WhatsApp",
      waFloat: "Написать в WhatsApp",
      askPrice: "Узнать стоимость в WhatsApp",
      discuss: "Обсудить поездку",
      pick: "Подобрать тур",
      program: "Программа",
      allRoutes: "Все маршруты",
      seeRoutes: "Смотреть маршруты",
      more: "Подробнее",
      photos: "фото",
      heroS: { eyebrow: "Частные туры из Алматы", h1: "Каньоны, горные озёра и степь <em>Казахстана</em>", sub: "Однодневные поездки и многодневные маршруты по Алматинской области. Напишите менеджеру в WhatsApp, и мы подберём программу под ваши даты." },
      heroW: { eyebrow: "Зимний сезон в Алматы", h1: "Зима в горах <em>Алматы</em>", sub: "Зимние туры, уроки катания, хели-ски и фрирайд. Направления и детали подбираем вместе с менеджером под ваши даты и уровень." },
      dirs: { charyn: "Чарын", lakes: "Кольсай и Каинды", bao: "Большое Алматинское озеро", turgen: "Тургень и Иссык", altyn: "Алтын-Эмель", ring: "Многодневные круговые" },
      popular: "Популярные маршруты",
      popularSub: "Направления, с которых обычно начинают знакомство с природой Алматинской области. Каждую программу можно изменить под ваши даты.",
      chooseH: "Один день или несколько?",
      oneDay: "Однодневные поездки", oneDaySub: "Выезд утром из Алматы и возвращение вечером.",
      multi: "Многодневные туры", multiSub: "Ночёвки в сёлах, юртах и гостиницах по маршруту.",
      routesN: function (n) { return n + " " + plural(n, "маршрут", "маршрута", "маршрутов"); },
      promoTag: "Новое", airplaneH: "Полёт на самолёте", airplaneSub: "Обзорные маршруты с аэродрома Шалкар над городом, озёрами и каньонами.",
      heliTag: "Аэроэкскурсии", heliH: "Вертолётные экскурсии", heliSub: "Частные экскурсии из Боралдая к озёрам и каньонам с остановками на маршруте.",
      airRoutes: [["Алматы", "≈ 45 мин"], ["«8 озёр»", "≈ 55 мин"], ["Тургень", "≈ 90 мин"], ["Чарын и Поющий бархан", "≈ 120 мин"]],
      heliRoutes: [["Большое Алматинское озеро", "≈ 3 ч"], ["Чарын", "≈ 5 ч"], ["Кольсай и Чарын", "≈ 7 ч"]],
      heliNote: "Указана общая продолжительность экскурсии с остановками. Борт и маршрут подбираются для вашей группы.",
      airNote: "Маршрут и вылет зависят от погоды.",
      photoOwner: "Фото предоставлено компанией",
      activeH: "Активный отдых", activeSub: "Короткие приключения рядом с Алматы: можно добавить к экскурсионной программе.",
      buggyH: "Квадроциклы и багги", buggySub: "Четыре маршрута: от лёгкого по асфальту до бездорожья и выезда к Большому Алматинскому озеру.",
      horsesH: "Конные прогулки", horsesSub: "Маршруты в районе Медеу на 2, 3, 4 часа или на целый день, в сопровождении гида-инструктора.",
      yurtsEyebrow: "Проживание", yurtsH: "Юрты на Кольсае", yurtsSub: "Проживание в юртах в направлении озера Кольсай. Посмотрите фото снаружи и внутри, затем напишите нам даты поездки и количество гостей.",
      yurtsBul: ["Направление: озеро Кольсай", "Даты и размещение согласуются с менеджером", "Можно совместить с турами на Кольсай и Каинды"],
      bookYurt: "Узнать о проживании",
      transportEyebrow: "Транспорт", transportH: "Транспорт для поездок", transportSub: "Автомобили для туров и трансферов по Алматы и области. Подходящий автомобиль под маршрут и состав группы подберёт менеджер.",
      winterEyebrow: "Зимний сезон", winterH: "Зимние направления", winterSub: "Подробные зимние программы готовятся. Расскажите о датах и опыте катания — менеджер предложит подходящий вариант.",
      winterPending: "Подробные программы, состав и условия зимних услуг уточняются у менеджера.",
      w: { snowschool: ["Almaty Snow School", "Школа катания"], wintertours: ["Зимние туры", "Поездки из Алматы"], skilessons: ["Уроки катания на лыжах", "Для новичков и опытных"], heliski: ["Хели-ски", "Спуски с вертолётной заброской"], freeride: ["Фрирайд", "Внетрассовое катание"] },
      contactH: "Напишите менеджеру", contactSub: "Удобнее всего в WhatsApp. Укажите даты, количество участников и маршрут, который вам интересен, — менеджер ответит и рассчитает стоимость.",
      phone: "Телефон", email: "Почта",
      catalogH: "Туры из Алматы", catalogLead: "Актуальные программы на один и несколько дней. Стоимость и детали согласуются с менеджером.",
      f: { all: "Все", one: "1 день", multi: "Многодневные", winter: "Зимой" },
      winterCatalogNote: "Возможность других поездок зимой уточняйте у менеджера.",
      home: "Главная",
      facts: { dur: "Длительность", fmt: "Формат", start: "Старт", price: "Стоимость" },
      fmtVal: "Частный тур", startVal: "Алматы", startKegen: "Пункт Кеген", priceVal: "По запросу",
      programH: "Программа по дням", dayProgram: "Программа дня",
      termsH: "Условия поездки",
      terms: ["Частная поездка с гидом-водителем.", "Время и порядок остановок можно изменить под ваши даты — по согласованию с менеджером.", "Пункты с пометкой «по желанию» или «дополнительно» согласуются отдельно.", "Стоимость рассчитывается индивидуально под даты и количество участников."],
      asideH: "Хотите поехать?", asideP: "Напишите даты и количество участников — менеджер подтвердит программу и рассчитает стоимость.",
      asideList: ["Ответ менеджера в WhatsApp", "Программу можно изменить", "Даты и детали согласуем вместе"],
      related: "Другие маршруты",
      noPhoto: "Фото маршрута будет добавлено",
      servicesH: "Дополнительные услуги", servicesLead: "Полёты, проживание в юртах, транспорт и активный отдых. Каждую услугу можно заказать отдельно или добавить к туру.",
      winterPageH: "Зима в Алматы", winterPageLead: "Пять зимних направлений. Подробные программы пока готовятся, поэтому детали, даты и стоимость обсуждаются с менеджером.",
      relatedTour: "Зимний тур на Кольсай и в Чарын",
      contactsPageH: "Контакты", contactsLead: "Главный способ связи — сообщение в WhatsApp.",
      footerAbout: "Частные туры и экскурсии из Алматы: каньоны, горные озёра, степь, полёты и зимние направления.",
      footerDemo: "Демонстрационный макет. Заявки не отправляются.",
      footerPhotos: "Фото: материалы компании",
      modalH: "Сообщение в WhatsApp",
      modalHint: "Демо: сообщение не отправляется автоматически. Кнопка откроет WhatsApp с этим текстом, отправить его можно только вручную.",
      openWa: "Открыть WhatsApp", copy: "Скопировать", copied: "Скопировано", close: "Закрыть",
      msg: {
        general: "Здравствуйте! Хочу подобрать тур из Алматы.",
        tour: function (t) { return "Здравствуйте! Интересует тур «" + t + "». Подскажите стоимость и свободные даты."; },
        service: function (t) { return "Здравствуйте! Интересует услуга «" + t + "». Подскажите детали и стоимость."; }
      },
      days: function (n) { return n + " " + plural(n, "день", "дня", "дней"); },
      buggyRoutes: [["Маршрут 1 — лёгкий: Алма-Арасан, Аюсай, асфальт", "1 ч · 13 км"], ["Маршрут 2 — живописный: источники, плотина, водопад", "2 ч · 22–25 км"], ["Маршрут 3 — бездорожье: ущелье реки Казачка", "1,5 ч · 15–20 км"], ["Большое Алматинское озеро, бездорожье", "3 ч"]],
      buggyNote: "На маршрутах 1–3 управление только с 18 лет. Для поездки к БАО нужен оригинал паспорта или удостоверения. Инструктаж, сопровождение и базовая экипировка предусмотрены.",
      horseRoutes: ["Ущелье Ким-Асар и Бутаковский водопад", "Кок-Жайляу с видом на город", "Пик Фурманова и высокогорные качели", "Озеро Маншук Маметовой", "Верхний Горельник и термальный источник", "Шымбулак", "Спокойная прогулка по сосновой и берёзовой рощам"]
    },
    en: {
      tagline: "Tours from Almaty",
      nav: { tours: "Tours", services: "Experiences", winter: "Winter", contacts: "Contact" },
      summer: "Summer", winterS: "Winter",
      infobar: "Prices are not listed online: our manager will quote for your dates",
      demo: "Design demo",
      waShort: "WhatsApp",
      waFloat: "Message on WhatsApp",
      askPrice: "Ask the price on WhatsApp",
      discuss: "Discuss your trip",
      pick: "Find a tour",
      program: "Itinerary",
      allRoutes: "All tours",
      seeRoutes: "Browse tours",
      more: "Learn more",
      photos: "photos",
      heroS: { eyebrow: "Private tours from Almaty", h1: "Canyons, mountain lakes and steppe of <em>Kazakhstan</em>", sub: "Already in Almaty? Message our local team on WhatsApp with your dates, and we will suggest a day trip or a multi-day route." },
      heroW: { eyebrow: "Winter season in Almaty", h1: "Winter in the mountains of <em>Almaty</em>", sub: "Winter tours, ski lessons, heli-skiing and freeride. We match the plan to your dates and experience together with our manager." },
      dirs: { charyn: "Charyn", lakes: "Kolsay & Kaindy", bao: "Big Almaty Lake", turgen: "Turgen & Issyk", altyn: "Altyn-Emel", ring: "Multi-day loops" },
      popular: "Popular destinations",
      popularSub: "Where most travellers start exploring the Almaty region. Every itinerary can be adjusted to your dates.",
      chooseH: "One day or several?",
      oneDay: "Day trips", oneDaySub: "Leave Almaty in the morning, back in the evening.",
      multi: "Multi-day tours", multiSub: "Nights in villages, yurts and hotels along the route.",
      routesN: function (n) { return n + " " + (n === 1 ? "tour" : "tours"); },
      promoTag: "New", airplaneH: "Scenic airplane flights", airplaneSub: "Sightseeing routes from Shalkar airfield over the city, lakes and canyons.",
      heliTag: "Aerial tours", heliH: "Helicopter excursions", heliSub: "Private excursions from Boraldai to lakes and canyons, with stops on the way.",
      airRoutes: [["Almaty", "≈ 45 min"], ["Eight Lakes", "≈ 55 min"], ["Turgen", "≈ 90 min"], ["Charyn & Singing Dune", "≈ 120 min"]],
      heliRoutes: [["Big Almaty Lake", "≈ 3 h"], ["Charyn", "≈ 5 h"], ["Kolsay & Charyn", "≈ 7 h"]],
      heliNote: "Total excursion durations including stops. The aircraft and route are selected for your group.",
      airNote: "Route and departure depend on weather.",
      photoOwner: "Photo provided by the company",
      activeH: "Outdoor activities", activeSub: "Short adventures close to Almaty that pair well with a sightseeing day.",
      buggyH: "ATVs and buggies", buggySub: "Four routes, from an easy paved ride to off-road tracks and a trip to Big Almaty Lake.",
      horsesH: "Horseback riding", horsesSub: "Routes around Medeu for 2, 3 or 4 hours or a full day, with a guide responsible for the horses and your safety.",
      yurtsEyebrow: "Stay", yurtsH: "Yurts at Kolsai", yurtsSub: "Yurt stays near Kolsai Lake. View the exterior and interior photos, then message us with your travel dates and number of guests.",
      yurtsBul: ["Location: Kolsai Lake area", "Dates and accommodation agreed with the manager", "Pairs well with Kolsay & Kaindy tours"],
      bookYurt: "Ask about the stay",
      transportEyebrow: "Transport", transportH: "Transport for your trip", transportSub: "Vehicles for tours and transfers in Almaty and the region. Our manager will match a vehicle to your route and group.",
      winterEyebrow: "Winter season", winterH: "Winter experiences", winterSub: "Detailed winter programs are being prepared. Tell us your dates and experience, and our manager will suggest an option.",
      winterPending: "Details, inclusions and conditions of winter services are confirmed by the manager.",
      w: { snowschool: ["Almaty Snow School", "Ski & snowboard school"], wintertours: ["Winter Tours", "Trips from Almaty"], skilessons: ["Ski Lessons", "Beginners and experienced"], heliski: ["Heli Ski", "Helicopter-accessed runs"], freeride: ["Free Ride", "Off-piste riding"] },
      contactH: "Message our manager", contactSub: "WhatsApp is the easiest way. Share your dates, group size and the route you like, and our manager will reply with a quote.",
      phone: "Phone", email: "Email",
      catalogH: "Tours from Almaty", catalogLead: "Current one-day and multi-day itineraries. Price and details are agreed with our manager.",
      f: { all: "All", one: "1 day", multi: "Multi-day", winter: "In winter" },
      winterCatalogNote: "Ask our manager about other trips in winter.",
      home: "Home",
      facts: { dur: "Duration", fmt: "Format", start: "Starts in", price: "Price" },
      fmtVal: "Private tour", startVal: "Almaty", startKegen: "Kegen border point", priceVal: "On request",
      programH: "Day-by-day itinerary", dayProgram: "Itinerary",
      termsH: "Trip conditions",
      terms: ["Private trip with an English-speaking driver-guide.", "Timings and stops can be adjusted to your dates in agreement with the manager.", "Items marked optional or additional are arranged separately.", "The price is calculated for your dates and group size."],
      asideH: "Want to go?", asideP: "Send your dates and group size: our manager will confirm the itinerary and quote the price.",
      asideList: ["Reply from a manager on WhatsApp", "Itinerary can be adjusted", "Dates and details agreed together"],
      related: "More tours",
      noPhoto: "Route photos coming soon",
      servicesH: "Experiences & services", servicesLead: "Flights, yurt stays, transport and outdoor activities. Book separately or add to a tour.",
      winterPageH: "Winter in Almaty", winterPageLead: "Five winter experiences. Detailed programs are being prepared, so details, dates and prices are discussed with our manager.",
      relatedTour: "Winter Kolsay and Charyn itinerary",
      contactsPageH: "Contact", contactsLead: "The main way to reach us is a WhatsApp message.",
      footerAbout: "Private tours and excursions from Almaty: canyons, mountain lakes, steppe, flights and winter experiences.",
      footerDemo: "Design demo. No requests are sent.",
      footerPhotos: "Photos: company materials",
      modalH: "WhatsApp message",
      modalHint: "Demo: nothing is sent automatically. The button opens WhatsApp with this text; you can only send it manually.",
      openWa: "Open WhatsApp", copy: "Copy", copied: "Copied", close: "Close",
      msg: {
        general: "Hello! I'm in Almaty and would like to find a tour.",
        tour: function (t) { return "Hello! I'm interested in the tour \"" + t + "\". Could you share the price and available dates?"; },
        service: function (t) { return "Hello! I'm interested in \"" + t + "\". Could you share the details and price?"; }
      },
      days: function (n) { return n + " " + (n === 1 ? "day" : "days"); },
      buggyRoutes: [["Route 1 — easy: Alma-Arasan dam, Ayusai, paved", "1 h · 13 km"], ["Route 2 — scenic: springs, dam, waterfall", "2 h · 22–25 km"], ["Route 3 — off-road: Kazachka River gorge", "1.5 h · 15–20 km"], ["Big Almaty Lake, off-road", "3 h"]],
      buggyNote: "Drivers must be 18 or older on routes 1–3. Big Almaty Lake requires an original passport or ID. Instruction, guide support and basic protective equipment are included.",
      horseRoutes: ["Kim-Asar gorge and Butakovsky waterfall", "Kok-Zhailau with city views", "Furmanov Peak and the famous swing", "Lake Manshuk Mametova", "Upper Gorelnik hot spring", "Shymbulak", "A 2-hour walk through pine and birch groves"]
    }
  };

  function plural(n, a, b, c) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return a;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return b;
    return c;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- icons ---------- */
  var I = {
    wa: '<svg class="wa-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2v20M4 6l16 12M20 6 4 18M9 3l3 3 3-3M9 21l3-3 3 3"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
    img: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 17-5-5-8 7"/></svg>',
    logo: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="27" cy="12" r="4.5"/><path d="M3 32 14 15l6 9 4-5 13 13Z" fill="currentColor" fill-opacity=".14"/><path d="m11 20 3-5 3 4.5"/></svg>'
  };

  /* ---------- state ---------- */
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var state = { lang: "ru", season: store.get("kt-season") || "summer", route: [] };
  var galleries = {};
  var galSeq = 0;

  function t() { return T[state.lang]; }
  function tour(slug) { for (var i = 0; i < D.tours.length; i++) if (D.tours[i].slug === slug) return D.tours[i]; return null; }
  function href(p) { return "#/" + state.lang + (p ? "/" + p : ""); }
  function waHref(msg) { return WA + "?text=" + encodeURIComponent(msg); }
  function waBtn(label, msg, cls) { return '<a class="btn btn-wa ' + (cls || "") + '" href="' + waHref(msg) + '" data-wa="' + esc(msg) + '">' + I.wa + esc(label) + "</a>"; }
  function img(m, alt, extra) { return '<img src="' + m.src + '" width="' + m.w + '" height="' + m.h + '" alt="' + esc(alt || "") + '" loading="lazy" decoding="async"' + (extra || "") + ">"; }
  function gal(list, alt) { var id = "g" + (++galSeq); galleries[id] = { list: list, alt: alt }; return id; }
  function durLabel(tr) { return t().days(tr.days); }
  function shortTitle(tr) { return tr[state.lang].title.replace(/\s+/g, " "); }

  var FEATURED = [["charyn", "charyn-1d"], ["lakes", "charyn-kolsay-kaindy-2d"], ["bao", "big-almaty-lake"], ["turgen", "turgen-issyk"], ["altyn", "altyn-emel-2d"], ["ring", "golden-ring-4d"]];

  /* ---------- chrome ---------- */
  function renderChrome() {
    var L = t(), sect = state.route[0] || "";
    document.documentElement.lang = state.lang;
    document.body.classList.toggle("winter", state.season === "winter");
    document.getElementById("infobar").innerHTML = '<div class="wrap"><span class="hide-sm">' + esc(L.infobar) + '</span><a class="wa-inline" href="' + waHref(L.msg.general) + '" data-wa="' + esc(L.msg.general) + '">WhatsApp ' + PHONE + '</a><span class="demo-tag hide-sm">' + esc(L.demo) + "</span></div>";
    var navLinks = [["tours", L.nav.tours], ["services", L.nav.services], ["winter", L.nav.winter], ["contacts", L.nav.contacts]];
    var nav = navLinks.map(function (n) { var on = sect === n[0] || (n[0] === "tours" && sect === "tour"); return '<a href="' + href(n[0]) + '"' + (on ? ' class="active" aria-current="page"' : "") + ">" + esc(n[1]) + "</a>"; }).join("");
    var seasonSeg = '<div class="seg season" role="group" aria-label="Season"><button type="button" data-season="summer" aria-pressed="' + (state.season === "summer") + '">' + I.sun + esc(L.summer) + '</button><button type="button" data-season="winter" aria-pressed="' + (state.season === "winter") + '">' + I.snow + esc(L.winterS) + "</button></div>";
    var langSeg = '<div class="seg lang" role="group" aria-label="Language"><button type="button" data-lang="ru" aria-pressed="' + (state.lang === "ru") + '">RU</button><button type="button" data-lang="en" aria-pressed="' + (state.lang === "en") + '">EN</button></div>';
    document.getElementById("header").innerHTML = '<div class="wrap"><a class="logo" href="' + href("") + '">' + I.logo + "<span><b>Kazakhstan Travel</b><small>" + esc(L.tagline) + '</small></span></a><nav class="nav" aria-label="Main">' + nav + '</nav><div class="header-tools">' + seasonSeg + langSeg + waBtn(L.waShort, L.msg.general, "btn-sm hide-md") + '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" data-drawer="open">' + I.menu + "</button></div></div>";
    document.getElementById("drawer").innerHTML = '<div class="drawer-panel" role="dialog" aria-modal="true" aria-label="Menu"><div class="drawer-top"><a class="logo" href="' + href("") + '">' + I.logo + '<span><b>Kazakhstan Travel</b></span></a><button class="icon-btn" type="button" data-drawer="close" aria-label="' + esc(L.close) + '">' + I.x + '</button></div><nav>' + navLinks.map(function (n) { return '<a href="' + href(n[0]) + '">' + esc(n[1]) + "</a>"; }).join("") + "</nav>" + seasonSeg + langSeg + waBtn(L.waFloat, L.msg.general) + '<div class="contacts-mini"><a href="tel:+77775259885">' + PHONE + '</a><a href="mailto:' + EMAIL + '">' + EMAIL + "</a></div></div>";
    var f = document.getElementById("waFloat");
    f.href = waHref(L.msg.general); f.setAttribute("data-wa", L.msg.general);
    f.innerHTML = I.wa + "<span>" + esc(L.waFloat) + "</span>";
    document.getElementById("footer").innerHTML = '<div class="wrap"><div class="cols"><div><a class="logo" href="' + href("") + '">' + I.logo + "<span><b>Kazakhstan Travel</b></span></a><p style=\"margin-top:14px;color:rgba(255,255,255,.72)\">" + esc(L.footerAbout) + '</p></div><div><h4>' + esc(L.nav.tours) + '</h4><a href="' + href("tours?f=one") + '">' + esc(L.oneDay) + '</a><a href="' + href("tours?f=multi") + '">' + esc(L.multi) + '</a><a href="' + href("tours") + '">' + esc(L.allRoutes) + '</a><a href="' + href("winter") + '">' + esc(L.winterH) + '</a></div><div><h4>' + esc(L.nav.services) + "</h4>" + [["airplane", L.airplaneH], ["helicopter", L.heliH], ["yurts", L.yurtsH], ["transport", L.transportH], ["buggy", L.buggyH], ["horses", L.horsesH]].map(function (s) { return '<a href="' + href("services/" + s[0]) + '">' + esc(s[1]) + "</a>"; }).join("") + "</div><div><h4>" + esc(L.nav.contacts) + '</h4><a href="' + waHref(L.msg.general) + '" data-wa="' + esc(L.msg.general) + '">WhatsApp</a><a href="tel:+77775259885">' + PHONE + '</a><a href="mailto:' + EMAIL + '">' + EMAIL + '</a><a href="' + IG + '" target="_blank" rel="noopener">Instagram</a></div></div><div class="legal"><span>© Kazakhstan Travel · ' + esc(L.footerDemo) + "</span><span>" + esc(L.footerPhotos) + "</span></div></div>";
  }

  /* ---------- shared blocks ---------- */
  function tourCard(tr, label) {
    var L = t(), x = tr[state.lang];
    var media = tr.imgs.length ? img(tr.imgs[0], x.title) : '<div class="ph">' + esc(L.noPhoto) + "</div>";
    var badge = '<span class="card-badge' + (tr.season === "winter" ? " winter" : "") + '">' + esc(durLabel(tr)) + (tr.season === "winter" ? " · " + esc(L.winterS) : "") + "</span>";
    return '<a class="card reveal" href="' + href("tour/" + tr.slug) + '"><div class="card-media">' + media + badge + '</div><div class="card-body">' + (label ? '<span class="eyebrow" style="margin:0">' + esc(label) + "</span>" : "") + "<h3>" + esc(x.title) + "</h3><p>" + esc(x.short) + '</p><div class="card-foot"><span class="link-arrow">' + esc(L.program) + " →</span></div></div></a>";
  }

  function mosaic(list, alt) {
    var id = gal(list, alt), n = Math.min(3, list.length);
    var h = '<div class="mosaic n' + n + '">';
    for (var i = 0; i < n; i++) {
      h += '<button type="button" data-gal="' + id + '" data-i="' + i + '" aria-label="' + esc(alt) + " " + (i + 1) + '">' + img(list[i], alt) + (i === n - 1 && list.length > n ? '<span class="more-tag">+' + (list.length - n) + " " + esc(t().photos) + "</span>" : "") + "</button>";
    }
    return h + "</div>";
  }

  function strip(list, alt) {
    var id = gal(list, alt);
    return '<div class="strip">' + list.map(function (m, i) { return '<button type="button" data-gal="' + id + '" data-i="' + i + '" aria-label="' + esc(alt) + " " + (i + 1) + '">' + img(m, alt) + "</button>"; }).join("") + "</div>";
  }

  function promoBlock(kind) {
    var L = t(), isAir = kind === "airplane";
    var m = D.media[kind][0], id = gal(D.media[kind], isAir ? L.airplaneH : L.heliH);
    var routes = (isAir ? L.airRoutes : L.heliRoutes).map(function (r) { return "<li><span>" + esc(r[0]) + "</span><span>" + esc(r[1]) + "</span></li>"; }).join("");
    var title = isAir ? L.airplaneH : L.heliH;
    return '<article class="promo reveal" id="promo-' + kind + '">' + img(m, title, ' style="object-position:' + (isAir ? "60% 40%" : "50% 50%") + '"') + '<div class="promo-body"><span class="tag">' + esc(isAir ? L.promoTag : L.heliTag) + "</span><h3>" + esc(title) + "</h3><p>" + esc(isAir ? L.airplaneSub : L.heliSub) + "</p><ul>" + routes + '</ul><div class="actions">' + waBtn(L.askPrice, L.msg.service(title)) + '<a class="btn btn-ghost" href="' + href("services/" + kind) + '">' + esc(L.more) + '</a></div><button type="button" class="photo-note" style="background:none;border:0;padding:0;text-align:left;cursor:zoom-in" data-gal="' + id + '" data-i="0">' + (isAir ? esc(L.photoOwner) + " · " : "") + D.media[kind].length + " " + esc(L.photos) + " →</button></div></article>";
  }

  function winterTiles() {
    var L = t();
    return '<div class="grid g5 wint">' + ["snowschool", "wintertours", "skilessons", "heliski", "freeride"].map(function (k) {
      return '<a class="wtile reveal" href="' + href("winter/" + k) + '">' + img(D.media[k][0], L.w[k][0]) + "<div><small>" + esc(L.w[k][1]) + "</small><h3>" + esc(L.w[k][0]) + "</h3></div></a>";
    }).join("") + "</div>";
  }

  function contactBand() {
    var L = t();
    return '<div class="contact-band reveal"><div><span class="eyebrow" style="color:#f2d3b3">' + esc(L.nav.contacts) + "</span><h2>" + esc(L.contactH) + '</h2><p style="margin-top:14px;color:rgba(255,255,255,.8);max-width:480px">' + esc(L.contactSub) + '</p></div><div class="contact-list"><a class="primary" href="' + waHref(L.msg.general) + '" data-wa="' + esc(L.msg.general) + '">' + I.wa + "<span><small>WhatsApp</small><b>" + PHONE + '</b></span></a><a href="tel:+77775259885">' + I.phone + "<span><small>" + esc(L.phone) + "</small><b>" + PHONE + '</b></span></a><a href="mailto:' + EMAIL + '">' + I.mail + "<span><small>" + esc(L.email) + "</small><b>" + EMAIL + "</b></span></a></div></div>";
  }

  /* ---------- pages ---------- */
  function pageHome() {
    var L = t(), winter = state.season === "winter";
    var H = winter ? L.heroW : L.heroS;
    var heroImgs = D.media[winter ? "hero_winter" : "hero_summer"];
    var chips = FEATURED.map(function (f) { return '<a class="chip" href="' + href("tour/" + f[1]) + '">' + esc(L.dirs[f[0]]) + "</a>"; }).join("") + (winter ? '<a class="chip" href="' + href("winter") + '">' + esc(L.winterH) + "</a>" : "");
    var hero = '<section class="hero"><div class="hero-media">' + heroImgs.map(function (m, i) { return '<img src="' + m.src + '" alt="" ' + (i ? 'loading="lazy"' : 'fetchpriority="high"') + (i === 0 ? ' class="on"' : "") + ">"; }).join("") + '</div><div class="wrap"><div class="eyebrow">' + esc(H.eyebrow) + "</div><h1>" + H.h1 + '</h1><p class="hero-sub">' + esc(H.sub) + '</p><div class="hero-ctas">' + waBtn(L.pick, L.msg.general) + '<a class="btn btn-ghost" href="' + (winter ? href("winter") : href("tours")) + '">' + esc(winter ? L.winterH : L.seeRoutes) + '</a></div><div class="chips">' + chips + "</div></div></section>";

    var popular = '<section class="section"><div class="wrap"><div class="section-head"><div><div class="eyebrow">' + esc(L.nav.tours) + "</div><h2>" + esc(L.popular) + "</h2><p>" + esc(L.popularSub) + '</p></div><a class="link-arrow" href="' + href("tours") + '">' + esc(L.allRoutes) + ' →</a></div><div class="grid g3">' + FEATURED.map(function (f) { return tourCard(tour(f[1]), L.dirs[f[0]]); }).join("") + "</div></div></section>";

    var ones = D.tours.filter(function (x) { return x.days === 1; }).length, multis = D.tours.length - ones;
    var chooser = '<section class="section tight alt"><div class="wrap"><div class="section-head"><h2>' + esc(L.chooseH) + '</h2></div><div class="chooser"><a class="choice reveal" href="' + href("tours?f=one") + '">' + img(tour("charyn-1d").imgs[1], L.oneDay) + '<div><span class="count">' + esc(L.routesN(ones)) + "</span><h3>" + esc(L.oneDay) + "</h3><p>" + esc(L.oneDaySub) + '</p></div></a><a class="choice reveal" href="' + href("tours?f=multi") + '">' + img(tour("golden-ring-6d").imgs[2], L.multi) + '<div><span class="count">' + esc(L.routesN(multis)) + "</span><h3>" + esc(L.multi) + "</h3><p>" + esc(L.multiSub) + "</p></div></a></div></div></section>";

    var promos = '<section class="section"><div class="wrap"><div class="promos">' + promoBlock("airplane") + promoBlock("helicopter") + "</div></div></section>";

    var active = '<section class="section alt"><div class="wrap"><div class="section-head"><div><h2>' + esc(L.activeH) + "</h2><p>" + esc(L.activeSub) + '</p></div></div><div class="grid g2">' + [["buggy", L.buggyH, L.buggySub], ["horses", L.horsesH, L.horsesSub]].map(function (s) {
      return '<article class="card hoverable reveal"><a class="card-media" href="' + href("services/" + s[0]) + '" style="aspect-ratio:16/10">' + img(D.media[s[0]][0], s[1]) + '</a><div class="card-body"><h3>' + esc(s[1]) + "</h3><p>" + esc(s[2]) + '</p><div class="card-foot">' + waBtn(L.askPrice, L.msg.service(s[1]), "btn-sm") + '<a class="link-arrow" href="' + href("services/" + s[0]) + '">' + esc(L.more) + " →</a></div></div></article>";
    }).join("") + "</div></div></section>";

    var yurts = '<section class="section"><div class="wrap split"><div class="split-media reveal">' + mosaic(D.media.yurts, L.yurtsH) + '</div><div class="reveal"><div class="eyebrow">' + esc(L.yurtsEyebrow) + "</div><h2>" + esc(L.yurtsH) + '</h2><p class="muted" style="margin-top:14px">' + esc(L.yurtsSub) + '</p><ul class="bullets">' + L.yurtsBul.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + '</ul><div class="btn-row">' + waBtn(L.bookYurt, L.msg.service(L.yurtsH)) + '<a class="btn btn-ghost" href="' + href("services/yurts") + '">' + esc(L.more) + "</a></div></div></div></section>";

    var transport = '<section class="section alt"><div class="wrap"><div class="section-head"><div><div class="eyebrow">' + esc(L.transportEyebrow) + "</div><h2>" + esc(L.transportH) + "</h2><p>" + esc(L.transportSub) + "</p></div>" + waBtn(L.discuss, L.msg.service(L.transportH)) + "</div>" + strip(D.media.transport, L.transportH) + "</div></section>";

    var winterSec = '<section class="section' + (winter ? " alt" : "") + '" id="winter-block"><div class="wrap"><div class="section-head"><div><div class="eyebrow">' + esc(L.winterEyebrow) + "</div><h2>" + esc(L.winterH) + "</h2><p>" + esc(L.winterSub) + '</p></div><a class="link-arrow" href="' + href("winter") + '">' + esc(L.more) + " →</a></div>" + winterTiles() + '<p class="note">' + I.info + esc(L.winterPending) + "</p></div></section>";

    var contact = '<section class="section"><div class="wrap">' + contactBand() + "</div></section>";

    return hero + (winter ? winterSec + popular + chooser + promos + active + yurts + transport : popular + chooser + promos + active + yurts + transport + winterSec) + contact;
  }

  function pageCatalog(q) {
    var L = t(), f = (q.f || (state.season === "winter" ? "all" : "all"));
    var groups = { all: D.tours, one: D.tours.filter(function (x) { return x.days === 1; }), multi: D.tours.filter(function (x) { return x.days > 1; }), winter: D.tours.filter(function (x) { return x.season === "winter"; }) };
    var list = groups[f] || groups.all;
    if (f === "all" && state.season === "winter") list = groups.winter.concat(D.tours.filter(function (x) { return x.season !== "winter"; }));
    var btns = ["all", "one", "multi", "winter"].map(function (k) { return '<button type="button" data-filter="' + k + '" aria-pressed="' + (k === f) + '">' + esc(L.f[k]) + '<span class="n">' + groups[k].length + "</span></button>"; }).join("");
    var extra = f === "winter" ? '<p class="note">' + I.info + esc(L.winterCatalogNote) + ' <a href="' + href("winter") + '">' + esc(L.winterH) + " →</a></p>" : "";
    return '<section class="page-head"><div class="wrap"><div class="crumbs"><a href="' + href("") + '">' + esc(L.home) + "</a><span>/</span><span>" + esc(L.nav.tours) + "</span></div><h1>" + esc(L.catalogH) + '</h1><p class="lead">' + esc(L.catalogLead) + '</p></div></section><section class="section" style="padding-top:10px"><div class="wrap"><div class="filters" role="group" aria-label="Filter">' + btns + '</div><div class="grid g3">' + list.map(function (x) { return tourCard(x); }).join("") + "</div>" + extra + '</div></section><section class="section alt"><div class="wrap">' + contactBand() + "</div></section>";
  }

  function pageTour(slug) {
    var L = t(), tr = tour(slug);
    if (!tr) return pageCatalog({});
    var x = tr[state.lang], id = gal(tr.imgs, x.title);
    var heroG;
    if (tr.imgs.length) {
      heroG = '<div class="tour-hero' + (tr.imgs.length === 1 ? " single" : "") + '">' + tr.imgs.slice(0, 3).map(function (m, i) {
        return '<button type="button" data-gal="' + id + '" data-i="' + i + '" aria-label="' + esc(x.title) + " " + (i + 1) + '">' + img(m, x.title, i === 0 ? ' fetchpriority="high"' : "") + (i === 0 ? '<span class="gallery-count">' + I.img + tr.imgs.length + " " + esc(L.photos) + "</span>" : "") + "</button>";
      }).join("") + "</div>";
    } else {
      heroG = '<div class="tour-hero single" style="height:260px"><div class="ph" style="border-radius:10px">' + esc(L.noPhoto) + "</div></div>";
    }
    var intro = x.intro.filter(function (s) { return !/^(тур на|\d+\s*days?\b|1 day)/i.test(s); });
    var days = x.program.map(function (d, i) {
      var title = d.title ? d.title.replace(/^DAY/, "Day").replace(/^(Day \d+)\s*\((.+)\)$/, "$1 · $2") : (x.program.length > 1 ? "" : L.dayProgram);
      var m = title.match(/^((?:День|Day)\s*\d+)(.*)$/i);
      var head = m ? '<span class="day-num">' + esc(m[1]) + "</span>" + (m[2] ? '<h3 style="font-size:1.15rem">' + esc(m[2].replace(/^\s*[·(]\s*|\)$/g, "")) + "</h3>" : "") : "<h3>" + esc(title) + "</h3>";
      var items = d.items.map(function (it) { return '<li class="' + (it.t ? "has-time" : "") + '"><time>' + (it.t || "") + "</time><span>" + esc(it.x) + "</span></li>"; }).join("");
      return '<div class="program-day reveal"><div>' + head + '</div><ol class="timeline">' + items + "</ol></div>";
    }).join("");
    var startVal = tr.slug === "kegen-golden-ring-4d" ? L.startKegen : L.startVal;
    var facts = '<div class="facts"><div><small>' + esc(L.facts.dur) + "</small><b>" + esc(durLabel(tr)) + "</b></div><div><small>" + esc(L.facts.fmt) + "</small><b>" + esc(L.fmtVal) + "</b></div><div><small>" + esc(L.facts.start) + "</small><b>" + esc(startVal) + "</b></div><div><small>" + esc(L.facts.price) + "</small><b>" + esc(L.priceVal) + "</b></div></div>";
    var aside = '<aside class="aside-box"><h3>' + esc(L.asideH) + '</h3><p class="muted" style="margin:0;font-size:.94rem">' + esc(L.asideP) + "</p>" + waBtn(L.askPrice, L.msg.tour(x.title)) + '<a class="btn btn-ghost" href="' + waHref(L.msg.tour(x.title)) + '" data-wa="' + esc(L.msg.tour(x.title)) + '">' + esc(L.discuss) + "</a><ul>" + L.asideList.map(function (s) { return "<li>" + I.check + "<span>" + esc(s) + "</span></li>"; }).join("") + '</ul><div class="price-note">WhatsApp · <a href="tel:+77775259885">' + PHONE + '</a><br><a href="mailto:' + EMAIL + '">' + EMAIL + "</a></div></aside>";
    var related = D.tours.filter(function (o) { return o.slug !== tr.slug && (o.days > 1) === (tr.days > 1); }).slice(0, 3);
    return '<section class="page-head" style="padding-bottom:22px"><div class="wrap"><div class="crumbs"><a href="' + href("") + '">' + esc(L.home) + '</a><span>/</span><a href="' + href("tours") + '">' + esc(L.nav.tours) + "</a><span>/</span><span>" + esc(x.title) + '</span></div><div class="eyebrow">' + esc(durLabel(tr)) + " · " + esc(L.fmtVal) + "</div><h1 style=\"font-size:clamp(2rem,4.4vw,3.6rem);max-width:22ch\">" + esc(x.title) + '</h1><p class="lead">' + esc(x.short) + '</p></div></section><section><div class="wrap">' + heroG + '<div class="tour-layout"><div>' + facts + (intro.length ? '<p class="intro-text">' + intro.map(esc).join("<br>") + "</p>" : "") + "<h2 style=\"margin-bottom:18px\">" + esc(L.programH) + "</h2>" + days + '<div class="terms"><h3>' + esc(L.termsH) + "</h3><ul>" + L.terms.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + '</ul></div><div class="btn-row" style="margin-top:24px">' + waBtn(L.askPrice, L.msg.tour(x.title)) + '<a class="btn btn-ghost" href="' + href("tours") + '">' + esc(L.allRoutes) + "</a></div></div>" + aside + '</div></div></section><section class="section"><div class="wrap"><div class="section-head"><h2>' + esc(L.related) + '</h2><a class="link-arrow" href="' + href("tours") + '">' + esc(L.allRoutes) + ' →</a></div><div class="grid g3">' + related.map(function (o) { return tourCard(o); }).join("") + "</div></div></section>";
  }

  function svcSection(key, title, eyebrow, bodyHtml, media, rev, msgTitle) {
    var L = t();
    return '<section class="svc" id="svc-' + key + '"><div class="split' + (rev ? " rev" : "") + '"><div class="split-media reveal">' + mosaic(media, title) + '</div><div class="reveal"><div class="eyebrow">' + esc(eyebrow) + "</div><h2>" + esc(title) + "</h2>" + bodyHtml + '<div class="btn-row">' + waBtn(L.askPrice, L.msg.service(msgTitle || title)) + '<a class="btn btn-ghost" href="' + waHref(L.msg.service(msgTitle || title)) + '" data-wa="' + esc(L.msg.service(msgTitle || title)) + '">' + esc(L.discuss) + "</a></div></div></div></section>";
  }

  function routeTable(rows) { return '<table class="route-table"><tbody>' + rows.map(function (r) { return "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td></tr>"; }).join("") + "</tbody></table>"; }

  function pageServices() {
    var L = t(), ru = state.lang === "ru";
    var yurtTours = ["kolsay-hiking-3d", "golden-ring-express-3d", "kegen-golden-ring-4d"].map(function (s) { var o = tour(s); return '<a href="' + href("tour/" + s) + '">' + esc(o[state.lang].title) + "</a> (" + esc(durLabel(o)) + ")"; }).join(", ");
    var nav = [["airplane", L.airplaneH], ["helicopter", L.heliH], ["yurts", L.yurtsH], ["transport", L.transportH], ["buggy", L.buggyH], ["horses", L.horsesH]].map(function (s) { return '<a href="' + href("services/" + s[0]) + '">' + esc(s[1]) + "</a>"; }).join("");
    var s = "";
    s += svcSection("airplane", L.airplaneH, L.promoTag, '<p class="muted" style="margin-top:14px">' + esc(L.airplaneSub) + "</p>" + routeTable(L.airRoutes) + '<p class="note" style="margin-top:0">' + I.info + esc((ru ? "Socata TB-20: до 3 пассажиров и пилот, общий вес пассажиров до 240 кг. " : "Socata TB-20: up to 3 passengers plus pilot, combined passenger weight up to 240 kg. ") + L.airNote) + "</p>", D.media.airplane, false);
    s += svcSection("helicopter", L.heliH, L.heliTag, '<p class="muted" style="margin-top:14px">' + esc(L.heliSub) + "</p>" + routeTable(L.heliRoutes) + '<p class="note" style="margin-top:0">' + I.info + esc(L.heliNote) + "</p>", D.media.helicopter, true);
    s += svcSection("yurts", L.yurtsH, L.yurtsEyebrow, '<p class="muted" style="margin-top:14px">' + esc(L.yurtsSub) + '</p><ul class="bullets">' + L.yurtsBul.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + '</ul><p class="muted" style="font-size:.92rem">' + (ru ? "Ночёвка в юртах в селе Саты также предусмотрена в программах: " : "Yurt nights in Saty village are also part of: ") + yurtTours + ".</p>", D.media.yurts, false);
    s += '<section class="svc" id="svc-transport"><div class="section-head"><div><div class="eyebrow">' + esc(L.transportEyebrow) + "</div><h2>" + esc(L.transportH) + "</h2><p>" + esc(L.transportSub) + '</p></div><div class="btn-row">' + waBtn(L.askPrice, L.msg.service(L.transportH)) + "</div></div>" + strip(D.media.transport, L.transportH) + "</section>";
    s += svcSection("buggy", L.buggyH, L.activeH, '<p class="muted" style="margin-top:14px">' + esc(L.buggySub) + "</p>" + routeTable(L.buggyRoutes) + '<p class="note" style="margin-top:0">' + I.info + esc(L.buggyNote) + "</p>", D.media.buggy, true);
    s += svcSection("horses", L.horsesH, L.activeH, '<p class="muted" style="margin-top:14px">' + esc(L.horsesSub) + '</p><ul class="bullets">' + L.horseRoutes.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>", D.media.horses, false);
    return '<section class="page-head"><div class="wrap"><div class="crumbs"><a href="' + href("") + '">' + esc(L.home) + "</a><span>/</span><span>" + esc(L.nav.services) + "</span></div><h1>" + esc(L.servicesH) + '</h1><p class="lead">' + esc(L.servicesLead) + '</p></div></section><div class="wrap"><nav class="svc-nav" aria-label="Services">' + nav + "</nav>" + s + '</div><section class="section"><div class="wrap">' + contactBand() + "</div></section>";
  }

  function pageWinter() {
    var L = t();
    var keys = ["snowschool", "wintertours", "skilessons", "heliski", "freeride"];
    var nav = keys.map(function (k) { return '<a href="' + href("winter/" + k) + '">' + esc(L.w[k][0]) + "</a>"; }).join("");
    var s = keys.map(function (k, i) {
      var body = D.texts[k][state.lang].filter(function (p) { return !/^(Зимний тур на Кольсай|Winter Kolsay and Charyn)/.test(p); }).map(function (p) { return '<p class="muted" style="margin-top:14px">' + esc(p) + "</p>"; }).join("");
      if (k === "wintertours") { var wt = tour("winter-kolsay-charyn"); body += '<a class="card hoverable" href="' + href("tour/" + wt.slug) + '" style="flex-direction:row;margin:6px 0 22px;align-items:center"><span style="width:120px;flex:none;align-self:stretch">' + img(wt.imgs[0], L.relatedTour, ' style="height:100%;object-fit:cover"') + '</span><span class="card-body" style="padding:14px 16px"><span class="eyebrow" style="margin:0">' + esc(durLabel(wt)) + '</span><b style="font-family:var(--serif);font-size:1.25rem;line-height:1.15">' + esc(wt[state.lang].title) + '</b><span class="link-arrow">' + esc(L.program) + " →</span></span></a>"; }
      else body += '<p class="note" style="margin:0 0 20px">' + I.info + esc(L.winterPending) + "</p>";
      return svcSection(k, L.w[k][0], L.w[k][1], body, D.media[k], i % 2 === 1);
    }).join("");
    return '<section class="page-head"><div class="wrap"><div class="crumbs"><a href="' + href("") + '">' + esc(L.home) + "</a><span>/</span><span>" + esc(L.nav.winter) + "</span></div><h1>" + esc(L.winterPageH) + '</h1><p class="lead">' + esc(L.winterPageLead) + '</p></div></section><div class="wrap">' + winterTiles() + '<nav class="svc-nav" aria-label="Winter" style="margin-top:28px">' + nav + "</nav>" + s + '</div><section class="section"><div class="wrap">' + contactBand() + "</div></section>";
  }

  function pageContacts() {
    var L = t();
    return '<section class="page-head"><div class="wrap"><div class="crumbs"><a href="' + href("") + '">' + esc(L.home) + "</a><span>/</span><span>" + esc(L.contactsPageH) + "</span></div><h1>" + esc(L.contactsPageH) + '</h1><p class="lead">' + esc(L.contactsLead) + '</p></div></section><section class="section" style="padding-top:10px"><div class="wrap">' + contactBand() + '<div class="grid g3" style="margin-top:22px"><a class="card hoverable" href="' + IG + '" target="_blank" rel="noopener"><div class="card-body" style="flex-direction:row;align-items:center;gap:14px">' + '<span style="width:24px;height:24px;display:block">' + I.ig + '</span><span><small class="mono muted">Instagram</small><br><b>@kazakhstan_travel</b></span></div></a><a class="card hoverable" href="' + href("tours") + '"><div class="card-body"><small class="mono muted">' + esc(L.nav.tours) + "</small><b>" + esc(L.catalogH) + ' →</b></div></a><a class="card hoverable" href="' + href("services") + '"><div class="card-body"><small class="mono muted">' + esc(L.nav.services) + "</small><b>" + esc(L.servicesH) + " →</b></div></a></div></div></section>";
  }

  /* ---------- router ---------- */
  function parse() {
    var h = location.hash.replace(/^#\/?/, ""), q = {};
    var qi = h.indexOf("?");
    if (qi >= 0) { h.slice(qi + 1).split("&").forEach(function (p) { var kv = p.split("="); q[kv[0]] = decodeURIComponent(kv[1] || ""); }); h = h.slice(0, qi); }
    var parts = h.split("/").filter(Boolean);
    var lang = parts[0] === "en" || parts[0] === "ru" ? parts.shift() : (store.get("kt-lang") || "ru");
    return { lang: lang, parts: parts, q: q };
  }

  var lastPage = "", keepScroll = false;
  function render() {
    var r = parse();
    state.lang = r.lang; store.set("kt-lang", r.lang);
    state.route = r.parts;
    galleries = {}; galSeq = 0;
    var p = r.parts[0] || "", html, title;
    var L = t();
    if (p === "tours") { html = pageCatalog(r.q); title = L.catalogH; }
    else if (p === "tour") { html = pageTour(r.parts[1]); var tr = tour(r.parts[1]); title = tr ? tr[state.lang].title : L.catalogH; }
    else if (p === "services") { html = pageServices(); title = L.servicesH; }
    else if (p === "winter") { html = pageWinter(); title = L.winterPageH; }
    else if (p === "contacts") { html = pageContacts(); title = L.contactsPageH; }
    else { html = pageHome(); title = state.lang === "ru" ? "Туры из Алматы" : "Tours from Almaty"; }
    renderChrome();
    var app = document.getElementById("app");
    app.innerHTML = html;
    document.title = title + " · Kazakhstan Travel";
    var pageKey = state.lang + "/" + p + "/" + (r.parts[1] && p === "tour" ? r.parts[1] : "");
    var anchor = (p === "services" || p === "winter") && r.parts[1] ? document.getElementById("svc-" + r.parts[1]) : null;
    if (anchor) { setTimeout(function () { anchor.scrollIntoView({ behavior: "smooth", block: "start" }); }, 30); }
    else if (pageKey !== lastPage && !keepScroll) window.scrollTo(0, 0);
    keepScroll = false;
    lastPage = pageKey;
    observe();
    startHero();
  }

  /* ---------- hero slideshow ---------- */
  var heroTimer;
  function startHero() {
    clearInterval(heroTimer);
    var imgs = document.querySelectorAll(".hero-media img");
    if (imgs.length < 2) return;
    var i = 0;
    heroTimer = setInterval(function () { imgs[i].classList.remove("on"); i = (i + 1) % imgs.length; imgs[i].classList.add("on"); }, 7000);
  }

  /* ---------- reveal ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -40px 0px" }) : null;
  function observe() { document.querySelectorAll(".reveal").forEach(function (el) { if (io) io.observe(el); else el.classList.add("in"); }); }

  /* ---------- lightbox ---------- */
  var lb = { el: document.getElementById("lightbox"), g: null, i: 0, last: null };
  function lbOpen(id, i) {
    lb.g = galleries[id]; if (!lb.g) return; lb.i = i; lb.last = document.activeElement;
    lb.el.hidden = false; document.body.style.overflow = "hidden"; lbDraw();
    lb.el.querySelector(".lb-close").focus();
  }
  function lbDraw() {
    var g = lb.g, m = g.list[lb.i], L = t();
    lb.el.innerHTML = '<div class="lb-top"><span>' + esc(g.alt) + " · " + (lb.i + 1) + " / " + g.list.length + '</span><button class="lb-close" type="button" aria-label="' + esc(L.close) + '">' + I.x + '</button></div><div class="lb-stage"><img src="' + m.src + '" alt="' + esc(g.alt) + '">' + (g.list.length > 1 ? '<button class="lb-btn lb-prev" type="button" aria-label="Prev">' + I.l + '</button><button class="lb-btn lb-next" type="button" aria-label="Next">' + I.r + "</button>" : "") + '</div><div class="lb-thumbs">' + (g.list.length > 1 ? g.list.map(function (x, k) { return '<button type="button" data-lbi="' + k + '" class="' + (k === lb.i ? "on" : "") + '" aria-label="' + (k + 1) + '"><img src="' + x.src + '" alt="" loading="lazy"></button>'; }).join("") : "") + "</div>";
    var on = lb.el.querySelector(".lb-thumbs .on"); if (on) on.scrollIntoView({ inline: "center", block: "nearest" });
  }
  function lbGo(d) { lb.i = (lb.i + d + lb.g.list.length) % lb.g.list.length; lbDraw(); lb.el.querySelector(".lb-close").focus(); }
  function lbClose() { lb.el.hidden = true; lb.el.innerHTML = ""; document.body.style.overflow = ""; if (lb.last) lb.last.focus(); }
  var touchX = null;
  lb.el.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lb.el.addEventListener("touchend", function (e) { if (touchX === null) return; var dx = e.changedTouches[0].clientX - touchX; if (Math.abs(dx) > 45) lbGo(dx < 0 ? 1 : -1); touchX = null; });

  /* ---------- WhatsApp demo modal ---------- */
  var modal = document.getElementById("waModal");
  function waOpen(msg, link) {
    var L = t();
    modal.innerHTML = '<div class="modal-card" role="dialog" aria-modal="true" aria-label="' + esc(L.modalH) + '"><h3>' + esc(L.modalH) + '</h3><div class="mono muted">→ ' + PHONE + '</div><div class="wa-preview">' + esc(msg) + '</div><p class="demo-hint">' + esc(L.modalHint) + '</p><div class="btn-row"><a class="btn btn-wa" href="' + link + '" target="_blank" rel="noopener">' + I.wa + esc(L.openWa) + '</a><button type="button" class="btn btn-ghost" data-copy>' + esc(L.copy) + '</button></div><button type="button" class="btn btn-ghost btn-sm" data-close-modal>' + esc(L.close) + "</button></div>";
    modal.hidden = false; modal._msg = msg; modal.querySelector(".btn-wa").focus();
  }
  function waClose() { modal.hidden = true; modal.innerHTML = ""; }

  /* ---------- events ---------- */
  function setDrawer(open) {
    var d = document.getElementById("drawer");
    d.hidden = !open; document.body.style.overflow = open ? "hidden" : "";
    var b = document.querySelector(".burger"); if (b) b.setAttribute("aria-expanded", String(open));
  }

  document.addEventListener("click", function (e) {
    var el;
    if ((el = e.target.closest("[data-wa]"))) {
      e.preventDefault(); waOpen(el.getAttribute("data-wa") || t().msg.general, el.getAttribute("href")); return;
    }
    if ((el = e.target.closest("[data-gal]"))) { lbOpen(el.getAttribute("data-gal"), +el.getAttribute("data-i")); return; }
    if ((el = e.target.closest("[data-lbi]"))) { lb.i = +el.getAttribute("data-lbi"); lbDraw(); return; }
    if (e.target.closest(".lb-prev")) { lbGo(-1); return; }
    if (e.target.closest(".lb-next")) { lbGo(1); return; }
    if (e.target.closest(".lb-close") || e.target.classList.contains("lb-stage")) { lbClose(); return; }
    if ((el = e.target.closest("[data-season]"))) {
      state.season = el.getAttribute("data-season"); store.set("kt-season", state.season);
      lastPage = ""; render(); setDrawer(false); return;
    }
    if ((el = e.target.closest("[data-lang]"))) {
      var nl = el.getAttribute("data-lang"); if (nl === state.lang) return;
      var h = location.hash.replace(/^#\/?(ru|en)?/, "");
      keepScroll = true; location.hash = "#/" + nl + (h && h[0] !== "/" ? "/" + h : h); setDrawer(false); return;
    }
    if ((el = e.target.closest("[data-filter]"))) {
      var f = el.getAttribute("data-filter");
      history.replaceState(null, "", href("tours" + (f === "all" ? "" : "?f=" + f))); render(); return;
    }
    if ((el = e.target.closest("[data-drawer]"))) { setDrawer(el.getAttribute("data-drawer") === "open"); return; }
    if (e.target.id === "drawer") { setDrawer(false); return; }
    if (e.target.closest("#drawer a")) { setDrawer(false); }
    if (e.target.closest("[data-close-modal]") || e.target === modal) { waClose(); return; }
    if (e.target.closest("[data-copy]")) {
      var btn = e.target.closest("[data-copy]");
      try { navigator.clipboard.writeText(modal._msg).then(function () { btn.textContent = t().copied; }); } catch (err) { btn.textContent = t().copied; }
      return;
    }
    if (e.target.closest(".modal-card .btn-wa")) { setTimeout(waClose, 50); }
  });

  document.addEventListener("keydown", function (e) {
    if (!lb.el.hidden) { if (e.key === "Escape") lbClose(); else if (e.key === "ArrowLeft") lbGo(-1); else if (e.key === "ArrowRight") lbGo(1); return; }
    if (!modal.hidden && e.key === "Escape") { waClose(); return; }
    if (!document.getElementById("drawer").hidden && e.key === "Escape") setDrawer(false);
  });

  window.addEventListener("hashchange", render);
  if (!location.hash) history.replaceState(null, "", "#/" + (store.get("kt-lang") || "ru"));
  render();
})();
