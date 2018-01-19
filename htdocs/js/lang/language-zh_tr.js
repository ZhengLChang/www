//公共的驗證資訊
var commonValidMsg = {
	missingMsg: '請輸入內容',
	invalidIpMsg: '無效的IP地址'
},
uploadCommon = {
	uploadFilePrompt: '上傳文件如下:',
	uploadMsg: '請不要關閉電源!',
	uploadText: '上傳中, 請等待...',
	uploadSuccess: '上傳成功!',
	uploadFail: '上傳失敗, 請重試!'
},
alertMsg = {
	titlePrompt: '提示',
	titleConfirm: '確認',
	noChange: '沒有修改!',
	invalidVal: '無效的值!',
	saveSuccess: '儲存成功!',
	enabledOptionsEmpty: '啟用的編解碼至少需要一項!',
	codecsConflict: 'iLBC_13_3 和 iLBC_15_2 只能選其一!',
	emptyContent: '內容為空!',
	invalidDTMF: '無效  DTMF!',
	webServicesDisable: 'Web 服務已經停用!',
	features: '在啟用特徵碼的時候的情況下，關閉特徵碼不能為空!',
	invalidAccountList: '無效的帳戶列表!',
	dialPlanMsg1: '請至少選擇一條記錄.',
	voiceError1: '最大值應大於最小值',
	voiceError2: '請在最大值和最小值之間選擇合適值',
	fileIsEmpty: '上傳文件為空!',
	upgradeFileFormateErr: '升級文件格式錯誤(*.fw)!',
	openvpnFile: 'OpenVPN文件格式錯誤(*.tar/*.TAR)!',
	wallpaperFormatError: '檔案名只能包含拉丁字元且圖片格式必須是PNG/JGP/BMP。',
	systemFileCannotDelete: '僅支持刪除自定義文件！'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: '請不要關閉電源!',
			rebootText: '重啟中, 請等待...'
		},
		showProgress: {
			progressTitle: '提示'
		}
	},
	ErrorInfo: {
		networkError: '網路錯誤, 請檢查!',
		webServerError: 'Web服務錯誤, 請重試!',
		unknownError: '未知錯誤:',
		dataNoChanged: '沒有修改!',
		Error_409: '該文件已存在.',
		Error_413: '該文件過大.',
		phoneBusyError: '通話中，請稍後...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: '註銷失敗, 請重試!'
	},
	pluginInit: {
		ok: '確定',
		cancel: '取消'
	}
},
status401Html = {
	errorInfo1 : '你未被授權訪問web介面.',
	errorInfo2 : '請聯繫你的支持團隊或3分鐘後再試一次.',
	errorInfo3: '未授權'
},
//index.html
indexHtml={
	top:{
		logout: '註銷',
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
	//一級標題
	nav:{
		basic: '基本',
		account: '帳號配置',
		network: '網路配置',
		dSSKey: '可程式設計按鍵',
		phone: '話機配置',
		contacts: '電話簿',
		security: '安全設置'
	},
	//頁面底部
	footer:{
		footerEmail: 'http://www.platan.pl',
		footerSupport: 'http://www.platan.pl',
		footerWebsite: 'http://www.platan.pl',
		footerDownload: 'http://www.platan.pl',
		footerProductWebsite: 'http://www.platan.pl',
		website: '網站',
		products: '產品',
		support: '支持',
		download: '下載',
		contactus: '聯繫我們',
		atcomRights: '©2018 ATCOM 版權所有.'
	},
	//二級選項
	submenu:{
		//Status
		sStatus: '狀態',
		sWizard: '快捷設置',
		//Account
		aBasic: '基礎',
		aCodecs: '編解碼',
		aAdvanced: '進階',
		//NetWork
		nBasic: '基礎',
		nWifi: 'Wi-Fi',
		nAdvanced: '進階',
		//DSS key
		dMemory: '記憶鍵',
		dLink: '帳號鍵',
		dProgrammable: '可程式設計功能鍵',
		dExt: '擴展台功能鍵',
		dAetAdv: 'EXT高級設置',

		//Phone
		pDNDAndForward: '免打擾&呼叫轉移',
		pPrefetence: '基本配置',
		pFeatures: '功能配置',
		pUpgrade: '升級',
		pAuto: '自動更新',
		pConfig: '系統組態',
		pRemoteControl: '遠程控制',
		pActionUrl: 'Action URL',
		pDialPlan: '撥號規則',
		pVoice: '聲音',
		pRing: 'Alert Info',
		pTones: '信號音',
		pSms: '短訊息',
		pAction: 'Action URL',
		pSoftkey: '軟鍵佈局',
		pPhoneLock: '鍵盤鎖',
		pSecurity: '安全配置',
                pPhoneTr069: 'TR069',
		pDebug: '調試',
		//Contacts
		cContacts: '電話簿',
		cXMLPhonebook: '遠端電話簿',
		cPhoneCall: '呼叫資訊',
		cLDAP: 'LDAP',
		cMulticastIp: '組播地址',
		cBroaddoft: 'Broadsoft',
		cCallLog: '呼叫記錄',
		//Security
		sPassword: '密碼',
		sStrusted: '受信任證書',
		sServer: '話機證書'
	}
},
statusHtml = {
	version: {
		verTitle: '版本',
		fwVer: '韌體版本',
		hwVer: '硬體版本',
		product_name: '型號'
	},
	networkConfig:{
		netConfigTitle: '網絡配置',
		internetPortType: 'WAN接口', /*ipv4 = 1, ipv6 = 2, ipv4 & ipv6 = 3*/
		internType1: 'IPv4',
		internType2: 'IPv6',
		internType3: 'IPv4 & IPv6'
	},

	network: {
		netTitle: 'IPv4',
		internetPort: 'WAN口類型',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: '靜態IP',
		ip: 'IP地址',
		subnetMask: '子網路遮罩',
		gatewag: '閘道',
		primaryDNS: '主要DNS伺服器',
		secondaryDNS: '備用DNS伺服器',
		wiredMac: '有線MAC地址',
		WIFIMac: '無線MAC地址',
		vpnStatus: 'VPN 狀態',
		vpnStatusOpt0: '連接中',
		vpnStatusOpt1: '禁止',
		vpnStatusOpt2: '連接失敗',
		vpnStatusOpt3: '已連接',
		vpnIp: 'VPN IP'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'WAN口類型',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: '靜態IP',
		ip: 'IP地址',
		networkPrefix: 'IPv6前綴',
		gatewag: '閘道',
		primaryDNS: '主要DNS伺服器',
		secondaryDNS: '備用DNS伺服器'
	},
	tips: {
		netConfigTip: '顯示設備的ip地址類型',
		verTip: '顯示裝置當前的韌體版本和硬體版本。',
		netTip: '顯示話機網路配置的詳細情況。'
	}
},
wizardHtml = {
	form1: {
		networkType: '網絡配置',
		InternetPort: 'LAN口配置',
		dhcp: 'DHCP',

		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: '靜態IP',

		staticIpSettings: '靜態IP 設置',
		ip: 'IP地址',
		subnetMask: '子網路遮罩',
		defaultGateway: '預設閘道器',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: '主要DNS伺服器',
		secondaryDNS: '備用DNS伺服器',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6前綴',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'SIP 設置',
		accountActive: '帳號啟動',
		disable: '停用',
		enable: '啟用',
		labelName: '顯示標籤',
		displayName: '顯示名字',
		registerName: '認證名稱',
		userName: '用戶名稱',
		password: '密碼',
		
		sipServer: 'SIP伺服器',
		sipServerPort: '埠',
		
		back: '上一步',
		next: '下一步',
		
		tips: {
			dhcp: '自動向DHCP伺服器請求獲得IP位址，子網路遮罩，閘道，DNS等。',
			staticIp: '手動配置IP位址，子網路遮罩，閘道，DNS等。',
			labelName: '在當前設備液晶上顯示的名稱。',
			displayName: '撥打電話時，對方話機顯示的本機名字。',
			registerName: '由電信商提供的註冊名。',
			userName: '由電信商提供的用戶名。',
			password: '由電信商提供的密碼。',
			sipServer: '由電信商提供的SIP伺服器。'
		}
	},
	common: {
		finish: '完成',
		next: '下一步'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: '帳號',
		accountNumberOpt1: '帳號 1',
		accountNumberOpt2: '帳號 2',
		accountNumberOpt3: '帳號 3',
		accountNumberOpt4: '帳號 4',
		accountNumberOpt5: '帳號 5',
		accountNumberOpt6: '帳號 6',
		
		registerStatus: '註冊狀態',
		
		accountActive: '帳號啟動',
		disable: '停用',
		enable: '啟用',
		labelName: '顯示標籤',
		displayName: '顯示名字',
		registerName: '認證名稱',
		userName: '用戶名稱',
		password: '密碼',
		
		sipServer: 'SIP伺服器',
		sipServerPort: '埠',
		redundancy_proxy: 'SIP備份伺服器',

		enableOutboundProxyServer: 'Outbound 狀態',
		outboundProxyServer: 'Outbound 代理',
		outboundProxyServerPort: '埠',
		make_call_without_register: '非註冊撥打模式',
		
		verifyServer: 'Verify server',
		transport: '傳輸方式',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'NAT穿透',
		TLSVersion: 'TLS版本',
		natTraversalOpt1: 'STUN',
		stunServer: 'STUN伺服器',
		port: '埠',
		
		voiceMail: '語音郵件',
		anonymousCall: '匿名呼叫',
		off: '關',
		on: '開',
		onCode: '開啟特徵碼',
		offCode: '關閉特徵碼',
		anonymousCallRejection: '拒接匿名電話',
		ringTones: '鈴聲類型',
		ringTonesOpt0: '預設',
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
		
		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			labelName: '在當前設備液晶上顯示的名稱。',
			displayName: '撥打電話時，對方話機顯示的本機名字。',
			registerName: '由電信商提供的認證名稱。',
			userName: '由電信商提供的用戶名。',
			password: '由電信商提供的密碼。',
			sipServer: '由電信商提供的SIP伺服器。',
			enableOutboundProxyServer: '在有防火牆/NAT時用，用於處理信號及説明多媒體資料流通過防火牆。',
			redundancy_proxy: '備用SIP服務器',
			outboundProxyServer: 'Outbound代理伺服器。',
			verifyServer: 'verifyServer',
			transport: '有UDP，TCP，TLS三種選擇。UDP表示註冊的包用的是UDP，TCP表示註冊的包用的是TCP，TLS（Transport Layer Security）是加密的。',
			natTraversal: '啟用和禁用STUN伺服器。',
			stunServer: 'STUN伺服器允許所有的NAT客戶終端(如防火牆後邊的電腦)與位於局區域網以外的VOIP服務商實現電話通話。',
			voiceMail: '設置該帳號的voice mail號碼。',
			anonymousCall: '啟用和禁用匿名呼叫。',
			onCode: '設置匿名呼叫開啟特徵碼，話機通過向伺服器發送該特徵碼開啟匿名呼叫。',
			offCode: '設置匿名呼叫禁用特徵碼，話機通過向伺服器發送該特徵碼禁用匿名呼叫。',
			anonymousCallRejection: '啟用和禁用拒接匿名電話。',
			onCodeRejection: '設置開啟拒接匿名電話征碼，話機通過向伺服器發送該特徵碼開啟拒接匿名電話。',
			offCodeRejection: '設置禁用拒接匿名電話特徵碼，話機通過向伺服器發送該特徵碼關閉拒接匿名電話。',
			ringTones: '設置該帳號的鈴聲類型。',
			make_call_without_register: '未註冊時，可接打電話'
		}
	},
	showText: {
		unRegistered: '註冊失敗',
		registered: '已註冊'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: '帳號',
		accountNumberOpt1: '帳號 1',
		accountNumberOpt2: '帳號 2',
		accountNumberOpt3: '帳號 3',
		accountNumberOpt4: '帳號 4',
		accountNumberOpt5: '帳號 5',
		accountNumberOpt6: '帳號 6',
		
		audioCodecs: '語音編解碼',
		disableCodecs: '停用的編解碼',
		enableCodecs: '啟用的編解碼',
		
		butConfirm: '確認',
		butCancel: '取消'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: '帳號',
		accountNumberOpt1: '帳號 1',
		accountNumberOpt2: '帳號 2',
		accountNumberOpt3: '帳號 3',
		accountNumberOpt4: '帳號 4',
		accountNumberOpt5: '帳號 5',
		accountNumberOpt6: '帳號 6',
		
		udpKeepAliveMsg: 'UDP保活訊息',
		disable: '停用',
		enable: '啟動',
		udpKeepAliveInterval: 'UDP保活訊息發送間隔(秒)',
		
		loginExpires: '超時(秒)',
		localSipPort: '本地SIP埠',
		subscribePeriod: '訂閱週期(秒)',
		
		dtmfType: 'DTMF 類型',
		dtmfTypeOpt0: 'Inband',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'DTMF有效負荷(秒)',
		reliableRetransmission: '除100之外的1XX訊息的可靠性回應',
		
		subscribeForMwi: 'MWI訂閱',
		mwiSubscribePeriod: 'MWI訂閱週期(秒)',
		
		useSessionTimer: '會話計時器',
		sessionTimer: '會話計時器間隔(秒)',
		refresher: '刷新會話方',
		
		useUserPhone: 'Use user=phone',
		voiceEncryption: '語音加密(SRTP)',
		off: '關',
		on: '開',
		ptime: '打包時間 (毫秒)',
		
		blfListUri: 'BLF List 標識',
		derectedCallPickupCode: '指定代答的快捷碼',
		groupCallPickupCode: '同組代答的快捷碼',
		
		sipRegRetryTimer: 'SIP註冊重試間隔',
		earlyMedia: '早期媒體',
		sipServerType: 'SIP伺服器類型',
		sipServerTypeOpt0: '預設',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'Broadsoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: '對講碼',
		conferenceType: '會議類型',
		localConference: '本地會議',
		networkConference: '網絡會議',
		conferenceCode: '會議特徵碼',
		
		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			udpKeepAliveMsg: '設備每隔一段時間發送一個UDP的包保持埠一直處於使用的狀態，避免伺服器關閉那個埠。',
			loginExpires: '註冊超時的時間，即每次註冊認為的有限期限，在這個時間內，設備必須再去註冊，伺服器才認為設備處於註冊中的狀態，否則認為掉線。',
			localSipPort: '設備自己的埠號，用於發送和接收SIP包。',
			subscribePeriod: '訂閱的超時時間。',
			dtmfType: '通話中按數位鍵發送DTMF 的方式，包括帶內，帶外（RFC2833）和INFO的方式。',
			reliableRetransmission: '支援PRACK的傳輸。',
			subscribeForMwi: '設備發送Subscribe包給伺服器訂閱Message Waiting當設備註冊上以後會發一個Subscribe的訂閱包給伺服器。',
			useSessionTimer: '這個選項用於開啟和關閉刷新會話。如果開啟這個功能，那麼在通話過程中會發送Invite包去刷新會話。',
			sessionTimer: '刷新會話的時間間隔。',
			refresher: '刷新會話，Uac由用戶端去刷新會話，Uas由服務端去刷新會話。',
			useUserPhone: '如果開啟這個功能，在Invite包裡面就會多一個user=phone的標誌。',
			voiceEncryption: '用於開啟和關閉加密語音包。',
			ptime: '協商所用的codec的RTP包兩包之間的時間間隔。',
			blfListUri: '用於Broadsoft伺服器上訂閱BLF。',
			sipRegRetryTimer: '註冊失敗後重新嘗試註冊的時間週期。'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'LAN口配置',
		IPv4Config: 'IPv4配置',
		IPv6Config: 'IPv6配置',
		dhcp: 'DHCP',
		staticIp: '靜態IP',
		ip: 'IP地址',
		subnetMask: '子網路遮罩',
		defaultGateway: '預設閘道器',
		IPv6Prefix: 'IPv6前缀(0~128)',

        StaticDNSEnable: '靜態DNS',
   		on: '开',
		off: '关',

		primaryDNS: '主要DNS伺服器',
		secondaryDNS: '備用DNS伺服器',
		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			dhcp: '自動向DHCP伺服器請求獲得IP位址，子網路遮罩，閘道，DNS等。',
			staticIp: '手動配置IP位址，子網路遮罩，閘道，DNS等。',
			StaticDNSEnable: '在IPv4/IPv6 DHCP模式下，是否使用靜態的IPv4/IPv6 DNS'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Wi-Fi 設置',
		wifi_on_warning: '當開啟Wi-Fi時，請斷開LAN口網線！',
		wifi_enable: 'Wi-Fi',
		on: '開',
		off: '關',
		search_wifi: '搜索Wi-Fi',
		wifi_ssid: '當前SSID',
		wifi_key: '金鑰',
		butConfirm: '確認',
		butCancel: '取消',
	},
	showText: {
		close_wifi: '關閉Wi-Fi…',
		open_wifi: '開啟Wi-Fi…',
		search_wifi: '搜索…',
		wifi_table_header: ['序號', 'SSID', '信號', '選擇'],
		wifi_list_title: 'Wi-Fi列表',
		submitting: '提交…'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: '虛擬區域網路',
		vlanLan: 'LAN',
		active: '啟動',
		disable: '停用',
		enable: '啟用',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: '優先順序',
		vlanPc: 'PC',
		vlanPcActive: '啟動',
		vlanDataVid: 'VID',
		vlanDataPriority: '優先順序',
		
		portLink: '埠鏈路',
		wanPortLink: 'WAN埠鏈路',
		wanPortLinkOption0: '自動協商',
		wanPortLinkOption1: '全雙工10Mbps',
		wanPortLinkOption2: '全雙工100Mbps',
		wanPortLinkOption3: '半雙工10Mbps',
		wanPortLinkOption4: '半雙工100Mbps',
		wanPortLinkOption5: 'Half duplex 1000Mbps',
		wanPortLinkOption6: 'Full duplex 1000Mbps',
			
		pcPortLink: 'PC埠鏈路',
		pcPortLinkOption0: '自動協商',
		pcPortLinkOption1: '全雙工10Mbps',
		pcPortLinkOption2: '全雙工100Mbps',
		pcPortLinkOption3: '半雙工10Mbps',
		pcPortLinkOption4: '半雙工100Mbps',
		
		slaccEnable: 'ICMPv6狀態',

		vpn: 'VPN',
		importFile: '上传VPN配置',
		importStr: '导入',
		
		voiceQos: '語音服務品質',
		sipQos: 'SIP服務品質',
		
		localRtpPort: '本地RTP埠',
		maxRTPPort: '最大RTP埠',
		minRTPPort: '最小RTP埠',
		
		webServer: 'Web服務',
		httpPort: 'Http埠',
		httpsPort: 'Https 埠',
		webServerType: '類型',
		webServerTypeOption0: '停用',
		webServerTypeOption1: '僅http',
		webServerTypeOption2: '僅https',
		webServerTypeOption3: 'http&https',

        span_to_pc: '透傳到PC',
        sys_span_to_pc_port: '透傳到PC端口',

		lldp: 'LLDP',
		cdp: 'CDP',
		package_interval: '發包間隔(1~3600秒)',

		x_802_1x: '802.1X',
		x_802_1x_mode: '模式',
		x_802_1x_mode0: '禁用',
		x_802_1x_mode1: 'EAP-MD5',
		x_802_1x_mode2: 'EAP-TLS',
		x_802_1x_mode3: 'EAP-PEAP/MSCHAPv2',
		x_802_1x_mode4: 'EAP-TTLS/EAP-MSCHAPv2',
		x_802_1x_mode5: 'EAP-PEAP/GTC',
		x_802_1x_mode6: 'EAP-TTLS/EAP-GTC',
		x_802_1x_mode7: 'EAP-FAST',
		x_802_1x_anonymous_identity: '匿名身份識別',
		x_802_1x_identity: '身份識別',
		x_802_1x_password: 'MD5密碼',
		x_802_1x_ca_cert: 'CA證書',
		x_802_1x_device_cert: '設備證書',
		x_802_1x_upload: '上傳',

		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			lldp: 'LLDP（鏈路層發現協議）用於向網絡中其他設備報告自己的信息，同時也去發現和學習其他開啟LLDP功能設備的信息，包括系統名稱，電源規格，語音VLAN，語音優先級等',
			cdp: 'CDP（思科發現協議）用於向網絡中其他設備報告自己的信息，同時也去發現和學習其他開啟CDP功能設備的信息，包括系統名稱，電源規格，語音VLAN，語音優先級等',
			vlan: '虛擬區域網路配置，用於特定配置, 如果您更改它，並希望更改立即生效，您必須手動重新啟動它。',
			portLink: '鏈路層發現協定。',
			vpn: '虛擬私人網路絡配置，用於特定配置。',
			voiceQos: '當網路容量不足，服務品質可優先向使用者提供通過設定值。',
			localRtpPort: '定義語音傳輸的埠。',

			x_802_1x: '配置 802.1x 認證方式。',
			webServer: '定義網頁訪問類型，埠。',
			slaccEnable: '它啟用或禁用ip電話通過SLAAC（無狀態地址自動配置）方法獲取IPv6網絡設置'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: '按鍵',
		type: '類型',
		value: '值',
		label: '顯示標籤',
		account: '帳號',
		ext: '分機號',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: '記憶鍵',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: '線路',
		keyTypeOpt2: '快速撥號',
		keyTypeOpt4: '短訊息',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: '指定代答',
		keyTypeOpt10: '同組代答',
		keyTypeOpt11: '呼叫駐留',
		keyTypeOpt12: '對講機',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: '會議',
		keyTypeOpt15: '呼叫前轉',
		keyTypeOpt16: '來電轉接',
		keyTypeOpt17: '呼叫保持',
		keyTypeOpt18: '免打擾',
		keyTypeOpt19: '重撥',
		keyTypeOpt20: '電話簿',
		keyTypeOpt21: '回撥',
		keyTypeOpt22: '首碼',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: '無',
		keyTypeOpt32: '歷史記錄',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: '語音信箱',
		keyTypeOpt35: '靜音',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: '組播',
		keyTypeOpt39: '組播列表',
		
		accountNumberOpt1: '帳號 1',
		accountNumberOpt2: '帳號 2',
		accountNumberOpt3: '帳號 3',
		accountNumberOpt4: '帳號 4',
		accountNumberOpt5: '帳號 5',
		accountNumberOpt6: '帳號 6',
		accountNumberOpt8: '自動',
		
		GroupPickup: '组代接',
		butConfirm: '確認',
		butCancel: '取消'
	}	
},
lineKeyHtml = {
	form1: {
		key: '按鍵',
		type: '類型',
		value: '值',
		label: '顯示標籤',
		account: '帳號',
		ext: 'BLF代答碼',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: ' 賬號鍵',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: '線路',
		keyTypeOpt2: '快速撥號',
		keyTypeOpt4: '短訊息',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: '指定代答',
		keyTypeOpt10: '同組代答',
		keyTypeOpt11: '呼叫預留',
		keyTypeOpt12: '對講機',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: '會議',
		keyTypeOpt15: '呼叫前轉',
		keyTypeOpt16: '來電轉接',
		keyTypeOpt17: '呼叫保持',
		keyTypeOpt18: '免打擾',
		keyTypeOpt19: '重撥',
		keyTypeOpt20: '電話簿',
		keyTypeOpt21: '回撥',
		keyTypeOpt22: '首碼',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: '無',
		keyTypeOpt32: '歷史記錄',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: '語音信箱',
		keyTypeOpt35: '靜音',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: '組播',
		keyTypeOpt39: '組播列表',
		
		accountNumberOpt1: '帳號 1',
		accountNumberOpt2: '帳號 2',
		accountNumberOpt3: '帳號 3',
		accountNumberOpt4: '帳號 4',
		accountNumberOpt5: '帳號 5',
		accountNumberOpt6: '帳號 6',
		accountNumberOpt8: '自動',
		
		GroupPickup: '组代接',
		butConfirm: '確認',
		butCancel: '取消'
	}	
},
programKeyHtml = {
	form1: {
		key: '按鍵',
		type: '類型',
		value: '值',
		label: '顯示標籤',
		account: '帳號',
		
		programKeys: ['靜音', '保持', '重撥', 
		              '向上鍵', '向下鍵', '向左鍵', '向右鍵', '取消', '確定', 
		              '軟鍵1', '軟鍵2', '軟鍵3', '軟鍵4'],
		
		programKeys_A1x: ['靜音', '保持', '重撥', 
		              '向上鍵', '向下鍵', '向左鍵', '向右鍵', '取消', '確定', 
		              '軟鍵1', '軟鍵2', '軟鍵3',],

		programKeys_A2x: ['靜音', '保持', '重撥', 
		              '向上鍵', '向下鍵', '向左鍵', '向右鍵', '取消', '確定', 
		              '軟鍵1', '軟鍵2', '軟鍵3',],

		programKeys_CT11: ['靜音',
		              '向上鍵', '向下鍵', 
		              '軟鍵1', '軟鍵2', '軟鍵3', '軟鍵4'],
		keyTypeOpt0: 'Default',
		keyTypeOpt1: '線路',
		keyTypeOpt2: '快速撥號',

		keyTypeOpt4: '短訊息',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: '指定代答',
		keyTypeOpt10: '同組代答',
		keyTypeOpt11: '呼叫預留',
		keyTypeOpt12: '對講機',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: '會議',
		keyTypeOpt15: '呼叫前轉',
		keyTypeOpt16: '來電轉接',
		keyTypeOpt17: '呼叫保持',
		keyTypeOpt18: '免打擾',
		keyTypeOpt19: '重撥',
		keyTypeOpt20: '電話簿',
		keyTypeOpt21: '回撥',
		keyTypeOpt22: '首碼',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: '無',
		keyTypeOpt32: '歷史記錄',
		keyTypeOpt33: '狀態',
		keyTypeOpt34: '語音信箱',
		keyTypeOpt35: '靜音',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: '取消',
		keyTypeOpt38: '組播',
		keyTypeOpt39: '組播列表',
		
		accountNumberOpt1: '帳號 1',
		accountNumberOpt2: '帳號 2',
		accountNumberOpt3: '帳號 3',
		accountNumberOpt4: '帳號 4',
		accountNumberOpt5: '帳號 5',
		accountNumberOpt6: '帳號 6',
		accountNumberOpt8: '自動',
		
		GroupPickup: '组代接',
		butConfirm: '確認',
		butCancel: '取消'
	}	
},
aetAdvHtml = {
	form1: {
		networkSetting: '網絡設置',
		innerNet: '內部網絡',

		dhcp: 'DHCP',
		staticIp: '靜態IP',
		ip: 'IP地址',
		subnetMask: '子網路遮罩',
		defaultGateway: '預設閘道器',
		StaticDNSEnable: '靜態DNS',
   		on: '开',
		off: '关',

		primaryDNS: '主要DNS伺服器',
		secondaryDNS: '備用DNS伺服器',
		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			innerNet: '內部網絡',
			dhcp: '自動向DHCP伺服器請求獲得IP位址，子網路遮罩，閘道，DNS等。',
			staticIp: '手動配置IP位址，子網路遮罩，閘道，DNS等。',
			StaticDNSEnable: '在IPv4/IPv6 DHCP模式下，是否使用靜態的IPv4/IPv6 DNS'
		}
	}
},
extKeyHtml = {
	form1: {
		linkControl: '連接控制',
		linkableDivice: '可連接設備ID',
		key: '按鍵',
		type: '類型',
		value: '值',
		label: '顯示標籤',
		account: '帳號',
		ext: 'BLF代答碼',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: '擴展鍵',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: '線路',
		keyTypeOpt2: '快速撥號',
		keyTypeOpt4: '短訊息',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: '指定代答',
		keyTypeOpt10: '同組代答',
		keyTypeOpt11: '呼叫預留',
		keyTypeOpt12: '對講機',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: '會議',
		keyTypeOpt15: '呼叫前轉',
		keyTypeOpt16: '來電轉接',
		keyTypeOpt17: '呼叫保持',
		keyTypeOpt18: '免打擾',
		keyTypeOpt19: '重撥',
		keyTypeOpt20: '電話簿',
		keyTypeOpt21: '回撥',
		keyTypeOpt22: '首碼',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: '無',
		keyTypeOpt32: '歷史記錄',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: '語音信箱',
		keyTypeOpt35: '靜音',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: '組播',
		keyTypeOpt39: '組播列表',
		
		accountNumberOpt1: '帳號 1',
		accountNumberOpt2: '帳號 2',
		accountNumberOpt3: '帳號 3',
		accountNumberOpt4: '帳號 4',
		accountNumberOpt5: '帳號 5',
		accountNumberOpt6: '帳號 6',
		accountNumberOpt8: '自動',
		
		GroupPickup: '组代接',
		butConfirm: '確認',
		butCancel: '取消'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: '需填寫待連接設備的設備ID,可在待連接設備的狀態菜單中查找'
		}
	
},
extKeyBackHtml = {
	noLink: '未檢測到擴展台! 請連接後刷新本頁.'	
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
		dhcpTime: 'DHCP時間',
		disable: '停用',
		enable: '啟用',
		auto: '自動',
		timeZone: '時區',
		primaryNtp: '主要NTP伺服器',
		secondaryNtp: '備用NTP伺服器',
		updateInterval: '更新間隔(秒)',
		daylight: '夏令時',
		fixedType: '類型',
		fixedTypeOpt0: '日期方式',
		fixedTypeOpt1: '周方式',
		startMonth: '開始月份',
		January: '一月',
		February: '二月',
		March: '三月',
		April: '四月',
		May: '五月',
		June: '六月',
		July: '七月',
		August: '八月',
		September: '九月',
		October: '十月',
		November: '十一月',
		December: '十二月',
		startDate: '開始日期',
		startHourDay: '開始時間',
		startDayWeek: '星期幾開始',
		Sunday: '星期日',
		Monday: '星期一',
		Tuesday: '星期二',
		Wednesday: '星期三',
		Thursday: '星期四',
		Friday: '星期五',
		Saturday: '星期六',
		startWeekMonth: '月起始星期',
		firstInMonth: '第一個星期',
		secondInMonth: '第二個星期',
		thirdInMonth: '第三個星期',
		fourthInMonth: '第四個星期',
		lastInMonth: '第五個星期',
		stopMonth: '結束月份',
		stopDate: '結束日期',
		stopHourDay: '結束時間',
		stopDayWeek: '星期幾結束',
		stopWeekMonth: '月結束星期',
		offset: '偏移(分鐘)',
		manualTime: '手動設置時間',
		dateYmd: '日期',
		autoDate: '生成日期',
		timeHms: '時間',
		autoTime: '生成時間',
		timeFormat: '時間制式',
		timeFormatOpt0: '12小時',
		timeFormatOpt1: '24小時',
		dateFormat: '日期格式',
		backlightTime: '背光時間',
		backlightTimeOpt0: '總是',
		backlightTimeOpt1: '1分鐘',
		backlightTimeOpt2: '2分鐘',
		backlightTimeOpt3: '5分鐘',
		backlightTimeOpt4: '10分鐘',
		backlightTimeOpt5: '30分鐘',
		screensaver_timeout: '屏保啟動時間',
		screensaver_timeoutOpt0: '關',
		screensaver_timeoutOpt1: '1 分鐘',
		screensaver_timeoutOpt2: '2 分鐘',
		screensaver_timeoutOpt3: '5 分鐘',
		screensaver_timeoutOpt4: '10 分鐘',
		screensaver_timeoutOpt5: '30 分鐘',
		backlightLevel: '背光燈亮度',
		slaveBacklightLevel: '副屏背光燈亮度',
		expandBacklightLevel: '外掛背光燈亮度',
		slaveLcdContract: '副屏LCD對比度',
		ringTones: '鈴聲類型',
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
		replaceRingTone: '替代鈴聲',
		wallpaper: '壁紙',
		delWallpaper: '刪除',
		uploadWallpaper: '上傳',
		cancelWallpaper: '取消',
		screensaver: '屏保',

		butConfirm: '確認',
		butCancel: '取消',

		tips: {	
			dhcpTime: '是否啟用DHCP修正時間的功能.',
			replaceRingTone: '文件格式要求: 16-bit, wave, 黑白屏話機小於300KB,其他小於800KB.',
			timeZone: '選擇您所在時區。',
			updateInterval: '設置到伺服器校對本機時間的時間間隔。',
			daylight: '夏令時設置。',
			manualTime: '手動設置時間開啟與關閉。',
			timeFormat: '設置時間為12小時制或24小時制。',
			dateFormat: '設置日期顯示格式。',
			backlightTime: '設置背光時間。',
			screensaver_timeout: '設置屏保開啟時間.',
			backlightLevel: '話機背光亮度調節。',
			ringTones: '話機鈴聲類型設置。',
			pictureSize: '建議圖片分辨率461x278，大小在500比特以下'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: '禁止',
		enable: '啟用',
		off: '關',
		on: '開',
		forward: '呼叫前轉',
		always: '無條件前轉',
		busy: '遇忙前轉',
		noAnswer: '無應答前轉',
		afterRingTime: '響鈴時間(秒)',
		
		target: '目標號碼',
		onCode: '開啟特徵碼',
		offCode: '關閉特徵碼',
		
		dnd: '請勿打擾',
		dndOnCode: '開啟特徵碼',
		dndOffCode: '關閉特徵碼',
		authNum: '授權號碼(逗號分隔)',
		
		generalInfo: '基本資訊',
		liveDialpad: '活躍鍵盤',
		interDigitTime: '按鍵延時呼出(秒)',
		autoAnswer: '自動回應',
		autoAnswerDelay: '自動接聽延遲(秒)',
		ignoreMissedCall: '忽略未接來電',
		callWaiting: '呼叫等待',
		hotline: '熱線號碼',
		hotlineTimeout: '熱線延遲時間(0~180秒)',
		keyAsSend: '作為呼出鍵',
		dialNowTimeout: '立即呼出間隔時間(秒)',
		busyToneTimer: '忙音延時(秒)',
		returnCodeWhenRefuse: '拒接返回碼',
		returnCodeWhenDnd: '免打擾返回碼',
		r404: '404(未發現)',
		r480: '480(臨時不可用)',
		r486: '486(忙)',
		rfc2543Hold: 'RFC 2543 Hold',
		useOutboundProxyInDialog: '會話中使用呼出代理伺服器',
		loginTimeout: '登錄超時(1~1000分钟)',
		hidedtmf: '隱藏 DTMF',
		multicastCodec: '組播編解碼',
		watchdog: '看門狗',
		
		audioSettings: '音量設置',
		callWaitingTone: '呼叫等待音',
		headset: '耳機音量',
		handset: '聽筒音量',
		handfree: '免提音量',
		ringer: '響鈴音量',
		headsetSend: '耳機發送音量',
		handsetSend: '聽筒發送音量',
		handfreeSend: '免提發送音量',
		ringerDeviceForHeadset: '來電鈴聲的響鈴設備',
		ringerDeviceForHeadsetOpt0: '揚聲器',
		ringerDeviceForHeadsetOpt1: '耳麥',
		
		transferSettings: '轉移設置',
		blindTransferOnHook: '掛機時自動盲轉',
		attendedTransferOnHook: '掛機諮詢轉',
		transferOnConHangUp: '掛機轉移通話(會議)',
		transferModeViaDsskey: '可程式設計按鍵轉接方式',
		transferModeViaDsskeyOpt0: '新的呼叫',
		transferModeViaDsskeyOpt1: '諮詢轉',
		transferModeViaDsskeyOpt2: '盲轉',
		
		callPickup: '代答來電',
		directCallPickup: '指定代答代接',
		directCallPickupCode: '指定代答特徵碼',
		groupCallPickup: '同組代答',
		groupCallPickupCode: '同組代答特徵碼',

		accept_sip_trust_server_only: '只支持SIP信任伺服器',
		recordUserId: '錄音用戶ID',
		extFunction: '擴展臺功能',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: '加入時會場保持',

		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			forward: '設置來電轉移。',
			alwaysTarget: '轉移的目的號碼。',
			alwaysOnCode: '開啟全部來電轉移的特徵碼，話機通過直接向伺服器發送該特徵碼來開啟全部轉移。',
			alwaysOffCode: '關閉全部來電轉移的特徵碼，話機通過直接向伺服器發送該特徵碼來關閉全部轉移。',
			busyTarget: '轉移的目的號碼。',
			busyOnCode: '開啟遇忙來電轉移的特徵碼，話機通過直接向伺服器發送該特徵碼來開啟遇忙轉移。',
			busyOffCode: '關閉遇忙來電轉移的特徵碼，話機通過直接向伺服器發送該特徵碼來關閉遇忙轉移。',
			afterRingTime: '來電響鈴轉移等待時間。',
			noAnswerTarget: '轉移的目的號碼。',
			noAnswerOnCode: '開啟來電無應答轉移的特徵碼，話機通過直接向伺服器發送該特徵碼來開啟無應答轉移。',
			noAnswerOffCode: '關閉來電無應答轉移的特徵碼，話機通過直接向伺服器發送該特徵碼來關閉無應答轉移。',
			
			dndOnCode: '設置開啟DND的特徵碼，通過向伺服器發送該特徵碼來開啟DND。',
			dndOffCode: '設置關閉DND的特徵碼，通過向伺服器發送該特徵碼來關閉DND。',
			
			liveDialpad: '使用者撥號介面自動呼出開啟與關閉。',
			interDigitTime: '撥號自動呼出延遲時間。',
			autoAnswer: '開啟和關閉自動回應。',
			autoAnswerDelay: '配置自動應答選項開啟時，應答的延遲時間',
			callWaiting: '新來電呼入遇忙等待開關。',
			hotline: '設置熱線號碼。',
			hotlineTimeout: '設置熱線等待延時時間。',
			keyAsSend: '設置作為呼出鍵使用的按鍵。',
			dialNowTimeout: '設置立即撥號的時間間隔。',
			busyToneTimer: '通話結束後，話機響忙音時間。',
			returnCodeWhenRefuse: '來電拒接返回的訊息。',
			returnCodeWhenDnd: '設置免打擾時返回的資訊。',
			rfc2543Hold: 'Hold的兩種標準，需伺服器支援。',
			useOutboundProxyInDialog: '建立通話的雙方是否經過伺服器。',
			loginTimeout: '设置网页静止不操作闲置多长时间后，系统自动退出，再操作时需要重新登录。',
			acceptSipTrustServerOnly: '僅接受來自SIP server和Outbound proxy server的消息。',

			callWaitingTone: '設置提示音用於提示通話中有新來電（呼叫等待開啟時）。',
			ringerDeviceForHeadset: '來電響鈴通道。',

			blindTransferOnHook: '掛機盲轉開關。',
			attendedTransferOnHook: '設置掛機諮詢轉的開啟與關閉',
			transferOnConHangUp: '會議發起方掛斷，transfer另外兩方。'
		}
	}	
},
phoneDNDAndForwardHtml = {
	form1: {
		phone: '電話',
		custom: '自定義',
		forward: '呼叫轉移',
		emergency: '呼叫轉移緊急號碼',
		authNum: '呼叫轉移鑑權號碼',
		mode: '模式',
		account: '帳號',
		disable: '禁用',
		enable: '啟用',
		off: '關',
		on: '開',
		always: '無條件轉移',
		busy: '遇忙轉移',
		noAnswer: '無應答轉移',
		afterRingTime: '響鈴時間（秒）',
		
		target: '目標號碼',
		onCode: '開啟特徵碼',
		offCode: '關閉特徵碼',
		

		dndStatus: '免打擾狀態',
		dnd: '免打擾',
		dndOnCode: '免打擾開啟特徵碼',
		dndOffCode: '免打擾關閉特徵碼',
		
		butConfirm: '確認',
		butCancel: '取消',
		
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
		ver: '版本',
		fmVer: '韌體版本',
		hdVer: '硬體版本',
		
		resetToFactory: '恢復出廠設置',
		reboot: '重啟',		
		
		upgradeHeader: '升級韌體',
		selectFw: '選擇韌體',
		upgrade: '升級',
		
		tips: {
			upgradeHeader: '選擇供應商發佈的新版本韌體進行升級。'
		}
	},
	commonText: {
		resetConfirm: '您是否要恢復出廠設置?',
		resetSuccess: '恢復出廠設置成功. 話機將自動重啟.',
		resetFail: '恢復出廠設置失敗, 請重試!',
		
		rebootConfirm: '您是否要重啟話機?',
		
		uploadFilePrompt: '上傳文件如下:',
		upgradeMsg: '請不要關閉電源!',
		upgradeText: '升級中, 請等待...',
		
		upgradeFail: '升級失敗, 請重試!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: '報文',
		start: '開始',
		stop: '停止',
		exportStr: '匯出',
		
		debug: '調試'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: '自動更新',
		PnPEnable: 'PnP 啟動',
		DHCPEnable: 'DHCP 啟動',
		provisioningServer: '伺服器地址',
		userName: '用戶名稱',
		password: '密碼',
		commonAESKey: 'AES金鑰',
		MACAESKey: '指定MAC的AES金鑰',
		checkNewConfig: '開機更新檢測',
		off: '關',
		on: '開',
		repeatedly: '固定間隔時間更新檢測',
		interval: '間隔時間(分鐘)',
		weekly: '固定每週更新檢測',
		time: '時間',
		dayOfWeek: '星期',
		
		
		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			PnPEnable: '是否發送請求到服務器以獲取升級的URL',
			DHCPEnable: '是否從DHCP服務器獲取升級URL',
			provisioningServer: '更新伺服器的位址',
			password: '伺服器密碼',
			checkNewConfig: '設備上電後檢測自動更新'
		}
	},
	showText: {
		weekly:  ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: '匯入/匯出配置',
		importFile: '匯入文件',
		importStr: '匯入',
		exportStr: '匯出',
		exportUserData: '匯出使用者資料',
		
		exportImportConfig: '匯入/匯出CFG文件',

		exportSyslog: '匯出系統日誌',
		logLocation: '日誌位置',
		logLocationOpt0: '本地',
		logLocationOpt1: '伺服器', 
		serverName: '伺服器名稱',
		logLevel: '日誌級別',
		logOpt0: '致命錯誤',
		logOpt1: '錯誤',
		logOpt2: '警告',
		logOpt3: '訊息',
		logOpt4: '調試',
		exportStr2: '匯出',
		
		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			exportImportConfig: '導出的文件由話機被修改的配置項組成（配置未修改時為空文件），另外，導入導出文件都是按批量部署格式組織的。',
			importExportCfg: '點擊匯出，匯出話機當前配置；選擇要匯入的設定檔，點擊匯入，將配置導到當前話機並重啟。',
			exportSyslog: '類型為Local則將系統日誌直接匯出；類型為Server，則將日誌匯出到指定的伺服器上。'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'允許控制IP列表',
		remoteControl:'遠程控制',
		cstaControl: 'CSTA Control',
		disable: '停用',
		enable: '啟用',
		butConfirm: '確認',
		butCancel: '取消'
	       },
},
phoneActionUrlHtml = {
	form1: {
		actionUrlItem: ['setupCompletedUrl','registeredUrl','unregisteredUrl','registerFailedUrl','offHookUrl','onHookUrl','incomingCallUrl','outgoingCallUrl','establishedUrl','terminatedUrl','openDNDUrl','closeDNDUrl','openAlwaysForwardUrl','closeAlwaysForwardUrl','openBusyForwardUrl','closeBusyForwardUrl','openNoAnswerForwardUrl','closeNoAnswerForwardUrl','transferCallUrl','blindTransferUrl','attendedTransferUrl','holdUrl','unHoldUrl','muteUrl','unMuteUrl', 'missedCallUrl','IPChangedUrl','idleToBusyUrl','busyToIdleUrl','rejectIncomingCallUrl','answerNewIncomingCallUrl','transferFailedUrl','transferFinishedUrl','forwardIncomingCallUrl','autopFinishUrl','openCallWaitingUrl','closeCallWaitingUrl','headsetUrl','handfreeUrl','cancelCallOutUrl','remoteBusyUrl','callRemoteCanceledUrl'],
		actionUrlNameList: ['啟動完成','註冊成功','未註冊','註冊失敗','放下手柄','拿起手柄','來電','去電','建立會話','結束','開啟免打擾','關閉免打擾','開啟無條件前轉','關閉無條件前轉','開啟遇忙前轉','關閉遇忙前轉','開啟無應答前轉','關閉無應答前轉','轉接呼叫','盲轉','諮詢轉','保持','取消保持','靜音','取消靜音','未接來電','IP變更','閒置進入通話','通話進入閒置','拒絕來電','接聽新來電','轉接失敗','轉接完成','前轉來電','自動更新完成','啟用呼叫等待','關閉呼叫等待','使用耳麥','使用免提','取消呼出','遠程忙','取消遠程呼叫'],		
		butConfirm: '確認',
		butCancel: '取消'
	}
},
phoneTonesHtml = {
	form1: {
		       /*country list*/
		custom: '自定義',
		australia: '澳大利亞',
		austria: '奧地利',
		brazil: '巴西',
		belgium: '比利時',
		chile: '智利',
		china: '中國',
		czech: '捷克',
		czechETSI: '捷克ETSI',
		denmark: '丹麥',
		finland: '芬蘭',
		france: '法國',
		germany: '德國',
		greatBritain: '大不列顛島',
		greece: '希臘',
		hungary: '匈牙利',
		lithuania: '立陶宛',
		india: '印度',
		italy: '意大利',
		japan: '日本',
		mexico: '墨西哥',
		newZealand: '新西蘭',
		netherlands: '荷蘭',
		norway: '挪威',
		portugal: '葡萄牙',
		spain: '西班牙',
		switzerland: '瑞士',
		sweden: '瑞典',
		russia: '俄羅斯',
		unitedStates: '美國',

		       /*end of country list*/

		selectCountry: '國家選擇',
		dial: '撥號',
		ringBack: '回鈴音',
		busy: '忙音',
		congestion: '網絡擁塞提示音',
		callWaiting: '呼叫等待提示音',
		dialRecall: '回撥提示音',
		info: '特殊訊息',
		stutter: '語音留言提示音',
		message: '訊息提示音',
		autoAnswer: '自動應答提示音',
		butConfirm: '確認',
		butCancel: '取消'
	}
},
phoneDialPlanHtml = {
	mytabMenu: {
		replaceRule: '替換規則',
		dialNow: '立即呼出',
		areaCode: '地區代碼',
		blockOut: '呼出限制'
	},
	replaceRuleTitle: ['序號', '首碼', '替換', '帳號'],
	dialNowsTitle: ['序號', '立即呼出', '帳號'],
	replaceRuleForm: {
		num: '首碼',
		replace: '替換',
		account: '帳號',
		add: '新增',
		edit: '修改',
		del : '刪除',
		save: '儲存'
	},
	dialNowsForm: {
		rule: '立即呼出',
		account: '帳號',
		add: '新增',
		edit: '修改',
		del : '刪除',
		save: '儲存'
	},
	form3: {
		code: '區號',
		minLen: '最小長度',
		maxLen: '最大長度',
		areaCodeAccount: '帳號',
		
		butConfirm: '確認',
		butCancel: '取消'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: '限制呼出號碼',
		account: '帳號',
		
		butConfirm: '確認',
		butCancel: '取消'
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
		disable: '停用',
		enable: '啟用',
		
		echoCancellation: '回音消除設置',
		echoCanceller: '回音消除',
		echoCancellerOpt0: '低',
		echoCancellerOpt1: '中',
		echoCancellerOpt2: '高',
		vad: '靜音檢測',
		cng: '舒適噪音',
		
		jitterBuffer: '抖動緩衝',
		type: '類型',
		typeOpt0: '固定的',
		typeOpt1: '適應的',
		minDelay: '最小延時',
		maxDelay: '最大延時',
		normalDelay: '普通延時',
		
		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			echoCancellation: '回音消除設置。',
			echoCanceller: '開啟和關閉回聲消除器。',
			vad: '語音活動檢測。',
			cng: '舒適雜訊發生器。',
			jitterBuffer: '這是共用資料區，語音資料包可以被收集，存儲和發送到均勻的聲音處理器。'
		}
	}
},


