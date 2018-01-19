//公共的验证信息
var commonValidMsg = {
	missingMsg: 'To pole jest wymagane',
	invalidIpMsg: 'Nieprawidłowy adres IP'
},
uploadCommon = {
	uploadFilePrompt: 'Aby wysłać plik:',
	uploadMsg: 'Proszę nie wyłączać zasilania!',
	uploadText: 'Wysyłanie, proszę czekać...',
	uploadSuccess: 'Wysyłanie zakończone powodzeniem!',
	uploadFail: 'Wysyłanie zakończone niepowodzeniem, proszę spróbować ponownie!'
},
alertMsg = {
	titlePrompt: 'Powiadomienie',
	titleConfirm: 'Potwierdzenie',
	noChange: 'Bez zmian!',
	invalidVal: 'Nieprawidłowa wartość!',
	saveSuccess: 'Zapisano pomyślnie!',
	enabledOptionsEmpty: 'Lista włączonych kodeków nie może być pusta!',
	codecsConflict: 'Nie można stosować jednocześnie iLBC_13_3 i iLBC_15_2!',
	emptyContent: 'Pole jest puste!',
	invalidDTMF: 'Nieprawidłowa wartość DTMF!',
	webServicesDisable: 'Wyłączono dostęp interfejsu web!',
	features: 'Kod wyłączenia nie może być pusty, jeśli ustawiono kod włączenia!',
	invalidAccountList: 'Nieprawidłowa lista kont!',
	dialPlanMsg1: 'Proszę wybrać co najmniej jeden wpis.',
	voiceError1: 'Opóźnienie maksymalne musi być większe od opóźnienia minimalnego.',
	voiceError2: 'Opóźnienie normalne musi być między opóźnieniem minimalnym a maksymalnym.',
	fileIsEmpty: 'Plik jest pusty!',
	upgradeFileFormateErr: 'Proszę wybrać plik aktualizacji oprogramowania (*.fw).',
	openvpnFile: 'Proszę wybrać plik OpenVPN (*.tar/*.TAR).',
	wallpaperFormatError: 'Nazwa pliku nie może zawierać polskich znaków, a obraz musi być w formacie PNG/JPG/BMP.',
	systemFileCannotDelete: 'Nie można usunąć plików systemowych!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'Prosimy nie wyłączać zasilania!',
			rebootText: 'Restartowanie, proszę czekać...'
		},
		showProgress: {
			progressTitle: 'Powiadomienie'
		}
	},
	ErrorInfo: {
		networkError: 'Błąd sieci, proszę sprawdzić!',
		webServerError: 'Błąd komunikacji przez interfejs web, proszę spróbować ponownie!',
		unknownError: 'Nieznany błąd:',
		dataNoChanged: 'Bez zmian!',
		Error_409: 'Plik o tej nazwie już istnieje.',
		Error_413: 'Plik jest za duży.',

		phoneBusyError: 'Rozmowa, proszę czekać...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: 'Wylogowanie zakończone niepowodzeniem, proszę spróbować ponownie!'
	},
	pluginInit: {
		ok: 'OK',
		cancel: 'Anuluj'
	}
},
status401Html = {
	errorInfo1 : 'Brak autoryzacji dostępu do interfejsu web.',
	errorInfo2 : 'Skontaktuj się z administratorem sieci lub spróbuj za 3 minuty.',
	errorInfo3: 'Nieautoryzowany dostęp (HTTP 401)'
},
//index.html
indexHtml={
	top:{
		logout: 'Wyloguj',
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
		basic: 'Podstawowe',
		account: 'Konto',
		network: 'Sieć',
		dSSKey: 'DSS',
		phone: 'Telefon',
		contacts: 'Kontakty',
		security: 'Bezpieczeństwo'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'Strona internetowa',
		products: 'Produkty',
		support: 'Wsparcie',
		download: 'Pobierz',
		contactus: 'Kontakt z nami',
		atcomRights: '©2018 ATCOM Wszystkie prawa zastrzeżone.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'Status',
		sWizard: 'Kreator',
		//Account
		aBasic: 'Podstawowe',
		aCodecs: 'Kodeki',
		aAdvanced: 'Zaawansowane',
		//NetWork
		nBasic: 'Podstawowe',
		nWifi: 'Wi-Fi',
		nAdvanced: 'Zaawansowane',
		//DSS key
		dMemory: 'Przyciski pamięci',
		dLink: 'Przyciski liniowe',
		dProgrammable: 'P. programowalne',
		dExt: 'Przyciski konsoli',
		dAetAdv: 'Ustawienia konsoli',

		//Phone
		pDNDAndForward: 'Przenoszenie poł. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i DND',    
		pPrefetence: 'Preferencje',
		pFeatures: 'Funkcje',
		pUpgrade: 'Aktualizacja',
		pAuto: 'Auto Provision',
		pConfig: 'Konfiguracja',
		pRemoteControl: 'Zdalne sterowanie',
		pActionUrl: 'Akcje URL',
		pDialPlan: 'Dial plan',
		pVoice: 'Głos',
		pRing: 'Alert Info',
		pTones: 'Rytmy dzwonka',
		pSms: 'SMS',
		pAction: 'Akcje URL',
		pSoftkey: 'Układ przycisków',
		pPhoneLock: 'Blokada telefonu',
		pSecurity: 'Bezpieczeństwo',
		pPhoneTr069: 'TR069',
		pDebug: 'Debug',
		//Contacts
		cContacts: 'Kontakty',
		cXMLPhonebook: 'Zdalna książka',
		cPhoneCall: 'Info o połączenich',
		cLDAP: 'LDAP',
		cMulticastIp: 'Rozgłoszeniowy IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'Rejestr połączeń',
		//Security
		sPassword: 'Hasło',
		sStrusted: 'Zaufane certyfikaty',
		sServer: 'Certyfikaty serwera'
	}
},
statusHtml = {
	version: {
		verTitle: 'Wersja',
		fwVer: 'Wersja firmware',
		hwVer: 'Wersja hardware',
		product_name: 'Model'
	},
	networkConfig:{
		netConfigTitle: 'Protokół IP',
		internetPortType: 'Wersja protokołu IP', /*ipv4 = 1, ipv6 = 2, ipv4 & ipv6 = 3*/
		internType1: 'IPv4',
		internType2: 'IPv6',
		internType3: 'IPv4 & IPv6'
	},
	network: {
		netTitle: 'IPv4',
		internetPort: 'Typ portu sieciowego',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Statyczny adres IP',
		ip: 'Adres IP',
		subnetMask: 'Maska podsieci',
		gatewag: 'Brama',
		primaryDNS: 'Preferowany DNS',
		secondaryDNS: 'Alternatywny DNS',
		wiredMac: 'Adres MAC dla portu LAN',
		WIFIMac: 'Adres MAC dla portu Wi-Fi',
		vpnStatus: 'Status VPN',
		vpnStatusOpt0: 'Łączenie',
		vpnStatusOpt1: 'Wyłączono',
		vpnStatusOpt2: 'Nie połączono',
		vpnStatusOpt3: 'Połączono',
		vpnIp: 'IP VPN'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Typ portu sieciowego',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Statyczny adres IP',
		ip: 'Adres IP',
		networkPrefix: 'Prefiks sieci',
		gatewag: 'Brama',
		primaryDNS: 'Preferowany DNS',
		secondaryDNS: 'Alternatywny DNS'
	},
	tips: {
		netConfigTip: 'Wersja protokołu IP telefonu.',
		verTip: 'Bieżąca wersja firmware oraz hardware telefonu.',
		netTip: 'Szczegóły dotyczące konfiguracji sieciowej telefonu.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Sieć',
		InternetPort: 'Port sieciowy',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP,statyczny DNS',
		staticIp: 'Statyczny adres IP',

		staticIpSettings: 'Ustawienia statycznego adresu IP',
		ip: 'Adres IP',
		subnetMask: 'Maska podsieci',
		defaultGateway: 'Domyślna brama',
		StaticDNSEnable: 'Statyczny DNS',
		primaryDNS: 'Preferowany DNS',
		secondaryDNS: 'Alternatywny DNS',
		/*ipv6*/
		staticIpSettingsIPv6: 'Statyczny adres IP dla protokołu IPv6',
		IPv6Prefix: 'Prefiks IPv6',
		StaticDNSEnableIPv6: 'Statyczny DNS dla protokołu IPv6',

		sipSettings: 'Ustawienia SIP',
		accountActive: 'Konto aktywne',
		disable: 'Wyłączono',
		enable: 'Włączono',
		labelName: 'Opis',
		displayName: 'Nazwa wyświetlana',
		registerName: 'Nazwa rejestracyjna',
		userName: 'Nazwa użytkownika',
		password: 'Hasło',
		
		sipServer: 'Serwer SIP',
		sipServerPort: 'Port',
		
		back: 'Cofnij',
		next: 'Dalej',
		
		tips: {
			dhcp: 'Automatyczne pobieranie adresu IP, maski podsieci, bramy, DNS z serwera DHCP.',
			staticIp: 'Ręczna konfiguracja adresu IP, maski podsieci, bramy i DNS.',
			labelName: 'Nazwa wyświetlająca się na wyświetlaczu aktualnie używanego telefonu.',
			displayName: 'Lokalna nazwa telefonu pojawiająca się na innym telefonie w przypadku nawiązania połączenia.',
			registerName: 'Nazwa rejestracyjna podana przez dostawcę usług internetowych.',
			userName: 'Nazwa użytkownika podana przez dostawcę usług internetowych.',
			password: 'Hasło do konta podane przez dostawcę usług internetowych.',
			sipServer: 'Adres serwera SIP podany przez dostawcę usług internetowych.'
		}
	},
	common: {
		finish: 'Zakończ',
		next: 'Dalej'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'Konto',
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		
		registerStatus: 'Status rejestracji',
		
		accountActive: 'Konto aktywne',
		disable: 'Wyłączono',
		enable: 'Włączono',
		labelName: 'Opis',
		displayName: 'Nazwa wyświetlana',
		registerName: 'Nazwa rejestracyjna',
		userName: 'Nazwa użytkownika',
		password: 'Hasło',
		
		sipServer: 'Serwer SIP',
		sipServerPort: 'Port',
		redundancy_proxy: 'Serwer rezerwowy SIP',

		enableOutboundProxyServer: 'Włącz wychodzący serwer proxy',
		outboundProxyServer: 'Wychodzący serwer proxy',
		outboundProxyServerPort: 'Port',
		make_call_without_register: 'Włącz Peer-to-Peer',
		
		verifyServer: 'Weryfikacja serwera TLS',
		transport: 'Protokół transmisji danych',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'Trawersowanie NAT',
		TLSVersion: 'Wersja TLS',
		natTraversalOpt1: 'STUN',
		stunServer: 'Serwer STUN',
		port: 'Port',
		
		voiceMail: 'Poczta głosowa',
		anonymousCall: 'Połączenia anonimowe',
		off: 'Wyłączono',
		on: 'Włączono',
		onCode: 'Kod włączenia',
		offCode: 'Kod wyłączenia',
		anonymousCallRejection: 'Odrzucanie połączenia anonimowego',
		ringTones: 'Dźwięk dzwonka',
		ringTonesOpt0: 'Podstawowy',
		ringTonesOpt1: 'Dzwonek1.wav',
		ringTonesOpt2: 'Dzwonek2.wav',
		ringTonesOpt3: 'Dzwonek3.wav',
		ringTonesOpt4: 'Dzwonek4.wav',
		ringTonesOpt5: 'Dzwonek5.wav',
		ringTonesOpt6: 'Dzwonek6.wav',
		ringTonesOpt7: 'Dzwonek7.wav',
		ringTonesOpt8: 'Dzwonek8.wav',
		ringTonesOpt9: 'Dzwonek9.wav',
		ringTonesOpt10: 'Dzwonek10.wav',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			labelName: 'Nazwa wyświetlająca się na wyświetlaczu aktualnie używanego telefonu.',
			displayName: 'Lokalna nazwa telefonu pojawiająca się na innym telefonie w przypadku nawiązania połączenia.',
			registerName: 'Nazwa rejestracyjna podana przez dostawcę usług internetowych.',
			userName: 'Nazwa użytkownika podana przez dostawcę usług internetowych.',
			password: 'Hasło do konta podane przez dostawcę usług internetowych.',
			sipServer: 'Adres serwera SIP podany przez dostawcę usług internetowych.',
			enableOutboundProxyServer: 'Stosowany do przetwarzania sygnałów oraz do ułatwiania przesyłania strumienia danych multimedialnych przez zaporę sieciową lub NAT.',
			redundancy_proxy: 'Adres rezerwowego serwera SIP podany przez dostawcę usług internetowych',
			outboundProxyServer: 'Wychodzący serwer proxy.',
			verifyServer: 'Weryfikacja serwera TLS',
			transport: 'Dostępne są trzy protokoły transportowe: UDP, TCP oraz TLS. Protokół TLS (Transport Layer Security) jest szyfrowany.',
			natTraversal: 'Włącz/wyłącz serwer STUN.',
			stunServer: 'Serwer STUN pozwala wszystkim klientom terminala NAT (takim jak komputery PC znajdujące się za firewallem) uzyskać dostęp do połączeń telefonu VOIP z dostawcą usług VOIP znajdującym się poza siecią LAN.',
			voiceMail: 'Ustaw numer poczty głosowej dla bieżącego konta.',
			anonymousCall: 'Włącz/wyłącz połączenia anonimowe.',
			onCode: 'Ustaw kod funkcji włączający połączenia anonimowe — telefon zezwala na połączenie anonimowe przez wysłanie kodu funkcji do serwera.',
			offCode: 'Ustaw kod funkcji wyłączający połączenia anonimowe — telefon blokuje połączenie anonimowe przez wysłanie kodu funkcji do serwera.',
			anonymousCallRejection: 'Włącz/wyłącz odrzucanie połączeń anonimowych.',
			onCodeRejection: 'Ustaw kod funkcji odrzucania połączeń anonimowych — telefon odrzuca połączenie anonimowe przez wysłanie kodu funkcji do serwera.',
			offCodeRejection: 'Ustaw kod wyłączający funkcję odrzucania połączeń anonimowych — telefon wyłącza odrzucanie połączeń anonimowych przez wysłanie kodu funkcji do serwera.',
			ringTones: 'Ustaw typ dzwonka dla bieżącego konta.',
			make_call_without_register: 'Wykonuj połączenia bez rejestracji.'
		}
	},
	showText: {
		unRegistered: 'Nie zarejestrowano',
		registered: 'Zarejestrowano'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'Konto',
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		
		audioCodecs: 'Kodeki audio',
		disableCodecs: 'Wyłączone kodeki',
		enableCodecs: 'Włączone kodeki',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'Konto',
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		
		udpKeepAliveMsg: 'Wiadomości UDP Keep Alive',
		disable: 'Wyłączono',
		enable: 'Włączono',
		udpKeepAliveInterval: 'Odstęp między wiadomościami UDP Keep Alive (s)',
		
		loginExpires: 'Czas ponownej rejestracji (s)',
		localSipPort: 'Lokalny port SIP',
		subscribePeriod: 'Okres subskrypcji (s)',
		
		dtmfType: 'Typ DTMF',
		dtmfTypeOpt0: 'W paśmie',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP INFO',
		dtmfPayload: 'DTMF Payload (s)',
		reliableRetransmission: 'SIP 100rel',
		
		subscribeForMwi: 'Subskrypcja wiadomości poczty głosowej (MWI)',
		mwiSubscribePeriod: 'Okres subskrypcji MWI (s)',
		
		useSessionTimer: 'Odświeżanie sesji',
		sessionTimer: 'Częstotliwość odświeżania sesji (s)',
		refresher: 'Typ odświeżania',
		
		useUserPhone: 'Zastosuj funkcję user=phone',
		voiceEncryption: 'Szyfrowanie głosu (SRTP)',
		off: 'Wyłączono',
		on: 'Włączono',
		ptime: 'PTime (ms)',
		
		blfListUri: 'Listy BLF dla adresu URI',
		derectedCallPickupCode: 'Kod przechwytywania połączeń bezpośrednich',
		groupCallPickupCode: 'Kod przechwytywania połączeń grupowych',
		
		sipRegRetryTimer: 'Częstotliwość ponawiania rejestracji SIP',
		earlyMedia: 'Early Media',
		sipServerType: 'Typ serwera SIP',
		sipServerTypeOpt0: 'Bazowy',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'BroadSoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Kod intercomu',
		conferenceType: 'Typ konferencji',
		localConference: 'Konferencja lokalna',
		networkConference: 'Konferencja sieciowa',
		conferenceCode: 'Kod konferencji',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			udpKeepAliveMsg: 'Telefon regularnie wysyła pakiet UDP, aby port był aktywny oraz aby serwer go nie zamknął.',
			loginExpires: 'Czas ponownej rejestracji — czas, po którym wysyłana jest ponowna rejestracja. W przeciwnym razie serwer potraktuje telefon jako wyłączony.',
			localSipPort: 'Lokalny port SIP telefonu — wykorzystywany do wysyłania i odbierania pakietów SIP.',
			subscribePeriod: 'Ustawienie czasu odświeżania statusów BLF.',
			dtmfType: 'Wybór trybu umożliwiającego wysyłanie sygnałów DTMF, np. sygnałów INBAND, OUTOFBAND (RFC2833) i SIP INFO poprzez naciskanie klawiszy numerycznych w czasie połączenia.',
			reliableRetransmission: 'Włącz/wyłącz transmisję PRACK.',
			subscribeForMwi: 'Telefon wysyła pakiet Subscribe na serwer, aby subskrybować wiadomość poczty głosowej. Pakiet jest wysyłany po rejestracji.',
			useSessionTimer: 'Włącz/wyłącz funkcję odświeżania sesji. Jeśli opcja jest włączona, telefon wyśle pakiet Invite, aby odświeżyć sesję podczas połączenia.',
			sessionTimer: 'Odstępy między kolejnymi odświeżeniami sesji.',
			refresher: 'Wybór strony odświeżania sesji. UAC: aby odświeżyć sesję po stronie klienta. UAS: aby odświeżyć sesję po stronie serwera.',
			useUserPhone: 'Jeśli funkcja jest włączona, na pakiecie Invite wiadomości SIP widoczny będzie znak „user=phone”.',
			voiceEncryption: 'Włącz/wyłącz szyfrowanie głosu (SRTP).',
			ptime: 'Negocjuj czas odstępów między dwoma pakietami RTP dla kodeku stosowanego obecnie.',
			blfListUri: 'Stosowany do subskrypcji BLF na Broadsoft.',
			sipRegRetryTimer: 'Częstotliwość, z jaką będą dokonywane próby ponownej rejestracji, począwszy od rejestracji zakończonej niepowodzeniem.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Port sieciowy',
		IPv4Config: 'Konfiguracja IPv4',
		IPv6Config: 'Konfiguracja IPv6',
		dhcp: 'DHCP',
		staticIp: 'Statyczny adres IP',
		ip: 'Adres IP',
		subnetMask: 'Maska podsieci',
		defaultGateway: 'Domyślna brama',
		IPv6Prefix: 'Prefiks IPv6',

                StaticDNSEnable: 'Statyczny DNS',
   	on: 'Włączono',
		off: 'Wyłączono',

		primaryDNS: 'Preferowany DNS',
		secondaryDNS: 'Alternatywny DNS',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			dhcp: 'Automatyczne pobieranie z serwera DHCP: adresu IP, maski podsieci, bramy, DNS.',
			staticIp: 'Ręczna konfiguracja adresu IP, maski podsieci, bramy i DNS.',
			StaticDNSEnable: 'Włączanie lub wyłączanie ręcznie ustawianego statycznego DNS, kiedy port sieciowy jest ustawiony jako DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Ustawienia Wi-Fi',
		wifi_on_warning: '(gdy Wi-Fi jest włączone, proszę odłączyć kabel sieciowy!)',
		wifi_enable: 'Wi-Fi',
		on: 'Włączono',
		off: 'Wyłączono',
		search_wifi: 'Wyszukiwanie Wi-Fi',
		wifi_ssid: 'Bieżące SSID',
		wifi_key: 'Klucz Wi-Fi',
	  
    wifi_status_save: 'Zapisz',
		wifi_status_connect: 'Połącz',
		wifi_list_title: 'Lista Wi-Fi',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
	},
	showText: {
		close_wifi: 'Wyłączanie Wi-Fi...',
		open_wifi: 'Włączanie Wi-Fi...',
		search_wifi: 'Wyszukiwanie...',
		wifi_table_header: ['Indeks', 'SSID', 'Sygnał', 'Wybierz'],
		wifi_list_title: 'Lista Wi-Fi',
		submitting: 'Wysyłanie...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Aktywny',
		disable: 'Wyłączono',
		enable: 'Włączono',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Priorytet',
		vlanPc: 'PC',
		vlanPcActive: 'Aktywny',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Priorytet',
		
		portLink: 'Podłączenie portów',
		wanPortLink: 'Port WAN',
		wanPortLinkOption0: 'Autonegocjacja',
		wanPortLinkOption1: 'Pełny dupleks 10 Mbps',
		wanPortLinkOption2: 'Pełny dupleks 100 Mbps',
		wanPortLinkOption3: 'Połowiczny dupleks 10 Mbps',
		wanPortLinkOption4: 'Połowiczny dupleks 100 Mbps',
		wanPortLinkOption5: 'Połowiczny dupleks 1000 Mbps',
		wanPortLinkOption6: 'Pełny dupleks 1000 Mbps',
			
		pcPortLink: 'Port PC',
		pcPortLinkOption0: 'Autonegocjacja',
		pcPortLinkOption1: 'Pełny dupleks 10 Mbps',
		pcPortLinkOption2: 'Pełny dupleks 100 Mbps',
		pcPortLinkOption3: 'Połowiczny dupleks 10 Mbps',
		pcPortLinkOption4: 'Połowiczny dupleks 100 Mbps',
		
		vpn: 'VPN',
		slaccEnable: 'Status ICMPv6',
		importFile: 'Wgraj konfigurację VPN',
		importStr: 'Importuj',
		
		voiceQos: 'QoS dla głosu',
		sipQos: 'QoS dla SIP',
		
		localRtpPort: 'Lokalny port RTP',
		maxRTPPort: 'Maksymalny port RTP',
		minRTPPort: 'Minimalny port RTP',
		
		webServer: 'Interfejs www',
		httpPort: 'Port http',
		httpsPort: 'Port https',
		webServerType: 'Typ',
		webServerTypeOption0: 'Wyłączono',
		webServerTypeOption1: 'tylko http',
		webServerTypeOption2: 'tylko https',
		webServerTypeOption3: 'http i https',

        span_to_pc: 'Kopiuj na PC',
        sys_span_to_pc_port: 'Kopiuj na port PC',

		lldp: 'LLDP',
		cdp: 'CDP',
		package_interval: 'Interwał pakietów (1-3600 s)',

		x_802_1x: '802.1X',
		x_802_1x_mode: 'Tryb',
		x_802_1x_mode0: 'Wyłączono',
		x_802_1x_mode1: 'EAP-MD5',
		x_802_1x_mode2: 'EAP-TLS',
		x_802_1x_mode3: 'EAP-PEAP/MSCHAPv2',
		x_802_1x_mode4: 'EAP-TTLS/EAP-MSCHAPv2',
		x_802_1x_mode5: 'EAP-PEAP/GTC',
		x_802_1x_mode6: 'EAP-TTLS/EAP-GTC',
		x_802_1x_mode7: 'EAP-FAST',
		x_802_1x_anonymous_identity: 'Tożsamość anonimowa',
		x_802_1x_identity: 'Tożsamość',
		x_802_1x_password: 'Hasło MD5',
		x_802_1x_ca_cert: 'Certyfikaty CA',
		x_802_1x_device_cert: 'Certyfikaty urządzenia',
		x_802_1x_upload: 'Wgraj',

		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			lldp: 'LLDP przekazuje informacje w formie pakietów nazywanych LLDP Data Units (LLDPDUs). LLDPDU składa się z zestawu elementów Type-Length-Value (TLV), z których każdy zawiera szczególny typ informacji o urządzeniu lub porcie transmitującym te informacje.',
			cdp: 'CDP (Cisco Discovery Protocol) pozwala telefonom IP otrzymywać informacje z innych urządzeń bezpośrednio podłączonych do sieci i używających również tego protokołu, a także wysyłać informacje do tych urządzeń oraz przechowywać informacje o innnych urządzeniach.',
			vlan: 'Zmiany w konfiguracji VLAN wymagają ponownego uruchomienia urządzenia.',
			portLink: 'Tryby pracy interfejsów sieciowych.',
			vpn: 'Konfiguracja VPN (Virtual Private Network - Wirtualnej Sieci Prywatnej).',
			voiceQos: 'W przypadku niewystarczającej przepustowości sieci usługa zapewnia użytkownikom zadowalające parametry jakości głosu i transmisji danych.',
			localRtpPort: 'Określ port transmisji głosu.',
			x_802_1x: 'Konfiguracja sposobu uwierzytelniania 802.1x.',
			slaccEnable: 'Włącz/wyłącz opcję otrzymywania przez telefon ustawień sieciowych IPv6 metodą SLAAC (Stateless Address Autoconfiguration).',
			webServer: 'Ustawienie typu dostępu do interfejsu www oraz portu.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Przycisk',
		type: 'Typ',
		value: 'Wartość',
		label: 'Opis',
		account: 'Konto',
		ext: 'Funkcja',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'DSS',
		
		keyTypeOpt0: 'Domyślny',
		keyTypeOpt1: 'Linia',
		keyTypeOpt2: 'Szybkie wybieranie',
		keyTypeOpt4: 'Poczta głosowa',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Przechwycenie połączenia',
		keyTypeOpt10: 'Przechwycenie grupy',
		keyTypeOpt11: 'Parkowanie połączenia',
		keyTypeOpt12: 'Interkom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferencja',
		keyTypeOpt15: 'Przeniesienie',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'Zawieszenie (HOLD)',
		keyTypeOpt18: 'Nie przeszkadzać (DND)',
		keyTypeOpt19: 'Ponowne wybieranie',
		keyTypeOpt20: 'Kontakty',
		keyTypeOpt21: 'Oddzwoń',
		keyTypeOpt22: 'Prefiks',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Wykonane',
		keyTypeOpt26: 'Odebrane',
		keyTypeOpt27: 'Nieodebrane',
		keyTypeOpt28: 'Przekazane',
		keyTypeOpt29: 'Kontakt',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Nie dotyczy',
		keyTypeOpt32: 'Historia',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Poczta głosowa',
		keyTypeOpt35: 'Wycisz',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Anuluj',
		keyTypeOpt38: 'Rozgłaszanie',
		keyTypeOpt39: 'Lista rozgłoszeniowa',
		
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		accountNumberOpt8: 'Automatyczne',
		
		GroupPickup: 'PrzechwyćGr',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Przycisk',
		type: 'Typ',
		value: 'Wartość',
		label: 'Opis',
		account: 'Konto',
		ext: 'Funkcja',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Liniowy',
		
		keyTypeOpt0: 'Domyślny',
		keyTypeOpt1: 'Linia',
		keyTypeOpt2: 'Szybkie wybieranie',
		keyTypeOpt4: 'Poczta głosowa',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Przechwycenie połączenia',
		keyTypeOpt10: 'Przechwycenie grupy',
		keyTypeOpt11: 'Parkowanie połączenia',
		keyTypeOpt12: 'Interkom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferencja',
		keyTypeOpt15: 'Przeniesienie',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'Zawieszenie (HOLD)',
		keyTypeOpt18: 'Nie przeszkadzać (DND)',
		keyTypeOpt19: 'Ponowne wybieranie',
		keyTypeOpt20: 'Kontakty',
		keyTypeOpt21: 'Oddzwoń',
		keyTypeOpt22: 'Prefiks',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Wykonane',
		keyTypeOpt26: 'Otrzymane',
		keyTypeOpt27: 'Nieodebrane',
		keyTypeOpt28: 'Przekazane',
		keyTypeOpt29: 'Kontakt',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Nie dotyczy',
		keyTypeOpt32: 'Historia',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Poczta głosowa',
		keyTypeOpt35: 'Wycisz',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Anuluj',
		keyTypeOpt38: 'Rozgłaszanie',
		keyTypeOpt39: 'Lista rozgłoszeniowa',
		
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		accountNumberOpt8: 'Automatyczne',
		
		GroupPickup: 'PrzechwyćGr',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Przycisk',
		type: 'Typ',
		value: 'Wartość',
		label: 'Opis',
		account: 'Konto',

		programKeys: ['Wycisz', 'HOLD', 'Ponowne wybieranie', 
		              'Góra', 'Dół', 'Lewo', 'Prawo', 'Anuluj', 'OK', 
		              'Funkcyjny1', 'Funkcyjny2', 'Funkcyjny3', 'Funkcyjny4'],

		programKeys_A1x: ['Wycisz', 'HOLD', 'Ponowne wybieranie', 
		              'Góra', 'Dół', 'Lewo', 'Prawo', 'Anuluj', 'OK', 
		              'Funkcyjny1', 'Funkcyjny2', 'Funkcyjny3'],

		programKeys_A2x: ['Wycisz', 'HOLD', 'Ponowne wybieranie', 
		              'Góra', 'Dół', 'Lewo', 'Prawo', 'Anuluj', 'OK', 
		              'Funkcyjny1', 'Funkcyjny2', 'Funkcyjny3'],

		programKeys_CT11: ['Wycisz', 
		              'Góra', 'Dół',
		              'Funkcyjny1', 'Funkcyjny2', 'Funkcyjny3', 'Funkcyjny4'],
		keyTypeOpt0: 'Domyślny',
		keyTypeOpt1: 'Linia',
		keyTypeOpt2: 'Szybkie wybieranie',

		keyTypeOpt4: 'Poczta głosowa',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Przechwycenie połączenia',
		keyTypeOpt10: 'Przechwycenie grupy',
		keyTypeOpt11: 'Parkowanie połączenia',
		keyTypeOpt12: 'Interkom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferencja',
		keyTypeOpt15: 'Przeniesienie',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'Zawieszenie (HOLD)',
		keyTypeOpt18: 'Nie przeszkadzać (DND)',
		keyTypeOpt19: 'Ponowne wybieranie',
		keyTypeOpt20: 'Kontakty',
		keyTypeOpt21: 'Oddzwoń',
		keyTypeOpt22: 'Prefiks',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Wykonane',
		keyTypeOpt26: 'Odebrane',
		keyTypeOpt27: 'Nieodebrane',
		keyTypeOpt28: 'Przekazane',
		keyTypeOpt29: 'Kontakt',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Nie dotyczy',
		keyTypeOpt32: 'Historia',
		keyTypeOpt33: 'Status',
		keyTypeOpt34: 'Poczta głosowa',
		keyTypeOpt35: 'Wycisz',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Anuluj',
		keyTypeOpt38: 'Rozgłaszanie',
		keyTypeOpt39: 'Lista rozgłoszeniowa',
		
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		accountNumberOpt8: 'Automatyczne',
		
		GroupPickup: 'Przechwycenie grupy',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	}	
},
aetAdvHtml = {
	form1: {
		networkSetting: 'Ustawienia sieciowe konsoli',
		innerNet: 'Sieć lokalna',
		dhcp: 'DHCP',
		staticIp: 'Statyczny adres IP',
		ip: 'Adres IP',
		subnetMask: 'Maska podsieci',
		defaultGateway: 'Domyślna brama',
                StaticDNSEnable: 'Statyczny DNS',
   		on: 'Włączono',
		off: 'Wyłączono',

		primaryDNS: 'Preferowany DNS',
		secondaryDNS: 'Alternatywny DNS',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',

		tips: {
			innerNet: 'Sieć lokalna',
			dhcp: 'Automatyczne pobieranie z serwera DHCP: adresu IP, maski podsieci, bramy, DNS.',
			staticIp: 'Ręczna konfiguracja adresu IP, maski podsieci, bramy i DNS.',
			StaticDNSEnable: 'Włączanie lub wyłączanie ręcznie ustawianego statycznego DNS, kiedy port sieciowy jest ustawiony jako DHCP.'
		}
	}
},
extKeyHtml = {
	form1: {
		linkControl: 'Zarządzanie konsolą',
		linkableDivice: 'Podłączona konsola',
		key: 'Przycisk',
		type: 'Typ',
		value: 'Wartość',
		label: 'Opis',
		account: 'Konto',
		ext: 'Funkcja',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'Konsola',
		
		keyTypeOpt0: 'Domyślny',
		keyTypeOpt1: 'Linia',
		keyTypeOpt2: 'Szybkie wybieranie',
		keyTypeOpt4: 'Poczta głosowa',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Przechwycenie połączenia',
		keyTypeOpt10: 'Przechwycenie grupy',
		keyTypeOpt11: 'Parkowanie połączenia',
		keyTypeOpt12: 'Interkom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferencja',
		keyTypeOpt15: 'Przeniesienie',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'Zawieszenie (HOLD)',
		keyTypeOpt18: 'Nie przeszkadzać (DND)',
		keyTypeOpt19: 'Ponowne wybieranie',
		keyTypeOpt20: 'Kontakty',
		keyTypeOpt21: 'Oddzwoń',
		keyTypeOpt22: 'Prefiks',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Wykonane',
		keyTypeOpt26: 'Odebrane',
		keyTypeOpt27: 'Nieodebrane',
		keyTypeOpt28: 'Przekazane',
		keyTypeOpt29: 'Kontakt',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Nie dotyczy',
		keyTypeOpt32: 'Historia',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Poczta głosowa',
		keyTypeOpt35: 'Wycisz',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Anuluj',
		keyTypeOpt38: 'Rozgłaszanie',
		keyTypeOpt39: 'Lista rozgłoszeniowa',
		
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		accountNumberOpt8: 'Automatyczne',
		
		GroupPickup: 'Przechwycenie grupy',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'Numer ID konsoli, który wyświetla się w statusie urządzenia.'
		}
},
extKeyBackHtml = {
	noLink: 'Nie podłączono konsoli! Proszę ją podłączyć, a następnie odświeżyć tę stronę.'	
},
phonePreferenceHtml = {
	form1: {
		timeZoneDaylightMap: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
		timeZoneOptsIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 108, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107],
		timeZoneOpts: ['-11 Samoa',
		              
		              '-10 United States-Hawaii-Aleutian',
		              '-10 United States-Alaska-Aleutian',
		              
		              '-9 United States-Alaska Time',
		              
		              '-8 Canada (Vancouver,Whitehorse)',
		              '-8 Mexico (Tijuana,Mexicali)',
		              '-8 United States-Pacific Time',
		              
		              '-7 Canada (Edmonton,Calgary)',
		              '-7 Mexico (Mazatlan,Chihuahua)',
		              '-7 United States-Mountain Time',
		              '-7 United States-MST no DST',
		              
		              '-6 Canada-Manitoba (Winnipeg)',
		              '-6 Chile (Easter Islands)',
		              '-6 Mexico (Mexico City,Acapulco)',
		              '-6 United States-Central Time',
		              
		              '-5 Bahamas (Nassau)',
		              '-5 Canada (Montreal,Ottawa,Quebec',
		              '-5 Cuba (Havana)',
		              '-5 United States-Eastern Time',
		              
		              '-4:30 Venezuela (Caracas)',
		              
		              '-4 Canada (Halifax,Saint John)',
		              '-4 Chile (Santiago)',
		              '-4 Paraguay (Asuncion)',
		              '-4 United Kingdom-Bermuda (Bermuda)',
		              '-4 United Kingdom (Falkland Islands)',
		              '-4 Trinidad&Tobago',
		              
		              '-3:30 Canada-New Foundland (St.Johns)',
		              
		              '-3 Denmark-Greenland (Nuuk)',
		              '-3 Argentina (Buenos Aires)',
		              '-3 Brazil (no DST)',
		              '-3 Brazil (DST)',
		              
		              '-2 Brazil (no DST)',
		              
		              '-1 Portugal (Azores)',
		              
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
		              '+2 Ukraine (Kyiv,Odessa)',
		              
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
		              
		              '+6 Kazakhstan (Astana,Almaty)',
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
		dhcpTime: 'Czas DHCP',
		disable: 'Wyłączono',
		enable: 'Włączono',
		auto: 'Automatycznie',
		timeZone: 'Strefa czasowa',
		primaryNtp: 'Preferowany serwer NTP',
		secondaryNtp: 'Alternatywny serwer NTP',
		updateInterval: 'Częstotliwość synchronizacji czasu (s)',
		daylight: 'Zmiana czasu na letni',
		fixedType: 'Tryb zmiany czasu na letni',
		fixedTypeOpt0: 'Według daty',
		fixedTypeOpt1: 'Według tygodnia',
		startMonth: 'Początek zmiany czasu na letni w miesiącu',
		January: 'Styczeń',
		February: 'Luty',
		March: 'Marzec',
		April: 'Kwiecień',
		May: 'Maj',
		June: 'Czerwiec',
		July: 'Lipiec',
		August: 'Sierpień',
		September: 'Wrzesień',
		October: 'Październik',
		November: 'Listopad',
		December: 'Grudzień',
		startDate: 'Początek w dniu',
		startHourDay: 'Początek o godzinie',
		startDayWeek: 'Początek w dniu tygodnia',
		Sunday: 'Niedziela',
		Monday: 'Poniedziałek',
		Tuesday: 'Wtorek',
		Wednesday: 'Środa',
		Thursday: 'Czwartek',
		Friday: 'Piątek',
		Saturday: 'Sobota',
		startWeekMonth: 'Początek w tygodniu miesiąca',
		firstInMonth: 'Pierwszy tydzień miesiąca',
		secondInMonth: 'Drugi tydzień miesiąca',
		thirdInMonth: 'Trzeci tydzień miesiąca',
		fourthInMonth: 'Czwarty tydzień miesiąca',
		lastInMonth: 'Ostatni tydzień miesiąca',
		stopMonth: 'Koniec w miesiącu',
		stopDate: 'Koniec w dniu',
		stopHourDay: 'Koniec o godzinie',
		stopDayWeek: 'Koniec w dniu tygodnia',
		stopWeekMonth: 'Koniec w tygodniu miesiąca',
		offset: 'Przesunięcie czasu (min)',
		manualTime: 'Czas ustawiany ręcznie',
		dateYmd: 'Data',
		autoDate: 'Bieżąca data',
		timeHms: 'Czas',
		autoTime: 'Bieżący czas',
		timeFormat: 'Format czasu',
		timeFormatOpt0: '12-godzinny',
		timeFormatOpt1: '24-godzinny',
		dateFormat: 'Format daty',
		backlightTime: 'Czas podświetlania LCD',
		backlightTimeOpt0: 'Zawsze włączone',
		backlightTimeOpt1: '1 min',
		backlightTimeOpt2: '2 min',
		backlightTimeOpt3: '5 min',
		backlightTimeOpt4: '10 min',
		backlightTimeOpt5: '30 min',
		screensaver_timeout: 'Włączenie wygaszacza po',
		screensaver_timeoutOpt0: 'Wyłączono',
		screensaver_timeoutOpt1: '1 min',
		screensaver_timeoutOpt2: '2 min',
		screensaver_timeoutOpt3: '5 min',
		screensaver_timeoutOpt4: '10 min',
		screensaver_timeoutOpt5: '30 min',
		backlightLevel: 'Poziom podświetlenia',
		slaveBacklightLevel: 'Poziom podświetlenia ekranu dodatkowego',
		expandBacklightLevel: 'Poziom podświetlenia konsoli',
		slaveLcdContract: 'Poziom kontrastu ekranu dodatkowego',
		ringTones: 'Dźwięk dzwonka',
		ringTonesOpt1: 'Dzwonek1.wav',
		ringTonesOpt2: 'Dzwonek2.wav',
		ringTonesOpt3: 'Dzwonek3.wav',
		ringTonesOpt4: 'Dzwonek4.wav',
		ringTonesOpt5: 'Dzwonek5.wav',
		ringTonesOpt6: 'Dzwonek6.wav',
		ringTonesOpt7: 'Dzwonek7.wav',
		ringTonesOpt8: 'Dzwonek8.wav',
		ringTonesOpt9: 'Dzwonek9.wav',
		ringTonesOpt10: 'Dzwonek10.wav',
		replaceRingTone: 'Zmień dzwonek',
		wallpaper: 'Tapeta',
		delWallpaper: 'Usuń',
		uploadWallpaper: 'Wyślij',
		cancelWallpaper: 'Anuluj',
		screensaver: 'Wygaszacz',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			dhcpTime: 'Włącz/wyłącz aktualizacje czasu telefonu IP zgodnie z czasem serwera DHCP.',
			replaceRingTone: 'Zalecany format pliku dźwiękowego: 16-bit, wave; rozmiar poniżej 800 kB dla telefonu z wyświetlaczem kolorowym oraz poniżej 300 kB dla telefonu z wyświetlaczem monochromatycznym.',
			timeZone: 'Wybierz swoją strefę czasową.',
			updateInterval: 'Ustaw, co jaki czas telefon ma porównywać czas z serwerem.',
			daylight: 'Ustawienia zmiany czasu na letni.',
			manualTime: 'Włącz/wyłącz ręczne ustawianie czasu.',
			timeFormat: 'Ustaw 12- lub 24-godzinny format czasu.',
			dateFormat: 'Ustaw format wyświetlania daty.',
			backlightTime: 'Ustaw czas podświetlenia wyświetlacza.',
			screensaver_timeout: 'Ustaw czas, po którym będzie włączał się wygaszacz.',
			backlightLevel: 'Dostosowywanie jasności podświetlenia telefonu.',
			ringTones: 'Wybór dzwonka telefonu.',
			pictureSize: 'Zalecana rozdzielczość zdjęcia to 461x278 pikseli; rozmiar pliku – poniżej 500 KB.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Wyłączono',
		enable: 'Włączono',
		off: 'Wyłączono',
		on: 'Włączono',
		forward: 'Przenoszenie połączeń',
		always: 'Zawsze',
		busy: 'Gdy zajęty',
		noAnswer: 'Gdy nie odbiera',
		afterRingTime: 'Po czasie (s)',
		
		target: 'Przenieś na numer',
		onCode: 'Kod włączenia',
		offCode: 'Kod wyłączenia',
		
		dnd: 'Nie przeszkadzać (DND)',
		dndOnCode: 'Kod włączenia DND',
		dndOffCode: 'Kod wyłączenia DND',
		authNum: 'Numery autoryzowane dla DND (oddzielone przecinkami)',
		
		generalInfo: 'Informacje ogólne',
		liveDialpad: 'Klawiatura',
		interDigitTime: 'Czas między wyborem cyfr (s)',
		autoAnswer: 'Automatyczne odbieranie',
		autoAnswerDelay: 'Opóźnienie automatycznego odbierania (s)',
		ignoreMissedCall: 'Ignoruj połączenia nieodebrane',
		callWaiting: 'Połączenie oczekujące',
		hotline: 'Gorąca linia',
		hotlineTimeout: 'Opóźnienie gorącej linii (0~180 s)',
		keyAsSend: 'Przycisk wysyłania',
		dialNowTimeout: 'Opóźnienie dla natychmiastowego wybierania (s)',
		busyToneTimer: 'Sygnał zajętości po zakończeniu połączenia (s)',
		returnCodeWhenRefuse: 'Kod zwrotny w przypadku odrzucenia',
		returnCodeWhenDnd: 'Kod zwrotny w przypadku DND',
		r404: '404 (Nie znaleziono)',
		r480: '480 (Chwilowo niedostępny)',
		r486: '486 (Zajęty)',
		rfc2543Hold: 'HOLD RFC 2543',
		useOutboundProxyInDialog: 'Wykorzystaj wychodzący serwer proxy podczas rozmowy',
		loginTimeout: 'Czas ponownego logowania (1~1000 min)',
		hidedtmf: 'Ukryj DTMF',
		multicastCodec: 'Kodek dla Multicast',
		watchdog: 'Watch Dog',
		
		audioSettings: 'Ustawienia audio',
		callWaitingTone: 'Sygnał połączenia oczekującego',
		headset: 'Głośność zestawu słuchawkowego',
		handset: 'Głośność słuchawki',
		handfree: 'Głośność zestawu głośnomówiącego',
		ringer: 'Głośność dzwonka',
		headsetSend: 'Regulacja poziomu głośności zestawu słuchawkowego',
		handsetSend: 'Regulacja poziomu głośności słuchawki',
		handfreeSend: 'Regulacja poziomu głośności w zestawie głośnomówiącym',
		ringerDeviceForHeadset: 'Dzwonek dla zestawu słuchawkowego',
		ringerDeviceForHeadsetOpt0: 'Użyj głośnika',
		ringerDeviceForHeadsetOpt1: 'Użyj zestawu słuchawkowego',
		
		transferSettings: 'Ustawienia transferu',
		blindTransferOnHook: 'Transfer bez anonsowania',
		attendedTransferOnHook: 'Transfer z anonsowaniem',
		transferOnConHangUp: 'Transfer na konferencję po rozłączeniu',
		transferModeViaDsskey: 'Tryb transferu poprzez przycisk DSS',
		transferModeViaDsskeyOpt0: 'Nowe połączenie',
		transferModeViaDsskeyOpt1: 'Transfer z anonsowaniem',
		transferModeViaDsskeyOpt2: 'Transfer bez anonsowania',
		
		callPickup: 'Przechwytywanie połączeń',
		directCallPickup: 'Przechwytywanie połączeń bezpośrednich',
		directCallPickupCode: 'Kod przechwytywania połączeń bezpośrednich',
		groupCallPickup: 'Przechwytywanie połączeń grupowych',
		groupCallPickupCode: 'Kod odbierania połączeń grupowych',
		
		accept_sip_trust_server_only: 'Blokuj połączenia na adresy IP',
		recordUserId: 'ID użytkownika nagrywającego',
		extFunction: 'Port EXPAN',
		RET: 'Konsola',
		EHS: 'Bezprzewodowe słuchawki EHS',

		holdOnConference: 'Zawieszenie konferencji na czas dodawania uczestnika',

		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			forward: 'Ustaw przenoszenie połączeń.',
			alwaysTarget: 'Numer docelowy dla wszystkich przenoszonych połączeń.',
			alwaysOnCode: 'Kod funkcji, który telefon wyśle, aby włączyć przenoszenie wszystkich połączeń przychodzących.',
			alwaysOffCode: 'Kod funkcji, który telefon wyśle, aby wyłączyć przenoszenie wszystkich połączeń przychodzących. ',
			busyTarget: 'Numer docelowy dla przenoszonych połączeń, gdy użytkownik jest zajęty.',
			busyOnCode: 'Kod funkcji, który telefon wyśle, aby włączyć przenoszenie połączeń przychodzących, gdy użytkownik jest zajęty. ',
			busyOffCode: 'Kod funkcji, który telefon wyśle, aby wyłączyć przenoszenie połączeń przychodzących, gdy użytkownik jest zajęty. ',
			afterRingTime: 'Czas oczekiwania na odebranie połączenia, nim zostanie ono przeniesione.',
			noAnswerTarget: 'Numer docelowy dla przenoszonych połączeń, gdy użytkownik nie odbiera przez dany czas.',
			noAnswerOnCode: 'Kod funkcji, który telefon wyśle, aby włączyć przenoszenie połączeń przychodzących, gdy użytkownik nie odbiera przez dany czas.',
			noAnswerOffCode: 'Kod funkcji, który telefon wyśle, aby wyłączyć przenoszenie połączeń przychodzących, gdy użytkownik nie odbiera przez dany czas.',
			
			dndOnCode: 'Kod funkcji, który telefon wyśle, aby włączyć tryb Nie przeszkadzać (DND).',
			dndOffCode: 'Kod funkcji, który telefon wyśle, aby wyłączyć tryb Nie przeszkadzać (DND).',
			
			liveDialpad: 'Włącz/wyłącz automatyczne wybieranie na interfejsie użytkownika.',
			interDigitTime: 'Czas opóźnienia automatycznego wybierania na klawiaturze.',
			autoAnswer: 'Włącz/wyłącz automatyczne odbieranie.',
			autoAnswerDelay: 'Ustawienie czasu (w sekundach), po jakim telefon automatycznie odbierze przychodzące połączenie.',
			callWaiting: 'Obsługa połączeń oczekujących.',
			hotline: 'Ustaw numer gorącej linii.',
			hotlineTimeout: 'Ustawianie czasu opóźnienia połączenia z gorącą linią.',
			keyAsSend: 'Ustaw przycisk wysyłania, potwierdzający koniec wybierania numeru. ',		      
      dialNowTimeout: 'Odstępy czasowe dla natychmiastowego wybierania.',
      busyToneTimer: 'Czas, po którym będzie słychać sygnał zajętości po zakończeniu połączenia. ',
			returnCodeWhenRefuse: 'Ustaw wiadomość zwrotną w przypadku odrzucenia połączenia.',
			returnCodeWhenDnd: 'Ustaw wiadomość zwrotną dla funkcji Nie przeszkadzać (DND).',
			rfc2543Hold: 'Dwa standardy dla wstrzymywania połączenia (HOLD) — konieczne połączenie z serwerem.',
			useOutboundProxyInDialog: 'Włącz/wyłącz wychodzący serwer proxy dla rozmowy.',
			loginTimeout: 'Czas (w minutach), po którym będzie można ponownie zalogować się do interfejsu www, jeśli pierwsze logowanie się nie powiedzie.',
			acceptSipTrustServerOnly: 'Włącz/wyłącz przyjmowanie przez telefon tylko wiadomości SIP z serwerów SIP oraz wychodzącego serwera proxy.',

			callWaitingTone: 'Włącz/wyłącz sygnał powiadamiania o nowym połączeniu w czasie aktualnego połączenia (włączona obsługa połączeń oczekujących).',
			ringerDeviceForHeadset: 'Wybór dzwonka dla zestawu słuchawkowego.',

			blindTransferOnHook: 'Włącz/wyłącz transfer bez anonsowania.',
			attendedTransferOnHook: 'Włącz/wyłącz transfer z anonsowaniem lub do wolnego użytkownika.',
			transferOnConHangUp: 'Włącz/wyłącz transfer do dwóch kolejnych osób, gdy osoba inicjująca połączenie się rozłączy.'
		}
	}	
},
phoneDNDAndForwardHtml = {
	form1: {
		phone: 'Wszystkie konta',
		custom: 'Wybrane konto',
		forward: 'Przenoszenie połączeń',
		emergency: 'Wyjątki',
		authNum: 'Dozwolone numery (oddzielone przecinkami)',
		mode: 'Tryb',
		account: 'Konto',
		disable: 'Wyłączono',
		enable: 'Włączono',
		off: 'Wyłączono',
		on: 'Włączono',
		always: 'Zawsze',
		busy: 'Gdy zajęty',
		noAnswer: 'Gdy nie odbiera',
		afterRingTime: 'Po czasie (s)',
		
		target: 'Przenieś na numer',
		onCode: 'Kod włączenia',
		offCode: 'Kod wyłączenia',
		

		dndStatus: 'Status DND',
		dnd: 'Nie przeszkadzać (DND)',
		dndOnCode: 'Kod włączenia DND',
		dndOffCode: 'Kod wyłączenia DND',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			forward: 'Ustaw przenoszenie połączeń.',
			alwaysTarget: 'Numer docelowy dla wszystkich przenoszonych połączeń.',
			alwaysOnCode: 'Kod funkcji, który telefon wyśle, aby włączyć przenoszenie wszystkich połączeń przychodzących.',
			alwaysOffCode: 'Kod funkcji, który telefon wyśle, aby wyłączyć przenoszenie wszystkich połączeń przychodzących.',
			busyTarget: 'Numer docelowy dla przenoszonych połączeń, gdy użytkownik jest zajęty.',
			busyOnCode: 'Kod funkcji, który telefon wyśle, aby włączyć przenoszenie połączeń przychodzących, gdy użytkownik jest zajęty. ',
			busyOffCode: 'Kod funkcji, który telefon wyśle, aby wyłączyć przenoszenie połączeń przychodzących, gdy użytkownik jest zajęty.',
			afterRingTime: 'Czas oczekiwania na odebranie połączenia, nim zostanie ono przeniesione.',
			noAnswerTarget: 'Numer docelowy dla przenoszonych połączeń, gdy użytkownik nie odbiera przez dany czas.',
			noAnswerOnCode: 'Kod funkcji, który telefon wyśle, aby włączyć przenoszenie połączeń przychodzących, gdy użytkownik nie odbiera przez dany czas.',
			noAnswerOffCode: 'Kod funkcji, który telefon wyśle, aby wyłączyć przenoszenie połączeń przychodzących, gdy użytkownik nie odbiera przez dany czas.',
			
			dndOnCode: 'Kod funkcji, który telefon wyśle, aby włączyć tryb Nie przeszkadzać (DND).',
			dndOffCode: 'Kod funkcji, który telefon wyśle, aby wyłączyć tryb Nie przeszkadzać (DND).',
			
		}
	}
},
phoneUpgradeHtml = {
	div1: {
		ver: 'Wersja',
		fmVer: 'Wersja firmware',
		hdVer: 'Wersja hardware',
		
		resetToFactory: 'Przywróć ustawienia fabryczne',
		reboot: 'Uruchom ponownie',		
		
		upgradeHeader: 'Aktualizuj firmware',
		selectFw: 'Wybierz firmware',
		upgrade: 'Aktualizacja',
		
		tips: {
			upgradeHeader: 'Aby zaktualizować oprogramowanie, wybierz jego najnowszą wersję wydaną przez dostawcę.'
		}
	},
	commonText: {
		resetConfirm: 'Czy chcesz przywrócić ustawienia fabryczne?',
		resetSuccess: 'Przywracanie ustawień fabrycznych zakończone pomyślnie. Telefon automatycznie włączy się ponownie.',
		resetFail: 'Przywracanie ustawień fabrycznych zakończone niepowodzeniem, proszę spróbować ponownie!',
		
		rebootConfirm: 'Czy chcesz uruchomić ponownie?',
		
		uploadFilePrompt: 'Potwierdź wgranie pliku:',
		upgradeMsg: 'Prosimy nie wyłączać zasilania!',
		upgradeText: 'Aktualizowanie, proszę czekać...',
		
		upgradeFail: 'Aktualizowanie zakończone niepowodzeniem, proszę spróbować ponownie!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'Funkcja PCAP',
		start: 'Rozpocznij',
		stop: 'Zakończ',
		exportStr: 'Eksportuj',
		
		debug: 'Debug'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Auto Provision',
		PnPEnable: 'PnP Aktywny',
		DHCPEnable: 'DHCP Aktywny',
		provisioningServer: 'Serwer provisioningu',
		userName: 'Nazwa użytkownika',
		password: 'Hasło',
		commonAESKey: 'Klucz AES Common',
		MACAESKey: 'Klucz AES MAC-Oriented',
		checkNewConfig: 'Sprawdź nową konfigurację',
		off: 'Wyłączono',
		on: 'Włączono',
		repeatedly: 'Okresowo',
		interval: 'Częstotliwość sprawdzania (min)',
		weekly: 'Tygodniowo',
		time: 'Czas',
		dayOfWeek: 'Dzień tygodnia',
		
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			PnPEnable: 'Wysyłanie żądania do serwera, aby otrzymać adres URL do pobrania ustawień.',
			DHCPEnable: 'Otrzymywanie adresu URL do pobrania ustawień z serwera DHCP.',
			provisioningServer: 'Ustawianie adresu serweru provisioningu',
			password: 'Hasło serwera',
			checkNewConfig: 'Sprawdzanie konfiguracji telefonu na serwerze po każdym restarcie.'
		}
	},
	showText: {
		weekly:  ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Importuj / Eksport konfiguracji',
		importFile: 'Importuj plik',
		importStr: 'Importuj',
		exportStr: 'Eksportuj',
		exportUserData: 'Eksportuj dane użytkownika',
		exportImportConfig: 'Import / Eksport  pliku CFG',
		
		exportSyslog: 'Eksportuj rejestr systemu',
		logLocation: 'Lokalizacja rejestru',
		logLocationOpt0: 'Lokalnie',
		logLocationOpt1: 'Serwer', 
		serverName: 'Nazwa serwera',
		logLevel: 'Poziom rejestru',
		logOpt0: 'Krytyczny',
		logOpt1: 'Błąd',
		logOpt2: 'Ostrzeżenie',
		logOpt3: 'Informacja',
		logOpt4: 'Debug',
		exportStr2: 'Eksportuj',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			exportImportConfig: 'Importowany lub eksportowany plik musi być w formacie odpowiednim dla auto provisioningu. W eksportowanym pliku są zapisywane wyłącznie zmiany w konfiguracji, jeśli więc takich zmian nie było, plik będzie pusty.',
			importExportCfg: 'Eksportuj bieżące ustawienia telefonu lub importuj wybrany plik z konfiguracją. Po imporcie konfiguracji telefon ponownie się uruchomi.',
			exportSyslog: 'Wybór lokalizacji do eksportu rejestru - lokalnie lub na określony serwer.'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Lista adresów IP uprawnionych do korzystania z Action URI',
		remoteControl:'Zdalne sterowanie',
		cstaControl: 'CSTA sterowanie',
		disable: 'Wyłączono',
		enable: 'Włączono',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	       },
},
phoneActionUrlHtml = {
	form1: {
		actionUrlItem: ['setupCompletedUrl','registeredUrl','unregisteredUrl','registerFailedUrl','offHookUrl','onHookUrl','incomingCallUrl','outgoingCallUrl','establishedUrl','terminatedUrl','openDNDUrl','closeDNDUrl','openAlwaysForwardUrl','closeAlwaysForwardUrl','openBusyForwardUrl','closeBusyForwardUrl','openNoAnswerForwardUrl','closeNoAnswerForwardUrl','transferCallUrl','blindTransferUrl','attendedTransferUrl','holdUrl','unHoldUrl','muteUrl','unMuteUrl', 'missedCallUrl','IPChangedUrl','idleToBusyUrl','busyToIdleUrl','rejectIncomingCallUrl','answerNewIncomingCallUrl','transferFailedUrl','transferFinishedUrl','forwardIncomingCallUrl','autopFinishUrl','openCallWaitingUrl','closeCallWaitingUrl','headsetUrl','handfreeUrl','cancelCallOutUrl','remoteBusyUrl','callRemoteCanceledUrl'],
		actionUrlNameList: [ 'Zapisano konfigurację','Zarejestrowano','Nie zarejestrowano','Błąd rejestracji','Podniesienie słuchawki','Odłożenie słuchawki','Rozmowa przychodząca','Rozmowa wychodząca','Zestawione połączenie','Zakończenie rozmowy','Włączono DND','Wyłączono DND','Włączenie bezwarunkowego przenoszenia połączeń','Wyłączenie bezwarunkowego przenoszenia połączeń','Włączenie przenoszenia połączeń, gdy zajęty','Wyłączenie przenoszenia połączeń, gdy zajęty','Włączenie przenoszenia połączeń, gdy nie odbiera','Wyłączenie przenoszenia połączeń, gdy nie odbiera','Transfer rozmowy','Transfer bez anonsowania','Transfer z anonsowaniem','Zawieszenie rozmowy (Hold)','Powrót do zawieszonej rozmowy','Wyciszenie mikrofonu (Mute)','Wyłączenie wyciszenia mikrofonu','Nieodebrane połączenie','Zmiana adresu IP','Zmiana z wolnego na zajętego','Zmiana z zajętego na wolnego','Odrzucenie połączenia przychodzącego','Odebranie połączenia przychodzącego','Nieudany transfer','Zakończony transfer','Przekierowanie połączenia przychodzącego','Zakończenie autoprovisioningu','Włączenie połączenia oczekującego','Wyłączenie połączenia oczekującego','Zestaw słuchawkowy','Tryb głośnomówiący','Rezygnacja z zamówionego połączenia','Zajęty telefon zdalny','Rezygnacja z połączenia z telefonem zdalnym'],		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	}
},

