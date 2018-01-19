//公共的验证信息
var commonValidMsg = {
	missingMsg: 'Это поле необходимо заполнить',
	invalidIpMsg: 'Недопустимый IP-адрес'
},
uploadCommon = {
	uploadFilePrompt: 'Загрузить следующий файл:',
	uploadMsg: 'Пожалуйста, не выключайте питание!',
	uploadText: 'Загрузка данных...',
	uploadSuccess: 'Данные успешно получены!',
	uploadFail: 'Не удалось получить данные, пожалуйста, попробуйте еще раз!'
},
alertMsg = {
	titlePrompt: 'Подсказка',
	titleConfirm: 'Сохранить',
	noChange: 'Не внесены изменения!',
	invalidVal: 'Недопустимое значение!',
	saveSuccess: 'Успешно сохранено!',
	enabledOptionsEmpty: 'Укажите используемые кодеки!',
	codecsConflict: 'iLBC_13_3 и iLBC_15_2 не могут использоваться одновременно!',
	emptyContent: 'Поле не заполнено!',
	invalidDTMF: 'Недопустимый DTMF!',
	webServicesDisable: 'Веб-службы отключены!',
	features: 'Если задан код включения, код отключения не может быть пустым!',
	invalidAccountList: 'Недопустимый список аккаунтов!',
	dialPlanMsg1: 'Пожалуйста, выберите не менее чем одну запись.',
	voiceError1: 'Максимальная задержка должна быть больше минимальной',
	voiceError2: 'Оптимальная задержка должна быть в пределах между максимальной и минимальной задержками',
	fileIsEmpty: 'Не выбран файл!',
	upgradeFileFormateErr: 'Пожалуйста, выберите файл актуализации програмного обеспечения',
	openvpnFile: 'Пожалуйста, выберите файл',
	wallpaperFormatError: 'Название файла должно содержать только латинские буквы, поддерживаются форматы PNG/JPG/BMP',
	systemFileCannotDelete: 'Не можно удалить системные файлы'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'Пожалуйста, не выключайте питание!',
			rebootText: 'Перезагрузка...'
		},
		showProgress: {
			progressTitle: 'Подсказка'
		}
	},
	ErrorInfo: {
		networkError: 'Сетевая ошибка, необходимо проверить!',
		webServerError: 'Ошибка веб-сервера, пожалуйста, попробуйте еще раз!',
		unknownError: 'Неизвестная ошибка!',
		dataNoChanged: 'Не внесены изменения!',
		Error_409: 'Файл с таким названием уже существует.',
		Error_413: 'Файл слишком большой.',

		phoneBusyError: 'Занято, пожалуйста, ожидайте...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: 'Не удалось выйти из системы, пожалуйста, попробуйте еще раз!'
	},
	pluginInit: {
		ok: 'Готово',
		cancel: 'Отмена'
	}
},
status401Html = {
	errorInfo1 : 'У вас нет разрешения на доступ к веб-интерфейсу',
	errorInfo2 : 'Свяжитесь с администратором или попробуйте снова позже.',
	errorInfo3: 'HTTP 401 Нет авторизации'
},
//index.html
indexHtml={
	top:{
		logout: 'Выход',
		languages:  [
			            {langLable: 'Polski',  langCode: 8},
			            {langLable: 'English', langCode : 0},
			            {langLable: 'Pусский',  langCode: 3},
			            {langLable: 'Français', langCode: 1},
			            {langLable: 'Deutsch',  langCode: 11},
			            {langLable: 'Italiano',  langCode: 12},
			            {langLable: 'Português',  langCode: 9},
			            {langLable: 'Español',  langCode: 4},
			            {langLable: '中文(简体)',  langCode: 5},
						{langLable: '中文(繁體)',  langCode: 13},
			            {langLable: 'فارسی',  langCode: 6},
			            //{langLable: 'magyar',  langCode: 7},
			            {langLable: 'Türkçe',  langCode: 10},
			            {langLable: 'עברית',  langCode: 2}
		            ]
	},
	//一级标题
	nav:{
		basic: 'Основные',
		account: 'Аккаунт',
		network: 'Сеть',
		dSSKey: 'Кнопки',
		phone: 'Телефон',
		contacts: 'Контакты',
		security: 'Безопасность'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'Веб-сайт',
		products: 'Изделия',
		support: 'Поддержка',
		download: 'Загрузить',
		contactus: 'Связаться с нами',
		atcomRights: '©2018 ATCOM Все права защищены.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'Статус',
		sWizard: 'Сетевые настройки',
		//Account
		aBasic: 'Основные',
		aCodecs: 'Кодеки',
		aAdvanced: 'Расширенные',
		//NetWork
		nBasic: 'Основные',
		nWifi: 'Wi-Fi',
		nAdvanced: 'Расширенные',
		//DSS key
		dMemory: 'Кнопки DSS',
		dLink: 'Кнопки линии',
		dProgrammable: 'Програм. кнопки',
		dExt: 'Кнопки консоли',
		dAetAdv: 'Настройки консоли',

		//Phone
		pDNDAndForward: 'Переадресация &nbsp;&DND',
		pPrefetence: 'Настройки',
		pFeatures: 'Функции',
		pUpgrade: 'Обновление',
		pAuto: 'Автопровижининг',
		pConfig: 'Конфигурация',
		pRemoteControl: 'Управление из вне',
		pActionUrl: 'Действие URL',
		pDialPlan: 'План набора',
		pVoice: 'Голос',
		pRing: 'Alert Info',
		pTones: 'Мелодии вызова',
		pSms: 'SMS',
		pAction: 'Действие URL',
		pSoftkey: 'Размещение кнопок',
		pPhoneLock: 'Блокировка',
		pSecurity: 'Безопасность',
		pPhoneTr069: 'TR069',
		pDebug: 'Отладка',
		//Contacts
		cContacts: 'Контакты',
		cXMLPhonebook: 'Удал. тел. книга',
		cPhoneCall: 'Журнал звонков',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'Журнал звонков',
		//Security
		sPassword: 'Пароль',
		sStrusted: 'Доверенные сертификаты',
		sServer: 'Серверные сертификаты'
	}
},
statusHtml = {
	version: {
		verTitle: 'Версия',
		fwVer: 'Версия ПО',
		hwVer: 'Сборка',
		product_name: 'модель'
	},
	networkConfig:{
		netConfigTitle: 'IP-протокол',
		internetPortType: 'Версия IP-протокола', /*ipv4 = 1, ipv6 = 2, ipv4 & ipv6 = 3*/
		internType1: 'IPv4',
		internType2: 'IPv6',
		internType3: 'IPv4 & IPv6'
	},
	network: {
		netTitle: 'IPv4',
		internetPort: 'Тип сетевого порта',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Статический IP-адрес',
		ip: 'IP-адрес',
		subnetMask: 'Маска подсети',
		gatewag: 'Шлюз',
		primaryDNS: 'Первичный DNS-сервер',
		secondaryDNS: 'Вторичный DNS-сервер',
		wiredMac: 'Адрес MAC локальной сети ',
		WIFIMac: 'Адрес MAC беспроводной сети ',
		vpnStatus: 'Состояние VPN',
		vpnStatusOpt0: 'Подключение',
		vpnStatusOpt1: 'Отключено',
		vpnStatusOpt2: 'Не удалось подключить',
		vpnStatusOpt3: 'Подключено',
		vpnIp: 'VPN IP'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Тип сетевого порта',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Статический IP-адрес',
		ip: 'IP-адрес',
		networkPrefix: 'Префикс сети',
		gatewag: 'Шлюз',
		primaryDNS: 'Первичный DNS-сервер',
		secondaryDNS: 'Вторичный DNS-сервер'
	},
	tips: {
		netConfigTip: 'Версия IP-протокола телефона.',      
		verTip: 'Текущая версия ПО и сборки телефона.',
		netTip: 'Детали сетевых настроек.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Сеть',
		InternetPort: 'Сетевой порт',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP,Статический DNS-сервер',
		staticIp: 'Статический IP-адрес',

		staticIpSettings: 'Настройки статического IP-адреса',
		ip: 'IP-адрес',
		subnetMask: 'Маска подсети',
		defaultGateway: 'Сетевой шлюз по умолчанию',
		StaticDNSEnable: ' Статический DNS-сервер',
		primaryDNS: 'Первичный DNS',
		secondaryDNS: 'Вторичный DNS',

		staticIpSettingsIPv6: 'Статический IP-адрес для IPv6',
		IPv6Prefix: 'Префикс IPv6',
		StaticDNSEnableIPv6: 'Статический DNS-сервер для IPv6',
    sipSettings: 'Настройка учетной записи',
		accountActive: 'Использование аккаунта',
    disable: 'Выключено',
		enable: 'Включено',
		labelName: 'Описание',
		displayName: 'Отображаемое имя',
		registerName: 'Имя регистрации',
		userName: 'Имя пользователя',
		password: 'Пароль',
		
		sipServer: 'SIP-сервер',
		sipServerPort: 'Порт',
		
		back: 'Назад',
		next: 'Далее',
		
		tips: {
			dhcp: 'Отправка телефоном автоматического запроса на DHCP-сервер для получения IP-адреса, маски подсети, сетевого шлюза, DNS и т.д.',
			staticIp: 'Ручная настройка IP-адреса, маски подсети, сетевого шлюза, DNS и т.д.',
			labelName: 'Название, отображаемое на дисплее данного телефона.',
			displayName: 'Название данного телефона, отображаемое на дисплее телефона вызываемого абонента.',
			registerName: 'Идентификационное имя, которое часто совпадает с именем пользователя.',
			userName: 'Имя пользователя или учетное имя, предоставленное интернет-провайдером.',
			password: 'Пароль доступа к учетной записи, предоставленный интернет-провайдером.',
			sipServer: 'Адрес SIP-сервера, предоставленный интернет-провайдером.'
		}
	},
	common: {
		finish: 'Завершить',
		next: 'Далее'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'Аккаунт №',
		accountNumberOpt1: 'Аккаунт 1',
		accountNumberOpt2: 'Аккаунт 2',
		accountNumberOpt3: 'Аккаунт 3',
		accountNumberOpt4: 'Аккаунт 4',
		accountNumberOpt5: 'Аккаунт 5',
		accountNumberOpt6: 'Аккаунт 6',
		
		registerStatus: 'Статус регистрации',
		
		accountActive: 'Использование аккаунта',
		disable: 'Выключено',
		enable: 'Включено',
		labelName: 'Описание',
		displayName: 'Отображаемое имя',
		registerName: 'Имя регистрации',
		userName: 'Имя пользователя',
		password: 'Пароль',
		
		sipServer: 'SIP-сервер',
		sipServerPort: 'Порт',
		redundancy_proxy: 'Дополнительный SIP-сервер',

		enableOutboundProxyServer: 'Использование исходящий прокси-сервер',
		outboundProxyServer: 'Исходящий прокси-сервер',
		outboundProxyServerPort: 'Порт',
		make_call_without_register: 'Статус Peer to Peer',
		
		verifyServer: 'Проверка сервера TLS',
		transport: 'Протокол передачи данных',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'Продолжение NAT',
		TLSVersion: 'Версия TLS',
		natTraversalOpt1: 'STUN',
		stunServer: 'STUN-сервер',
		port: 'Порт',
		
		voiceMail: 'Голосовая почта',
		anonymousCall: 'Скрыть номер',
		off: 'Выключено',
		on: 'Включено',
		onCode: 'Код включения',
		offCode: 'Код выключения',
		anonymousCallRejection: 'Блокировка анонимных вызовов',
		ringTones: 'Мелодия вызова',
		ringTonesOpt0: 'Стандартная',
		ringTonesOpt1: 'Звонок1.wav',
		ringTonesOpt2: 'Звонок2.wav',
		ringTonesOpt3: 'Звонок3.wav',
		ringTonesOpt4: 'Звонок4.wav',
		ringTonesOpt5: 'Звонок5.wav',
		ringTonesOpt6: 'Звонок6.wav',
		ringTonesOpt7: 'Звонок7.wav',
		ringTonesOpt8: 'Звонок8.wav',
		ringTonesOpt9: 'Звонок9.wav',
		ringTonesOpt10: 'Звонок10.wav',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			labelName: 'Название, отображаемое на дисплее данного телефона.',
			displayName: 'Название данного телефона отображаемое на дисплее телефона вызываемого абонента.',
			registerName: 'Идентификационное имя, которое часто совпадает с именем пользователя.',
			userName: 'Имя пользователя или учетное имя, предоставленное интернет-провайдером.',
			password: 'Пароль доступа к учетной записи, предоставленный интернет-провайдером.',
			sipServer: 'Адрес SIP-сервера, предоставленный интернет-провайдером.',
			enableOutboundProxyServer: 'Используется для обработки сигналов и обеспечивает прохождение потока мультимедийных данных через сетевое устройство защиты или NAT.',
			redundancy_proxy: 'Адрес резервного сервера SIP, предоставленный интернет-провайдером.',
			outboundProxyServer: 'Исходящий прокси-сервер.',
			verifyServer: 'Проверка сервера TLS',
			transport: 'Доступны три опции UDP, TCP, TLS. Зарегистрированные протоколы для передачи пакетов UDP, TCP или TLS, TLS (защита транспортного уровня) зашифрованы.',
			natTraversal: 'Включить/выключить STUN-сервер.',
			stunServer: 'STUN-сервер позволяет NAT-клиентам всех терминалов (таким как ПК с сетевым устройством защиты) совершать телефонные звонки VOIP с помощью провайдера услуг VOIP, находящегося за пределами LAN.',
			voiceMail: 'Номер доступа к голосовой почте для данного пользователя.',
			anonymousCall: 'Включить/выключить функцию скрытого номера.',
			onCode: 'Установка кода включения функции скрытого номера; телефон отправляет данный код в сервер, чтобы включить функцию скрытого номера.',
			offCode: 'Установка кода выключения функции скрытого номера; телефон отправляет данный код в сервер, чтобы выключить функцию скрытого номера.',
			anonymousCallRejection: 'Включить/выключить функцию отклонения анонимных вызовов.',
			onCodeRejection: 'Установка кода включения функции блокировки анонимных номеров; телефон отправляет данный код в сервер, чтобы включить функцию блокировки анонимных номеров.',
			offCodeRejection: 'Установка кода выключения функции блокировки анонимных номеров; телефон отправляет данный код в сервер, чтобы выключить функцию блокировки анонимных номеров.',
			ringTones: 'Установка звонка для данного аккаунта.',
			make_call_without_register: 'Совершать и получать вызовы без регистрации'
		}
	},
	showText: {
		unRegistered: 'Незарегистрировано',
		registered: 'Зарегистрировано'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'Аккаунт №',
		accountNumberOpt1: 'Аккаунт 1',
		accountNumberOpt2: 'Аккаунт 2',
		accountNumberOpt3: 'Аккаунт 3',
		accountNumberOpt4: 'Аккаунт 4',
		accountNumberOpt5: 'Аккаунт 5',
		accountNumberOpt6: 'Аккаунт 6',
		
		audioCodecs: 'Аудиокодеки',
		disableCodecs: 'Неиспользуемые кодеки',
		enableCodecs: 'Используемые кодеки',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'Аккаунт №',
		accountNumberOpt1: 'Аккаунт 1',
		accountNumberOpt2: 'Аккаунт 2',
		accountNumberOpt3: 'Аккаунт 3',
		accountNumberOpt4: 'Аккаунт 4',
		accountNumberOpt5: 'Аккаунт 5',
		accountNumberOpt6: 'Аккаунт 6',
		
		udpKeepAliveMsg: 'Сообщение о поддержании UDP-протокола в активном состоянии',
		disable: 'Выключено',
		enable: 'Включено',
		udpKeepAliveInterval: 'Время поддержания UDP-протокола в активном состоянии (сек.)',
		
		loginExpires: 'Время авторизации истекло (сек.)',
		localSipPort: 'Локальный SIP-порт',
		subscribePeriod: 'Длительность подписки (сек.)',
		
		dtmfType: 'Тип DTMF',
		dtmfTypeOpt0: 'INBAND',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'Полезная нагрузка DTMF (сек.)',
		reliableRetransmission: '100-процентная надежность ретрансляции',
		
		subscribeForMwi: 'Подписаться на MWI',
		mwiSubscribePeriod: 'Время подписки на MWI (сек.)',
		
		useSessionTimer: 'Использование таймера длительности сеанса',
		sessionTimer: 'Таймер длительности сеанса (сек.)',
		refresher: 'Рефрешер',
		
		useUserPhone: 'Использовать user=phone',
		voiceEncryption: 'Шифрование речи (SRTP)',
		off: 'Выключено',
		on: 'Включено',
		ptime: 'PTime (мс)',
		
		blfListUri: 'Перечень и состояние абонентов (BLF) URI',
		derectedCallPickupCode: 'Код перехвата прямого вызова',
		groupCallPickupCode: 'Код перехвата группового вызова',
		
		sipRegRetryTimer: 'Срок истечения выполнения повторной SIP-регистрации',
		earlyMedia: 'Предответное проключение',
		sipServerType: 'Тип SIP-сервера',
		sipServerTypeOpt0: 'Стандартный',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'BroadSoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Код интеркома',      
		conferenceType: 'Тип конференции',         
		localConference: 'Локальная конференция',   
		networkConference: 'Сетевая конференция',    
		conferenceCode: 'Код конференции',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			udpKeepAliveMsg: 'Телефон периодически отправляет UDP-пакеты для поддержания порта в активном состоянии и во избежание закрытия сервером.',
			loginExpires: 'Срок истечения действия журнала регистрации; телефон должен регистрироваться в течение установленного срока, иначе для сервера он будет считаться выключенным.',
			localSipPort: 'Номер порта сервера, использующийся для отправки и получения SIP-пакетов.',
			subscribePeriod: 'Длительность подписки.',
			dtmfType: 'Режим отправки DTMF во время нажатия кнопки с данной цифрой при вызове, включая INBAND, OUTOFBAND(RFC2833) и SIP INFO.',
			reliableRetransmission: 'Включить/выключить передачу PRACK.',
			subscribeForMwi: 'Телефон отправляет пакет-подписку на сервер для подписки на ожидающие сообщения; телефон отправляет такие пакеты-подписки на сервер после его регистрации.',
			useSessionTimer: 'Включить/выключить функцию возобновления сеанса. Если она включена, телефон отправит пакет-приглашение для возобновления сеанса во время вызова.',
			sessionTimer: 'Интервал времени между циклами возобновления сеансов.',
			refresher: 'Сторона возобновления сеанса. Контроль учетных записей UAC: возобновление сеанса со стороны клиента. Безопасность учетных записей UAS: возобновление сеанса со стороны сервера.',
			useUserPhone: 'Если функция включена, отображается надпись "user=phone" в пакете-приглашении SIP-сообщения.',
			voiceEncryption: 'Включить/выключить шифрование голоса(SRTP).',
			ptime: 'Согласование интервала времени между двумя RTP-пакетами текущего используемого кодека.',
			blfListUri: 'Используется для подписки BLF по Broadsoft.',
			sipRegRetryTimer: 'Длительность повторной попытки после неудачно выполненной регистрации.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Интернет-порт',
		IPv4Config: 'Настройка IPv4',
		IPv6Config: 'Настройка IPv6',
		dhcp: 'DHCP',
		staticIp: 'Статический IP-адрес',
		ip: 'IP-адрес',
		subnetMask: 'Маска подсети',
		defaultGateway: 'Сетевой шлюз по умолчанию',
		IPv6Prefix: 'Префикс IPv6',

        StaticDNSEnable: 'Статический DNS',
   	on: 'Включено',
		off: 'Выключено',

		primaryDNS: 'Первичный DNS',
		secondaryDNS: 'Вторичный DNS',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			dhcp: 'Отправить автоматический запрос на DHCP-сервер для получения IP-адреса, маски подсети, сетевого шлюза, DNS и т.д.',
			staticIp: 'Ручная настройка IP-адреса, маски подсети, сетевого шлюза, DNS и т.д.',
			StaticDNSEnable: 'Включение либо отключение DNS в ручном режиме, в случаи когда сетевой порт установлен как DHCP'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Настройки Wi-Fi',
		wifi_on_warning: ' (когда сеть Wi-Fi включена, отсоедините сетевой кабель!)',
		wifi_enable: 'Wi-Fi',
		on: 'Включено',
		off: 'Выключено',
		search_wifi: 'Поиск Wi-Fi',
		wifi_ssid: 'Текущий SSID',
		wifi_key: 'Секретный ключ',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
	},
	showText: {
		close_wifi: 'Закрытие Wi-Fi...',
		open_wifi: 'Открытие Wi-Fi...',
		search_wifi: 'Поиск...',
		wifi_table_header: ['Индекс', 'SSID', 'Сигнал', 'Выбрать'],
		wifi_list_title: 'Внесение Wi-Fi в список',
		submitting: 'Отправка...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Использование',
		disable: 'Выключено',
		enable: 'Включено',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Приоритет',
		vlanPc: 'ПК',
		vlanPcActive: 'Использование',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Приоритет',
		
		portLink: 'Порты подключения',
		wanPortLink: 'Порт WAN',
		wanPortLinkOption0: 'Автосогласование',
		wanPortLinkOption1: 'Полнодуплексная связь 10Мб/с',
		wanPortLinkOption2: 'Полнодуплексная связь 100Мб/с',
		wanPortLinkOption3: 'Полудуплексная связь 10Мб/с',
		wanPortLinkOption4: 'Полудуплексная связь 100Мб/с',
		wanPortLinkOption5: 'Полудуплексная связь 1000Мб/с',
		wanPortLinkOption6: 'Полнодуплексная связь 1000Мб/с',
			
		pcPortLink: 'Порт подключения к ПК',
		pcPortLinkOption0: 'Автосогласование',
		pcPortLinkOption1: 'Полнодуплексная связь 10Мб/с',
		pcPortLinkOption2: 'Полнодуплексная связь 100Мб/с',
		pcPortLinkOption3: 'Полудуплексная связь 10Мб/с',
		pcPortLinkOption4: 'Полудуплексная связь 100Мб/с',
		
		slaccEnable: 'Статус ICMPv6',
		vpn: 'VPN',
		importFile: 'Записать',
		importStr: 'Импорт',
		
		voiceQos: 'Голосовой QoS',
		sipQos: 'SIP QoS',
		
		localRtpPort: 'Локальный RTP-порт',
		maxRTPPort: 'Максимальный RTP-порт',
		minRTPPort: 'Минимальный RTP-порт',
		
		webServer: 'Веб-интерфейс',
		httpPort: 'Порт Http',
		httpsPort: 'Порт Https',
		webServerType: 'Тип',
		webServerTypeOption0: 'Выключено',
		webServerTypeOption1: 'Только http',
		webServerTypeOption2: 'Только https',
		webServerTypeOption3: 'http и https',

        span_to_pc: 'Дублирование трафика',
        sys_span_to_pc_port: 'Дублировать в порт PC',

		lldp: 'LLDP',
		cdp: 'CDP',
		package_interval: 'Интервал пакетов',

		x_802_1x: '802.1X',
		x_802_1x_mode: 'Режим',
		x_802_1x_mode0: 'Выключено',
		x_802_1x_mode1: 'EAP-MD5',
		x_802_1x_mode2: 'EAP-TLS',
		x_802_1x_mode3: 'EAP-PEAP/MSCHAPv2',
		x_802_1x_mode4: 'EAP-TTLS/EAP-MSCHAPv2',
		x_802_1x_mode5: 'EAP-PEAP/GTC',
		x_802_1x_mode6: 'EAP-TTLS/EAP-GTC',
		x_802_1x_mode7: 'EAP-FAST',
		x_802_1x_anonymous_identity: 'Анонимная идентификация',
		x_802_1x_identity: 'Идентификация',
		x_802_1x_password: 'ПарольMD5',
		x_802_1x_ca_cert: 'Сертификаты CA',
		x_802_1x_device_cert: 'Сертификаты устройства',
    x_802_1x_upload: 'Заинсталируй',

		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			lldp: 'LLDP передает информацию в формате пакетов, которые называються LLDP. Дата (LLDPDUs) LLDPDUs состоит с набора елементов Type-Length-Value (TLV), из которых каждый имеет подробный тип информации о устройстве либо о порте передач той информации ',
			cdp: 'CDP (Cisco Discovery Protocol) позволяет IP телефоном получать информацию с других устройств непосредственно подключеных к сети и использываемых также тот протокол и также отправлять информацию к тем устройствам и сохранять информацию о них',
			vlan: 'Изменения в конфигурации VLAN, требуют нового включения устройства',
			portLink: 'Режимы сетевых интерфейсов',
      vpn: ' Настройки VPN, используеться для специальной настройки.',
			voiceQos: 'При недостаточной пропускной способности сети, резервный канал обеспечивает приоритет пропуску трафика.',
			localRtpPort: 'Определение порта голосовой передачи.',
			x_802_1x: 'Настройки способа регистации 802.1x.',
			webServer: 'Определение типа доступа к веб-интерфейсу и порту.',
			slaccEnable: 'Включить/выключить возможность получения сетевых настроек IPv6 через телефон методом SLAAC (Stateless Address Autoconfiguration).'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Кнопка',
		type: 'Тип',
		value: 'Значение',
		label: 'Описание',
		account: 'Аккаунт',
		ext: 'Функция',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: '№ ',

		keyTypeOpt0: 'По умолчанию',
		keyTypeOpt1: 'Линия',
		keyTypeOpt2: 'Быстрый набор',
		keyTypeOpt4: 'Сообщение',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Список BLF',
		keyTypeOpt9: 'Прямой перехват',
		keyTypeOpt10: 'Групповой перехват',
		keyTypeOpt11: 'Парковка вызова',
		keyTypeOpt12: 'Селектор',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Конференц-связь',
		keyTypeOpt15: 'Переадресация',
		keyTypeOpt16: 'Перенаправление',
		keyTypeOpt17: 'Удержание',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Повторный набор',
		keyTypeOpt20: 'Контакты',
		keyTypeOpt21: 'Возврат вызова',
		keyTypeOpt22: 'Префикс',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Исполнено',
		keyTypeOpt26: 'Получено',
		keyTypeOpt27: 'Неполучно',
		keyTypeOpt28: 'Передано',
		keyTypeOpt29: 'Контакт',
		keyTypeOpt30: 'Меню',
		keyTypeOpt31: 'Неприменимо',
		keyTypeOpt32: 'История',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Голосовая почта',
		keyTypeOpt35: 'Сделай тише',
		keyTypeOpt36: 'Логин',
		keyTypeOpt37: 'Анулируй',
		keyTypeOpt38: 'Рассылка',
		keyTypeOpt39: 'Список рассылки',
		
		accountNumberOpt1: 'Аккаунт 1',
		accountNumberOpt2: 'Аккаунт 2',
		accountNumberOpt3: 'Аккаунт 3',
		accountNumberOpt4: 'Аккаунт 4',
		accountNumberOpt5: 'Аккаунт 5',
		accountNumberOpt6: 'Аккаунт 6',
		accountNumberOpt8: 'По умолчанию',
		
		GroupPickup: 'Перехватить',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Кнопка',
		type: 'Тип',
		value: 'Значение',
		label: 'Описание',
		account: 'Аккаунт',
		ext: 'Функция',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Кнопки линии',
		
		keyTypeOpt0: 'По умолчанию',
		keyTypeOpt1: 'Линия',
		keyTypeOpt2: 'Быстрый набор',
		keyTypeOpt4: 'Сообщение',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Список BLF',
		keyTypeOpt9: 'Прямой захват',
		keyTypeOpt10: 'Групповой захват',
		keyTypeOpt11: 'Парковка вызова',
		keyTypeOpt12: 'Селектор',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Конференцсвязь',
		keyTypeOpt15: 'Перенаправление',
		keyTypeOpt16: 'Переадресация',
		keyTypeOpt17: 'Удержание',
		keyTypeOpt18: 'Не беспокоить',
		keyTypeOpt19: 'Повторный набор',
		keyTypeOpt20: 'Директорий',
		keyTypeOpt21: 'Возврат вызова',
		keyTypeOpt22: 'Префикс',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Исполнено',
		keyTypeOpt26: 'Получено',
		keyTypeOpt27: 'Неполучно',
		keyTypeOpt28: 'Передано',
		keyTypeOpt29: 'Контакт',
		keyTypeOpt30: 'Меню',
		keyTypeOpt31: 'Неприменимо',
		keyTypeOpt32: 'История',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Голосовая почта',
		keyTypeOpt35: 'Сделай тише',
		keyTypeOpt36: 'Логин',
		keyTypeOpt37: 'Анулируй',
		keyTypeOpt38: 'рассылки',
		keyTypeOpt39: 'Список рассылки',
		
		accountNumberOpt1: 'Аккаунт 1',
		accountNumberOpt2: 'Аккаунт 2',
		accountNumberOpt3: 'Аккаунт 3',
		accountNumberOpt4: 'Аккаунт 4',
		accountNumberOpt5: 'Аккаунт 5',
		accountNumberOpt6: 'Аккаунт 6',
		accountNumberOpt8: 'По умолчанию',
		
		GroupPickup: 'Перехватить',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Кнопка',
		type: 'Тип',
		value: 'Значение',
		label: 'Описание',
		account: 'Аккаунт',

		programKeys: ['Без звука', 'Удержание', 'Повторный набор', 
		              'Вверх', 'Вниз', 'Влево', 'Вправо', 'Отмена', 'Готово', 
		              'Функциональная кнопка 1', 'Функциональная кнопка 2', 'Функциональная кнопка 3', 'Функциональная кнопка 4'],

		programKeys_A1x: ['Без звука', 'Удержание', 'Повторный набор', 
		              'Вверх', 'Вниз', 'Влево', 'Вправо', 'Отмена', 'Готово', 
		              'Функциональная кнопка 1', 'Функциональная кнопка 2', 'Функциональная кнопка 3'],

		programKeys_A2x: ['Без звука', 'Удержание', 'Повторный набор', 
		              'Вверх', 'Вниз', 'Влево', 'Вправо', 'Отмена', 'Готово', 
		              'Функциональная кнопка 1', 'Функциональная кнопка 2', 'Функциональная кнопка 3'],

		programKeys_CT11: ['Без звука', 
		              'Вверх', 'Вниз', 
		              'Функциональная кнопка 1', 'Функциональная кнопка 2', 'Функциональная кнопка 3', 'Функциональная кнопка 4'],
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Линия',
		keyTypeOpt2: 'Быстрый набор',

		keyTypeOpt4: 'Сообщение',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Список BLF',
		keyTypeOpt9: 'Прямой перехват',
		keyTypeOpt10: 'Групповой перехват',
		keyTypeOpt11: 'Парковка вызова',
		keyTypeOpt12: 'Селектор',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Конференц-связь',
		keyTypeOpt15: 'Перенаправление',
		keyTypeOpt16: 'Переадресация',
		keyTypeOpt17: 'Удержание',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Повторный набор',
		keyTypeOpt20: 'Контакты',
		keyTypeOpt21: 'Возврат вызова',
		keyTypeOpt22: 'Префикс',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Исполнено',
		keyTypeOpt26: 'Получено',
		keyTypeOpt27: 'Неполучно',
		keyTypeOpt28: 'Передано',
		keyTypeOpt29: 'Контакт',
		keyTypeOpt30: 'Меню',
		keyTypeOpt31: 'Неприменимо',
		keyTypeOpt32: 'История',
		keyTypeOpt33: 'Статус',
		keyTypeOpt34: 'Голосовая почта',
		keyTypeOpt35: 'Сделай тише',
		keyTypeOpt36: 'Логин',
		keyTypeOpt37: 'Анулируй',
		keyTypeOpt38: 'рассылки',
		keyTypeOpt39: 'Список рассылки',
		
		accountNumberOpt1: 'Аккаунт 1',
		accountNumberOpt2: 'Аккаунт 2',
		accountNumberOpt3: 'Аккаунт 3',
		accountNumberOpt4: 'Аккаунт 4',
		accountNumberOpt5: 'Аккаунт 5',
		accountNumberOpt6: 'Аккаунт 6',
		accountNumberOpt8: 'По умолчанию',
		
		GroupPickup: 'Перехвачивание группы',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	}	
},
aetAdvHtml = {
	form1: {
		networkSetting: 'Сетевые настройки консоли',
		innerNet: 'Локальная сеть',
		InternetPort: 'Интернет-порт',
		dhcp: 'DHCP',
		staticIp: 'Статический IP-адрес',
		ip: 'IP-адрес',
		subnetMask: 'Маска подсети',
		defaultGateway: 'Сетевой шлюз по умолчанию',
	        StaticDNSEnable: 'Статический DNS',
   		on: 'Включено',
		off: 'Выключено',
		primaryDNS: 'Первичный DNS',
		secondaryDNS: 'Вторичный DNS',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',

		tips: {
			innerNet: 'Локальная сеть',
			dhcp: 'Отправить автоматический запрос на DHCP-сервер для получения IP-адреса, маски подсети, сетевого шлюза, DNS и т.д.',
			staticIp: 'Ручная настройка IP-адреса, маски подсети, сетевого шлюза, DNS и т.д.',
			StaticDNSEnable: 'Включение либо отключение DNS в ручном режиме, в случаи когда сетевой порт установлен как DHCP'
		}
	}
},
extKeyHtml = {
	form1: {
		linkControl: 'Управление консолью',
		linkableDivice: 'Подкючена консоль',
		key: 'Кнопка',
		type: 'Тип',
		value: 'Значение',
		label: 'Описание',
		account: 'Кнопка',
		ext: 'Функция',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: '№ ',
		
		keyTypeOpt0: 'По умолчанию',
		keyTypeOpt1: 'Линия',
		keyTypeOpt2: 'Быстрый набор',
		keyTypeOpt4: 'Сообщение',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Список BLF',
		keyTypeOpt9: 'Прямой захват',
		keyTypeOpt10: 'Групповой захват',
		keyTypeOpt11: 'Парковка вызова',
		keyTypeOpt12: 'Селектор',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Конференц-связь',
		keyTypeOpt15: 'Перенаправление',
		keyTypeOpt16: 'Переадресация',
		keyTypeOpt17: 'Удержание',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Повторный набор',
		keyTypeOpt20: 'Контакты',
		keyTypeOpt21: 'Возврат вызова',
		keyTypeOpt22: 'Префикс',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Исполнено',
		keyTypeOpt26: 'Получено',
		keyTypeOpt27: 'Неполучено',
		keyTypeOpt28: 'Передано',
		keyTypeOpt29: 'Контакт',
		keyTypeOpt30: 'Меню',
		keyTypeOpt31: 'Неприменимо',
		keyTypeOpt32: 'История',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Голосовая почта',
		keyTypeOpt35: 'Сделай тише',
		keyTypeOpt36: 'Логин',
		keyTypeOpt37: 'Анулируй',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Аккаунт 1',
		accountNumberOpt2: 'Аккаунт 2',
		accountNumberOpt3: 'Аккаунт 3',
		accountNumberOpt4: 'Аккаунт 4',
		accountNumberOpt5: 'Аккаунт 5',
		accountNumberOpt6: 'Аккаунт 6',
		accountNumberOpt8: 'По умолчанию',
		
		GroupPickup: 'Перехвачивание группы',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'ID-номер консоли, который отображается в статусе устройства.'
		}
	
},
extKeyBackHtml = {
	noLink: 'Консоль не подключена! Сперва ее подключите, а затем обновите эту страницу.'	
},
phonePreferenceHtml = {
	form1: {
		timeZoneDaylightMap: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
		timeZoneOptsIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 108, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107],
		timeZoneOpts: ['-11 Samoa',
		              
		              '-10 United States-Hawaii-Aleutian',
		              '-10 United States-Alaska-Aleutian',
		              
		              '-9 United States-Alaska Time',
		              
		              '-8 Canada(Vancouver,Whitehorse)',
		              '-8 Mexico(Tijuana,Mexicali)',
		              '-8 United States-Pacific Time',
		              
		              '-7 Canada(Edmonton,Calgary)',
		              '-7 Mexico(Mazatlan,Chihuahua)',
		              '-7 United States-Mountain Time',
		              '-7 United States-MST no DST',
		              
		              '-6 Canada-Manitoba(Winnipeg)',
		              '-6 Chile(Easter Islands)',
		              '-6 Mexico(Mexico City,Acapulco)',
		              '-6 United States-Central Time',
		              
		              '-5 Bahamas(Nassau)',
		              '-5 Canada(Montreal,Ottawa,Quebec',
		              '-5 Cuba(Havana)',
		              '-5 United States-Eastern Time',
		              
		              '-4:30 Venezuela(Caracas)',
		              
		              '-4 Canada(Halifax,Saint John)',
		              '-4 Chile(Santiago)',
		              '-4 Paraguay(Asuncion)',
		              '-4 United Kingdom-Bermuda(Bermuda)',
		              '-4 United Kingdom(Falkland Islands)',
		              '-4 Trinidad&Tobago',
		              
		              '-3:30 Canada-New Foundland(St.Johns)',
		              
		              '-3 Denmark-Greenland(Nuuk)',
		              '-3 Argentina(Buenos Aires)',
		              '-3 Brazil(no DST)',
		              '-3 Brazil(DST)',
		              
		              '-2 Brazil(no DST)',
		              
		              '-1 Portugal(Azores)',
		              
		              '0 GMT',
		              '0 Greenland',
		              '0 Denmark-Faroe Islands (Torshaven)',
		              '0 Ireland (Dublin)',
		              '0 Portugal (Lisboa,Porto,Funchal)',
		              '0 Spain-Canary Islands (Las Palmas)',
		              '0 United Kingdom (London)',
		              '0 Morocco',
		              
		              '+1 Albania (Tirane)',
		              '+1 Austria (Vienna)',
		              '+1 Belgium (Brussels)',
		              '+1 Caicos',
		              '+1 Chatam',
		              '+1 Croatia (Zagreb)',
		              '+1 Czech Republic (Prague)',
		              '+1 Denmark (Kopenhaven)',
		              '+1 France (Paris)',
		              '+1 Germany (Berlin)',
		              '+1 Hungary (Budapest)',
		              '+1 Italy (Rome)',
		              '+1 Luxembourg (Luxembourg)',
		              '+1 Makedonia (Skopje)',
		              '+1 Netherlands (Amsterdam)',
		              '+1 Namibia (Windhoek)',
			      '+1 Poland(Warsaw)',
		              
		              '+2 Estonia (Tallinn)',
		              '+2 Finland (Helsinki)',
		              '+2 Gaza Strip (Gaza)',
		              '+2 Greece (Athens)',
		              '+2 Israel (Tel Aviv)',
		              '+2 Jordan (Amman)',
		              '+2 Latvia (Riga)',
		              '+2 Lebanon (Beirut)',
		              '+2 Moldova (Kishinev)',
		              '+2 Russia (Kaliningrad)',
		              '+2 Romania (Bucharest)',
		              '+2 Syria (Damascus)',
		              '+2 Turkey (Ankara)',
		              '+2 Ukraine (Kyiv, Odessa)',
		              
		              '+3 East Africa Time',
		              '+3 Iraq (Baghdad)',
		              '+3 Russia (Moscow)',
		              
		              '+3:30 Iran (Teheran)',
		              
		              '+4 Armenia (Yerevan)',
		              '+4 Azerbaijan (Baku)',
		              '+4 Georgia (Tbilisi)',
		              '+4 Kazakhstan (Aqtau)',
		              '+4 Russia (Samara)',
		              
		              '+4:30 Afghanistan (Kabul)',
		              
		              '+5 Kazakhstan (Aqtobe)',
		              '+5 Kyrgyzstan (Bishkek)',
		              '+5 Pakistan (Islamabad)',
		              '+5 Russia (Chelyabinsk)',
		              
		              '+5:30 India (Calcutta)',
		              
		              '+5:45 Nepal (Kathmandu)',
		              
		              '+6 Kazakhstan (Astana, Almaty)',
		              '+6 Russia(Novosibirsk,Omsk)',
		              
		              '+6:30 Myanmar (Rangoon)',
		              
		              '+7 Russia (Krasnoyarsk)',
		              '+7 Thailand (Bangkok)',
		              
		              '+8 China (Beijing)',
		              '+8 Singapore (Singapore)',
		              '+8 Australia (Perth)',
		              
		              '+9 Korea (Seoul)',
		              '+9 Japan (Tokyo)',
		              
		              '+9:30 Australia (Adelaide)',
		              '+9:30 Australia (Darwin)',
		              
		              '+10 Australia (Sydney,Melbourne,Canberra)',
		              '+10 Australia (Brisbane)',
		              '+10 Australia (Hobart)',
		              '+10 Russia (Vladivostok)',
		              
		              '+10:30 Australia (Lord Howe Islands)',
		              
		              '+11 New Caledonia (Noumea)',
		              
		              '+12 New Zeland (Wellington,Auckland)',
		              
		              '+12:45 New Zeland (Chatham Islands)',
		              
		              '+13 Tonga (Nukualofa)'],
		dhcpTime: 'Время DHCP',
		disable: 'Выключено',
		enable: 'Включено',
		auto: 'Автоматически',
		timeZone: 'Часовой пояс',
		primaryNtp: 'Первичный NTP-сервер',
		secondaryNtp: 'Вторичный NTP-сервер',
		updateInterval: 'Период синхронизации (сек.)',
		daylight: 'Переход на летнее время',
		fixedType: 'Фиксированный тип',
		fixedTypeOpt0: 'По дате',
		fixedTypeOpt1: 'По неделе',
		startMonth: 'Начальный месяц',
		January: 'Январь',
		February: 'Февраль',
		March: 'Март',
		April: 'Апрель',
		May: 'Май',
		June: 'Июнь',
		July: 'Июль',
		August: 'Август',
		September: 'Сентябрь',
		October: 'Октябрь',
		November: 'Ноябрь',
		December: 'Декабрь',
		startDate: 'Начальная дата',
		startHourDay: 'Начальный час дня',
		startDayWeek: 'Начальный день недели',
		Sunday: 'Воскресенье',
		Monday: 'Понедельник',
		Tuesday: 'Вторник',
		Wednesday: 'Среда',
		Thursday: 'Четверг',
		Friday: 'Пятница',
		Saturday: 'Суббота',
		startWeekMonth: 'Начальная неделя месяца',
		firstInMonth: 'Первая в месяце',
		secondInMonth: 'Вторая в месяце',
		thirdInMonth: 'Третья в месяце',
		fourthInMonth: 'Четвертая в месяце',
		lastInMonth: 'Последняя в месяце',
		stopMonth: 'Конечный месяц',
		stopDate: 'Конечная дата',
		stopHourDay: 'Конечный час дня',
		stopDayWeek: 'Конечный день недели',
		stopWeekMonth: 'Конечная неделя месяца',
		offset: 'Переход (мин.)',
		manualTime: 'Ручная настройка времени',
		dateYmd: 'Дата',
		autoDate: 'Текущая дата',
		timeHms: 'Время',
		autoTime: 'Текущее время',
		timeFormat: 'Формат времени',
		timeFormatOpt0: '12 часов',
		timeFormatOpt1: '24 часа',
		dateFormat: 'Формат даты',
		backlightTime: 'Длительность работы подсветки',
		backlightTimeOpt0: 'Включено постоянно',
		backlightTimeOpt1: '1 мин',
		backlightTimeOpt2: '2 мин',
		backlightTimeOpt3: '5 мин',
		backlightTimeOpt4: '10 мин',
		backlightTimeOpt5: '30 мин',
		screensaver_timeout: 'Заставка',
		screensaver_timeoutOpt0: 'выкл.',
		screensaver_timeoutOpt1: '1 мин',
		screensaver_timeoutOpt2: '2 мин',
		screensaver_timeoutOpt3: '5 мин',
		screensaver_timeoutOpt4: '10 мин',
		screensaver_timeoutOpt5: '30 мин',
		backlightLevel: 'Уровень подсветки дисплея',
		slaveBacklightLevel: 'Уровень подсветки подчиненного дисплея',
		expandBacklightLevel: 'Уровень подсветки консоли',
		slaveLcdContract: 'Подсветка подчиненного дисплея',
		ringTones: 'Мелодия вызова',
		ringTonesOpt1: 'Звонок1.wav',
		ringTonesOpt2: 'Звонок2.wav',
		ringTonesOpt3: 'Звонок3.wav',
		ringTonesOpt4: 'Звонок4.wav',
		ringTonesOpt5: 'Звонок5.wav',
		ringTonesOpt6: 'Звонок6.wav',
		ringTonesOpt7: 'Звонок7.wav',
		ringTonesOpt8: 'Звонок8.wav',
		ringTonesOpt9: 'Звонок9.wav',
		ringTonesOpt10: 'Звонок10.wav',
		replaceRingTone: 'Изменить звонок',
		wallpaper: 'Обои',
		delWallpaper: 'Удалить',
		uploadWallpaper: 'Загрузить',
		cancelWallpaper: 'Отмена',
		screensaver: 'Заставки',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			dhcpTime: 'Включить/выключить обновление времени IP телефона согласно с временем сервера DHCP',
			replaceRingTone: 'Рекомендуемый формат звукового файла: 16-бит wave, размер менее 800 kB для телефона с цветным дисплеем и менее 300 kB для телефона с монохромным дисплеем.',
			timeZone: 'Выбор соответствующего часового пояса.',
			updateInterval: 'Установка периода синхронизации часов данного телефона с сервером.',
			daylight: 'Настройки метода перехода на летнее время.',
			manualTime: 'Включить/выключить функцию настроек вручную.',
			timeFormat: 'Установка 12- или 24-часового формата времени.',
			dateFormat: 'Установка формата отображения даты.',
			backlightTime: 'Установка времени работы подсветки.',
			screensaver_timeout: 'Установка времени, по истечении которого появится заставка.',
			backlightLevel: 'Регулировка яркости подсветки телефона.',
			ringTones: 'Настройка мелодии вызова.',
			pictureSize: 'Рекомендованное разширение файла 461x278 пикселя, размер файла меньше 500 KB'  
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Выключено',
		enable: 'Включено',
		off: 'Выключено',
		on: 'Включено',
		forward: 'Переадресация',
		always: 'Безусловная',
		busy: 'Если занято',
		noAnswer: 'Если не отвечает',
		afterRingTime: 'Время ожидания, если не отвечает (сек.)',
		
		target: 'Кому',
		onCode: 'Код включения',
		offCode: 'Код выключения',
		
		dnd: 'Не беспокоить (DND)',
		dndOnCode: 'Код включения DND',
		dndOffCode: 'Код выключения DND',
		authNum: 'Разрешенные номера (через запятую)',
		
		generalInfo: 'Общая информация',
		liveDialpad: 'Функция автодозвона',
		interDigitTime: 'Интервал между сериями набора (сек.)',
		autoAnswer: 'Автоответ',
		autoAnswerDelay: 'Опоздание автоответа (сек.)',
		ignoreMissedCall: 'Игнорируй пропущенные вызовы',
		callWaiting: 'Ожидающий вызов',
		hotline: 'Экстренная связь',
		hotlineTimeout: 'Длительность вызова по экстренной связи (0~180 сек.)',
		keyAsSend: 'Кнопка отправки вызова',
		dialNowTimeout: 'Длительность ускоренного набора (сек.)',
		busyToneTimer: 'Таймер сигнала "Занято" (сек.)',
		returnCodeWhenRefuse: 'Код возврата при сбросе',
		returnCodeWhenDnd: 'Код возврата при DND',
		r404: '404 (Не найден)',
		r480: '480 (Временно недоступен)',
		r486: '486 (Занято)',
		rfc2543Hold: 'Удержание RFC 2543',
		useOutboundProxyInDialog: 'Использовать исходящий прокси-сервер в Dialog',
		loginTimeout: 'Таймаут веб-сессии (1~1000 мин.)',
		hidedtmf: 'Скрыть DTMF',
		multicastCodec: 'Кодек для рассылки (Multicast)',
		watchdog: 'Сторожевой таймер',
		
		audioSettings: 'Настройки аудио',
		callWaitingTone: 'Сигнал оповещения об ожидающем вызове',
		headset: 'Уровень громкости сигнала в наушниках',
		handset: 'Уровень громкости сигнала в трубке',
		handfree: 'Уровень громкости сигнала гарнитуры',
		ringer: 'Уровень громкости звонка',
		headsetSend: 'Звукочастотная выходная мощность наушников',
		handsetSend: 'Звукочастотная выходная мощность трубки',
		handfreeSend: 'Звукочастотная выходная мощность гарнитуры',
		ringerDeviceForHeadset: 'Звонок наушников',
		ringerDeviceForHeadsetOpt0: 'Использовать громкоговоритель',
		ringerDeviceForHeadsetOpt1: 'Использовать наушники',
		
		transferSettings: 'Перенаправление',
		blindTransferOnHook: 'Перенаправление вызовов без анонсирования',
		attendedTransferOnHook: 'Перенаправление вызовов с анонсированием',
		transferOnConHangUp: 'Перенаправление по окончании конференц-связи',
		transferModeViaDsskey: 'Режим перенаправления через кнопку DSS',
		transferModeViaDsskeyOpt0: 'Новый вызов',
		transferModeViaDsskeyOpt1: 'Перенаправление с анонсированием',
		transferModeViaDsskeyOpt2: 'Перенаправление без анонсирования',
		
		callPickup: 'Перехват вызова',
		directCallPickup: 'Перехват прямого вызова',
		directCallPickupCode: 'Код перехвата прямого вызова',
		groupCallPickup: 'Перехват группового вызова',
		groupCallPickupCode: 'Код перехвата группового вызова',
		
		accept_sip_trust_server_only: 'Принимать вызовы только с определенного сервера SIP',
		recordUserId: 'ID пользователя который записывает',
		extFunction: 'Порт EXPAN',
		RET: 'Консоль',
		EHS: 'Беспроводная гарнитура EHS',

		holdOnConference: 'Удерживаник конференции на время добавления учасника',

		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			forward: 'Установка переадресации вызовов.',
			alwaysTarget: 'Номер, на который будут поступать переадресованные вызовы.',
			alwaysOnCode: 'Код включения функции переадресации всех входящих вызовов; телефон напрямую отсылает данный код для включения этой функции.',
			alwaysOffCode: 'Код выключения функции переадресации всех входящих вызовов; телефон напрямую отсылает данный код для выключения этой функции.',
			busyTarget: 'Номер, на который будут поступать переадресованные вызовы.',
			busyOnCode: 'Код включения функции переадресации входящего вызова, если абонент занят; телефон напрямую отсылает данный код для включения этой функции.',
			busyOffCode: 'Код выключения функции переадресации входящего вызова, если абонент занят; телефон напрямую отсылает данный код для выключения этой функции.',
			afterRingTime: 'Длительность ожидания переадресации на другой номер, если абонент не отвечает.',
			noAnswerTarget: 'Номер, на который будут поступать переадресованные вызовы.',
			noAnswerOnCode: 'Код включения функции переадресации входящего вызова, если абонент не отвечает; телефон напрямую отсылает данный код для включения этой функции.',
			noAnswerOffCode: 'Код выключения функции переадресации входящего вызова, если абонент не отвечает; телефон напрямую отсылает данный код для выключения этой функции.',
			
			dndOnCode: 'Код включения функции DND; телефон напрямую отсылает данный код для включения этой функции.',
			dndOffCode: 'Код выключения функции DND; телефон напрямую отсылает данный код для выключения этой функции.',
			
			liveDialpad: 'Включить/выключить функцию автодозвона на пользовательском интерфейсе.',
			interDigitTime: 'Время задержки автодозвона.',
			autoAnswer: 'Включить/выключить функцию автоприема вызовов.',
			autoAnswerDelay: 'Усановка времени (в сек.), после чего телефон принимает вызовы автоматически.',
			callWaiting: 'Обслуживание ожидающих вызовов.',
			hotline: 'Укажите номера телефона экстренной связи.',
			hotlineTimeout: 'Укажите длительность вызова по экстренной связи.',
			keyAsSend: 'Укажите кнопку отправки вызова.',
			dialNowTimeout: 'Интервал для DialNow.',
			busyToneTimer: 'Сигнал "занято" после завершения вызова.',
			returnCodeWhenRefuse: 'Создание ответного сообщения при отклонении вызова.',
			returnCodeWhenDnd: 'Создание ответного сообщения при включении функции "Не беспокоить".',
			rfc2543Hold: 'Два типа стандарта удержания, требуется поддержка сервера.',
			useOutboundProxyInDialog: 'Включение/выключение исходящего прокси-сервера при разговоре.',
			loginTimeout: 'Установка времени опоздания соединения с гарячей линией. keyAsSend: Установы клавишу отправки который подтверждает конец набора номера',
			acceptSipTrustServerOnly: 'Вкл./выкл. принятие телефоном только SIP сообщений с SIP серверов и исходящего прокси-сервера .',
			callWaitingTone: 'Установка типа звукового оповещения о новом входящем вызове во время разговора (функция ожидания вызова включена).',
			ringerDeviceForHeadset: 'Выбор канала передачи звонка вызова.',

			blindTransferOnHook: 'Включить/выключить функцию перенаправления без анонсирования.',
			attendedTransferOnHook: 'Включить/выключить функцию перенаправления с анонсированием.',
			transferOnConHangUp: 'Включить/выключить функцию перенаправления двум другим абонентам конференц-связи после того, когда ее инициатор положил трубку.'
		}
	}	
},
phoneDNDAndForwardHtml = {
	form1: {
		phone: 'Все аккаунты', 
		custom: 'Выбранный аккаунт',  
		forward: 'Переадресация',
		emergency: 'Исключения', 
		authNum: 'Разрешенные номера (через запятую)',
		mode: 'Режим',
		account: 'Аккаунт',
		disable: 'Выключено',
		enable: 'Включено',
		off: 'Выключено',
		on: 'Включено',
		always: 'Безусловная',
		busy: 'Если занято',
		noAnswer: 'Если не отвечает',
		afterRingTime: 'Время ожидания, если не отвечает (сек.)',
		
		target: 'Кому',
		onCode: 'Код включения',
		offCode: 'Код выключения',
		

		dndStatus: 'Статус DND',
		dnd: 'Не беспокоить (DND)',
		dndOnCode: 'Код включения DND',
		dndOffCode: 'Код выключения DND',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
				forward: 'Установка переадресации вызовов.',
			alwaysTarget: 'Номер, на который будут поступать переадресованные вызовы.',
			alwaysOnCode: 'Код включения функции переадресации всех входящих вызовов; телефон напрямую отсылает данный код для включения этой функции.',
			alwaysOffCode: 'Код выключения функции переадресации всех входящих вызовов; телефон напрямую отсылает данный код для выключения этой функции.',
			busyTarget: 'Номер, на который будут поступать переадресованные вызовы.',
			busyOnCode: 'Код включения функции переадресации входящего вызова, если абонент занят; телефон напрямую отсылает данный код для включения этой функции.',
			busyOffCode: 'Код выключения функции переадресации входящего вызова, если абонент занят; телефон напрямую отсылает данный код для выключения этой функции.',
			afterRingTime: 'Длительность ожидания переадресации на другой номер, если абонент не отвечает.',
			noAnswerTarget: 'Номер, на который будут поступать переадресованные вызовы.',
			noAnswerOnCode: 'Код включения функции переадресации входящего вызова, если абонент не отвечает; телефон напрямую отсылает данный код для включения этой функции.',
			noAnswerOffCode: 'Код выключения функции переадресации входящего вызова, если абонент не отвечает; телефон напрямую отсылает данный код для выключения этой функции.',
			
			dndOnCode: 'Код включения функции DND; телефон напрямую отсылает данный код для включения этой функции.',
			dndOffCode: 'Код выключения функции DND; телефон напрямую отсылает данный код для выключения этой функции.',
			
		}
	}
},
phoneUpgradeHtml = {
	div1: {
		ver: 'Версия',
		fmVer: 'Версия программного обеспечения',
		hdVer: 'Сборка',
		
		resetToFactory: 'Возврат к заводским настройкам',
		reboot: 'Перезагрузка',		
		
		upgradeHeader: 'Обновление ПО',
		selectFw: 'Выбор ПО',
		upgrade: 'Обновить',
		
		tips: {
			upgradeHeader: 'Выбрать актуальную версию ПО, выпущенную разработчиком в рамках обновления.'
		}
	},
	commonText: {
		resetConfirm: 'Вернуться к заводским настройкам?',
		resetSuccess: 'Возврат к заводским настройкам успешно выполнен. Телефон перезагрузится автоматически.',
		resetFail: 'Не удалось изменить заводские настройки, пожалуйста, попробуйте еще раз!',
		
		rebootConfirm: 'Перезагрузить?',
		
		uploadFilePrompt: 'Прошу подтвердить загрузку файла:',
		upgradeMsg: 'Пожалуйста, не выключайте питание!',
		upgradeText: 'Выполняется обновление, пожалуйста, подождите...',
		
		upgradeFail: 'Не удалось выполнить обновление, пожалуйста, попробуйте еще раз!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'Функция Pcap',
		start: 'Старт',
		stop: 'Стоп',
		exportStr: 'Экспорт',
		
		debug: 'Отладка'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Автопровижининг',
		PnPEnable: 'PnP включено',
		DHCPEnable: 'DHCP включено',
		provisioningServer: 'Сервер автопровижининга',
		userName: 'Имя пользователя',
		password: 'Пароль',
		commonAESKey: 'Общий AES-ключ',
		MACAESKey: 'MAC AES-ключ',
		checkNewConfig: 'Проверка новых настроек',
		off: 'Выключено',
		on: 'Включено',
		repeatedly: 'Повторно',
		interval: 'Интервал (мин.)',
		weekly: 'Еженедельно',
		time: 'Время',
		dayOfWeek: 'День недели',
		
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			PnPEnable: 'Запрос к серверу на получение страницы с данными для обновления',
			DHCPEnable: 'Запрос к серверу DHCP на получение страницы с данными для обновления',
			provisioningServer: 'Укажите адрес сервера автопровижининга',
			password: 'Пароль сервера',
			checkNewConfig: 'Режим проверки новых настроек на сервере'
		}
	},
	showText: {
		weekly:  ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Импорт / экспорт конфигурации',
		importFile: 'Импорт / экспорт',
		importStr: 'Импорт',
		exportStr: 'Экспорт',
		exportUserData: 'С данными пользователя',
		exportImportConfig: 'Импорт / экспорт файлa CFG',
		
		exportSyslog: 'Экспорт системного журнала',
		logLocation: 'Место нахождения системного журнала',
		logLocationOpt0: 'Локально',
		logLocationOpt1: 'Сервер', 
		serverName: 'Имя сервера',
		logLevel: 'Уровень регистрации данных',
		logOpt0: 'Критический',
		logOpt1: 'Ошибка',
		logOpt2: 'Внимание',
		logOpt3: 'Информация',
		logOpt4: 'Отладка',
		exportStr2: 'Экспорт',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			exportImportConfig: 'Входящий либо изходящий файл должен быть в формате соответствующим для autoprovisioning. В исходящем файле записуются только изминения в настройках, если таких изминений не было, файл будет пустым.',
			importExportCfg: 'Щелкните "Экспорт" для сохранения конфигурации данного телефона; щелкните "Импорт" и выберите файл для загрузки конфигурации.',
			exportSyslog: 'При локальном типе операции, телефон передает системный журнал напрямую; при выполнении операции при помощи сервера, журнал передается на соответствующий сервер.'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Список IP адресов с правом на использование Action URI',
		remoteControl:'Управление из вне',
		cstaControl: 'Управление CSTA',
		disable: 'Выключено',
		enable: 'Включено',
		butConfirm: 'Подтвердить',
		butCancel: 'Анулировать'
	       },
},
phoneActionUrlHtml = {
	form1: {
		actionUrlItem: ['setupCompletedUrl','registeredUrl','unregisteredUrl','registerFailedUrl','offHookUrl','onHookUrl','incomingCallUrl','outgoingCallUrl','establishedUrl','terminatedUrl','openDNDUrl','closeDNDUrl','openAlwaysForwardUrl','closeAlwaysForwardUrl','openBusyForwardUrl','closeBusyForwardUrl','openNoAnswerForwardUrl','closeNoAnswerForwardUrl','transferCallUrl','blindTransferUrl','attendedTransferUrl','holdUrl','unHoldUrl','muteUrl','unMuteUrl', 'missedCallUrl','IPChangedUrl','idleToBusyUrl','busyToIdleUrl','rejectIncomingCallUrl','answerNewIncomingCallUrl','transferFailedUrl','transferFinishedUrl','forwardIncomingCallUrl','autopFinishUrl','openCallWaitingUrl','closeCallWaitingUrl','headsetUrl','handfreeUrl','cancelCallOutUrl','remoteBusyUrl','callRemoteCanceledUrl'],
		actionUrlNameList: [ 'Записанные настройки', 'Зарегистрированы', 'Незарегистрированы', 'Ошибка регистрации', 'Поднятие трубки', 'Отложить трубку', 'Входящий звонок', 'Исходящий звонок', 'Резюмировать соединение', 'Конец разговора', 'Включен DND', 'Выключен DND', 'Включена безусловная переадресация вызовов', 'Выключена безусловная переадресация вызовов', 'Включена переадресация соединений когда занято','Выключена переадресация соединений когда занято', 'Включена переадресация соединений когда не поднимают трубку','Выключена переадресация соединений когда не поднимают трубку','Трансфер разговора','Трансфер без анонсирования','Трансфер с анонсированием','Приостановка разговора (Hold)','Возврат к приостановленому разговору','Збавить громкость (Mute)','Выключение функции збавления громкости','Пропущеный вызов','Смена IP адреса','Смена с свободного на занятый','Смена с занятого на свободный','Сброс входящего звонка','Ответ на входящий звонок','Неудачный трансфер','Трансфер окончен','Переадресация входящего звонка','Конец автопровижининга','Включение ожидания соединения','Выключение ожидания соединения','Набор гарнитуры','Громкая связь','Отказ от заказаного соединения','Занят отдаленный телефон','Отказ от соединения с отдаленным телефоном'],		
		butConfirm: 'Подтвердить',
		butCancel: 'Анулировать'
	}
},
phoneTonesHtml = {
	form1: {
		       /*country list*/
		custom: 'Custom',
   	    	australia: 'Australia',
		austria: 'Austria',
	       	brazil: 'Brazil',
		belgium: 'Belgium',
		chile: 'Chile',
		china: 'China',
		czech: 'Czech',
		czechETSI: 'Czech  ETSI',
		denmark: 'Denmark',
		finland: 'Finland',
		france: 'France',
		germany: 'Germany',
		greatBritain: 'Great Britain',
		greece: 'Greece',
		hungary: 'Hungary',
		lithuania: 'Lithuania',
		india: 'India',
		italy: 'Italy',
		japan: 'Japan',
		mexico: 'Mexico',
		newZealand: 'New Zealand',
		netherlands: 'Netherlands',
		norway: 'Norway',
		portugal: 'Portugal',
		spain: 'Spain',
		switzerland: 'Switzerland',
		sweden: 'Sweden',
		russia: 'Russia',
		unitedStates: 'United States',
		       /*end of country list*/
		selectCountry: 'Национальный отбор',
		dial: 'Набор',
		ringBack: 'КПВ',
		busy: 'Занято',
		congestion: 'Переполнение',
		callWaiting: 'Режим ожидания',
		dialRecall: 'Перезвонить',
		info: 'Инфо',
		stutter: 'Заикание',
		message: 'Сообщение',
		autoAnswer: 'Автоответ',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	}
},

