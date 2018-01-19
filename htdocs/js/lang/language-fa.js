//公共的验证信息
var commonValidMsg = {
	missingMsg: 'این قسمت الزامی است',
	invalidIpMsg: 'IP نامعتبر'
},
uploadCommon = {
	uploadFilePrompt: 'این برای آپلود فایل است:',
	uploadMsg: 'لطفاً وسیله را خاموش نکنید!',
	uploadText: 'در حال وارد کردن، لطفاً صبر کنید...',
	uploadSuccess: 'وارد کردن با موفقیت انجام شد!',
	uploadFail: 'وارد کردن انجام نشد، لطفاً دوباره امتحان کنید!'
},
alertMsg = {
	titlePrompt: 'فرمان',
	titleConfirm: 'تایید',
	noChange: 'بدون تغییر!',
	invalidVal: 'مقدار نامعتبر!',
	saveSuccess: 'ذخیره سازی با موفقیت انجام شد!',
	enabledOptionsEmpty: 'کدک های فعال شده نمی تواند خالی باشد!',
	codecsConflict: 'iLBC_13_3 و iLBC_15_2 همزمان قابل اعمال نیستند!',
	emptyContent: 'محتوا خالی است!',
	invalidDTMF: 'DTMF نامعتبر!',
	webServicesDisable: 'سرویس وب غیرفعال شده است!',
	features: 'زمانی که کد روشن شدن تنظیم شده است کد خاموش شدن نمی تواند خالی باشد!',
	invalidAccountList: 'فهرست حساب نامعتبر!',
	dialPlanMsg1: 'لطفاً حداقل یک سابقه انتخاب کنید.',
	voiceError1: 'حداکثر تاخیر باید بزرگ تر از حداقل تاخیر باشد',
	voiceError2: 'تاخیر عادی باید بین تاخیر حداقل و حداکثر باشد',
	fileIsEmpty: 'فایل خالی است!',
	upgradeFileFormateErr: 'Please choose a upgrade file(*.fw)!',
	openvpnFile: 'Please choose a OpenVPN file(*.tar/*.TAR)!',
	wallpaperFormatError: 'Filename contain Latin characters only and  PNG/JPG/BMP format images',
	systemFileCannotDelete: 'it only support delete the custom photos!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'لطفاً وسیله را خاموش نکنید!',
			rebootText: 'در حال روشن کردن دوباره، لطفاً صبر کنید...'
		},
		showProgress: {
			progressTitle: 'فرمان'
		}
	},
	ErrorInfo: {
		networkError: 'خطای شبکه، لطفاً بررسی کنید!',
		webServerError: 'خطای سرور وب، لطفاً دوباره امتحان کنید!',
		unknownError: 'خطای نامعلوم!',
		dataNoChanged: 'No Change!',
		Error_409: 'The file with this name already exists.',
		Error_413: 'The file is too large.',

		phoneBusyError: 'Talking, Please wait...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: 'خروج انجام نشد، لطفاً دوباره امتحان کنید!'
	},
	pluginInit: {
		ok: 'تایید',
		cancel: 'لغو'
	}
},
status401Html = {
	errorInfo1 : 'شما اجازه دسترسی به واسط وب را ندارید.',
	errorInfo2 : 'با گروه پشتیبانی تماس گرفته یا 3 دقیقه بعد دوباره امتحان کنید.',
	errorInfo3: 'HTTP 401 غیرمجاز'
},
//index.html
indexHtml={
	top:{
		logout: 'خروج از سیستم',
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
		basic: 'پایه',
		account: 'حساب',
		network: 'شبکه',
		dSSKey: 'کلید DSS',
		phone: 'تلفن',
		contacts: 'مخاطبین',
		security: 'امنیت'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'وب سایت',
		products: 'محصولات',
		support: 'پشتیبانی',
		download: 'دانلود',
		contactus: 'تماس با ما',
		atcomRights: '©2018 ATCOM کلیه حقوق محفوظ است.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'وضعیت',
		sWizard: 'راهنما',
		//Account
		aBasic: 'پایه',
		aCodecs: 'کدک ها',
		aAdvanced: 'پیشرفته',
		//NetWork
		nBasic: 'پایه',
		nWifi: 'Wi-Fi',
		nAdvanced: 'پیشرفته',
		//DSS key
		dMemory: 'کلید حافظه',
		dLink: 'کلید خط',
		dProgrammable: 'کلید برنامه پذیر',
		dExt: 'کلید EXT',
		dAetAdv: 'EXT Settings',

		//Phone
		pDNDAndForward: 'Forward&DND',
		pPrefetence: 'ترجیح',
		pFeatures: 'ویژگیها',
		pUpgrade: 'ارتقاء',
		pAuto: 'تامین خودکار',
		pConfig: 'ترکیب بندی',
		pRemoteControl: 'Remote Control',
		pActionUrl: 'Action URL',
		pDialPlan: 'برنامه شماره گیری',
		pVoice: 'صدا',
		pRing: 'Alert Info',
		pTones: 'تن ها',
		pSms: 'SMS',
		pAction: 'URL اقدام',
		pSoftkey: 'جانمایی کلید موقت',
		pPhoneLock: 'Phone Lock',
		pSecurity: 'امنیت',
		pPhoneTr069: 'TR069',
		pDebug: 'دیباگ',
		//Contacts
		cContacts: 'مخاطبین',
		cXMLPhonebook: 'دفتر تلفن راه دور',
		cPhoneCall: 'اطلاعات تماس تلفنی',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'سابقه تماس ها',
		//Security
		sPassword: 'رمز',
		sStrusted: 'مجوزهای مورد اطمینان',
		sServer: 'مجوزهای سرور'
	}
},
statusHtml = {
	version: {
		verTitle: 'نسخه',
		fwVer: 'نسخه ثابت افزار',
		hwVer: 'نسخه سخت افزار',
		product_name: 'Model'
	},
	networkConfig:{
		netConfigTitle: 'Network',
		internetPortType: 'Internet Port', /*ipv4 = 1, ipv6 = 2, ipv4 & ipv6 = 3*/
		internType1: 'IPv4',
		internType2: 'IPv6',
		internType3: 'IPv4 & IPv6'
	},

	network: {
		netTitle: 'IPv4',
		internetPort: 'نوع درگاه اینترنت',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP استاتیک',
		ip: 'آدرس IP',
		subnetMask: 'ساب نت ماسک',
		gatewag: 'گیت وی',
		primaryDNS: 'DNS اولیه',
		secondaryDNS: 'DNS ثانویه',
		mac: 'آدرس MAC',
		wiredMac: 'Wired MAC Address',
		WIFIMac: 'WiFi MAC Address',
		vpnStatus: 'وضعیت VPN',
		vpnStatusOpt0: 'در حال اتصال',
		vpnStatusOpt1: 'غیرفعال',
		vpnStatusOpt2: 'اتصال_ناموفق',
		vpnStatusOpt3: 'متصل',
		vpnIp: 'VPN IP'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'نوع درگاه اینترنت',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP استاتیک',
		ip: 'آدرس IP',
		networkPrefix: 'Network Prefix',
		gatewag: 'گیت وی',
		primaryDNS: 'DNS اولیه',
		secondaryDNS: 'DNS ثانویه'
	},
	tips: {
		netConfigTip: 'Displays the IP address mode of the device.',
		verTip: 'نمایش نسخه کنونی ثابت افزار و نسخه سخت افزار وسیله.',
		netTip: 'نمایش جزییات پیکربندی شبکه تلفن.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Network',
		InternetPort: 'درگاه اینترنت',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: 'آدرس IP استاتیک',

		staticIpSettings: 'آدرس IP استاتیک',
		ip: 'آدرس IP',
		subnetMask: 'ساب نت ماسک',
		defaultGateway: 'گیت وی پیش فرض',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: 'DNS اولیه',
		secondaryDNS: 'DNS ثانویه',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6 Prefix',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'تنظیمات SIP',
		accountActive: 'حساب فعال',
		disable: 'غیرفعال',
		enable: 'فعال',
		labelName: 'برچسب',
		displayName: 'نام نمایشی',
		registerName: 'نام ثبت',
		userName: 'نام کاربر',
		password: 'رمز',
		
		sipServer: 'سرور SIP',
		sipServerPort: 'درگاه',
		
		back: 'عقب',
		next: 'بعد',
		
		tips: {
			dhcp: 'درخواست کسب خودکار آدرس IP، ساب نت مسک، گیت وی، DNS و غیره را به سرور DHCP بدهید.',
			staticIp: 'آدرس IP، ساب نت مسک، گیت وی، DNS و غیره را دستی پیکربندی کنید.',
			labelName: 'نام روی LCD مربوط به وسیله فعلی است.',
			displayName: 'نام شماره تلفن محلی هنگام تماس در تلفن دیگر دیده می شود.',
			registerName: 'نام ثبت توسط ISP ارائه می شود.',
			userName: 'نام کاربری توسط ISP ارائه می شود.',
			password: 'رمز حساب توسط ISP ارائه می شود.',
			sipServer: 'آدرس سرور SIP توسط ISP ارائه می شود.'
		}
	},
	common: {
		finish: 'پایان',
		next: 'بعد'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'حساب',
		accountNumberOpt1: 'حساب 1',
		accountNumberOpt2: 'حساب 2',
		accountNumberOpt3: 'حساب 3',
		accountNumberOpt4: 'حساب 4',
		accountNumberOpt5: 'حساب 5',
		accountNumberOpt6: 'حساب 6',
		
		registerStatus: 'وضعیت ثبت',
		
		accountActive: 'حساب فعال',
		disable: 'غیرفعال',
		enable: 'فعال',
		labelName: 'برچسب',
		displayName: 'نام نمایشی',
		registerName: 'نام ثبت',
		userName: 'نام کاربر',
		password: 'رمز',
		
		sipServer: 'سرور SIP',
		sipServerPort: 'درگاه',
		redundancy_proxy: 'سرور ذخیره SIP',

		enableOutboundProxyServer: 'فعال سازی پراکسی سرور خروجی',
		outboundProxyServer: 'پراکسی سرور خروجی',
		outboundProxyServerPort: 'درگاه',
		make_call_without_register: 'Enable Peer to Peer',
		
		verifyServer: 'Verify server',
		transport: 'جابجایی',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'پیمایش NAT',
		TLSVersion: 'TLS Version',
		natTraversalOpt1: 'STUN',
		stunServer: 'سرور STUN',
		port: 'درگاه',
		
		voiceMail: 'پست صوتی',
		anonymousCall: 'تماس بی نام',
		off: 'خاموش',
		on: 'روشن',
		onCode: 'کد روشن شدن',
		offCode: 'کد خاموش شدن',
		anonymousCallRejection: 'رد تماس بی نام',
		ringTones: 'آهنگ های زنگ',
		ringTonesOpt0: 'رایج',
		ringTonesOpt1: 'Ring1.wav',
		ringTonesOpt2: 'Ring2.wav',
		ringTonesOpt3: 'Ring3.wav',
		ringTonesOpt4: 'Ring4.wav',
		ringTonesOpt5: 'Ring5.wav',
		ringTonesOpt6: 'Ring6.wav',
		ringTonesOpt7: 'Ring7.wav',
		ringTonesOpt8: 'Ring8.wav',
		ringTonesOpt9: 'Ring9.wav',
		ringTonesOpt10: 'Ring10.wav',
		
		butConfirm: 'تایید',
		butCancel: 'لغو',
		
		tips: {
			labelName: 'نام روی LCD مربوط به وسیله فعلی است.',
			displayName: 'نام شماره تلفن محلی هنگام تماس در تلفن دیگر دیده می شود.',
			registerName: 'نام ثبت توسط ISP ارائه می شود.',
			userName: 'نام کاربری توسط ISP ارائه می شود.',
			password: 'رمز حساب توسط ISP ارائه می شود.',
			sipServer: 'آدرس سرور SIP توسط ISP ارائه می شود.',
			enableOutboundProxyServer: 'برای پردازش سیگنال ها و کمک به عبور جریان های داده چندرسانه ای از فایروال وقتی که فایروال یا NAT وجود دارد استفاده می شود.',
			redundancy_proxy: 'An Backup SIP server failover',
			outboundProxyServer: 'پراکسی سرور خروجی.',
			verifyServer: 'verifyServer',
			transport: 'سه گزینه UDP، TCP، TLS وجود دارند. پروتکل بسته ثبت شدهUDP، TCP یا TLS است، TLS (امنیت لایه تبادل) رمزگذاری شده است.',
			natTraversal: 'فعال/غیر فعال کردن سرور STUN.',
			stunServer: 'سرور STUN به تمام کلاینت های پایانه NAT (مانند یک کامپیوتر پشت فایروال) اجازه برقراری تماس های VOIP با سرویس دهنده VOIP واقع در بیرون LAN را می دهد.',
			voiceMail: 'یک شماره پست صوتی برای حساب فعلی تعیین کنید.',
			anonymousCall: 'فعال/غیر فعال کردن تماس بی نام.',
			onCode: 'کد ویژگی را برای روشن کردن تماس بی نام تعیین کنید، تلفن با ارسال کد ویژگی به سرور تماس بی نام را فعال می کند.',
			offCode: 'کد ویژگی را برای خاموش کردن تماس بی نام تعیین کنید، تلفن با ارسال کد ویژگی به سرور تماس بی نام را غیرفعال می کند.',
			anonymousCallRejection: 'فعال/غیر فعال کردن رد تماس بی نام.',
			onCodeRejection: 'کد ویژگی را برای روشن کردن رد تماس بی نام تعیین کنید، تلفن با ارسال کد ویژگی به سرور رد تماس بی نام را فعال می کند.',
			offCodeRejection: 'کد ویژگی را برای خاموش کردن رد تماس بی نام تعیین کنید، تلفن با ارسال کد ویژگی به سرور رد تماس بی نام را غیرفعال می کند.',
			ringTones: 'تعیین نوع زنگ برای حساب فعلی.',
			make_call_without_register: 'Make and receive call without register'
		}
	},
	showText: {
		unRegistered: 'ثبت نشد',
		registered: 'ثبت شده'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'حساب',
		accountNumberOpt1: 'حساب 1',
		accountNumberOpt2: 'حساب 2',
		accountNumberOpt3: 'حساب 3',
		accountNumberOpt4: 'حساب 4',
		accountNumberOpt5: 'حساب 5',
		accountNumberOpt6: 'حساب 6',
		
		audioCodecs: 'کدک های صوتی',
		disableCodecs: 'کدک های غیرفعال شده',
		enableCodecs: 'کدک های فعال',
		
		butConfirm: 'تایید',
		butCancel: 'لغو'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'حساب',
		accountNumberOpt1: 'حساب 1',
		accountNumberOpt2: 'حساب 2',
		accountNumberOpt3: 'حساب 3',
		accountNumberOpt4: 'حساب 4',
		accountNumberOpt5: 'حساب 5',
		accountNumberOpt6: 'حساب 6',
		
		udpKeepAliveMsg: 'پیام فعال نگاه داشتن UDP',
		disable: 'غیرفعال',
		enable: 'فعال',
		udpKeepAliveInterval: 'فاصله زمانی فعال نگاه داشتن UDP (ثانیه)',
		
		loginExpires: 'پایان اعتبار ورود به سیستم(ثانیه)',
		localSipPort: 'درگاه SIP محلی',
		subscribePeriod: 'دوره اشتراک(ثانیه)',
		
		dtmfType: 'نوع DTMF',
		dtmfTypeOpt0: 'Inband',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'بار DTMF(ثانیه)',
		reliableRetransmission: '100 مخابره مجدد قابل اطمینان',
		
		subscribeForMwi: 'اشتراک برای MWI',
		mwiSubscribePeriod: 'دوره اشتراک MWI(ثانیه)',
		
		useSessionTimer: 'استفاده از تایمر جلسه',
		sessionTimer: 'تایمر جلسه(ثانیه)',
		refresher: 'تجدیدکننده',
		
		useUserPhone: 'استفاده از کاربر=تلفن',
		voiceEncryption: 'رمزگذاری صدا (SRTP)',
		off: 'خاموش',
		on: 'روشن',
		ptime: 'زمان P (میلی ثانیه)',
		
		blfListUri: 'URI فهرست BLF',
		derectedCallPickupCode: 'کد پاسخدهی تماس هدایت شده',
		groupCallPickupCode: 'کد پاسخدهی تماس گروهی',
		
		sipRegRetryTimer: 'تایمر سعی مجدد ثبت SIP',
		earlyMedia: 'رسانه زود',
		sipServerType: 'نوع سرور SIP',
		sipServerTypeOpt0: 'رایج',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'BroadSoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Intercom Code',
		conferenceType: 'Conference Type',
		localConference: 'Local Conference',
		networkConference: 'Network Conference',
		conferenceCode: 'Conference Code',
		
		butConfirm: 'تایید',
		butCancel: 'لغو',
		
		tips: {
			udpKeepAliveMsg: 'تلفن بطور دوره ای یک بسته UDP ارسال می کند تا درگاه را فعال نگاه داشته و از بسته شدن درگاه توسط سرور جلوگیری کند.',
			loginExpires: 'زمان انقضای ثبت، وسیله باید دوباره در محدوده زمانی اعتبار هر ثبت دوباره ثبت گردد تا سرور وسیله را آفلاین در نظر نگیرد.',
			localSipPort: 'شماره درگاه وسیله محلی، برای ارسال و دریافت بسته های SIP استفاده می شود.',
			subscribePeriod: 'زمان انقضای اشتراک.',
			dtmfType: 'حالت ارسال DTMF با فشار دادن کلیدهای عددی در طول تماس، شامل INBAND، OUTOFBAND‏(RFC2833) و SIP INFO.',
			reliableRetransmission: 'فعال/غیر فعال کردن ارسال PRACK.',
			subscribeForMwi: 'وسیله برای اشتراک در پیام انتظار یک بسته اشتراک به سرور می فرستد، وسیله بعد از ثبت یک بسته اشتراک به سرور می فرستد.',
			useSessionTimer: 'فعال/غیر فعال کردن عملکرد تجدید جلسه. اگر این عملکرد فعال باشد، وسیله برای تجدید جلسه در طول تماس یک بسته دعوت ارسال می کند.',
			sessionTimer: 'دوره زمانی جلسه تجدید.',
			refresher: 'کدام طرف برای تجدید جلسه. Uac: برای تجدید جلسه از طرف کلاینت. Uas: برای تجدید جلسه از طرف سرور.',
			useUserPhone: 'اگر فعال باشد، یک علامت "کاربر=تلفن" در بسته دعوت پیام SIP وجود خواهد داشت.',
			voiceEncryption: 'فعال/غیرفعال کردن رمزگذاری صدا (SRTP).',
			ptime: 'فاصله زمانی بین دو بسته RTP کدک مورد استفاده فعلی را مذاکره می کند.',
			blfListUri: 'برای اشتراک BLF در Broadsoft کاربرد دارد.',
			sipRegRetryTimer: 'مدت زمان سعی مجدد برای ثبت بعد از ثبت ناموفق.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'درگاه اینترنت',
		IPv4Config: 'IPv4 Config',
		IPv6Config: 'IPv6 Config',
		dhcp: 'DHCP',
		staticIp: 'آدرس IP استاتیک',
		ip: 'آدرس IP',
		subnetMask: 'ساب نت ماسک',
		defaultGateway: 'گیت وی پیش فرض',
		IPv6Prefix: 'IPv6 Prefix(0~128)',

        StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		primaryDNS: 'DNS اولیه',
		secondaryDNS: 'DNS ثانویه',
		butConfirm: 'تایید',
		butCancel: 'لغو',
		
		tips: {
			dhcp: 'درخواست کسب خودکار آدرس IP، ساب نت مسک، گیت وی، DNS و غیره را به سرور DHCP بدهید.',
			staticIp: 'آدرس IP، ساب نت مسک، گیت وی، DNS و غیره را دستی پیکربندی کنید.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4 DNS when Internet (WAN) port type for IPv4 is configured as DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'تنظیمات Wi-Fi',
		wifi_on_warning: '(هنگامی که wifi روشن است، لطفاً کابل شبکه را جدا کنید!)',
		wifi_enable: 'Wi-Fi',
		on: 'روشن',
		off: 'خاموش',
		search_wifi: 'جستجوی Wi-Fi',
		wifi_ssid: 'SSID فعلی',
		wifi_key: 'کلید مخفی',
		butConfirm: 'تایید',
		butCancel: 'لغو',
	},
	showText: {
		close_wifi: 'در حال بستن wifi...',
		open_wifi: 'در حال باز کردن wifi...',
		search_wifi: 'در حال جستجو...',
		wifi_table_header: ['نمایه', 'SSID', 'سیگنال', 'انتخاب'],
		wifi_list_title: 'فهرست Wi-Fi',
		submitting: 'در حال ارسال...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'فعال',
		disable: 'غیرفعال',
		enable: 'فعال',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'اولویت',
		vlanPc: 'PC',
		vlanPcActive: 'فعال',
		vlanDataVid: 'VID',
		vlanDataPriority: 'اولویت',
		
		portLink: 'پیوند درگاه',
		wanPortLink: 'پیوند درگاه WAN',
		wanPortLinkOption0: 'مذاکره خودکار',
		wanPortLinkOption1: 'فول دوپلکس 10 مگابیت در ثانیه',
		wanPortLinkOption2: 'فول دوپلکس 100 مگابیت در ثانیه',
		wanPortLinkOption3: 'نیم دوپلکس 10 مگابیت در ثانیه',
		wanPortLinkOption4: 'نیم دوپلکس 100 مگابیت در ثانیه',
		wanPortLinkOption5: 'Half duplex 1000Mbps',
		wanPortLinkOption6: 'Full duplex 1000Mbps',
			
		pcPortLink: 'پیوند درگاه کامپیوتر',
		pcPortLinkOption0: 'مذاکره خودکار',
		pcPortLinkOption1: 'فول دوپلکس 10 مگابیت در ثانیه',
		pcPortLinkOption2: 'فول دوپلکس 100 مگابیت در ثانیه',
		pcPortLinkOption3: 'نیم دوپلکس 10 مگابیت در ثانیه',
		pcPortLinkOption4: 'نیم دوپلکس 100 مگابیت در ثانیه',
		
		slaccEnable: 'ICMPv6 Status',

		vpn: 'VPN',
		importFile: 'Upload VPN Config',
		importStr: 'Import',

		voiceQos: 'QoS صوتی',
		sipQos: 'SIP QoS',
		
		localRtpPort: 'درگاه RTP محلی',
		maxRTPPort: 'درگاه RTP حداکثر',
		minRTPPort: 'درگاه RTP حداقل',
		
		webServer: 'سرور وب',
		httpPort: 'درگاه HTTP',
		httpsPort: 'درگاه HTTPS',
		webServerType: 'نوع',
		webServerTypeOption0: 'غیرفعال',
		webServerTypeOption1: 'فقط http',
		webServerTypeOption2: 'فقط https',
		webServerTypeOption3: 'httpsوhttps',

        span_to_pc: 'Span to PC',
        sys_span_to_pc_port: 'Span to PC Port',

		lldp: 'LLDP',
		cdp: 'CDP',
		package_interval: 'Packet Interval(1~3600s)',

		x_802_1x: '802.1X',
		x_802_1x_mode: 'Mode',
		x_802_1x_mode0: 'Disable',
		x_802_1x_mode1: 'EAP-MD5',
		x_802_1x_mode2: 'EAP-TLS',
		x_802_1x_mode3: 'EAP-PEAP/MSCHAPv2',
		x_802_1x_mode4: 'EAP-TTLS/EAP-MSCHAPv2',
		x_802_1x_mode5: 'EAP-PEAP/GTC',
		x_802_1x_mode6: 'EAP-TTLS/EAP-GTC',
		x_802_1x_mode7: 'EAP-FAST',
		x_802_1x_anonymous_identity: 'Anonymous Identity',
		x_802_1x_identity: 'Identity',
		x_802_1x_password: 'MD5 Password',
		x_802_1x_ca_cert: 'CA Certificates',
		x_802_1x_device_cert: 'Device Certificates',
		x_802_1x_upload: 'Upload',

		butConfirm: 'تایید',
		butCancel: 'لغو',
		
		tips: {
			lldp: 'LLDP transmits information as packets called LLDP Data Units (LLDPDUs). An LLDPDU consists of a set of Type-Length-Value (TLV) elements, each of which contains a particular type of information about the device or the port transmitting it.',
			cdp: 'CDP (Cisco Discovery Protocol) allows IP phones to receive and/or transmit device-related information from/to directly connected devices on the network that are also using the protocol, and store the information about other devices.',
			vlan: 'پیکربندی VLAN، استفاده شده برای پیکربندی خاص.',
			portLink: 'Connection rate for WAN and PC ports.',
			vpn: 'پیکربندی VPN، استفاده شده برای پیکربندی خاص.',
			voiceQos: 'در نبود ظرفیت شبکه، کیفیت خدمات قابل ارائه به کاربران می تواند ترجیحاً قابل پذیرش باشد.',
			localRtpPort: 'تعیین درگاه تبادل صدا.',
			x_802_1x: 'It configures the 802.1x authentication method.',
			webServer: 'تعیین نوع و درگاه دسترسی وب.',
			slaccEnable: 'Enable/disable the IP phone to obtain the IPv6 network settings via SLAAC (Stateless Address Autoconfiguration) method.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'کلید',
		type: 'نوع',
		value: 'مقدار',
		label: 'برچسب',
		account: 'حساب',
		ext: 'پسوند',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'کلید DSS',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'خط',
		keyTypeOpt2: 'شماره گیری سریع',
		keyTypeOpt4: 'پیام',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'فهرست BLF',
		keyTypeOpt9: 'پاسخدهی مستقیم',
		keyTypeOpt10: 'پاسخدهی گروه',
		keyTypeOpt11: 'انتظار تماس',
		keyTypeOpt12: 'اینترکام',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'کنفرانس',
		keyTypeOpt15: 'هدایت',
		keyTypeOpt16: 'انتقال',
		keyTypeOpt17: 'انتظار',
		keyTypeOpt18: 'عدم مزاحمت',
		keyTypeOpt19: 'شماره گیری مجدد',
		keyTypeOpt20: 'فهرست',
		keyTypeOpt21: 'برگرداندن تماس',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'موجود نیست',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'حساب 1',
		accountNumberOpt2: 'حساب 2',
		accountNumberOpt3: 'حساب 3',
		accountNumberOpt4: 'حساب 4',
		accountNumberOpt5: 'حساب 5',
		accountNumberOpt6: 'حساب 6',
		accountNumberOpt8: 'خودکار',
		
		GroupPickup: 'GPickup',
		butConfirm: 'تایید',
		butCancel: 'لغو'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'کلید',
		type: 'نوع',
		value: 'مقدار',
		label: 'برچسب',
		account: 'حساب',
		ext: 'پسوند',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Line Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'خط',
		keyTypeOpt2: 'شماره گیری سریع',
		keyTypeOpt4: 'پیام',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'فهرست BLF',
		keyTypeOpt9: 'پاسخدهی مستقیم',
		keyTypeOpt10: 'پاسخدهی گروه',
		keyTypeOpt11: 'انتظار تماس',
		keyTypeOpt12: 'اینترکام',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'کنفرانس',
		keyTypeOpt15: 'هدایت',
		keyTypeOpt16: 'انتقال',
		keyTypeOpt17: 'انتظار',
		keyTypeOpt18: 'عدم مزاحمت',
		keyTypeOpt19: 'شماره گیری مجدد',
		keyTypeOpt20: 'فهرست',
		keyTypeOpt21: 'برگرداندن تماس',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'موجود نیست',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'حساب 1',
		accountNumberOpt2: 'حساب 2',
		accountNumberOpt3: 'حساب 3',
		accountNumberOpt4: 'حساب 4',
		accountNumberOpt5: 'حساب 5',
		accountNumberOpt6: 'حساب 6',
		accountNumberOpt8: 'خودکار',
		
		GroupPickup: 'GPickup',
		butConfirm: 'تایید',
		butCancel: 'لغو'
	}	
},
programKeyHtml = {
	form1: {
		key: 'کلید',
		type: 'نوع',
		value: 'مقدار',
		label: 'برچسب',
		account: 'حساب',

		programKeys: ['بیصدا', 'انتظار', 'شماره گیری مجدد', 
		              'بالا', 'پایین', 'چپ', 'راست', 'لغو', 'تایید', 
		              'کلید موقت1', 'کلید موقت2', 'کلید موقت3', 'کلید موقت4'],

		programKeys_A1x: ['بیصدا', 'انتظار', 'شماره گیری مجدد', 
		              'بالا', 'پایین', 'چپ', 'راست', 'لغو', 'تایید', 
		              'کلید موقت1', 'کلید موقت2', 'کلید موقت3'],

		programKeys_A2x: ['بیصدا', 'انتظار', 'شماره گیری مجدد', 
		              'بالا', 'پایین', 'چپ', 'راست', 'لغو', 'تایید', 
		              'کلید موقت1', 'کلید موقت2', 'کلید موقت3'],

		programKeys_CT11: ['بیصدا', 
		              'بالا', 'پایین', 
		              'کلید موقت1', 'کلید موقت2', 'کلید موقت3', 'کلید موقت4'],
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'خط',
		keyTypeOpt2: 'شماره گیری سریع',

		keyTypeOpt4: 'پیام',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'فهرست BLF',
		keyTypeOpt9: 'پاسخدهی مستقیم',
		keyTypeOpt10: 'پاسخدهی گروه',
		keyTypeOpt11: 'انتظار تماس',
		keyTypeOpt12: 'اینترکام',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'کنفرانس',
		keyTypeOpt15: 'هدایت',
		keyTypeOpt16: 'انتقال',
		keyTypeOpt17: 'انتظار',
		keyTypeOpt18: 'عدم مزاحمت',
		keyTypeOpt19: 'شماره گیری مجدد',
		keyTypeOpt20: 'فهرست',
		keyTypeOpt21: 'برگرداندن تماس',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'موجود نیست',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'Status',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'حساب 1',
		accountNumberOpt2: 'حساب 2',
		accountNumberOpt3: 'حساب 3',
		accountNumberOpt4: 'حساب 4',
		accountNumberOpt5: 'حساب 5',
		accountNumberOpt6: 'حساب 6',
		accountNumberOpt8: 'خودکار',
		
		GroupPickup: 'GPickup',
		butConfirm: 'تایید',
		butCancel: 'لغو'
	}	
},
aetAdvHtml = {
	form1: {
		networkSetting: 'Expansion Module Network Settings',
		innerNet: 'Internal Network',
		dhcp: 'DHCP',
		staticIp: 'Static IP Address',
		ip: 'IP Address',
		subnetMask: 'Subnet Mask',
		defaultGateway: 'Default Gateway',
                StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS',


		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			innerNet: 'Internal Network',
			dhcp: 'Automatically obtain from the DHCP server: IP address, subnet mask, gateway, DNS.',
			staticIp: 'Configure manually the IP address, subnet mask, gateway, DNS, etc.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when the Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},
extKeyHtml = {
	form1: {
		linkControl: 'Link Control',
		linkableDivice: 'Linkable Divice',
		key: 'کلید',
		type: 'نوع',
		value: 'مقدار',
		label: 'برچسب',
		account: 'حساب',
		ext: 'پسوند',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'کلید داخلی',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'خط',
		keyTypeOpt2: 'شماره گیری سریع',
		keyTypeOpt4: 'پیام',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'فهرست BLF',
		keyTypeOpt9: 'پاسخدهی مستقیم',
		keyTypeOpt10: 'پاسخدهی گروه',
		keyTypeOpt11: 'انتظار تماس',
		keyTypeOpt12: 'اینترکام',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'کنفرانس',
		keyTypeOpt15: 'هدایت',
		keyTypeOpt16: 'انتقال',
		keyTypeOpt17: 'انتظار',
		keyTypeOpt18: 'عدم مزاحمت',
		keyTypeOpt19: 'شماره گیری مجدد',
		keyTypeOpt20: 'فهرست',
		keyTypeOpt21: 'برگرداندن تماس',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'موجود نیست',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'حساب 1',
		accountNumberOpt2: 'حساب 2',
		accountNumberOpt3: 'حساب 3',
		accountNumberOpt4: 'حساب 4',
		accountNumberOpt5: 'حساب 5',
		accountNumberOpt6: 'حساب 6',
		accountNumberOpt8: 'خودکار',
		
		GroupPickup: 'GPickup',
		butConfirm: 'تایید',
		butCancel: 'لغو'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'AET device ID which display in the status of linkable divice'
		}
},
extKeyBackHtml = {
	noLink: 'هیچ مدول توسعه ای متصل نیست! لطفاً یک یا چند واحد را متصل کرده و سپس این صفحه را تجدید کنید.'	
},
phonePreferenceHtml = {
	form1: {
		timeZoneDaylightMap: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
		timeZoneOptsIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 108, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107],
		timeZoneOpts: ['-11 Samoa',
		              
		              '-10 United States-Hawaii-Aleutian',
		              '-10 United States-Alaska-Aleutian',
		              
		              '-9 United States-Alaska Time',
		              
		              '-8 Canada(&#8235;Vancouver,Whitehorse)',
		              '-8 Mexico(&#8235;Tijuana,Mexicali)',
		              '-8 United States-Pacific Time',
		              
		              '-7 Canada(&#8235;Edmonton,Calgary)',
		              '-7 Mexico(&#8235;Mazatlan,Chihuahua)',
		              '-7 United States-Mountain Time',
		              '-7 United States-MST no DST',
		              
		              '-6 Canada-Manitoba(&#8235;Winnipeg)',
		              '-6 Chile(&#8235;Easter Islands)',
		              '-6 Mexico(&#8235;Mexico City,Acapulco)',
		              '-6 United States-Central Time',
		              
		              '-5 Bahamas(&#8235;Nassau)',
		              '-5 Canada(&#8235;Montreal,Ottawa,Quebec',
		              '-5 Cuba(&#8235;Havana)',
		              '-5 United States-Eastern Time',
		              
		              '-4:30 Venezuela(&#8235;Caracas)',
		              
		              '-4 Canada(&#8235;Halifax,Saint John)',
		              '-4 Chile(&#8235;Santiago)',
		              '-4 Paraguay(&#8235;Asuncion)',
		              '-4 United Kingdom-Bermuda(&#8235;Bermuda)',
		              '-4 United Kingdom(&#8235;Falkland Islands)',
		              '-4 Trinidad&Tobago',
		              
		              '-3:30 Canada-New Foundland(&#8235;St.Johns)',
		              
		              '-3 Denmark-Greenland(&#8235;Nuuk)',
		              '-3 Argentina(&#8235;Buenos Aires)',
		              '-3 Brazil(&#8235;no DST)',
		              '-3 Brazil(&#8235;DST)',
		              
		              '-2 Brazil(&#8235;no DST)',
		              
		              '-1 Portugal(&#8235;Azores)',
		              
		              '0 GMT',
		              '0 Greenland',
		              '0 Denmark-Faroe Islands(&#8235;Torshaven)',
		              '0 Ireland(&#8235;Dublin)',
		              '0 Portugal(&#8235;Lisboa,Porto,Funchal)',
		              '0 Spain-Canary Islands(&#8235;Las Palmas)',
		              '0 United Kingdom(&#8235;London)',
		              '0 Morocco',
		              
		              '+1 Albania(&#8235;Tirane)',
		              '+1 Austria(&#8235;Vienna)',
		              '+1 Belgium(&#8235;Brussels)',
		              '+1 Caicos',
		              '+1 Chatam',
		              '+1 Croatia(&#8235;Zagreb)',
		              '+1 Czech Republic(&#8235;Prague)',
		              '+1 Denmark(&#8235;Kopenhaven)',
		              '+1 France(&#8235;Paris)',
		              '+1 Germany(&#8235;Berlin)',
		              '+1 Hungary(&#8235;Budapest)',
		              '+1 Italy(&#8235;Rome)',
		              '+1 Luxembourg(&#8235;Luxembourg)',
		              '+1 Makedonia(&#8235;Skopje)',
		              '+1 Netherlands(&#8235;Amsterdam)',
		              '+1 Namibia(&#8235;Windhoek)',
			      '+1 Poland(Warsaw)',
		              
		              '+2 Estonia(&#8235;Tallinn)',
		              '+2 Finland(&#8235;Helsinki)',
		              '+2 Gaza Strip(&#8235;Gaza)',
		              '+2 Greece(&#8235;Athens)',
		              '+2 Israel(&#8235;Tel Aviv)',
		              '+2 Jordan(&#8235;Amman)',
		              '+2 Latvia(&#8235;Riga)',
		              '+2 Lebanon(&#8235;Beirut)',
		              '+2 Moldova(&#8235;Kishinev)',
		              '+2 Russia(&#8235;Kaliningrad)',
		              '+2 Romania(&#8235;Bucharest)',
		              '+2 Syria(&#8235;Damascus)',
		              '+2 Turkey(&#8235;Ankara)',
		              '+2 Ukraine(&#8235;Kyiv,Odessa)',
		              
		              '+3 East Africa Time',
		              '+3 Iraq(&#8235;Baghdad)',
		              '+3 Russia(&#8235;Moscow)',
		              
		              '+3:30 Iran(&#8235;Teheran)',
		              
		              '+4 Armenia(&#8235;Yerevan)',
		              '+4 Azerbaijan(&#8235;Baku)',
		              '+4 Georgia(&#8235;Tbilisi)',
		              '+4 Kazakstan(&#8235;Aqtau)',
		              '+4 Russia(&#8235;Samara)',
		              
		              '+4:30 Kabul',
		              
		              '+5 Kazakstan(&#8235;Aqtobe)',
		              '+5 Kyrgyzstan(&#8235;Bishkek)',
		              '+5 Pakistan(&#8235;Islamabad)',
		              '+5 Russia(&#8235;Chelyabinsk)',
		              
		              '+5:30 India(&#8235;Calcutta)',
		              
		              '+5:45 Katmandu',
		              
		              '+6 Kazakstan(&#8235;Astana,Almaty)',
		              '+6 Kazakstan(&#8235;Astana,Almaty)',
		              
		              '+6:30 Rangoon',
		              
		              '+7 Russia(&#8235;Krasnoyarsk)',
		              '+7 Thailand(&#8235;Bangkok)',
		              
		              '+8 China(&#8235;Beijing)',
		              '+8 Singapore(&#8235;Singapore)',
		              '+8 Australia(&#8235;Perth)',
		              
		              '+9 Korea(&#8235;Seoul)',
		              '+9 Japan(&#8235;Tokyo)',
		              
		              '+9:30 Australia(&#8235;Adelaide)',
		              '+9:30 Australia(&#8235;Darwin)',
		              
		              '+10 Australia(&#8235;Sydney,Melbourne,Canberra)',
		              '+10 Australia(&#8235;Brisbane)',
		              '+10 Australia(&#8235;Hobart)',
		              '+10 Russia(&#8235;Vladivostok)',
		              
		              '+10:30 Australia(&#8235;Lord Howe Islands)',
		              
		              '+11 New Caledonia(&#8235;Noumea)',
		              
		              '+12 New Zeland(&#8235;Wellington,Auckland)',
		              
		              '+12:45 New Zeland(Chatham Islands)',
		              
		              '+13 Tonga(Nukualofa)'],
		dhcpTime: 'زمان DHCP',
		disable: 'غیرفعال',
		enable: 'فعال',
		auto: 'خودکار',
		timeZone: 'منطقه زمانی',
		primaryNtp: 'سرور NTP اولیه',
		secondaryNtp: 'سرور NTP ثانویه',
		updateInterval: 'دوره بروزرسانی(ثانیه)',
		daylight: 'نور روز',
		fixedType: 'نوع ثابت',
		fixedTypeOpt0: 'بر اساس تاریخ',
		fixedTypeOpt1: 'بر اساس هفته',
		startMonth: 'ماه شروع',
		January: 'ژانویه',
		February: 'فوریه',
		March: 'مارس',
		April: 'آوریل',
		May: 'می',
		June: 'ژوئن',
		July: 'ژوئیه',
		August: 'آگوست',
		September: 'سپتامبر',
		October: 'اکتبر',
		November: 'نوامبر',
		December: 'دسامبر',
		startDate: 'تاریخ شروع',
		startHourDay: 'ساعت شروع روز',
		startDayWeek: 'روز شروع هفته',
		Sunday: 'یکشنبه',
		Monday: 'دوشنبه',
		Tuesday: 'سه شنبه',
		Wednesday: 'چهارشنبه',
		Thursday: 'پنجشنبه',
		Friday: 'جمعه',
		Saturday: 'شنبه',
		startWeekMonth: 'هفته شروع ماه',
		firstInMonth: 'اول در ماه',
		secondInMonth: 'دوم در ماه',
		thirdInMonth: 'سوم در ماه',
		fourthInMonth: 'چهارم در ماه',
		lastInMonth: 'آخر در ماه',
		stopMonth: 'ماه توقف',
		stopDate: 'تاریخ توقف',
		stopHourDay: 'ساعت توقف روز',
		stopDayWeek: 'روز توقف هفته',
		stopWeekMonth: 'هفته توقف ماه',
		offset: 'افست(دقیقه)',
		manualTime: 'زمان غیرخودکار',
		dateYmd: 'تاریخ',
		autoDate: 'تاریخ بدست آمده',
		timeHms: 'زمان',
		autoTime: 'زمان بدست آمده',
		timeFormat: 'فرمت زمان',
		timeFormatOpt0: '12 ساعت',
		timeFormatOpt1: '24 ساعت',
		dateFormat: 'فرمت تاریخ',
		backlightTime: 'زمان نورزمینه',
		backlightTimeOpt0: 'همیشه روشن',
		backlightTimeOpt1: '1 دقیقه',
		backlightTimeOpt2: '2 دقیقه',
		backlightTimeOpt3: '5 دقیقه',
		backlightTimeOpt4: '10 دقیقه',
		backlightTimeOpt5: '30 دقیقه',
		screensaver_timeout: 'Screensaver Time',
		screensaver_timeoutOpt0: 'off',
		screensaver_timeoutOpt1: '1 min',
		screensaver_timeoutOpt2: '2 min',
		screensaver_timeoutOpt3: '5 min',
		screensaver_timeoutOpt4: '10 min',
		screensaver_timeoutOpt5: '30 min',
		backlightLevel: 'شدت نورزمینه',
		slaveBacklightLevel: 'شدت نورزمینه فرعی',
		expandBacklightLevel: 'شدت نورزمینه توسعه',
		slaveLcdContract: 'کنتراست ال سی دی فرعی',
		ringTones: 'آهنگ های زنگ',
		ringTonesOpt1: 'Ring1.wav',
		ringTonesOpt2: 'Ring2.wav',
		ringTonesOpt3: 'Ring3.wav',
		ringTonesOpt4: 'Ring4.wav',
		ringTonesOpt5: 'Ring5.wav',
		ringTonesOpt6: 'Ring6.wav',
		ringTonesOpt7: 'Ring7.wav',
		ringTonesOpt8: 'Ring8.wav',
		ringTonesOpt9: 'Ring9.wav',
		ringTonesOpt10: 'Ring10.wav',
		replaceRingTone: 'Replace Ring Tone',
		wallpaper: 'Wallpaper',
		delWallpaper: 'حذف',
		uploadWallpaper: 'Upload',
		cancelWallpaper: 'لغو',
		screensaver: 'Screensaver',

		butConfirm: 'تایید',
		butCancel: 'لغو',

		tips: {	
			dhcpTime: 'Enables or disables the IP phone to update time with the offset time obtained from the DHCP server.',
			replaceRingTone: 'Recommended file format: 16-bit, wave; the file size should be less than 800 kB for the colour display phone, and less than 300 kB for the monochrome display phone.',
			timeZone: 'منطقه زمانی خود را انتخاب کنید.',
			updateInterval: 'دوره زمانی بررسی زمان وسیله محلی را با سرور تعیین کنید.',
			daylight: 'تنظیمات ساعت تابستانی.',
			manualTime: 'فعال/غیر فعال کردن تنظیم دستی زمان.',
			timeFormat: 'زمان را بصورت 12 ساعته یا 24 ساعته تنظیم کنید.',
			dateFormat: 'فرمت نمایش تاریخ را تعیین کنید.',
			backlightTime: 'زمان نور زمینه را تعیین کنید.',
			screensaver_timeout: 'Set Screensaver time.',
			backlightLevel: 'تنظیم روشنایی نور زمینه تلفن.',
			ringTones: 'تنظیمات نوع زنگ تلفن.',
			pictureSize: 'Best resolution is 461x278 pixels and the size should be less than 500KBytes.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'غیرفعال',
		enable: 'فعال',
		off: 'خاموش',
		on: 'روشن',
		forward: 'هدایت',
		always: 'همیشه',
		busy: 'مشغول',
		noAnswer: 'بی پاسخ',
		afterRingTime: 'بعد از زمان زنگ(ثانیه)',
		
		target: 'هدف',
		onCode: 'کد روشن شدن',
		offCode: 'کد خاموش شدن',
		
		dnd: 'مزاحم نشوید',
		dndOnCode: 'کد روشن شدن DND',
		dndOffCode: 'کد خاموش شدن DND',
		authNum: 'شماره های مجاز(بین آنها ویرگول)',
		
		generalInfo: 'اطلاعات عمومی',
		liveDialpad: 'شماره گیر زنده',
		interDigitTime: 'زمان میان عددها(ثانیه)',
		autoAnswer: 'پاسخگویی خودکار',
		autoAnswerDelay: 'Auto Answer Delay (sec)',
		ignoreMissedCall: 'Ignore Missed Call',
		callWaiting: 'انتظار مکالمه',
		hotline: 'تلفن ویژه',
		hotlineTimeout: 'مهلت زمان تلفن ویژه(0~180 ثانیه)',
		keyAsSend: 'کلید بعنوان ارسال',
		dialNowTimeout: 'مهلت شماره گیری فوری(ثانیه)',
		busyToneTimer: 'تایمر تن مشغولی(ثانیه)',
		returnCodeWhenRefuse: 'کد بازگشت در صورت امتناع',
		returnCodeWhenDnd: 'کد بازگشت در صورت DND',
		r404: '404 (یافت نشد)',
		r480: '480 (موقتاً در دسترس نیست)',
		r486: '486 (اشغال)',
		rfc2543Hold: 'RFC 2543 انتظار',
		useOutboundProxyInDialog: 'استفاده از پراکسی خروجی در گفتگو',
		loginTimeout: 'مهلت ورود به سیستم(1~1000 minutes)',
		hidedtmf: 'Hide DTMF',
		multicastCodec: 'Multicast Codec',
		watchdog: 'Watch Dog',
		
		audioSettings: 'تنظیمات صوتی',
		callWaitingTone: 'تن انتظار مکالمه',
		headset: 'شدت صدای هدست',
		handset: 'شدت صدای گوشی',
		handfree: 'شدت صدای هندزفری',
		ringer: 'شدت صدای زنگ',
		headsetSend: 'شدت صدای ارسال هدست',
		handsetSend: 'شدت صدای ارسال گوشی',
		handfreeSend: 'شدت صدای ارسال هندزفری',
		ringerDeviceForHeadset: 'وسیله زنگ برای هدست',
		ringerDeviceForHeadsetOpt0: 'استفاده از بلندگو',
		ringerDeviceForHeadsetOpt1: 'استفاده از هدست',
		
		transferSettings: 'تنظیمات انتقال',
		blindTransferOnHook: 'تبادل کور در اتصال',
		attendedTransferOnHook: 'تبادل حاضر در اتصال',
		transferOnConHangUp: 'تبادل در قطع کنفرانس',
		transferModeViaDsskey: 'حالت تبادل با کلید DSS',
		transferModeViaDsskeyOpt0: 'تماس جدید',
		transferModeViaDsskeyOpt1: 'تبادل حاضر',
		transferModeViaDsskeyOpt2: 'انتقال کور',
		
		callPickup: 'پاسخدهی به تماس',
		directCallPickup: 'پاسخدهی مستقیم به تماس',
		directCallPickupCode: 'کد کد پاسخدهی تماس مستقیم',
		groupCallPickup: 'پاسخدهی تماس گروهی',
		groupCallPickupCode: 'کد پاسخدهی تماس گروهی',
		
		accept_sip_trust_server_only: 'Accept SIP Trust Server Only',
		recordUserId: 'Record User ID',
		extFunction: 'Ext Function',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: 'Conference hold when add new',

		butConfirm: 'تایید',
		butCancel: 'لغو',
		
		tips: {
			forward: 'تنظیم انتقال تماس.',
			alwaysTarget: 'شماره هدف برای انتقال.',
			alwaysOnCode: 'ویژگی کد برای فعال ساختن هدایت تمام تماس های ورودی، تلفن کد ویژگی را مستقیماً برای فعال کردن هدایت تمام تماس های ورودی می فرستد.',
			alwaysOffCode: 'ویژگی کد برای غیرفعال ساختن هدایت تمام تماس های ورودی، تلفن کد ویژگی را مستقیماً برای غیرفعال کردن هدایت تمام تماس های ورودی می فرستد.',
			busyTarget: 'شماره هدف برای انتقال.',
			busyOnCode: 'ویژگی کد برای فعال ساختن هدایت تماس مشغول، تلفن کد ویژگی را مستقیماً برای فعال کردن هدایت تماس مشغول می فرستد.',
			busyOffCode: 'ویژگی کد برای غیرفعال ساختن هدایت تماس مشغول، تلفن کد ویژگی را مستقیماً برای غیرفعال کردن هدایت تماس مشغول می فرستد.',
			afterRingTime: 'زمان انتظار برای هدایت بی پاسخ.',
			noAnswerTarget: 'شماره هدف برای انتقال.',
			noAnswerOnCode: 'ویژگی کد برای فعال ساختن هدایت تماس بی پاسخ، تلفن کد ویژگی را مستقیماً برای فعال کردن هدایت تماس بی پاسخ می فرستد.',
			noAnswerOffCode: 'ویژگی کد برای غیرفعال ساختن هدایت تماس بی پاسخ، تلفن کد ویژگی را مستقیماً برای غیرفعال کردن هدایت تماس بی پاسخ می فرستد.',
			
			dndOnCode: 'ویژگی کد برای فعال ساختن DND، تلفن کد ویژگی را مستقیماً برای فعال کردن DND می فرستد.',
			dndOffCode: 'ویژگی کد برای غیرفعال ساختن DND، تلفن کد ویژگی را مستقیماً برای غیرفعال کردن DND می فرستد.',
			
			liveDialpad: 'فعال/غیرفعال ساختن "شماره گیری خودکار" در واسط شماری گیری کاربر.',
			interDigitTime: 'زمان تاخیر شماره گیری خودکار برای صفحه شماره گیر زنده.',
			autoAnswer: 'فعال/غیر فعال کردن پاسخ دهی خودکار.',
			autoAnswerDelay: 'It configures the delay time (in seconds) before the IP phone automatically answers an incoming call.',
			callWaiting: 'زمان انتظار برای تبادل تماس های ورودی جدید.',
			hotline: 'تعیین شماره ویژه.',
			hotlineTimeout: 'تنتظیم زمان تاخیر تلفن ویژه.',
			keyAsSend: 'کلیدهایی را بعنوان عملکرد تماس انتخاب کنید.',
			dialNowTimeout: 'فاصله زمانی برای شماره گیری فوری.',
			busyToneTimer: 'بوق اشغال بعد از پایان تماس.',
			returnCodeWhenRefuse: 'تنظیم پیام بازگشت برای رد تماس.',
			returnCodeWhenDnd: 'تنظیم پیام بازگشت برای عدم مزاحمت.',
			rfc2543Hold: 'دو نوع استاندارد برای انتظار، نیازمند پشتیبانی سرور است.',
			useOutboundProxyInDialog: 'فعال/غیرفعال ساختن پراکسی خروجی در مکالمه.',
			loginTimeout: 'It configures the timeout interval (in minutes) for web access authentication.',
			acceptSipTrustServerOnly: 'Enable/disable the IP phone to only accept the SIP message from the SIP and outbound proxy server.',

			callWaitingTone: 'تعیین تن برای اطلاع رسانی تماس جدید در طول تماس (انتظار مکالمه روشن است).',
			ringerDeviceForHeadset: 'انتخاب کانال زنگ تماس.',

			blindTransferOnHook: 'فعال/غیرفعال ساختن تبادل کور در اتصال.',
			attendedTransferOnHook: 'فعال/غیرفعال ساختن تبادل-حاضر و تبادل-نیمه-حاضر در اتصال.',
			transferOnConHangUp: 'فعال/غیرفعال کردن برای انتقال به دو طرف دیگر زمانی که آغاز کننده کنفرانس قطع می کند.'
		}
	}	
},
phoneDNDAndForwardHtml = {
	form1: {
		phone: 'Phone',
		custom: 'Custom',
		forward: 'Call Forward',
		emergency: 'Emergency',
		authNum: 'Authorized Numbers',
		mode: 'Mode',
		account: 'Account',
		disable: 'Disabled',
		enable: 'Enabled',
		off: 'Off',
		on: 'On',
		always: 'Always',
		busy: 'When Busy',
		noAnswer: 'When No Answer',
		afterRingTime: 'After Ring Time (s)',
		
		target: 'Target',
		onCode: 'On Code',
		offCode: 'Off Code',
		

		dndStatus: 'DND Status',
		dnd: 'Do Not Disturb',
		dndOnCode: 'DND On Code',
		dndOffCode: 'DND Off Code',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			forward: 'Set Call Forward.',
			alwaysTarget: 'Set the target number you want to transfer to.',
			alwaysOnCode: 'The feature code to enable all incoming calls forward, the phone will send the feature code directly to open all incoming calls forward.',
			alwaysOffCode: 'The feature code to disable all incoming calls forward, the phone will send the feature code directly to close all incoming calls forward.',
			busyTarget: 'Set the target number you want to transfer to.',
			busyOnCode: 'The feature code to enable busy call forward, the phone will send the feature code directly to open busy call forward.',
			busyOffCode: 'The feature code to disable busy call forward, the phone will send the feature code directly to close busy call forward.',
			afterRingTime: 'Waiting time for NoAnswer forward.',
			noAnswerTarget: 'Set the target number you want to transfer to.',
			noAnswerOnCode: 'The feature code to enable no answer call forward, the phone will send the feature code directly to open no answer call forward.',
			noAnswerOffCode: 'The feature code to disable no answer call forward, the phone will send the feature code directly to close no answer call forward.',
			
			dndOnCode: 'The feature code to enable DND, the phone will send the feature code directly to open DND.',
			dndOffCode: 'The feature code to disable DND, the phone will send the feature code directly to close DND.',
			
		}
	}
},
phoneUpgradeHtml = {
	div1: {
		ver: 'نسخه',
		fmVer: 'نسخه ثابت افزار',
		hdVer: 'نسخه سخت افزار',
		
		resetToFactory: 'ریست به کارخانه',
		reboot: 'روشن کردن مجدد',		
		
		upgradeHeader: 'ارتقای ثابت افزار',
		selectFw: 'انتخاب ثابت افزار',
		upgrade: 'ارتقاء',
		
		tips: {
			upgradeHeader: 'نسخه ثابت افزار بروز ارائه شده توسط تامین کنندگان را برای ارتقا انتخاب کنید.'
		}
	},
	commonText: {
		resetConfirm: 'آیا به پیش فرض کارخانه ریست شود؟',
		resetSuccess: 'ریست به کارخانه موفقیت آمیز بود. دستگاه شما بطور خودکار دوباره روشن می شود.',
		resetFail: 'ریست به کارخانه انجام نشد، لطفاً دوباره سعی کنید!',
		
		rebootConfirm: 'آیا می خواهید دوباره روشن کنید؟',
		
		uploadFilePrompt: 'این برای آپلود فایل است:',
		upgradeMsg: 'لطفاً وسیله را خاموش نکنید!',
		upgradeText: 'در حال ارتقا، لطفاً صبر کنید...',
		
		upgradeFail: 'ارتقا داده نشد، لطفاً دوباره امتحان کنید!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'ویژگی Pcap',
		start: 'شروع',
		stop: 'توقف',
		exportStr: 'صادر کردن',
		
		debug: 'دیباگ'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'تامین خودکار',
		PnPEnable: 'PnP Active',
		DHCPEnable: 'DHCP Active',
		provisioningServer: 'سرور تدارک',
		userName: 'نام کاربر',
		password: 'رمز',
		commonAESKey: 'Common AES Key',
		MACAESKey: 'MAC-Oriented AES Key',
		checkNewConfig: 'چک پیکربندی جدید',
		off: 'خاموش',
		on: 'روشن',
		repeatedly: 'مکرر',
		interval: 'فاصله(دقیقه)',
		weekly: 'هفتگی',
		time: 'زمان',
		dayOfWeek: 'روز هفته',
		
		
		butConfirm: 'تایید',
		butCancel: 'لغو',
		
		tips: {
			PnPEnable: 'The request to the server to obtain a support URL for upgrade',
			DHCPEnable: 'To obtain a support URL for upgrade from DHCP server',
			provisioningServer: 'بروزرسانی آدرس سرور',
			password: 'رمز سرور',
			checkNewConfig: 'حالت بررسی پیکربندی جدید سرور'
		}
	},
	showText: {
		weekly:  ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'پیکربندی وارد/صادر کردن',
		importFile: 'وارد کردن فایل',
		importStr: 'وارد کردن',
		exportStr: 'صادر کردن',
		exportUserData: 'صادر کردن داده های کاربر',

		exportImportConfig: 'Import/Export CFG File',
		
		exportSyslog: 'صادر کردن سوابق سیستم',
		logLocation: 'محل سابقه',
		logLocationOpt0: 'محلی',
		logLocationOpt1: 'سرور', 
		serverName: 'نام سرور',
		logLevel: 'مرتبه سابقه',
		logOpt0: 'وخیم',
		logOpt1: 'خطا',
		logOpt2: 'هشدار',
		logOpt3: 'اطلاعات',
		logOpt4: 'دیباگ',
		exportStr2: 'صادر کردن',
		
		butConfirm: 'تایید',
		butCancel: 'لغو',
		
		tips: {
			exportImportConfig: 'The imported or exported file must have an auto provision file format. The exported file includes the modified configuration only, so it will be empty if no changes were made.',
			importExportCfg: 'برای صادر کردن پیکربندی کنونی تلفن روی صادر کردن کلیک کنید؛ برای وارد کردن فایل پیکربندی، روی وارد کردن کلیک کنید تا پیکربندی به تلفن فعلی وارد شده و سپس تلفن خاموش و روشن شود.',
			exportSyslog: 'اگر از نوع محلی است، syslog را مستقیماً صادر خواهد کرد؛ اگر از نوع سرور است، syslog را به سرور تعیین شده صادر می کند.'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Action URI allow IP List',
		remoteControl:'Remote Control',
		cstaControl: 'CSTA Control',
		disable: 'غیرفعال',
		enable: 'فعال',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	       },
},
phoneActionUrlHtml = {
	form1: {
		actionUrlItem: ['setupCompletedUrl','registeredUrl','unregisteredUrl','registerFailedUrl','offHookUrl','onHookUrl','incomingCallUrl','outgoingCallUrl','establishedUrl','terminatedUrl','openDNDUrl','closeDNDUrl','openAlwaysForwardUrl','closeAlwaysForwardUrl','openBusyForwardUrl','closeBusyForwardUrl','openNoAnswerForwardUrl','closeNoAnswerForwardUrl','transferCallUrl','blindTransferUrl','attendedTransferUrl','holdUrl','unHoldUrl','muteUrl','unMuteUrl', 'missedCallUrl','IPChangedUrl','idleToBusyUrl','busyToIdleUrl','rejectIncomingCallUrl','answerNewIncomingCallUrl','transferFailedUrl','transferFinishedUrl','forwardIncomingCallUrl','autopFinishUrl','openCallWaitingUrl','closeCallWaitingUrl','headsetUrl','handfreeUrl','cancelCallOutUrl','remoteBusyUrl','callRemoteCanceledUrl'],
		actionUrlNameList: [ 'Setup Completed','Registered','Unregistered','Register Failed','Off Hook','On Hook','Incoming Call','Outgoing Call','Established','Terminated','Open DND','Close DND','Open Always Forward','Close Always Forward','Open Busy Forward','Close Busy Forward','Open NoAnswer Forward','Close NoAnswer Forward','Transfer Call','Blind Transfer','Attended Transfer','Hold','UnHold','Mute','UnMute','Missed Call','IP Changed','Idle To Busy','Busy To Idle','Reject Incoming Call','Answer New Incoming Call','Transfer Failed','Transfer Finished','Forward Incoming Call','Autop Finish','Open Call Waiting','Close Call Waiting','Headset','Handfree','Cancel Call Out','Remote Busy','Call Remote Canceled'],
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
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

		selectCountry: 'Select Country',
		dial: 'Dial',
		ringBack: 'Ring Back',
		busy: 'Busy',
		congestion: 'Congestion',
		callWaiting: 'Call Waiting',
		dialRecall: 'Dial Recall',
		info: 'Info',
		stutter: 'Stutter',
		message: 'Message',
		autoAnswer: 'Auto Answer',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}
},
phoneDialPlanHtml = {
	mytabMenu: {
		replaceRule: 'قانون جایگزینی',
		dialNow: 'شماره گیری فوری',
		areaCode: 'کد منطقه',
		blockOut: 'مسدود کردن'
	},
	replaceRuleTitle: ['نمایه', 'شماره', 'جایگزینی', 'حساب'],
	dialNowsTitle: ['نمایه', 'قانون شماره گیری فوری', 'حساب'],
	replaceRuleForm: {
		num: 'شماره',
		replace: 'جایگزینی',
		account: 'حساب',
		add: 'افزودن',
		edit: 'ویرایش',
		del : 'حذف',
		save: 'ذخیره'
	},
	dialNowsForm: {
		rule: 'قانون شماره گیری فوری',
		account: 'حساب',
		add: 'افزودن',
		edit: 'ویرایش',
		del : 'حذف',
		save: 'ذخیره'
	},
	form3: {
		code: 'کد',
		minLen: 'حداقل طول',
		maxLen: 'حداکثر طول',
		areaCodeAccount: 'حساب',
		
		butConfirm: 'تایید',
		butCancel: 'لغو'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'شماره مسدود',
		account: 'حساب',
		
		butConfirm: 'تایید',
		butCancel: 'لغو'
	}
},
phoneRingHtml = {
	form1: {
		alterInfoTitle: 'Alert Info',
		butConfirm: 'تایید',
		butCancel: 'لغو',
		tips: {
		}
	       }
},
phoneVoiceHtml = {
	form1: {
		disable: 'غیرفعال',
		enable: 'فعال',
		
		echoCancellation: 'خنثی سازی اکو',
		echoCanceller: 'خنثی کننده اکو',
		echoCancellerOpt0: 'مرتبه پایین',
		echoCancellerOpt1: 'مرتبه متوسط',
		echoCancellerOpt2: 'مرتبه بالا',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'بافر ناپایداری',
		type: 'نوع',
		typeOpt0: 'ثابت',
		typeOpt1: 'تطبیقی',
		minDelay: 'حداقل تاخیر',
		maxDelay: 'حداکثر تاخیر',
		normalDelay: 'تاخیر عادی',
		
		butConfirm: 'تایید',
		butCancel: 'لغو',
		
		tips: {
			echoCancellation: 'تنظیمات خنثی سازی اکو.',
			echoCanceller: 'فعال/غیر فعال کردن خنثی کننده اکو.',
			vad: 'تشخیص فعالیت صوتی.',
			cng: 'تولیدکننده صداهای آرامش بخش.',
			jitterBuffer: 'اینجا یک ناحیه اشتراک داده است، بسته های صوتی و داده ممکن است گردآوری، ذخیره و به پردازنده همگون صدا ارسال گردند.'
		}
	}
},

phoneTrustedCertificatesHtml = {
    form1: {
        index: 'Index',
        issued_to: 'Issued To',
        issued_by: 'Issued By',
        expiration: 'Expiration',
        delete_select: 'Delete',
	import_trusted_certificates: 'Import Trusted Certificates',
        certificationfile: 'Load trusted certificates file',
        import_server_certificates: 'Import Server Certificates',
		server_certificationfile: 'Load server cer file',
		btn_upload: 'Import',
		btn_delete: 'Delete',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	},
    showText: {
		delConfirm: 'Are you sure to delete the chosen files ?',
		selectEmpty: 'Please select one record at least.'
	}
},


phoneLockHtml = {
	form1: {

		disable: 'غیرفعال',
		enable: 'فعال',

		keypad_lock: 'Phone Lock',
		keypadlock_enable: 'Keypad Lock Enable',
		keypadlock_type: 'Keypad Lock Type',
		keypadlock_password: 'Phone Unlock PIN(0~15 Digit)',
		delay_lock: 'Phone Lock Time Out(1~3600s)',
		emergency_call: 'Emergency',
		keypad_lock_menu_key: 'Menu Key',
		keypad_lock_function_key: 'Function Key',
		keypad_lock_all_keys: 'All Keys',
		keypad_lock_answer_call_only:'Answer call only',
		
		butConfirm: 'تایید',
		butCancel: 'لغو',

		tips: {
			emergency_call: 'Used for calling out emergency number when it is set as keypad lock'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: 'غیرفعال',
		enable: 'فعال',

		tr069: 'TR069',
		tr069_enable: 'Enable TR069',
		serveraddress: 'ACS URL',
		serverport: 'Port',
		username: 'ACS Username',
		password: 'ACS Password',
		periodic_inform_enable: 'Enable Periodic Inform',
		periodic_inform_interval: 'Periodic Inform Interval (seconds)',
		connection_request_username: 'Connection Request Username',
		connection_request_password:'Connection Request Password',

		butConfirm: 'تایید',
		butCancel: 'لغو',

		tips: {
			tr069_enable: 'It enables or disables the TR069 feature',
			ACS_URL: 'It configures the access URL of the ACS(Auto Configuration Servers)',
			ACS_username: 'It configures the user name for the IP phone to authenticate with the ACS (Auto Configuration Servers)',
			ACS_password: 'It configues the password for the IP phone to authenticate with the ACS',
			periodic_inform_enable: 'It enables or disables the IP phone to periodically report its configuration information to the ACS',
			periodic_inform_interval: 'Range: 5~4294967295',
			connecting_request_username: 'It configures the user name for the IP phone to authenticate the incoming connection requests',
			connecting_request_password: 'It configures the password for the IP phone to authenticate the incoming connection requests'

		}
	}
},


phoneSecurityHtml = {
	form1: {
		passwdModify: 'تغییر رمز',
		userType: 'نوع کاربر',
		currentPasswd: 'رمز کنونی',
		newPasswd: 'رمز جدید',
		confirmPasswd: 'تایید رمز',
		
		butConfirm: 'تایید',
		butCancel: 'Cancel',
		
		tips: {
			userType: 'نوع خود را انتخاب کنید. اگر بعنوان کاربر وارد شوید، فقط می توانید رمز خود را عوض کنید. اگر بعنوان مدیر وارد شوید، می توانید رمز کاربر و مدیر را عوض کنید.'
		}
	},
	showText: {
		pwdNoMatch: 'دو رمز وارد شده با هم مطابقت ندارند',
		modifyFailed: 'رمز تغییر نیافت، دوباره امتحان کنید!'
	}
},
contactsHtml = {
	mytabMenu: ['مخاطبین', 'فهرست سیاه'],
	tableHeader: ['نمایه', 'نام', 'شماره دفتر', 'شماره موبایل', 'شماره دیگر', 'حساب'],
	buttonDiv: {
		save: 'ذخیره',
		del: 'Delete',
		moveToBlack: 'انتقال به فهرست سیاه',
		moveToWhite: 'انتقال به مخاطبین'
	},
	editDiv: {
		contacts: 'مخاطبین',
		name: 'نام',
		officeNum: 'شماره دفتر',
		mobileNum: 'شماره موبایل',
		otherNum: 'شماره دیگر',
		account: 'حساب',
		accountOpt8: 'خودکار',
		accountOpt1: 'حساب 1',
		accountOpt2: 'حساب 2',
		accountOpt3: 'حساب 3',
		accountOpt4: 'حساب 4',
		accountOpt5: 'حساب 5',
		accountOpt6: 'حساب 6',
		ring: 'زنگ',
		ringOpts: ['خودکار', 'Ring1.wav', 'Ring2.wav', 'Ring3.wav', 'Ring4.wav', 
		           'Ring5.wav', 'Ring6.wav', 'Ring7.wav', 'Ring8.wav', 'Ring9.wav', 'Ring10.wav'],
		photo: 'Photo',
		defaultPhoto: 'Default',
		add: 'افزودن',
		deletePhoto: 'Delete',
		uploadPhoto: 'Upload Photo',
		pictureSize: 'Best resolution is 100x135 pixels and the size should be less than 250KBytes.',
		edit: 'ویرایش',
		search: 'جستجو',
		
		importAndExport: 'وارد و صادر کردن مخاطبین محلی',
		importFile: 'وارد کردن مخاطبین محلی',
		importStr: 'وارد کردن',
		exportStr: 'صادر کردن'
	},
	
	shwoText: {
		delConfirm: 'آیا مطمئنید که می خواهید مخاطبین انتخابی را حذف کنید؟',
		delConfirm1: 'توجه: عکس مخاطب بعد از ذخیره بازیابی نمی شود!', 
		selectEmpty: 'لطفاً حداقل یک سابقه انتخاب کنید.',
		selectTooMuch: 'سابقه انتخابی بسیار طولانی است!',
		nameEmpty: 'نام نمایش نمی تواند خالی باشد!',
		nameExist: 'نام نمایش از قبل موجود است!',
		phonebookFull: 'Only less than 400 items in phonebook list!',
		blacklistFull: 'Only less than 50 items in blacklist!',
		contentEmpty: 'محتوا نباید خالی باشد!',
		notFind: 'مخاطب مشخص شده یافت نشد.'
	}
},

multicastHtml = {
	form1: {
		multicastListening: 'Multicast Listening',
		pagingBarge: 'Paging Barge',
		ignoreDND: 'Ignore DND',
		pagingPriorityActive: 'Paging Priority Active',
		ipAddr: 'IP',
		listeningAddr: 'Listening Address',
		label: 'Label',
		channel: 'Channel',
		priority: 'Priority',
		disabled: 'Disabled',
		enabled: 'Enabled',

		pagingListLabel: 'Paging List',
		index: 'Index',
		pagingAddr: 'Paging Address',


		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
		}
	}
},
LDAPHtml = {
	form1: {
		disable: 'Disable',
		enable: 'Enable',

		LDAP:'LDAP',
		enable_ldap:'Enable LDAP',

        name_filter:'LDAP Name Filter',
        number_filter:'LDAP Number Filter',

        name_attributes:'LDAP Name Attributes',
        number_attributes:'LDAP Number Attributes',
        display_name:'LDAP Display Name',

        server_address:'Server Address',
        port:'Port',
        base:'Base',
        user_name:'Username',
        password:'Password',
        max_hits:'Max Hits',
        protocol_version:'Protocol',
        version2:'Version 2',
        version3:'Version 3',
        optionNo: 'No',
		optionYes: 'Yes',

        match_incoming_calls:'LDAP Lookup For Incoming Call',
        ldap_lookup_for_dial:'LDAP Lookup For dialing',
        sort_result:'LDAP Sorting Results',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			LDAP: 'LDAP Phonebook.',
			name_filter: 'LDAP name filter, device will go and search the contacts on the server if the input are characters.',
			number_filter: 'LDAP digit filter, device will go and search the contacts on the server if the input are digits.',
			server_address: 'LDAP server address, the value can be IP or Domain name.',
			port: 'LDAP server port.',
			base: 'searching root directory of the server.',
			user_name: 'user name for loging in the server.',
			password: 'password for loging out the server.',
			max_hits: 'the maximum query results.',
			name_attributes: 'relevant attributes of the desired name.',
			number_attributes: 'relevant attributes of the desired number.',
			display_name: 'the type of display name of the searching result.',
			match_incoming_calls: 'Whether to search diaplay name for incoming call using LDAP.',
			ldap_lookup_for_dial: 'Whether to LDAP when dialing.',
			sort_result: 'Whether to sort the results.'
		}
	}
},

XMLPhonebookHtml = {
	form1: {
        disable: 'Disable',
		enable: 'Enable',

        index:'Index',
        remote_url:'Remote URL',
        display_name:'Display Name',

		xml_remote_phonebook:'Search Settings',

        SRemoteName:'Search Remote Phonebook name',
        SRemoteNameFlashTime:'Search Flash Time',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			SRemoteName: 'It enables or disables the phone to perform a remote phone book search for an incoming or outgoing call.',
			SRemoteNameFlashTime: 'It configures the interval (in seconds) for the phone to update the data of the remote phone book from the remote phone book server. The value 0 means the phone will not regularly update the data of the remote phone book from the remote phone book server.'
		}
	}
},

phoneCallInfoHtml = {
	mytabMenu: ['فهرست شماره گیری', 'فهرست از دست داده', 'فهرست دریافت شده', 'فهرست هدایت شده'],
	tableHeader: ['نمایه', 'تاریخ زمان', 'Duration', 'هویت محلی', 'نام', 'شماره تلفن']
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
