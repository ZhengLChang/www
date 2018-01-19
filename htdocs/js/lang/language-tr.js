//公共的验证信息
var commonValidMsg = {
	missingMsg: 'Bu alan gereklidir',
	invalidIpMsg: 'geçersiz IP'
},
uploadCommon = {
	uploadFilePrompt: 'Karşıya yüklenecek olan dosya:',
	uploadMsg: 'Lütfen gücü kapatmayın!',
	uploadText: 'İçeri aktarılıyor, lütfen bekleyin…',
	uploadSuccess: 'İçeri aktarma başarılı!',
	uploadFail: 'İçeri aktarma başarısız; lütfen tekrar deneyin!'
},
alertMsg = {
	titlePrompt: 'İstem',
	titleConfirm: 'Onayla',
	noChange: 'Değişiklik yok!',
	invalidVal: 'Geçersiz değer!',
	saveSuccess: 'Başarıyla kaydedildi!',
	enabledOptionsEmpty: 'Etkinleştirilen Kodlayıcılar boş olamaz!',
	codecsConflict: 'iLBC_13_3 ve iLBC_15_2 aynı anda uygulanamaz!',
	emptyContent: 'İçerik boş!',
	invalidDTMF: 'Geçersiz DTMF!',
	webServicesDisable: 'Web hizmetleri devre dışı bırakıldı!',
	features: 'Açık Kod ayarlandığında Kapalı Kod boş olamaz!',
	invalidAccountList: 'Geçersiz hesap listesi!',
	dialPlanMsg1: 'Lütfen en az bir kayıt seçin.',
	voiceError1: 'Maximum Gecikme değeri Minimum Gecikme değerinden büyük olmalıdır',
	voiceError2: 'Normal Gecikme değeri Maximum ve Minimum Gecikme değerleri arasında olmalıdır',
	fileIsEmpty: 'Dosya boş!',
	upgradeFileFormateErr: 'Please choose a upgrade file(*.fw)!',
	openvpnFile: 'Please choose a OpenVPN file(*.tar/*.TAR)!',
	wallpaperFormatError: 'Filename contain Latin characters only and  PNG/JPG/BMP format images',
	systemFileCannotDelete: 'it only support delete the custom photos!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'Lütfen gücü kapatmayın!',
			rebootText: 'Yeniden başlatılıyor, lütfen bekleyin…'
		},
		showProgress: {
			progressTitle: 'İstem'
		}
	},
	ErrorInfo: {
		networkError: 'Ağ hatası, lütfen kontrol edin!',
		webServerError: 'Web Sunucusu Hatası; lütfen tekrar deneyin!',
		unknownError: 'Bilinmeyen Hata!',
		dataNoChanged: 'No Change!',
		Error_409: 'The file with this name already exists.',
		Error_413: 'The file is too large.',

		phoneBusyError: 'Talking, Please wait...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: 'Oturum kapatma başarısız; lütfen tekrar deneyin!'
	},
	pluginInit: {
		ok: 'Tamam',
		cancel: 'İptal'
	}
},
status401Html = {
	errorInfo1 : 'Web arayüzüne erişim yetkiniz yok.',
	errorInfo2 : 'Lütfen destek ekibinizle görüşün ya da 3 dakika sonra yeniden deneyin.',
	errorInfo3: 'HTTP 401 Yetkisiz'
},
//index.html
indexHtml={
	top:{
		logout: 'Oturumu Kapat',
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
		basic: 'Temel',
		account: 'Hesap',
		network: 'Ağ',
		dSSKey: 'DSS Anahtarı',
		phone: 'Telefon',
		contacts: 'Kişiler',
		security: 'Güvenlik'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'Web Sitesi',
		products: 'Ürünler',
		support: 'Destek',
		download: 'İndir',
		contactus: 'İletişim',
		atcomRights: '©2018 ATCOM Her hakkı saklıdır.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'Durum',
		sWizard: 'Sihirbaz',
		//Account
		aBasic: 'Temel',
		aCodecs: 'Kodlayıcılar',
		aAdvanced: 'Gelişmiş',
		//NetWork
		nBasic: 'Temel',
		nWifi: 'Wi-Fi',
		nAdvanced: 'Gelişmiş',
		//DSS key
		dMemory: 'Bellek Tuşu',
		dLink: 'Hat Tuşu',
		dProgrammable: 'Programlanır Tuş',
		dExt: 'İç Hat Tuşu',
		dAetAdv: 'EXT Settings',

		//Phone
		pDNDAndForward: 'Forward&DND',
		pPrefetence: 'Tercih',
		pFeatures: 'Özellikler',
		pUpgrade: 'Yükselt',
		pAuto: 'Oto. Yetkilendirme',
		pConfig: 'Yapılandırma',
		pRemoteControl: 'Remote Control',
		pActionUrl: 'Action URL',
		pDialPlan: 'Tuşlama Planı',
		pVoice: 'Ses',
		pRing: 'Alert Info',
		pTones: 'Tonlar',
		pSms: 'SMS',
		pAction: 'Eylem URL’si',
		pSoftkey: 'Orta Tuş Yerleşimi',
		pPhoneLock: 'Phone Lock',
		pSecurity: 'Güvenlik',
		pPhoneTr069: 'TR069',
		pDebug: 'Hata Ayıklama',
		//Contacts
		cContacts: 'Kişiler',
		cXMLPhonebook: 'Uzak Rehber',
		cPhoneCall: 'Tel. Arama Bilgisi',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'Arama Kaydı',
		//Security
		sPassword: 'Şifre',
		sStrusted: 'Güvenli Sertifikalar',
		sServer: 'Sunucu Sertifikaları'
	}
},
statusHtml = {
	version: {
		verTitle: 'Sürüm',
		fwVer: 'Bellenim Sürümü',
		hwVer: 'Donanım Sürümü'
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
		internetPort: 'Internet Bağlantı Noktası Türü',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Statik IP',
		ip: 'IP Adresi',
		subnetMask: 'Alt Ağ Maskesi',
		gatewag: 'Ağ Geçidi',
		primaryDNS: 'Birincil DNS',
		secondaryDNS: 'İkincil DNS',
		wiredMac: 'Wired MAC Adresi',
		WIFIMac: 'WiFi MAC Adresi',
		vpnStatus: 'VPN Durumu',
		vpnStatusOpt0: 'Bağlanıyor',
		vpnStatusOpt1: 'Devre Dışı Bırak',
		vpnStatusOpt2: 'Connect_failed',
		vpnStatusOpt3: 'Bağlandı',
		vpnIp: 'VPN IP'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Internet Bağlantı Noktası Türü',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Statik IP',
		ip: 'IP Adresi',
		networkPrefix: 'Network Prefix',
		gatewag: 'Ağ Geçidi',
		primaryDNS: 'Birincil DNS',
		secondaryDNS: 'İkincil DNS'
	},
	tips: {
		netConfigTip: 'Displays the IP address mode of the device.',
		verTip: 'Cihazın geçerli bellenim sürümünü ve donanım sürümünü görüntüler.',
		netTip: 'Telefon şebekesi yapılandırmasının ayrıntılarını gösterir.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Network',
		InternetPort: 'Internet Bağlantı Noktası',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: 'Statik IP Adresi',

		staticIpSettings: 'Static Ip Ayarları',
		ip: 'IP Adresi',
		subnetMask: 'Alt Ağ Maskesi',
		defaultGateway: 'Varsayılan Ağ Geçidi',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: 'Birincil DNS',
		secondaryDNS: 'İkincil DNS',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6 Prefix',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'SIP Ayarları',
		accountActive: 'Hesap Etkin',
		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',
		labelName: 'Etiket',
		displayName: 'Görüntülenme Adı',
		registerName: 'Kayıt Adı',
		userName: 'Kullanıcı Adı',
		password: 'Şifre',
		
		sipServer: 'SIP Sunucusu',
		sipServerPort: 'Bağlantı Noktası',
		
		back: 'Geri',
		next: 'İleri',
		
		tips: {
			dhcp: 'Bir IP adresi, alt ağ maskesi, ağ geçidi, DNS vb. almak için DHCP sunucusuna otomatik olarak istek gönder.',
			staticIp: 'IP adresini, alt ağ maskesini, ağ geçidini, DNS’yi vb. elle yapılandır.',
			labelName: 'Geçerli cihazın LCD ekranında gösterilen adı.',
			displayName: 'Arama sırasında diğer telefonda gösterilen yerel telefon adı.',
			registerName: 'ISS tarafından sağlanan kayıt adı.',
			userName: 'ISS tarafından sağlanan kullanıcı adı.',
			password: 'ISS tarafından sağlanan hesap şifresi.',
			sipServer: 'ISS tarafından sağlanan Sip sunucusunun adresi.'
		}
	},
	common: {
		finish: 'Bitirme',
		next: 'İleri'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'Hesap',
		accountNumberOpt1: 'Hesap 1',
		accountNumberOpt2: 'Hesap 2',
		accountNumberOpt3: 'Hesap 3',
		accountNumberOpt4: 'Hesap 4',
		accountNumberOpt5: 'Hesap 5',
		accountNumberOpt6: 'Hesap 6',
		
		registerStatus: 'Kayıt Durumu',
		
		accountActive: 'Hesap Etkin',
		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',
		labelName: 'Etiket',
		displayName: 'Görüntülenme Adı',
		registerName: 'Kayıt Adı',
		userName: 'Kullanıcı Adı',
		password: 'Şifre',
		
		sipServer: 'SIP Sunucusu',
		sipServerPort: 'Bağlantı Noktası',
		redundancy_proxy: 'SIP Yedekleme Sunucusu',

		enableOutboundProxyServer: 'Giden Vekil Sunucusunu Etkinleştir',
		outboundProxyServer: 'Giden Vekil Sunucusu',
		outboundProxyServerPort: 'Bağlantı Noktası',
		make_call_without_register: 'Enable Peer to Peer',
		
		verifyServer: 'Verify server',
		transport: 'Taşıma',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'NAT Gezinme',
		TLSVersion: 'TLS Version',
		natTraversalOpt1: 'STUN',
		stunServer: 'STUN Sunucusu',
		port: 'Bağlantı Noktası',
		
		voiceMail: 'Sesli Posta',
		anonymousCall: 'İsimsiz Arama',
		off: 'Kapalı',
		on: 'Açık',
		onCode: 'Açık Kod',
		offCode: 'Kapalı Kod',
		anonymousCallRejection: 'İsimsiz Arama Reddetme',
		ringTones: 'Zil Sesleri',
		ringTonesOpt0: 'Ortak',
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
		
		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
		tips: {
			labelName: 'Geçerli cihazın LCD ekranında gösterilen adı.',
			displayName: 'Arama sırasında diğer telefonda gösterilen yerel telefon adı.',
			registerName: 'ISS tarafından sağlanan kayıt adı.',
			userName: 'ISS tarafından sağlanan kullanıcı adı.',
			password: 'ISS tarafından sağlanan hesap şifresi.',
			sipServer: 'ISS tarafından sağlanan Sip sunucusunun adresi.',
			redundancy_proxy: 'An Backup SIP server failover',
			enableOutboundProxyServer: 'Bir güvenlik duvarı ya da NAT olduğunda, sinyalleri işlemek ve çoklu ortam akışlarının güvenlik duvarından geçmesine yardımcı olmak için kullanılır.',
			outboundProxyServer: 'Giden Vekil Sunucusu.',
			verifyServer: 'verifyServer',
			transport: 'UDP, TCP, TLS şeklinde üç seçenek vardır. Kayıtlı paket iletişim kuralı UDP, TCP ya da TLS şeklindedir; TLS (Taşıma Katmanı Güvenliği) şifrelidir.',
			natTraversal: 'STUN sunucusunu etkinleştir/devre dışı bırak.',
			stunServer: 'STUN sunucusu, tüm terminal NAT istemcilerinin (güvenlik duvarı arkasındaki kişisel bilgisayar gibi), LAN dışında bulunan VOIP hizmeti sağlayıcısıyla VOIP telefon aramaları yapmasına olanak tanır.',
			voiceMail: 'Geçerli hesabın sesli posta numarasını ayarlayın.',
			anonymousCall: 'İsimsiz aramayı etkinleştirin/devre dışı bırakın.',
			onCode: 'İsimsiz aramayı açmak için özellik kodunu ayarlayın; telefon, özellik kodunu sunucuya göndererek isimsiz aramayı etkinleştirir.',
			offCode: 'İsimsiz aramayı kapatmak için özellik kodunu ayarlayın; telefon, özellik kodunu sunucuya göndererek isimsiz aramayı devre dışı bırakır.',
			anonymousCallRejection: 'İsimsiz arama reddetmeyi etkinleştirin/devre dışı bırakın.',
			onCodeRejection: 'İsimsiz arama reddetmeyi açmak için özellik kodunu ayarlayın; telefon, özellik kodunu sunucuya göndererek isimsiz arama reddetmeyi etkinleştirir.',
			offCodeRejection: 'İsimsiz arama reddetmeyi kapatmak için özellik kodunu ayarlayın; telefon, özellik kodunu sunucuya göndererek isimsiz arama reddetmeyi devre dışı bırakır.',
			ringTones: 'Geçerli hesap için zil türünü ayarlayın.',
			make_call_without_register: 'Make and receive call without register'
		}
	},
	showText: {
		unRegistered: 'Kayıt başarısız',
		registered: 'Kaydettirildi'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'Hesap',
		accountNumberOpt1: 'Hesap 1',
		accountNumberOpt2: 'Hesap 2',
		accountNumberOpt3: 'Hesap 3',
		accountNumberOpt4: 'Hesap 4',
		accountNumberOpt5: 'Hesap 5',
		accountNumberOpt6: 'Hesap 6',
		
		audioCodecs: 'Ses kodlayıcılar',
		disableCodecs: 'Devre Dışı Bırakılan Kodlayıcılar',
		enableCodecs: 'Etkinleştirilen kodlayıcılar',
		
		butConfirm: 'Onayla',
		butCancel: 'İptal'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'Hesap',
		accountNumberOpt1: 'Hesap 1',
		accountNumberOpt2: 'Hesap 2',
		accountNumberOpt3: 'Hesap 3',
		accountNumberOpt4: 'Hesap 4',
		accountNumberOpt5: 'Hesap 5',
		accountNumberOpt6: 'Hesap 6',
		
		udpKeepAliveMsg: 'UDP Canlı Tut Mesajı',
		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',
		udpKeepAliveInterval: 'UDP Canlı Tut Aralığı (sn.)',
		
		loginExpires: 'Oturum Açma Süresi Doldu (sn.)',
		localSipPort: 'Yerel Sip Bağlantı Noktası',
		subscribePeriod: 'Abonelik Dönemi (sn.)',
		
		dtmfType: 'DTMF Türü',
		dtmfTypeOpt0: 'Bant İçi',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'DTMF Taşıma Yükü (sn.)',
		reliableRetransmission: '100 güvenilir yeniden gönderim',
		
		subscribeForMwi: 'MWI’ya Abone Ol',
		mwiSubscribePeriod: 'MWI Abonelik Dönemi (sn.)',
		
		useSessionTimer: 'Oturum Zamanlayıcı Kullan',
		sessionTimer: 'Oturum Zamanlayıcı (sn.)',
		refresher: 'Yenileyici',
		
		useUserPhone: 'Kullanıcı=telefon kullan',
		voiceEncryption: 'Ses Şifreleme (SRTP)',
		off: 'Kapalı',
		on: 'Açık',
		ptime: 'PTime(ms)',
		
		blfListUri: 'BLF Liste URI',
		derectedCallPickupCode: 'Yönlendirilmiş Arama Yanıtlama Kodu',
		groupCallPickupCode: 'Grup Arama Yanıtlama Kodu',
		
		sipRegRetryTimer: 'SIPY Kaydı Yeniden Deneme Zamanlayıcı',
		earlyMedia: 'Eski Ortam',
		sipServerType: 'SIP Sunucusu Türü',
		sipServerTypeOpt0: 'Ortak',
		sipServerTypeOpt1: 'Yıldız İşareti',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'BroadSoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Intercom Code',
		conferenceType: 'Conference Type',
		localConference: 'Local Conference',
		networkConference: 'Network Conference',
		conferenceCode: 'Conference Code',
		
		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
		tips: {
			udpKeepAliveMsg: 'Telefon, bağlantı noktasını etkin tutmak ve sunucunun bağlantı noktasını kapatmasını önlemek için düzenli olarak bir UDP paketi gönderir.',
			loginExpires: 'Süre bitim zamanını kaydettirin; cihaz, her kaydın geçerliliği içinde tekrar kaydettirilmelidir, aksi halde sunucu cihazı çevrimdışı olarak görecektir.',
			localSipPort: 'Yerel cihaz bağlantı noktası numarası, SIP paketlerini göndermek ve almak için kullanılır.',
			subscribePeriod: 'Süre bitimine abone ol.',
			dtmfType: 'INBAND, OUTOFBAND(RFC2833) ve SIP INFO dâhil, bir arama sırasında rakam tuşlarına basılarak DTMF gönderim modu.',
			reliableRetransmission: 'PRACK aktarımını etkinleştir/devre dışı bırak.',
			subscribeForMwi: 'Cihaz, bekleyen Mesaja abone olmak için sunucuya bir Abone Ol paketi gönderir, cihaz, kayıttan sonra sunucuya bir Abone Ol mesajı gönderecektir.',
			useSessionTimer: 'Oturumu yenile işlevini etkinleştir/devre dışı bırak. Etkinse, cihaz, bir arama sırasında oturumu yenilemek için bir Davet paketi gönderecektir.',
			sessionTimer: 'Oturumu yenile zaman aralığı.',
			refresher: 'Oturumu yenileyecek taraf. Uac: Oturumu istemci tarafından yenilemek için. Uas: Oturumu sunucu tarafından yenilemek için.',
			useUserPhone: 'Etkinse, SIP mesajının Davet paketinde bir "kullanıcı=telefon" işareti olacaktır.',
			voiceEncryption: 'Ses Şifrelemeyi (SRTP) etkinleştir/devre dışı bırak.',
			ptime: 'Kullanılmakta olan kodlayıcının iki RTP paketi arasındaki zaman aralığını anlaş.',
			blfListUri: 'Broadsoft’ta BLF’ye abone olmak için kullanılır.',
			sipRegRetryTimer: 'Başarısız kayıttan sonra kaydettirmeyi yeniden denemek için zaman aralığı.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Internet Bağlantı Noktası',
		IPv4Config: 'IPv4 Config',
		IPv6Config: 'IPv6 Config',
		dhcp: 'DHCP',
		staticIp: 'Statik IP Adresi',
		ip: 'IP Adresi',
		subnetMask: 'Alt Ağ Maskesi',
		defaultGateway: 'Varsayılan Ağ Geçidi',
		IPv6Prefix: 'IPv6 Prefix(0~128)',

        StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		primaryDNS: 'Birincil DNS',
		secondaryDNS: 'İkincil DNS',

		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
		tips: {
			dhcp: 'Bir IP adresi, alt ağ maskesi, ağ geçidi, DNS vb. almak için DHCP sunucusuna otomatik olarak istek gönder.',
			staticIp: 'IP adresini, alt ağ maskesini, ağ geçidini, DNS’yi vb. elle yapılandır.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Wi-Fi Ayarları',
		wifi_on_warning: '(Wifi etkinken lütfen ağ kablosunu çıkartın!)',
		wifi_enable: 'Wi-Fi',
		on: 'Açık',
		off: 'Kapalı',
		search_wifi: 'Wi-Fi Arama',
		wifi_ssid: 'Mevcut SSID',
		wifi_key: 'Gizli Anahtar',
		butConfirm: 'Onayla',
		butCancel: 'İptal',
	},
	showText: {
		close_wifi: 'Wifi kapatılıyor...',
		open_wifi: 'Wifi açılıyor...',
		search_wifi: 'Aranıyor...',
		wifi_table_header: ['Dizin', 'SSID', 'Sinyal', 'Seç'],
		wifi_list_title: 'Wi-Fi Listesi',
		submitting: 'Gönderiliyor...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Etkin',
		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Öncelik',
		vlanPc: 'PC',
		vlanPcActive: 'Etkin',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Öncelik',
		
		portLink: 'Bağlantı Noktası Bağlantısı',
		wanPortLink: 'WAN Bağlantı Noktası Bağlantısı',
		wanPortLinkOption0: 'Otomatik anlaş',
		wanPortLinkOption1: 'Tam çift yönlü 10Mbps',
		wanPortLinkOption2: 'Tam çift yönlü 100Mbps',
		wanPortLinkOption3: 'Yarı çift yönlü 10Mbps',
		wanPortLinkOption4: 'Yarı çift yönlü 100Mbps',
		wanPortLinkOption5: 'Half duplex 1000Mbps',
		wanPortLinkOption6: 'Full duplex 1000Mbps',
			
		pcPortLink: 'Bilgisayar Bağlantı Noktası Bağlantısı',
		pcPortLinkOption0: 'Otomatik anlaş',
		pcPortLinkOption1: 'Tam çift yönlü 10Mbps',
		pcPortLinkOption2: 'Tam çift yönlü 100Mbps',
		pcPortLinkOption3: 'Yarı çift yönlü 10Mbps',
		pcPortLinkOption4: 'Yarı çift yönlü 100Mbps',
		
		slaccEnable: 'ICMPv6 Status',

		vpn: 'VPN',
		importFile: 'Upload VPN Config',
		importStr: 'Import',
		
		voiceQos: 'Ses QoS',
		sipQos: 'SIP QoS',
		
		localRtpPort: 'Yerel RTP Bağlantı Noktası',
		maxRTPPort: 'En Fazla RTP Bağlantı Noktası',
		minRTPPort: 'En Az RTP Bağlantı Noktası',
		
		webServer: 'Web Sunucusu',
		httpPort: 'Http Bağlantı Noktası',
		httpsPort: 'Https Bağlantı Noktası',
		webServerType: 'Tür',
		webServerTypeOption0: 'Devre dışı',
		webServerTypeOption1: 'yalnızca http',
		webServerTypeOption2: 'yalnızca https',
		webServerTypeOption3: 'http ve https',

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

		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
		tips: {
			lldp: 'LLDP transmits information as packets called LLDP Data Units (LLDPDUs). An LLDPDU consists of a set of Type-Length-Value (TLV) elements, each of which contains a particular type of information about the device or the port transmitting it.',
			cdp: 'CDP (Cisco Discovery Protocol) allows IP phones to receive and/or transmit device-related information from/to directly connected devices on the network that are also using the protocol, and store the information about other devices.',
			vlan: 'VLAN yapılandırması, özel yapılandırma için kullanılır, Ve bunu değiştirirseniz ve değişikliklerin hemen gerçekleşmesini istiyorsanız elle yeniden başlatmanız gerekir.',
			portLink: 'Connection rate for WAN and PC ports.',
			vpn: 'VPN yapılandırması, özel yapılandırma için kullanılır.',
			voiceQos: 'Ağ kapasitesi eksikliğinde, hizmet kalitesi, kullanıcılara tercihen kabul edilebilir değer sağlayabilir.',
			localRtpPort: 'Ses iletimi bağlantı noktasını tanımla.',
			x_802_1x: 'It configures the 802.1x authentication method.',
			webServer: 'Web erişimi türü ve bağlantı noktasının tanımı.',
			slaccEnable: 'Enable/disable the IP phone to obtain the IPv6 network settings via SLAAC (Stateless Address Autoconfiguration) method.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Anahtar',
		type: 'Tür',
		value: 'Değer',
		label: 'Etiket',
		account: 'Hesap',
		ext: 'Uzatma',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'DSS Anahtarı',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Hat',
		keyTypeOpt2: 'Hızlı Arama',
		keyTypeOpt4: 'Mesaj',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF Listesi',
		keyTypeOpt9: 'Doğrudan Yanıtlama',
		keyTypeOpt10: 'Grup Yanıtlama',
		keyTypeOpt11: 'Arama Bekletme',
		keyTypeOpt12: 'Dâhili İletişim Sistemi',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferans',
		keyTypeOpt15: 'Yönlendir',
		keyTypeOpt16: 'Aktar',
		keyTypeOpt17: 'Beklet',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Yeniden Ara',
		keyTypeOpt20: 'Dizin',
		keyTypeOpt21: 'Geri Arama',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Uygulanamaz',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Hesap 1',
		accountNumberOpt2: 'Hesap 2',
		accountNumberOpt3: 'Hesap 3',
		accountNumberOpt4: 'Hesap 4',
		accountNumberOpt5: 'Hesap 5',
		accountNumberOpt6: 'Hesap 6',
		accountNumberOpt8: 'Otomatik',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Onayla',
		butCancel: 'İptal'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Anahtar',
		type: 'Tür',
		value: 'Değer',
		label: 'Etiket',
		account: 'Hesap',
		ext: 'Uzatma',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Line Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Hat',
		keyTypeOpt2: 'Hızlı Arama',
		keyTypeOpt4: 'Mesaj',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF Listesi',
		keyTypeOpt9: 'Doğrudan Yanıtlama',
		keyTypeOpt10: 'Grup Yanıtlama',
		keyTypeOpt11: 'Arama Bekletme',
		keyTypeOpt12: 'Dâhili İletişim Sistemi',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferans',
		keyTypeOpt15: 'Yönlendir',
		keyTypeOpt16: 'Aktar',
		keyTypeOpt17: 'Beklet',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Yeniden Ara',
		keyTypeOpt20: 'Dizin',
		keyTypeOpt21: 'Geri Arama',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Uygulanamaz',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Hesap 1',
		accountNumberOpt2: 'Hesap 2',
		accountNumberOpt3: 'Hesap 3',
		accountNumberOpt4: 'Hesap 4',
		accountNumberOpt5: 'Hesap 5',
		accountNumberOpt6: 'Hesap 6',
		accountNumberOpt8: 'Otomatik',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Onayla',
		butCancel: 'İptal'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Anahtar',
		type: 'Tür',
		value: 'Değer',
		label: 'Etiket',
		account: 'Hesap',
		
		programKeys: ['Sessiz', 'Beklet', 'Yeniden Ara', 
		              'Yukarı', 'Aşağı', 'Sol', 'Sağ', 'İptal', 'Tamam', 
		              'Orta Tuş1', 'Orta Tuş2', 'Orta Tuş3', 'Orta Tuş4'],

		programKeys_A1x: ['Sessiz', 'Beklet', 'Yeniden Ara', 
		              'Yukarı', 'Aşağı', 'Sol', 'Sağ', 'İptal', 'Tamam', 
		              'Orta Tuş1', 'Orta Tuş2', 'Orta Tuş3'],

		programKeys_A2x: ['Sessiz', 'Beklet', 'Yeniden Ara', 
		              'Yukarı', 'Aşağı', 'Sol', 'Sağ', 'İptal', 'Tamam', 
		              'Orta Tuş1', 'Orta Tuş2', 'Orta Tuş3'],

		programKeys_CT11: ['Sessiz', 
		              'Yukarı', 'Aşağı',
		              'Orta Tuş1', 'Orta Tuş2', 'Orta Tuş3', 'Orta Tuş4'],
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Hat',
		keyTypeOpt2: 'Hızlı Arama',

		keyTypeOpt4: 'Mesaj',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF Listesi',
		keyTypeOpt9: 'Doğrudan Yanıtlama',
		keyTypeOpt10: 'Grup Yanıtlama',
		keyTypeOpt11: 'Arama Bekletme',
		keyTypeOpt12: 'Dâhili İletişim Sistemi',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferans',
		keyTypeOpt15: 'Yönlendir',
		keyTypeOpt16: 'Aktar',
		keyTypeOpt17: 'Beklet',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Yeniden Ara',
		keyTypeOpt20: 'Dizin',
		keyTypeOpt21: 'Geri Arama',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Uygulanamaz',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'Status',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Hesap 1',
		accountNumberOpt2: 'Hesap 2',
		accountNumberOpt3: 'Hesap 3',
		accountNumberOpt4: 'Hesap 4',
		accountNumberOpt5: 'Hesap 5',
		accountNumberOpt6: 'Hesap 6',
		accountNumberOpt8: 'Otomatik',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Onayla',
		butCancel: 'İptal'
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
		key: 'Anahtar',
		type: 'Tür',
		value: 'Değer',
		label: 'Etiket',
		account: 'Hesap',
		ext: 'Uzatma',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'İç Hat Tuşu',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Hat',
		keyTypeOpt2: 'Hızlı Arama',
		keyTypeOpt4: 'Mesaj',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF Listesi',
		keyTypeOpt9: 'Doğrudan Yanıtlama',
		keyTypeOpt10: 'Grup Yanıtlama',
		keyTypeOpt11: 'Arama Bekletme',
		keyTypeOpt12: 'Dâhili İletişim Sistemi',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferans',
		keyTypeOpt15: 'Yönlendir',
		keyTypeOpt16: 'Aktar',
		keyTypeOpt17: 'Beklet',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Yeniden Ara',
		keyTypeOpt20: 'Dizin',
		keyTypeOpt21: 'Geri Arama',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Uygulanamaz',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Hesap 1',
		accountNumberOpt2: 'Hesap 2',
		accountNumberOpt3: 'Hesap 3',
		accountNumberOpt4: 'Hesap 4',
		accountNumberOpt5: 'Hesap 5',
		accountNumberOpt6: 'Hesap 6',
		accountNumberOpt8: 'Otomatik',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Onayla',
		butCancel: 'İptal'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'AET device ID which display in the status of linkable divice'
		}	
},
extKeyBackHtml = {
	noLink: 'Hiç genişletme modülü bağlı değil! Lütfen bir ya da daha fazla birim bağlayıp bu sayfayı yenileyin.'	
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
		              '0 Denmark-Faroe Islands(Torshaven)',
		              '0 Ireland(Dublin)',
		              '0 Portugal(Lisboa,Porto,Funchal)',
		              '0 Spain-Canary Islands(Las Palmas)',
		              '0 United Kingdom(London)',
		              '0 Morocco',
		              
		              '+1 Albania(Tirane)',
		              '+1 Austria(Vienna)',
		              '+1 Belgium(Brussels)',
		              '+1 Caicos',
		              '+1 Chatam',
		              '+1 Croatia(Zagreb)',
		              '+1 Czech Republic(Prague)',
		              '+1 Denmark(Kopenhaven)',
		              '+1 France(Paris)',
		              '+1 Germany(Berlin)',
		              '+1 Hungary(Budapest)',
		              '+1 Italy(Rome)',
		              '+1 Luxembourg(Luxembourg)',
		              '+1 Makedonia(Skopje)',
		              '+1 Netherlands(Amsterdam)',
		              '+1 Namibia(Windhoek)',
			      '+1 Poland(Warsaw)',
		              
		              '+2 Estonia(Tallinn)',
		              '+2 Finland(Helsinki)',
		              '+2 Gaza Strip(Gaza)',
		              '+2 Greece(Athens)',
		              '+2 Israel(Tel Aviv)',
		              '+2 Jordan(Amman)',
		              '+2 Latvia(Riga)',
		              '+2 Lebanon(Beirut)',
		              '+2 Moldova(Kishinev)',
		              '+2 Russia(Kaliningrad)',
		              '+2 Romania(Bucharest)',
		              '+2 Syria(Damascus)',
		              '+2 Turkey(Ankara)',
		              '+2 Ukraine(Kyiv,Odessa)',
		              
		              '+3 East Africa Time',
		              '+3 Iraq(Baghdad)',
		              '+3 Russia(Moscow)',
		              
		              '+3:30 Iran(Teheran)',
		              
		              '+4 Armenia(Yerevan)',
		              '+4 Azerbaijan(Baku)',
		              '+4 Georgia(Tbilisi)',
		              '+4 Kazakstan(Aqtau)',
		              '+4 Russia(Samara)',
		              
		              '+4:30 Kabul',
		              
		              '+5 Kazakstan(Aqtobe)',
		              '+5 Kyrgyzstan(Bishkek)',
		              '+5 Pakistan(Islamabad)',
		              '+5 Russia(Chelyabinsk)',
		              
		              '+5:30 India(Calcutta)',
		              
		              '+5:45 Katmandu',
		              
		              '+6 Kazakstan(Astana,Almaty)',
		              '+6 Kazakstan(Astana,Almaty)',
		              
		              '+6:30 Rangoon',
		              
		              '+7 Russia(Krasnoyarsk)',
		              '+7 Thailand(Bangkok)',
		              
		              '+8 China(Beijing)',
		              '+8 Singapore(Singapore)',
		              '+8 Australia(Perth)',
		              
		              '+9 Korea(Seoul)',
		              '+9 Japan(Tokyo)',
		              
		              '+9:30 Australia(Adelaide)',
		              '+9:30 Australia(Darwin)',
		              
		              '+10 Australia(Sydney,Melbourne,Canberra)',
		              '+10 Australia(Brisbane)',
		              '+10 Australia(Hobart)',
		              '+10 Russia(Vladivostok)',
		              
		              '+10:30 Australia(Lord Howe Islands)',
		              
		              '+11 New Caledonia(Noumea)',
		              
		              '+12 New Zeland(Wellington,Auckland)',
		              
		              '+12:45 New Zeland(Chatham Islands)',
		              
		              '+13 Tonga(Nukualofa)'],
		dhcpTime: 'DHCP Zamanı',
		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',
		auto: 'Otomatik',
		timeZone: 'Zaman Dilimi',
		primaryNtp: 'Birincil NTP Sunucusu',
		secondaryNtp: 'İkincil NTP Sunucusu',
		updateInterval: 'Güncelleme Aralığı (sn.)',
		daylight: 'gün ışığı',
		fixedType: 'Sabit Tür',
		fixedTypeOpt0: 'Tarihe Göre',
		fixedTypeOpt1: 'Haftaya Göre',
		startMonth: 'Başlangıç Ayı',
		January: 'Ocak',
		February: 'Şubat',
		March: 'Mart',
		April: 'Nisan',
		May: 'Mayıs',
		June: 'Haziran',
		July: 'Temmuz',
		August: 'Ağustos',
		September: 'Eylül',
		October: 'Ekim',
		November: 'Kasım',
		December: 'Aralık',
		startDate: 'Başlangıç Tarihi',
		startHourDay: 'Başlangıç Gün Saati',
		startDayWeek: 'Başlangıç Hafta Günü',
		Sunday: 'Pazar',
		Monday: 'Pazartesi',
		Tuesday: 'Salı',
		Wednesday: 'Çarşamba',
		Thursday: 'Perşembe',
		Friday: 'Cuma',
		Saturday: 'Cumartesi',
		startWeekMonth: 'Başlangıç Ay Haftası',
		firstInMonth: 'Ayda Birinci',
		secondInMonth: 'Ayda İkinci',
		thirdInMonth: 'Ayda Üçüncü',
		fourthInMonth: 'Ayda Dördüncü',
		lastInMonth: 'Ayda Sonuncu',
		stopMonth: 'Bitiş Ayı',
		stopDate: 'Bitiş Tarihi',
		stopHourDay: 'Bitiş Gün Saati',
		stopDayWeek: 'Bitiş Hafta Günü',
		stopWeekMonth: 'Bitiş Ay Haftası',
		offset: 'Sapma (dakika)',
		manualTime: 'Manüel Zaman',
		dateYmd: 'Tarih',
		autoDate: 'Oluşturulan Tarih',
		timeHms: 'Saat',
		autoTime: 'Oluşturulan Saat',
		timeFormat: 'Zaman Biçimi',
		timeFormatOpt0: '12 Saat',
		timeFormatOpt1: '24 Saat',
		dateFormat: 'Tarih Biçimi',
		backlightTime: 'Arka ışık süresi',
		backlightTimeOpt0: 'Her zaman açık',
		backlightTimeOpt1: '1 dk.',
		backlightTimeOpt2: '2 dk.',
		backlightTimeOpt3: '5 dk.',
		backlightTimeOpt4: '10 dk.',
		backlightTimeOpt5: '30 dk.',
		screensaver_timeout: 'Screensaver Time',
		screensaver_timeoutOpt0: 'off',
		screensaver_timeoutOpt1: '1 dk.',
		screensaver_timeoutOpt2: '2 dk.',
		screensaver_timeoutOpt3: '5 dk.',
		screensaver_timeoutOpt4: '10 dk.',
		screensaver_timeoutOpt5: '30 dk.',
		backlightLevel: 'Arka ışık düzeyi',
		slaveBacklightLevel: 'Bağımlı Arka Işık Düzeyi',
		expandBacklightLevel: 'Arka Işık Düzeyini Genişlet',
		slaveLcdContract: 'Bağımlı LCD Karşıtlığı',
		ringTones: 'Zil Sesleri',
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
		delWallpaper: 'Sil',
		uploadWallpaper: 'Upload',
		cancelWallpaper: 'İptal',
		screensaver: 'Screensaver',
		
		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
		tips: {
			dhcpTime: 'Enables or disables the IP phone to update time with the offset time obtained from the DHCP server.',
			replaceRingTone: 'Recommended file format: 16-bit, wave; the file size should be less than 800 kB for the colour display phone, and less than 300 kB for the monochrome display phone.',
			timeZone: 'Zaman diliminizi burada seçin.',
			updateInterval: 'Yerel cihazın zamanını sunucuyla kontrol etmek için zaman aralığını ayarlayın.',
			daylight: 'Yaz Saati ayarları.',
			manualTime: 'Manüel zaman ayarını etkinleştir/devre dışı bırak.',
			timeFormat: 'Saati 12 ya da 24 saatlik gösterim olarak ayarla.',
			dateFormat: 'Tarih gösterim biçimini ayarla.',
			backlightTime: 'Arka ışık süresini ayarla.',
			screensaver_timeout: 'Set Screensaver time.',
			backlightLevel: 'Telefon arka ışık parlaklık ayarı.',
			ringTones: 'Telefon Zil türü ayarları.',
			pictureSize: 'Best resolution is 461x278 pixels and the size should be less than 500KBytes.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',
		off: 'Kapalı',
		on: 'Açık',
		forward: 'Yönlendir',
		always: 'Her zaman',
		busy: 'Meşgul',
		noAnswer: 'Yanıt Yok',
		afterRingTime: 'Zil Süresinden Sonra (sn.)',
		
		target: 'Hedef',
		onCode: 'Açık Kod',
		offCode: 'Kapalı Kod',
		
		dnd: 'Rahatsız Etmeyin',
		dndOnCode: 'DND Açık Kod',
		dndOffCode: 'DND Kapalı Kod',
		authNum: 'Yetkili Numaralar (virgülle ayrılmış)',
		
		generalInfo: 'Genel Bilgi',
		liveDialpad: 'Canlı Arama Tuşları',
		interDigitTime: 'Ara Hane Süresi (sn.)',
		autoAnswer: 'Otomatik Yanıtla',
		autoAnswerDelay: 'Auto Answer Delay (sec)',
		ignoreMissedCall: 'Ignore Missed Call',
		callWaiting: 'Arama Bekletme',
		hotline: 'Acil Hat',
		hotlineTimeout: 'Acil Hat Zaman Aşımı (0~180 sn.)',
		keyAsSend: 'Gönderir Gibi Tuş',
		dialNowTimeout: 'Şimdi Çevir Zaman Aşımı (sn.)',
		busyToneTimer: 'Meşgul Tonu Zamanlayıcı (sn.)',
		returnCodeWhenRefuse: 'Reddedildiğinde Dönüş Kodu',
		returnCodeWhenDnd: 'DND Olduğunda Dönüş Kodu',
		r404: '404 (Bulunamadı)',
		r480: '480 (Geçici olarak ulaşılamıyor)',
		r486: '486 (Burada meşgul)',
		rfc2543Hold: 'RFC 2543 Beklet',
		useOutboundProxyInDialog: 'İletişimde Giden Vekil Sunucusu Kullan',
		loginTimeout: 'Oturum Açma Zaman Aşımı',
		hidedtmf: 'Hide DTMF',
		multicastCodec: 'Multicast Codec',
		watchdog: 'Watch Dog',
		
		audioSettings: 'Ses Ayarları',
		callWaitingTone: 'Arama Bekletme Tonu',
		headset: 'Kulaklık Ses Düzeyi',
		handset: 'Ahize Ses Düzeyi',
		handfree: 'Eller Serbest Ses Düzeyi',
		ringer: 'Zil Ses Düzeyi',
		headsetSend: 'Kulaklık Gönderme Ses Düzeyi',
		handsetSend: 'Ahize Gönderme Ses Düzeyi',
		handfreeSend: 'Eller Serbest Gönderme Ses Düzeyi',
		ringerDeviceForHeadset: 'Kulaklık İçin Zil Cihazı',
		ringerDeviceForHeadsetOpt0: 'Hoparlör Kullan',
		ringerDeviceForHeadsetOpt1: 'Kulaklık Kullan',
		
		transferSettings: 'Aktarma Ayarları',
		blindTransferOnHook: 'Kapandığında Tek Yönlü Aktar',
		attendedTransferOnHook: 'Kapandığında Katılımlı Aktar',
		transferOnConHangUp: 'Konferans Kapandığında Aktar',
		transferModeViaDsskey: 'DSSkey Aracılığıyla Aktarım Modu',
		transferModeViaDsskeyOpt0: 'Yeni Arama',
		transferModeViaDsskeyOpt1: 'Katılımlı Aktar',
		transferModeViaDsskeyOpt2: 'Tek Yönlü Aktarım',
		
		callPickup: 'Arama Yanıtlama',
		directCallPickup: 'Doğrudan Arama Yanıtlama',
		directCallPickupCode: 'Doğrudan Arama Yanıtlama Kodu',
		groupCallPickup: 'Grup Arama Yanıtlama',
		groupCallPickupCode: 'Grup Arama Yanıtlama Kodu',
		
		accept_sip_trust_server_only: 'Accept SIP Trust Server Only',
		recordUserId: 'Record User ID',
		extFunction: 'Ext Function',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: 'Conference hold when add new',

		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
		tips: {
			forward: 'Arama Aktarma Ayarla.',
			alwaysTarget: 'Aktarma için hedef numara.',
			alwaysOnCode: 'Tüm gelen aramaları yönlendirmeyi etkinleştirmek için özellik kodu; telefon, özellik kodunu tüm gelen aramaları yönlendirmeyi açmak için doğrudan gönderecektir.',
			alwaysOffCode: 'Tüm gelen aramaları yönlendirmeyi devre dışı bırakmak için özellik kodu; telefon, özellik kodunu tüm gelen aramaları yönlendirmeyi kapatmak için doğrudan gönderecektir.',
			busyTarget: 'Aktarma için hedef numara.',
			busyOnCode: 'Meşgul aramayı yönlendirmeyi etkinleştirmek için özellik kodu; telefon, özellik kodunu meşgul aramayı yönlendirmeyi açmak için doğrudan gönderecektir.',
			busyOffCode: 'Meşgul aramayı yönlendirmeyi devre dışı bırakmak için özellik kodu; telefon, özellik kodunu meşgul aramayı yönlendirmeyi kapatmak için doğrudan gönderecektir.',
			afterRingTime: 'Yanıtsız Arama yönlendirme için bekleme süresi.',
			noAnswerTarget: 'Aktarma için hedef numara.',
			noAnswerOnCode: 'Yanıtsız aramayı yönlendirmeyi etkinleştirmek için özellik kodu; telefon, özellik kodunu yanıtsız aramayı yönlendirmeyi açmak için doğrudan gönderecektir.',
			noAnswerOffCode: 'Yanıtsız aramayı yönlendirmeyi devre dışı bırakmak için özellik kodu; telefon, özellik kodunu yanıtsız aramayı yönlendirmeyi kapatmak için doğrudan gönderecektir.',
			
			dndOnCode: 'DND’yi etkinleştirmek için özellik kodu; telefon, özellik kodunu DND’yi açmak için doğrudan gönderecektir.',
			dndOffCode: 'DND’yi devre dışı bırakmak için özellik kodu; telefon, özellik kodunu DND’yi kapatmak için doğrudan gönderecektir.',
			
			liveDialpad: 'Kullanıcı çevirme arayüzünde "otomatik olarak çevir" özelliğini etkinleştir/devre dışı bırak.',
			interDigitTime: 'Canlı arama tuşları için gecikme süresini otomatik olarak çevir.',
			autoAnswer: 'Otomatik yanıtı etkinleştir/devre dışı bırak.',
			autoAnswerDelay: 'It configures the delay time (in seconds) before the IP phone automatically answers an incoming call.',
			callWaiting: 'Yeni gelen arama geçişleri için meşgul bekleme.',
			hotline: 'Acil hat numarasına bak.',
			hotlineTimeout: 'Acil hat gecikme süresi için ayar.',
			keyAsSend: 'Tuşları dışarıyı arama işlevi olarak ayarla.',
			dialNowTimeout: 'Şimdi Çevir için aralık.',
			busyToneTimer: 'Arama bittikten sonra meşgul tonu.',
			returnCodeWhenRefuse: 'Arama reddetme için dönüş mesajını ayarla.',
			returnCodeWhenDnd: 'Rahatsız Etmeyin için dönüş mesajını ayarla.',
			rfc2543Hold: 'Bekletme için iki standart türü, sunucu desteği gerektirir.',
			useOutboundProxyInDialog: 'Konuşmada giden vekil sunucusu etkinleştir/devre dışı bırak.',
			loginTimeout: 'It configures the timeout interval (in minutes) for web access authentication.',
			acceptSipTrustServerOnly: 'Enable/disable the IP phone to only accept the SIP message from the SIP and outbound proxy server.',
			
			callWaitingTone: 'Bir aramada yeni bir arama sormak için ton ayarla (arama bekletme açık).',
			ringerDeviceForHeadset: 'Arama zili Kanal seçeneği.',

			blindTransferOnHook: 'Kapanma aracılığıyla tek yönlü aktarımı etkinleştir/devre dışı bırak.',
			attendedTransferOnHook: 'Kapanmada Katılımlı Aktarımı ve Yarı Katılımlı Aktarımı etkinleştir/devre dışı bırak.',
			transferOnConHangUp: 'Konferans başlatıcı kapattığında diğer iki tarafa aktarmak için etkinleştir/devre dışı bırak.'
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
		
		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
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
		ver: 'Sürüm',
		fmVer: 'Bellenim Sürümü',
		hdVer: 'Donanım Sürümü',
		
		resetToFactory: 'Fabrika Ayarlarına Sıfırla',
		reboot: 'Yeniden Başlat',		
		
		upgradeHeader: 'Bellenim Yazılımını Yükselt',
		selectFw: 'Bellenim Yazılımı Seç',
		upgrade: 'Yükselt',
		
		tips: {
			upgradeHeader: 'Yükseltmek için, tedarikçiler tarafından çıkarılan güncel bellenim yazılımını seçin.'
		}
	},
	commonText: {
		resetConfirm: 'Fabrika ayarlarına sıfırlamak istiyor musunuz?',
		resetSuccess: 'Fabrika ayarlarına sıfırlama başarılı. Cihaz otomatik olarak yeniden başlayacaktır.',
		resetFail: 'Fabrika ayarlarına sıfırlama başarısız; lütfen tekrar deneyin!',
		
		rebootConfirm: 'Yeniden başlatmak istiyor musunuz?',
		
		uploadFilePrompt: 'Karşıya yüklenecek olan dosya:',
		upgradeMsg: 'Lütfen gücü kapatmayın!',
		upgradeText: 'Yükseltiliyor, lütfen bekleyin…',
		
		upgradeFail: 'Yükseltme başarısız; lütfen tekrar deneyin!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'Pcap Özelliği',
		start: 'Başlat',
		stop: 'Durdur',
		exportStr: 'Dışarı Aktar',
		
		debug: 'Hata Ayıklama'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Oto. Yetkilendirme',
		PnPEnable: 'PnP Active',
		DHCPEnable: 'DHCP Active',
		provisioningServer: 'Hazırlık Sunucusu',
		userName: 'Kullanıcı Adı',
		password: 'Şifre',
		commonAESKey: 'Common AES Key',
		MACAESKey: 'MAC-Oriented AES Key',
		checkNewConfig: 'Yeni Yapılandırmayı Kontrol Edin',
		off: 'Kapalı',
		on: 'Açık',
		repeatedly: 'Tekrar Tekrar',
		interval: 'Ara (dakika)',
		weekly: 'Haftalık',
		time: 'Saat',
		dayOfWeek: 'Haftanın Günü',
		
		
		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
		tips: {
			PnPEnable: 'The request to the server to obtain a support URL for upgrade',
			DHCPEnable: 'To obtain a support URL for upgrade from DHCP server',
			provisioningServer: 'Sunucu adresini güncelleyin',
			password: 'Sunucu şifresi',
			checkNewConfig: 'Sunucu üzerindeki yeni yapılandırmanın kontrol modu'
		}
	},
	showText: {
		weekly:  ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Yapılandırmayı İçeri/Dışarı Aktar',
		importFile: 'Dosyayı İçeri Aktar',
		importStr: 'İçeri Aktar',
		exportStr: 'Dışarı Aktar',
		exportUserData: 'Kullanıcı Verilerini Dışarı Aktar',

		exportImportConfig: 'Import/Export CFG File',
		
		exportSyslog: 'Sistem Günlüğünü Dışarı Aktar',
		logLocation: 'Günlük Konumu',
		logLocationOpt0: 'Yerel',
		logLocationOpt1: 'Sunucu', 
		serverName: 'Sunucu Adı',
		logLevel: 'Günlük Düzeyi',
		logOpt0: 'Ölümcül',
		logOpt1: 'Hata',
		logOpt2: 'Uyarı',
		logOpt3: 'Bilgi',
		logOpt4: 'Hata Ayıklama',
		exportStr2: 'Dışarı Aktar',
		
		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
		tips: {
			exportImportConfig: 'The imported or exported file must have an auto provision file format. The exported file includes the modified configuration only, so it will be empty if no changes were made.',
			importExportCfg: 'Geçerli telefon yapılandırmasını dışarı aktarmak için Dışarı Aktar öğesine tıklayın; içe aktarma yapılandırma dosyasını seçin, İçeri Aktar öğesine tıklayın. Yapılandırmayı geçerli telefona içeri aktaracak ve yeniden başlatacaktır.',
			exportSyslog: 'Tür Yerel şeklindeyse, sistem günlüğünü otomatik olarak dışarı aktaracaktır; tür sunucu şeklindeyse, sistem günlüğünü belirtilen sunucuya dışarı aktaracaktır.'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Action URI allow IP List',
		remoteControl:'Remote Control',
		cstaControl: 'CSTA Control',
		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',
		butConfirm: 'Onayla',
		butCancel: 'İptal'
	       },
},
phoneActionUrlHtml = {
	form1: {
		actionUrlItem: ['setupCompletedUrl','registeredUrl','unregisteredUrl','registerFailedUrl','offHookUrl','onHookUrl','incomingCallUrl','outgoingCallUrl','establishedUrl','terminatedUrl','openDNDUrl','closeDNDUrl','openAlwaysForwardUrl','closeAlwaysForwardUrl','openBusyForwardUrl','closeBusyForwardUrl','openNoAnswerForwardUrl','closeNoAnswerForwardUrl','transferCallUrl','blindTransferUrl','attendedTransferUrl','holdUrl','unHoldUrl','muteUrl','unMuteUrl', 'missedCallUrl','IPChangedUrl','idleToBusyUrl','busyToIdleUrl','rejectIncomingCallUrl','answerNewIncomingCallUrl','transferFailedUrl','transferFinishedUrl','forwardIncomingCallUrl','autopFinishUrl','openCallWaitingUrl','closeCallWaitingUrl','headsetUrl','handfreeUrl','cancelCallOutUrl','remoteBusyUrl','callRemoteCanceledUrl'],
		actionUrlNameList: [ 'Setup Completed','Registered','Unregistered','Register Failed','Off Hook','On Hook','Incoming Call','Outgoing Call','Established','Terminated','Open DND','Close DND','Open Always Forward','Close Always Forward','Open Busy Forward','Close Busy Forward','Open NoAnswer Forward','Close NoAnswer Forward','Transfer Call','Blind Transfer','Attended Transfer','Hold','UnHold','Mute','UnMute','Missed Call','IP Changed','Idle To Busy','Busy To Idle','Reject Incoming Call','Answer New Incoming Call','Transfer Failed','Transfer Finished','Forward Incoming Call','Autop Finish','Open Call Waiting','Close Call Waiting','Headset','Handfree','Cancel Call Out','Remote Busy','Call Remote Canceled'],		
		butConfirm: 'Onayla',
		butCancel: 'İptal'
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
		butConfirm: 'Onayla',
		butCancel: 'İptal'
	}
},
phoneDialPlanHtml = {
	mytabMenu: {
		replaceRule: 'Kuralı Değiştir',
		dialNow: 'Şimdi Çevir',
		areaCode: 'Alan Kodu',
		blockOut: 'Engelle'
	},
	replaceRuleTitle: ['Dizin', 'Numara', 'Değiştir', 'Hesap'],
	dialNowsTitle: ['Dizin', 'Şimdi Çevir Kuralı', 'Hesap'],
	replaceRuleForm: {
		num: 'Numara',
		replace: 'Değiştir',
		account: 'Hesap',
		add: 'Ekle',
		edit: 'Düzenle',
		del : 'Sil',
		save: 'Kaydet'
	},
	dialNowsForm: {
		rule: 'Şimdi Çevir Kuralı',
		account: 'Hesap',
		add: 'Ekle',
		edit: 'Düzenle',
		del : 'Sil',
		save: 'Kaydet'
	},
	form3: {
		code: 'Kod',
		minLen: 'En az uzunluk',
		maxLen: 'En fazla uzunluk',
		areaCodeAccount: 'Hesap',
		
		butConfirm: 'Onayla',
		butCancel: 'İptal'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Numarayı Engelle',
		account: 'Hesap',
		
		butConfirm: 'Onayla',
		butCancel: 'İptal'
	}
},
phoneRingHtml = {
	form1: {
		alterInfoTitle: 'Alert Info',
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		tips: {
		}
	       }
},
phoneVoiceHtml = {
	form1: {
		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',
		
		echoCancellation: 'Yankı Giderme',
		echoCanceller: 'Yankı Giderici',
		echoCancellerOpt0: 'Düşük Düzey',
		echoCancellerOpt1: 'Orta Düzey',
		echoCancellerOpt2: 'Yüksek Düzey',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Gecikme Arabelleği',
		type: 'Tür',
		typeOpt0: 'Sabit',
		typeOpt1: 'Uyarlanır',
		minDelay: 'En Az Gecikme',
		maxDelay: 'En Fazla Gecikme',
		normalDelay: 'Normal Gecikme',
		
		butConfirm: 'Onayla',
		butCancel: 'İptal',
		
		tips: {
			echoCancellation: 'Yankı giderme ayarları.',
			echoCanceller: 'Yankı gidericiyi etkinleştir/devre dışı bırak.',
			vad: 'Ses Etkinliği Algılama.',
			cng: 'Sessizlik Giderici Ton Üretici.',
			jitterBuffer: 'Bu bir veri paylaşımlı alandır, ses ve veri paketleri toplanabilir, saklanabilir ve tek biçimli ses işlemcisine gönderilebilir.'
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
		butConfirm: 'Onayla',
		butCancel: 'Cancel'
	},
    showText: {
		delConfirm: 'Are you sure to delete the chosen files ?',
		selectEmpty: 'Please select one record at least.'
	}
},

phoneLockHtml = {
	form1: {

		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',

		keypad_lock: 'Phone Lock',
		keypadlock_enable: 'Keypad Lock Enable',
		keypadlock_type: 'Keypad Lock Type',
		keypadlock_password: 'Phone Unlock PIN(0~15 Digit)',
		delay_lock: 'Phone Lock Time Out(1~3600s)',
		emergency_call: 'Emergency',
		keypad_lock_menu_key: 'Menu Key',
		keypad_lock_function_key: 'Function Key',
		keypad_lock_all_keys: 'All Keys',
		keypad_lock_answer_call_only:'Sadece çağrı cevaplama',

		butConfirm: 'Onayla',
		butCancel: 'İptal',

		tips: {
			emergency_call: 'Used for calling out emergency number when it is set as keypad lock'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: 'Devre Dışı Bırak',
		enable: 'Etkinleştir',

		tr069: 'TR069',
		tr069_enable: 'TR069 aktif',
		serveraddress: 'ACS URL',
		serverport: 'Port',
		username: 'ACS Kullanıcı Adı',
		password: 'ACS Şifresi',
		periodic_inform_enable: 'Periyodik Bilgilendirme Devrede',
		periodic_inform_interval: 'Periodic Bilgilendirme Aralığı (seconds)',
		connection_request_username: 'Bağlantı İsteği Kullancı Adı',
		connection_request_password:'Bağlantı İsteği Şifresi',

		butConfirm: 'Onayla',
		butCancel: 'İptal',

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
		passwdModify: 'Şifre Düzenle',
		userType: 'Kullanıcı Türü',
		currentPasswd: 'Geçerli Şifre',
		newPasswd: 'Yeni Şifre',
		confirmPasswd: 'Şifreyi Onayla',
		
		butConfirm: 'Onayla',
		butCancel: 'Cancel',
		
		tips: {
			userType: 'Türünüzü seçin. Kullanıcı olarak oturum açarsanız, yalnızca kendi şifrenizi değiştirebilirsiniz. Yönetici olarak oturum açarsanız, hem kullanıcının hem de yöneticinin şifresini düzenleyebilirsiniz.'
		}
	},
	showText: {
		pwdNoMatch: 'Girdiğiniz iki şifre uyuşmadı',
		modifyFailed: 'Şifre düzenleme başarısız; lütfen tekrar deneyin!'
	}
},
contactsHtml = {
	mytabMenu: ['Kişiler', 'Kara Liste'],
	tableHeader: ['Dizin', 'Ad', 'Ofis Numarası', 'Cep Numarası', 'Diğer Numara', 'Hesap'],
	buttonDiv: {
		save: 'Kaydet',
		del: 'Sil',
		moveToBlack: 'Kara Listeye Taşı',
		moveToWhite: 'Kişilere Taşı'
	},
	editDiv: {
		contacts: 'Kişiler',
		name: 'Ad',
		officeNum: 'Ofis Numarası',
		mobileNum: 'Cep Numarası',
		otherNum: 'Diğer Numara',
		account: 'Hesap',
		accountOpt8: 'Otomatik',
		accountOpt1: 'Hesap 1',
		accountOpt2: 'Hesap 2',
		accountOpt3: 'Hesap 3',
		accountOpt4: 'Hesap 4',
		accountOpt5: 'Hesap 5',
		accountOpt6: 'Hesap 6',
		ring: 'Zil',
		ringOpts: ['Otomatik', 'Ring1.wav', 'Ring2.wav', 'Ring3.wav', 'Ring4.wav', 
		           'Ring5.wav', 'Ring6.wav', 'Ring7.wav', 'Ring8.wav', 'Ring9.wav', 'Ring10.wav'],
		photo: 'Resim',
		defaultPhoto: 'Default',
		add: 'Ekle',
		deletePhoto: 'Sil',
		uploadPhoto: 'Upload Photo',
		pictureSize: 'Best resolution is 100x135 pixels and the size should be less than 250KBytes.',
		edit: 'Düzenle',
		search: 'Ara',
		
		importAndExport: 'Yerel Kişileri İçeri ve Dışarı Aktar',
		importFile: 'Yerel Kişileri İçeri Aktar',
		importStr: 'İçeri Aktar',
		exportStr: 'Dışarı Aktar'
	},
	
	shwoText: {
		delConfirm: 'Seçilen kişileri silmek istediğinizden emin misiniz?',
		delConfirm1: 'Not: Kaydedildikten sonra kişi fotoğrafı kurtarılmayacaktır!', 
		selectEmpty: 'Lütfen en az bir kayıt seçin.',
		selectTooMuch: 'Seçilen kayıt çok fazla!',
		nameEmpty: 'Görüntülenme Adı boş olamaz!',
		nameExist: 'Görüntülenme Adı yok!',
		phonebookFull: 'Only less than 400 items in phonebook list!',
		blacklistFull: 'Only less than 50 items in blacklist!',
		contentEmpty: 'İçerik boş olmamalıdır!',
		notFind: 'Belirtilen kişi bulunamıyor.'
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


		butConfirm: 'Onayla',
		butCancel: 'İptal',

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

		butConfirm: 'Onayla',
		butCancel: 'İptal',

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

		butConfirm: 'Onayla',
		butCancel: 'İptal',

		tips: {
			SRemoteName: 'It enables or disables the phone to perform a remote phone book search for an incoming or outgoing call.',
			SRemoteNameFlashTime: 'It configures the interval (in seconds) for the phone to update the data of the remote phone book from the remote phone book server. The value 0 means the phone will not regularly update the data of the remote phone book from the remote phone book server.'
		}
	}
},

phoneCallInfoHtml = {
	mytabMenu: ['Aranan Listesi', 'Yanıtsız Listesi', 'Alınan Listesi', 'Yönlendirilen Listesi'],
	tableHeader: ['Dizin', 'Tarih-saat', 'Duration', 'Yerel Kimlik', 'Ad', 'Telefon Numarası']
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
