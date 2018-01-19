//公共的验证信息
var commonValidMsg = {
	missingMsg: 'Questo campo è obbligatorio',
	invalidIpMsg: 'IP non valido'
},
uploadCommon = {
	uploadFilePrompt: 'Caricare il file:',
	uploadMsg: 'Non interrompere l’alimentazione.',
	uploadText: 'Importazione in corso. Rimanere in attesa.',
	uploadSuccess: 'Importazione completata.',
	uploadFail: 'Importazione non riuscita. Riprovare.'
},
alertMsg = {
	titlePrompt: 'Prompt',
	titleConfirm: 'Conferma',
	noChange: 'Nessuna modifica',
	invalidVal: 'Valore non valido.',
	saveSuccess: 'Salvataggio completato.',
	enabledOptionsEmpty: 'I codec abilitati non possono essere vuoti.',
	codecsConflict: 'Impossibile installare iLBC_13_3 e iLBC_15_2 contemporaneamente.',
	emptyContent: 'Contenuto assente.',
	invalidDTMF: 'DTMF non valido.',
	webServicesDisable: 'I servizi web sono stati disabilitati.',
	features: 'Una volta impostato il codice di attivazione, occorre inserire anche il codice di disattivazione.',
	invalidAccountList: 'Elenco degli account non valido.',
	dialPlanMsg1: 'Selezionare almeno una voce.',
	voiceError1: 'Il ritardo massimo deve essere maggiore del ritardo minimo',
	voiceError2: 'Il ritardo normale deve essere compreso tra il ritardo minimo e il ritardo massimo',
	fileIsEmpty: 'Il file è vuoto.',
	upgradeFileFormateErr: 'Please choose a upgrade file(*.fw)!',
	openvpnFile: 'Please choose a OpenVPN file(*.tar/*.TAR)!',
	wallpaperFormatError: 'Filename contain Latin characters only and  PNG/JPG/BMP format images',
	systemFileCannotDelete: 'it only support delete the custom photos!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'Non interrompere l’alimentazione.',
			rebootText: 'Riavvio in corso. Rimanere in attesa.'
		},
		showProgress: {
			progressTitle: 'Prompt'
		}
	},
	ErrorInfo: {
		networkError: 'Errore di rete, controllare!',
		webServerError: 'Errore server web; riprovare.',
		unknownError: 'Errore sconosciuto.',
		dataNoChanged: 'No Change!',
		Error_409: 'The file with this name already exists.',
		Error_413: 'The file is too large.',

		phoneBusyError: 'Talking, Please wait...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: 'Logout fallito; riprovare.'
	},
	pluginInit: {
		ok: 'Ok',
		cancel: 'Cancellare'
	}
},
status401Html = {
	errorInfo1 : 'Nessuna autorizzazione accesso a interfaccia web',
	errorInfo2 : 'Contattare l\'assistenza o riprovare tra 3 minuti',
	errorInfo3: 'HTTP 104 non autoriz.'
},
//index.html
indexHtml={
	top:{
		logout: 'Logout',
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
		basic: 'Di base',
		account: 'Account',
		network: 'Rete',
		dSSKey: 'Tasto DSS',
		phone: 'Phone',
		contacts: 'Contatti',
		security: 'Sicurezza'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'Sito web',
		products: 'Prodotti',
		support: 'Assistenza',
		download: 'Download',
		contactus: 'Contattaci',
		atcomRights: '©Copyright - ATCOM – 2018 Tutti i diritti sono riservati.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'Stato',
		sWizard: 'Wizard',
		//Account
		aBasic: 'Di base',
		aCodecs: 'Codec',
		aAdvanced: 'Avanzato',
		//NetWork
		nBasic: 'Di base',
		nWifi: 'Wi-Fi',
		nAdvanced: 'Avanzato',
		//DSS key
		dMemory: 'Unità di memoria',
		dLink: 'Tasto di linea',
		dProgrammable: 'Tasto programm.',
		dExt: 'Tasto EXT',
		dAetAdv: 'EXT Settings',

		//Phone
		pDNDAndForward: 'Forward&DND',
		pPrefetence: 'Preferenza',
		pFeatures: 'Caratteristiche',
		pUpgrade: 'Aggiornamento',
		pAuto: 'Auto-Provisioning',
		pConfig: 'Configurazione',
		pRemoteControl: 'Remote Control',
		pActionUrl: 'Action URL',
		pDialPlan: 'Dial Plan',
		pVoice: 'Voce',
		pRing: 'Alert Info',
		pTones: 'Toni',
		pSms: 'SMS',
		pAction: 'Action URL',
		pSoftkey: 'Layout t. software',
		pPhoneLock: 'Phone Lock',
		pSecurity: 'Sicurezza',
		pPhoneTr069: 'TR069',
		pDebug: 'Debug',
		//Contacts
		cContacts: 'Contatti',
		cXMLPhonebook: 'Rubrica remota',
		cPhoneCall: 'Info chiamata',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'BroadSoft',
		cCallLog: 'Registro chiamate',
		//Security
		sPassword: 'Password',
		sStrusted: 'Certificati attendibili',
		sServer: 'Certificati server'
	}
},
statusHtml = {
	version: {
		verTitle: 'Versione',
		fwVer: 'Versione firmware',
		hwVer: 'Versione hardware',
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
		internetPort: 'Tipo di porta Internet',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP statico',
		ip: 'Indirizzo IP',
		subnetMask: 'Subnet Mask',
		gatewag: 'Gateway',
		primaryDNS: 'DNS primario',
		secondaryDNS: 'DNS secondario',
		wiredMac: 'Wired MAC Address',
		WIFIMac: 'WiFi MAC Address',
		vpnStatus: 'Stato VPN',
		vpnStatusOpt0: 'In connessione',
		vpnStatusOpt1: 'Disabilita',
		vpnStatusOpt2: 'Connessione non riuscita',
		vpnStatusOpt3: 'Connesso',
		vpnIp: 'IP VPN'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Tipo di porta Internet',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP statico',
		ip: 'Indirizzo IP',
		networkPrefix: 'Network Prefix',
		gatewag: 'Gateway',
		primaryDNS: 'DNS primario',
		secondaryDNS: 'DNS secondario'
	},
	tips: {
		netConfigTip: 'Displays the IP address mode of the device.',
		verTip: 'Visualizza le attuali versioni di firmware e di hardware del dispositivo.',
		netTip: 'Mostra i dettagli della configurazione di rete del telefono.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Network',
		InternetPort: 'Porta Internet',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: 'Indirizzo IP statico',
		
		staticIpSettings: 'Impost. IP statico',
		ip: 'Indirizzo IP',
		subnetMask: 'Subnet Mask',
		defaultGateway: 'Gateway predefinito',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: 'DNS primario',
		secondaryDNS: 'DNS secondario',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6 Prefix',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'Impost. SIP',
		accountActive: 'Account attivo',
		disable: 'Disabilita',
		enable: 'Abilita',
		labelName: 'Etichetta',
		displayName: 'Visualizza nome',
		registerName: 'Registra nome',
		userName: 'Nome utente',
		password: 'Password',
		
		sipServer: 'Server SIP',
		sipServerPort: 'Porta',
		
		back: 'indietro',
		next: 'avanti',
		
		tips: {
			dhcp: 'Fare una richiesta al server DHCP in modo automatico per ottenere indirizzo IP, subnet mask, gateway, DNS, ecc.',
			staticIp: 'Configurare manualmente l‘indirizzo IP, la subnet mask, il gateway, il DNS, ecc.',
			labelName: 'Il nome che compare sullo schermo LCD del presente dispositivo.',
			displayName: 'Il nome del telefono locale che compare sull’altro dispositivo in caso di chiamata.',
			registerName: 'Nome registro fornito da ISP.',
			userName: 'Nome utente fornito da ISP.',
			password: 'Password dell‘account fornita da ISP.',
			sipServer: 'Indirizzo del server Sip fornito da ISP.'
		}
	},
	common: {
		finish: 'Fine',
		next: 'avanti'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'Account',
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		
		registerStatus: 'Stato della registrazione',
		
		accountActive: 'Account attivo',
		disable: 'Disabilita',
		enable: 'Abilita',
		labelName: 'Etichetta',
		displayName: 'Visualizza nome',
		registerName: 'Registra nome',
		userName: 'Nome utente',
		password: 'Password',
		
		sipServer: 'Server SIP',
		sipServerPort: 'Porta',
		redundancy_proxy: 'Server SIP ridondanza',

		enableOutboundProxyServer: 'Abilita server proxy in uscita',
		outboundProxyServer: 'Server proxy in uscita',
		outboundProxyServerPort: 'Porta',
		make_call_without_register: 'Enable Peer to Peer',
		
		verifyServer: 'Verify server',
		transport: 'Trasferimento',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'NAT traversal',
		TLSVersion: 'TLS Version',
		natTraversalOpt1: 'STUN',
		stunServer: 'Server STUN',
		port: 'Porta',
		
		voiceMail: 'Segreteria telefonica',
		anonymousCall: 'Chiamata anonima',
		off: 'Non attivo',
		on: 'Attivo',
		onCode: 'Codice di attivazione',
		offCode: 'Codice di disattivazione',
		anonymousCallRejection: 'Rifiutare chiamate anonime',
		ringTones: 'Suonerie',
		ringTonesOpt0: 'Comune',
		ringTonesOpt1: 'Ring1.wav',
		ringTonesOpt2: 'Ring 2.wav',
		ringTonesOpt3: 'Ring3.wav',
		ringTonesOpt4: 'Ring 4.wav',
		ringTonesOpt5: 'Ring5.wav',
		ringTonesOpt6: 'Ring 6.wav',
		ringTonesOpt7: 'Ring7.wav',
		ringTonesOpt8: 'Ring8.wav',
		ringTonesOpt9: 'Ring9.wav',
		ringTonesOpt10: 'Ring10.wav',
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			labelName: 'Il nome che compare sullo schermo LCD del presente dispositivo.',
			displayName: 'Il nome del telefono locale che compare sull’altro dispositivo in caso di chiamata.',
			registerName: 'Nome registro fornito da ISP.',
			userName: 'Nome utente fornito da ISP.',
			password: 'Password dell‘account fornita da ISP.',
			sipServer: 'Indirizzo del server Sip fornito da ISP.',
			enableOutboundProxyServer: 'È utilizzato per elaborare segnali e aiutare i flussi di dati multimediali che passano attraverso il firewall in caso di presenza di firewall o NAT.',
			redundancy_proxy: 'An Backup SIP server failover',
			outboundProxyServer: 'Server Proxy in uscita.',
			verifyServer: 'verifyServer',
			transport: 'Ci sono tre opzioni di UDP, TCP e TLS. Il protocollo del pacchetto registrato è UDP, TCP o TLS; il protocollo TLS (Transport Layer Security) è criptato.',
			natTraversal: 'Abilitare/Disabilitare il server STUN.',
			stunServer: 'Il server STUN permette a tutti i clienti con terminal server collegato a NAT (come un PC dietro un firewall) di fare chiamate VOIP con il provider del servizio VOIP posizionato al di fuori della LAN.',
			voiceMail: 'Impostare un numero di segreteria telefonica del presente account.',
			anonymousCall: 'Abilitare/Disabilitare le chiamate anonime.',
			onCode: 'Impostare il codice funzione per attivare le chiamate anonime. Il telefono abilita le chiamate anonime inviando il codice funzione al server.',
			offCode: 'Impostare il codice funzione disattivando le chiamate anonime. Il telefono disabilita le chiamate anonime inviando il codice funzione al server.',
			anonymousCallRejection: 'Abilitare/Disabilitare la funzione di blocco delle chiamate anonime.',
			onCodeRejection: 'Impostare il codice funzione per attivare il blocco chiamate anonime. Il telefono abilita il blocco chiamate anonime inoltrando il codice funzione al server.',
			offCodeRejection: 'Impostare il codice funzione disattivando il blocco chiamate anonime. Il telefono disabilita il blocco chiamate anonime inoltrando il codice funzione al server.',
			ringTones: 'Impostare il tipo di suoneria per il presente account.',
			make_call_without_register: 'Make and receive call without register'
		}
	},
	showText: {
		unRegistered: 'Registrazione non riuscita',
		registered: 'Registrato'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'Account',
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		
		audioCodecs: 'Codec audio',
		disableCodecs: 'Codec disabilitati',
		enableCodecs: 'Codec abilitati',
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'Account',
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		
		udpKeepAliveMsg: 'Messaggio KeepAlive mediante UDP',
		disable: 'Disabilita',
		enable: 'Abilita',
		udpKeepAliveInterval: 'Intervallo KeepAlive mediante UDP (secondi)',
		
		loginExpires: 'Login scaduto (secondi)',
		localSipPort: 'Porta Sip locale',
		subscribePeriod: 'Periodo abbonamento (secondi)',
		
		dtmfType: 'Tipo DTMF',
		dtmfTypeOpt0: 'Tono inband',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'Payload DTMF (secondi)',
		reliableRetransmission: 'Ri-trasmissione affidabile al 100%',
		
		subscribeForMwi: 'Abbonamento al servizio di Messaggio in Attesa',
		mwiSubscribePeriod: 'Periodo di abbonamento al servizio di Messaggio in Attesa (secondi)',
		
		useSessionTimer: 'Utilizza timer di sessione',
		sessionTimer: 'Timer di sessione (secondi)',
		refresher: 'Aggiorna',
		
		useUserPhone: 'Usa struttura Utente = telefono',
		voiceEncryption: 'Crittografia vocale (SRTP)',
		off: 'Non attivo',
		on: 'Attivo',
		ptime: 'PTIME (m)',
		
		blfListUri: 'Lista BLF URI',
		derectedCallPickupCode: 'Codice risposta chiamata diretta',
		groupCallPickupCode: 'Codice risposta chiamata gruppo',
		
		sipRegRetryTimer: 'Timer ritenta registrazione SIP',
		earlyMedia: 'Supporti precedenti',
		sipServerType: 'Tipo di server SIP',
		sipServerTypeOpt0: 'Comune',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'BroadSoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Intercom Code',
		conferenceType: 'Conference Type',
		localConference: 'Local Conference',
		networkConference: 'Network Conference',
		conferenceCode: 'Conference Code',
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			udpKeepAliveMsg: 'Periodicamente il telefono inoltra un pacchetto UDP per mantenere attiva la porta ed evitare che il server la chiuda.',
			loginExpires: 'Scadenza registro: il dispositivo deve essere nuovamente registrato entro il tempo di validità di ciascuna registrazione; altrimenti, il server metterà off-line il dispositivo.',
			localSipPort: 'Il numero della porta del dispositivo locale usato per inviare e ricevere pacchetti SIP.',
			subscribePeriod: 'Scadenza abbonamento.',
			dtmfType: 'La modalità di inoltro del DTMF avviene premendo i tasti numerici durante una chiamata, inclusi i tasti INBAND, OUTOFBAND (RFC2833) e SIP INFO.',
			reliableRetransmission: 'Abilitare/Disabilitare trasmissione PRACK.',
			subscribeForMwi: 'Il dispositivo manda al server un pacchetto per abbonarsi al servizio di Messaggio in Attesa; dopo la registrazione, il dispositivo manderà al server un pacchetto di abbonamento.',
			useSessionTimer: 'Abilitare/Disabilitare la funzione della sessione di aggiornamento. Il dispositivo manderà un pacchetto di invito all’aggiornamento della sessione durante una chiamata, se abilitato.',
			sessionTimer: 'Intervallo di tempo di aggiornamento della sessione.',
			refresher: 'Da quale parte aggiornare la sessione. Uac: per aggiornare la sessione da parte del cliente. Uas: per aggiornare la sessione da parte del server.',
			useUserPhone: 'Se abilitato, ci sarà un segnale "utente = telefono" nel pacchetto invito del messaggio SIP.',
			voiceEncryption: 'Abilitare/Disabilitare il Criptaggio Vocale (SRTP).',
			ptime: 'Negoziare l’intervallo di tempo tra due pacchetti RTP dell’attuale codec utilizzato.',
			blfListUri: 'È utilizzato per abbonarsi a BLF su Broadsoft.',
			sipRegRetryTimer: 'L‘intervallo di tempo per un nuovo tentativo di registrazione dopo aver provato una prima volta ma senza successo.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Porta Internet',
		IPv4Config: 'IPv4 Config',
		IPv6Config: 'IPv6 Config',
		dhcp: 'DHCP',
		staticIp: 'Indirizzo IP statico',
		ip: 'Indirizzo IP',
		subnetMask: 'Subnet Mask',
		defaultGateway: 'Gateway predefinito',
		IPv6Prefix: 'IPv6 Prefix(0~128)',

        StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		primaryDNS: 'DNS primario',
		secondaryDNS: 'DNS secondario',
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			dhcp: 'Fare una richiesta al server DHCP in modo automatico per ottenere indirizzo IP, subnet mask, gateway, DNS, ecc.',
			staticIp: 'Configurare manualmente l‘indirizzo IP, la subnet mask, il gateway, il DNS, ecc.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Impostazione Wi-Fi',
		wifi_on_warning: '(Quando il wifi è attivato, scollegare il cavo di rete!)',
		wifi_enable: 'Wi-Fi',
		on: 'Attivo',
		off: 'Non attivo',
		search_wifi: 'Cerca Wi-Fi',
		wifi_ssid: 'SSID corrente',
		wifi_key: 'Chiave segreta',
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
	},
	showText: {
		close_wifi: 'Chiusura Wi-Fi...',
		open_wifi: 'Apertura Wi-Fi...',
		search_wifi: 'Ricerca in corso...',
		wifi_table_header: ['Indice', 'SSID', 'Segnale', 'Seleziona'],
		wifi_list_title: 'Elenco Wi-Fi',
		submitting: 'Invio in corso...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Attivo',
		disable: 'Disabilita',
		enable: 'Abilita',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Priorità',
		vlanPc: 'PC',
		vlanPcActive: 'Attivo',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Priorità',
		
		portLink: 'Link porta',
		wanPortLink: 'Link porta WAN',
		wanPortLinkOption0: 'Negoziazione automatica',
		wanPortLinkOption1: 'Full duplex da 10Mbps',
		wanPortLinkOption2: 'Full duplex da 100Mbps',
		wanPortLinkOption3: 'Half duplex da 10Mbps',
		wanPortLinkOption4: 'Half duplex da 100Mbps',
		wanPortLinkOption5: 'Half duplex 1000Mbps',
		wanPortLinkOption6: 'Full duplex 1000Mbps',
			
		pcPortLink: 'Link porta PC',
		pcPortLinkOption0: 'Negoziazione automatica',
		pcPortLinkOption1: 'Full duplex da 10Mbps',
		pcPortLinkOption2: 'Full duplex da 100Mbps',
		pcPortLinkOption3: 'Half duplex da 10Mbps',
		pcPortLinkOption4: 'Half duplex da 100Mbps',
		
		slaccEnable: 'ICMPv6 Status',

		vpn: 'VPN',
		importFile: 'Upload VPN Config',
		importStr: 'Import',
		
		voiceQos: 'QoS vocale',
		sipQos: 'QoS SIP',
		
		localRtpPort: 'Porta RTP locale',
		maxRTPPort: 'Porta RTP max',
		minRTPPort: 'Porta RTP min',
		
		webServer: 'Server web',
		httpPort: 'Porta Http',
		httpsPort: 'Porta Https',
		webServerType: 'Tipo',
		webServerTypeOption0: 'Disabilitato',
		webServerTypeOption1: 'Solo http',
		webServerTypeOption2: 'Solo https',
		webServerTypeOption3: 'http e https',

        span_to_pc: 'Span all porta PC',
        sys_span_to_pc_port: 'Span all porta PC',

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

		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			lldp: 'LLDP transmits information as packets called LLDP Data Units (LLDPDUs). An LLDPDU consists of a set of Type-Length-Value (TLV) elements, each of which contains a particular type of information about the device or the port transmitting it.',
			cdp: 'CDP (Cisco Discovery Protocol) allows IP phones to receive and/or transmit device-related information from/to directly connected devices on the network that are also using the protocol, and store the information about other devices.',
			vlan: 'La configurazione VLAN, utilizzata per una configurazione specifica,e se si cambia e vuole fare immediatamente l\'effetto delle modifiche, è necessario riavviare manualmente.',
			portLink: 'Connection rate for WAN and PC ports.',
			vpn: 'La configurazione VPN, utilizzata per una configurazione specifica.',
			voiceQos: 'In caso di rete mancante, la qualità del servizio potrà fornire agli utenti il proprio valore.',
			localRtpPort: 'Definire la porta di trasmissione vocale.',
			x_802_1x: 'It configures the 802.1x authentication method.',
			webServer: 'La definizione del tipo di accesso e di porta web.',
			slaccEnable: 'Enable/disable the IP phone to obtain the IPv6 network settings via SLAAC (Stateless Address Autoconfiguration) method.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Tasto',
		type: 'Tipo',
		value: 'Valore',
		label: 'Etichetta',
		account: 'Account',
		ext: 'Interno',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'Tasto DSS',
		
		keyTypeOpt0: 'N/D',
		keyTypeOpt1: 'Linea',
		keyTypeOpt2: 'Chiamata rapida',
		keyTypeOpt4: 'Messaggio',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Chiamata diretta',
		keyTypeOpt10: 'Chiamata di gruppo',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferenza',
		keyTypeOpt15: 'Inoltra',
		keyTypeOpt16: 'Trasferisci',
		keyTypeOpt17: 'In attesa',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Ricomponi',
		keyTypeOpt20: 'Elenco telefonico',
		keyTypeOpt21: 'Ritorno di chiamata',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/D',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Conferma',
		butCancel: 'Cancellare'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Tasto',
		type: 'Tipo',
		value: 'Valore',
		label: 'Etichetta',
		account: 'Account',
		ext: 'Interno',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Line Key',
		
		keyTypeOpt0: 'N/D',
		keyTypeOpt1: 'Linea',
		keyTypeOpt2: 'Chiamata rapida',
		keyTypeOpt4: 'Messaggio',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Chiamata diretta',
		keyTypeOpt10: 'Chiamata di gruppo',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferenza',
		keyTypeOpt15: 'Inoltra',
		keyTypeOpt16: 'Trasferisci',
		keyTypeOpt17: 'In attesa',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Ricomponi',
		keyTypeOpt20: 'Elenco telefonico',
		keyTypeOpt21: 'Ritorno di chiamata',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/D',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Conferma',
		butCancel: 'Cancellare'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Tasto',
		type: 'Tipo',
		value: 'Valore',
		label: 'Etichetta',
		account: 'Account',

		programKeys: ['Muto', 'In attesa', 'Ricomponi', 
		              'Su', 'Giù', 'Sinistra', 'Destra', 'Cancellare', 'Ok', 
		              'Tasto software1', 'Tasto software 2', 'Tasto software 3', 'Tasto software 4'],

		programKeys_A1x: ['Muto', 'In attesa', 'Ricomponi', 
		              'Su', 'Giù', 'Sinistra', 'Destra', 'Cancellare', 'Ok', 
		              'Tasto software1', 'Tasto software 2', 'Tasto software 3'],

		programKeys_A2x: ['Muto', 'In attesa', 'Ricomponi', 
		              'Su', 'Giù', 'Sinistra', 'Destra', 'Cancellare', 'Ok', 
		              'Tasto software1', 'Tasto software 2', 'Tasto software 3'],

		programKeys_CT11: ['Muto', 
		              'Su', 'Giù',
		              'Tasto software1', 'Tasto software 2', 'Tasto software 3', 'Tasto software 4'],
		keyTypeOpt0: 'N/D',
		keyTypeOpt1: 'Linea',
		keyTypeOpt2: 'Chiamata rapida',

		keyTypeOpt4: 'Messaggio',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Chiamata diretta',
		keyTypeOpt10: 'Chiamata di gruppo',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferenza',
		keyTypeOpt15: 'Inoltra',
		keyTypeOpt16: 'Trasferisci',
		keyTypeOpt17: 'In attesa',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Ricomponi',
		keyTypeOpt20: 'Elenco telefonico',
		keyTypeOpt21: 'Ritorno di chiamata',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/D',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'Status',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Conferma',
		butCancel: 'Cancellare'
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
		key: 'Tasto',
		type: 'Tipo',
		value: 'Valore',
		label: 'Etichetta',
		account: 'Account',
		ext: 'Interno',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'Tasto Ext',
		
		keyTypeOpt0: 'N/D',
		keyTypeOpt1: 'Linea',
		keyTypeOpt2: 'Chiamata rapida',
		keyTypeOpt4: 'Messaggio',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Chiamata diretta',
		keyTypeOpt10: 'Chiamata di gruppo',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferenza',
		keyTypeOpt15: 'Inoltra',
		keyTypeOpt16: 'Trasferisci',
		keyTypeOpt17: 'In attesa',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Ricomponi',
		keyTypeOpt20: 'Elenco telefonico',
		keyTypeOpt21: 'Ritorno di chiamata',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/D',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Conferma',
		butCancel: 'Cancellare'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'AET device ID which display in the status of linkable divice'
		}
	
},
extKeyBackHtml = {
	noLink: 'Nessun modulo di espansione collegato. Collegare una o più unità; quindi, aggiornare questa pagina.'	
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
		dhcpTime: 'Tempo DHCP',
		disable: 'Disabilita',
		enable: 'Abilita',
		auto: 'Automatico',
		timeZone: 'Fuso orario',
		primaryNtp: 'Server NTP primario',
		secondaryNtp: 'Server NTP secondario',
		updateInterval: 'Intervallo di aggiornamento (secondi)',
		daylight: 'Luce diurna',
		fixedType: 'Tipo fisso',
		fixedTypeOpt0: 'Per data',
		fixedTypeOpt1: 'Per settimana',
		startMonth: 'Mese di inizio',
		January: 'Gennaio',
		February: 'Febbraio',
		March: 'Marzo',
		April: 'Aprile',
		May: 'Maggio',
		June: 'Giugno',
		July: 'Luglio',
		August: 'Agosto',
		September: 'Settembre',
		October: 'Ottobre',
		November: 'Novembre',
		December: 'Dicembre',
		startDate: 'Data di inizio',
		startHourDay: 'Ora del giorno di inizio',
		startDayWeek: 'Giorno della settimana di inizio',
		Sunday: 'Domenica',
		Monday: 'Lunedì',
		Tuesday: 'Martedì',
		Wednesday: 'Mercoledì',
		Thursday: 'Giovedì',
		Friday: 'Venerdì',
		Saturday: 'Sabato',
		startWeekMonth: 'Settimana del mese di inizio',
		firstInMonth: 'Prima del mese',
		secondInMonth: 'Seconda del mese',
		thirdInMonth: 'Terza del mese',
		fourthInMonth: 'Quarta del mese',
		lastInMonth: 'Ultima del mese',
		stopMonth: 'Mese di fine',
		stopDate: 'Data di fine',
		stopHourDay: 'Ora del giorno di fine',
		stopDayWeek: 'Giorno della settimana di fine',
		stopWeekMonth: 'Settimana del mese di fine',
		offset: 'Compensazione (minuti)',
		manualTime: 'Ora manuale',
		dateYmd: 'Data',
		autoDate: 'Data generata',
		timeHms: 'Ora',
		autoTime: 'Ora generata',
		timeFormat: 'Formato ora',
		timeFormatOpt0: '12 ore',
		timeFormatOpt1: '24 ore',
		dateFormat: 'Formato data',
		backlightTime: 'Tempo retroilluminazione',
		backlightTimeOpt0: 'Sempre attivo',
		backlightTimeOpt1: '1 min',
		backlightTimeOpt2: '2 min',
		backlightTimeOpt3: '5 min',
		backlightTimeOpt4: '10 min',
		backlightTimeOpt5: '30 min',
		screensaver_timeout: 'Screensaver Time',
		screensaver_timeoutOpt0: 'off',
		screensaver_timeoutOpt1: '1 min',
		screensaver_timeoutOpt2: '2 min',
		screensaver_timeoutOpt3: '5 min',
		screensaver_timeoutOpt4: '10 min',
		screensaver_timeoutOpt5: '30 min',
		backlightLevel: 'Intensità retroilluminazione',
		slaveBacklightLevel: 'Riduci intensità retroilluminazione',
		expandBacklightLevel: 'Aumenta intensità retroilluminazione',
		slaveLcdContract: 'Riduci contrasto LCD',
		ringTones: 'Suonerie',
		ringTonesOpt1: 'Ring1.wav',
		ringTonesOpt2: 'Ring 2.wav',
		ringTonesOpt3: 'Ring3.wav',
		ringTonesOpt4: 'Ring 4.wav',
		ringTonesOpt5: 'Ring5.wav',
		ringTonesOpt6: 'Ring 6.wav',
		ringTonesOpt7: 'Ring7.wav',
		ringTonesOpt8: 'Ring8.wav',
		ringTonesOpt9: 'Ring9.wav',
		ringTonesOpt10: 'Ring10.wav',
		replaceRingTone: 'Replace Ring Tone',
		wallpaper: 'Wallpaper',
		delWallpaper: 'Elimina',
		uploadWallpaper: 'Upload',
		cancelWallpaper: 'Cancellare',
		screensaver: 'Screensaver',
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			dhcpTime: 'Enables or disables the IP phone to update time with the offset time obtained from the DHCP server.',
			replaceRingTone: 'Recommended file format: 16-bit, wave; the file size should be less than 800 kB for the colour display phone, and less than 300 kB for the monochrome display phone.',
			timeZone: 'Selezionare il vostro fuso orario.',
			updateInterval: 'Impostare l’intervallo dell’ora per controllare l’ora del dispositivo locale con il server.',
			daylight: 'Impostazioni Orario di Risparmio della Luce Diurna.',
			manualTime: 'Abilitare/Disabilitare l’impostazione dell’ora manuale.',
			timeFormat: 'Impostare l’ora nel formato 12 ore o 24 ore.',
			dateFormat: 'Impostare il formato della data sul display.',
			backlightTime: 'Impostare l’ora di retroilluminazione.',
			screensaver_timeout: 'Set Screensaver time.',
			backlightLevel: 'Correttore di lucentezza di retroilluminazione del telefono.',
			ringTones: 'Impostazioni del tipo di suoneria del telefono.',
			pictureSize: 'Best resolution is 461x278 pixels and the size should be less than 500KBytes.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Disabilita',
		enable: 'Abilita',
		off: 'Non attivo',
		on: 'Attivo',
		forward: 'Inoltra',
		always: 'Sempre',
		busy: 'Occupato',
		noAnswer: 'Nessuna risposta',
		afterRingTime: 'Tempo dopo lo squillo (secondi)',
		
		target: 'Target',
		onCode: 'Codice di attivazione',
		offCode: 'Codice di disattivazione',
		
		dnd: 'Non disturbare',
		dndOnCode: 'Codice DND attivo',
		dndOffCode: 'Codice DND non attivo',
		authNum: 'Numeri autorizzati (separati dalla virgola)',
		
		generalInfo: 'Informazioni generali',
		liveDialpad: 'Tastiera Live',
		interDigitTime: 'Tempo tra le digitazioni (secondi)',
		autoAnswer: 'Risposta automatica',
		autoAnswerDelay: 'Auto Answer Delay (sec)',
		ignoreMissedCall: 'Ignore Missed Call',
		callWaiting: 'Attesa di chiamata',
		hotline: 'Linea diretta',
		hotlineTimeout: 'Timeout linea diretta (0~180 secondi)',
		keyAsSend: 'Tasto chiamata in uscita',
		dialNowTimeout: 'Timeout composizione immediata (secondi)',
		busyToneTimer: 'Timer tono di occupato (secondi)',
		returnCodeWhenRefuse: 'Codice di ritorno in caso di chiamata rifiutata',
		returnCodeWhenDnd: 'Codice di ritorno in caso di DND',
		r404: '404 (non trovato)',
		r480: '480 (temporaneamente non disponibile)',
		r486: '486 (occupato)',
		rfc2543Hold: 'Attesa RFC 2543',
		useOutboundProxyInDialog: 'Utilizza la finestra di dialogo Proxy in uscita',
		loginTimeout: 'Login in time-out(1~1000 minutes)',
		hidedtmf: 'Hide DTMF',
		multicastCodec: 'Multicast Codec',
		watchdog: 'Watch Dog',
		
		audioSettings: 'Impostazioni audio',
		callWaitingTone: 'Tono avviso di chiamata',
		headset: 'Volume cuffie',
		handset: 'Volume ricevitore',
		handfree: 'Volume vivavoce',
		ringer: 'Volume suoneria',
		headsetSend: 'Inoltra volume a cuffie',
		handsetSend: 'Inoltra volume a ricevitore',
		handfreeSend: 'Inoltra volume a vivavoce',
		ringerDeviceForHeadset: 'Dispositivo suoneria per ricevitore',
		ringerDeviceForHeadsetOpt0: 'Usa Cicalino',
		ringerDeviceForHeadsetOpt1: 'Utilizza cuffie',
		
		transferSettings: 'Impostazioni di trasferimento',
		blindTransferOnHook: 'Trasferimento cieco al riaggancio',
		attendedTransferOnHook: 'Trasferimento assistito al riaggancio',
		transferOnConHangUp: 'Trasferimento in Conferenza',
		transferModeViaDsskey: 'Modalità di trasferimento tramite tasto DSS',
		transferModeViaDsskeyOpt0: 'Nuova chiamata',
		transferModeViaDsskeyOpt1: 'Trasferimento assistito',
		transferModeViaDsskeyOpt2: 'Trasferimento cieco',
		
		callPickup: 'Risposta chiamata',
		directCallPickup: 'Risposta chiamata diretta',
		directCallPickupCode: 'Codice risposta chiamata diretta',
		groupCallPickup: 'Risposta chiamata di gruppo',
		groupCallPickupCode: 'Codice risposta chiamata gruppo',
		
		accept_sip_trust_server_only: 'Accept SIP Trust Server Only',
		recordUserId: 'Record User ID',
		extFunction: 'Ext Function',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: 'Conference hold when add new',

		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			forward: 'Impostare il trasferimento di chiamata.',
			alwaysTarget: 'Numero target per il trasferimento.',
			alwaysOnCode: 'Il codice funzione per consentire il trasferimento di tutte le chiamate in entrata: il telefono invierà il codice funzione per attivare il trasferimento di tutte le chiamate in entrata.',
			alwaysOffCode: 'Il codice funzione per disabilitare il trasferimento di tutte le chiamate in entrata: il telefono invierà il codice funzione per disattivare il trasferimento di tutte le chiamate in entrata.',
			busyTarget: 'Numero target per il trasferimento.',
			busyOnCode: 'Il codice funzione per abilitare il trasferimento delle chiamate quando la linea è occupata: il telefono invierà il codice funzione per attivare il trasferimento di chiamata quando la linea è occupata.',
			busyOffCode: 'Il codice funzione per disattivare il trasferimento delle chiamate quando la linea è occupata: il telefono invierà il codice funzione per disattivare il trasferimento delle chiamate quando la linea è occupata.',
			afterRingTime: 'Tempo di attesa per trasferimento di chiamata su nessuna risposta.',
			noAnswerTarget: 'Numero target per il trasferimento.',
			noAnswerOnCode: 'Il codice funzione per abilitare il trasferimento di chiamata su nessuna risposta: il telefono invia il codice funzione per attivare il trasferimento di chiamata su nessuna risposta.',
			noAnswerOffCode: 'Il codice funzione per disabilitare trasferimento di chiamata su nessuna risposta: il telefono invierà il codice funzione per disattivare il trasferimento di chiamata su nessuna risposta.',
			
			dndOnCode: 'Il codice funzione per abilitare l‘DND: il telefono invierà il codice funzione per attivare il DND.',
			dndOffCode: 'Il codice funzione per disabilitare l‘DND, il telefono invierà il codice funzione per disattivare il DND.',
			
			liveDialpad: 'Abilitare/Disabilitare la composizione automatica sull\'interfaccia utente di dial-up.',
			interDigitTime: 'Tempo di ritardo per la composizione automatica sulla tastiera.',
			autoAnswer: 'Abilitare/Disabilitare il risponditore automatico.',
			autoAnswerDelay: 'It configures the delay time (in seconds) before the IP phone automatically answers an incoming call.',
			callWaiting: 'Occupato in attesa delle nuove chiamate in arrivo.',
			hotline: 'Impostare il numero di linea diretta.',
			hotlineTimeout: 'Impostazione per il tempo di ritardo della linea diretta.',
			keyAsSend: 'Impostare i tasti con funzione call-out.',
			dialNowTimeout: 'Intervallo per la composizione immediata.',
			busyToneTimer: 'Tono di occupato a chiusura della chiamata.',
			returnCodeWhenRefuse: 'Impostare il messaggio di ritorno per il rifiuto delle chiamate.',
			returnCodeWhenDnd: 'Impostare il messaggio di ritorno per la funzione Non disturbare.',
			rfc2543Hold: 'Il server supporta due tipi di standard destinati alle chiamate in attesa.',
			useOutboundProxyInDialog: 'Abilitare/disabilitare proxy in uscita sulla conversazione.',
			loginTimeout: 'It configures the timeout interval (in minutes) for web access authentication.',
			acceptSipTrustServerOnly: 'Enable/disable the IP phone to only accept the SIP message from the SIP and outbound proxy server.',

			callWaitingTone: 'Impostare il tono per avvertire della presenza di una nuova chiamata durante una già presente conversazione (avviso di chiamata attivato).',
			ringerDeviceForHeadset: 'Scelta del canale del tono di chiamata.',

			blindTransferOnHook: 'Abilita/Disabilita trasferimento cieco al riaggancio.',
			attendedTransferOnHook: 'Abilitare/Disabilitare le funzioni partecipare-trasferire e Partecipare parzialmente-Trasferire al riaggancio.',
			transferOnConHangUp: 'Abilitare/Disabilitare il trasferimento della chiamata ad altri due interlocutori, una volta che chi ha avviato la conferenza ha deciso di chiuderla.'
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
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
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
		ver: 'Versione',
		fmVer: 'Versione firmware',
		hdVer: 'Versione hardware',
		
		resetToFactory: 'Ripristinare le impostazioni predefinite',
		reboot: 'Riavvia',		
		
		upgradeHeader: 'Aggiornamento firmware',
		selectFw: 'Selezionare firmware',
		upgrade: 'Aggiornamento',
		
		tips: {
			upgradeHeader: 'Per eseguire l’aggiornamento selezionare l’ultima versione del firmware rilasciata dai fornitori.'
		}
	},
	commonText: {
		resetConfirm: 'Ripristinare le impostazioni predefinite?',
		resetSuccess: 'Ripristino delle impostazioni predefinite completato. Il dispositivo si riavvierà automaticamente.',
		resetFail: 'Ripristino delle impostazioni predefinite non riuscito; riprovare.',
		
		rebootConfirm: 'Riavviare?',
		
		uploadFilePrompt: 'Caricare il file:',
		upgradeMsg: 'Non interrompere l’alimentazione.',
		upgradeText: 'Aggiornamento in corso; attendere.',
		
		upgradeFail: 'Aggiornamento non riuscito; riprovare.'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'Funzione Pcap',
		start: 'Avvia',
		stop: 'Arresta',
		exportStr: 'Esporta',
		
		debug: 'Debug'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Auto-Provisioning',
		PnPEnable: 'PnP Active',
		DHCPEnable: 'DHCP Active',
		provisioningServer: 'Provisioning Server',
		userName: 'Nome utente',
		password: 'Password',
		commonAESKey: 'Common AES Key',
		MACAESKey: 'MAC-Oriented AES Key',
		checkNewConfig: 'Contr New Config',
		off: 'Non attivo',
		on: 'Attivo',
		repeatedly: 'Più volte',
		interval: 'Intervallo-minuti',
		weekly: 'Settim',
		time: 'Ora',
		dayOfWeek: 'Giorno sett',
		
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			PnPEnable: 'The request to the server to obtain a support URL for upgrade',
			DHCPEnable: 'To obtain a support URL for upgrade from DHCP server',
			provisioningServer: 'Aggiorn indir. server',
			password: 'Password server',
			checkNewConfig: 'Modalità controllo nuova configurazione sul server'
		}
	},
	showText: {
		weekly:  ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Configurazione importazione/esportazione',
		importFile: 'Importa file',
		importStr: 'Importa',
		exportStr: 'Esporta',
		exportUserData: 'Esporta dati utente',

		exportImportConfig: 'Import/Export CFG File',
		
		exportSyslog: 'Esporta registro di sistema',
		logLocation: 'Percorso registro',
		logLocationOpt0: 'Locale',
		logLocationOpt1: 'Server', 
		serverName: 'Nome Server',
		logLevel: 'Livello registro',
		logOpt0: 'Fatal',
		logOpt1: 'Error',
		logOpt2: 'Avviso',
		logOpt3: 'Info',
		logOpt4: 'Debug',
		exportStr2: 'Esporta',
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			exportImportConfig: 'The imported or exported file must have an auto provision file format. The exported file includes the modified configuration only, so it will be empty if no changes were made.',
			importExportCfg: 'Fare clic su Esporta per esportare la configurazione attuale del telefono; dunque, scegliere il file di configurazione dell‘importazione e fare clic su Importa. La configurazione sarà così importata nel presente telefono. Riavviare.',
			exportSyslog: 'Se il tipo è locale, verrà esportato il syslog; se il tipo è il server, il syslog verrà esportato al server specificato.'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Action URI allow IP List',
		remoteControl:'Remote Control',
		cstaControl: 'CSTA Control',
		disable: 'Disabilita',
		enable: 'Abilita',
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
		butConfirm: 'Conferma',
		butCancel: 'Cancellare'
	}
},
phoneDialPlanHtml = {
	mytabMenu: {
		replaceRule: 'Regola di riposizionamento',
		dialNow: 'Composizione immediata',
		areaCode: 'Prefisso',
		blockOut: 'Blocca uscita'
	},
	replaceRuleTitle: ['Indice', 'Numero', 'Sostituisci', 'Account'],
	dialNowsTitle: ['Indice', 'Regola composizione immediata', 'Account'],
	replaceRuleForm: {
		num: 'Numero',
		replace: 'Sostituisci',
		account: 'Account',
		add: 'Aggiungi',
		edit: 'Modifica',
		del : 'Elimina',
		save: 'Salva'
	},
	dialNowsForm: {
		rule: 'Regola composizione immediata',
		account: 'Account',
		add: 'Aggiungi',
		edit: 'Modifica',
		del : 'Elimina',
		save: 'Salva'
	},
	form3: {
		code: 'Codice',
		minLen: 'Lunghezza minima',
		maxLen: 'Lunghezza massima',
		areaCodeAccount: 'Account',
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Bloccare i numeri in uscita',
		account: 'Account',
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare'
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
		disable: 'Disabilita',
		enable: 'Abilita',
		
		echoCancellation: 'Rimozione eco',
		echoCanceller: 'Dispositivo eliminazione eco',
		echoCancellerOpt0: 'Livello basso',
		echoCancellerOpt1: 'Livello medio',
		echoCancellerOpt2: 'Alto livello',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Jitter Buffer',
		type: 'Tipo',
		typeOpt0: 'Fisso',
		typeOpt1: 'Adattabile',
		minDelay: 'Ritardo minimo',
		maxDelay: 'Ritardo massimo',
		normalDelay: 'Ritardo normale',
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			echoCancellation: 'Impostazioni di cancellazione eco.',
			echoCanceller: 'Abilitare/Disabilitare canceller di eco.',
			vad: 'Rilevamento attività voce.',
			cng: 'Generatore di comfort noise (CNG).',
			jitterBuffer: 'Questo è un’area con dati condivisi; i pacchetti di voce e dati possono essere raccolti, stoccati e inviati al processore audio uniforme.'
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
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
	},
    showText: {
		delConfirm: 'Are you sure to delete the chosen files ?',
		selectEmpty: 'Please select one record at least.'
	}
},

