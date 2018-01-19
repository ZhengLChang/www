//公共的验证信息
var commonValidMsg = {
	missingMsg: 'Champ obligatoire',
	invalidIpMsg: 'IP invalide'
},
uploadCommon = {
	uploadFilePrompt: 'Pour télécharger fichier :',
	uploadMsg: 'Ne pas éteindre !',
	uploadText: 'Importation en cours...',
	uploadSuccess: 'Importation réussie !',
	uploadFail: 'Échec importation, réessayer !'
},
alertMsg = {
	titlePrompt: 'Aide vocale',
	titleConfirm: 'Confirmer',
	noChange: 'Aucun changement !',
	invalidVal: 'Valeur invalide !',
	saveSuccess: 'Sauvegarde réussie !',
	enabledOptionsEmpty: 'Les codecs actifs ne peuvent â être vides !',
	codecsConflict: 'iLBC_13_3 et iLBC_15_2 non applicable simultanément !',
	emptyContent: 'Contenu vide !',
	invalidDTMF: 'Invalide DTMF !',
	webServicesDisable: 'Les services Web ont été désactivés !',
	features: 'Le code de désactivation doit être renseigné si le code d’activation est défini !',
	invalidAccountList: 'Liste compte invalide !',
	dialPlanMsg1: 'Choisir au moins un enregistrement.',
	voiceError1: 'Le délai max. doit être plus grand que le délai min.',
	voiceError2: 'Le délai normal doit se trouver entre les délais min. et max.',
	fileIsEmpty: 'Fichier vide !',
	upgradeFileFormateErr: 'Please choose a upgrade file(*.fw)!',
	openvpnFile: 'Please choose a OpenVPN file(*.tar/*.TAR)!',
	wallpaperFormatError: 'Filename contain Latin characters only and  PNG/JPG/BMP format images',
	systemFileCannotDelete: 'it only support delete the custom photos!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'Ne pas éteindre !',
			rebootText: 'Redémarrage en cours...'
		},
		showProgress: {
			progressTitle: 'Aide vocale'
		}
	},
	ErrorInfo: {
		networkError: 'Erreur de réseau, vérifiez-le !',
		webServerError: 'Erreur du serveur Web, veuillez essayer de nouveau !',
		unknownError: 'Erreur inconnue !',
		dataNoChanged: 'No Change!',
		Error_409: 'The file with this name already exists.',
		Error_413: 'The file is too large.',

		phoneBusyError: 'Talking, Please wait...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: 'Échec de la déconnexion, veuillez essayer de nouveau !'
	},
	pluginInit: {
		ok: 'OK',
		cancel: 'Annuler'
	}
},
status401Html = {
	errorInfo1 : 'Vous n’êtes pas autorisé à accéder à l’interface Web.',
	errorInfo2 : 'Veuillez contacter votre équipe de support ou réessayez dans trois minutes.',
	errorInfo3: 'HTTP 401 non autorisé'
},
//index.html
indexHtml={
	top:{
		logout: 'Déconnexion',
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
		basic: 'De base',
		account: 'Compte',
		network: 'Réseau',
		dSSKey: 'Touche DSS',
		phone: 'Tél.',
		contacts: 'Contact',
		security: 'Sécurité'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'Site Web',
		products: 'Produits',
		support: 'Assistance',
		download: 'Téléchargement',
		contactus: 'Nous contacter',
		atcomRights: '© 2018 ATCOM Tous droits réservés.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'État',
		sWizard: 'Assistant',
		//Account
		aBasic: 'De base',
		aCodecs: 'Codecs',
		aAdvanced: 'Avancé',
		//NetWork
		nBasic: 'De base',
		nWifi: 'Wi-Fi',
		nAdvanced: 'Avancé',
		//DSS key
		dMemory: 'Touche mémoire',
		dLink: 'Touche ligne',
		dProgrammable: 'Touche program.',
		dExt: 'Touche EXT',
		dAetAdv: 'EXT Settings',

		//Phone
		pDNDAndForward: 'Forward&DND',
		pPrefetence: 'Préférence',
		pFeatures: 'Fonctions',
		pUpgrade: 'Actualiser',
		pAuto: 'Provision. auto',
		pConfig: 'Configuration',
		pRemoteControl: 'Remote Control',
		pActionUrl: 'Action URL',
		pDialPlan: 'Plan de numérot.',
		pVoice: 'Voix',
		pRing: 'Alert Info',
		pTones: 'Tonnalité',
		pSms: 'SMS',
		pAction: 'URL d\'action',
		pSoftkey: 'Org. btns fonct.',
		pPhoneLock: 'Phone Lock',
		pSecurity: 'Sécurité',
		pPhoneTr069: 'TR069',
		pDebug: 'Déboguer',
		//Contacts
		cContacts: 'Contact',
		cXMLPhonebook: 'Répertoire distant',
		cPhoneCall: 'Infos sur l\'appel',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'Journal appels',
		//Security
		sPassword: 'Mot de passe',
		sStrusted: 'Certificats approuvés',
		sServer: 'Certificats serveur'
	}
},
statusHtml = {
	version: {
		verTitle: 'Version',
		fwVer: 'Version micrologiciel',
		hwVer: 'Version matérielle',
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
		internetPort: 'Type port Internet',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP statique',
		ip: 'Adresse IP',
		subnetMask: 'Masque sous-réseau',
		gatewag: 'Passerelle',
		primaryDNS: 'DNS primaire',
		secondaryDNS: 'DNS secondaire',
		wiredMac: 'Wired MAC Address',
		WIFIMac: 'WiFi MAC Address',
		vpnStatus: 'Statut du VPN',
		vpnStatusOpt0: 'Connexion en cours',
		vpnStatusOpt1: 'Désactiver',
		vpnStatusOpt2: 'Échec de la connexion',
		vpnStatusOpt3: 'Connecté',
		vpnIp: 'IP du VPN'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Type port Internet',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP statique',
		ip: 'Adresse IP',
		networkPrefix: 'Network Prefix',
		gatewag: 'Passerelle',
		primaryDNS: 'DNS primaire',
		secondaryDNS: 'DNS secondaire'
	},
	tips: {
		netConfigTip: 'Displays the IP address mode of the device.',
		verTip: 'Affiche la version actuelle du micrologiciel et la version matérielle de l’appareil.',
		netTip: 'Montre les détails de la configuration du réseau du téléphone.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Network',
		InternetPort: 'Port Internet',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: 'Adresse IP statique',

		staticIpSettings: 'Paramètres de l’IP statique',
		ip: 'Adresse IP',
		subnetMask: 'Masque sous-réseau',
		defaultGateway: 'Passerelle par défaut',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: 'DNS primaire',
		secondaryDNS: 'DNS secondaire',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6 Prefix',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'Paramètres SIP',
		accountActive: 'Activer compte',
		disable: 'Désactiver',
		enable: 'Activer',
		labelName: 'Étiquette',
		displayName: 'Nom affiché',
		registerName: 'Nom enregistré',
		userName: 'Nom utilisateur',
		password: 'Mot de passe',
		
		sipServer: 'Serveur SIP',
		sipServerPort: 'Port',
		
		back: 'Précédent',
		next: 'Suivant',
		
		tips: {
			dhcp: 'Envoyer automatiquement une requête au serveur DHCP afin d’obtenir adresse IP, masque de sous-réseau, passerelle, DNS, etc.',
			staticIp: 'Configurer manuellement adresse IP, masque de sous-réseau, passerelle, DNS, etc.',
			labelName: 'Nom apparaissant sur l’afficheur LCD du présent appareil.',
			displayName: 'Nom du téléphone local apparaissant sur le téléphone distant lors d’un appel.',
			registerName: 'Enregistrer le nom fourni par le ISP.',
			userName: 'Nom d’utilisateur fourni par le ISP.',
			password: 'Mot de passe du compte fourni par le ISP.',
			sipServer: 'Adresse du serveur SIP fourni par le ISP.'
		}
	},
	common: {
		finish: 'Terminer',
		next: 'Suivant'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'Compte',
		accountNumberOpt1: 'Compte 1',
		accountNumberOpt2: 'Compte 2',
		accountNumberOpt3: 'Compte 3',
		accountNumberOpt4: 'Compte 4',
		accountNumberOpt5: 'Compte 5',
		accountNumberOpt6: 'Compte 6',
		
		registerStatus: 'Enregistrer état',
		
		accountActive: 'Activer compte',
		disable: 'Désactiver',
		enable: 'Activer',
		labelName: 'Étiquette',
		displayName: 'Nom affiché',
		registerName: 'Nom enregistré',
		userName: 'Nom utilisateur',
		password: 'Mot de passe',
		
		sipServer: 'Serveur SIP',
		sipServerPort: 'Port',
		redundancy_proxy: 'Serveur SIP redondant',

		enableOutboundProxyServer: 'Activer serveur proxy sortant',
		outboundProxyServer: 'Serveur proxy sortant',
		outboundProxyServerPort: 'Port',
		make_call_without_register: 'Enable Peer to Peer',
		
		verifyServer: 'Verify server',
		transport: 'Transport',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'Traversée NAT',
		TLSVersion: 'TLS Version',
		natTraversalOpt1: 'STUN',
		stunServer: 'Serveur STUN',
		port: 'Port',
		
		voiceMail: 'Message vocal',
		anonymousCall: 'Appel anonyme',
		off: 'Désactivé',
		on: 'Activé',
		onCode: 'Code désactivation',
		offCode: 'Code activation',
		anonymousCallRejection: 'Rejet des appels anonymes',
		ringTones: 'Tonalités sonnerie',
		ringTonesOpt0: 'Commun',
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
		
		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
		
		tips: {
			labelName: 'Nom apparaissant sur l’afficheur LCD du présent appareil.',
			displayName: 'Nom du téléphone local apparaissant sur le téléphone distant lors d’un appel.',
			registerName: 'Enregistrer le nom fourni par le ISP.',
			userName: 'Nom d’utilisateur fourni par le ISP.',
			password: 'Mot de passe du compte fourni par le ISP.',
			sipServer: 'Adresse du serveur SIP fourni par le ISP.',
			enableOutboundProxyServer: 'Il est utilisé pour traiter les signaux et pour faciliter le passage des flux de données multimédias au travers d’un pare-feu, le cas échéant, ou d’une traduction d’adresse réseau (NAT).',
			redundancy_proxy: 'An Backup SIP server failover',
			outboundProxyServer: 'Serveur proxy sortant.',
			verifyServer: 'verifyServer',
			transport: 'Il existe trois options : UDP, TCP, et TLS. Les protocoles de paquets enregistrés sont UDP, TCP ou TLS (sécurité de couche de transport), ce dernier étant crypté.',
			natTraversal: 'Activer/désactiver le serveur STUN.',
			stunServer: 'Le serveur STUN permet aux clients NAT (comme un PC derrière un pare-feu) d’effectuer des appels VoIP quand le fournisseur de ce service est situé en dehors du réseau local (LAN).',
			voiceMail: 'Configurer le numéro de messagerie vocale du compte actuel.',
			anonymousCall: 'Activer/désactiver les appels anonymes.',
			onCode: 'Configurer le code de la fonctionnalité activant les appels anonymes, le téléphone permet de placer ce type d’appel en envoyant ledit code au serveur.',
			offCode: 'Configurer le code de la fonctionnalité désactivant les appels anonymes, le téléphone les désactive en envoyant ledit code au serveur.',
			anonymousCallRejection: 'Activer/désactiver le rejet d’appels anonymes',
			onCodeRejection: 'Configurer le code de la fonctionnalité activant le rejet d’appels anonymes, le téléphone active cette fonctionnalité en envoyant ledit code au serveur.',
			offCodeRejection: 'Configurer le code de la fonctionnalité désactivant le rejet d’appels anonymes, le téléphone désactive cette fonctionnalité en envoyant ledit code au serveur.',
			ringTones: 'Sélectionner la sonnerie du compte actuel.',
			make_call_without_register: 'Make and receive call without register'
		}
	},
	showText: {
		unRegistered: 'Échec de de l’enregistrement',
		registered: 'Enregistré'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'Compte',
		accountNumberOpt1: 'Compte 1',
		accountNumberOpt2: 'Compte 2',
		accountNumberOpt3: 'Compte 3',
		accountNumberOpt4: 'Compte 4',
		accountNumberOpt5: 'Compte 5',
		accountNumberOpt6: 'Compte 6',
		
		audioCodecs: 'Codecs audio',
		disableCodecs: 'Désactiver codecs',
		enableCodecs: 'Codecs activés',
		
		butConfirm: 'Confirmer',
		butCancel: 'Annuler'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'Compte',
		accountNumberOpt1: 'Compte 1',
		accountNumberOpt2: 'Compte 2',
		accountNumberOpt3: 'Compte 3',
		accountNumberOpt4: 'Compte 4',
		accountNumberOpt5: 'Compte 5',
		accountNumberOpt6: 'Compte 6',
		
		udpKeepAliveMsg: 'Message persistant UDP',
		disable: 'Désactiver',
		enable: 'Activer',
		udpKeepAliveInterval: 'Intervalle entre les messages de maintien de connexion UDP (en secondes)',
		
		loginExpires: 'Session expirée (en secondes)',
		localSipPort: 'Port SIP local',
		subscribePeriod: 'Période de l’abonnement (en secondes)',
		
		dtmfType: 'Type DTMF',
		dtmfTypeOpt0: 'Inband',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'Données utiles DTMF (en secondes)',
		reliableRetransmission: '100 transmission fiable',
		
		subscribeForMwi: 'S’abonner pour MWI',
		mwiSubscribePeriod: 'Période de l’abonnement MWI (en secondes)',
		
		useSessionTimer: 'Utiliser session temporisée',
		sessionTimer: 'Temporisation de la session (en secondes)',
		refresher: 'Actualisateur',
		
		useUserPhone: 'Utiliser utilisateur=téléphone',
		voiceEncryption: 'Voix sécurisée (SRTP)',
		off: 'Désactivé',
		on: 'Activé',
		ptime: 'PTime (ms)',
		
		blfListUri: 'URL Liste BLF',
		derectedCallPickupCode: 'Code prise d’appel sélective par indicatif',
		groupCallPickupCode: 'Code groupe de prise d’appel',
		
		sipRegRetryTimer: 'Temporisation essai souscription SIP',
		earlyMedia: 'Early Media',
		sipServerType: 'Type serveur SIP',
		sipServerTypeOpt0: 'Commun',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'BroadSoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Intercom Code',
		conferenceType: 'Conference Type',
		localConference: 'Local Conference',
		networkConference: 'Network Conference',
		conferenceCode: 'Conference Code',
		
		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
		
		tips: {
			udpKeepAliveMsg: 'Le téléphone envoie périodiquement un paquet UDP vers le port pour le maintenir actif et éviter que le serveur ne l’arrête.',
			loginExpires: 'Enregistrer le temps d’expiration, l’appareil doit être enregistré de nouveau dans le contexte de validité de chaque enregistrement, ou le serveur considèrera que la machine est déconnectée.',
			localSipPort: 'Le numéro de port local de l’appareil, utilisé pour envoyer et recevoir des paquets SIP.',
			subscribePeriod: 'Temps d’expiration de l’abonnement.',
			dtmfType: 'La méthode de transmission de signaux DTMF lors d’un appel est d’appuyer sur les touches numériques. Ces signaux comprennent INBAND, OUTOFBAND(RFC2833) et SIP INFO.',
			reliableRetransmission: 'Activer/désactiver la transmission PRACK.',
			subscribeForMwi: 'L’appareil envoie un paquet d’abonnement au serveur pour y souscrire un statut d’attente de message, il enverra également un paquet d’abonnement après l’enregistrement.',
			useSessionTimer: 'Activer/désactiver la fonction de rafraîchissement de la session. Quand cette fonction est activée, \'appareil envoi un paquet d’invitation pour rafraîchir la session pendant un appel.',
			sessionTimer: 'Intervalle de temps pour le rafraîchissement de la session.',
			refresher: 'Détermination du côté ou rafraîchir la session. UAC : Pour raffraîchir la session du côté client. UAS : Pour rafraîchir la session du côté serveur.',
			useUserPhone: 'Quand cette fonction est active, le message « utilisateur=téléphone » est présent dans le paquet d’invitation du message SIP.',
			voiceEncryption: 'Activer/désactiver le cryptage de la voix (SRTP).',
			ptime: 'Négocier l’intervalle de temps entre deux paquets RTP du codec actuellement utilisé.',
			blfListUri: 'Cette fonctionnalité est utilisée pour l’abonnement de BLF sur Broadsoft.',
			sipRegRetryTimer: 'Période de temps pendant laquelle les tentatives d’enregistrement se font après un échec.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Port Internet',
		IPv4Config: 'IPv4 Config',
		IPv6Config: 'IPv6 Config',
		dhcp: 'DHCP',
		staticIp: 'Adresse IP statique',
		ip: 'Adresse IP',
		subnetMask: 'Masque sous-réseau',
		IPv6Prefix: 'IPv6 Prefix(0~128)',

        StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		defaultGateway: 'Passerelle par défaut',
		primaryDNS: 'DNS primaire',
		secondaryDNS: 'DNS secondaire',
		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
		
		tips: {
			dhcp: 'Envoyer automatiquement une requête au serveur DHCP afin d’obtenir adresse IP, masque de sous-réseau, passerelle, DNS, etc.',
			staticIp: 'Configurer manuellement adresse IP, masque de sous-réseau, passerelle, DNS, etc.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Paramètre Wi-Fi',
		wifi_on_warning: '(Quand le Wi-Fi est activé, débranchez le câble réseau !)',
		wifi_enable: 'Wi-Fi',
		on: 'Activé',
		off: 'Désactivé',
		search_wifi: 'Rechercher le Wi-Fi',
		wifi_ssid: 'SSID actuel',
		wifi_key: 'Clé secrète',
		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
	},
	showText: {
		close_wifi: 'Fermeture du Wi-Fi...',
		open_wifi: 'Ouverture du Wi-Fi...',
		search_wifi: 'Recherche...',
		wifi_table_header: ['Répertoire', 'SSID', 'Signal', 'Sélectionner'],
		wifi_list_title: 'Liste Wi-Fi',
		submitting: 'Soumission...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Actif',
		disable: 'Désactiver',
		enable: 'Activer',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Priorité',
		vlanPc: 'PC',
		vlanPcActive: 'Actif',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Priorité',
		
		portLink: 'Liaison port',
		wanPortLink: 'Liaison port WAN',
		wanPortLinkOption0: 'Négociation automatique',
		wanPortLinkOption1: 'Full duplex 10Mbit/s',
		wanPortLinkOption2: 'Full duplex 100Mbit/s',
		wanPortLinkOption3: 'Half duplex 10Mbit/s',
		wanPortLinkOption4: 'Half duplex 100Mbit/s',
		wanPortLinkOption5: 'Half duplex 1000Mbps',
		wanPortLinkOption6: 'Full duplex 1000Mbps',
			
		pcPortLink: 'Liaison port PC',
		pcPortLinkOption0: 'Négociation automatique',
		pcPortLinkOption1: 'Full duplex 10Mbit/s',
		pcPortLinkOption2: 'Full duplex 100Mbit/s',
		pcPortLinkOption3: 'Half duplex 10Mbit/s',
		pcPortLinkOption4: 'Half duplex 100Mbit/s',
		
		slaccEnable: 'ICMPv6 Status',

		vpn: 'VPN',
		importFile: 'Upload VPN Config',
		importStr: 'Import',
		
		voiceQos: 'Qos Voix',
		sipQos: 'QoS SIP',
		
		localRtpPort: 'Port RTP local',
		maxRTPPort: 'Port RTP maximum',
		minRTPPort: 'Port RTP minimum',
		
		webServer: 'Serveur Web',
		httpPort: 'Port http',
		httpsPort: 'Port https',
		webServerType: 'Type',
		webServerTypeOption0: 'Désactivé',
		webServerTypeOption1: 'http uniquement',
		webServerTypeOption2: 'https uniquement',
		webServerTypeOption3: 'http et https',

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

		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
		
		tips: {
			lldp: 'LLDP transmits information as packets called LLDP Data Units (LLDPDUs). An LLDPDU consists of a set of Type-Length-Value (TLV) elements, each of which contains a particular type of information about the device or the port transmitting it.',
			cdp: 'CDP (Cisco Discovery Protocol) allows IP phones to receive and/or transmit device-related information from/to directly connected devices on the network that are also using the protocol, and store the information about other devices.',
			vlan: 'La configuration de VLAN utilisée pour un scénario spécifique, Et si vous le modifiez et souhaitez effectuer immédiatement l\'effet des modifications, vous devez le redémarrer manuellement.',
			portLink: 'Protocole de découverte de couche de liaison (LLDP).',
			vpn: 'La configuration de VPN utilisée pour un scénario spécifique.',
			voiceQos: 'Quand la capacité du réseau est insuffisante, la qualité de service peut donner en priorité la bande passante suffisante aux utilisateurs.',
			localRtpPort: 'Déterminer le port de transmission de la voix.',
			x_802_1x: 'It configures the 802.1x authentication method.',
			webServer: 'Définition du type et du port de l’accès Web.',
			slaccEnable: 'Enable/disable the IP phone to obtain the IPv6 network settings via SLAAC (Stateless Address Autoconfiguration) method.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Touche',
		type: 'Type',
		value: 'Valeur',
		label: 'Étiquette',
		account: 'Compte',
		ext: 'Extension',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'Touche DSS',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Ligne',
		keyTypeOpt2: 'Numéros abrégés',
		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Liste BLF',
		keyTypeOpt9: 'Prise d’appel sélective par indicatif',
		keyTypeOpt10: 'Groupe de prise d’appel',
		keyTypeOpt11: 'Parquer appel',
		keyTypeOpt12: 'Interphone',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conférence',
		keyTypeOpt15: 'Renvoi',
		keyTypeOpt16: 'Transfert',
		keyTypeOpt17: 'Garder',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Recomposer',
		keyTypeOpt20: 'Annuaire',
		keyTypeOpt21: 'Retour d’appel',
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
		
		accountNumberOpt1: 'Compte 1',
		accountNumberOpt2: 'Compte 2',
		accountNumberOpt3: 'Compte 3',
		accountNumberOpt4: 'Compte 4',
		accountNumberOpt5: 'Compte 5',
		accountNumberOpt6: 'Compte 6',
		accountNumberOpt8: 'Automatique',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirmer',
		butCancel: 'Annuler'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Touche',
		type: 'Type',
		value: 'Valeur',
		label: 'Étiquette',
		account: 'Compte',
		ext: 'Extension',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Line Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Ligne',
		keyTypeOpt2: 'Numéros abrégés',
		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Liste BLF',
		keyTypeOpt9: 'Prise d’appel sélective par indicatif',
		keyTypeOpt10: 'Groupe de prise d’appel',
		keyTypeOpt11: 'Parquer appel',
		keyTypeOpt12: 'Interphone',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conférence',
		keyTypeOpt15: 'Renvoi',
		keyTypeOpt16: 'Transfert',
		keyTypeOpt17: 'Garder',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Recomposer',
		keyTypeOpt20: 'Annuaire',
		keyTypeOpt21: 'Retour d’appel',
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
		
		accountNumberOpt1: 'Compte 1',
		accountNumberOpt2: 'Compte 2',
		accountNumberOpt3: 'Compte 3',
		accountNumberOpt4: 'Compte 4',
		accountNumberOpt5: 'Compte 5',
		accountNumberOpt6: 'Compte 6',
		accountNumberOpt8: 'Automatique',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirmer',
		butCancel: 'Annuler'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Touche',
		type: 'Type',
		value: 'Valeur',
		label: 'Étiquette',
		account: 'Compte',

		programKeys: ['Couper son', 'Garder', 'Recomposer', 
		              'Haut', 'Bas', 'Gauche', 'Droit', 'Annuler', 'OK', 
		              'Touchefonction1', 'Touchefonction2', 'Touchefonction3', 'Touchefonction4'],

		programKeys_A1x: ['Couper son', 'Garder', 'Recomposer', 
		              'Haut', 'Bas', 'Gauche', 'Droit', 'Annuler', 'OK', 
		              'Touchefonction1', 'Touchefonction2', 'Touchefonction3'],

		programKeys_A2x: ['Couper son', 'Garder', 'Recomposer', 
		              'Haut', 'Bas', 'Gauche', 'Droit', 'Annuler', 'OK', 
		              'Touchefonction1', 'Touchefonction2', 'Touchefonction3'],

		programKeys_CT11: ['Couper son', 
		              'Haut', 'Bas', 
		              'Touchefonction1', 'Touchefonction2', 'Touchefonction3', 'Touchefonction4'],
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Ligne',
		keyTypeOpt2: 'Numéros abrégés',

		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Liste BLF',
		keyTypeOpt9: 'Prise d’appel sélective par indicatif',
		keyTypeOpt10: 'Groupe de prise d’appel',
		keyTypeOpt11: 'Parquer appel',
		keyTypeOpt12: 'Interphone',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conférence',
		keyTypeOpt15: 'Renvoi',
		keyTypeOpt16: 'Transfert',
		keyTypeOpt17: 'Garder',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Recomposer',
		keyTypeOpt20: 'Annuaire',
		keyTypeOpt21: 'Retour d’appel',
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
		
		accountNumberOpt1: 'Compte 1',
		accountNumberOpt2: 'Compte 2',
		accountNumberOpt3: 'Compte 3',
		accountNumberOpt4: 'Compte 4',
		accountNumberOpt5: 'Compte 5',
		accountNumberOpt6: 'Compte 6',
		accountNumberOpt8: 'Automatique',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirmer',
		butCancel: 'Annuler'
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
		key: 'Touche',
		type: 'Type',
		value: 'Valeur',
		label: 'Étiquette',
		account: 'Compte',
		ext: 'Extension',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'Touche Ext',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Ligne',
		keyTypeOpt2: 'Numéros abrégés',
		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Liste BLF',
		keyTypeOpt9: 'Prise d’appel sélective par indicatif',
		keyTypeOpt10: 'Groupe de prise d’appel',
		keyTypeOpt11: 'Parquer appel',
		keyTypeOpt12: 'Interphone',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conférence',
		keyTypeOpt15: 'Renvoi',
		keyTypeOpt16: 'Transfert',
		keyTypeOpt17: 'Garder',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Recomposer',
		keyTypeOpt20: 'Annuaire',
		keyTypeOpt21: 'Retour d’appel',
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
		
		accountNumberOpt1: 'Compte 1',
		accountNumberOpt2: 'Compte 2',
		accountNumberOpt3: 'Compte 3',
		accountNumberOpt4: 'Compte 4',
		accountNumberOpt5: 'Compte 5',
		accountNumberOpt6: 'Compte 6',
		accountNumberOpt8: 'Automatique',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirmer',
		butCancel: 'Annuler'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'AET device ID which display in the status of linkable divice'
		}
},
extKeyBackHtml = {
	noLink: 'Aucun module d’extension connecté ! Connecter une ou plusieurs unités puis actualiser cette page.'	
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
		dhcpTime: 'Heure DHCP',
		disable: 'Désactiver',
		enable: 'Activer',
		auto: 'Automatique',
		timeZone: 'Fuseau horaire',
		primaryNtp: 'Serveur NTP primaire',
		secondaryNtp: 'Serveur NTP Secondaire',
		updateInterval: 'Intervalle entre les mises à jour (en secondes)',
		daylight: 'Heure d’été',
		fixedType: 'Type fixe',
		fixedTypeOpt0: 'Par date',
		fixedTypeOpt1: 'Par semaine',
		startMonth: 'Mois de début',
		January: 'Janvier',
		February: 'Février',
		March: 'Mars',
		April: 'Avril',
		May: 'Mai',
		June: 'Juin',
		July: 'Juillet',
		August: 'Août',
		September: 'Septembre',
		October: 'Octobre',
		November: 'Novembre',
		December: 'Décembre',
		startDate: 'Date de début',
		startHourDay: 'Heure de début de journée',
		startDayWeek: 'Jour de début de semaine',
		Sunday: 'Dimanche',
		Monday: 'Lundi',
		Tuesday: 'Mardi',
		Wednesday: 'Mercredi',
		Thursday: 'Jeudi',
		Friday: 'Vendredi',
		Saturday: 'Samedi',
		startWeekMonth: 'Semaine de début de mois',
		firstInMonth: 'Première du mois',
		secondInMonth: 'Deuxième du mois',
		thirdInMonth: 'Troisième du mois',
		fourthInMonth: 'Quatrième du mois',
		lastInMonth: 'Dernier du mois',
		stopMonth: 'Mois de fin',
		stopDate: 'Date de fin',
		stopHourDay: 'Heure de fin de journée',
		stopDayWeek: 'Jour de fin de semaine',
		stopWeekMonth: 'Semaine de fin de mois',
		offset: 'Décalage (minutes)',
		manualTime: 'Heure manuelle',
		dateYmd: 'Date',
		autoDate: 'Date produite',
		timeHms: 'Heure',
		autoTime: 'Heure produite',
		timeFormat: 'Format heure',
		timeFormatOpt0: '12 heures',
		timeFormatOpt1: '24 heures',
		dateFormat: 'Format date',
		backlightTime: 'Durée rétroéclairage',
		backlightTimeOpt0: 'Toujours allumé',
		backlightTimeOpt1: '1 min',
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
		backlightLevel: 'Niveau rétroéclairage',
		slaveBacklightLevel: 'Niveau rétroéclairage esclave',
		expandBacklightLevel: 'Niveau rétroéclairage étendu',
		slaveLcdContract: 'Contraste écran esclave',
		ringTones: 'Tonalités sonnerie',
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
		delWallpaper: 'Supprimer',
		uploadWallpaper: 'Upload',
		cancelWallpaper: 'Annuler',
		screensaver: 'Screensaver',
		
		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
		
		tips: {
			dhcpTime: 'Enables or disables the IP phone to update time with the offset time obtained from the DHCP server.',
			replaceRingTone: 'Recommended file format: 16-bit, wave; the file size should be less than 800 kB for the colour display phone, and less than 300 kB for the monochrome display phone.',
			timeZone: 'Sélectionner le fuseau horaire ici.',
			updateInterval: 'Configurer l’intervalle de temps entre chaque comparaison de l’heure locale de la machine avec celle du serveur.',
			daylight: 'Paramètres de l’heure d’été.',
			manualTime: 'Activer/désactiver le réglage manuel de l’heure.',
			timeFormat: 'Régler l’heure au format 12h ou 24h.',
			dateFormat: 'Réglage du format d’affichage de la date.',
			backlightTime: 'Réglage de la durée du rétroéclairage.',
			screensaver_timeout: 'Set Screensaver time.',
			backlightLevel: 'Ajustement de la luminosité du rétroéclairage du téléphone.',
			ringTones: 'Sélectionner une sonnerie.',
			pictureSize: 'Best resolution is 461x278 pixels and the size should be less than 500KBytes.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Désactiver',
		enable: 'Activer',
		off: 'Désactivé',
		on: 'Activé',
		forward: 'Renvoi',
		always: 'Toujours',
		busy: 'Occupé',
		noAnswer: 'Aucune réponse',
		afterRingTime: 'Après un nombre de sonneries (en secondes)',
		
		target: 'Cible',
		onCode: 'Code désactivation',
		offCode: 'Code activation',
		
		dnd: 'Ne pas déranger',
		dndOnCode: 'Code activation DND',
		dndOffCode: 'Code désactivation DND',
		authNum: 'Numéros autorisés (séparé par virgule)',
		
		generalInfo: 'Information générale',
		liveDialpad: 'Live Dialpad',
		interDigitTime: 'Intervalle de temps interchiffre (en secondes)',
		autoAnswer: 'Réponse automatique',
		autoAnswerDelay: 'Auto Answer Delay (sec)',
		ignoreMissedCall: 'Ignore Missed Call',
		callWaiting: 'Appel en attente',
		hotline: 'Téléassistance',
		hotlineTimeout: 'Temporisation de la téléassistance (0~180 en seconde)',
		keyAsSend: 'Touche comme Envoyer',
		dialNowTimeout: 'Temporisation de na numérotation directe (en seconde)',
		busyToneTimer: 'Temporisation de la tonalité occupée (en secondes)',
		returnCodeWhenRefuse: 'Code retour en cas de refus',
		returnCodeWhenDnd: 'Code retour en cas de DND',
		r404: '404 (Non disponible)',
		r480: '480 (Indisponible temporairement)',
		r486: '486 (Occupé ici)',
		rfc2543Hold: 'Mise en attente RFC 2543',
		useOutboundProxyInDialog: 'Utiliser proxy sortant dans le dialogue',
		loginTimeout: 'Temporisation identification(1~1000 minutes)',
		hidedtmf: 'Hide DTMF',
		multicastCodec: 'Multicast Codec',
		watchdog: 'Watch Dog',
		
		audioSettings: 'Réglages audio',
		callWaitingTone: 'Tonalité appel en attente',
		headset: 'Volume casque',
		handset: 'Volume combiné',
		handfree: 'Volume mains libres',
		ringer: 'Volume sonnerie',
		headsetSend: 'Volume d’envoi casque',
		handsetSend: 'Volume d’envoi combiné',
		handfreeSend: 'Volume d’envoi mains libres',
		ringerDeviceForHeadset: 'Dispositif de sonnerie pour casque',
		ringerDeviceForHeadsetOpt0: 'Utiliser haut-parleur',
		ringerDeviceForHeadsetOpt1: 'Utiliser casque',
		
		transferSettings: 'Réglages transfert',
		blindTransferOnHook: 'Transfert sans préavis sur mise en attente',
		attendedTransferOnHook: 'Transfert supervisé sur mise en attente',
		transferOnConHangUp: 'Transfert sur raccrocher en conférence',
		transferModeViaDsskey: 'Mode transfert par touche DSS',
		transferModeViaDsskeyOpt0: 'Nouvel appel',
		transferModeViaDsskeyOpt1: 'Transfert supervisé',
		transferModeViaDsskeyOpt2: 'Transfert sans préavis',
		
		callPickup: 'Prise d’appel',
		directCallPickup: 'Prise d’appel direct',
		directCallPickupCode: 'Code prise d’appel direct',
		groupCallPickup: 'Groupe de prise d’appel',
		groupCallPickupCode: 'Code groupe de prise d’appel',
		
		accept_sip_trust_server_only: 'Accept SIP Trust Server Only',
		recordUserId: 'Record User ID',
		extFunction: 'Ext Function',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: 'Conference hold when add new',

		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
		
		tips: {
			forward: 'Configurer le renvoi d’appel.',
			alwaysTarget: 'Définir le numéro cible souhaité pour le transfert d’appel.',
			alwaysOnCode: 'Code de fonctionnalité activant le renvoi de tous les appels entrants, le téléphone envoie directement ledit code pour renvoyer tous les appels entrants.',
			alwaysOffCode: 'Code de la fonctionnalité désactivant le renvoi de tous les appels entrants vers l’avant, le téléphone envoie directement ledit code pour cesser le renvoyer tous les appels entrants.',
			busyTarget: 'Définir le numéro cible souhaité pour le transfert d’appel.',
			busyOnCode: 'Code de la fonctionnalité activant le renvoi d’appel si occupé, le téléphone envoie directement ledit code pour renvoyer les appels si occupé.',
			busyOffCode: 'Code de la fonctionnalité désactivant le renvoi d’appel si occupé, le téléphone envoie directement ledit code pour cesser de renvoyer les appels si occupé.',
			afterRingTime: 'Temps d’attente pour le renvoi en cas de non-réponse.',
			noAnswerTarget: 'Définir le numéro cible souhaité pour le transfert d’appel.',
			noAnswerOnCode: 'Code de la fonctionnalité activant le renvoi d’appel en cas de non-réponse, le téléphone envoie directement ledit code pour renvoyer les appels en cas de non-réponse.',
			noAnswerOffCode: 'Code de la fonctionnalité désactivant le renvoi d’appel en cas de non-réponse, le téléphone envoie directement ledit code pour cesser de renvoyer les appels en cas de non-réponse.',
			
			dndOnCode: 'Code de la fonctionnalité activant le DND (ne pas déranger), le téléphone envoie directement ledit code pour ouvrir le DND.',
			dndOffCode: 'Code de la fonctionnalité désactivant le DND, le téléphone envoie directement ledit code pour fermer le DND.',
			
			liveDialpad: 'Activer/désactiver « composer automatiquement » sur l’interface utilisateur de numérotation.',
			interDigitTime: 'Composer automatiquement le délai pour les pavés de numérotation actifs.',
			autoAnswer: 'Activer/désactiver la réponse automatique.',
			autoAnswerDelay: 'It configures the delay time (in seconds) before the IP phone automatically answers an incoming call.',
			callWaiting: 'Occupé en attendant la commutation du nouvel appel entrant.',
			hotline: 'Régler le numéro de la téléassistance.',
			hotlineTimeout: 'Réglage du délai de la téléassistance.',
			keyAsSend: 'Régler les touches pour la fonctionnalité d’appel sortant.',
			dialNowTimeout: 'Intervalle pour l’appel direct.',
			busyToneTimer: 'Tonalité occupée à la fin d’un appel.',
			returnCodeWhenRefuse: 'Configurer le message du rejet d’appel.',
			returnCodeWhenDnd: 'Configurer le message pour le DND (ne pas déranger).',
			rfc2543Hold: 'Deux types de normes pour la mise en attente, l’assistance du serveur est nécessaire.',
			useOutboundProxyInDialog: 'Activer/désactiver le proxy sortant pour les conversations.',
			loginTimeout: 'It configures the timeout interval (in minutes) for web access authentication.',
			acceptSipTrustServerOnly: 'Enable/disable the IP phone to only accept the SIP message from the SIP and outbound proxy server.',

			callWaitingTone: 'Régler la tonalité pour lancer un nouvel appel pendant un appel (l’appel en attente est activé).',
			ringerDeviceForHeadset: 'Choix du canal pour la sonnerie d’appel.',

			blindTransferOnHook: 'Activer/désactiver le transfert aveugle avec le combiné raccroché.',
			attendedTransferOnHook: 'Activer/désactiver l’assistance de transfert et la semi-assistance de transfert avec le combiné raccroché.',
			transferOnConHangUp: 'Activer/désactiver le transfert vers deux autres parties quand l’initiateur de la conférence raccroche.'
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
		fmVer: 'Version micrologiciel',
		hdVer: 'Version matérielle',
		
		resetToFactory: 'Revenir aux réglages d’usine',
		reboot: 'Redémarrer',		
		
		upgradeHeader: 'Actualiser le micrologiciel',
		selectFw: 'Choix micrologiciel',
		upgrade: 'Actualiser',
		
		tips: {
			upgradeHeader: 'Sélectionner la dernière version de micrologiciel rendue disponible par les fournisseurs pour l’actualisation.'
		}
	},
	commonText: {
		resetConfirm: 'Retour aux réglages d’usine ?',
		resetSuccess: 'Retour aux réglages d’usine réussi. L’appareil va redémarrer automatiquement.',
		resetFail: 'Échec de retour aux réglages d’usine, réessayez !',
		
		rebootConfirm: 'Redémarrer ?',
		
		uploadFilePrompt: 'Pour télécharger fichier :',
		upgradeMsg: 'Ne pas éteindre !',
		upgradeText: 'Mise à niveau en cours...',
		
		upgradeFail: 'Échec mise à niveau, réessayer !'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'Fonction Pcap',
		start: 'Début',
		stop: 'Fin',
		exportStr: 'Exporter',
		
		debug: 'Déboguer'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Provision. auto',
		PnPEnable: 'PnP Active',
		DHCPEnable: 'DHCP Active',
		provisioningServer: 'Serveur d’approvisionnement',
		userName: 'Nom utilisateur',
		password: 'Mot de passe',
		commonAESKey: 'Clef AES spécifique',
		MACAESKey: 'Clef AES par téléphone',
		checkNewConfig: 'Vérifier la nouvelle configuration',
		off: 'Désactivé',
		on: 'Activé',
		repeatedly: 'À plusieurs reprises',
		interval: 'Intervalle (en minutes)',
		weekly: 'Hebdomadaire',
		time: 'Heure',
		dayOfWeek: 'Jour de la semaine',
		
		
		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
		
		tips: {
			PnPEnable: 'The request to the server to obtain a support URL for upgrade',
			DHCPEnable: 'To obtain a support URL for upgrade from DHCP server',
			provisioningServer: 'Configurer l’adresse du serveur d’approvisionnement.',
			password: 'Mot de passe du serveur',
			checkNewConfig: 'Actif : Vérifier la configuration sur le serveur après le démarrage de l’appareil</br> Inactif : Ne pas vérifier la configuration sur le serveur après le démarrage de l’appareil.'
		}
	},
	showText: {
		weekly:  ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Importer/exporter la configuration',
		importFile: 'Importer un fichier',
		importStr: 'Importer',
		exportStr: 'Exporter',
		exportUserData: 'Exporter les données utilisateur',

		exportImportConfig: 'Import/Export CFG File',
		
		exportSyslog: 'Exporter le journal système',
		logLocation: 'Emplacement du journal',
		logLocationOpt0: 'Local',
		logLocationOpt1: 'Serveur', 
		serverName: 'Nom du serveur',
		logLevel: 'Niveau de journal',
		logOpt0: 'Erreur',
		logOpt1: 'fatale',
		logOpt2: 'Avertissement',
		logOpt3: 'Info',
		logOpt4: 'Déboguer',
		exportStr2: 'Exporter',
		
		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
		
		tips: {
			exportImportConfig: 'The imported or exported file must have an auto provision file format. The exported file includes the modified configuration only, so it will be empty if no changes were made.',
			importExportCfg: 'Cliquez sur Exporter pour exporter la configuration de téléphone actuelle ; cliquez sur Importer, la configuration sera importée sur le téléphone actuel et celui-ci redémarrera.',
			exportSyslog: 'Si le type est Local, le syslog sera exporté directement ; si le type est Serveur, le syslog sera exporté vers le serveur spécifié.'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Action URI allow IP List',
		remoteControl:'Remote Control',
		cstaControl: 'CSTA Control',
		disable: 'Désactiver',
		enable: 'Activer',
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
		replaceRule: 'Règle de remplac.',
		dialNow: 'Numérot. imméd.',
		areaCode: 'Code postal',
		blockOut: 'Bloquer'
	},
	replaceRuleTitle: ['Répertoire', 'Numéro', 'Remplacer', 'Compte'],
	dialNowsTitle: ['Répertoire', 'Règle numérotation directe', 'Compte'],
	replaceRuleForm: {
		num: 'Numéro',
		replace: 'Remplacer',
		account: 'Compte',
		add: 'Ajouter',
		edit: 'Modifier',
		del : 'Supprimer',
		save: 'Enregistrer'
	},
	dialNowsForm: {
		rule: 'Règle numérotation directe',
		account: 'Compte',
		add: 'Ajouter',
		edit: 'Modifier',
		del : 'Supprimer',
		save: 'Enregistrer'
	},
	form3: {
		code: 'Code',
		minLen: 'Longueur minimale',
		maxLen: 'Longueur maximale',
		areaCodeAccount: 'Compte',
		
		butConfirm: 'Confirmer',
		butCancel: 'Annuler'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Numéro masqué',
		account: 'Compte',
		
		butConfirm: 'Confirmer',
		butCancel: 'Annuler'
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
		disable: 'Désactiver',
		enable: 'Activer',
		
		echoCancellation: 'Annulation d’écho',
		echoCanceller: 'Annuleur d’écho',
		echoCancellerOpt0: 'Niveau faible',
		echoCancellerOpt1: 'Niveau moyen',
		echoCancellerOpt2: 'Niveau élevé',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Tampon de gigue',
		type: 'Type',
		typeOpt0: 'Fixé',
		typeOpt1: 'Progressif',
		minDelay: 'Délai minimum',
		maxDelay: 'Délai maximum',
		normalDelay: 'Délai normal',
		
		butConfirm: 'Confirmer',
		butCancel: 'Annuler',
		
		tips: {
			echoCancellation: 'Paramètres de l’annulation d’écho.',
			echoCanceller: 'Sélectionner l’annuleur d’écho.',
			vad: 'Détection d’activité vocale.',
			cng: 'Générateur de bruit de confort.',
			jitterBuffer: 'Ceci est une zone de données partagée, les paquets de voix et de données peuvent être collectés, stockés et envoyés vers le processeur de sonorité uniforme.'
		}
	}
},

phoneTrustedCertificatesHtml = {
    indexDiv: {
        index: 'Index',
        issued_to: 'Issued To',
        issued_by: 'Issued By',
        expiration: 'Expiration',
        delete_select: 'Delete'
    },

    editDiv: {

	},
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

		disable: 'Désactiver',
		enable: 'Activer',

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

		butConfirm: 'Confirmer',
		butCancel: 'Annuler',

		tips: {
			emergency_call: 'Used for calling out emergency number when it is set as keypad lock'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: 'Désactiver',
		enable: 'Activer',

		tr069: 'TR069',
		tr069_enable: 'activer TR069',
		serveraddress: 'URL ACS',
		serverport: 'Port',
		username: 'nom d\'utilisateur ACS',
		password: 'Mot de passe ACS',
		periodic_inform_enable: 'activer information périodique',
		periodic_inform_interval: 'Periodic Inform Interval (seconds)',
		connection_request_username: 'Demande connexion nom d\'utilisateur',
		connection_request_password:'Demande connexion mot de passe',

		butConfirm: 'Confirmer',
		butCancel: 'Annuler',

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
		passwdModify: 'Modifier le mot de passe',
		userType: 'Type d\'utilisateur',
		currentPasswd: 'Mot de passe actuel',
		newPasswd: 'Nouveau mot de passe',
		confirmPasswd: 'Confirmez le mot de passe',
		
		butConfirm: 'Confirmer',
		butCancel: 'Cancel',
		
		tips: {
			userType: 'Sélectionnez votre type. Si vous vous connectez en tant qu\'utilisateur, vous ne pouvez changer que votre propre mot de passe. Si vous vous connectez en tant qu\'administrateur, vous pouvez modifier à la fois le mot de passe de l\'utilisateur et celui de l\'administrateur.'
		}
	},
	showText: {
		pwdNoMatch: 'Les deux mots de passe saisis ne correspondent pas',
		modifyFailed: 'Échec de la modification du mot de passe, veuillez réessayer !'
	}
},
contactsHtml = {
	mytabMenu: ['Contact', 'Liste noire'],
	tableHeader: ['Répertoire', 'Nom', 'Numéro bureau', 'Numéro mobile', 'Autre numéro', 'Compte'],
	buttonDiv: {
		save: 'Enregistrer',
		del: 'Supprimer',
		moveToBlack: 'Ajouter dans liste noire',
		moveToWhite: 'Ajouter dans contacts'
	},
	editDiv: {
		contacts: 'Contact',
		name: 'Nom',
		officeNum: 'Numéro bureau',
		mobileNum: 'Numéro mobile',
		otherNum: 'Autre numéro',
		account: 'Compte',
		accountOpt8: 'Automatique',
		accountOpt1: 'Compte 1',
		accountOpt2: 'Compte 2',
		accountOpt3: 'Compte 3',
		accountOpt4: 'Compte 4',
		accountOpt5: 'Compte 5',
		accountOpt6: 'Compte 6',
		ring: 'Sonnerie',
		ringOpts: ['Automatique', 'Ring1.wav', 'Ring2.wav', 'Ring3.wav', 'Ring4.wav', 
		           'Ring5.wav', 'Ring6.wav', 'Ring7.wav', 'Ring8.wav', 'Ring9.wav', 'Ring10.wav'],
		photo: 'Photo',
		defaultPhoto: 'Default',
		add: 'Ajouter',
		deletePhoto: 'Supprimer',
		uploadPhoto: 'Upload Photo',
		pictureSize: 'Best resolution is 100x135 pixels and the size should be less than 250KBytes.',
		edit: 'Modifier',
		search: 'Recherche',
		
		importAndExport: 'Importer et exporter contacts locaux',
		importFile: 'Importer contacts locaux',
		importStr: 'Importer',
		exportStr: 'Exporter'
	},
	
	shwoText: {
		delConfirm: 'Vraiment supprimer contacts choisis ?',
		delConfirm1: 'Note : photo du contact non récupérable après enregistrement !', 
		selectEmpty: 'Choisir au moins un enregistrement.',
		selectTooMuch: 'Trop d\'enregistrement choisi !',
		nameEmpty: 'Le nom ne peut pas être vide !',
		nameExist: 'Le nom existe déjà !',
		phonebookFull: 'Only less than 400 items in phonebook list!',
		blacklistFull: 'Only less than 50 items in blacklist!',
		contentEmpty: 'Contenu doit être renseigné !',
		notFind: 'Contact recherché absent.'
	}
},

multicastHtml = {
	form1: {
		multicastListening: 'Multicast Listening',
		pagingBarge: 'Paging Barge',
		ignoreDND: 'ignorer DND',
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
	mytabMenu: ['Liste des appels sortants ', 'Liste des apels manqués', 'Liste des appels reçus', 'Liste des appels transférés'],
	tableHeader: ['Répertoire', 'Heure et date', 'Duration', 'Identité locale', 'Nom', 'Numéro de téléphone']
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
					phoneDebugHtml: phoneDebugHtml,
					phoneTrustedCertificatesHtml: phoneTrustedCertificatesHtml,
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
