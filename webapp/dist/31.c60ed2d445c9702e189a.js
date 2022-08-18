(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"VwZ/":function(e){e.exports=JSON.parse('{"Builder":{"View":{"Home":{"heading":"Мои сайты","empty":{"title":"Ваш первый сайт","message":"У вас ещё не создано ни одного сайта. Давайте же исправим это недоразумение!"},"labels":{"oldSite":"Старая страница"}}}},"Website":{"fields":{"enabled":{"label":"Статус страницы","published":"Опубликовано","notPublished":"Не опубликовано"},"name":{"label":"Название сайта","placeholder":"Введите название сайта"},"slug":{"label":"Адрес сайта","publishLabel":"Базовый адрес","placeholder":"Введите адрес сайта"},"embeddedCode":{"content":{"label":"HTML код","placeholder":"Введите HTML код","hint":"Код не применяется в редакторе блоков сайта, но результат можно увидеть на опубликованном сайте или нажав кнопку предпросмотра внизу"},"fit":{"label":"Подогнать фреймы под страницу","hint":"Отметьте \\"Подогнать фреймы под страницу\\", если вы хотите чтобы вставленные кодом фреймы (например, карта Open Street Maps) автоматически подгонялись под ширину страницы"},"inHead":{"label":"Вставить в тег HEAD","hint":"Включите эту опцию, чтобы вставить код в тег HEAD. Иначе он будет расположен перед закрывающимся тегом /body."},"onLoad":{"label":"Выполнять после загрузки страницы","hint":"Включите эту опцию, чтобы выполнить код только после загрузки содержимого страницы."}},"domain":{"name":{"label":"Домен сайта","placeholder":"Введите домен сайта"}},"seo":{"title":{"label":"Заголовок","placeholder":"Введите заголовок сайта"},"description":{"label":"Описание","placeholder":"Введите описание сайта"}},"tracking":{"facebook":{"placeholder":"Введите ID","fieldTip":"Чтобы найти facebook pixel id вам нужно:\\n\\n 1. Зайдите в свой Ad Manager или Power Editor.\\n2. Кликните на Tools – Pixels.\\n3. Здесь вы найдете базовую аналитику вашего пикселя. ID отображается в правом верхнем углу.\\n\\nЕсли у вас еще нет пикселя - вы увидите стартовую страницу: Создайте свой первый пиксель и вернитесь к шагу 1."},"google":{"placeholder":"Введите ID","fieldTip":"Чтобы найти google analytics id вам нужно:\\n\\n 1. Зайдите в свой Google Analytics аккаунт. \\n 2. Нажмите Администратор. \\n 3. Выберите аккаунт в меню в колонке Аккаунт. \\n 4. Выберите ресурс в колонке Ресурс. \\n 5. В колонке Ресурс, нажмите Отслеживание > Код отслеживания. Ваш идентификатор отслеживания появится вверху страницы."},"yandex":{"placeholder":"Введите ID","fieldTip":"Чтобы найти id счетчика yandex metrika вам нужно:\\n\\n 1. На странице Мои счетчики нажмите значок шестеренки напротив нужного счетчика \\n 2. Перейдите в раздел Настройка. Идентификатор счетчика указан в поле Номер счетчика."},"tiktok":{"placeholder":"Введите ID","fieldTip":"Чтобы найти TikTok pixel id вам нужно:\\n\\n 1. Зайдите в свой рекламный TikTok аккаунт. \\n 2. Выберите в меню - Актив > Событие  \\n 3. Выберите Website Pixel. \\n 4. В списке созданных пикселей его ID отображается под его названием."}},"branding":{"enabled":"Включен","disabled":"Выключен"}},"Edit":{"ChooseTemplate":{"heading":"Выберите шаблон","subHeading":"Вы сможете изменить его позже","select":"Выбрать шаблон","tags":{"links":"Ссылки","contacts":"Контакты","shop":"Магазин","blank":"С нуля"},"blankLabels":{"heading":"Пустое полотно","description":"Создайте свой сайт с нуля"}},"Create":{"heading":"Выберите шаблон","preview":"Превью","labels":{"empty":"Пустой шаблон","tip":"Выберите существующий шаблон или начните с чистого листа. Вы сможете добавлять новые и удалять существующие блоки."}},"Delete":{"heading":"Удаление сайта","fieldTip":"Вы действительно хотите удалить сайт? Это действие необратимо."},"Name":{"heading":"Название сайта","fieldTip":"Подсказка по названию сайта"},"Embedded":{"heading":"Вставка HTML кода"},"URL":{"heading":"URL сайта","fieldTip":"Подсказка по URL сайта"},"Domain":{"heading":"Домен сайта","fieldTip":"Подсказка по домену сайта","form":{"domainName":{"label":"Домен"}},"buttons":{"connect":"Подключить домен","remove":"Удалить домен"},"tips":{"empty":{"messages":{"1":"Введите домен, который вы хотите подключить. Если у вас уже есть домен, на котором сейчас размещен ваш основной сайт, тогда вы можете использовать произвольной поддомен. К примеру mssg.example.com","2":"Домен вы можете купить на таких площадках как <a href=\\"https://godaddy.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">godaddy.com</a>, <a href=\\"https://www.namecheap.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">namecheap.com</a>, <a href=\\"https://nic.ua\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">nic.ua</a> и других."}},"new":{"title":"Что делать дальше?","messages":{"1":"Вам необходимо добавить запись типа CNAME для вашего домена:","list":{"1":"Зайдите в контрольную панель управления своим доменом","2":"В настройках домена найдите раздел типа «Добавление записи в DNS»","3":"Добавьте запись типа CNAME с именем <b>{{host}}</b> и с указанием алиаса хоста - <b>{{cname}}.</b> (с точкой в конце).","4":"Если у вас есть другие записи типа A, AAAA или CNAME с именем <b>{{host}}</b> - удалите их."},"ps":"Подключение домена займет от 3-х до 24-х часов после добавления CNAME записи.","faq":"Посмотреть подробную инструкцию"}},"waitingSSL":{"title":"Создание SSL-сертификата","messages":{"1":"Происходит создание SSL сертификата для вашего домена. Это займет около 5-10 минут."}},"ready":{"title":"Все готово","messages":{"1":"Ваш домен подключен и доступен по ссылке внизу."}}}},"SEO":{"heading":"SEO сайта","fieldTip":"Подсказка к SEO сайта"},"Status":{"heading":"Статус сайта","fieldTip":"Подсказка по статусу сайта"},"PageTrackingMenu":{"heading":"Трекинг","fieldTip":"Подсказки по трекингу"},"Branding":{"heading":"Брендинг Mssg.me","fieldTip":"Подсказка по брендингу"},"PublishButton":{"heading":"Публикация сайта","fieldTip":"Остался последний шаг! Задайте вашему сайту адрес в интернете.","applyButton":"Опубликовать сайт","domain":{"label":"Свой домен","buttons":{"connect":"Подключить","change":"Изменить"},"notConnected":"Не подключен"},"unused":"* Неиспользованные фото ({{count}}) не будут сохранены"}},"View":{"Home":{"heading":"{{name}}","items":{"editor":"Редактирование","settings":"Настройки","analytics":"Аналитика","feedback":"Заявки","products":"Товары"},"not_published":"Ваш сайт не опубликован ☝️"},"Settings":{"heading":"Настройки сайта","items":{"name":"Название","status":"Опубликовано","slug":"URL","domain":"Домен","seo":"SEO","tracking":"Трекинг","branding":"Брендинг","template":"Сохранить как шаблон","embedded":"Вставка HTML кода"}},"Share":{"heading":"Поделиться","myLink":"Моя ссылка","shareInstagram":"Поделитесь ссылкой на свою страницу","qrTitle":"QR-код","qrHeading":"Направьте пользователей с офлайн"},"QR":{"heading":"QR-код","alt":"QR to your page","qr_download":"Скачать QR","qr_info":"Вы можете напечатать свой уникальный QR-код на визитках или листовках"},"Embed":{"heading":"Виджет на сайт","tip":"Скопируйте и вставьте код на ваш сайт перед закрывающим тегом < /body >","codeLabel":"Код для вставки на сайт","copyCode":"Скопировать код","copied":"Скопировано"}}},"Page":{"fields":{"enabled":{"label":"Статус"},"color":{"label":"Цвет"},"backgroundImage":{"label":"Фоновое изображение"},"opacity":{"label":"Прозрачность"},"size":{"label":"Размер","items":{"huge":"Огромный","large":"Большой","medium":"Средний","small":"Маленький"}},"textColor":{"label":"Цвет текста"},"paneColor":{"label":"Цвет подложки"},"backgroundColor":{"label":"Цвет фона","shortLabel":"Фон"},"contentAlignment":{"label":"Выравнивание блоков","hint":"Вертикальное выравнивание блоков на странице","values":{"top":"Вверху","middle":"По центру","bottom":"Внизу"}},"textStyle":{"label":"Стиль","values":{"normal":"Без стилей","bold":"Жирный","underline":"Подчеркнутый","italic":"Наклонный","line-through":"Зачеркнутый"}},"align":{"label":"Выравнивание","placeholder":"Выберите выравнивание текста","values":{"left":"Слева","center":"По центру","right":"Справа","justify":"Выровнять"}},"fontSize":{"label":"Размер","placeholder":"Выберите размер текста","values":{"big":"Большой","medium":"Средний","small":"Маленький"}},"borderRadius":{"label":"Закругление","placeholder":"Выберите закругление","values":{"0":"Без закруглений","16":"С закруглениями","30":"Максимальные закругления"}},"icon":{"label":"Иконка","placeholder":"Выберите иконку","groups":{"general":"Разное","social":"Соц. сети"}},"glyph":{"iconModalHeading":"Иконка","emoticonModalHeading":"Эмотиконы"},"gradient":{"label":"Градиент","values":{"on":"Вкл","off":"Выкл"}},"urlSubtitle":{"label":"Домен","values":{"on":"Вкл","off":"Выкл"}},"contrastedColor":{"label":"Цвет (авто)","values":{"on":"Вкл","off":"Выкл"}},"buttonWidth":{"label":"Ширина","values":{"adaptive":"Адаптивная","full":"100%"}},"link":{"title":{"label":"Название ссылки","placeholder":"Введите название"},"url":{"label":"URL ссылки","placeholder":"Введите URL"},"useSocial":{"placeholder":"Брендинг ссылки"}},"ratio":{"label":"Пропорции","values":{"original":{"label":"Оригинал","shortLabel":"Оригинал"},"square":{"label":"Квадрат (1x1)","shortLabel":"Квадрат"},"rectangle":{"label":"Прямоугольник (16x9)","shortLabel":"Прямоугольник"},"vertical":{"label":"Вертикальное (9x16)","shortLabel":"Вертикальное"}}},"fit":{"label":"Размещение","values":{"fit-inside":{"label":"Вписать по большей стороне","shortLabel":"С полями"},"fit-outside":{"label":"Вписать по меньшей стороне","shortLabel":"Вписать"},"stretch":{"label":"Растянуть","shortLabel":"Растянуть"},"fill":{"label":"Замостить","shortLabel":"Замостить"}}},"page":{"placeholder":"Выберите страницу"},"headerMode":{"label":"Шаблон","placeholder":"Выберите шаблон шапки","values":{"compact":"Компактный","centered":"По центру","image":"Изображение","brand":"Бренд","avatar":"Аватар"}},"messengersMode":{"label":"Шаблон","placeholder":"Выберите шаблон","values":{"compact":"Компактный","beefy":"Больше","list":"Список"}},"servicesGridMode":{"label":"Шаблон","placeholder":"Выберите шаблон","values":{"grid":"Сетка","list":"Список"}},"dividerType":{"label":"Шаблон","placeholder":"Выберите шаблон разделителя","values":{"line":"Линия","dots":"Точки","space":"Невидимый"}},"dividerMargin":{"label":"Отступы","placeholder":"Выберите размер отступов","values":{"small":"Маленькие","medium":"Средние","large":"Большие"}},"dividerSize":{"label":"Размер","placeholder":"Выберите размер разделителя","values":{"small":"Маленький","medium":"Средний","large":"Большой"}},"alignment":{"label":"Выравнивание","values":{"left":"Слева","center":"По центру","right":"Справа"}},"width":{"label":"Ширина"},"height":{"label":"Высота"},"padding":{"label":"Отступы","values":{"yes":"Есть","no":"Нет"}},"themeColors":{"label":"Цвет","values":{"yes":"Из темы","no":"Бренд"}},"autoplay":{"label":"Слайд-шоу"},"slideshowEffect":{"label":"Эффект","values":{"flip":"Flip","fade":"Fade"}},"perView":{"label":"Ячейки"},"iconAlignment":{"label":"Расположение иконки","shortLabel":"Иконка","values":{"left":"Слева","right":"Справа"}},"exclusive":{"label":"Одновременно раскрытые","shortLabel":"Раскрытие","items":{"one":"Один пункт","any":"Неограничено"}},"quoteTemplate":{"label":"Стиль","values":{"line":"Линия","quote":"Кавычки"}},"listLabel":{"label":"Шаблон","shortLabel":"Шаблон","items":{"dot":"Точки","number":"Цифры","line":"Линии"}},"filterMode":{"label":"Список категорий","shortLabel":"Категории","placeholder":"Выберите поведение","values":{"buttons":"Кнопки","tabs":"Вкладки","filter":"Фильтр"}}},"Edit":{"Setup":{"heading":"Выберите шаблон","labels":{"empty":"Пустой шаблон","settingUp":"Заполняем страницу","tip":"Выберите существующий шаблон или начните с чистого листа. Вы сможете добавлять новые и удалять существующие блоки."}},"auto-insert":"do not edit or remove this: used for block-editor auto-generation","Timer":{"heading":"Таймер","labels":{"expireDate":"Дата и время окончания таймера"}},"Giphy":{"heading":"Гифка","placeholders":{"search":"Найти..."},"tabs":{"gifs":"Гифки","stickers":"Стикеры"},"carousel":{"notFound":"Ничего не найдено"}},"CustomCode":{"heading":"HTML-код","fields":{"content":{"label":"Произвольный HTML-код","placeholder":"Введите произвольный HTML-код"}}},"SubscriptionForm":{"heading":"Форма заявки","itemFormHeading":"Поле формы","itemAdd":"Добавить поле","itemAddMore":"Добавить еще одно поле","fields":{"items":{"label":"Поля формы"},"label":{"label":"Заголовок поля","placeholder":"Введите название"},"required":{"label":"Поле обязательное","placeholder":"Переключить"},"large":{"label":"Допускать до 5000 символов","placeholder":"Переключить"},"contactType":{"label":"Обратная связь через","items":{"email":"Email","phone":"Телефон"}},"ctaLabel":{"label":"Текст на кнопке","placeholder":"Введите текст"},"ctaText":{"label":"Заголовок формы отправки","placeholder":"Введите заголовок"},"sendLabel":{"label":"Текст на кнопке отправки","placeholder":"Введите текст","defaultValue":"Отправить"},"sentText":{"label":"Текст после отправки","placeholder":"Введите текст","defaultValue":"Заявка отправлена!"},"sentUrl":{"label":"Открыть ссылку после отправки","placeholder":"Введите URL"}},"fieldTypes":{"name":{"initialValue":"Имя","label":"Имя"},"phone":{"initialValue":"Телефон","label":"Телефон"},"email":{"initialValue":"Email","label":"Email"},"text":{"label":"Текст"}},"fieldTypesModal":{"title":"Выберите тип поля"}},"Custom":{"heading":"Кастомный блок"},"ServicesGrid":{"heading":"Список товаров","itemFormHeading":"Товар","itemAdd":"Добавить товар","itemAddMore":"Добавить ещё один товар","fields":{"title":{"label":"Название товара","placeholder":"Введите название товара"},"description":{"label":"Описание товара","placeholder":"Введите описание товара"},"price":{"label":"Цена товара","placeholder":"Укажите цену товара"},"url":{"label":"Внешняя ссылка","placeholder":"Введите URL"},"photoUrl":{"label":"Фото товара"}},"labels":{"addProduct":"Добавить товар","configureDetailsPage":"Настроить страницу товара","contacts":{"heading":"Страница товара","hint":"Выберите, какие существующие блоки обратной связи отображать на странице деталей товара. Доступны для выбора блоки Мессенджеры, Ссылка и Социальные сети"}}},"Products":{"heading":"Каталог товаров","fields":{"title":{"label":"Название блока товаров","placeholder":"Введите название"},"collectionsInclude":{"label":"Отображение категорий","placeholder":"Укажите категории товаров"},"limit":{"label":"Загружать за раз"},"total":{"label":"Показывать не больше"}},"labels":{"noLimit":"Все","addProducts":"Добавить товары","manageCRM":"Управление товарами"},"tips":{"noCollections":"Для добавления товаров и категорий товаров, перейдите в раздел управления товарами нажав кнопку внизу","noSelection":"Если не выбрать ни одной категории, то будут отображаться все доступные товары"}},"Quote":{"heading":"Цитата","fields":{"author":{"label":"Автор","placeholder":"Укажите автора"},"content":{"label":"Текст","placeholder":"Введите текст"}}},"VideoGallery":{"heading":"Видеогалерея","itemAdd":"Добавить видео","itemAddMore":"Добавить ещё одно видео","itemFormHeading":"Видео","fields":{"url":{"label":"Видео URL (YouTube, Vimeo)","placeholder":"Вставьте ссылку на видео"},"annotation":{"label":"Подпись","placeholder":"Введите подпись","missing":"Без подписи"}}},"Features":{"heading":"Преимущества","itemAdd":"Добавить преимущество","itemAddMore":"Добавить ещё одно преимущество","itemFormHeading":"Пункт списка","fields":{"title":{"label":"Название","placeholder":"Введите название"},"content":{"label":"Текст","placeholder":"Введите текст"},"glyph":{"label":"Иконка","placeholder":"Выберите иконку"}}},"Accordion":{"heading":"Разворачиваемый список","itemAdd":"Добавить пункт","itemAddMore":"Добавить ещё один пункт","itemFormHeading":"Пункт списка","fields":{"title":{"label":"Название","placeholder":"Введите название"},"content":{"label":"Текст","placeholder":"Введите текст"}}},"ImageGallery":{"heading":"Галерея изображений","itemAdd":"Добавить изображение","itemAddMore":"Добавить ещё одно изображение","itemFormHeading":"Изображение","fields":{"url":{"label":"Изображение"},"annotation":{"label":"Подпись","placeholder":"Введите подпись","missing":"Без подписи"}}},"Divider":{"heading":"Разделитель"},"Hat":{"heading":"Профиль","fields":{"bgUrl":{"label":"Обложка"},"logoUrl":{"label":"Фото профиля"},"title":{"label":"Заголовок"},"subtitle":{"label":"Подпись"}}},"Heading":{"heading":"Заголовок","fields":{"content":{"label":"Заголовок","placeholder":"Введите заголовок"}}},"Image":{"heading":"Изображение","fields":{"url":{"label":"Изображение"},"externalUrl":{"label":"Ссылка","placeholder":"Вставьте ссылку"},"modal":{"label":"Увеличить при нажатии"}}},"Messengers":{"heading":"Мессенджеры"},"Link":{"heading":"Ссылка"},"Text":{"heading":"Текст","fields":{"content":{"label":"Текст","placeholder":"Введите текст"}}},"Video":{"heading":"Видео","fields":{"url":{"label":"Видео URL (YouTube, Vimeo)","placeholder":"Вставьте ссылку на видео"}}},"Audio":{"heading":"Аудио","fields":{"url":{"label":"Аудио URL (SoundCloud, MixCloud)","placeholder":"Вставьте ссылку на аудио"}}},"List":{"heading":"Список","itemAdd":"Добавить пункт списка","itemAddMore":"Добавить ещё один пункт","itemFormHeading":"Пункт списка","fields":{"content":{"label":"Текст","placeholder":"Введите текст"}}},"Socials":{"heading":"Социальные сети","itemAdd":"Добавить социальную сеть","itemAddMore":"Добавить ещё одну соц. сеть","itemFormHeading":"Социальная сеть","fields":{"url":{"label":"Ссылка на соц. сеть","placeholder":"Вставьте ссылку на соц. сеть"}}}},"View":{"ChooseElement":{"heading":"Выберите блок","subLabels":{"Timer":"Таймер обратного отсчета","Giphy":"Блок Giphy","CustomCode":"Блок HTML код","SubscriptionForm":"Форма","Custom":"Произвольная компоновка","hat":"Обложка и заголовок","messengers":"Кнопки мессенджеров","link":"Кнопка-ссылка","divider":"Разделитель блоков","socials":"Кнопки социальных сетей","heading":"Простой заголовок","text":"Текстовый блок","quote":"Прямая речь","list":"Текстовый список","accordion":"Разворачиваемый список","features":"Список с иконками","image":"Загрузите изображение","imageGallery":"Несколько изображений","video":"Youtube, Vimeo","videoGallery":"Слайдер видео","audio":"SoundCloud, MixCloud","servicesGrid":"Список товаров или услуг"},"proMessage":"* Этот блок доступен в платном тарифе. Вы можете добавить его, но публикация сайта будет недоступна пока вы не подключите платный тариф."},"Elements":{"heading":"Элементы страницы","fieldTip":{"first":"У вас не добавлено ни одного элемента страницы","another":"Хотите добавить ещё один элемент?"}},"Analytics":{"heading":"Аналитика","fieldTip":"Подсказка по аналитике страницы","groups":{"visits":"Просмотров страницы","clicks_messengers":"Клики на мессенджеры","clicks_links":"Клики на ссылки"}}}},"Feedback":{"View":{"Home":{"heading":"Заявки","items":{"list":"Список","settings":"Настройки"}},"List":{"heading":"Список заявок","emptyMessage":"Заявок не найдено","labels":{"loadMore":"Показать больше","contact":"Контакт","date":"Дата","status":"Состояние","state":{"all":"Все","new":"Новый","processing":"В обработке","accepted":"Выполнено","rejected":"Отменено"}}},"Settings":{"heading":"Настройки","items":{"notifications":"Нотификации"}}},"Edit":{"Item":{"heading":"Заявка #{{order}}","labels":{"text":"{{label}}","notes":"Заметки","date":"Дата","name":"Имя","phone":"Телефон","email":"Почта","address":"Адрес доставки","paid":"Оплачено","comment":"Комментарий","price":"Сумма","paymentMethod":"Способ оплаты","orderStatus":"Статус оплаты","orderLink":"Ссылка на оплату","orderItems":"Товары","additional":"Дополнительно","more":"Больше"},"placeholders":{"notes":"Введите заметки о заявке","empty":"Поле не заполнено"}},"Notifications":{"heading":"Нотификации при получении новых заявок"},"Purchase":{"heading":"Смена статуса оплаты","confirmStatusChange":"Вы уверены, что хотите сменить статус оплаты на \\"{{paymentStatus}}\\"?"}}},"Template":{"fields":{"name":{"label":"Название шаблона","placeholder":"Введите название шаблона"},"tags":{"label":"Категории шаблона","placeholder":"+ Добавить категории шаблона"},"public":{"label":"Статус шаблона","published":"Публичный","notPublished":"Обычный"}},"Edit":{"Create":{"heading":"Шаблон страницы","fieldTip":"Подсказка по шаблону страницы"},"Delete":{"heading":"Удаление шаблона","fieldTip":"Вы действительно хотите удалить шаблон? Это действие необратимо."},"Status":{"heading":"Статус шаблона","fieldTip":"Подсказка по статусу шаблона"},"Name":{"heading":"Название шаблона","fieldTip":"Подсказка по названию шаблона"},"Tags":{"heading":"Категории шаблона","fieldTip":"Подсказка по категориям шаблона"}},"View":{"List":{"heading":"Шаблоны","labels":{"published":"Общий шаблон","personal":"Мои шаблоны","workspace":"Шаблоны организации","common":"Общедоступные шаблоны","tags":"Категория"}},"Settings":{"heading":"Настройки шаблона","items":{"name":"Название","status":"Публичный","tags":"Категория"}}},"Header":{"items":{"settings":"Настройки","publish":"Опубликовать","tags":"Категория"}}},"Editor":{"heading":"Визуальный редактор","tip":"Здесь будет FAQ по визуальному редактору","Dashboard":{"header":{"title":"Редактирование","sortTitle":"Режим сортировки","publish":"Опубликовать","share":"Поделиться сайтом","preview":"Предпросмотр"},"items":{"share":"Поделиться страницей","theme":"Внешний вид страницы","settings":"Настройки страницы","sorting":"Сортировка блоков","help":"Помощь","analytics":"Аналитика страницы","publish":"Опубликовать"}},"Help":{"items":{"share":"Поделиться ссылкой на страницу","theme":"Внешний вид страницы","settings":"Настройки страницы","addBlock":"Добавить новый блок на страницу","sort":"Сортировка блоков на странице","analytics":"Аналитика страницы"}},"SortHelp":{"hint":{"label":"Подсказка","tip":"Удерживайте и тащите блок, чтобы изменить его позицию. Пример 👇"},"ok":"Понятно"},"Share":{"heading":"Поделиться сайтом","labels":{"qr":"QR-код","share":"Поделиться"}},"ShareNew":{"heading":"Поделиться сайтом","publishedHeading":"Опубликовано!","publishedSubHeading":"Теперь поделитесь вашей ссылкой","shareSubHeading":"Поделитесь вашей ссылкой","labels":{"addToInstagram":"Добавить в Instagram","addToTikTok":"Добавить в TikTok","copyLink":"Скопировать ссылку","copied":"Скопировано","qr":"QR-код","share":"Поделиться","widget":"Виджет на сайт"}},"SharePublished":{"heading":"Ваш сайт онлайн!","subHeading":"Теперь поделитесь вашей ссылкой.","nav":{"share":"Поделиться","bio":"Добавить в био","view":"Посмотреть"}},"SocialsShareBio":{"title":"Добавить в био"},"EditWebsiteName":{"title":"Редактирование ссылки","save":"Сохранить изменения","domain":{"label":"Свой домен","buttons":{"connect":"Подключить","change":"Изменить"},"notConnected":"Не подключен"}},"ShareQr":{"heading":"QR-код","tip":"Вы можете напечатать свой уникальный QR-код на визитках или листовках","downloadQr":"Скачать QR-код"},"ShareSocial":{"heading":"Поделиться в"},"TikTokShare":{"title":"Добавить в TikTok","steps":{"1":"<b>Скопируйте</b> ссылку на сайт","2":"Откройте TikTok и нажмите на <b>«Изменить Профиль»</b>","3":"Вставьте ссылку в раздел <b>«Веб-Сайт»</b> и <b>сохраните изменения</b>"},"openTikTok":"Открыть TikTok"},"InstagramShareNew":{"title":"Добавить в Instagram","steps":{"1":"<b>Скопируйте</b> ссылку на сайт","2":"Откройте Instagram и нажмите на <b>«Редактировать Профиль»</b>","3":"Вставьте ссылку в раздел <b>«Сайт»</b> и <b>сохраните изменения</b>"},"openInstagram":"Открыть Instagram"},"ShareInstagram":{"heading":"Ссылка в Instagram","step1":"Скопируйте ссылку ☝️ и добавьте её в ваш профиль Instagram","step2":"Вставьте ссылку в поле \'веб-сайт\' в настройках вашего профиля 👇","step3":"Открыть Instagram"},"PageTheme":{"heading":"Темы","fields":{"custom":"Заменить пользовательские стили"},"items":{"add":"Новая тема","auto":"Light/Dark"}},"PageStyling":{"heading":"Внешний вид страницы","items":{"theme":"Тема","backgroundColor":"Цвет фона","backgroundImage":"Фоновое изображение","alignment":"Выравнивание"}},"PublishedMessage":{"heading":"Сайт опубликован","message":"Ваш сайт опубликован! Настало время поделиться им с миром!","button":"Поделиться сайтом"},"NotPublishedMessage":{"heading":"Сайт не опубликован","message":"Сперва ваш сайт нужно запустить в сети. Хотите опубликовать его сейчас?","publish":"Опубликовать сайт","cancel":"Вернуться назад"},"NoBlocksMessage":{"heading":"Ваш сайт пуст","message":"Чтобы опубликовать сайт, вы должны добавить хотя бы один блок. Хотите добавить блок сейчас?","addBlock":"Добавить блок","cancel":"Вернуться назад"},"HasAdvancedBlocksMessage":{"header":"Перейти на тариф Pro","heading":"Перейти на тариф Pro","subHeading":"Вы добавили блоки Pro тарифа. Чтобы опубликовать - перейдите на Pro тариф или удалите эти блоки:","buyPro":"Сайт можно опубликовать только на Pro тарифе. Подробнее о тарифе можно узнать по ссылке внизу 👇","message":"<b>Подключите тариф Pro</b> или <b>удалите эти блоки</b>, чтобы опубликовать ваш сайт.","button":"Перейти на тариф Pro"}},"EmptyPagePreview":{"EmptyPage":{"heading":"Начните заполнять ваш сайт","subHeading":"Нажмите кнопку внизу, чтобы добавить ваш первый блок.","labels":{"pickTemplate":"Выберите шаблон и тему страницы","pick":"Выбрать","or":"или"}},"welcomeTip":{"heading":"Привет 👋","text":"У вас ещё не создано ни одной страницы! Давайте же исправим это недоразумение! 🤓"},"createTip":{"heading":"Движемся дальше 👍","text":"Теперь заполните поля слева и нажмите \\"Сохранить\\". Страница будет создана."},"emptyBlocks":{"heading":"Пустая страница 🤯","text":"Заполните содержимое вашей страницы в разделе \\"Элементы страницы\\" слева","textInConstructor":"Заполните содержимое вашей страницы"}},"labels":{"template":{"create":"Создать шаблон","createNew":"Создать новый шаблон","delete":"Удалить шаблон","cancelDelete":"Отменить удаление"},"website":{"create":"Создать сайт","createNew":"Создать новый сайт","delete":"Удалить сайт","cancelDelete":"Отменить удаление","unnamed":"Безымянный сайт","preview":"Предпросмотр"},"page":{"create":"Создать страницу","createNew":"Создать новую страницу","delete":"Удалить страницу","cancelDelete":"Отменить удаление","unnamed":"Безымянная страница"},"block":{"create":"Добавить блок","createShort":"Добавить","save":"Сохранить изменения","saveShort":"Сохранить","reset":"Сбросить изменения","restyle":"Использовать стиль","delete":"Удалить блок","actions":{"title":"Настройки блока","duplicate":"Дублировать","delete":"Удалить"},"kinds":{"auto-insert":"do not edit or remove his: used for block-kinds auto-generation","Timer":"Таймер","Giphy":"Гифка","CustomCode":"Произвольный HTML код","SubscriptionForm":"Форма","Custom":"Новый кастомный блок","ServicesGrid":"Список товаров","Products":"Каталог товаров","Socials":"Социальные сети","Quote":"Цитата","List":"Список","Audio":"Аудио","VideoGallery":"Видеогалерея","Features":"Преимущества","Accordion":"FAQ","ImageGallery":"Галерея изображений","Divider":"Разделитель","Text":"Текст","Heading":"Заголовок","Messengers":"Мессенджеры","Link":"Ссылка","Image":"Изображение","Video":"Видео","Hat":"Профиль"},"groups":{"common":"Общее","text":"Текст","media":"Медиа","store":"Товары","custom":"Кастомные блоки"}},"item":{"delete":"Удалить","deleteHeading":"Удаление элемента","deleteText":"Вы действительно хотите продолжить? Это действие необратимо.","actions":{"title":"Настройки","duplicate":"Дублировать","delete":"Удалить"}},"link":{"create":"Добавить ссылку","delete":"Удалить ссылку"},"feedback":{"counts":{"new":"{{count}} новых","new_0":"{{count}} новая","new_1":"{{count}} новые","new_2":"{{count}} новых","processing":"{{count}} в обработке","rejected":"{{count}} отменено","accepted":"{{count}} выполнено"}},"addBlocks":"Добавить элементы","changed":"Изменено","asDefault":"По-умолчанию","platform":{"facebook":"Facebook","google":"Google","yandex":"Yandex","tiktok":"TikTok"},"or":"или","text":"Текст","header":"Заголовок","deleteUpload":"Удалить неиспользуемый файл","justUploaded":"(загружен только-что)","deleteBlockHeading":"Удаление блока","deleteBlock":"Вы действительно хотите удалить блок? Это действие необратимо.","published":"Опубликовано","notPublished":"Не опубликовано","timeSeconds":"{{time}} сек.","auto_collection":"Товары/услуги {{count}}"},"messages":{"pageCreated":"Страница создана"},"UploadsGallery":{"heading":"Загрузки","label":"Галерея"},"Gallery":{"filters":{"All":"Все","Images":"Изображения","Backgrounds":"Фоны","Logos":"Лого","Icons":"Иконки","Products":"Фото товаров","Unused":"Неиспользованные"}},"BanBanner":{"heading":"Этот сайт заблокирован","reasonHeading":"Причина:","appeal":"Чтобы оспорить блокировку обратитесь в нашу","link":"службу поддержки","pending":"Модерация в процессе"},"ConvertService":{"heading":"Конвертация в товары","successHeading":"Конвертация завершена","successTip":"Вы теперь можете использовать блок \\"Каталог товаров\\" для отображения конвертированных товаров на сайте","labels":{"convert":"Конвертировать","createCollection":"Создать новую категорию \\"{{name}}\\"","whenFinished":"Что делать по окончанию конвертации:","useCollection":"Добавить товары в категорию","addedToTip":"Товары будут добавлены в новую категорию \\"{{name}}\\"","createBlock":"Создать блок Товары с выбранной категорией","removeOriginal":"Удалить этот блок \\"Список товаров\\""}}}')}}]);
//# sourceMappingURL=31.c60ed2d445c9702e189a.js.map