phoneTrustedCertificatesHtml = {
    form1: {
        index: '序號',
        issued_to: '頒布給',
        issued_by: '頒布者',
        expiration: '有效期',
        delete_select: '刪除',
        import_trusted_certificates: '可信任證書',
        certificationfile: '導入可信任證書',
        import_server_certificates: '服務器證書',
		server_certificationfile: '導入服務器證書',
		btn_upload: '導入',
		btn_delete: '刪除',
		butConfirm: '確定',
		butCancel: '取消'
	},
    showText: {
		delConfirm: '確定刪除選中文件?',
		selectEmpty: '至少要選擇一個文件'
	}
},


phoneLockHtml = {
	form1: {

		disable: '停用',
		enable: '啟用',

		keypad_lock: '鍵盤鎖',
		keypadlock_enable: '啟用鍵盤鎖',
		keypadlock_type: '鍵盤鎖類型',
		keypadlock_password: '解鎖密碼（0~15位元數字）',
		delay_lock: '上鎖延遲（1~3600秒）',
		emergency_call: '緊急號碼',
		keypad_lock_menu_key: '選項鍵',
		keypad_lock_function_key: '功能鍵',
		keypad_lock_all_keys: '所有鍵',
		keypad_lock_answer_call_only:'僅接聽',

		butConfirm: '確認',
		butCancel: '取消',

		tips: {
			emergency_call: '即使設置了鍵盤鎖，緊急電話也可正常撥出'
		}
	}
},


