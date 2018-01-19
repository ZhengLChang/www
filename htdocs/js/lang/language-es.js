//公共的验证信息
var commonValidMsg = {
	missingMsg: 'Se requiere este campo',
	invalidIpMsg: 'IP inválida'
},
uploadCommon = {
	uploadFilePrompt: 'Esto es para cargar el archivo:',
	uploadMsg: '¡Por favor no lo apague!',
	uploadText: 'Importando, por favor, espere...',
	uploadSuccess: '¡Importación exitosa!',
	uploadFail: '¡La importación falló, por favor, inténtelo de nuevo!'
},
alertMsg = {
	titlePrompt: 'Rápido',
	titleConfirm: 'Confirmar',
	noChange: '¡Sin cambio!',
	invalidVal: '¡Valor inválido!',
	saveSuccess: '¡Almacenamiento exitoso!',
	enabledOptionsEmpty: '¡Los códecs activos no pueden estar vacíos!',
	codecsConflict: 'iLBC_13_3 y iLBC_15_2 no pueden aplicarse de forma simultánea!',
	emptyContent: '¡El contenido está vacío!',
	invalidDTMF: '¡DTMF inválido!',
	webServicesDisable: '¡Los servicios web han sido desactivados!',
	features: '¡El Código Apagado no puede estar vacío con el Código Encendidocolocado!',
	invalidAccountList: '¡Lista de cuenta inválida!',
	dialPlanMsg1: 'Por favor, seleccione por lo menos un registro.',
	voiceError1: 'El retraso máx. debe ser superior al retraso mín.',
	voiceError2: 'El retraso normal debe estar entre el retraso mín. y el retraso máx.',
	fileIsEmpty: '¡El archivo está vacío!',
	upgradeFileFormateErr: 'Please choose a upgrade file(*.fw)!',
	openvpnFile: 'Please choose a OpenVPN file(*.tar/*.TAR)!',
	wallpaperFormatError: 'Filename contain Latin characters only and  PNG/JPG/BMP format images',
	systemFileCannotDelete: 'it only support delete the custom photos!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: '¡Por favor no lo apague!',
			rebootText: 'Reiniciando, por favor, espere...'
		},
		showProgress: {
			progressTitle: 'Rápido'
		}
	},
	ErrorInfo: {
		networkError: '¡Error de red, por favor, comprobar!',
		webServerError: '¡Error de servidor web, por favor, inténtelo de nuevo!',
		unknownError: '¡Error desconocido!',
		dataNoChanged: 'No Change!',
		Error_409: 'The file with this name already exists.',
		Error_413: 'The file is too large.',

		phoneBusyError: 'Talking, Please wait...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: '¡La salida falló, por favor, inténtelo de nuevo!'
	},
	pluginInit: {
		ok: 'Aceptar',
		cancel: 'Cancelar'
	}
},
status401Html = {
	errorInfo1 : 'Sin permiso para acceder a la interfaz web.',
	errorInfo2 : 'Contacte al servicio de soporte o reintente en 3 minutos.',
	errorInfo3: 'HTTP 401 sin permiso'
},
//index.html
indexHtml={
	top:{
		logout: 'Salir',
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
		basic: 'Básico',
		account: 'Cuenta',
		network: 'Red',
		dSSKey: 'Clave DSS',
		phone: 'Tel.',
		contacts: 'Contactos',
		security: 'Seguridad'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'Sitio web',
		products: 'Productos',
		support: 'Ayuda',
		download: 'Descarga',
		contactus: 'Contáctenos',
		atcomRights: '©2018 ATCOM Todos los Derechos Reservados'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'Estado',
		sWizard: 'Asistente',
		//Account
		aBasic: 'Básico',
		aCodecs: 'Códecs',
		aAdvanced: 'Avanzado',
		//NetWork
		nBasic: 'Básico',
		nWifi: 'Wi-Fi',
		nAdvanced: 'Avanzado',
		//DSS key
		dMemory: 'Clave de memoria',
		dLink: 'Clave de línea',
		dProgrammable: 'Clave programable',
		dExt: 'Clave EXT',
		dAetAdv: 'EXT Settings',

		//Phone
		pDNDAndForward: 'Forward&DND',
		pPrefetence: 'Preferencia',
		pFeatures: 'Funciones',
		pUpgrade: 'Actualizar',
		pAuto: 'Autoprovisión',
		pConfig: 'Configuración',
		pRemoteControl: 'Remote Control',
		pActionUrl: 'Action URL',
		pDialPlan: 'Plan de marcado',
		pVoice: 'Voz',
		pRing: 'Alert Info',
		pTones: 'Tonos',
		pSms: 'SMS',
		pAction: 'Acción URL',
		pSoftkey: 'Teclas a programar',
		pPhoneLock: 'Phone Lock',
		pSecurity: 'Seguridad',
		pPhoneTr069: 'TR069',
		pDebug: 'Depuración',
		//Contacts
		cContacts: 'Contactos',
		cXMLPhonebook: 'Guía telef. remota',
		cPhoneCall: 'Info. de llamadas',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'Registro de llamadas',
		//Security
		sPassword: 'Contraseña',
		sStrusted: 'Certificados de confianza',
		sServer: 'Certificados de servidor'
	}
},
statusHtml = {
	version: {
		verTitle: 'Versión',
		fwVer: 'Versión de Firmware',
		hwVer: 'Versión de Hardware',
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
		internetPort: 'Tipo de puerto de internet',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP estática',
		ip: 'Dirección IP',
		subnetMask: 'Máscara de subred',
		gatewag: 'Puerta de enlace',
		primaryDNS: 'DNS Primario',
		secondaryDNS: 'DNS Secundario',
		wiredMac: 'Wired MAC Address',
		WIFIMac: 'WiFi MAC Address',
		vpnStatus: 'Estado de VPN',
		vpnStatusOpt0: 'Conectando',
		vpnStatusOpt1: 'Desactivar',
		vpnStatusOpt2: 'Conección_fallida',
		vpnStatusOpt3: 'Conectado',
		vpnIp: 'IP VPN'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Tipo de puerto de internet',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP estática',
		ip: 'Dirección IP',
		networkPrefix: 'Network Prefix',
		gatewag: 'Puerta de enlace',
		primaryDNS: 'DNS Primario',
		secondaryDNS: 'DNS Secundario'
	},
	tips: {
		netConfigTip: 'Displays the IP address mode of the device.',
		verTip: 'Muestra la versión actual de firmware y hardware del dispositivo.',
		netTip: 'Muestra los detalles de la configuración de red del teléfono.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Network',
		InternetPort: 'Puerto de Internet',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: 'Dirección IP estática',

		staticIpSettings: 'Ajustes/IP fija',
		ip: 'Dirección IP',
		subnetMask: 'Máscara de subred',
		defaultGateway: 'Puerta de enlace predeterminada',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: 'DNS Primario',
		secondaryDNS: 'DNS Secundario',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6 Prefix',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'Ajustes/SIP',
		accountActive: 'Cuenta Activa',
		disable: 'Desactivar',
		enable: 'Activar',
		labelName: 'Etiqueta',
		displayName: 'Mostrar nombre',
		registerName: 'Registrar nombre',
		userName: 'Nombre del usuario',
		password: 'Contraseña',
		
		sipServer: 'Servidor SIP',
		sipServerPort: 'Puerto',
		
		back: 'Atrás',
		next: 'Siguiente',
		
		tips: {
			dhcp: 'Haga un pedido al servidor DHCP automáticamente para obtener una dirección IP, máscara de subred, puerta de enlace, DNS, etc.',
			staticIp: 'Configure la dirección IP, máscara de subred, puerta de enlace, DNS, etc. de forma manual.',
			labelName: 'El nombre se muestra en el LCD del dispositivo actual.',
			displayName: 'El nombre del teléfono local se muestra en el otro teléfono cuando se hace una llamada.',
			registerName: 'Registro de nombre brindado por el proveedor de internet.',
			userName: 'Nombre del usuario brindado por el proveedor de internet.',
			password: 'Contraseña de cuenta brindada por el proveedor de internet.',
			sipServer: 'Dirección de servidor SIP brindada por el proveedor de internet.'
		}
	},
	common: {
		finish: 'Finalizar',
		next: 'Siguiente'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'Cuenta',
		accountNumberOpt1: 'Cuenta 1',
		accountNumberOpt2: 'Cuenta 2',
		accountNumberOpt3: 'Cuenta 3',
		accountNumberOpt4: 'Cuenta 4',
		accountNumberOpt5: 'Cuenta 5',
		accountNumberOpt6: 'Cuenta 6',
		
		registerStatus: 'Estado de registro',
		
		accountActive: 'Cuenta Activa',
		disable: 'Desactivar',
		enable: 'Activar',
		labelName: 'Etiqueta',
		displayName: 'Mostrar nombre',
		registerName: 'Registrar nombre',
		userName: 'Nombre del usuario',
		password: 'Contraseña',
		
		sipServer: 'Servidor SIP',
		sipServerPort: 'Puerto',
		redundancy_proxy: 'Servidor de redundancia SIP',

		enableOutboundProxyServer: 'Activar servidor proxy de salida',
		outboundProxyServer: 'Servidor proxy de salida',
		outboundProxyServerPort: 'Puerto',
		make_call_without_register: 'Enable Peer to Peer',
		
		verifyServer: 'Verify server',
		transport: 'Transportar',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'NAT transversal',
		TLSVersion: 'TLS Version',
		natTraversalOpt1: 'STUN',
		stunServer: 'Servidor STUN',
		port: 'Puerto',
		
		voiceMail: 'Correo de voz',
		anonymousCall: 'Llamada anónima',
		off: 'Apagado',
		on: 'Encendido',
		onCode: 'Código de encendido',
		offCode: 'Código de apagado',
		anonymousCallRejection: 'Rechazar llamada anónima',
		ringTones: 'Tonos de llamada',
		ringTonesOpt0: 'Común',
		ringTonesOpt1: 'Tono1.wav',
		ringTonesOpt2: 'Tono2.wav',
		ringTonesOpt3: 'Tono3.wav',
		ringTonesOpt4: 'Tono4.wav',
		ringTonesOpt5: 'Tono5.wav',
		ringTonesOpt6: 'Tono6.wav',
		ringTonesOpt7: 'Tono7.wav',
		ringTonesOpt8: 'Tono8.wav',
		ringTonesOpt9: 'Tono9.wav',
		ringTonesOpt10: 'Tono10.wav',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			labelName: 'El nombre se muestra en el LCD del dispositivo actual.',
			displayName: 'El nombre del teléfono local se muestra en el otro teléfono cuando se hace una llamada.',
			registerName: 'Registro de nombre brindado por el proveedor de internet.',
			userName: 'Nombre del usuario brindado por el proveedor de internet.',
			password: 'Contraseña de cuenta brindada por el proveedor de internet.',
			sipServer: 'Dirección de servidor SIP brindada por el proveedor de internet.',
			enableOutboundProxyServer: 'Se utiliza para procesar las señales y para ayudar a que los flujos de datos multimedia pasen a través del cortafuegos cuando existe un cortauegos o NAT.',
			redundancy_proxy: 'An Backup SIP server failover',
			outboundProxyServer: 'Servidor proxy de salida.',
			verifyServer: 'verifyServer',
			transport: 'Existen tres opciones UDP, TCP, TLS. El protocolo de paquete registrado es UDP, TCP o TLS, TLS (Seguridad de la Capa de Transporte) está codificado.',
			natTraversal: 'Activar/Desactivar servidor STUN.',
			stunServer: 'El servidor STUN permite que todos los clientes de la terminal NAT (como una PC atrás de un cortafuegos) logren hacer llamadas telefónicas con el servicio VOIP ubicado fuera de la LAN.',
			voiceMail: 'Colocar un número de correo de voz de la cuenta actual.',
			anonymousCall: 'Activar/Desactivar llamadas anónimas.',
			onCode: 'Coloque el código de función para activar una llamada anónima, el teléfono activará la llamada anónima al enviar el código de función al servidor.',
			offCode: 'Coloque el código de función para desactivar una llamada anónima, el teléfono desactivará la llamada anónima al enviar el código de función al servidor.',
			anonymousCallRejection: 'Activar/Desactivar rechazo de llamadas anónimas.',
			onCodeRejection: 'Coloque el código de función para activar el rechazo de llamada anónima, el teléfono activará el rechazo de llamada anónima al enviar el código de función al servidor.',
			offCodeRejection: 'Coloque el código de función para desactivar el rechazo de llamada anónima, el teléfono desactivará el rechazo de llamada anónima al enviar el código de función al servidor.',
			ringTones: 'Establezca un tipo de tono para la cuenta actual.',
			make_call_without_register: 'Make and receive call without register'
		}
	},
	showText: {
		unRegistered: 'El registro falló',
		registered: 'Registrado'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'Cuenta',
		accountNumberOpt1: 'Cuenta 1',
		accountNumberOpt2: 'Cuenta 2',
		accountNumberOpt3: 'Cuenta 3',
		accountNumberOpt4: 'Cuenta 4',
		accountNumberOpt5: 'Cuenta 5',
		accountNumberOpt6: 'Cuenta 6',
		
		audioCodecs: 'Códecs de audio',
		disableCodecs: 'Códecs desactivados',
		enableCodecs: 'Códecs activados',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'Cuenta',
		accountNumberOpt1: 'Cuenta 1',
		accountNumberOpt2: 'Cuenta 2',
		accountNumberOpt3: 'Cuenta 3',
		accountNumberOpt4: 'Cuenta 4',
		accountNumberOpt5: 'Cuenta 5',
		accountNumberOpt6: 'Cuenta 6',
		
		udpKeepAliveMsg: 'Mensaje Keep-Alive UDP',
		disable: 'Desactivar',
		enable: 'Activar',
		udpKeepAliveInterval: 'Intervalo Keep Alive UDP (segundos)',
		
		loginExpires: 'Acceso finalizado (segundos)',
		localSipPort: 'Puerto Sip Local',
		subscribePeriod: 'Período de suscripción (segundos)',
		
		dtmfType: 'Tipo DTMF',
		dtmfTypeOpt0: 'En banda',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'Carga útil DTMF (segundos)',
		reliableRetransmission: 'Retransmisión confiable 100',
		
		subscribeForMwi: 'Suscripción por MWI',
		mwiSubscribePeriod: 'Período de suscripción MWI (segundos)',
		
		useSessionTimer: 'Temporizador de uso de sesión',
		sessionTimer: 'Temporizador de sesión (segundos)',
		refresher: 'Actualizador',
		
		useUserPhone: 'Uso usuario=teléfono',
		voiceEncryption: 'Codificación de voz (SRTP)',
		off: 'Apagado',
		on: 'Encendido',
		ptime: 'PTime(ms)',
		
		blfListUri: 'Lista BLF URI',
		derectedCallPickupCode: 'Código de recepción de llamada directas',
		groupCallPickupCode: 'Código de recepción de llamadas grupales',
		
		sipRegRetryTimer: 'Temporizador de intento de registro SIP',
		earlyMedia: 'Medios de comunicación anticipados',
		sipServerType: 'Tipo de servidor SIP',
		sipServerTypeOpt0: 'Común',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'BroadSoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Intercom Code',
		conferenceType: 'Conference Type',
		localConference: 'Local Conference',
		networkConference: 'Network Conference',
		conferenceCode: 'Conference Code',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			udpKeepAliveMsg: 'El teléfono envía periódicamente un paquete UDP para mantener el puerto activo y evitar que el servidor apague el puerto.',
			loginExpires: 'Registre el tiempo de finalización, el dispositivo debe estar registrado otra vez con la validez de cada registro o el servidor tomará el dispositivo como fuera de línea.',
			localSipPort: 'El número de puerto del dispositivo local se utiliza para enviar y recibir paquetes SIP.',
			subscribePeriod: 'Tiempo de finalización de la suscripción',
			dtmfType: 'La forma de enviar DTMF al presionar los números durante una llamada, incluyendo INBAND, OUTOFBAND (RFC2833) y SIP INFO.',
			reliableRetransmission: 'Activar/Desactivar la transmisión PRACK.',
			subscribeForMwi: 'El dispositivo envía un paquete de Suscripción al servidor para suscribir el Mensaje en espera, el dispositivo enviará un paquete de Suscripción al servidor después del registro.',
			useSessionTimer: 'Activar/Desactivar actualización de función de sesión. El dispositivo enviará un paquete de Invitación para actualizar la sesión durante una llamada si está activada.',
			sessionTimer: 'El tiempo de intervalo de la actualización de sesión.',
			refresher: 'De qué lado se actualiza la sesión. Uac: Para actualizar la sesión del lado del cliente. Uas: Para actualizar la sesión del lado del servidor.',
			useUserPhone: 'Si está activado, aparecerá este letrero "usuario=teléfono" en el paquete de Invitación del mensaje SIP.',
			voiceEncryption: 'Activar/Desactivar Codificación de Voz (SRTP).',
			ptime: 'Negociar el tiempo del intervalo entre dos paquetes RTP del códec utilizado actualmente.',
			blfListUri: 'Si es usado para suscribir BLF en Broadsoft.',
			sipRegRetryTimer: 'El período de tiempo de intento de registro después de un registro fallido.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Puerto de Internet',
		IPv4Config: 'IPv4 Config',
		IPv6Config: 'IPv6 Config',
		dhcp: 'DHCP',
		staticIp: 'Dirección IP estática',
		ip: 'Dirección IP',
		subnetMask: 'Máscara de subred',
		defaultGateway: 'Puerta de enlace predeterminada',
		IPv6Prefix: 'IPv6 Prefix(0~128)',

        StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		primaryDNS: 'DNS Primario',
		secondaryDNS: 'DNS Secundario',
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			dhcp: 'Haga un pedido al servidor DHCP automáticamente para obtener una dirección IP, máscara de subred, puerta de enlace, DNS, etc.',
			staticIp: 'Configure la dirección IP, máscara de subred, puerta de enlace, DNS, etc. de forma manual.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Configuración de Wi-Fi',
		wifi_on_warning: '(¡Cuando el wifi está encendido, desconecte el cable de red!)',
		wifi_enable: 'Wi-Fi',
		on: 'Encendido',
		off: 'Apagado',
		search_wifi: 'Buscar Wi-Fi',
		wifi_ssid: 'SSID actual',
		wifi_key: 'Clave secreta',
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
	},
	showText: {
		close_wifi: 'Cerrando Wi-Fi...',
		open_wifi: 'Abriendo Wi-Fi...',
		search_wifi: 'Buscando...',
		wifi_table_header: ['Índice', 'SSID', 'Señal', 'Seleccionar'],
		wifi_list_title: 'Listado de Wi-Fi',
		submitting: 'Enviando...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Activa',
		disable: 'Desactivar',
		enable: 'Activar',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Prioridad',
		vlanPc: 'PC',
		vlanPcActive: 'Activa',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Prioridad',
		
		portLink: 'Conexión al puerto',
		wanPortLink: 'Conexión al puerto WAN',
		wanPortLinkOption0: 'Autonegociar',
		wanPortLinkOption1: 'Dúplex completo 10Mbps',
		wanPortLinkOption2: 'Dúplex completo 100Mbps',
		wanPortLinkOption3: 'Semidúplex 10Mbps',
		wanPortLinkOption4: 'Semidúplex 100Mbps',
		wanPortLinkOption5: 'Half duplex 1000Mbps',
		wanPortLinkOption6: 'Full duplex 1000Mbps',
			
		pcPortLink: 'Conexión de puerto de PC',
		pcPortLinkOption0: 'Autonegociar',
		pcPortLinkOption1: 'Dúplex completo 10Mbps',
		pcPortLinkOption2: 'Dúplex completo 100Mbps',
		pcPortLinkOption3: 'Semidúplex 10Mbps',
		pcPortLinkOption4: 'Semidúplex 100Mbps',
		
		slaccEnable: 'ICMPv6 Status',

		vpn: 'VPN',
		importFile: 'Upload VPN Config',
		importStr: 'Import',

		voiceQos: 'QoS de voz',
		sipQos: 'QoS de SIP',
		
		localRtpPort: 'Puerto RTP Local',
		maxRTPPort: 'Puerto RTP Máximo',
		minRTPPort: 'Puerto RTP Mínimo',
		
		webServer: 'Servidor web',
		httpPort: 'Puerto Http',
		httpsPort: 'Puerto Https',
		webServerType: 'Tipo',
		webServerTypeOption0: 'Desactivado',
		webServerTypeOption1: 'http único',
		webServerTypeOption2: 'https únicos',
		webServerTypeOption3: 'http&https',

        span_to_pc: 'Span al PC',
        sys_span_to_pc_port: 'Span al puerto PC',

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

		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			lldp: 'LLDP transmits information as packets called LLDP Data Units (LLDPDUs). An LLDPDU consists of a set of Type-Length-Value (TLV) elements, each of which contains a particular type of information about the device or the port transmitting it.',
			cdp: 'CDP (Cisco Discovery Protocol) allows IP phones to receive and/or transmit device-related information from/to directly connected devices on the network that are also using the protocol, and store the information about other devices.',
			vlan: 'La configuración de VLAN, utilizada para configuración específica, Y si lo cambia y desea que el cambio sea válido inmediatamente, debe reiniciarlo manualmente.',
			portLink: 'Connection rate for WAN and PC ports.',
			vpn: 'La configuración de VPN, utilizada para configuración específica.',
			voiceQos: 'Cuando hay falta de capacidad de red, la calidad de servicio puede proveer a los usuarios el valor que se puede pasar preferencialmente.',
			localRtpPort: 'Definir el puerto de transmisión de voz.',
			x_802_1x: 'It configures the 802.1x authentication method.',
			webServer: 'La definición de tipo de acceso web y puerto.',
			slaccEnable: 'Enable/disable the IP phone to obtain the IPv6 network settings via SLAAC (Stateless Address Autoconfiguration) method.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Clave',
		type: 'Tipo',
		value: 'Valor',
		label: 'Etiqueta',
		account: 'Cuenta',
		ext: 'Extensión',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'Clave DSS',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Línea',
		keyTypeOpt2: 'Marcación rápida',
		keyTypeOpt4: 'Mensaje',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Recepción directa',
		keyTypeOpt10: 'Recepción grupal',
		keyTypeOpt11: 'Llamadas en espera',
		keyTypeOpt12: 'Intercomunicador',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferencia',
		keyTypeOpt15: 'Enviar',
		keyTypeOpt16: 'Transferir',
		keyTypeOpt17: 'En espera',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Rellamada',
		keyTypeOpt20: 'Directorio',
		keyTypeOpt21: 'Llamada devuelta',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/A',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Cuenta 1',
		accountNumberOpt2: 'Cuenta 2',
		accountNumberOpt3: 'Cuenta 3',
		accountNumberOpt4: 'Cuenta 4',
		accountNumberOpt5: 'Cuenta 5',
		accountNumberOpt6: 'Cuenta 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Clave',
		type: 'Tipo',
		value: 'Valor',
		label: 'Etiqueta',
		account: 'Cuenta',
		ext: 'Extensión',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Line Key',
		
		keyTypeOpt0: 'N/A',
		keyTypeOpt1: 'Línea',
		keyTypeOpt2: 'Marcación rápida',
		keyTypeOpt4: 'Mensaje',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Recepción directa',
		keyTypeOpt10: 'Recepción grupal',
		keyTypeOpt11: 'Llamadas en espera',
		keyTypeOpt12: 'Intercomunicador',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferencia',
		keyTypeOpt15: 'Enviar',
		keyTypeOpt16: 'Transferir',
		keyTypeOpt17: 'En espera',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Rellamada',
		keyTypeOpt20: 'Directorio',
		keyTypeOpt21: 'Llamada devuelta',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/A',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Cuenta 1',
		accountNumberOpt2: 'Cuenta 2',
		accountNumberOpt3: 'Cuenta 3',
		accountNumberOpt4: 'Cuenta 4',
		accountNumberOpt5: 'Cuenta 5',
		accountNumberOpt6: 'Cuenta 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Clave',
		type: 'Tipo',
		value: 'Valor',
		label: 'Etiqueta',
		account: 'Cuenta',
		
		programKeys: ['Mudo', 'En espera', 'Rellamada', 
		              'Arriba', 'Abajo', 'Izquierda', 'Derecha', 'Cancelar', 'Aceptar', 
		              'Tecla Programable1', 'Tecla Programable2', 'Tecla Programable3', 'Tecla Programable4'],

        programKeys_A1x: ['Mudo', 'En espera', 'Rellamada', 
		              'Arriba', 'Abajo', 'Izquierda', 'Derecha', 'Cancelar', 'Aceptar', 
		              'Tecla Programable1', 'Tecla Programable2', 'Tecla Programable3'],

        programKeys_A2x: ['Mudo', 'En espera', 'Rellamada', 
		              'Arriba', 'Abajo', 'Izquierda', 'Derecha', 'Cancelar', 'Aceptar', 
		              'Tecla Programable1', 'Tecla Programable2', 'Tecla Programable3'],
 
		programKeys_CT11: ['Mudo', 
		              'Arriba', 'Abajo',
		              'Tecla Programable1', 'Tecla Programable2', 'Tecla Programable3', 'Tecla Programable4'],
		keyTypeOpt0: 'N/A',
		keyTypeOpt1: 'Línea',
		keyTypeOpt2: 'Marcación rápida',

		keyTypeOpt4: 'Mensaje',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Recepción directa',
		keyTypeOpt10: 'Recepción grupal',
		keyTypeOpt11: 'Llamadas en espera',
		keyTypeOpt12: 'Intercomunicador',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferencia',
		keyTypeOpt15: 'Enviar',
		keyTypeOpt16: 'Transferir',
		keyTypeOpt17: 'En espera',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Rellamada',
		keyTypeOpt20: 'Directorio',
		keyTypeOpt21: 'Llamada devuelta',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/A',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'Status',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Cuenta 1',
		accountNumberOpt2: 'Cuenta 2',
		accountNumberOpt3: 'Cuenta 3',
		accountNumberOpt4: 'Cuenta 4',
		accountNumberOpt5: 'Cuenta 5',
		accountNumberOpt6: 'Cuenta 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
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
		key: 'Clave',
		type: 'Tipo',
		value: 'Valor',
		label: 'Etiqueta',
		account: 'Cuenta',
		ext: 'Extensión',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'Clave Ext',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Línea',
		keyTypeOpt2: 'Marcación rápida',
		keyTypeOpt4: 'Mensaje',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista BLF',
		keyTypeOpt9: 'Recepción directa',
		keyTypeOpt10: 'Recepción grupal',
		keyTypeOpt11: 'Llamadas en espera',
		keyTypeOpt12: 'Intercomunicador',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferencia',
		keyTypeOpt15: 'Enviar',
		keyTypeOpt16: 'Transferir',
		keyTypeOpt17: 'En espera',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Rellamada',
		keyTypeOpt20: 'Directorio',
		keyTypeOpt21: 'Llamada devuelta',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/A',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		
		accountNumberOpt1: 'Cuenta 1',
		accountNumberOpt2: 'Cuenta 2',
		accountNumberOpt3: 'Cuenta 3',
		accountNumberOpt4: 'Cuenta 4',
		accountNumberOpt5: 'Cuenta 5',
		accountNumberOpt6: 'Cuenta 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'AET device ID which display in the status of linkable divice'
		}
},
extKeyBackHtml = {
	noLink: '¡No hay módulo de expansión conectado! Por favor, conecte una o más unidades, después actualice esta página.'	
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
		dhcpTime: 'Tiempo DHCP',
		disable: 'Desactivar',
		enable: 'Activar',
		auto: 'Automático',
		timeZone: 'Zona horaria',
		primaryNtp: 'Servidor NTP Primario',
		secondaryNtp: 'Servidor NTP Secundario',
		updateInterval: 'Actualice intervalo (segundos)',
		daylight: 'Luz del día',
		fixedType: 'Tipo fijo',
		fixedTypeOpt0: 'Por fecha',
		fixedTypeOpt1: 'Por semana',
		startMonth: 'Mes de inicio',
		January: 'Enero',
		February: 'Febrero',
		March: 'Marzo',
		April: 'Abril',
		May: 'Mayo',
		June: 'Junio',
		July: 'Julio',
		August: 'Agosto',
		September: 'Septiembre',
		October: 'Octubre',
		November: 'Noviembre',
		December: 'Diciembre',
		startDate: 'Fecha de inicio',
		startHourDay: 'Hora del día de inicio',
		startDayWeek: 'Día de inicio de la semana',
		Sunday: 'Domingo',
		Monday: 'Lunes',
		Tuesday: 'Martes',
		Wednesday: 'Miércoles',
		Thursday: 'Jueves',
		Friday: 'Viernes',
		Saturday: 'Sábado',
		startWeekMonth: 'Semana de inicio del mes',
		firstInMonth: 'Primera del mes',
		secondInMonth: 'Segunda del mes',
		thirdInMonth: 'Tercera del mes',
		fourthInMonth: 'Cuarta del mes',
		lastInMonth: 'Última del mes',
		stopMonth: 'Mes de finalización',
		stopDate: 'Fecha de finalización',
		stopHourDay: 'Hora de finalización del día',
		stopDayWeek: 'Día de finalización de la semana',
		stopWeekMonth: 'Semana de finalización del mes',
		offset: 'Compensación (minutos)',
		manualTime: 'Tiempo manual',
		dateYmd: 'Fecha',
		autoDate: 'Fecha de producción',
		timeHms: 'Hora',
		autoTime: 'Hora de producción',
		timeFormat: 'Formato de tiempo',
		timeFormatOpt0: '12 horas',
		timeFormatOpt1: '24 horas',
		dateFormat: 'Formato de fecha',
		backlightTime: 'Tiempo de luz de fondo',
		backlightTimeOpt0: 'Siempre encendido',
		backlightTimeOpt1: '1 minuto',
		backlightTimeOpt2: '2 minutos',
		backlightTimeOpt3: '5 minutos',
		backlightTimeOpt4: '10 minutos',
		backlightTimeOpt5: '30 minutos',
		screensaver_timeout: 'Screensaver Time',
		screensaver_timeoutOpt0: 'off',
		screensaver_timeoutOpt1: '1 minuto',
		screensaver_timeoutOpt2: '2 minuto',
		screensaver_timeoutOpt3: '5 minuto',
		screensaver_timeoutOpt4: '10 minuto',
		screensaver_timeoutOpt5: '30 minuto',
		backlightLevel: 'Nivel de luz de fondo',
		slaveBacklightLevel: 'Nivel de luz de fondo esclavo',
		expandBacklightLevel: 'Expandir el nivel de luz de fondo',
		slaveLcdContract: 'Contraste LCD esclavo',
		ringTones: 'Tonos de llamada',
		ringTonesOpt1: 'Tono1.wav',
		ringTonesOpt2: 'Tono2.wav',
		ringTonesOpt3: 'Tono3.wav',
		ringTonesOpt4: 'Tono4.wav',
		ringTonesOpt5: 'Tono5.wav',
		ringTonesOpt6: 'Tono6.wav',
		ringTonesOpt7: 'Tono7.wav',
		ringTonesOpt8: 'Tono8.wav',
		ringTonesOpt9: 'Tono9.wav',
		ringTonesOpt10: 'Tono10.wav',
		replaceRingTone: 'Replace Ring Tone',
		wallpaper: 'Wallpaper',
		delWallpaper: 'Borrar',
		uploadWallpaper: 'Upload',
		cancelWallpaper: 'Cancelar',
		screensaver: 'Screensaver',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			dhcpTime: 'Enables or disables the IP phone to update time with the offset time obtained from the DHCP server.',
			replaceRingTone: 'Recommended file format: 16-bit, wave; the file size should be less than 800 kB for the colour display phone, and less than 300 kB for the monochrome display phone.',
			timeZone: 'Seleccione su zona horaria ahí.',
			updateInterval: 'Configure el intervalo de tiemo para revisar el tiempo del aparato local con el servidor.',
			daylight: 'Ajustes de tiempo para ahorrar luz del día',
			manualTime: 'Activar/Desactivar la configuración de tiempo manual',
			timeFormat: 'Configure la hora como 12 horas o 24 horas.',
			dateFormat: 'Configure el formato de visualización de la fecha.',
			backlightTime: 'Configure el tiempo de luz de fondo.',
			screensaver_timeout: 'Set Screensaver time.',
			backlightLevel: 'Ajuste la luz de fondo del teléfono.',
			ringTones: 'Ajustes de tipo de tonos del teléfono',
			pictureSize: 'Best resolution is 461x278 pixels and the size should be less than 500KBytes.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Desactivar',
		enable: 'Activar',
		off: 'Apagado',
		on: 'Encendido',
		forward: 'Enviar',
		always: 'Siempre',
		busy: 'Ocupado',
		noAnswer: 'Sin respuesta',
		afterRingTime: 'Tiempo después del tono (segundos)',
		
		target: 'Objetivo',
		onCode: 'Código de encendido',
		offCode: 'Código de apagado',
		
		dnd: 'No molestar',
		dndOnCode: 'Código de encencido DND',
		dndOffCode: 'Códido de apagado DND',
		authNum: 'Números autorizados (separados por coma)',
		
		generalInfo: 'Información General',
		liveDialpad: 'Teclado del teléfono en directo',
		interDigitTime: 'Tiempo de intervalo de marcación (segundos)',
		autoAnswer: 'Auto respuesta',
		autoAnswerDelay: 'Auto Answer Delay (sec)',
		ignoreMissedCall: 'Ignore Missed Call',
		callWaiting: 'Llamada en espera',
		hotline: 'Línea directa',
		hotlineTimeout: 'Tiempo en espera de línea directa (0~180 segundos)',
		keyAsSend: 'Tecla como enviar',
		dialNowTimeout: 'Marcar ahora tiempo en espera (segundos)',
		busyToneTimer: 'Temporizador de tono ocupado (segundos)',
		returnCodeWhenRefuse: 'Código de devolución cuando se rechaza',
		returnCodeWhenDnd: 'Código de devolución cuando hay DND',
		r404: '404 (No encontrado)',
		r480: '480 (No disponible por el momento)',
		r486: '486 (Ocupado aquí)',
		rfc2543Hold: 'RFC 2543 en espera',
		useOutboundProxyInDialog: 'Utilice proxy de salida en diálogo',
		loginTimeout: 'Tiempo de espera de acceso(1~1000 minutes)',
		hidedtmf: 'Hide DTMF',
		multicastCodec: 'Multicast Codec',
		watchdog: 'Watch Dog',
		
		audioSettings: 'Ajustes de audio',
		callWaitingTone: 'Tono de llamada en espera',
		headset: 'Volumen de los auriculares',
		handset: 'Volumen del teléfono',
		handfree: 'Volumen de manos libres',
		ringer: 'Volumen de llamada',
		headsetSend: 'Volumen de habla de los auriculares',
		handsetSend: 'Volumen de habla del teléfono',
		handfreeSend: 'Volumen de habla de manos libres',
		ringerDeviceForHeadset: 'Dispositivo de timbre para auriculares',
		ringerDeviceForHeadsetOpt0: 'Utilizar bocinas',
		ringerDeviceForHeadsetOpt1: 'Utilizar auriculares',
		
		transferSettings: 'Ajustes de transferencia',
		blindTransferOnHook: 'Llamada transferida en espera',
		attendedTransferOnHook: 'Transferencia atendida en espera',
		transferOnConHangUp: 'Transferencia en conferencia colgada',
		transferModeViaDsskey: 'Modo de transferencia vía clave DSS',
		transferModeViaDsskeyOpt0: 'Llamada nueva',
		transferModeViaDsskeyOpt1: 'Transferencia atendida',
		transferModeViaDsskeyOpt2: 'Llamada transferida',
		
		callPickup: 'Recepción de llamadas',
		directCallPickup: 'Recepción de llamada directa',
		directCallPickupCode: 'Código de recepción de llamada directa',
		groupCallPickup: 'Recepción de llamada grupal',
		groupCallPickupCode: 'Código de recepción de llamadas grupales',
		
		accept_sip_trust_server_only: 'Accept SIP Trust Server Only',
		recordUserId: 'Record User ID',
		extFunction: 'Ext Function',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: 'Conference hold when add new',

		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			forward: 'Establecer transferencia de llamada',
			alwaysTarget: 'Número objetivo para transferencia.',
			alwaysOnCode: 'El código de función para activar que todas las llamadas entrantes se envién, el teléfono enviará un código de función para hacer que todas las llamadas entrantes se envíen.',
			alwaysOffCode: 'El código de función para desactivar que todas las llamdas entrantes se reenvíen, el teléfono enviará el código de función directamente para no permitir que todas las llamadas entrantes se reenvíen.',
			busyTarget: 'Número objetivo para transferencia.',
			busyOnCode: 'El código de función para permitir que las llamadas ocupadas se reenvíen, el teléfono enviará el código de función directamente para hacer que una llamada ocupada se reenvíe.',
			busyOffCode: 'El código de función para desactivar que las llamadas ocupadas se reenvíen, el teléfono enviará el código de función directamente para no permitir que una llamada ocupada se reenvíe.',
			afterRingTime: 'Tiempo de espera para envío sin respuesta.',
			noAnswerTarget: 'Número objetivo para transferencia.',
			noAnswerOnCode: 'El código de función para permitir que la llamada sin respuesta se reenvíe, el teléfono enviará el código de función directamente para permitir que las llamadas sin respuesta se reenvíen.',
			noAnswerOffCode: 'El código de función para desactivar que la llamada sin respuesta se reenvíe, el teléfono enviará el código de función directamente para no permitir que las llamadas sin respuesta se reenvíen.',
			
			dndOnCode: 'El código de función para activar DND, el teléfono enviará el código de función directamente para abrir DND.',
			dndOffCode: 'El código de función para desactivar DND, el teléfono enviará el código de función directamente para cerrar DND.',
			
			liveDialpad: 'Activar/Desactivar "marcación automática" en la interfaz de marcación del usuario.',
			interDigitTime: 'Automáticamente marca el tiempo de demora para el teclado en directo.',
			autoAnswer: 'Activar/Desactivar auto respuesta',
			autoAnswerDelay: 'It configures the delay time (in seconds) before the IP phone automatically answers an incoming call.',
			callWaiting: 'Ocupado esperando por los cambios de una llamada entrante nueva.',
			hotline: 'Establecer número de línea directa.',
			hotlineTimeout: 'Establecer tiempo para demora de llamada directa.',
			keyAsSend: 'Coloque las teclas como una función de salida de llamada.',
			dialNowTimeout: 'Intervalo para marcación ahora.',
			busyToneTimer: 'Tono ocupado después de que se termina la llamada.',
			returnCodeWhenRefuse: 'Establezca mensaje de respuesta para rechazo de llamada.',
			returnCodeWhenDnd: 'Establezca mensaje de respuesta para No molestar.',
			rfc2543Hold: 'Dos clases de estándares para Espera, la ayuda del servidor es necesaria.',
			useOutboundProxyInDialog: 'Activar/Desactivar proxy de salida en la conversación.',
			loginTimeout: 'It configures the timeout interval (in minutes) for web access authentication.',
			acceptSipTrustServerOnly: 'Enable/disable the IP phone to only accept the SIP message from the SIP and outbound proxy server.',

			callWaitingTone: 'Establecer tono para recibir una llamada nueva sobre una llamada (llamada en espera aparece encendido).',
			ringerDeviceForHeadset: 'Opción de canal del tono de llamada.',

			blindTransferOnHook: 'Activar/Desactivar llamada transferida a través de en espera.',
			attendedTransferOnHook: 'Activar/Desactivar Atender transferencia y semi atender trasferencia con En espera.',
			transferOnConHangUp: 'Activar/Desactivar para transferir a otras dos partes mientras que la parte que inició la conferencia cuelga.'
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
		ver: 'Versión',
		fmVer: 'Versión de Firmware',
		hdVer: 'Versión de Hardware',
		
		resetToFactory: 'Reestablecer la configuración original',
		reboot: 'Reiniciar',		
		
		upgradeHeader: 'Actualizar Firmware',
		selectFw: 'Seleccionar Firmware',
		upgrade: 'Actualizar',
		
		tips: {
			upgradeHeader: 'Seleccionar la versión actualizada de firmware liberada por los proveedores para actualizar.'
		}
	},
	commonText: {
		resetConfirm: '¿Desea reestablecer la configuración original?',
		resetSuccess: 'Reestablecimiento de la configuración original exitosa. El dispositivo se reiniciará automáticamente.',
		resetFail: '¡El reestablecimiento de la configuración original falló, por favor, inténtelo de nuevo!',
		
		rebootConfirm: '¿Desea reiniciarlo?',
		
		uploadFilePrompt: 'Esto es para cargar el archivo:',
		upgradeMsg: '¡Por favor no lo apague!',
		upgradeText: 'Actualizando, por favor, espere...',
		
		upgradeFail: '¡La actualización falló, por favor, inténtelo de nuevo!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'Función Pcap',
		start: 'Inicio',
		stop: 'Detener',
		exportStr: 'Exportar',
		
		debug: 'Depuración'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Autoprovisión',
		PnPEnable: 'PnP Active',
		DHCPEnable: 'DHCP Active',
		provisioningServer: 'Serv. de suministro',
		userName: 'Nombre del usuario',
		password: 'Contraseña',
		commonAESKey: 'Common AES Key',
		MACAESKey: 'MAC-Oriented AES Key',
		checkNewConfig: 'Ver. nueva conf.',
		off: 'Apagado',
		on: 'Encendido',
		repeatedly: 'Repetidam.',
		interval: 'Intérvalo (min)',
		weekly: 'Semanal',
		time: 'Hora',
		dayOfWeek: 'Día de semana',
		
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			PnPEnable: 'The request to the server to obtain a support URL for upgrade',
			DHCPEnable: 'To obtain a support URL for upgrade from DHCP server',
			provisioningServer: 'Actualizar dirección de servidor',
			password: 'Contraseña/servidor',
			checkNewConfig: 'El modo de verificar nueva config. del servidor'
		}
	},
	showText: {
		weekly:  ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Configuración Importar/Exportar',
		importFile: 'Importar archivo',
		importStr: 'Importar',
		exportStr: 'Exportar',
		exportUserData: 'Información de exportación del usuario',

		exportImportConfig: 'Import/Export CFG File',
		
		exportSyslog: 'Registro de sistema de exportación',
		logLocation: 'Ubicación de registro',
		logLocationOpt0: 'Local',
		logLocationOpt1: 'Servidor', 
		serverName: 'Nombre del servidor',
		logLevel: 'Nivel de registro',
		logOpt0: 'Fatal',
		logOpt1: 'Error',
		logOpt2: 'Aviso',
		logOpt3: 'Info',
		logOpt4: 'Depuración',
		exportStr2: 'Exportar',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			exportImportConfig: 'The imported or exported file must have an auto provision file format. The exported file includes the modified configuration only, so it will be empty if no changes were made.',
			importExportCfg: 'Haga clic sobre Exportar para exportar la configuración actual del teléfono, escoja el archivo de configuración a importar, haga clic sobre importar, esto importará la configuración al teléfono acual y lo reiniciará.',
			exportSyslog: 'Si el tipo es Local, éste exportará el syslog directamente, si el tipo es servidor, éste exportará el syslog al servidor especificado.'
		}
	}
},

phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Action URI allow IP List',
		remoteControl:'Remote Control',
		cstaControl: 'CSTA Control',
		disable: 'Desactivar',
		enable: 'Activar',
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
		replaceRule: 'Regla de reemplazo',
		dialNow: 'Marcar ahora',
		areaCode: 'Código de área',
		blockOut: 'Bloquear'
	},
	replaceRuleTitle: ['Índice', 'Número', 'Reemplazar', 'Cuenta'],
	dialNowsTitle: ['Índice', 'Regla de Marcación', 'Cuenta'],
	replaceRuleForm: {
		num: 'Número',
		replace: 'Reemplazar',
		account: 'Cuenta',
		add: 'Añadir',
		edit: 'Editar',
		del : 'Borrar',
		save: 'Guardar'
	},
	dialNowsForm: {
		rule: 'Regla de Marcación',
		account: 'Cuenta',
		add: 'Añadir',
		edit: 'Editar',
		del : 'Borrar',
		save: 'Guardar'
	},
	form3: {
		code: 'Código',
		minLen: 'Tiempo mínimo de duración',
		maxLen: 'Tiempo máximo de duración',
		areaCodeAccount: 'Cuenta',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Bloquear número',
		account: 'Cuenta',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
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
		disable: 'Desactivar',
		enable: 'Activar',
		
		echoCancellation: 'Cancelación de eco',
		echoCanceller: 'Cancelador de eco',
		echoCancellerOpt0: 'Nivel bajo',
		echoCancellerOpt1: 'Nivel medio',
		echoCancellerOpt2: 'Nivel alto',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Jitter Buffer',
		type: 'Tipo',
		typeOpt0: 'Arreglado',
		typeOpt1: 'Adaptable',
		minDelay: 'Retraso mínimo',
		maxDelay: 'Retraso máximo',
		normalDelay: 'Retraso normal',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			echoCancellation: 'Ajustes de cancelación de eco',
			echoCanceller: 'Activar/Desactivar cancelador de eco',
			vad: 'Detección de actividad de voz',
			cng: 'Generación de ruido de comfort.',
			jitterBuffer: 'Esta es el área de datos compartidos, la voz y los paquetes de información pueden ser recolectados, almacenados y enviados al procesador de sonido uniforme.'
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

		disable: 'Desactivar',
		enable: 'Activar',

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

		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',

		tips: {
			emergency_call: 'Used for calling out emergency number when it is set as keypad lock'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: 'Desactivar',
		enable: 'Activar',

		tr069: 'TR069',
		tr069_enable: 'Habilitar TR069',
		serveraddress: 'URL ACS',
		serverport: 'Port',
		username: 'Nombre de usuario ACS',
		password: 'Contraseña ACS',
		periodic_inform_enable: 'Habilitar informe periódico',
		periodic_inform_interval: 'Intervalo de la info periódica (segundos)',
		connection_request_username: 'ID para solicitud de conexión',
		connection_request_password:'Contraseña de solicitud de conexión',

		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',

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
		passwdModify: 'Modificar contraseña',
		userType: 'Tipo de usuario',
		currentPasswd: 'Contraseña actual',
		newPasswd: 'Contraseña nueva',
		confirmPasswd: 'Confirmar contraseña',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancel',
		
		tips: {
			userType: 'Seleccione su tipo Si se registra como usuario, solamente puede cambiar su propia contraseña. Si se registra como un administrador, puede modificar ambas: la contraseña del usuario y la del administrador.'
		}
	},
	showText: {
		pwdNoMatch: 'Las dos constraseñas que ingresó no coinciden',
		modifyFailed: '¡La modificación de contraseña falló, por favor, inténtelo de nuevo!'
	}
},
contactsHtml = {
	mytabMenu: ['Contactos', 'Lista negra'],
	tableHeader: ['Índice', 'Nombre', 'Número de la oficina', 'Número de teléfono móvil', 'Otro número', 'Cuenta'],
	buttonDiv: {
		save: 'Guardar',
		del: 'Delete',
		moveToBlack: 'Mover a lista negra',
		moveToWhite: 'Mover a contactos'
	},
	editDiv: {
		contacts: 'Contactos',
		name: 'Nombre',
		officeNum: 'Número de la oficina',
		mobileNum: 'Número de teléfono móvil',
		otherNum: 'Otro número',
		account: 'Cuenta',
		accountOpt8: 'Auto',
		accountOpt1: 'Cuenta 1',
		accountOpt2: 'Cuenta 2',
		accountOpt3: 'Cuenta 3',
		accountOpt4: 'Cuenta 4',
		accountOpt5: 'Cuenta 5',
		accountOpt6: 'Cuenta 6',
		ring: 'Sonido',
		ringOpts: ['Auto', 'Tono1.wav', 'Tono2.wav', 'Tono3.wav', 'Tono4.wav', 
		           'Tono5.wav', 'Tono6.wav', 'Tono7.wav', 'Tono8.wav', 'Tono9.wav', 'Tono10.wav'],
		photo: 'Foto',
		defaultPhoto: 'Default',
		add: 'Añadir',
		deletePhoto: 'Delete',
		uploadPhoto: 'Upload Photo',
		pictureSize: 'Best resolution is 100x135 pixels and the size should be less than 250KBytes.',
		edit: 'Editar',
		search: 'Buscar',
		
		importAndExport: 'Importar y Exportar los contactos locales',
		importFile: 'Importar los contactos locales',
		importStr: 'Importar',
		exportStr: 'Exportar'
	},
	
	shwoText: {
		delConfirm: '¿Está seguro de que desea borrar los contactos seleccionados?',
		delConfirm1: 'Nota: ¡La foto de contacto no será recuperada después de guardar!', 
		selectEmpty: 'Por favor, seleccione por lo menos un registro.',
		selectTooMuch: '¡El registro seleccionado es mucho!',
		nameEmpty: '¡El nombre para mostrar no puede estar vacío!',
		nameExist: '¡El nombre para mostrar ya existe!',
		phonebookFull: 'Only less than 400 items in phonebook list!',
		blacklistFull: 'Only less than 50 items in blacklist!',
		contentEmpty: '¡El contenido no debería estar vacío!',
		notFind: 'No se encuentra el contrato especificado.'
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
	mytabMenu: ['Lista de llamadas realizadas', 'Lista de llamadas perdidas', 'Lista de llamadas recibidas', 'Lista de llamadas enviadas'],
	tableHeader: ['Índice', 'Fecha hora', 'Duration', 'Identidad local', 'Nombre', 'Número de teléfono']
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