phoneTonesHtml = {
	form1: {
		       /*country list*/
		custom: 'Użytkownika',
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

		selectCountry: 'Wybierz państwo',
		dial: 'Wybieranie',
		ringBack: 'Sygnał zwrotny',
		busy: 'Zajęty',
		congestion: 'Przeciążenie',
		callWaiting: 'Połączenie oczekujące',
		dialRecall: 'Odwołanie połączenia',
		info: 'Info',
		stutter: 'Przerywanie',
		message: 'Wiadomość',
		autoAnswer: 'Autoodpowiedź',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	}
},
phoneDialPlanHtml = {
	mytabMenu: {
		replaceRule: 'Zmień zasadę wybierania',
		dialNow: 'Wybierz teraz',
		areaCode: 'Kod strefy',
		blockOut: 'Blokuj'
	},
	replaceRuleTitle: ['Lp.', 'Numer', 'Zamień', 'Konto'],
	dialNowsTitle: ['Lp.', 'Zasada Wybierz teraz', 'Konto'],
	replaceRuleForm: {
		num: 'Numer',
		replace: 'Zamień na',
		account: 'Konto',
		add: 'Dodaj',
		edit: 'Edytuj',
		del : 'Usuń',
		save: 'Zapisz'
	},
	dialNowsForm: {
		rule: 'Zasada Wybierz teraz',
		account: 'Konto',
		add: 'Dodaj',
		edit: 'Edytuj',
		del : 'Usuń',
		save: 'Zapisz'
	},
	form3: {
		code: 'Kod',
		minLen: 'Minimalna długość',
		maxLen: 'Maksymalna długość',
		areaCodeAccount: 'Konto',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Blokuj numer',
		account: 'Konto',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	}
},
phoneRingHtml = {
	form1: {
		alterInfoTitle: 'Tekst Alert Info',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		tips: {
		}
	       }
},
phoneVoiceHtml = {
	form1: {
		disable: 'Wyłączono',
		enable: 'Włączono',
		
		echoCancellation: 'Kancelacja echa',
		echoCanceller: 'Kancelator echa',
		echoCancellerOpt0: 'Niski poziom',
		echoCancellerOpt1: 'Średni poziom',
		echoCancellerOpt2: 'Wysoki poziom',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Bufor jittera',
		type: 'Typ',
		typeOpt0: 'Stałe',
		typeOpt1: 'Adaptacyjne',
		minDelay: 'Minimalne opóźnienie',
		maxDelay: 'Maksymalne opóźnienie',
		normalDelay: 'Zwykłe opóźnienie',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			echoCancellation: 'Ustawienia usuwania (kancelacji) echa.',
			echoCanceller: 'Wybierz poziom usuwania (kancelacji) echa.',
			vad: 'Wykrywanie aktywności głosowej — VAD.',
			cng: 'Generator komfortowego szumu — CNG.',
			jitterBuffer: 'Wspólny zakres danych — pakiety danych oraz głosowe można zbierać, przechowywać i wysyłać równomiernie do procesora dźwięku.'
		}
	}
},