phoneTr069Html = {
	form1: {

		disable: '禁用',
		enable: '启用',

		tr069: 'TR069',
		tr069_enable: '启用TR069',
		serveraddress: 'ACS服务器地址',
		serverport: 'Port',
		username: 'ACS用户名',
		password: 'ACS密码',
		periodic_inform_enable: '启用周期性通知',
		periodic_inform_interval: '周期性通知间隔（秒）',
		connection_request_username: '请求连接用户名',
		connection_request_password:'	请求连接密码',

		butConfirm: '应用',
		butCancel: '取消',

		tips: {
			tr069_enable: '開啟或關閉TR069功能',
			ACS_URL: '連接TR069服務器的URL',
			ACS_username: '配置IP電話的用戶名，以使用ACS（自動配置服務器）進行身份驗證',
			ACS_password: '連接TR069服務器的密碼',
			periodic_inform_enable: '開啟或關閉話機定期通知服務器機制',
			periodic_inform_interval: ' TR069服務器發送信息到服務器的時間間隔，默認3600S',
			connecting_request_username: 'TR069服務器連接話機的用戶名',
			connecting_request_password: 'TR069服務器連接話機的密碼'

		}
	}
},


phoneSecurityHtml = {
	form1: {
		passwdModify: '密碼修改',
		userType: '用戶類型',
		currentPasswd: '舊密碼',
		newPasswd: '新密碼',
		confirmPasswd: '確認新密碼',
		
		butConfirm: '確認',
		butCancel: '取消',
		
		tips: {
			userType: '用戶選擇登錄的許可權，管理員許可權可以修改使用者的密碼和自己的密碼，但是使用者許可權只能修改自己的密碼。'
		}
	},
	showText: {
		pwdNoMatch: '兩次輸入的新密碼不一致',
		modifyFailed: '修改密碼失敗, 請重試!'
	}
},
contactsHtml = {
	mytabMenu: ['連絡人', '黑名單'],
	tableHeader: ['序號', '名字', '工作', '手機', '其它', '帳號'],
	buttonDiv: {
		save: '儲存',
		del: '刪除',
		moveToBlack: '打入黑名單',
		moveToWhite: '移動到連絡人'
	},
	editDiv: {
		contacts: '電話簿',
		name: '名字',
		officeNum: '工作',
		mobileNum: '手機',
		otherNum: '其它',
		account: '帳號',
		accountOpt8: '自動',
		accountOpt1: '帳號 1',
		accountOpt2: '帳號 2',
		accountOpt3: '帳號 3',
		accountOpt4: '帳號 4',
		accountOpt5: '帳號 5',
		accountOpt6: '帳號 6',
		ring: '鈴聲',
		ringOpts: ['自動', 'Ring1.wav', 'Ring2.wav', 'Ring3.wav', 'Ring4.wav', 
		           'Ring5.wav', 'Ring6.wav', 'Ring7.wav', 'Ring8.wav', 'Ring9.wav', 'Ring10.wav'],
		photo: '相片',
		defaultPhoto: '預設',
		add: '新增',
		deletePhoto: '刪除',
		uploadPhoto: '上傳相片',
		pictureSize: '建議圖片分辨率100x135,大小在250比特以下',
		edit: '修改',
		search: '搜索',

		importAndExport: '匯入和匯出本地地址簿',
		importFile: '匯入本地地址簿',
		importStr: '匯入',
		exportStr: '匯出'
	},
	
	shwoText: {
		delConfirm: '您確定刪除已選擇的連絡人?',
		delConfirm1: '注意: 當儲存以後，刪除的連絡人將不能恢復!', 
		selectEmpty: '請至少選擇一條記錄.',
		selectTooMuch: '已選擇記錄太多!',
		nameEmpty: '名稱不能為空!',
		nameExist: '名稱已存在!',
		phonebookFull: '電話本必須不多於400條!',
		blacklistFull: '黑名單必須不多於50條!',
		contentEmpty: '內容不能為空!',
		notFind: '沒有找到指定連絡人.'
	}
},