phoneTonesHtml = {
	form1: {
		       /*country list*/
		custom: 'Пользователя',
   	    	australia: 'Australia',
		austria: 'Austria',
	       	brazil: 'Brazil',
		belgium: 'Belgium',
		chile: 'Chile',
		china: 'China',
		czech: 'Czech',
		czechETSI: 'Czech  ETSI',
		denmark: 'Denmark',
		finland: 'Finland',
		france: 'France',
		germany: 'Germany',
		greatBritain: 'Great Britain',
		greece: 'Greece',
		hungary: 'Hungary',
		lithuania: 'Lithuania',
		india: 'India',
		italy: 'Italy',
		japan: 'Japan',
		mexico: 'Mexico',
		newZealand: 'New Zealand',
		netherlands: 'Netherlands',
		norway: 'Norway',
		portugal: 'Portugal',
		spain: 'Spain',
		switzerland: 'Switzerland',
		sweden: 'Sweden',
		russia: 'Russia',
		unitedStates: 'United States',
		       /*end of country list*/

		selectCountry: 'Национальный отбор',
		dial: 'Набор',
		ringBack: 'КПВ',
		busy: 'Занято',
		congestion: 'Переполнение',
		callWaiting: 'Режим ожидания',
		dialRecall: 'Перезвонить',
		info: 'Инфо',
		stutter: 'Заикание',
		message: 'Сообщение',
		autoAnswer: 'Автоответ',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	}
},
phoneDialPlanHtml = {
	mytabMenu: {
		replaceRule: 'Правило замены',
		dialNow: 'Ускоренный набор',
		areaCode: 'Междугородный код',
		blockOut: 'Блокировка'
	},
	replaceRuleTitle: ['№', 'Префикс', 'Заменить', 'Аккаунт'],
	dialNowsTitle: ['№', 'Правило быстрого набора', 'Аккаунт'],
	replaceRuleForm: {
		num: 'Номер',
		replace: 'Заменить на',
		account: 'Аккаунт',
		add: 'Добавить',
		edit: 'Редактировать',
		del : 'Удалить',
		save: 'Сохранить'
	},
	dialNowsForm: {
		rule: 'Правило быстрого набора',
		account: 'Аккаунт',
		add: 'Добавить',
		edit: 'Редактировать',
		del : 'Удалить',
		save: 'Сохранить'
	},
	form3: {
		code: 'Код',
		minLen: 'Минимальная длина',
		maxLen: 'Максимальная длина',
		areaCodeAccount: 'Аккаунт',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Заблокировать номер',
		account: 'Аккаунт',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	}
},
phoneVoiceHtml = {
	form1: {
		disable: 'Выключено',
		enable: 'Включено',
		
		echoCancellation: 'Эхоподавление',
		echoCanceller: 'Эхоподавитель',
		echoCancellerOpt0: 'Низкий уровень',
		echoCancellerOpt1: 'Средний уровень',
		echoCancellerOpt2: 'Высокий уровень',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Буфер джиттера',
		type: 'Тип',
		typeOpt0: 'Фиксированный',
		typeOpt1: 'Адаптивный',
		minDelay: 'Минимальная задержка',
		maxDelay: 'Максимальная задержка',
		normalDelay: 'Оптимальная задержка',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			echoCancellation: 'Настройка параметров эхоподавления.',
			echoCanceller: 'Включить/выключить эхоподавление.',
			vad: 'Распознавание голосовой активности.',
			cng: 'Генератор комфортного шума.',
			jitterBuffer: 'Буфер джиттера используется для уменьшения вариации между моментами поступления пакетов на вход приемного устройства.'
		}
	}
},