phoneTrustedCertificatesHtml = {
    form1: {
        index: 'Lp.',
        issued_to: 'Wydany dla',
        issued_by: 'Wydany przez',
        expiration: 'Data ważności',
        delete_select: 'Usuń',
        import_trusted_certificates: 'Importuj zaufane certyfikaty',
        certificationfile: 'Importuj plik z zaufanymi certyfikatami',
        import_server_certificates: 'Importuj certyfikaty serwera',
        server_certificationfile: 'Importuj plik z certyfikatami serwera',
        btn_upload: 'Importuj',
        btn_delete: 'Usuń',
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj'
	},
    showText: {
		delConfirm: 'Skasować wybrane pliki?',
		selectEmpty: 'Proszę wybrać przynajmniej jeden wpis.'
	}
},


phoneLockHtml = {
	form1: {

		disable: 'Wyłączono',
		enable: 'Włączono',

		keypad_lock: 'Blokada telefonu',
		keypadlock_enable: 'Status blokady',
		keypadlock_type: 'Typ blokady',
		keypadlock_password: 'PIN odblokowujący (0-15 cyfr)',
		delay_lock: 'Czas na wpisanie PIN (1-3600 s)',
		emergency_call: 'Numery alarmowe',
		keypad_lock_menu_key: 'Przyciski menu',
		keypad_lock_function_key: 'Programowalne',
		keypad_lock_all_keys: 'Wszystkie',
    keypad_lock_answer_call_only:'Tylko odbiór połączeń',

		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',

		tips: {
			emergency_call: 'Numery alarmowe dostępne w przypadku blokady telefonu.'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: 'Wyłączono',
		enable: 'Włączono',

		tr069: 'TR069',
		tr069_enable: 'Włącz TR069',
		serveraddress: 'URL ACS',
		serverport: 'Port',
		username: 'Nazwa użytkownika ACS',
		password: 'Hasło ACS',
		periodic_inform_enable: 'Włącz informacje okresowe',
		periodic_inform_interval: 'Interwał informacji okresowych (s)',
		connection_request_username: 'Nazwa uwierzytelniająca żądanie połączenia',
		connection_request_password:'Hasło uwierzytelniające żądanie połączenia',

		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',

		tips: {
			tr069_enable: 'Włącz/wyłącz funkcję TR069',
			ACS_URL: 'Adres dostępowy URL do ACS (Auto Configuration Servers - serwerów do automatycznej konfiguracji).',
			ACS_username: 'Nazwa użytkownika uwierzytelniająca do serwera ACS',
			ACS_password: 'Hasło uwierzytelniające do serwera ACS.',
			periodic_inform_enable: 'Włącz/wyłącz informacje o konfiguracji telefonu wysyłane okresowo do ACS.',
			periodic_inform_interval: 'Zakres: 5-4294967295',
			connecting_request_username: 'Nazwa użytkownika uwierzytelniająca żądanie połączenia przychodzącego.',
			connecting_request_password: 'Hasło uwierzytelniające żądanie połączenia przychodzącego.'

		}
	}
},


phoneSecurityHtml = {
	form1: {
		passwdModify: 'Zmień hasło',
		userType: 'Typ użytkownika',
		currentPasswd: 'Aktualne hasło',
		newPasswd: 'Nowe hasło',
		confirmPasswd: 'Potwierdź hasło',
		
		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',
		
		tips: {
			userType: 'Wybierz swój typ. Jeśli logujesz się jako użytkownik, możesz zmienić tylko swoje hasło. Jeśli logujesz się jako administrator, możesz zmienić zarówno hasło użytkownika, jak i administratora.'
		}
	},
	showText: {
		pwdNoMatch: 'Wprowadzone hasła nie są zgodne',
		modifyFailed: 'Zmiana hasła zakończona niepowodzeniem, proszę spróbować ponownie!'
	}
},
contactsHtml = {
	mytabMenu: ['Kontakty lokalne', 'Czarna lista'],
	tableHeader: ['Lp.', 'Nazwa', 'Służbowy', 'Komórka', 'Inny numer', 'Konto'],
	buttonDiv: {
		save: 'Zapisz',
		del: 'Usuń',
		moveToBlack: 'Przenieś na czarną listę',
		moveToWhite: 'Przenieś do kontaktów'
	},
	editDiv: {
		contacts: 'Kontakt',
		name: 'Nazwa',
		officeNum: 'Służbowy',
		mobileNum: 'Komórka',
		otherNum: 'Inny numer',
		account: 'Konto',
		accountOpt8: 'Auto',
		accountOpt1: 'Konto 1',
		accountOpt2: 'Konto 2',
		accountOpt3: 'Konto 3',
		accountOpt4: 'Konto 4',
		accountOpt5: 'Konto 5',
		accountOpt6: 'Konto 6',
		ring: 'Dzwonek',
		ringOpts: ['Domyślny', 'Dzwonek1.wav', 'Dzwonek2.wav', 'Dzwonek3.wav', 'Dzwonek4.wav', 
		           'Dzwonek5.wav', 'Dzwonek6.wav', 'Dzwonek7.wav', 'Dzwonek8.wav', 'Dzwonek9.wav', 'Dzwonek10.wav'],
		photo: 'Zdjęcie',
		defaultPhoto: 'Domyślne',
		add: 'Zapisz jako nowy',
		deletePhoto: 'Usuń',
		uploadPhoto: 'Wyślij zdjęcie',
		pictureSize: 'Zalecana rozdzielność zdjęcia to 100x135 pikseli; jego rozmiar nie powinien przekraczać 250 KB.',
		edit: 'Zapisz zmiany i wyczyść',
		search: 'Wyszukaj',
		
		importAndExport: 'Importuj i eksportuj kontakty lokalne',
		importFile: 'Importuj kontakty lokalne',
		importStr: 'Importuj',
		exportStr: 'Eksportuj'
	},
	
	shwoText: {
		delConfirm: 'Usunąć wybrane kontakty?',
		delConfirm1: 'Uwaga: zdjęcie kontaktu nie zostanie zachowane!', 
		selectEmpty: 'Proszę wybrać co najmniej jeden wpis.',
		selectTooMuch: 'Zbyt wiele wybranych wpisów!',
		nameEmpty: 'Nazwa nie może być pusta!',
		nameExist: 'Podana nazwa już istnieje!',
		phonebookFull: 'Przekroczono dopuszczalną liczbę kontaktów w książce telefonicznej.',
		blacklistFull: 'Przekroczono dopuszczalną liczbę kontaktów na czarnej liście.',
		contentEmpty: 'Zawartość nie może być pusta!',
		notFind: 'Nie znaleziono kontaktu.'
	}
},

multicastHtml = {
	form1: {
		multicastListening: 'Nasłuchiwanie Multicast',
		pagingBarge: 'Priorytetowe rozgłoszenie',
		ignoreDND: 'Ignoruj "Nie przeszkadzać" (DND)',
		pagingPriorityActive: 'Włączenie priorytetów',
		ipAddr: 'IP',
		listeningAddr: 'Nasłuchiwane adresy',
	        label: 'Opis',  
		channel: 'Kanał',
		priority: 'Priorytet',
		disabled: 'Wyłączono',
		enabled: 'Włączono',

		pagingListLabel: 'Lista rozgłoszeniowa',
		index: 'Lp.', 
		pagingAddr: 'Adres rozgłoszeniowy',


		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',

		tips: {
		}
	}
},
LDAPHtml = {
	form1: {
		disable: 'Wyłączono',
		enable: 'Włączono',

		LDAP:'LDAP',
		enable_ldap:'Status LDAP',

        name_filter:'Filtrowanie nazw LDAP',
        number_filter:'Filtrowanie numerów LDAP',

        name_attributes:'Atrybuty nazwy LDAP',
        number_attributes:'Atrybuty numeru LDAP',
        display_name:'Nazwa wyświetlana LDAP',

        server_address:'Adres serwera',
        port:'Port',
        base:'Baza',
        user_name:'Nazwa użytkownika',
        password:'Hasło',
        max_hits:'Maksymalna liczba wyników',
        protocol_version:'Protokół',
        version2:'Wersja 2',
        version3:'Wersja 3',
        optionNo: 'Nie',
		optionYes: 'Tak',

        match_incoming_calls:'Przeszukiwanie LDAP dla połączeń przychodzących',
        ldap_lookup_for_dial:'Przeszukiwanie LDAP dla połączeń wychodzących',
        sort_result:'Sortowanie wyników LDAP',

		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',

		tips: {
			LDAP: 'Zdalna książka telefoniczna LDAP.',
			name_filter: 'Telefon będzie filtrował kontakty w książce LDAP na serwerze po literach.',
			number_filter: 'Telefon będzie wyszukiwał kontakty w książce LDAP na serwerze po cyfrach.',
			server_address: 'Adres serwera LDAP, wartość może być wpisana jako adres IP lub nazwa domeny.',
			port: 'Port serwera LDAP.',
			base: 'Przeszukiwanie katalogu głównego serwera.',
			user_name: 'Nazwa użytkownika do logowania na serwerze LDAP.',
			password: 'Hasło do logownaia na serwerze LDAP.',
			max_hits: 'Maksymalna liczba wyników wyszukiwania.',
			name_attributes: 'Atrybuty poszukiwanej nazwy w książce LDAP.',
			number_attributes: 'Atrybuty poszukiwanego numeru w książce LDAP.',
			display_name: 'Typ nazwy wyświetlanej w wyniku wyszukiwania.',
			match_incoming_calls: 'Przeszukiwanie nazw wyświetlanych w książce LDAP dla połączeń przychodzących.',
			ldap_lookup_for_dial: 'Przeszukiwanie nazw wyświetlanych w książce LDAP podczas wybierania numeru.',
			sort_result: 'Sortowanie wyników wyszukiwania w książce LDAP.'
		}
	}
},

XMLPhonebookHtml = {
	form1: {
        disable: 'Wyłączono',
		enable: 'Włączono',

        index:'Lp.',
        remote_url:'Zdalne URL',
        display_name:'Nazwa wyświetlana',

		xml_remote_phonebook:'Ustawienia wyszukiwania',

        SRemoteName:'Wyszukiwanie w zdalnej książce telefonicznej',
        SRemoteNameFlashTime:'Opóźnienie wyszukiwania (s)',

		butConfirm: 'Potwierdź',
		butCancel: 'Anuluj',

		tips: {
			SRemoteName: 'Włącz/wyłącz wyszukiwanie w zdalnej książce telefonicznej dla połączeń przychodzących i wykonywanych.',
			SRemoteNameFlashTime: 'Ustawienie częstotliwości (w sekundach) aktualizowania przez telefon danych ze zdalnej książki telefonicznej. Wartość 0 oznacza, że telefon nie będzie regularnie aktualizował danych.'
		}
	}
},

phoneCallInfoHtml = {
	mytabMenu: ['Wykonane', 'Nieodebrane', 'Odebrane', 'Przeniesione'],
	tableHeader: ['Lp.', 'Data/Godzina', 'Czas', 'Lokalne ID', 'Nazwa', 'Nr telefonu']
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
