//公共的验证信息
var commonValidMsg = {
	missingMsg: 'Este campo é obrigatório',
	invalidIpMsg: 'IP inválido'
},
uploadCommon = {
	uploadFilePrompt: 'Isto é para carregar arquivo:',
	uploadMsg: 'Por favor não desligue a energia!',
	uploadText: 'Importando, por favor aguarde...',
	uploadSuccess: 'Êxito na importação!',
	uploadFail: 'Falha na importação, tente outra vez!'
},
alertMsg = {
	titlePrompt: 'Alerta',
	titleConfirm: 'Confirmar',
	noChange: 'Sem alteração!',
	invalidVal: 'Valor inválido!',
	saveSuccess: 'Salvo com êxito!',
	enabledOptionsEmpty: 'Codecs habilitados não podem ficar vazios!',
	codecsConflict: 'iLBC_13_3 e iLBC_15_2 não podem ser aplicados simultaneamente!',
	emptyContent: 'Conteúdo está vazio!',
	invalidDTMF: 'DTMF inválido!',
	webServicesDisable: 'Serviços da web foram desabilitados!',
	features: 'Off Code não pode ficar vazio quando On Code está definido!',
	invalidAccountList: 'Lista de conta inválida!',
	dialPlanMsg1: 'Por favor, selecione no mínimo um registro.',
	voiceError1: 'O atraso máx. tem que ser maior do que o atraso mín.',
	voiceError2: 'O atraso normal tem que estar entre o atraso mín. e o máx.',
	fileIsEmpty: 'Arquivo está vazio!',
	upgradeFileFormateErr: 'Please choose a upgrade file(*.fw)!',
	openvpnFile: 'Please choose a OpenVPN file(*.tar/*.TAR)!',
	wallpaperFormatError: 'Filename contain Latin characters only and  PNG/JPG/BMP format images',
	systemFileCannotDelete: 'it only support delete the custom photos!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'Por favor não desligue a energia!',
			rebootText: 'Reiniciando, por favor aguarde...'
		},
		showProgress: {
			progressTitle: 'Alerta'
		}
	},
	ErrorInfo: {
		networkError: 'Erro de rede, verificar!',
		webServerError: 'Erro de servidor da web, tente outra vez!',
		unknownError: 'Erro desconhecido!',
		dataNoChanged: 'No Change!',
		Error_409: 'The file with this name already exists.',
		Error_413: 'The file is too large.',

		phoneBusyError: 'Talking, Please wait...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: 'Falha ao Sair, tente outra vez!'
	},
	pluginInit: {
		ok: 'Ok',
		cancel: 'Cancelar'
	}
},
status401Html = {
	errorInfo1 : 'Você não está autorizado em acessar a interface web',
	errorInfo2 : 'Contate a equipe de suporte ou tente outra vez em 3 minutos.',
	errorInfo3: 'HTTP 401 Não autoriz.'
},
//index.html
indexHtml={
	top:{
		logout: 'Sair',
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
		account: 'Conta',
		network: 'Rede',
		dSSKey: 'Chave DSS',
		phone: 'Telefone',
		contacts: 'Contatos',
		security: 'Segurança'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'Site',
		products: 'Produtos',
		support: 'Suporte',
		download: 'Download',
		contactus: 'Contato',
		atcomRights: '©2018 ATCOM Todos os Direitos Reservados.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'Estado',
		sWizard: 'Assistente',
		//Account
		aBasic: 'Básico',
		aCodecs: 'Codecs',
		aAdvanced: 'Avançado',
		//NetWork
		nBasic: 'Básico',
		nWifi: 'WiFi',
		nAdvanced: 'Avançado',
		//DSS key
		dMemory: 'Chave de memória',
		dLink: 'Chave de linha',
		dProgrammable: 'Chave programável',
		dExt: 'Chave EXT',
		dAetAdv: 'EXT Settings',

		//Phone
		pDNDAndForward: 'Forward&DND',
		pPrefetence: 'Preferência',
		pFeatures: 'Recursos',
		pUpgrade: 'Atualização',
		pAuto: 'Auto provisão',
		pConfig: 'Configuração',
		pRemoteControl: 'Remote Control',
		pActionUrl: 'Action URL',
		pDialPlan: 'Plano de discagem',
		pVoice: 'Voz',
		pRing: 'Alert Info',
		pTones: 'Tons',
		pSms: 'SMS',
		pAction: 'URL de ação',
		pSoftkey: 'Layout tecl. funç.',
		pPhoneLock: 'Phone Lock',
		pSecurity: 'Segurança',
		pPhoneTr069: 'TR069',
		pDebug: 'Debug',
		//Contacts
		cContacts: 'Contatos',
		cXMLPhonebook: 'Lista tel. rem.',
		cPhoneCall: 'Inform. telefonema',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'Registro de chamadas',
		//Security
		sPassword: 'Senha',
		sStrusted: 'Certificados confiáveis',
		sServer: 'Certificados de servidor'
	}
},
statusHtml = {
	version: {
		verTitle: 'Versão',
		fwVer: 'Versão de firmware',
		hwVer: 'Versão de hardware',
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
		internetPort: 'Tipo de porta de internet',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP estático',
		ip: 'Endereço de IP',
		subnetMask: 'Máscara de subrede',
		gatewag: 'Porta de entrada',
		primaryDNS: 'DNS primário',
		secondaryDNS: 'DNS secundário',
		mac: 'Endereço MAC',
		wiredMac: 'Wired MAC Address',
		WIFIMac: 'WiFi MAC Address',
		vpnStatus: 'Estado de VPN',
		vpnStatusOpt0: 'Conectando',
		vpnStatusOpt1: 'Desabilitar',
		vpnStatusOpt2: 'Conexão_falhou',
		vpnStatusOpt3: 'Conectado',
		vpnIp: 'IP de VPN'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Tipo de porta de internet',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'IP estático',
		ip: 'Endereço de IP',
		networkPrefix: 'Network Prefix',
		gatewag: 'Porta de entrada',
		primaryDNS: 'DNS primário',
		secondaryDNS: 'DNS secundário'
	},
	tips: {
		netConfigTip: 'Displays the IP address mode of the device.',
		verTip: 'Exibir versão de hardware e versão de firmware atual do dispositivo.',
		netTip: 'Mostra detalhes de configuração da rede de telefone.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Network',
		InternetPort: 'Porta de Internet',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: 'Endereço de IP estático',

		staticIpSettings: 'Def. Ip estático',
		ip: 'Endereço de IP',
		subnetMask: 'Máscara de subrede',
		defaultGateway: 'Portal Padrão',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: 'DNS primário',
		secondaryDNS: 'DNS secundário',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6 Prefix',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'Def. de SIP',
		accountActive: 'Conta ativa',
		disable: 'Desabilitar',
		enable: 'Habilitar',
		labelName: 'Etiqueta',
		displayName: 'Exibir nome',
		registerName: 'Registrar nome',
		userName: 'Nome de usuário',
		password: 'Senha',
		
		sipServer: 'Servidor de SIP',
		sipServerPort: 'Porta',
		
		back: 'Trás',
		next: 'Seg.',
		
		tips: {
			dhcp: 'Fazer uma solicitação para servidor de DHCP automaticamente para obter um endereço de IP, máscara de sub-rede, portal, DNS etc.',
			staticIp: 'Configurar o endereço de IP, máscara de sub-rede, portal, DNS etc, manualmente.',
			labelName: 'O nome que aparece na LCD do dispositivo atual.',
			displayName: 'O nome do telefone local que aparece no outro telefone quando chamando.',
			registerName: 'Registrar nome fornecido pelo provedor de internet.',
			userName: 'Nome de usuário fornecido pelo provedor de internet.',
			password: 'Senha de conta fornecida pelo provedor de internet.',
			sipServer: 'Endereço de servidor Sip fornecido pelo provedor de internet.'
		}
	},
	common: {
		finish: 'Fim',
		next: 'Seg.'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'Conta',
		accountNumberOpt1: 'Conta 1',
		accountNumberOpt2: 'Conta 2',
		accountNumberOpt3: 'Conta 3',
		accountNumberOpt4: 'Conta 4',
		accountNumberOpt5: 'Conta 5',
		accountNumberOpt6: 'Conta 6',
		
		registerStatus: 'Registrar estado',
		
		accountActive: 'Conta ativa',
		disable: 'Desabilitar',
		enable: 'Habilitar',
		labelName: 'Etiqueta',
		displayName: 'Exibir nome',
		registerName: 'Registrar nome',
		userName: 'Nome de usuário',
		password: 'Senha',
		
		sipServer: 'Servidor de SIP',
		sipServerPort: 'Porta',
		redundancy_proxy: 'Servidor de redundância SIP',

		enableOutboundProxyServer: 'Habilitar servidor de proxy de saída',
		outboundProxyServer: 'Servidor de proxy de saída',
		outboundProxyServerPort: 'Porta',
		make_call_without_register: 'Enable Peer to Peer',
		
		verifyServer: 'Verify server',
		transport: 'Transporte',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'NAT Transversal',
		TLSVersion: 'TLS Version',
		natTraversalOpt1: 'STUN',
		stunServer: 'Servidor STUN',
		port: 'Porta',
		
		voiceMail: 'Correio de voz',
		anonymousCall: 'Chamada anônima',
		off: 'Desligado',
		on: 'Ligado',
		onCode: 'On Code',
		offCode: 'Off Code',
		anonymousCallRejection: 'Rejeição chamada anônima',
		ringTones: 'Tons de toque',
		ringTonesOpt0: 'Comum',
		ringTonesOpt1: 'Toque1.wav',
		ringTonesOpt2: 'Toque2.wav',
		ringTonesOpt3: 'Toque3.wav',
		ringTonesOpt4: 'Toque4.wav',
		ringTonesOpt5: 'Toque5.wav',
		ringTonesOpt6: 'Toque6.wav',
		ringTonesOpt7: 'Toque7.wav',
		ringTonesOpt8: 'Toque8.wav',
		ringTonesOpt9: 'Toque9.wav',
		ringTonesOpt10: 'Toque10.wav',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			labelName: 'O nome que aparece na LCD do dispositivo atual.',
			displayName: 'O nome do telefone local que aparece no outro telefone quando chamando.',
			registerName: 'Registrar nome fornecido pelo provedor de internet.',
			userName: 'Nome de usuário fornecido pelo provedor de internet.',
			password: 'Senha de conta fornecida pelo provedor de internet.',
			sipServer: 'Endereço de servidor Sip fornecido pelo provedor de internet.',
			enableOutboundProxyServer: 'É usado para processar sinais e ajudar fluxos de dados múlti-mídia a passarem pelo firewall quando existe um firewall ou NAT.',
			redundancy_proxy: 'An Backup SIP server failover',
			outboundProxyServer: 'Servidor de proxy de saída.',
			verifyServer: 'verifyServer',
			transport: 'Existe três opções UDP, TCP, TLS. O protocolo do pacote registrado é UDP, TCP ou TLS, TLS (Segurança de camada de transporte) está criptografado.',
			natTraversal: 'Habilitar/Desabilitar servidor STUN.',
			stunServer: 'O servidor STUN permite que todos os terminais de clientes NAT (como um computador através de firewall) alcançarem chamadas de telefone VOIP com provedor de serviço VOIP localizado fora da LAN.',
			voiceMail: 'Definir um número de correio de voz da conta atual.',
			anonymousCall: 'Habilitar/Desabilitar chamada anônima.',
			onCode: 'Definir o código de recurso para ativar chamada anônima, o telefone habilita chamada anônima ao enviar o código de recurso para o servidor.',
			offCode: 'Definir o código de recurso para desativar chamada anônima, o telefone desabilita chamada anônima ao enviar o código de recurso para o servidor.',
			anonymousCallRejection: 'Habilitar/Desabilitar rejeição de chamada anônima.',
			onCodeRejection: 'Definir o código de recurso para ativação de rejeição de chamada anônima, o telefone habilita rejeição de chamada anônima ao enviar o código de recurso para o servidor.',
			offCodeRejection: 'Definir o código de recurso para desativação de rejeição de chamada anônima, o telefone desabilita rejeição de chamada anônima ao enviar o código de recurso para o servidor.',
			ringTones: 'Definir tipo de toque para conta atual.',
			make_call_without_register: 'Make and receive call without register'
		}
	},
	showText: {
		unRegistered: 'Registro falhou',
		registered: 'Registrado'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'Conta',
		accountNumberOpt1: 'Conta 1',
		accountNumberOpt2: 'Conta 2',
		accountNumberOpt3: 'Conta 3',
		accountNumberOpt4: 'Conta 4',
		accountNumberOpt5: 'Conta 5',
		accountNumberOpt6: 'Conta 6',
		
		audioCodecs: 'Codecs de áudio',
		disableCodecs: 'Codecs desabilitados',
		enableCodecs: 'Codecs habilitados',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'Conta',
		accountNumberOpt1: 'Conta 1',
		accountNumberOpt2: 'Conta 2',
		accountNumberOpt3: 'Conta 3',
		accountNumberOpt4: 'Conta 4',
		accountNumberOpt5: 'Conta 5',
		accountNumberOpt6: 'Conta 6',
		
		udpKeepAliveMsg: 'Mensagem Keep-Alive de UDP',
		disable: 'Desabilitar',
		enable: 'Habilitar',
		udpKeepAliveInterval: 'Intervalo Keep-Alive de UDP (segs)',
		
		loginExpires: 'Início de sessão expirou (segs)',
		localSipPort: 'Porta de Sip local',
		subscribePeriod: 'Inscrever período (segs)',
		
		dtmfType: 'Tipo de DTMF',
		dtmfTypeOpt0: 'Embanda',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'Carga útil de DTMF (segs)',
		reliableRetransmission: 'Retransmissão confiável de 100',
		
		subscribeForMwi: 'Inscrever para MWI',
		mwiSubscribePeriod: 'Período de inscrição de MWI (segs)',
		
		useSessionTimer: 'Usar cronômetro de sessão',
		sessionTimer: 'Cronômetro de sessão (segs)',
		refresher: 'Atualização',
		
		useUserPhone: 'Usar usuário = telefone',
		voiceEncryption: 'Criptografia de voz (SRTP)',
		off: 'Desligado',
		on: 'Ligado',
		ptime: 'HoraP (ms)',
		
		blfListUri: 'URI de Lista de BLF',
		derectedCallPickupCode: 'Código de captura de chamada direcionada',
		groupCallPickupCode: 'Código de captura de chamada de grupo',
		
		sipRegRetryTimer: 'Cronômetro de repetição de registro de SIP',
		earlyMedia: 'Mídia inicial',
		sipServerType: 'Tipo de servidor de SIP',
		sipServerTypeOpt0: 'Comum',
		sipServerTypeOpt1: 'Asterisco',
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
			udpKeepAliveMsg: 'O telefone periodicamente envia um pacote de UDP para manter a porta ativa e evitar o servidor de desligar a porta.',
			loginExpires: 'Registrar tempo de expiração, o dispositivo deve ser registrado outra vez dentro da validade de cada registro, ou o servidor irá colocar o dispositivo em modo off-line.',
			localSipPort: 'O número da porta do dispositivo local, usado para enviar e receber pacotes de SIP.',
			subscribePeriod: 'Inscrever tempo de expiração.',
			dtmfType: 'O modo de enviar DTMF ao pressionar as teclas de número durante uma chamada INBAND, OUTOFBAND (RFC2833) e SIP INFO.',
			reliableRetransmission: 'Habilitar/Desabilitar transmissão de PRACK.',
			subscribeForMwi: 'O dispositivo envia um pacote de inscrição ao servidor para inscrever Mensagem em espera, o dispositivo irá enviar um pacote de inscrição ao servidor após o registro.',
			useSessionTimer: 'Habilitar/Desabilitar função de sessão de atualização. O dispositivo irá enviar um pacote de Convite para atualizar a sessão durante uma chamada se ela for habilitada.',
			sessionTimer: 'O intervalo de tempo de sessão de atualização.',
			refresher: 'Qual lado para atualizar a sessão. Uac: Para atualizar a sessão do lado do cliente. Uas: Para atualizar a sessão do lado do servidor.',
			useUserPhone: 'Se for habilitado, haverá um sinal “usuário=telefone” no pacote de convite da mensagem de SIP.',
			voiceEncryption: 'Habilitar/Desabilitar Criptografia de Voz (SRTP).',
			ptime: 'Negociar o intervalo de tempo entre dois pacotes de RTP do codec atualmente usado.',
			blfListUri: 'É usado para inscrever o BLF no Broadsoft.',
			sipRegRetryTimer: 'O período de tempo de nova tentativa para registar após registro ter falhado.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Porta de Internet',
		IPv4Config: 'IPv4 Config',
		IPv6Config: 'IPv6 Config',
		dhcp: 'DHCP',
		staticIp: 'Endereço de IP estático',
		ip: 'Endereço de IP',
		subnetMask: 'Máscara de subrede',
		defaultGateway: 'Portal Padrão',
		IPv6Prefix: 'IPv6 Prefix(0~128)',

        StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		primaryDNS: 'DNS primário',
		secondaryDNS: 'DNS secundário',
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			dhcp: 'Fazer uma solicitação para servidor de DHCP automaticamente para obter um endereço de IP, máscara de sub-rede, portal, DNS etc.',
			staticIp: 'Configurar o endereço de IP, máscara de sub-rede, portal, DNS etc, manualmente.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Definição WiFi',
		wifi_on_warning: '(Quando WiFi está ligado, desligar o cabo de rede!)',
		wifi_enable: 'WiFi',
		on: 'Ligado',
		off: 'Desligado',
		search_wifi: 'Procurar WiFi',
		wifi_ssid: 'SSID atual',
		wifi_key: 'Chave Secreta',
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
	},
	showText: {
		close_wifi: 'Finaliz. WiFi',
		open_wifi: 'Acionando WiFi',
		search_wifi: 'Procurando...',
		wifi_table_header: ['Índice', 'SSID', 'Sinal', 'Selecionar'],
		wifi_list_title: 'Listagem WiFi',
		submitting: 'Encaminhando...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Ativa',
		disable: 'Desabilitar',
		enable: 'Habilitar',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Prioridade',
		vlanPc: 'Computador',
		vlanPcActive: 'Ativa',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Prioridade',
		
		portLink: 'Link da porta',
		wanPortLink: 'Link da porta da WAN',
		wanPortLinkOption0: 'Auto negociar',
		wanPortLinkOption1: 'Dúplex total 10Mbps',
		wanPortLinkOption2: 'Dúplex total 100Mbps',
		wanPortLinkOption3: 'Dúplex parcial 10Mbps',
		wanPortLinkOption4: 'Dúplex parcial 100Mbps',
		wanPortLinkOption5: 'Half duplex 1000Mbps',
		wanPortLinkOption6: 'Full duplex 1000Mbps',
			
		pcPortLink: 'Link da porta de computador',
		pcPortLinkOption0: 'Auto negociar',
		pcPortLinkOption1: 'Dúplex total 10Mbps',
		pcPortLinkOption2: 'Dúplex total 100Mbps',
		pcPortLinkOption3: 'Dúplex parcial 10Mbps',
		pcPortLinkOption4: 'Dúplex parcial 100Mbps',
		
		slaccEnable: 'ICMPv6 Status',

		vpn: 'VPN',
		importFile: 'Upload VPN Config',
		importStr: 'Import',
		
		voiceQos: 'QoS de voz',
		sipQos: 'QoS de SIP',
		
		localRtpPort: 'Porta de RTP local',
		maxRTPPort: 'Porta de RTP máxima',
		minRTPPort: 'Porta de RTP mínima',
		
		webServer: 'Servidor Web',
		httpPort: 'Porta de Http',
		httpsPort: 'Porta de Https',
		webServerType: 'Tipo',
		webServerTypeOption0: 'Desabilitado',
		webServerTypeOption1: 'Apenas http',
		webServerTypeOption2: 'Apenas https',
		webServerTypeOption3: 'http&https',

        span_to_pc: 'Span de porta PC',
        sys_span_to_pc_port: 'Span de porta PC',

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
			vlan: 'A configuração de VLAN, usada para configuração específica, E se você alterá-lo e quiser fazer as alterações efeito imediatamente, você tem que reiniciá-lo manualmente.',
			portLink: 'Connection rate for WAN and PC ports.',
			vpn: 'A configuração de VPN, usada para configuração específica.',
			voiceQos: 'Quando em falta de capacidade de rede, a qualidade de serviço pode fornecer usuários o valor passável preferencialmente.',
			localRtpPort: 'Defina a porta de transmissão de voz.',
			x_802_1x: 'It configures the 802.1x authentication method.',
			webServer: 'A definição do tipo e porta de acesso web.',
			slaccEnable: 'Enable/disable the IP phone to obtain the IPv6 network settings via SLAAC (Stateless Address Autoconfiguration) method.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Tecla',
		type: 'Tipo',
		value: 'Valor',
		label: 'Etiqueta',
		account: 'Conta',
		ext: 'Extensão',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'Chave DSS',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Linha',
		keyTypeOpt2: 'Velocidade rápida',
		keyTypeOpt4: 'Mensagem',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista de BLF',
		keyTypeOpt9: 'Captação direta',
		keyTypeOpt10: 'Captação de grupo',
		keyTypeOpt11: 'Parque de chamada',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferência',
		keyTypeOpt15: 'Direcionar',
		keyTypeOpt16: 'Transferir',
		keyTypeOpt17: 'Reter',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Rediscar',
		keyTypeOpt20: 'Diretório',
		keyTypeOpt21: 'Retorno de chamada',
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
		
		accountNumberOpt1: 'Conta 1',
		accountNumberOpt2: 'Conta 2',
		accountNumberOpt3: 'Conta 3',
		accountNumberOpt4: 'Conta 4',
		accountNumberOpt5: 'Conta 5',
		accountNumberOpt6: 'Conta 6',
		accountNumberOpt8: 'Auto',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Tecla',
		type: 'Tipo',
		value: 'Valor',
		label: 'Etiqueta',
		account: 'Conta',
		ext: 'Extensão',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Line Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Linha',
		keyTypeOpt2: 'Velocidade rápida',
		keyTypeOpt4: 'Mensagem',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista de BLF',
		keyTypeOpt9: 'Captação direta',
		keyTypeOpt10: 'Captação de grupo',
		keyTypeOpt11: 'Parque de chamada',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferência',
		keyTypeOpt15: 'Direcionar',
		keyTypeOpt16: 'Transferir',
		keyTypeOpt17: 'Reter',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Rediscar',
		keyTypeOpt20: 'Diretório',
		keyTypeOpt21: 'Retorno de chamada',
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
		
		accountNumberOpt1: 'Conta 1',
		accountNumberOpt2: 'Conta 2',
		accountNumberOpt3: 'Conta 3',
		accountNumberOpt4: 'Conta 4',
		accountNumberOpt5: 'Conta 5',
		accountNumberOpt6: 'Conta 6',
		accountNumberOpt8: 'Auto',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Tecla',
		type: 'Tipo',
		value: 'Valor',
		label: 'Etiqueta',
		account: 'Conta',

		programKeys: ['Mudo', 'Reter', 'Rediscar', 
		              'Cima', 'Baixo', 'Esquerda', 'Direita', 'Cancelar', 'Ok', 
		              'Tecladefunção1', 'Tecladefunção2', 'Tecladefunção3', 'Tecladefunção4'],

		programKeys_A1x: ['Mudo', 'Reter', 'Rediscar', 
		              'Cima', 'Baixo', 'Esquerda', 'Direita', 'Cancelar', 'Ok', 
		              'Tecladefunção1', 'Tecladefunção2', 'Tecladefunção3'],

		programKeys_A2x: ['Mudo', 'Reter', 'Rediscar', 
		              'Cima', 'Baixo', 'Esquerda', 'Direita', 'Cancelar', 'Ok', 
		              'Tecladefunção1', 'Tecladefunção2', 'Tecladefunção3'],

		programKeys_CT11: ['Mudo', 
		              'Cima', 'Baixo', 
		              'Tecladefunção1', 'Tecladefunção2', 'Tecladefunção3', 'Tecladefunção4'],
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Linha',
		keyTypeOpt2: 'Velocidade rápida',

		keyTypeOpt4: 'Mensagem',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista de BLF',
		keyTypeOpt9: 'Captação direta',
		keyTypeOpt10: 'Captação de grupo',
		keyTypeOpt11: 'Parque de chamada',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferência',
		keyTypeOpt15: 'Direcionar',
		keyTypeOpt16: 'Transferir',
		keyTypeOpt17: 'Reter',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Rediscar',
		keyTypeOpt20: 'Diretório',
		keyTypeOpt21: 'Retorno de chamada',
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
		
		accountNumberOpt1: 'Conta 1',
		accountNumberOpt2: 'Conta 2',
		accountNumberOpt3: 'Conta 3',
		accountNumberOpt4: 'Conta 4',
		accountNumberOpt5: 'Conta 5',
		accountNumberOpt6: 'Conta 6',
		accountNumberOpt8: 'Auto',
		
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
		key: 'Tecla',
		type: 'Tipo',
		value: 'Valor',
		label: 'Etiqueta',
		account: 'Conta',
		ext: 'Extensão',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'Chave EXT',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Linha',
		keyTypeOpt2: 'Velocidade rápida',
		keyTypeOpt4: 'Mensagem',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'Lista de BLF',
		keyTypeOpt9: 'Captação direta',
		keyTypeOpt10: 'Captação de grupo',
		keyTypeOpt11: 'Parque de chamada',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conferência',
		keyTypeOpt15: 'Direcionar',
		keyTypeOpt16: 'Transferir',
		keyTypeOpt17: 'Reter',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Rediscar',
		keyTypeOpt20: 'Diretório',
		keyTypeOpt21: 'Retorno de chamada',
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
		
		accountNumberOpt1: 'Conta 1',
		accountNumberOpt2: 'Conta 2',
		accountNumberOpt3: 'Conta 3',
		accountNumberOpt4: 'Conta 4',
		accountNumberOpt5: 'Conta 5',
		accountNumberOpt6: 'Conta 6',
		accountNumberOpt8: 'Auto',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'AET device ID which display in the status of linkable divice'
		}	
},
extKeyBackHtml = {
	noLink: 'Nenhum módulo de expansão conectado! Conecte uma ou mais unidades e em seguida atualize esta página.'	
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
		dhcpTime: 'Tempo de DHCP',
		disable: 'Desabilitar',
		enable: 'Habilitar',
		auto: 'Automático',
		timeZone: 'Fuso horário',
		primaryNtp: 'Servidor de NTP primário',
		secondaryNtp: 'Servidor de NTP secundário',
		updateInterval: 'Atualizar intervalo (segs)',
		daylight: 'Dia',
		fixedType: 'Tipo fixo',
		fixedTypeOpt0: 'Por data',
		fixedTypeOpt1: 'Por semana',
		startMonth: 'Mês de início',
		January: 'Janeiro',
		February: 'Fevereiro',
		March: 'Março',
		April: 'Abril',
		May: 'Maio',
		June: 'Junho',
		July: 'Julho',
		August: 'Agosto',
		September: 'Setembro',
		October: 'Outubro',
		November: 'Novembro',
		December: 'Dezembro',
		startDate: 'Data de início',
		startHourDay: 'Hora de início do dia',
		startDayWeek: 'Dia de início da semana',
		Sunday: 'Domingo',
		Monday: 'Segunda-feira',
		Tuesday: 'Terça-feira',
		Wednesday: 'Quarta-feira',
		Thursday: 'Quinta-feira',
		Friday: 'Sexta-feira',
		Saturday: 'Sábado',
		startWeekMonth: 'Semana de início do mês',
		firstInMonth: 'Primeira no mês',
		secondInMonth: 'Segunda no mês',
		thirdInMonth: 'Terceira no mês',
		fourthInMonth: 'Quarta no mês',
		lastInMonth: 'Última no mês',
		stopMonth: 'Mês de paragem',
		stopDate: 'Data de paragem',
		stopHourDay: 'Hora de paragem do dia',
		stopDayWeek: 'Dia de paragem da semana',
		stopWeekMonth: 'Semana de paragem do mês',
		offset: 'Compensar(minutos)',
		manualTime: 'Hora Manual',
		dateYmd: 'Data',
		autoDate: 'Data gerada',
		timeHms: 'Hora',
		autoTime: 'Hora gerada',
		timeFormat: 'Formato de hora',
		timeFormatOpt0: '12 Horas',
		timeFormatOpt1: '24 Horas',
		dateFormat: 'Formato da data',
		backlightTime: 'Tempo de luz de fundo',
		backlightTimeOpt0: 'Sempre ligada',
		backlightTimeOpt1: '1 min.',
		backlightTimeOpt2: '2 min.',
		backlightTimeOpt3: '5 min.',
		backlightTimeOpt4: '10 min.',
		backlightTimeOpt5: '30 min.',
		screensaver_timeout: 'Screensaver Time',
		screensaver_timeoutOpt0: 'off',
		screensaver_timeoutOpt1: '1 min',
		screensaver_timeoutOpt2: '2 min',
		screensaver_timeoutOpt3: '5 min',
		screensaver_timeoutOpt4: '10 min',
		screensaver_timeoutOpt5: '30 min',
		backlightLevel: 'Nível de luz de fundo',
		slaveBacklightLevel: 'Nível de luz de fundo de slave',
		expandBacklightLevel: 'Expandir nível de luz de fundo',
		slaveLcdContract: 'Contraste de LCD de slave',
		ringTones: 'Tons de toque',
		ringTonesOpt1: 'Toque1.wav',
		ringTonesOpt2: 'Toque2.wav',
		ringTonesOpt3: 'Toque3.wav',
		ringTonesOpt4: 'Toque4.wav',
		ringTonesOpt5: 'Toque5.wav',
		ringTonesOpt6: 'Toque6.wav',
		ringTonesOpt7: 'Toque7.wav',
		ringTonesOpt8: 'Toque8.wav',
		ringTonesOpt9: 'Toque9.wav',
		ringTonesOpt10: 'Toque10.wav',
		replaceRingTone: 'Replace Ring Tone',
		wallpaper: 'Wallpaper',
		delWallpaper: 'Excluir',
		uploadWallpaper: 'Upload',
		cancelWallpaper: 'Cancelar',
		screensaver: 'Screensaver',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			dhcpTime: 'Enables or disables the IP phone to update time with the offset time obtained from the DHCP server.',
			replaceRingTone: 'Recommended file format: 16-bit, wave; the file size should be less than 800 kB for the colour display phone, and less than 300 kB for the monochrome display phone.',
			timeZone: 'Selecionar seu fuso horário.',
			updateInterval: 'Definir o intervalo de tempo para verificação da hora da aplicação local com o servidor.',
			daylight: 'Definições do horário de verão.',
			manualTime: 'Habilitar/Desabilitar definição de hora manual.',
			timeFormat: 'Definir hora como 12 horas ou 24 horas.',
			dateFormat: 'Definir o formato de exibição da data.',
			backlightTime: 'Definir hora da luz de fundo.',
			screensaver_timeout: 'Set Screensaver time.',
			backlightLevel: 'Ajuste de luminosidade da luz de fundo do telefone.',
			ringTones: 'Definições do tipo do tom do telefone.',
			pictureSize: 'Best resolution is 461x278 pixels and the size should be less than 500KBytes.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Desabilitar',
		enable: 'Habilitar',
		off: 'Desligado',
		on: 'Ligado',
		forward: 'Direcionar',
		always: 'Sempre',
		busy: 'Ocupado',
		noAnswer: 'Sem resposta',
		afterRingTime: 'Após hora de toque (segs)',
		
		target: 'Destino',
		onCode: 'On Code',
		offCode: 'Off Code',
		
		dnd: 'Não Perturbar',
		dndOnCode: 'On Code de DND',
		dndOffCode: 'Off Code de DND',
		authNum: 'Números autorizados (separados por vírgula)',
		
		generalInfo: 'Informação geral',
		liveDialpad: 'Teclado de discagem ao vivo',
		interDigitTime: 'Tempo de inter dígito (segs)',
		autoAnswer: 'Resposta automática',
		autoAnswerDelay: 'Auto Answer Delay (sec)',
		ignoreMissedCall: 'Ignore Missed Call',
		callWaiting: 'Espera de chamada',
		hotline: 'Linha direta',
		hotlineTimeout: 'Tempo limite de linha direta (0~180 segs)',
		keyAsSend: 'Tecla como enviar',
		dialNowTimeout: 'Tempo limite de Discar-agora (segs)',
		busyToneTimer: 'Cronômetro de tom ocupado (segs)',
		returnCodeWhenRefuse: 'Código de retorno quando recusar',
		returnCodeWhenDnd: 'Código de retorno quando DND',
		r404: '404 (Não encontrado)',
		r480: '480 (Temporariamente indisponível)',
		r486: '486 (Ocupado aqui)',
		rfc2543Hold: 'Retenção de RFC 2543',
		useOutboundProxyInDialog: 'Usar proxy de saída em diálogo',
		loginTimeout: 'Tempo limite de início de sessão(1~1000 minutes)',
		hidedtmf: 'Hide DTMF',
		multicastCodec: 'Multicast Codec',
		watchdog: 'Watch Dog',
		
		audioSettings: 'Definições de áudio',
		callWaitingTone: 'Tom de espera de chamada',
		headset: 'Volume de fone de ouvido',
		handset: 'Volume de telefone',
		handfree: 'Volume de mãos livres',
		ringer: 'Volume de toque',
		headsetSend: 'Volume de envio de fone de ouvido',
		handsetSend: 'Volume de envio de telefone',
		handfreeSend: 'Volume de envio de mãos livres',
		ringerDeviceForHeadset: 'Dispositivo de toque para fone de ouvido',
		ringerDeviceForHeadsetOpt0: 'Usar alto-falante',
		ringerDeviceForHeadsetOpt1: 'Usar fone de ouvido',
		
		transferSettings: 'Definições de transferência',
		blindTransferOnHook: 'Transferência sem consulta no gancho',
		attendedTransferOnHook: 'Transferência atendida no gancho',
		transferOnConHangUp: 'Transferência em desligamento de conferência',
		transferModeViaDsskey: 'Modo de transferência via TeclaDSS',
		transferModeViaDsskeyOpt0: 'Nova chamada',
		transferModeViaDsskeyOpt1: 'Transferência atendida',
		transferModeViaDsskeyOpt2: 'Transferência sem consulta',
		
		callPickup: 'Seletor de chamada',
		directCallPickup: 'Seletor de chamada direta',
		directCallPickupCode: 'Código de seletor de chamada direta',
		groupCallPickup: 'Seletor de chamada de grupo',
		groupCallPickupCode: 'Código de captura de chamada de grupo',
		
		accept_sip_trust_server_only: 'Accept SIP Trust Server Only',
		recordUserId: 'Record User ID',
		extFunction: 'Ext Function',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: 'Conference hold when add new',

		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			forward: 'Definir transferência de chamada.',
			alwaysTarget: 'Número de destino para transferência.',
			alwaysOnCode: 'O código de recurso para habilitar todos os direcionamentos de chamadas recebidas, o telefone irá enviar o código de recurso diretamente para a abertura de todos os direcionamentos de chamadas recebidas.',
			alwaysOffCode: 'O código de recurso para desabilitar todos os direcionamentos de chamadas recebidas, o telefone irá enviar o código de recurso diretamente para o fechamento de todos os direcionamentos de chamadas recebidas.',
			busyTarget: 'Número de destino para transferência.',
			busyOnCode: 'O código de recurso para habilitar direcionamento de chamada ocupada, o telefone irá enviar o código de recurso diretamente para a abertura de direcionamento de chamada ocupada.',
			busyOffCode: 'O código de recurso para desabilitar direcionamento de chamada ocupada, o telefone irá enviar o código de recurso diretamente para o fechamento de direcionamento de chamada ocupada.',
			afterRingTime: 'Tempo de espera para direcionamento de SemReposta.',
			noAnswerTarget: 'Número de destino para transferência.',
			noAnswerOnCode: 'O código de recurso para habilitar direcionamento de chamada sem resposta, o telefone irá enviar o código de recurso diretamente para a abertura de direcionamento de chamada sem resposta.',
			noAnswerOffCode: 'O código de recurso para desabilitar direcionamento de chamada sem resposta, o telefone irá enviar código de recurso para fechamento de direcionamento de chamada sem resposta.',
			
			dndOnCode: 'O código de recurso para habilitar DND, o telefone irá enviar o código de recurso diretamente para DND aberto.',
			dndOffCode: 'O código de recurso para desabilitar DND, o telefone irá enviar o código de recurso diretamente para DND próximo.',
			
			liveDialpad: 'Habilitar/Desabilitar “discagem automática” na interface de discagem de usuário.',
			interDigitTime: 'Tempo de atraso de discagem automática para teclado de discagem ao vivo.',
			autoAnswer: 'Habilitar/Desabilitar resposta automática.',
			autoAnswerDelay: 'It configures the delay time (in seconds) before the IP phone automatically answers an incoming call.',
			callWaiting: 'Espera ocupada para os comutadores de chamada recebida.',
			hotline: 'Definir número de linha direta.',
			hotlineTimeout: 'Definição para tempo de atraso de linha direta.',
			keyAsSend: 'Definir teclas como função de chamada.',
			dialNowTimeout: 'Intervalo para DiscarAgora.',
			busyToneTimer: 'Tom ocupado após o término da chamada.',
			returnCodeWhenRefuse: 'Definir mensagem de retorno para rejeição de chamada.',
			returnCodeWhenDnd: 'Definir mensagem de retorno para Não perturbar.',
			rfc2543Hold: 'Dois tipos de padrão para Retenção, precisa de suportes de servidor.',
			useOutboundProxyInDialog: 'Habilitar/Desabilitar proxy de saída em conversação.',
			loginTimeout: 'It configures the timeout interval (in minutes) for web access authentication.',
			acceptSipTrustServerOnly: 'Enable/disable the IP phone to only accept the SIP message from the SIP and outbound proxy server.',

			callWaitingTone: 'Definir tom para solicitar uma nova chamada em uma chamada (espera de chamada está ligada).',
			ringerDeviceForHeadset: 'Escolha de canal de toque de chamada.',

			blindTransferOnHook: 'Habilitar/Desabilitar transferência sem consulta através de modo em gancho.',
			attendedTransferOnHook: 'Habilitar/Desabilitar Transferência de Atendimento e Transferência de Semi-Atendimento com modo em gancho.',
			transferOnConHangUp: 'Habilitar/Desabilitar transferência para outras duas partes enquanto iniciador de conferência desligar.'
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
		ver: 'Versão',
		fmVer: 'Versão de firmware',
		hdVer: 'Versão de hardware',
		
		resetToFactory: 'Redefinir para fábrica',
		reboot: 'Reiniciar',		
		
		upgradeHeader: 'Atualizar Firmware',
		selectFw: 'Selecionar Firmware',
		upgrade: 'Atualização',
		
		tips: {
			upgradeHeader: 'Selecionar a versão de firmware de atualização liberada por fornecedores para atualização.'
		}
	},
	commonText: {
		resetConfirm: 'Você deseja redefinir para fábrica?',
		resetSuccess: 'Êxito na redefinição de fábrica. O dispositivo irá reiniciar automaticamente.',
		resetFail: 'Redefinição para fábrica falhou, tente outra vez!',
		
		rebootConfirm: 'Você deseja reiniciar?',
		
		uploadFilePrompt: 'Isto é para carregar arquivo:',
		upgradeMsg: 'Por favor não desligue a energia!',
		upgradeText: 'Atualizando, aguardando...',
		
		upgradeFail: 'Atualização falhou, tente outra vez!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'Recurso Pcap',
		start: 'Iniciar',
		stop: 'Parar',
		exportStr: 'Exportar',
		
		debug: 'Debug'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Auto provisão',
		PnPEnable: 'PnP Active',
		DHCPEnable: 'DHCP Active',
		provisioningServer: 'Servidor de config.',
		userName: 'Nome de usuário',
		password: 'Senha',
		commonAESKey: 'Common AES Key',
		MACAESKey: 'MAC-Oriented AES Key',
		checkNewConfig: 'Ver. nova config',
		off: 'Desligado',
		on: 'Ligado',
		repeatedly: 'Repetir',
		interval: 'intervalo(min)',
		weekly: 'Seml.',
		time: 'Hora',
		dayOfWeek: 'Dia da sem.',
		
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			PnPEnable: 'The request to the server to obtain a support URL for upgrade',
			DHCPEnable: 'To obtain a support URL for upgrade from DHCP server',
			provisioningServer: 'Atualiz.endereço.serv',
			password: 'Senha servidor',
			checkNewConfig: 'O modo de verif. de nova configuração no servidor'
		}
	},
	showText: {
		weekly:  ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Configuração de Importação/Exportação',
		importFile: 'Importar Arquivo',
		importStr: 'Importar',
		exportStr: 'Exportar',
		exportUserData: 'Exportar dados de usuário',

		exportImportConfig: 'Import/Export CFG File',
		
		exportSyslog: 'Exportar registro de sistema',
		logLocation: 'Local de registro',
		logLocationOpt0: 'Local',
		logLocationOpt1: 'Servidor', 
		serverName: 'Nome de servidor',
		logLevel: 'Nível de registro',
		logOpt0: 'Fatal',
		logOpt1: 'Erro',
		logOpt2: 'Aviso',
		logOpt3: 'Info',
		logOpt4: 'Debug',
		exportStr2: 'Exportar',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			exportImportConfig: 'The imported or exported file must have an auto provision file format. The exported file includes the modified configuration only, so it will be empty if no changes were made.',
			importExportCfg: 'Clique em exportar para exportar a configuração de telefone atual; escolha o arquivo de configuração de importação, clique em importar, a configuração será importada para o telefone atual e depois se reinicializar.',
			exportSyslog: 'Se o tipo é local, irá exportar o syslog diretamente; se o tipo é servidor, irá exportar o syslog para o servidor especificado.'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Action URI allow IP List',
		remoteControl:'Remote Control',
		cstaControl: 'CSTA Control',
		disable: 'Desabilitar',
		enable: 'Habilitar',
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
		replaceRule: 'Regra de substituição',
		dialNow: 'Discar-agora',
		areaCode: 'Código de área',
		blockOut: 'Bloquear'
	},
	replaceRuleTitle: ['Índice', 'Número', 'Substituir', 'Conta'],
	dialNowsTitle: ['Índice', 'Regra de Discar-agora', 'Conta'],
	replaceRuleForm: {
		num: 'Número',
		replace: 'Substituir',
		account: 'Conta',
		add: 'Adicionar',
		edit: 'Editar',
		del : 'Excluir',
		save: 'Salvar'
	},
	dialNowsForm: {
		rule: 'Regra de Discar-agora',
		account: 'Conta',
		add: 'Adicionar',
		edit: 'Editar',
		del : 'Excluir',
		save: 'Salvar'
	},
	form3: {
		code: 'Código',
		minLen: 'Comprimento mínimo',
		maxLen: 'Comprimento máximo',
		areaCodeAccount: 'Conta',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Número de bloqueio',
		account: 'Conta',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar'
	}
},
phoneRingHtml = {
	form1: {
		alterInfoTitle: 'Alert Info',
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		tips: {
		}
	       }
},
phoneVoiceHtml = {
	form1: {
		disable: 'Desabilitar',
		enable: 'Habilitar',
		
		echoCancellation: 'Cancelamento de eco',
		echoCanceller: 'Cancelador de eco',
		echoCancellerOpt0: 'Nível baixo',
		echoCancellerOpt1: 'Nível médio',
		echoCancellerOpt2: 'Nível alto',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Buffer de instabilidade',
		type: 'Tipo',
		typeOpt0: 'Fixo',
		typeOpt1: 'Adaptativo',
		minDelay: 'Atraso mínimo',
		maxDelay: 'Atraso máximo',
		normalDelay: 'Atraso normal',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancelar',
		
		tips: {
			echoCancellation: 'Definições de cancelamento de eco.',
			echoCanceller: 'Habilitar/Desabilitar cancelamento de eco.',
			vad: 'Detecção de atividade de voz.',
			cng: 'Gerador de ruído de conforto.',
			jitterBuffer: 'Esta é uma área compartilhada de dados, pacotes de dados e voz podem ser colecionados, armazenados e enviados para o processador de som uniforme.'
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

		disable: 'Desabilitar',
		enable: 'Habilitar',

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

		disable: 'Desabilitar',
		enable: 'Habilitar',

		tr069: 'TR069',
		tr069_enable: 'Ativar TR069',
		serveraddress: 'ACS URL',
		serverport: 'Port',
		username: 'ACS Usuário',
		password: 'ACS senha',
		periodic_inform_enable: 'Ativar informação periódica',
		periodic_inform_interval: 'Interalo de Informação Periódica (segundos)',
		connection_request_username: 'Pedido de utilizador de ligação',
		connection_request_password:'Pedido de password de ligação',

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
		passwdModify: 'Modificação de senha',
		userType: 'Tipo de usuário',
		currentPasswd: 'Senha atual',
		newPasswd: 'Nova senha',
		confirmPasswd: 'Confirmar senha',
		
		butConfirm: 'Confirmar',
		butCancel: 'Cancel',
		
		tips: {
			userType: 'Selecionar seu tipo. Se você iniciar sessão como usuário, você pode apenas modificar sua própria senha. Se você iniciar sessão como um administrador, você pode modificar ambas as senhas de admin e usuário.'
		}
	},
	showText: {
		pwdNoMatch: 'As duas senhas que você inseriu não correspondem',
		modifyFailed: 'Modificação de senha falhou, tente outra vez!'
	}
},
contactsHtml = {
	mytabMenu: ['Contatos', 'Lista negra'],
	tableHeader: ['Índice', 'Nome', 'Número de escritório', 'Número de celular', 'Outro número', 'Conta'],
	buttonDiv: {
		save: 'Salvar',
		del: 'Apagar',
		moveToBlack: 'Mover para lista negra',
		moveToWhite: 'Mover para contatos'
	},
	editDiv: {
		contacts: 'Contatos',
		name: 'Nome',
		officeNum: 'Número de escritório',
		mobileNum: 'Número de celular',
		otherNum: 'Outro número',
		account: 'Conta',
		accountOpt8: 'Auto',
		accountOpt1: 'Conta 1',
		accountOpt2: 'Conta 2',
		accountOpt3: 'Conta 3',
		accountOpt4: 'Conta 4',
		accountOpt5: 'Conta 5',
		accountOpt6: 'Conta 6',
		ring: 'Chamada',
		ringOpts: ['Auto', 'Toque1.wav', 'Toque2.wav', 'Toque3.wav', 'Toque4.wav', 
		           'Toque5.wav', 'Toque6.wav', 'Toque7.wav', 'Toque8.wav', 'Toque9.wav', 'Toque10.wav'],
		photo: 'Foto',
		defaultPhoto: 'Default',
		add: 'Adicionar',
		deletePhoto: 'Apagar',
		uploadPhoto: 'Upload Photo',
		pictureSize: 'Best resolution is 100x135 pixels and the size should be less than 250KBytes.',
		edit: 'Editar',
		search: 'Pesquisar',
		
		importAndExport: 'Importar e exportar contatos de local',
		importFile: 'Importar contatos de local',
		importStr: 'Importar',
		exportStr: 'Exportar'
	},
	
	shwoText: {
		delConfirm: 'Você tem certeza que deseja excluir os contatos escolhidos?',
		delConfirm1: 'Observação: a foto de contato não será recuperada após salvar!', 
		selectEmpty: 'Por favor, selecione no mínimo um registro.',
		selectTooMuch: 'Registro selecionado é muito!',
		nameEmpty: 'Nome de exibição não pode estar vazio!',
		nameExist: 'Nome de exibição existe!',
		phonebookFull: 'Only less than 400 items in phonebook list!',
		blacklistFull: 'Only less than 50 items in blacklist!',
		contentEmpty: 'O conteúdo não deve estar vazio!',
		notFind: 'Não encontrou o contato especificado.'
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
	mytabMenu: ['Lista discada', 'Lista em falta', 'Lista recebida', 'Lista direcionada'],
	tableHeader: ['Índice', 'Datahora', 'Duration', 'Identidade do local', 'Nome', 'Número de telefone']
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
