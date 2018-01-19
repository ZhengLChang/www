//公共的验证信息
var commonValidMsg = {
	missingMsg: 'This field is required',
	invalidIpMsg: 'invalid IP'
},
uploadCommon = {
	uploadFilePrompt: 'This is to upload file:',
	uploadMsg: 'Please do not turn the power off!',
	uploadText: 'Importing, please waiting...',
	uploadSuccess: 'Import successful!',
	uploadFail: 'Import failed, please try again!'
},
alertMsg = {
	titlePrompt: 'Prompt',
	titleConfirm: 'Confirm',
	noChange: 'No change!',
	invalidVal: 'Invalid value!',
	saveSuccess: 'Save successful!',
	enabledOptionsEmpty: 'Enabled Codecs can not be empty!',
	codecsConflict: 'iLBC_13_3 and iLBC_15_2 can be not applied simultaneously!',
	emptyContent: 'Content is empty!',
	invalidDTMF: 'Invalid DTMF!',
	webServicesDisable: 'Web services has been disabled!',
	features: 'Off Code could not be empty when On Code is set!',
	invalidAccountList: 'Invalid account list!',
	dialPlanMsg1: 'Please select one record at least.',
	voiceError1: 'Max Delay must bigger than Min Delay',
	voiceError2: 'Normal Delay must between Min and Max Delay',
	fileIsEmpty: 'File is empty!',
	upgradeFileFormateErr: 'Please choose a upgrade file(*.fw)!',
	openvpnFile: 'Please choose a OpenVPN file(*.tar/*.TAR)!',
	wallpaperFormatError: 'Filename contain Latin characters only and  PNG/JPG/BMP format images',
	systemFileCannotDelete: 'it only support delete the custom photos!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'Please do not turn the power off!',
			rebootText: 'Rebooting, please waiting...'
		},
		showProgress: {
			progressTitle: 'Prompt'
		}
	},
	ErrorInfo: {
		networkError: 'Network Error, please check!',
		webServerError: 'Web Server Error, please try again!',
		unknownError: 'Unknown Error:',
		dataNoChanged: 'No Change!',
		Error_409: 'The file with this name already exists.',
		Error_413: 'The file is too large.',

		phoneBusyError: 'Talking, Please wait...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: 'Logout failed, please try again!'
	},
	pluginInit: {
		ok: 'Ok',
		cancel: 'Cancel'
	}
},
status401Html = {
	errorInfo1 : 'You are not authorized to access the web interface.',
	errorInfo2 : 'Please contact your support team or try again 3 minutes later.',
	errorInfo3: 'HTTP 401 Unauthorized'
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
		basic: 'Basic',
		account: 'Account',
		network: 'Network',
		dSSKey: 'DSS Key',
		phone: 'Phone',
		contacts: 'Contacts',
		security: 'Security'
	},
	//页面底部
	footer:{
		footerEmail: 'https://www.platan.pl',
		footerSupport: 'https://www.platan.pl',
		footerWebsite: 'https://www.platan.pl',
		footerDownload: 'https://www.platan.pl',
		footerProductWebsite: 'https://www.platan.pl',
		website: 'Website',
		products: 'Products',
		support: 'Support',
		download: 'Download',
		contactus: 'Contact us',
		atcomRights: '©2018 ATCOM All Rights Reserved.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'Status',
		sWizard: 'Wizard',
		//Account
		aBasic: 'Basic',
		aCodecs: 'Codecs',
		aAdvanced: 'Advanced',
		//NetWork
		nBasic: 'Basic',
		nWifi: 'Wi-Fi',
		nAdvanced: 'Advanced',
		//DSS key
		dMemory: 'Memory Key',
		dLink: 'Line Key',
		dProgrammable: 'Programmable Key',
		dExt: 'EXT Key',
		dAetAdv: 'EXT Settings',

		//Phone
		pDNDAndForward: 'Forward&DND',
		pPrefetence: 'Preference',
		pFeatures: 'Features',
		pUpgrade: 'Upgrade',
		pAuto: 'Auto Provision',
		pConfig: 'Configuration',
		pRemoteControl: 'Remote Control',
		pActionUrl: 'Action URL',
		pDialPlan: 'Dial Plan',
		pVoice: 'Voice',
		pRing: 'Alert Info',
		pTones: 'Tones',
		pSms: 'SMS',
		pAction: 'Action URL',
		pSoftkey: 'Softkey Layout',
		pPhoneLock: 'Phone Lock',
		pSecurity: 'Security',
		pPhoneTr069: 'TR069',
		pDebug: 'Debug',
		//Contacts
		cContacts: 'Contacts',
		cXMLPhonebook: 'Remote Phone Book',
		cPhoneCall: 'Phone Call Info',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'Call Log',
		//Security
		sPassword: 'Password',
		sStrusted: 'Trusted Certificates',
		sServer: 'Server Certificates'
	}
},
statusHtml = {
	version: {
		verTitle: 'Version',
		fwVer: 'Firmware Version',
		hwVer: 'Hardware Version',
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
		internetPort: 'Internet Port Type',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Static IP',
		ip: 'IP Address',
		subnetMask: 'Subnet Mask',
		gatewag: 'Gateway',
		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS',
		wiredMac: 'Wired MAC Address',
		WIFIMac: 'WiFi MAC Address',
		vpnStatus: 'VPN Status',
		vpnStatusOpt0: 'Connecting',
		vpnStatusOpt1: 'Disable',
		vpnStatusOpt2: 'Connect_failed',
		vpnStatusOpt3: 'Connected',
		vpnIp: 'VPN IP'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Internet Port Type',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Static IP',
		ip: 'IP Address',
		networkPrefix: 'Network Prefix',
		gatewag: 'Gateway',
		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS'
	},
	tips: {
		netConfigTip: 'Displays the IP address mode of the device.',
		verTip: 'Displays current firmware version and hardware version of the device.',
		netTip: 'Shows details of the phone network configuration.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Network',
		InternetPort: 'Internet Port',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: 'Static IP Address',
		
		staticIpSettings: 'Static Ip Settings',
		ip: 'IP Address',
		subnetMask: 'Subnet Mask',
		defaultGateway: 'Default Gateway',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6 Prefix',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'SIP Settings',
		accountActive: 'Account Active',
		disable: 'Disable',
		enable: 'Enable',
		labelName: 'Label',
		displayName: 'Display Name',
		registerName: 'Register Name',
		userName: 'User Name',
		password: 'Password',
		
		sipServer: 'SIP Server',
		sipServerPort: 'Port',
		
		back: 'Back',
		next: 'Next',
		
		tips: {
			dhcp: 'Make a request to DHCP server automatically for obtaining an IP address, subnet mask, gateway, DNS etc.',
			staticIp: 'Configure the IP address, subnet mask, gateway, DNS etc manually.',
			labelName: 'The name showing on the LCD of current device.',
			displayName: 'The local phone name showing on the other phone when calling.',
			registerName: 'Register name provided by ISP.',
			userName: 'User name provided by ISP.',
			password: 'Account password provided by ISP.',
			sipServer: 'SIP server address provided by ISP.'
		}
	},
	common: {
		finish: 'Finish',
		next: 'Next'
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
		
		registerStatus: 'Register Status',
		
		accountActive: 'Account Active',
		disable: 'Disable',
		enable: 'Enable',
		labelName: 'Label',
		displayName: 'Display Name',
		registerName: 'Register Name',
		userName: 'User Name',
		password: 'Password',
		
		sipServer: 'SIP Server',
		sipServerPort: 'Port',
		redundancy_proxy: 'SIP Redundancy Server',

		enableOutboundProxyServer: 'Enable Outbound Proxy Server',
		outboundProxyServer: 'Outbound Proxy Server',
		outboundProxyServerPort: 'Port',
		make_call_without_register: 'Enable Peer to Peer',
		
		verifyServer: 'Verify server',
		transport: 'Transport Type',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'NAT Traversal',
		TLSVersion: 'TLS Version',
		natTraversalOpt1: 'STUN',
		stunServer: 'STUN Server',
		port: 'Port',
		
		voiceMail: 'Voice Mail',
		anonymousCall: 'Anonymous Call',
		off: 'Off',
		on: 'On',
		onCode: 'On Code',
		offCode: 'Off Code',
		anonymousCallRejection: 'Anonymous Call Rejection',
		ringTones: 'Ring Tones',
		ringTonesOpt0: 'Common',
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
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			labelName: 'The name showing on the LCD of current device.',
			displayName: 'The local phone name showing on the other phone when calling.',
			registerName: 'Register name provided by ISP.',
			userName: 'User name provided by ISP.',
			password: 'Account password provided by ISP.',
			sipServer: 'SIP server address provided by ISP.',
			enableOutboundProxyServer: 'It is used to process signals and to help multi-media data streams go through the firewall when there is a firewall or NAT.',
			redundancy_proxy: 'An Backup SIP server failover',
			outboundProxyServer: 'Outbound Proxy Server.',
			verifyServer: 'verifyServer',
			transport: 'There are UDP, TCP, TLS three options. The registered packet protocol is UDP, TCP or TLS, TLS(Transport Layer Security) is encrypted.',
			natTraversal: 'Enable/Disable STUN server.',
			stunServer: 'STUN server allows all terminal NAT clients(such as a PC behind the firewall) to achieve VOIP phone calls with VOIP service provider located outside the LAN.',
			voiceMail: 'Set a voice mail number of the current account.',
			anonymousCall: 'Enable/Disable anonymous call.',
			onCode: 'Set the feature code for turning on anonymous call, the phone enables anonymous call by sending the feature code to the server.',
			offCode: 'Set the feature code for turning off anonymous call, the phone disables anonymous call by sending the feature code to the server.',
			anonymousCallRejection: 'Enable/Disable anonymous call rejection.',
			onCodeRejection: 'Set the feature code for turning on anonymous call rejection, the phone enables anonymous call rejection by sending the feature code to the server.',
			offCodeRejection: 'Set the feature code for turning off anonymous call rejection, the phone disables anonymous call rejection by sending the feature code to the server.',
			ringTones: 'Select ring tone for current account.',
			make_call_without_register: 'Make and receive call without register'
		}
	},
	showText: {
		unRegistered: 'Register failed',
		registered: 'Registered'
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
		
		audioCodecs: 'Audio codecs',
		disableCodecs: 'Disabled Codecs',
		enableCodecs: 'Enabled Codecs',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
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
		
		udpKeepAliveMsg: 'UDP Keep-Alive Message',
		disable: 'Disable',
		enable: 'Enable',
		udpKeepAliveInterval: 'UDP Keep Alive Interval(secs)',
		
		loginExpires: 'Login Expired(secs)',
		localSipPort: 'Local Sip Port',
		subscribePeriod: 'Subscribe Period(secs)',
		
		dtmfType: 'DTMF Type',
		dtmfTypeOpt0: 'Inband',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'DTMF Payload(secs)',
		reliableRetransmission: '100 reliable retransmission',
		
		subscribeForMwi: 'Subscribe for MWI',
		mwiSubscribePeriod: 'MWI Subscription Period(secs)',
		
		useSessionTimer: 'Use Session Timer',
		sessionTimer: 'Session Timer(secs)',
		refresher: 'Refresher',
		
		useUserPhone: 'Use user=phone',
		voiceEncryption: 'Voice Encryption (SRTP)',
		off: 'Off',
		on: 'On',
		ptime: 'PTime(ms)',
		
		blfListUri: 'BLF List URI',
		derectedCallPickupCode: 'Directed Call Pickup Code',
		groupCallPickupCode: 'Group Call Pickup Code',
		
		sipRegRetryTimer: 'SIP Registration Retry Timer',
		earlyMedia: 'Early Media',
		sipServerType: 'SIP Server Type',
		sipServerTypeOpt0: 'Common',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'BroadSoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Intercom Code',
		conferenceType: 'Conference Type',
		localConference: 'Local Conference',
		networkConference: 'Network Conference',
		conferenceCode: 'Conference Code',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			udpKeepAliveMsg: 'The phone periodically sends a UDP packet to keep the port active and to avoid the server to shut down the port.',
			loginExpires: 'Register expire time, the device must be registered again within the validity of each registration, or the server will take the device as off-line.',
			localSipPort: 'The local device port number, used to send and receive SIP packets.',
			subscribePeriod: 'Subscribe expire time.',
			dtmfType: 'The mode of sending DTMF by pressing the number keys during a call, including INBAND, OUTOFBAND(RFC2833) and SIP INFO.',
			reliableRetransmission: 'Enable/Disable PRACK transmission.',
			subscribeForMwi: 'The device sends a Subscribe packet to the server to subscribe message waiting status, the device will send a Subscribe packet to the server after registration.',
			useSessionTimer: 'Enable/Disable refresh session function. The device will send an Invite packet to refresh the session during a call if it is enabled.',
			sessionTimer: 'The refresh session time interval.',
			refresher: 'Which side to refresh the session. UAC: To refresh the session from the client side. UAS: To refresh the session from the server side.',
			useUserPhone: 'If it is enabled, there will be a sign "user=phone" in the Invite packet of SIP message.',
			voiceEncryption: 'Enable/Disable Voice Encryption(SRTP).',
			ptime: 'Negotiate the time interval between two RTP packets of the current used codec.',
			blfListUri: 'It is used to subcribe BLF on Broadsoft.',
			sipRegRetryTimer: 'The time period of retrying to register after failed registration.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Internet Port',
		IPv4Config: 'IPv4 Config',
		IPv6Config: 'IPv6 Config',
		dhcp: 'DHCP',
		staticIp: 'Static IP Address',
		ip: 'IP Address',
		subnetMask: 'Subnet Mask',
		IPv6Prefix: 'IPv6 Prefix(0~128)',

        StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		defaultGateway: 'Default Gateway',
		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS',
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			dhcp: 'Make a request to DHCP server automatically for obtaining an IP address, subnet mask, gateway, DNS etc.',
			staticIp: 'Configure the IP address, subnet mask, gateway, DNS etc manually.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Wi-Fi Setting',
		wifi_on_warning: '(When wifi is on, please disconnect the network cable!)',
		wifi_enable: 'Wi-Fi',
		on: 'On',
		off: 'Off',
		search_wifi: 'Search Wi-Fi',
		wifi_ssid: 'Current SSID',
		wifi_key: 'Secret Key',
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
	},
	showText: {
		close_wifi: 'Closing wifi...',
		open_wifi: 'Opening wifi...',
		search_wifi: 'Searching...',
		wifi_table_header: ['Index', 'SSID', 'Signal', 'Select'],
		wifi_list_title: 'Wi-Fi Listing',
		submitting: 'Submitting...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Active',
		disable: 'Disable',
		enable: 'Enable',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Priority',
		vlanPc: 'PC',
		vlanPcActive: 'Active',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Priority',
		
		portLink: 'Port Link',
		wanPortLink: 'WAN Port Link',
		wanPortLinkOption0: 'Auto negotiate',
		wanPortLinkOption1: 'Full duplex 10Mbps',
		wanPortLinkOption2: 'Full duplex 100Mbps',
		wanPortLinkOption3: 'Half duplex 10Mbps',
		wanPortLinkOption4: 'Half duplex 100Mbps',
		wanPortLinkOption5: 'Half duplex 1000Mbps',
		wanPortLinkOption6: 'Full duplex 1000Mbps',
			
		pcPortLink: 'PC Port Link',
		pcPortLinkOption0: 'Auto negotiate',
		pcPortLinkOption1: 'Full duplex 10Mbps',
		pcPortLinkOption2: 'Full duplex 100Mbps',
		pcPortLinkOption3: 'Half duplex 10Mbps',
		pcPortLinkOption4: 'Half duplex 100Mbps',
		
		slaccEnable: 'ICMPv6 Status',
		
		vpn: 'VPN',
		importFile: 'Upload VPN Config',
		importStr: 'Import',
		
		voiceQos: 'Voice QoS',
		sipQos: 'SIP QoS',
		
		localRtpPort: 'Local RTP Port',
		maxRTPPort: 'Maximum RTP Port',
		minRTPPort: 'Minimum RTP Port',
		
		webServer: 'Web Server',
		httpPort: 'Http Port',
		httpsPort: 'Https Port',
		webServerType: 'Type',
		webServerTypeOption0: 'Disabled',
		webServerTypeOption1: 'http only',
		webServerTypeOption2: 'https only',
		webServerTypeOption3: 'http&https',

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

		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			lldp: 'LLDP transmits information as packets called LLDP Data Units (LLDPDUs). An LLDPDU consists of a set of Type-Length-Value (TLV) elements, each of which contains a particular type of information about the device or the port transmitting it.',
			cdp: 'CDP (Cisco Discovery Protocol) allows IP phones to receive and/or transmit device-related information from/to directly connected devices on the network that are also using the protocol, and store the information about other devices.',
			vlan: 'The VLAN configuration,used for specific configuration, and if you change it and want to make the changes effect immediately, you have to reboot it manually.',
			portLink: 'Connection rate for WAN and PC ports.',
			vpn: 'The VPN configuration, used for specific configuration.',
			voiceQos: 'When lack of network capacity, quality of service can provide users the passable value preferentially.',
			localRtpPort: 'Define voice transmission port.',
			x_802_1x: 'It configures the 802.1x authentication method.',
			webServer: 'The definition of web access type and port.',

			slaccEnable: 'Enable/disable the IP phone to obtain the IPv6 network settings via SLAAC (Stateless Address Autoconfiguration) method.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Key',
		type: 'Type',
		value: 'Value',
		label: 'Label',
		account: 'Account',
		ext: 'Extension',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'DSS Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Line',
		keyTypeOpt2: 'Speed Dial',
		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: 'Direct Pickup',
		keyTypeOpt10: 'Group Pickup',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conference',
		keyTypeOpt15: 'Forward',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'Hold',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Redial',
		keyTypeOpt20: 'Directory',
		keyTypeOpt21: 'Call Return',
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
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Key',
		type: 'Type',
		value: 'Value',
		label: 'Label',
		account: 'Account',
		ext: 'Extension',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Line Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Line',
		keyTypeOpt2: 'Speed Dial',
		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: 'Direct Pickup',
		keyTypeOpt10: 'Group Pickup',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conference',
		keyTypeOpt15: 'Forward',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'Hold',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Redial',
		keyTypeOpt20: 'Directory',
		keyTypeOpt21: 'Call Return',
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
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Key',
		type: 'Type',
		value: 'Value',
		label: 'Label',
		account: 'Account',
		
		programKeys: ['Mute', 'Hold', 'Redial', 
		              'Up', 'Down', 'Left', 'Right', 'Cancel', 'Ok', 
		              'SoftKey1', 'SoftKey2', 'SoftKey3', 'SoftKey4'],

		programKeys_A1x: ['Mute', 'Hold', 'Redial', 
		              'Up', 'Down', 'Left', 'Right', 'Cancel', 'Ok', 
		              'SoftKey1', 'SoftKey2', 'SoftKey3'],

		programKeys_A2x: ['Mute', 'Hold', 'Redial', 
		              'Up', 'Down', 'Left', 'Right', 'Cancel', 'Ok', 
		              'SoftKey1', 'SoftKey2', 'SoftKey3'],

		programKeys_CT11: ['Mute',
		              'Up', 'Down', 
		              'SoftKey1', 'SoftKey2', 'SoftKey3', 'SoftKey4'],

		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Line',
		keyTypeOpt2: 'Speed Dial',

		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: 'Direct Pickup',
		keyTypeOpt10: 'Group Pickup',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conference',
		keyTypeOpt15: 'Forward',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'Hold',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Redial',
		keyTypeOpt20: 'Directory',
		keyTypeOpt21: 'Call Return',
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
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
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
		key: 'Key',
		type: 'Type',
		value: 'Value',
		label: 'Label',
		account: 'Account',
		ext: 'Extension',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'Ext Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Line',
		keyTypeOpt2: 'Speed Dial',
		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: 'Direct Pickup',
		keyTypeOpt10: 'Group Pickup',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conference',
		keyTypeOpt15: 'Forward',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'Hold',
		keyTypeOpt18: 'DND',
		keyTypeOpt19: 'Redial',
		keyTypeOpt20: 'Directory',
		keyTypeOpt21: 'Call Return',
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
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountNumberOpt8: 'Auto',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'AET device ID which display in the status of linkable divice'
		}
},
extKeyBackHtml = {
	noLink: 'No expansion module connected! Please connect one or more units then refresh this page.'	
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
		dhcpTime: 'DHCP Time',
		disable: 'Disable',
		enable: 'Enable',
		auto: 'Automatic',
		timeZone: 'Time Zone',
		primaryNtp: 'Primary NTP Server',
		secondaryNtp: 'Secondary NTP Server',
		updateInterval: 'Update Interval(secs)',
		daylight: 'Daylight',
		fixedType: 'Fixed Type',
		fixedTypeOpt0: 'By Date',
		fixedTypeOpt1: 'By Week',
		startMonth: 'Start Month',
		January: 'January',
		February: 'February',
		March: 'March',
		April: 'April',
		May: 'May',
		June: 'June',
		July: 'July',
		August: 'August',
		September: 'September',
		October: 'October',
		November: 'November',
		December: 'December',
		startDate: 'Start Date',
		startHourDay: 'Start Hour of Day',
		startDayWeek: 'Start Day of Week',
		Sunday: 'Sunday',
		Monday: 'Monday',
		Tuesday: 'Tuesday',
		Wednesday: 'Wednesday',
		Thursday: 'Thursday',
		Friday: 'Friday',
		Saturday: 'Saturday',
		startWeekMonth: 'Start Week of Month',
		firstInMonth: 'First In Month',
		secondInMonth: 'Second In Month',
		thirdInMonth: 'Third In Month',
		fourthInMonth: 'Fourth In Month',
		lastInMonth: 'Last In Month',
		stopMonth: 'Stop Month',
		stopDate: 'Stop Date',
		stopHourDay: 'Stop Hour of Day',
		stopDayWeek: 'Stop Day of Week',
		stopWeekMonth: 'Stop Week of Month',
		offset: 'Offset(minutes)',
		manualTime: 'Manual Time',
		dateYmd: 'Date',
		autoDate: 'Generated Date',
		timeHms: 'Time',
		autoTime: 'Generated Time',
		timeFormat: 'Time Format',
		timeFormatOpt0: '12 Hour',
		timeFormatOpt1: '24 Hour',
		dateFormat: 'Date Format',
		backlightTime: 'Backlight time',
		backlightTimeOpt0: 'Always on',
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
		backlightLevel: 'Backlight Level',
		slaveBacklightLevel: 'Slave Backlight Level',
		expandBacklightLevel: 'Expand Backlight Level',
		slaveLcdContract: 'Slave LCD Contrast',
		ringTones: 'Ring Tones',
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
		delWallpaper: 'Delete',
		uploadWallpaper: 'Upload',
		cancelWallpaper: 'Cancel',
		screensaver: 'Screensaver',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			dhcpTime: 'Enables or disables the IP phone to update time with the offset time obtained from the DHCP server.',
			replaceRingTone: 'Recommended file format: 16-bit, wave; the file size should be less than 800 kB for the colour display phone, and less than 300 kB for the monochrome display phone.',
			timeZone: 'Select your timezone here.',
			updateInterval: 'Set the time interval for checking local appliance\'s time with the server.',
			daylight: 'Daylight Saving Time settings.',
			manualTime: 'Enable/Disable manual time setting.',
			timeFormat: 'Set time as 12-hour or 24-hour.',
			dateFormat: 'Set the date display format.',
			backlightTime: 'Set backlight time.',
			screensaver_timeout: 'Set Screensaver time.',
			backlightLevel: 'Phone backlight brightness adjustment.',
			ringTones: 'Select Ring Tone.',
			pictureSize: 'Best resolution is 461x278 pixels and the size should be less than 500KBytes.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Disable',
		enable: 'Enable',
		off: 'Off',
		on: 'On',
		forward: 'Forward',
		always: 'Always',
		busy: 'Busy',
		noAnswer: 'No Answer',
		afterRingTime: 'After Ring Time(secs)',
		
		target: 'Target',
		onCode: 'On Code',
		offCode: 'Off Code',
		
		dnd: 'Do Not Disturb',
		dndOnCode: 'DND On Code',
		dndOffCode: 'DND Off Code',
		authNum: 'Authorized Numbers(comma separated)',
		
		generalInfo: 'General Information',
		liveDialpad: 'Live Dialpad',
		interDigitTime: 'Inter Digit Time(secs)',
		autoAnswer: 'Auto Answer',
		autoAnswerDelay: 'Auto Answer Delay (sec)',
		ignoreMissedCall: 'Ignore Missed Call',
		callWaiting: 'Call Waiting',
		hotline: 'Hotline',
		hotlineTimeout: 'Hotline Time-out(0~180 secs)',
		keyAsSend: 'Key As Send',
		dialNowTimeout: 'Dial-now Time-out(secs)',
		busyToneTimer: 'Busy Tone Timer(secs)',
		returnCodeWhenRefuse: 'Return Code When Refuse',
		returnCodeWhenDnd: 'Return Code When DND',
		r404: '404 (Not found)',
		r480: '480 (Temporarily not available)',
		r486: '486 (Busy here)',
		rfc2543Hold: 'RFC 2543 Hold',
		useOutboundProxyInDialog: 'Use Outbound Proxy in Dialog',
		loginTimeout: 'Login Time-out(1~1000 minutes)',
		hidedtmf: 'Hide DTMF',
		multicastCodec: 'Multicast Codec',
		watchdog: 'Watch Dog',
		
		audioSettings: 'Audio Settings',
		callWaitingTone: 'Call Waiting Tone',
		headset: 'Headset Volume',
		handset: 'Handset Volume',
		handfree: 'Handfree Volume',
		ringer: 'Ringer Volume',
		headsetSend: 'Headset Send Volume',
		handsetSend: 'Handset Send Volume',
		handfreeSend: 'Handfree Send Volume',
		ringerDeviceForHeadset: 'Ringer Device for Headset',
		ringerDeviceForHeadsetOpt0: 'Use Speaker',
		ringerDeviceForHeadsetOpt1: 'Use Headset',
		
		transferSettings: 'Transfer Settings',
		blindTransferOnHook: 'Blind Transfer on Hook',
		attendedTransferOnHook: 'Attended Transfer on Hook',
		transferOnConHangUp: 'Transfer on Conference Hang Up',
		transferModeViaDsskey: 'Transfer Mode via DSSkey',
		transferModeViaDsskeyOpt0: 'New Call',
		transferModeViaDsskeyOpt1: 'Attended Tranfer',
		transferModeViaDsskeyOpt2: 'Blind Transfer',
		
		callPickup: 'Call Pickup',
		directCallPickup: 'Direct Call Pickup',
		directCallPickupCode: 'Direct Call Pickup Code',
		groupCallPickup: 'Group Call Pickup',
		groupCallPickupCode: 'Group Call Pickup Code',
		
		accept_sip_trust_server_only: 'Accept SIP Trust Server Only',
		recordUserId: 'Record User ID',
		extFunction: 'Ext Function',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: 'Conference hold when add new',

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
			
			liveDialpad: 'Enable/Disable "dial out automatically" on user dial-up interface.',
			interDigitTime: 'Automatically dial out delay time for live dialpad.',
			autoAnswer: 'Enable/Disable auto answer.',
			autoAnswerDelay: 'It configures the delay time (in seconds) before the IP phone automatically answers an incoming call.',
			callWaiting: 'Busy waiting for the new incoming call switches.',
			hotline: 'Set hotline number.',
			hotlineTimeout: 'Setting for hotline-delay time.',
			keyAsSend: 'Set keys as call out function.',
			dialNowTimeout: 'Interval for DialNow.',
			busyToneTimer: 'Busy tone after the call ends.',
			returnCodeWhenRefuse: 'Set return message for call rejection.',
			returnCodeWhenDnd: 'Set return message for Do Not Disturb.',
			rfc2543Hold: 'Two kinds of standards for Hold, need server support.',
			useOutboundProxyInDialog: 'Enable/Disable outbound proxy on conversation.',
			loginTimeout: 'It configures the timeout interval (in minutes) for web access authentication.',
			acceptSipTrustServerOnly: 'Enable/disable the IP phone to only accept the SIP message from the SIP and outbound proxy server.',

			callWaitingTone: 'Set tone for prompting a new call on a call(call waiting is turned on).',
			ringerDeviceForHeadset: 'Call ring Channel choice.',

			blindTransferOnHook: 'Enable/Disable blind tranfer through on hook.',
			attendedTransferOnHook: 'Enable/Disable Attend-Transfer and Semi-Attend-Transfer with onHook.',
			transferOnConHangUp: 'Enable/Disable to transfer to another two parties while conference initiator hang up.'
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
		fmVer: 'Firmware Version',
		hdVer: 'Hardware Version',
		
		resetToFactory: 'Reset to Factory',
		reboot: 'Reboot',		
		
		upgradeHeader: 'Upgrade Firmware',
		selectFw: 'Select Firmware',
		upgrade: 'Upgrade',
		
		tips: {
			upgradeHeader: 'Select the up-to-date firmware version released by suppliers to upgrade.'
		}
	},
	commonText: {
		resetConfirm: 'Do you want to reset to factory?',
		resetSuccess: 'Reset to factory successful. The device will reboot automatically.',
		resetFail: 'Reset to factory Failed, please try again!',
		
		rebootConfirm: 'Do you want to reboot?',
		
		uploadFilePrompt: 'This is to upload file:',
		upgradeMsg: 'Please do not turn the power off!',
		upgradeText: 'Upgrading, please waiting...',
		
		upgradeFail: 'Upgrade failed, please try again!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'Pcap Feature',
		start: 'Start',
		stop: 'Stop',
		exportStr: 'Export',
		
		debug: 'Debug'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Auto Provision',
		PnPEnable: 'PnP Active',
		DHCPEnable: 'DHCP Active',
		provisioningServer: 'Provisioning Server',
		userName: 'User Name',
		password: 'Password',
		commonAESKey: 'Common AES Key',
		MACAESKey: 'MAC-Oriented AES Key',
		checkNewConfig: 'Check New Config',
		off: 'Off',
		on: 'On',
		repeatedly: 'Repeatedly',
		interval: 'Interval(minutes)',
		weekly: 'Weekly',
		time: 'Time',
		dayOfWeek: 'Day of week',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			PnPEnable: 'The request to the server to obtain a support URL for upgrade',
			DHCPEnable: 'To obtain a support URL for upgrade from DHCP server',
			provisioningServer: 'Set provisioning server address.',
			password: 'Server password',
			checkNewConfig: 'On: Check configuration on the server after the device booting up.</br>Off: Do not check configuration on the server after the device booting up.'
		}
	},
	showText: {
		weekly:  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Import / Export Config',
		importFile: 'Import File',
		importStr: 'Import',
		exportStr: 'Export',
		exportUserData: 'Export User Data',

		exportImportConfig: 'Import/Export CFG File',
		
		exportSyslog: 'Export System Log',
		logLocation: 'Log Location',
		logLocationOpt0: 'Local',
		logLocationOpt1: 'Server', 
		serverName: 'Server Name',
		logLevel: 'Log Level',
		logOpt0: 'Fatal',
		logOpt1: 'Error',
		logOpt2: 'Warning',
		logOpt3: 'Info',
		logOpt4: 'Debug',
		exportStr2: 'Export',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			exportImportConfig: 'The imported or exported file must have an auto provision file format. The exported file includes the modified configuration only, so it will be empty if no changes were made.',
			importExportCfg: 'Click Export to export current phone\'s configuration; click Import, it will import the configuration to the current phone and reboot.',
			exportSyslog: 'If the type is Local, it will export the syslog directly; if the type is server, it will export the syslog to the specified server.'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'Action URI allow IP List',
		remoteControl:'Remote Control',
		cstaControl: 'CSTA Control',
		disable: 'Disable',
		enable: 'Enable',
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
		replaceRule: 'Replace Rule',
		dialNow: 'Dial-now',
		areaCode: 'Area Code',
		blockOut: 'Block Out'
	},
	replaceRuleTitle: ['Index', 'Number', 'Replace', 'Account'],
	dialNowsTitle: ['Index', 'Dial-now Rule', 'Account'],
	replaceRuleForm: {
		num: 'Number',
		replace: 'Replace',
		account: 'Account',
		add: 'Add',
		edit: 'Edit',
		del : 'Delete',
		save: 'Save'
	},
	dialNowsForm: {
		rule: 'Dial-now Rule',
		account: 'Account',
		add: 'Add',
		edit: 'Edit',
		del : 'Delete',
		save: 'Save'
	},
	form3: {
		code: 'Code',
		minLen: 'Minimum length',
		maxLen: 'Maximum length',
		areaCodeAccount: 'Account',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Block Out Number',
		account: 'Account',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
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
		disable: 'Disable',
		enable: 'Enable',
		
		echoCancellation: 'Echo Cancellation',
		echoCanceller: 'Echo Canceller',
		echoCancellerOpt0: 'Low Level',
		echoCancellerOpt1: 'Medium Level',
		echoCancellerOpt2: 'High Level',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Jitter Buffer',
		type: 'Type',
		typeOpt0: 'Fixed',
		typeOpt1: 'Adaptive',
		minDelay: 'Minimum Delay',
		maxDelay: 'Maximum Delay',
		normalDelay: 'Normal Delay',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			echoCancellation: 'Echo cancellation settings.',
			echoCanceller: 'Select echo canceller.',
			vad: 'Voice Activity Detection.',
			cng: 'Comfort Noise Generator.',
			jitterBuffer: 'This is a data shared area, voice and data packets can be collected, stored and sent to the uniform sound processor.'
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

		disable: 'Disable',
		enable: 'Enable',

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

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			emergency_call: 'Used for calling out emergency number when it is set as keypad lock'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: 'Disable',
		enable: 'Enable',

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

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

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
		passwdModify: 'Password Modify',
		userType: 'User Type',
		currentPasswd: 'Current Password',
		newPasswd: 'New Password',
		confirmPasswd: 'Confirm Password',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			userType: 'Select your type. If you log in as user, you can only change your own password. If you login as an administrator, you can modify both the user\'s and admin\'s passwords.'
		}
	},
	showText: {
		pwdNoMatch: 'The two passwords you entered did not match',
		modifyFailed: 'Modify password fail, plean try again!'
	}
},
contactsHtml = {
	mytabMenu: ['Contacts', 'Black List'],
	tableHeader: ['Index', 'Name', 'Office Number', 'Mobile Number', 'Other Number', 'Account'],
	buttonDiv: {
		save: 'Save',
		del: 'Delete',
		moveToBlack: 'Move to Black List',
		moveToWhite: 'Move to Contacts'
	},
	editDiv: {
		contacts: 'Contacts',
		name: 'Name',
		officeNum: 'Office Number',
		mobileNum: 'Mobile Number',
		otherNum: 'Other Number',
		account: 'Account',
		accountOpt8: 'Auto',
		accountOpt1: 'Account 1',
		accountOpt2: 'Account 2',
		accountOpt3: 'Account 3',
		accountOpt4: 'Account 4',
		accountOpt5: 'Account 5',
		accountOpt6: 'Account 6',
		ring: 'Ring',
		ringOpts: ['Auto', 'Ring1.wav', 'Ring2.wav', 'Ring3.wav', 'Ring4.wav', 
		           'Ring5.wav', 'Ring6.wav', 'Ring7.wav', 'Ring8.wav', 'Ring9.wav', 'Ring10.wav'],
		photo: 'Photo',
		defaultPhoto: 'Default',
		add: 'Add',
		deletePhoto: 'Delete',
		uploadPhoto: 'Upload Photo',
		pictureSize: 'Best resolution is 100x135 pixels and the size should be less than 250KBytes.',
		edit: 'Edit',
		search: 'Search',
		
		importAndExport: 'Import and Export Local Contacts',
		importFile: 'Import Local Contacts',
		importStr: 'Import',
		exportStr: 'Export'
	},
	
	shwoText: {
		delConfirm: 'Are you sure to delete the chosen contacts ?',
		delConfirm1: 'Note: the contact photo will not be recovered after save!', 
		selectEmpty: 'Please select one record at least.',
		selectTooMuch: 'Selected record is too much!',
		nameEmpty: 'Name can not be empty!',
		nameExist: 'Name has existed!',
		phonebookFull: 'Only less than 400 items in phonebook list!',
		blacklistFull: 'Only less than 50 items in blacklist!',
		contentEmpty: 'The content should not be empty!',
		notFind: 'Not find the specified contact.'
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
	mytabMenu: ['Dialed List', 'Missed List', 'Received List', 'Forwarded List'],
	tableHeader: ['Index', 'Datetime', 'Duration', 'Local Identity', 'Name', 'Tel Number']
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