multicastHtml = {
	form1: {
		multicastListening: '組播監聽',
		pagingBarge: '尋呼介入',
		ignoreDND: '忽略DND',
		pagingPriorityActive: '尋呼優先級',
		ipAddr: 'IP',
		listeningAddr: '監聽地址',
		label: '標籤',
		channel: '信道',
		priority: '優先級',
		disabled: '禁用',
		enabled: '啟用',

		pagingListLabel: '組播列表',
		index: '索引',
		pagingAddr: '組播地址',

		butConfirm: '確認',
		butCancel: '取消',

		tips: {
		}
	}
},
LDAPHtml = {
	form1: {
		disable: '停用',
		enable: '啟用',

		LDAP:'LDAP',
		enable_ldap:'啟用LDAP',

        name_filter:'LDAP名稱過濾',
        number_filter:'LDAP號碼過濾',

        name_attributes:'LDAP名稱屬性',
        number_attributes:'LDAP號碼屬性',
        display_name:'LDAP顯示名稱',

        server_address:'伺服器地址',
        port:'埠',
        base:'基礎',
        user_name:'用戶名稱',
        password:'密碼',
        max_hits:'最大查詢結果',
        protocol_version:'協定版本',
        version2:'版本 2',
        version3:'版本 3',
        optionNo: '否',
		optionYes: '是',

        match_incoming_calls:'LDAP匹配來電',
        ldap_lookup_for_dial:'撥號/預撥號查詢',
        sort_result:'LDAP搜索排序',

		butConfirm: '確認',
		butCancel: '取消',

		tips: {
			LDAP: 'LDAP 通訊錄.',
			name_filter: 'LDAP名字濾波器，如果輸入搜索的為字元，則根據此濾波器到伺服器上查詢連絡人.',
			number_filter: 'LDAP數字濾波器，如果輸入搜索的為數位，根據此濾波器到伺服器上查詢連絡人.',
			server_address: 'LDAP伺服器位址，可以填寫IP位址或者功能變數名稱.',
			port: 'LDAP伺服器埠號.',
			base: '到伺服器上查詢的根節點，相當於到哪個目錄下查詢連絡人.',
			user_name: '登錄伺服器用戶名.',
			password: '登錄伺服器密碼.',
			max_hits: '最大查詢結果的條數.',
			name_attributes: '設置要獲取的名字相關屬性.',
			number_attributes: '設置要獲取的號碼相關屬性.',
			display_name: '搜索結果顯示出來的顯示名類型.',
			match_incoming_calls: '設置來電號碼是否進行LDAP搜索顯示名.',
			ldap_lookup_for_dial: '設置撥號時是否進行LDAP搜索.',
			sort_result: '設置是否對搜索結果進行排序.'
		}
	}
},

XMLPhonebookHtml = {
	form1: {
        disable: '停用',
		enable: '啟用',

        index:'序號',
        remote_url:'遠端URL',
        display_name:'顯示名稱',

		xml_remote_phonebook:'設置',

        SRemoteName:'來電號碼匹配',
        SRemoteNameFlashTime:'更新時間間隔（秒）',

		butConfirm: '確認',
		butCancel: '取消',

		tips: {
			SRemoteName: '接打電話時，是否進行遠程電話本匹配',
			SRemoteNameFlashTime: '設置遠程電話本刷新時間間隔（單位秒，0代表不進行刷新）'
		}
	}
},

phoneCallInfoHtml = {
	mytabMenu: ['撥號列表', '未接來電', '已接來電', '前轉來電列表'],
	tableHeader: ['序號', '日期時間', '時長', '本機帳號', '帳號名', '號碼']
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
