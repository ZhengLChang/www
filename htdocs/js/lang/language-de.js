//公共的验证信息
var commonValidMsg = {
	missingMsg: 'Dieses Feld ist erforderlich',
	invalidIpMsg: 'ungültige IP'
},
uploadCommon = {
	uploadFilePrompt: 'Dies ist die hochzuladende Datei:',
	uploadMsg: 'Nicht ausschalten!',
	uploadText: 'Importiere. Bitte warten ...',
	uploadSuccess: 'Importieren erfolgreich!',
	uploadFail: 'Importieren fehlgeschlagen. Bitte erneut versuchen!'
},
alertMsg = {
	titlePrompt: 'Aufforderung',
	titleConfirm: 'Bestätigen',
	noChange: 'Keine Änderung!',
	invalidVal: 'Ungültiger Wert!',
	saveSuccess: 'Speichervorgang erfolgreich abgeschlossen!',
	enabledOptionsEmpty: 'Aktivierte Codecs dürfen nicht leer sein!',
	codecsConflict: 'iLBC_13_3 und iLBC_15_2 können nicht gleichzeitig angewendet werden!',
	emptyContent: 'Kein Inhalt!',
	invalidDTMF: 'Ungültiges DTMF!',
	webServicesDisable: 'Web-Dienste wurden deaktiviert!',
	features: 'Aus-Code darf nicht leer sein, wenn der Ein-Code eingestellt ist!',
	invalidAccountList: 'Ungültige Kontenliste!',
	dialPlanMsg1: 'Wählen Sie mindestens einen Datensatz.',
	voiceError1: 'Max. Verzögerung muss größer als min. Verzögerung sein',
	voiceError2: 'Normale Verzögerung muss zwischen max. und min. Verzögerung liegen',
	fileIsEmpty: 'Die Datei ist leer!',
	openvpnFile: 'Please choose a OpenVPN file(*.tar/*.TAR)!',
	upgradeFileFormateErr: 'Please choose a upgrade file(*.fw)!',
	wallpaperFormatError: 'Filename contain Latin characters only and  PNG/JPG/BMP format images',
	systemFileCannotDelete: 'it only support delete the custom photos!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'Nicht ausschalten!',
			rebootText: 'Neustart. Bitte warten ...'
		},
		showProgress: {
			progressTitle: 'Aufforderung'
		}
	},
	ErrorInfo: {
		networkError: 'Netzwerkfehler, bitte überprüfen!',
		webServerError: 'Webserverfehler. Bitte erneut versuchen!',
		unknownError: 'Unbekannter Fehler!',
		dataNoChanged: 'No Change!',
		Error_409: 'The file with this name already exists.',
		Error_413: 'The file is too large.',

		phoneBusyError: 'Talking, Please wait...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: 'Abmeldung fehlgeschlagen. Bitte erneut versuchen!'
	},
	pluginInit: {
		ok: 'Ok',
		cancel: 'Abbrechen'
	}
},
status401Html = {
	errorInfo1 : 'Für Zugriff auf Web-Schnittstelle nicht autorisiert',
	errorInfo2 : 'Bitte Supportteam kontaktieren oder neuer Versuch in 3 Min.',
	errorInfo3: 'HTTP 401 Nicht aut.'
},
//index.html
indexHtml={
	top:{
		logout: 'Abmelden',
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
		basic: 'Grundl.',
		account: 'Kto.',
		network: 'Netzw.',
		dSSKey: 'Dir.Ruftaste',
		phone: 'Tel.',
		contacts: 'Kont.',
		security: 'Sicherheit'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'Website',
		products: 'Produkte',
		support: 'Unterstützung',
		download: 'Herunterladen',
		contactus: 'Kontakt erwünscht',
		atcomRights: '©2018 ATCOM Alle Rechte vorbehalten.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'Status',
		sWizard: 'Assistent',
		//Account
		aBasic: 'Grundl.',
		aCodecs: 'Codecs',
		aAdvanced: 'Erweitert',
		//NetWork
		nBasic: 'Grundl.',
		nWifi: 'WLAN',
		nAdvanced: 'Erweitert',
		//DSS key
		dMemory: 'Speichertaste',
		dLink: 'Leitungstaste',
		dProgrammable: 'Progr. Taste',
		dExt: 'EXT-Taste',
		dAetAdv: 'EXT Settings',

		//Phone
		pDNDAndForward: 'Forward&DND',
		pPrefetence: 'Einstellung',
		pFeatures: 'Funktionen',
		pUpgrade: 'Aktualisieren',
		pAuto: 'Autom. Bereitst.',
		pConfig: 'Konfiguration',
		pRemoteControl: 'Remote Control',
		pActionUrl: 'Action URL',
		pDialPlan: 'Wählplan',
		pVoice: 'Sprache',
		pRing: 'Alert Info',
		pTones: 'Töne',
		pSms: 'SMS',
		pAction: 'Action-URL',
		pSoftkey: 'Fkt.tasten-Anordn.',
		pPhoneLock: 'Phone Lock',
		pSecurity: 'Sicherheit',
		pPhoneTr069: 'TR069',
		pDebug: 'Debug',
		//Contacts
		cContacts: 'Kont.',
		cXMLPhonebook: 'Remote-Telefonbuch',
		cPhoneCall: 'Anrufinformation',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'Anrufprotokoll',
		//Security
		sPassword: 'Passwort',
		sStrusted: 'Vertrauenswürdige Zertifikate',
		sServer: 'Server-Zertifikate'
	}
},
statusHtml = {
	version: {
		verTitle: 'Version',
		fwVer: 'Firmwareversion',
		hwVer: 'Hardwareversion',
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
		internetPort: 'Internet-Porttyp',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Statische IP',
		ip: 'IP-Adresse',
		subnetMask: 'Subnetzmaske',
		gatewag: 'Gateway',
		primaryDNS: 'Primärer DNS',
		secondaryDNS: 'Sekundärer DNS',
		wiredMac: 'Wired MAC Address',
		WIFIMac: 'WiFi MAC Address',
		vpnStatus: 'VPN-Status',
		vpnStatusOpt0: 'Verbindung wird hergestellt',
		vpnStatusOpt1: 'Deaktivieren',
		vpnStatusOpt2: 'Verbindung_fehlgeschlagen',
		vpnStatusOpt3: 'Verbunden',
		vpnIp: 'VPN-IP'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Internet-Porttyp',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Statische IP',
		ip: 'IP Address',
		networkPrefix: 'Network Prefix',
		gatewag: 'Gateway',
		primaryDNS: 'Primärer DNS',
		secondaryDNS: 'Sekundärer DNS'
	},
	tips: {
		netConfigTip: 'Displays the IP address mode of the device.',
		verTip: 'Zeigt die aktuelle Firmware- und Hardwareversion des Geräts an.',
		netTip: 'Zeigt Details der Netzwerkkonfiguration des Telefons an.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Network',
		InternetPort: 'Internet-Port',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: 'Statische IP-Adresse',

		staticIpSettings: 'Stat.-IP-Einst.',
		ip: 'IP-Adresse',
		subnetMask: 'Subnetzmaske',
		defaultGateway: 'Standard-Gateway',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: 'Primärer DNS',
		secondaryDNS: 'Sekundärer DNS',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6 Prefix',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'SIP-Einst.',
		accountActive: 'Konto aktiv',
		disable: 'Deaktivieren',
		enable: 'Aktivieren',
		labelName: 'Beschriftung',
		displayName: 'Anzeigename',
		registerName: 'Registrierungsname',
		userName: 'Benutzername',
		password: 'Passwort',
		
		sipServer: 'SIP-Server',
		sipServerPort: 'Anschluss',
		
		back: 'Zur.',
		next: 'Vor',
		
		tips: {
			dhcp: 'Stellt automatisch eine Anfrage an den DHCP-Server für IP-Adresse, Subnetzmaske, Gateway, DNS usw.',
			staticIp: 'Konfiguriert manuell die IP-Adresse, Subnetzmaske, Gateway, DNS usw.',
			labelName: 'Der Name, der auf dem LCD des aktuellen Geräts angezeigt wird.',
			displayName: 'Der lokale Telefonname, der bei einem Anruf auf dem anderen Telefon angezeigt wird.',
			registerName: 'Registrierungsname, der vom ISP zur Verfügung gestellt wurde.',
			userName: 'Benutzername, der vom ISP zur Verfügung gestellt wurde.',
			password: 'Kontopasswort, das vom ISP zur Verfügung gestellt wurde.',
			sipServer: 'Sip-Serveradresse, die vom ISP zur Verfügung gestellt wurde.'
		}
	},
	common: {
		finish: 'Ende',
		next: 'Vor'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'Kto.',
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		
		registerStatus: 'Registrierungsstatus',
		
		accountActive: 'Konto aktiv',
		disable: 'Deaktivieren',
		enable: 'Aktivieren',
		labelName: 'Beschriftung',
		displayName: 'Anzeigename',
		registerName: 'Registrierungsname',
		userName: 'Benutzername',
		password: 'Passwort',
		
		sipServer: 'SIP-Server',
		sipServerPort: 'Anschluss',
		redundancy_proxy: 'Redundanter SIP-Server',

		enableOutboundProxyServer: 'Ausgehenden Proxy-Server aktivieren',
		outboundProxyServer: 'Ausgehender Proxy-Server',
		outboundProxyServerPort: 'Anschluss',
		make_call_without_register: 'Enable Peer to Peer',
		
		verifyServer: 'Verify server',
		transport: 'Transport',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'NAT-Traversal',
		TLSVersion: 'TLS Version',
		natTraversalOpt1: 'STUN',
		stunServer: 'STUN-Server',
		port: 'Anschluss',
		
		voiceMail: 'Sprachnachricht',
		anonymousCall: 'Anonymer Anruf',
		off: 'Aus',
		on: 'Ein',
		onCode: 'Ein-Code',
		offCode: 'Aus-Code',
		anonymousCallRejection: 'Abweisen anonymer Anrufe',
		ringTones: 'Klingeltöne',
		ringTonesOpt0: 'Allgemein',
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
		
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		
		tips: {
			labelName: 'Der Name, der auf dem LCD des aktuellen Geräts angezeigt wird.',
			displayName: 'Der lokale Telefonname, der bei einem Anruf auf dem anderen Telefon angezeigt wird.',
			registerName: 'Registrierungsname, der vom ISP zur Verfügung gestellt wurde.',
			userName: 'Benutzername, der vom ISP zur Verfügung gestellt wurde.',
			password: 'Kontopasswort, das vom ISP zur Verfügung gestellt wurde.',
			sipServer: 'Sip-Serveradresse, die vom ISP zur Verfügung gestellt wurde.',
			enableOutboundProxyServer: 'Wird verwendet, um Signale zu verarbeiten und hilft, Multimedia-Datenstreams durch die Firewall zu leiten, falls eine Firewall oder NAT vorhanden ist.',
			redundancy_proxy: 'An Backup SIP server failover',
			outboundProxyServer: 'Ausgehender Proxy-Server.',
			verifyServer: 'verifyServer',
			transport: 'Es gibt drei Optionen: UDP, TCP und TLS. Das registrierte Paketprotokoll ist UDP, TCP oder TLS. TLS (Transportschicht-Sicherheit) ist verschlüsselt.',
			natTraversal: 'STUN-Server aktivieren/deaktivieren.',
			stunServer: 'Der STUN-Server lässt alle Terminal-NAT-Clients (wie zum Beispiel einen PC hinter der Firewall) zu, um VOIP-Anrufe mit VOIP-Dienstanbietern außerhalb des LAN zu erreichen.',
			voiceMail: 'Stellt eine Sprachnachrichtenanzahl des aktuellen Kontos ein.',
			anonymousCall: 'Anonymen Anruf aktivieren/deaktivieren.',
			onCode: 'Stellt den Funktionscode zum Einschalten bei einem anonymen Anruf ein. Das Telefon aktiviert den anonymen Anruf, indem es den Funktionscode zum Server sendet.',
			offCode: 'Stellt den Funktionscode zum Ausschalten bei einem anonymen Anruf ein. Das Telefon deaktiviert den anonymen Anruf, indem es den Funktionscode zum Server sendet.',
			anonymousCallRejection: 'Abweisen anonymer Anrufe aktivieren/deaktivieren.',
			onCodeRejection: 'Stellt den Funktionscode zum Einschalten des Abweisens anonymer Anrufe ein. Das Telefon aktiviert das Abweisen anonymer Anrufe, indem es den Funktionscode zum Server sendet.',
			offCodeRejection: 'Stellt den Funktionscode zum Ausschalten des Abweisens anonymer Anrufe ein. Das Telefon deaktiviert das Abweisen anonymer Anrufe, indem es den Funktionscode zum Server sendet.',
			ringTones: 'Klingeltontyp für das aktuelle Konto einstellen.',
			make_call_without_register: 'Make and receive call without register'
		}
	},
	showText: {
		unRegistered: 'Registrieren fehlgeschlagen',
		registered: 'Registriert'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'Kto.',
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		
		audioCodecs: 'Audiocodecs',
		disableCodecs: 'Deaktivierte Codecs',
		enableCodecs: 'Aktivierte Codecs',
		
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'Kto.',
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		
		udpKeepAliveMsg: 'UDP Keep-Alive-Nachricht',
		disable: 'Deaktivieren',
		enable: 'Aktivieren',
		udpKeepAliveInterval: 'UDP Keep-Alive-Intervall (Sek.)',
		
		loginExpires: 'Anmeldung abgelaufen (Sek.)',
		localSipPort: 'Lokaler SIP-Port',
		subscribePeriod: 'Anmeldedauer (Sek.)',
		
		dtmfType: 'DTMF-Typ',
		dtmfTypeOpt0: 'Innenband',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'DTMF-Daten (Sek.)',
		reliableRetransmission: '100 zuverlässige Übertragung',
		
		subscribeForMwi: 'Melden Sie sich für MWI an',
		mwiSubscribePeriod: 'MWI-Anmeldungsdauer (Sek.)',
		
		useSessionTimer: 'Sitzungstimer verwenden',
		sessionTimer: 'Sitzungstimer (Sek.)',
		refresher: 'Auffrischer',
		
		useUserPhone: 'Verwende Benutzer=Telefon',
		voiceEncryption: 'Sprachverschlüsselung (SRTP)',
		off: 'Aus',
		on: 'Ein',
		ptime: 'PTime (ms)',
		
		blfListUri: 'BLF-Liste URI',
		derectedCallPickupCode: 'Gezielter Anrufannahmecode',
		groupCallPickupCode: 'Gruppen-Anrufannahmecode',
		
		sipRegRetryTimer: 'SIP-Registrierung Wiederholungstimer',
		earlyMedia: 'Early Media',
		sipServerType: 'SIP-Servertyp',
		sipServerTypeOpt0: 'Allgemein',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'Broadsoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Intercom Code',
		conferenceType: 'Conference Type',
		localConference: 'Local Conference',
		networkConference: 'Network Conference',
		conferenceCode: 'Conference Code',
		
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		
		tips: {
			udpKeepAliveMsg: 'Das Telefon schickt regelmäßig ein UDP Paket, um den Port aktiv zu halten und damit der Server den Port nicht schließt.',
			loginExpires: 'Registrierungs-Ablaufzeit, das Gerät muss innerhalb der Gültigkeit jeder Registrierung erneut registriert werden oder der Server sieht das Gerät als Offline an.',
			localSipPort: 'Die lokale Geräteportnummer, die zum Senden und Empfangen von SIP-Paketen verwendet wird.',
			subscribePeriod: 'Anmeldungs-Ablaufzeit.',
			dtmfType: 'Der Modus des Sendens von DTMF, indem die Ziffertasten während eines Rufs gedrückt werden, einschließlich INBAND, OUTOFBAND(RFC2833) und SIP-INFO.',
			reliableRetransmission: 'PRACK-Übertragung aktivieren/deaktivieren.',
			subscribeForMwi: 'Das Gerät schickt ein Anmeldungspaket zum Server, um „Nachricht liegt vor“ anzumelden und das Gerät schickt nach der Registrierung ein Anmeldungspaket zum Server.',
			useSessionTimer: 'Sitzungsfunktion aktualisieren aktivieren/deaktivieren. Das Gerät schickt ein Einladungspaket, um die Sitzung während eines Anrufs zu aktualisieren, falls aktiviert.',
			sessionTimer: 'Das Sitzungs-Aktualisierungsintervall.',
			refresher: 'Auf welcher Seite erfolgt das Aktualisieren der Sitzung. Uac: Aktualisieren der Sitzung auf der Kundenseite. Uas: Aktualisieren der Sitzung auf der Serverseite.',
			useUserPhone: 'Wenn aktiviert, gibt es ein Kennzeichen „Benutzer=Telefon“ im Anmeldungspaket der SIP-Nachricht.',
			voiceEncryption: 'Sprachverschlüsselung (SRTP) aktivieren/deaktivieren.',
			ptime: 'Verhandelt das Zeitintervall zwischen zwei RTP-Paketen des aktuell verwendeten Codecs.',
			blfListUri: 'Wird zum Abonnieren von BLF bei Broadsoft verwendet.',
			sipRegRetryTimer: 'Die Wiederholungsdauer zum Registrieren nach fehlgeschlagener Registrierung.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Internet-Port',
		IPv4Config: 'IPv4 Config',
		IPv6Config: 'IPv6 Config',
		dhcp: 'DHCP',
		staticIp: 'Statische IP-Adresse',
		ip: 'IP-Adresse',
		subnetMask: 'Subnetzmaske',
		defaultGateway: 'Standard-Gateway',
		IPv6Prefix: 'IPv6 Prefix(0~128)',

        StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		primaryDNS: 'Primärer DNS',
		secondaryDNS: 'Sekundärer DNS',
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		
		tips: {
			dhcp: 'Stellt automatisch eine Anfrage an den DHCP-Server für IP-Adresse, Subnetzmaske, Gateway, DNS usw.',
			staticIp: 'Konfiguriert manuell die IP-Adresse, Subnetzmaske, Gateway, DNS usw.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'WLAN-Einstellung',
		wifi_on_warning: '(Ist WLAN aktiviert, dann trennen Sie bitte das Netzwerkkabel ab!)',
		wifi_enable: 'WLAN',
		on: 'Ein',
		off: 'Aus',
		search_wifi: 'Suche WLAN',
		wifi_ssid: 'Aktuelle SSID',
		wifi_key: 'Sicherheitsschlüssel',
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
	},
	showText: {
		close_wifi: 'WLAN wird geschlossen...',
		open_wifi: 'WLAN wird geöffnet...',
		search_wifi: 'Suche...',
		wifi_table_header: ['Index', 'SSID', 'Signal', 'Auswahl'],
		wifi_list_title: 'WLAN-Aufstellung',
		submitting: 'Sende...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Aktiv',
		disable: 'Deaktivieren',
		enable: 'Aktivieren',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Priorität',
		vlanPc: 'PC',
		vlanPcActive: 'Aktiv',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Priorität',
		
		portLink: 'Port-Link',
		wanPortLink: 'WAN Port-Link',
		wanPortLinkOption0: 'Auto-Negotiate',
		wanPortLinkOption1: 'Vollduplex 10 Mbit/s',
		wanPortLinkOption2: 'Vollduplex 100 Mbit/s',
		wanPortLinkOption3: 'Halbduplex 10 Mbit/s',
		wanPortLinkOption4: 'Halbduplex 100 Mbit/s',
		wanPortLinkOption5: 'Half duplex 1000Mbps',
		wanPortLinkOption6: 'Full duplex 1000Mbps',
			
		pcPortLink: 'PC Port-Link',
		pcPortLinkOption0: 'Auto-Negotiate',
		pcPortLinkOption1: 'Vollduplex 10 Mbit/s',
		pcPortLinkOption2: 'Vollduplex 100 Mbit/s',
		pcPortLinkOption3: 'Halbduplex 10 Mbit/s',
		pcPortLinkOption4: 'Halbduplex 100 Mbit/s',
		
		slaccEnable: 'ICMPv6 Status',

		vpn: 'VPN',
		importFile: 'Upload VPN Config',
		importStr: 'Import',
		
		voiceQos: 'Sprach-Dienstgüte',
		sipQos: 'SIP-Dienstgüte',
		
		localRtpPort: 'Lokaler RTP-Port',
		maxRTPPort: 'Maximaler RTP-Port',
		minRTPPort: 'Minimaler RTP-Port',
		
		webServer: 'Webserver',
		httpPort: 'Http-Port',
		httpsPort: 'Https-Port',
		webServerType: 'Typ',
		webServerTypeOption0: 'Deaktiviert',
		webServerTypeOption1: 'Nur Http',
		webServerTypeOption2: 'Nur Https',
		webServerTypeOption3: 'Http&Https',

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

		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		
		tips: {
			lldp: 'LLDP transmits information as packets called LLDP Data Units (LLDPDUs). An LLDPDU consists of a set of Type-Length-Value (TLV) elements, each of which contains a particular type of information about the device or the port transmitting it.',
			cdp: 'CDP (Cisco Discovery Protocol) allows IP phones to receive and/or transmit device-related information from/to directly connected devices on the network that are also using the protocol, and store the information about other devices.',
			vlan: 'Die VLAN-Konfiguration, die für eine spezielle Konfiguration verwendet wird, Und wenn Sie es ändern und möchten, dass die Änderung sofort gültig ist, müssen Sie es manuell neu starten.',
			portLink: 'Connection rate for WAN and PC ports.',
			vpn: 'Die VPN-Konfiguration, die für eine spezielle Konfiguration verwendet wird.',
			voiceQos: 'Bei geringer Netzwerkkapazität liefert die Qualität des Dienstes den Benutzern einen passablen, bevorzugten Wert.',
			localRtpPort: 'Definiert den Port für die Sprachübertragung.',
			x_802_1x: 'It configures the 802.1x authentication method.',
			webServer: 'Die Definition des Webzugriffstyps und Ports.',
			slaccEnable: 'Enable/disable the IP phone to obtain the IPv6 network settings via SLAAC (Stateless Address Autoconfiguration) method.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Taste',
		type: 'Typ',
		value: 'Wert',
		label: 'Beschriftung',
		account: 'Kto.',
		ext: 'Erweiterung',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'Dir.Ruftaste',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Leitung',
		keyTypeOpt2: 'Kurzwahl',
		keyTypeOpt4: 'Nachricht',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF-Liste',
		keyTypeOpt9: 'Direkte Übernahme',
		keyTypeOpt10: 'Gruppenübernahme',
		keyTypeOpt11: 'Anruf parken',
		keyTypeOpt12: 'Gegensprechen',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferenz',
		keyTypeOpt15: 'Weiterleiten',
		keyTypeOpt16: 'Übertragen',
		keyTypeOpt17: 'Halten',
		keyTypeOpt18: 'DND (Nicht stören)',
		keyTypeOpt19: 'Wahlwiederholung',
		keyTypeOpt20: 'Verzeichnis',
		keyTypeOpt21: 'Rückruf',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Nicht zutreffend',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		accountNumberOpt8: 'Automatisch',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Taste',
		type: 'Typ',
		value: 'Wert',
		label: 'Beschriftung',
		account: 'Kto.',
		ext: 'Erweiterung',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Line Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Leitung',
		keyTypeOpt2: 'Kurzwahl',
		keyTypeOpt4: 'Nachricht',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF-Liste',
		keyTypeOpt9: 'Direkte Übernahme',
		keyTypeOpt10: 'Gruppenübernahme',
		keyTypeOpt11: 'Anruf parken',
		keyTypeOpt12: 'Gegensprechen',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferenz',
		keyTypeOpt15: 'Weiterleiten',
		keyTypeOpt16: 'Übertragen',
		keyTypeOpt17: 'Halten',
		keyTypeOpt18: 'DND (Nicht stören)',
		keyTypeOpt19: 'Wahlwiederholung',
		keyTypeOpt20: 'Verzeichnis',
		keyTypeOpt21: 'Rückruf',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Nicht zutreffend',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		accountNumberOpt8: 'Automatisch',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Taste',
		type: 'Typ',
		value: 'Wert',
		label: 'Beschriftung',
		account: 'Kto.',

		programKeys: ['Stummschalten', 'Halten', 'Wahlwiederholung', 
		              'Aufwärts', 'Abwärts', 'Links', 'Rechts', 'Abbrechen', 'Ok', 
		              'Funktionstaste1', 'Funktionstaste2', 'Funktionstaste3', 'Funktionstaste4'],

		programKeys_A1x: ['Stummschalten', 'Halten', 'Wahlwiederholung', 
		              'Aufwärts', 'Abwärts', 'Links', 'Rechts', 'Abbrechen', 'Ok', 
		              'Funktionstaste1', 'Funktionstaste2', 'Funktionstaste3'],

		programKeys_A2x: ['Stummschalten', 'Halten', 'Wahlwiederholung', 
		              'Aufwärts', 'Abwärts', 'Links', 'Rechts', 'Abbrechen', 'Ok', 
		              'Funktionstaste1', 'Funktionstaste2', 'Funktionstaste3'],

		programKeys_CT11: ['Stummschalten', 
		              'Aufwärts', 'Abwärts',  
		              'Funktionstaste1', 'Funktionstaste2', 'Funktionstaste3', 'Funktionstaste4'],

		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Leitung',
		keyTypeOpt2: 'Kurzwahl',

		keyTypeOpt4: 'Nachricht',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF-Liste',
		keyTypeOpt9: 'Direkte Übernahme',
		keyTypeOpt10: 'Gruppenübernahme',
		keyTypeOpt11: 'Anruf parken',
		keyTypeOpt12: 'Gegensprechen',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferenz',
		keyTypeOpt15: 'Weiterleiten',
		keyTypeOpt16: 'Übertragen',
		keyTypeOpt17: 'Halten',
		keyTypeOpt18: 'DND (Nicht stören)',
		keyTypeOpt19: 'Wahlwiederholung',
		keyTypeOpt20: 'Verzeichnis',
		keyTypeOpt21: 'Rückruf',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Nicht zutreffend',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'Status',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		accountNumberOpt8: 'Automatisch',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen'
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
		key: 'Taste',
		type: 'Typ',
		value: 'Wert',
		label: 'Beschriftung',
		account: 'Kto.',
		ext: 'Erweiterung',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'Ext-Taste',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Leitung',
		keyTypeOpt2: 'Kurzwahl',
		keyTypeOpt4: 'Nachricht',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF-Liste',
		keyTypeOpt9: 'Direkte Übernahme',
		keyTypeOpt10: 'Gruppenübernahme',
		keyTypeOpt11: 'Anruf parken',
		keyTypeOpt12: 'Gegensprechen',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Konferenz',
		keyTypeOpt15: 'Weiterleiten',
		keyTypeOpt16: 'Übertragen',
		keyTypeOpt17: 'Halten',
		keyTypeOpt18: 'DND (Nicht stören)',
		keyTypeOpt19: 'Wahlwiederholung',
		keyTypeOpt20: 'Verzeichnis',
		keyTypeOpt21: 'Rückruf',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'Nicht zutreffend',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Konto 1',
		accountNumberOpt2: 'Konto 2',
		accountNumberOpt3: 'Konto 3',
		accountNumberOpt4: 'Konto 4',
		accountNumberOpt5: 'Konto 5',
		accountNumberOpt6: 'Konto 6',
		accountNumberOpt8: 'Automatisch',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'AET device ID which display in the status of linkable divice'
		}
},
extKeyBackHtml = {
	noLink: 'Kein Erweiterungsmodul angeschlossen! Bitte schließen Sie eine oder mehrere Einheiten an und aktualisieren Sie diese Seite.'	
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
		dhcpTime: 'DHCP-Zeit',
		disable: 'Deaktivieren',
		enable: 'Aktivieren',
		auto: 'Automatisch',
		timeZone: 'Zeitzone',
		primaryNtp: 'Primärer NTP-Server',
		secondaryNtp: 'Sekundärer NTP-Server',
		updateInterval: 'Aktualisierungsintervall (Sek.)',
		daylight: 'Tageslicht',
		fixedType: 'Fester Typ',
		fixedTypeOpt0: 'Nach Datum',
		fixedTypeOpt1: 'Nach Woche',
		startMonth: 'Startmonat',
		January: 'Januar',
		February: 'Februar',
		March: 'März',
		April: 'April',
		May: 'Mai',
		June: 'Juni',
		July: 'Juli',
		August: 'August',
		September: 'September',
		October: 'Oktober',
		November: 'November',
		December: 'Dezember',
		startDate: 'Startdatum',
		startHourDay: 'Startstunde des Tages',
		startDayWeek: 'Starttag der Woche',
		Sunday: 'Sonntag',
		Monday: 'Montag',
		Tuesday: 'Dienstag',
		Wednesday: 'Mittwoch',
		Thursday: 'Donnerstag',
		Friday: 'Freitag',
		Saturday: 'Samstag',
		startWeekMonth: 'Startwoche des Monats',
		firstInMonth: 'Erste im Monat',
		secondInMonth: 'Zweite im Monat',
		thirdInMonth: 'Dritte im Monat',
		fourthInMonth: 'Vierte im Monat',
		lastInMonth: 'Letzte im Monat',
		stopMonth: 'Endmonat',
		stopDate: 'Enddatum',
		stopHourDay: 'Endstunde des Tages',
		stopDayWeek: 'Endtag der Woche',
		stopWeekMonth: 'Endwoche des Monats',
		offset: 'Offset (Minuten)',
		manualTime: 'Manuelle Zeit',
		dateYmd: 'Datum',
		autoDate: 'Erzeugtes Datum',
		timeHms: 'Zeit',
		autoTime: 'Erzeugte Zeit',
		timeFormat: 'Zeitformat',
		timeFormatOpt0: '12-Stunden',
		timeFormatOpt1: '24-Stunden',
		dateFormat: 'Datumsformat',
		backlightTime: 'Hintergrundbeleuchtungsdauer',
		backlightTimeOpt0: 'Immer ein',
		backlightTimeOpt1: '1 Min.',
		backlightTimeOpt2: '2 Min.',
		backlightTimeOpt3: '5 Min.',
		backlightTimeOpt4: '10 Min.',
		backlightTimeOpt5: '30 Min.',
		screensaver_timeout: 'Screensaver Time',
		screensaver_timeoutOpt0: 'off',
		screensaver_timeoutOpt1: '1 min',
		screensaver_timeoutOpt2: '2 min',
		screensaver_timeoutOpt3: '5 min',
		screensaver_timeoutOpt4: '10 min',
		screensaver_timeoutOpt5: '30 min',
		backlightLevel: 'Hintergrundbeleuchtungsstärke',
		slaveBacklightLevel: 'Slave-Hintergrundbeleuchtungsstärke',
		expandBacklightLevel: 'Hintergrundbeleuchtungsstärke erweitern',
		slaveLcdContract: 'Slave LCD-Kontrast',
		ringTones: 'Klingeltöne',
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
		delWallpaper: 'Löschen',
		uploadWallpaper: 'Upload',
		cancelWallpaper: 'Abbrechen',
		screensaver: 'Screensaver',
		
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		
		tips: {
			dhcpTime: 'Enables or disables the IP phone to update time with the offset time obtained from the DHCP server.',
			replaceRingTone: 'Recommended file format: 16-bit, wave; the file size should be less than 800 kB for the colour display phone, and less than 300 kB for the monochrome display phone.',
			timeZone: 'Wählen Sie hier Ihre Zeitzone aus.',
			updateInterval: 'Stellen Sie das Zeitintervall ein, um die lokale Zeit des Geräts mit dem Server zu überprüfen.',
			daylight: 'Sommerzeiteinstellungen.',
			manualTime: 'Manuelle Zeiteinstellung aktivieren/deaktivieren.',
			timeFormat: 'Stellt die Zeit auf 12- oder 24-Stunden ein.',
			dateFormat: 'Legt das Datumanzeigeformat fest.',
			backlightTime: 'Stellt die Hintergrundbeleuchtungsdauer ein.',
			screensaver_timeout: 'Set Screensaver time.',
			backlightLevel: 'Anpassung der Hintergrundhelligkeit des Telefons.',
			ringTones: 'Einstellung des Telefonklingeltyps.',
			pictureSize: 'Best resolution is 461x278 pixels and the size should be less than 500KBytes.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Deaktivieren',
		enable: 'Aktivieren',
		off: 'Aus',
		on: 'Ein',
		forward: 'Weiterleiten',
		always: 'Immer',
		busy: 'Besetzt',
		noAnswer: 'Keine Antwort',
		afterRingTime: 'Nach Klingeldauer (Sek.)',
		
		target: 'Ziel',
		onCode: 'Ein-Code',
		offCode: 'Aus-Code',
		
		dnd: 'Nicht stören',
		dndOnCode: 'DND Ein-Code',
		dndOffCode: 'DND Aus-Code',
		authNum: 'Autorisierte Nummern (durch Komma getrennt)',
		
		generalInfo: 'Allgemeine Informationen',
		liveDialpad: 'Live-Wähltastatur',
		interDigitTime: 'Zwischen-Ziffernzeit (Sek.)',
		autoAnswer: 'Automatische Anrufbeantwortung',
		autoAnswerDelay: 'Auto Answer Delay (sec)',
		ignoreMissedCall: 'Ignore Missed Call',
		callWaiting: 'Anklopfen',
		hotline: 'Hotline',
		hotlineTimeout: 'Hotline-Timeout (0~180 Sek.)',
		keyAsSend: 'Taste zum Senden',
		dialNowTimeout: 'Jetzt wählen-Timeout (Sek.)',
		busyToneTimer: 'Besetztton-Timer (Sek.)',
		returnCodeWhenRefuse: 'Rückgabecode beim Abweisen',
		returnCodeWhenDnd: 'Rückgabecode bei DND',
		r404: '404 (Nicht gefunden)',
		r480: '480 (Derzeit nicht verfügbar)',
		r486: '486 (Hier besetzt)',
		rfc2543Hold: 'RFC 2543 Halten',
		useOutboundProxyInDialog: 'Ausgehenden Proxy im Dialog verwenden',
		loginTimeout: 'Anmeldungs-Timeout(1~1000 minutes)',
		hidedtmf: 'Hide DTMF',
		multicastCodec: 'Multicast Codec',
		watchdog: 'Watch Dog',
		
		audioSettings: 'Audioeinstellungen',
		callWaitingTone: 'Anklopfton',
		headset: 'Headset-Lautstärke',
		handset: 'Mobilteil-Lautstärke',
		handfree: 'Freisprech-Lautstärke',
		ringer: 'Klingelton-Lautstärke',
		headsetSend: 'Headset-Sendelautstärke',
		handsetSend: 'Mobilteil-Sendelautstärke',
		handfreeSend: 'Freisprech-Sendelautstärke',
		ringerDeviceForHeadset: 'Klingelvorrichtung für Headset',
		ringerDeviceForHeadsetOpt0: 'Lautsprecher verwenden',
		ringerDeviceForHeadsetOpt1: 'Headset verwenden',
		
		transferSettings: 'Übertragungseinstellungen',
		blindTransferOnHook: 'Schnellverbinden bei aufgelegtem Hörer',
		attendedTransferOnHook: 'Betreute Übertragung bei aufgelegtem Hörer',
		transferOnConHangUp: 'Übertragung bei Konferenzende',
		transferModeViaDsskey: 'Übertragungsmodus über DSS-Taste',
		transferModeViaDsskeyOpt0: 'Neuer Anruf',
		transferModeViaDsskeyOpt1: 'Betreute Übertragung',
		transferModeViaDsskeyOpt2: 'Schnellverbinden',
		
		callPickup: 'Anrufannahme',
		directCallPickup: 'Direkte Anrufannahme',
		directCallPickupCode: 'Direkter Anrufannahmecode',
		groupCallPickup: 'Gruppen-Anrufannahme',
		groupCallPickupCode: 'Gruppen-Anrufannahmecode',
		
		accept_sip_trust_server_only: 'Accept SIP Trust Server Only',
		recordUserId: 'Record User ID',
		extFunction: 'Ext Function',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: 'Conference hold when add new',

		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		
		tips: {
			forward: 'Anrufweiterleitung einstellen.',
			alwaysTarget: 'Zielnummer für Weiterleitung.',
			alwaysOnCode: 'Der Funktionscode zum Aktivieren der Weiterleitung aller eingehenden Anrufe. Das Telefon sendet den Funktionscode direkt, um alle eingehenden Anrufe zum Weiterleiten zu öffnen.',
			alwaysOffCode: 'Der Funktionscode zum Deaktivieren der Weiterleitung aller eingehenden Anrufe. Das Telefon sendet den Funktionscode direkt, um alle eingehenden Anrufe zum Weiterleiten zu schließen.',
			busyTarget: 'Zielnummer für Weiterleitung.',
			busyOnCode: 'Der Funktionscode zum Aktivieren der Weiterleitung eines besetzten Anrufs. Das Telefon sendet den Funktionscode direkt, um den besetzten Anruf zum Weiterleiten zu öffnen.',
			busyOffCode: 'Der Funktionscode zum Deaktivieren der Weiterleitung eines besetzten Anrufs. Das Telefon sendet den Funktionscode direkt, um den besetzten Anruf zum Weiterleiten zu schließen.',
			afterRingTime: 'Wartezeit zum Weiterleiten von „Keine Antwort“.',
			noAnswerTarget: 'Zielnummer für Weiterleitung.',
			noAnswerOnCode: 'Der Funktionscode zum Aktivieren der Weiterleitung eines Anrufs ohne Antwort. Das Telefon sendet den Funktionscode direkt, um den Anruf ohne Antwort zum Weiterleiten zu öffnen.',
			noAnswerOffCode: 'Der Funktionscode zum Deaktivieren der Weiterleitung eines Anrufs ohne Antwort. Das Telefon sendet den Funktionscode direkt, um den Anruf ohne Antwort zum Weiterleiten zu schließen.',
			
			dndOnCode: 'Der Funktionscode zum Aktivieren von DND. Das Telefon sendet den Funktionscode direkt, um DND zu öffnen.',
			dndOffCode: 'Der Funktionscode zum Deaktivieren von DND. Das Telefon sendet den Funktionscode direkt, um DND zu schließen.',
			
			liveDialpad: '„Automatisches Anwählen“ auf der Anwahl-Benutzeroberfläche aktivieren/deaktivieren.',
			interDigitTime: 'Verzögerungszeit automatisches Anwählen für aktive Wähltastatur.',
			autoAnswer: 'Automatische Antwort aktivieren/deaktivieren.',
			autoAnswerDelay: 'It configures the delay time (in seconds) before the IP phone automatically answers an incoming call.',
			callWaiting: 'Besetzt wartend für den neuen eingehenden Anruf umschalten.',
			hotline: 'Hotlinenummer festlegen.',
			hotlineTimeout: 'Einstellung für Hotline-Verzögerungszeit.',
			keyAsSend: 'Die Tasten als Anruffunktion festlegen.',
			dialNowTimeout: 'Intervall für JetztWählen.',
			busyToneTimer: 'Besetzton, nachdem der Anruf beendet ist.',
			returnCodeWhenRefuse: 'Rückmeldung für Anruf abweisen festlegen.',
			returnCodeWhenDnd: 'Rückmeldung für Nicht stören festlegen.',
			rfc2543Hold: 'Zwei Standardarten für Halten. Benötigt Serverunterstützung.',
			useOutboundProxyInDialog: 'Ausgehenden Proxy bei Konversation aktivieren/deaktivieren.',
			loginTimeout: 'It configures the timeout interval (in minutes) for web access authentication.',
			acceptSipTrustServerOnly: 'Enable/disable the IP phone to only accept the SIP message from the SIP and outbound proxy server.',

			callWaitingTone: 'Ton für Hinweis auf neuen Anruf während eines Gesprächs einstellen (Anklopfen ist eingeschaltet).',
			ringerDeviceForHeadset: 'Anrufklingelton Kanalwahl.',

			blindTransferOnHook: 'Schnellverbinden durch Auflegen aktivieren/deaktivieren.',
			attendedTransferOnHook: 'Betreute und Halb-betreute Weiterleitung bei Auflegen aktivieren/deaktivieren.',
			transferOnConHangUp: 'Weiterleitung zu zwei weiteren Parteien aktivieren/deaktivieren, wenn der Konferenzinitiator aufgelegt hat.'
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
		ver: 'Version',
		fmVer: 'Firmwareversion',
		hdVer: 'Hardwareversion',
		
		resetToFactory: 'Auf die Werkseinstellungen zurückzusetzen',
		reboot: 'Neustart',		
		
		upgradeHeader: 'Firmware aktualisieren',
		selectFw: 'Firmware auswählen',
		upgrade: 'Aktualisieren',
		
		tips: {
			upgradeHeader: 'Wählen Sie die aktuelle Firmwareversion aus, die von Lieferanten zum Aktualisieren freigegeben wurde.'
		}
	},
	commonText: {
		resetConfirm: 'Möchten Sie auf die Werkseinstellungen zurücksetzen?',
		resetSuccess: 'Rücksetzen auf die Werkseinstellungen erfolgreich. Das Gerät wird automatisch neu gestartet.',
		resetFail: 'Rücksetzen auf die Werkseinstellungen fehlgeschlagen. Bitte erneut versuchen!',
		
		rebootConfirm: 'Möchten Sie neu starten?',
		
		uploadFilePrompt: 'Dies ist die hochzuladende Datei:',
		upgradeMsg: 'Nicht ausschalten!',
		upgradeText: 'Aktualisiere, bitte warten …',
		
		upgradeFail: 'Aktualisieren fehlgeschlagen. Bitte erneut versuchen!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'Pcap-Funktion',
		start: 'Start',
		stop: 'Stopp',
		exportStr: 'Export',
		
		debug: 'Debug'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Autom. Bereitst.',
		PnPEnable: 'PnP Active',
		DHCPEnable: 'DHCP Active',
		provisioningServer: 'Server reservieren',
		userName: 'Benutzername',
		password: 'Passwort',
		commonAESKey: 'Common AES Key',
		MACAESKey: 'MAC-Oriented AES Key',
		checkNewConfig: 'Neu. Konfig. pr.',
		off: 'Aus',
		on: 'Ein',
		repeatedly: 'Wiederholt',
		interval: 'Intervall(Min.)',
		weekly: 'Wöchtl',
		time: 'Zeit',
		dayOfWeek: 'Wochentag',
		
		
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		
		tips: {
			PnPEnable: 'The request to the server to obtain a support URL for upgrade',
			DHCPEnable: 'To obtain a support URL for upgrade from DHCP server',
			provisioningServer: 'Serveradresse aktual.',
			password: 'Serverkennwort',
			checkNewConfig: 'Modus zum Prüfen neuer Konfiguration auf Server'
		}
	},
	showText: {
		weekly:  ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Konfiguration importieren/exportieren',
		importFile: 'Datei importieren',
		importStr: 'Importieren',
		exportStr: 'Export',
		exportUserData: 'Benutzerdaten exportieren',
		
		exportImportConfig: 'Import/Export CFG File',

		exportSyslog: 'Systemprotokoll exportieren',
		logLocation: 'Pfad der Protokolldatei',
		logLocationOpt0: 'Lokal',
		logLocationOpt1: 'Server', 
		serverName: 'Servername',
		logLevel: 'Protokollebene',
		logOpt0: 'Schw.',
		logOpt1: 'Fehl.',
		logOpt2: 'Warnung',
		logOpt3: 'Info',
		logOpt4: 'Debug',
		exportStr2: 'Export',
		
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		
		tips: {
			exportImportConfig: 'The imported or exported file must have an auto provision file format. The exported file includes the modified configuration only, so it will be empty if no changes were made.',
			importExportCfg: 'Klicken Sie auf Export, um die aktuelle Telefonkonfiguration zu exportieren. Wählen Sie die zu importierende Konfigurationsdatei und klicken Sie auf Import. Die Konfiguration wird zum aktuellen Telefon importiert und dieses wird neu gestartet.',
			exportSyslog: 'Wenn der Typ auf Lokal eingestellt ist, wird das Syslog direkt exportiert. Wenn der Typ auf Server eingestellt ist, wird das Syslog zum angegebenen Server exportiert.'
		}
	}
},

phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Action URI allow IP List',
		remoteControl:'Remote Control',
		cstaControl: 'CSTA Control',
		disable: 'Deaktivieren',
		enable: 'Aktivieren',
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
		replaceRule: 'Ersetzungsregel',
		dialNow: 'Jetzt wählen',
		areaCode: 'Vorwahlnummer',
		blockOut: 'Aussperren'
	},
	replaceRuleTitle: ['Index', 'Nummer', 'Ersetzen', 'Kto.'],
	dialNowsTitle: ['Index', 'Jetzt wählen-Regel', 'Kto.'],
	replaceRuleForm: {
		num: 'Nummer',
		replace: 'Ersetzen',
		account: 'Kto.',
		add: 'Hinzufügen',
		edit: 'Bearbeiten',
		del : 'Löschen',
		save: 'Speichern'
	},
	dialNowsForm: {
		rule: 'Jetzt wählen-Regel',
		account: 'Kto.',
		add: 'Hinzufügen',
		edit: 'Bearbeiten',
		del : 'Löschen',
		save: 'Speichern'
	},
	form3: {
		code: 'Code',
		minLen: 'Mindestlänge',
		maxLen: 'Maximale Länge',
		areaCodeAccount: 'Kto.',
		
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Aussperranzahl',
		account: 'Kto.',
		
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen'
	}
},
phoneRingHtml = {
	form1: {
		alterInfoTitle: 'Alert Info',
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		tips: {
		}
	       }
},
phoneVoiceHtml = {
	form1: {
		disable: 'Deaktivieren',
		enable: 'Aktivieren',
		
		echoCancellation: 'Echo-Aufhebung',
		echoCanceller: 'Echo-Aufheber',
		echoCancellerOpt0: 'Niedriger Pegel',
		echoCancellerOpt1: 'Mittlerer Pegel',
		echoCancellerOpt2: 'Hoher Pegel',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Jitterbuffer',
		type: 'Typ',
		typeOpt0: 'Fest',
		typeOpt1: 'Adaptiv',
		minDelay: 'Minimale Verzögerung',
		maxDelay: 'Maximale Verzögerung',
		normalDelay: 'Normale Verzögerung',
		
		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',
		
		tips: {
			echoCancellation: 'Echo-Aufhebungseinstellung.',
			echoCanceller: 'Echo-Aufheber aktivieren/deaktivieren.',
			vad: 'Sprachaktivitätserkennung.',
			cng: 'Komfort-Rauschgenerator.',
			jitterBuffer: 'Dies ist ein gemeinsamer Datenbereich. Sprach- und Datenpakete können gesammelt, gespeichert und zum einheitlichen Klangprozessor geschickt werden.'
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

		disable: 'Deaktivieren',
		enable: 'Aktivieren',

		keypad_lock: 'Phone Lock',
		keypadlock_enable: 'Keypad Lock Enable',
		keypadlock_type: 'Keypad Lock Type',
		keypadlock_password: 'Phone Unlock PIN(0~15 Digit)',
		delay_lock: 'Phone Lock Time Out(1~3600s)',
		emergency_call: 'Emergency',
		keypad_lock_menu_key: 'Menu Key',
		keypad_lock_function_key: 'Function Key',
		keypad_lock_all_keys: 'All Keys',
		keypad_lock_answer_call_only:'Tastensperre und autom. Rufannahme',

		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',

		tips: {
			emergency_call: 'Used for calling out emergency number when it is set as keypad lock'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: 'Deaktivieren',
		enable: 'Aktivieren',

		tr069: 'TR069',
		tr069_enable: 'Enable TR069',
		serveraddress: 'ACS URL',
		serverport: 'Port',
		username: 'ACS Username',
		password: 'ACS Password',
		periodic_inform_enable: 'Enable Periodic Inform',
		periodic_inform_interval: 'Periodic Inform Interval (seconds)',
		connection_request_username: 'Verbindungsanfrage Benutzername',
		connection_request_password:'Verbindungsanfrage Passwort',

		butConfirm: 'Bestätigen',
		butCancel: 'Abbrechen',

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
		passwdModify: 'Passwort modifizieren',
		userType: 'Benutzertyp',
		currentPasswd: 'Aktuelles Passwort',
		newPasswd: 'Neues Passwort',
		confirmPasswd: 'Passwort bestätigen',
		
		butConfirm: 'Bestätigen',
		butCancel: 'Cancel',
		
		tips: {
			userType: 'Wählen Sie Ihren Typ. Wenn Sie sich als Benutzer anmelden, können Sie nur Ihr eigenes Passwort ändern. Wenn Sie sich als Administrator anmelden, können Sie sowohl die Benutzer- als auch die Administrator-Passwörter modifizieren.'
		}
	},
	showText: {
		pwdNoMatch: 'Ihre beiden eingegebenen Passwörter stimmen nicht überein!',
		modifyFailed: 'Ändern des Passworts fehlgeschlagen. Bitte erneut versuchen!'
	}
},
contactsHtml = {
	mytabMenu: ['Kont.', 'Schwarze Liste'],
	tableHeader: ['Index', 'Name', 'Büronummer', 'Mobilnummer', 'Weitere Nummer', 'Kto.'],
	buttonDiv: {
		save: 'Speichern',
		del: 'Delete',
		moveToBlack: 'Zur schwarzen Liste verschieben',
		moveToWhite: 'Zu Kontakte verschieben'
	},
	editDiv: {
		contacts: 'Kont.',
		name: 'Name',
		officeNum: 'Büronummer',
		mobileNum: 'Mobilnummer',
		otherNum: 'Weitere Nummer',
		account: 'Kto.',
		accountOpt8: 'Automatisch',
		accountOpt1: 'Konto 1',
		accountOpt2: 'Konto 2',
		accountOpt3: 'Konto 3',
		accountOpt4: 'Konto 4',
		accountOpt5: 'Konto 5',
		accountOpt6: 'Konto 6',
		ring: 'Klingel',
		ringOpts: ['Automatisch', 'Ring1.wav', 'Ring2.wav', 'Ring3.wav', 'Ring4.wav', 
		           'Ring5.wav', 'Ring6.wav', 'Ring7.wav', 'Ring8.wav', 'Ring9.wav', 'Ring10.wav'],
		photo: 'Foto',
		defaultPhoto: 'Default',
		add: 'Hinzufügen',
		deletePhoto: 'Delete',
		uploadPhoto: 'Upload Foto',
		pictureSize: 'Best resolution is 100x135 pixels and the size should be less than 250KBytes.',
		edit: 'Bearbeiten',
		search: 'Suchen',
		
		importAndExport: 'Importieren und Exportieren von lokalen Kontakten',
		importFile: 'Lokale Kontakte importieren',
		importStr: 'Importieren',
		exportStr: 'Export'
	},
	
	shwoText: {
		delConfirm: 'Möchten Sie die ausgewählten Kontakte wirklich löschen?',
		delConfirm1: 'Hinweis: Das Kontaktfoto wird nach dem Speichern nicht wiederhergestellt!', 
		selectEmpty: 'Wählen Sie mindestens einen Datensatz.',
		selectTooMuch: 'Zu viele Datensätze ausgewählt!',
		nameEmpty: 'Der Anzeigename darf nicht leer sein!',
		nameExist: 'Der Anzeigename ist bereits vorhanden!',
		phonebookFull: 'Only less than 400 items in phonebook list!',
		blacklistFull: 'Only less than 50 items in blacklist!',
		contentEmpty: 'Der Inhalt darf nicht leer sein!',
		notFind: 'Kann den angegebenen Kontakt nicht finden.'
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
	mytabMenu: ['Liste der angewählten Nummern', 'Liste der verpasste Anrufe', 'Liste der erhaltenen Anrufe', 'Liste der weitergeleiteten Anrufe'],
	tableHeader: ['Index', 'Datumzeit', 'Duration', 'Lokale Identität', 'Name', 'Telefonnummer']
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