phoneTrustedCertificatesHtml = {
    form1: {
        index: '№№',
        issued_to: 'Владелец',
        issued_by: 'Издатель',
        expiration: 'Истекает',
        delete_select: 'Удалить',
        import_trusted_certificates: 'Импорт доверенного сертификата',
		certificationfile: 'Загрузить сертификат',
		btn_upload: 'Загрузка',
		btn_delete: 'Удалить',
		import_server_certificates: 'Импорт серверного сертификата ',
		server_certificationfile: 'Загрузить сертификат',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена'
	},
    showText: {
		delConfirm: 'Удалить выбраные файлы?',
		selectEmpty: 'Пожалуйста выберите хотябы один файл.'
	}
},
phoneRingHtml = {
	form1: {
		alterInfoTitle: 'Текст Alert Info',
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		tips: {
		}
	       }
},

phoneLockHtml = {
	form1: {

		disable: 'Выключено',
		enable: 'Включено',
		keypad_lock: 'Блокировка клавиатуры',
		keypadlock_enable: 'Статус',
		keypadlock_type: 'Тип блокировки',
		keypadlock_password: 'Код снятия блокады (0-15 цифр)',
		delay_lock: 'Тайм-аут блокировки (1-3600 сек.)',
		emergency_call: 'Экстренная связь',
		keypad_lock_menu_key: 'Кнопки навигации',
		keypad_lock_function_key: 'Функциональные кнопки',
		keypad_lock_all_keys: 'Все кнопки',
		keypad_lock_answer_call_only:'Только ответ',

		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',

		tips: {
			emergency_call: 'Используется для экстренной связи в случае блокировки клавиатуры'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: 'Выключено',
		enable: 'Включено',

		tr069: 'TR069',
		tr069_enable: 'Включить TR069',
		serveraddress: 'ACS URL',
		serverport: 'Port',
		username: 'Логин ACS',
		password: 'Пароль ACS',
		periodic_inform_enable: 'Включить периодическое информирование',
		periodic_inform_interval: 'Интервал (сек.)',
		connection_request_username: 'Имя пользователя для подключения',
    connection_request_password:'Пароль для подключения',
    
    butConfirm: 'Подтвердить',
		butCancel: 'Отмена',

		tips: {
			tr069_enable: 'Номера экстренных служб, доступные в случаи блокировки телефона.',
			ACS_URL: 'Aдрес URL для доступа к ACS (Auto Configuration Servers  - серверов для автоматических настроек).',
			ACS_username: 'Проверенный имени пользователя к серверу ACS',
			ACS_password: 'Проверенный пароль к серверу ACS.',
			periodic_inform_enable: 'Включить/выключить информациe о настройках телефона переодического отправления к ACS.',
			periodic_inform_interval: 'Диапазон: 5-4294967295',
			connecting_request_username: 'Настройка проверки подлинности имени пользователя запрашивает входящий вызов.',
			connecting_request_password: 'Настройка проверки подленности пароля пользователя запрашивает входящий вызов.'

		}
	}
},


phoneSecurityHtml = {
	form1: {
		passwdModify: 'Изменение пароля',
		userType: 'Тип пользователя',
		currentPasswd: 'Текущий пароль',
		newPasswd: 'Новый пароль',
		confirmPasswd: 'Повторите пароль',
		
		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',
		
		tips: {
			userType: 'Пользователь может изменить только свой пароль. Администратор может изменить пароль как пользователя, так и администратора.'
		}
	},
	showText: {
		pwdNoMatch: 'Пароли отличаются!',
		modifyFailed: 'Не удалось изменить пароль, пожалуйста, попытайтесь еще раз!'
	}
},
contactsHtml = {
	mytabMenu: ['Контакты в телефоне', 'Черный список'],
	tableHeader: ['№', 'Имя', 'Рабочий тел.', 'Мобильный тел.', 'Другой номер', 'Аккаунт'],
	buttonDiv: {
		save: 'Сохранить',
		del: 'Удалить',
		moveToBlack: 'Перенести в черный список',
		moveToWhite: 'Перенести в контакты'
	},
	editDiv: {
		contacts: 'Контакты',
		name: 'Имя',
		officeNum: 'Рабочий телефон',
		mobileNum: 'Мобильный телефон',
		otherNum: 'Другой номер',
		account: 'Аккаунт',
		accountOpt8: 'По умолчанию',
		accountOpt1: 'Аккаунт 1',
		accountOpt2: 'Аккаунт 2',
		accountOpt3: 'Аккаунт 3',
		accountOpt4: 'Аккаунт 4',
		accountOpt5: 'Аккаунт 5',
		accountOpt6: 'Аккаунт 6',
		ring: 'Звонок',
		ringOpts: ['По умолчанию', 'Звонок1.wav', 'Звонок2.wav', 'Звонок3.wav', 'Звонок4.wav', 
		           'Звонок5.wav', 'Звонок6.wav', 'Звонок7.wav', 'Звонок8.wav', 'Звонок9.wav', 'Звонок10.wav'],
		photo: 'Фотография',
		defaultPhoto: 'По умолчанию',
		add: 'Сохранить как новый',
		deletePhoto: 'Удалить',
		uploadPhoto: 'Загрузить',
		pictureSize: 'Рекомендованное разшерение фотографии 100 х 135 пикселя; его размер не должен превышать 250 КВ.',
		edit: 'Сохранить и очистить',
		search: 'Поиск',
		
		importAndExport: 'Импорт и экспорт локальных контактов',
		importFile: 'Импорт локальных контактов',
		importStr: 'Импорт',
		exportStr: 'Экспорт'
	},
	
	shwoText: {
		delConfirm: 'Вы уверены удалить выбранный контакт или контакты?',
		delConfirm1: 'Внимание: нельзя будет восстановить фотографию контакта!', 
		selectEmpty: 'Пожалуйста, выберите не менее чем одну запись.',
		selectTooMuch: 'Выбранный контакт превышает ограничение!',
		nameEmpty: 'Имя не может быть пустым!',
		nameExist: 'Указанное имя уже существует!',
		phonebookFull: 'Превышено допустимое количество контактов в телефонной книге',
		blacklistFull: 'Превышено допустимое количество контактов в чорном списке',
		contentEmpty: 'Содержание не может быть пустым!',
		notFind: 'Указанный контакт не найден.'
	}
},

multicastHtml = {
	form1: {
		multicastListening: 'Парамерты прослушивания для широковещательная',
		pagingBarge: 'Приоритет вызова',
		ignoreDND: 'Игнорируй DND (не беспокоить)',
		pagingPriorityActive: 'Использовать приоритет',
		ipAddr: 'IP',
		listeningAddr: 'Прослушиваный адрес',
		label: 'Описание',  
		channel: 'Канал',
		priority: 'Приоритет',
		disabled: 'Выключено',
		enabled: 'Включено',

		pagingListLabel: 'Список многоадресной рассылки',
		index: '№№',
		pagingAddr: 'Адрес',


		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',

		tips: {
		}
	}
},
LDAPHtml = {
	form1: {
		disable: 'Выключено',
		enable: 'Включено',

		LDAP:'LDAP',
		enable_ldap:'Использование LDAP',
		
        name_filter:'Фильтр имени LDAP',
        number_filter:'Фильтр номера LDAP',
		
        name_attributes:'Атрибуты имени LDAP',
        number_attributes:'Атрибуты номера LDAP',
        display_name:'Имя LDAP',

        server_address:'Адрес сервера',
        port:'Порт',
        base:'Основное',
        user_name:'Логин',
        password:'Пароль',
        max_hits:'Максимальное кол-во результатов',
        protocol_version:'Протокол',
        version2:'Версия 2',
        version3:'Версия 3',
        optionNo: 'Нет',
		optionYes: 'Да',
		
        match_incoming_calls:'Поиск LDAP для входящих вызовов',
        ldap_lookup_for_dial:'Поиск LDAP для исходящих вызовов',
        sort_result:'Сортировка результатов LDAP',

		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',

		tips: {
			LDAP: 'LDAP Телефонная книга.',
			name_filter: 'Фильтр имени LDAP, поиск контактов в сервере, если введены буквы.',
			number_filter: 'Фильтр номера LDAP, поиск контактов в сервере, если введены цифры.',
			server_address: 'Адрес сервера LDAP, может быть IP или название домена.',
			port: 'Порт сервера LDAP.',
			base: 'Поиск в главном каталоге сервера.',
			user_name: 'Имя регистрации на сервере.',
			password: 'Пароль регистрации на сервере.',
			max_hits: 'Максимальное количество результатов.',
			name_attributes: 'Соответствующие атрибуты необходимого имени.',
			number_attributes: 'Соответствующие атрибуты необходимого номера.',
			display_name: 'Тип отображаемого на дисплее имени для поиска.',
			match_incoming_calls: 'Поиск для входящих вызовов в ресурсах LDAP.',
			ldap_lookup_for_dial: 'Поиск для исходящих вызовов в ресурсах LDAP.',
			sort_result: 'Сортировка результатов в ресурсах LDAP.'
		}
	}
},

XMLPhonebookHtml = {
	form1: {
        disable: 'Выключено',
		enable: 'Включено',

        index:'№№',
        remote_url:'Путь к книге (URL)',
        display_name:'Отображаемое имя',

		xml_remote_phonebook:'Настройки поиска',

        SRemoteName:'Удаленные имена',
        SRemoteNameFlashTime:'Период обновления базы (сек.)',

		butConfirm: 'Подтвердить',
		butCancel: 'Отмена',

		tips: {
			SRemoteName: 'Разрешение или запрет телефону на проверку входящих и исходящих вызовов в удаленной телефонной книге.',
			SRemoteNameFlashTime: 'Настройка интервала (сек.) обновления данных с сервера удаленной телефонной книги. Величина 0 обозначает, что телефон не будет обновлять данных с этого сервера.'
		}
	}
},

phoneCallInfoHtml = {
	mytabMenu: ['Исходящие', 'Пропущенные', 'Принятые', 'Переадресованные'],
	tableHeader: ['№', 'Дата/время', 'Продолжительность времени', 'Аккаунт', 'Имя', 'Номер телефона']
};
//在node.js中有效
if (typeof exports === 'object' && typeof module === 'object') {
	module.exports = {commonValidMsg: commonValidMsg, 
					uploadCommon: uploadCommon,
					alertMsg: alertMsg,
					mainJs: mainJs,
					status401Html: status401Html,
					indexHtml: indexHtml,
					statusHtml: statusHtml,
					wizardHtml: wizardHtml,
					accountBasicHtml: accountBasicHtml,
					accountCodecsHtml: accountCodecsHtml,
					accountAdvancedHtml: accountAdvancedHtml,
					networkBasicHtml: networkBasicHtml,
					networkWIFIHtml: networkWIFIHtml,
					networkAdvancedHtml: networkAdvancedHtml,
					dssKeyHtml: dssKeyHtml,
					lineKeyHtml: lineKeyHtml,
					programKeyHtml: programKeyHtml,
					extKeyHtml: extKeyHtml,
			aetAdvHtml: aetAdvHtml,

					extKeyBackHtml: extKeyBackHtml,
					phonePreferenceHtml: phonePreferenceHtml,
					phoneFeaturesHtml: phoneFeaturesHtml,
					phoneDNDAndForwardHtml: phoneDNDAndForwardHtml,
					phoneUpgradeHtml: phoneUpgradeHtml,
					phoneTrustedCertificatesHtml: phoneTrustedCertificatesHtml,
					phoneDebugHtml: phoneDebugHtml,
					phoneAutoHtml: phoneAutoHtml,
					phoneConfigurationHtml: phoneConfigurationHtml,
					phoneActionUrlHtml: phoneActionUrlHtml,
					phoneDialPlanHtml: phoneDialPlanHtml,
					phoneTonesHtml:phoneTonesHtml,
					phoneVoiceHtml: phoneVoiceHtml,
					phoneRingHtml: phoneRingHtml,
					phoneLockHtml: phoneLockHtml,
					phoneSecurityHtml: phoneSecurityHtml,
					phoneTr069Html: phoneTr069Html,
					contactsHtml: contactsHtml,
					multicastHtml: multicastHtml,
					LDAPHtml: LDAPHtml,
					XMLPhonebookHtml: XMLPhonebookHtml,
					phoneCallInfoHtml: phoneCallInfoHtml
					};
}