phoneLockHtml = {
	form1: {

		disable: 'Disabilita',
		enable: 'Abilita',

		keypad_lock: 'Phone Lock',
		keypadlock_enable: 'Keypad Lock Enable',
		keypadlock_type: 'Keypad Lock Type',
		keypadlock_password: 'Phone Unlock PIN(0~15 Digit)',
		delay_lock: 'Phone Lock Time Out(1~3600s)',
		emergency_call: 'Emergency',
		keypad_lock_menu_key: 'Menu Key',
		keypad_lock_function_key: 'Function Key',
		keypad_lock_all_keys: 'All Keys',
		keypad_lock_answer_call_only:'Blocca&Rispondi',

		butConfirm: 'Conferma',
		butCancel: 'Cancellare',

		tips: {
			emergency_call: 'Used for calling out emergency number when it is set as keypad lock'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: 'Disabilita',
		enable: 'Abilita',

		tr069: 'TR069',
		tr069_enable: 'Abilita TR069',
		serveraddress: 'ACS URL',
		serverport: 'Port',
		username: 'Username ACS',
		password: 'ACS Password',
		periodic_inform_enable: 'Abilita Inform Periodico',
		periodic_inform_interval: 'Intervallo Inform Periodico (secondi)',
		connection_request_username: 'Username per richiesta connessione',
		connection_request_password:'Password richiesta conenssione',

		butConfirm: 'Conferma',
		butCancel: 'Cancellare',

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
		passwdModify: 'Modifica password',
		userType: 'Tipo di utente',
		currentPasswd: 'Password attuale',
		newPasswd: 'Nuova password',
		confirmPasswd: 'Confermare password',
		
		butConfirm: 'Conferma',
		butCancel: 'Cancellare',
		
		tips: {
			userType: 'Selezionare il vostro tipo. Se si accede come utente, è possibile modificare solo la propria password. Se si effettua il login come amministratore, è possibile modificare entrambe le password (amministratore e utente).'
		}
	},
	showText: {
		pwdNoMatch: 'Le due password inserite non corrispondono',
		modifyFailed: 'Modifica della password non riuscita. Riprovare.'
	}
},
contactsHtml = {
	mytabMenu: ['Contatti', 'Black List'],
	tableHeader: ['Indice', 'Nome', 'Numero ufficio', 'Numero cellulare', 'Altro numero', 'Account'],
	buttonDiv: {
		save: 'Salva',
		del: 'Cancella',
		moveToBlack: 'Sposta in Black List',
		moveToWhite: 'Sposta nei Contatti'
	},
	editDiv: {
		contacts: 'Contatti',
		name: 'Nome',
		officeNum: 'Numero ufficio',
		mobileNum: 'Numero cellulare',
		otherNum: 'Altro numero',
		account: 'Account',
		accountOpt8: 'Auto',
		accountOpt1: 'Account 1',
		accountOpt2: 'Account 2',
		accountOpt3: 'Account 3',
		accountOpt4: 'Account 4',
		accountOpt5: 'Account 5',
		accountOpt6: 'Account 6',
		ring: 'Suoneria',
		ringOpts: ['Auto', 'Ring1.wav', 'Ring 2.wav', 'Ring3.wav', 'Ring 4.wav', 
		           'Ring5.wav', 'Ring 6.wav', 'Ring7.wav', 'Ring8.wav', 'Ring9.wav', 'Ring10.wav'],
		photo: 'Foto',
		defaultPhoto: 'Default',
		add: 'Aggiungi',
		deletePhoto: 'Cancella',
		uploadPhoto: 'Upload Photo',
		pictureSize: 'Best resolution is 100x135 pixels and the size should be less than 250KBytes.',
		edit: 'Modifica',
		search: 'Ricerca',
		
		importAndExport: 'Importazione ed esportazione contatti locali',
		importFile: 'Importazione contatti locali',
		importStr: 'Importa',
		exportStr: 'Esporta'
	},
	
	shwoText: {
		delConfirm: 'Eliminare i contatti selezionati?',
		delConfirm1: 'Nota: dopo il salvataggio, la foto del contatto non potrà essere recuperata.', 
		selectEmpty: 'Selezionare almeno una voce.',
		selectTooMuch: 'Troppe voci selezionate.',
		nameEmpty: 'Il nome visualizzato non può essere vuoto.',
		nameExist: 'Il nome visualizzato è già esistente.',
		phonebookFull: 'Only less than 400 items in phonebook list!',
		blacklistFull: 'Only less than 50 items in blacklist!',
		contentEmpty: 'Il contenuto non deve essere vuoto.',
		notFind: 'Contatto specificato non trovato.'
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


		butConfirm: 'Conferma',
		butCancel: 'Cancellare',

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

		butConfirm: 'Conferma',
		butCancel: 'Cancellare',

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

		butConfirm: 'Conferma',
		butCancel: 'Cancellare',

		tips: {
			SRemoteName: 'It enables or disables the phone to perform a remote phone book search for an incoming or outgoing call.',
			SRemoteNameFlashTime: 'It configures the interval (in seconds) for the phone to update the data of the remote phone book from the remote phone book server. The value 0 means the phone will not regularly update the data of the remote phone book from the remote phone book server.'
		}
	}
},

phoneCallInfoHtml = {
	mytabMenu: ['Elenco effettuate', 'Elenco perse', 'Elenco ricevute', 'Elenco inoltrate'],
	tableHeader: ['Indice', 'Data e ora', 'Duration', 'Identità locale', 'Nome', 'Numero tel.']
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
