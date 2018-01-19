//公共的验证信息
var commonValidMsg = {
	missingMsg: '请输入内容',
	invalidIpMsg: '无效的IP地址'
},
uploadCommon = {
	uploadFilePrompt: '上传文件如下:',
	uploadMsg: '请不要关闭电源!',
	uploadText: '导入中, 请等待...',
	uploadSuccess: '导入成功!',
	uploadFail: '导入失败, 请重试!'
},
alertMsg = {
	titlePrompt: '提示',
	titleConfirm: '确认',
	noChange: '没有修改!',
	invalidVal: '无效的值!',
	saveSuccess: '保存成功!',
	enabledOptionsEmpty: '启用的编解码至少需要一项!',
	codecsConflict: 'iLBC_13_3 和 iLBC_15_2 只能选其一!',
	emptyContent: '内容为空!',
	invalidDTMF: '无效  DTMF!',
	webServicesDisable: 'Web 服务已经禁用!',
	features: '在启用特征码的时候的情况下，关闭特征码不能为空!',
	invalidAccountList: '无效的账户列表!',
	dialPlanMsg1: '请至少选择一条记录.',
	voiceError1: '最大值应大于最小值',
	voiceError2: '请在最大值和最小值之间选择合适值',
	fileIsEmpty: '上传文件为空!',
	upgradeFileFormateErr: '升级文件格式错误(*.fw)!',
	openvpnFile: 'OpenVPN文件格式错误(*.tar/*.TAR)!',
	wallpaperFormatError: '文件名只能包含拉丁字符且图片格式必须是PNG/JGP/BMP。',
	systemFileCannotDelete: '仅支持删除自定义图片!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: '请不要关闭电源!',
			rebootText: '重启中, 请等待...'
		},
		showProgress: {
			progressTitle: '提示'
		}
	},
	ErrorInfo: {
		networkError: '网络错误, 请检查!',
		webServerError: 'Web服务错误, 请重试!',
		unknownError: '未知错误:',
		dataNoChanged: '没有修改!',
		Error_409: '该文件已存在.',
		Error_413: '文件过大.',

		phoneBusyError: '通话中，请稍后...'
	},
	Page: {
		docTitle: 'Platan IP-T200',
		docTitle_for_A48: 'Platan IP-T216CG',
		logoutFailed: '注销失败, 请重试!'
	},
	pluginInit: {
		ok: '确定',
		cancel: '取消'
	}
},
status401Html = {
	errorInfo1 : '你未被授权访问web界面.',
	errorInfo2 : '请联系你的支持团队或3分钟后再试一次.',
	errorInfo3: '未授权'
},
//index.html
indexHtml={
	top:{
		logout: '注销',
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
		basic: '基本',
		account: '账号配置',
		network: '网络配置',
		dSSKey: '可编程按键',
		phone: '话机配置',
		contacts: '电话簿',
		security: '安全设置'
	},
	//页面底部
	footer:{
		footerEmail: 'http://www.platan.pl',
		footerSupport: 'http://www.platan.pl',
		footerWebsite: 'http://www.platan.pl',
		footerDownload: 'http://www.platan.pl',
		footerProductWebsite: 'http://www.platan.pl',
		website: '站点',
		products: '产品',
		support: '支持',
		download: '下载',
		contactus: '联系我们',
		atcomRights: '©2018 ATCOM 版权所有.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: '状态',
		sWizard: '快捷设置',
		//Account
		aBasic: '基础',
		aCodecs: '编解码',
		aAdvanced: '高级',
		//NetWork
		nBasic: '基础',
		nWifi: 'Wi-Fi',
		nAdvanced: '高级',
		//DSS key
		dMemory: '记忆键',
		dLink: '账号键',
		dProgrammable: '可编程功能键',
		dExt: '扩展台功能键',
		dAetAdv: 'EXT高级设置',

		//Phone
		pDNDAndForward: '免打扰&呼叫转移',
		pPrefetence: '基本配置',
		pFeatures: '功能配置',
		pUpgrade: '升级',
		pAuto: '自动更新',
		pConfig: '系统配置',
		pRemoteControl: '远程控制',
		pActionUrl: 'Action URL',
		pDialPlan: '拨号规则',
		pVoice: '声音',
		pRing: 'Alert Info',
		pTones: '信号音',
		pSms: '短信息',
		pAction: 'Action URL',
		pSoftkey: '软键布局',
		pPhoneLock: '键盘锁',
		pSecurity: '安全配置',
		pPhoneTr069: 'TR069',
		pDebug: '调试',
		//Contacts
		cContacts: '电话簿',
		cXMLPhonebook: '远程电话簿',
		cPhoneCall: '呼叫信息',
		cLDAP: 'LDAP',
		cMulticastIp: '组播地址',
		cBroaddoft: 'Broadsoft',
		cCallLog: '呼叫记录',
		//Security
		sPassword: '密码',
		sStrusted: '受信任证书',
		sServer: '话机证书'
	}
},
statusHtml = {
	version: {
		verTitle: '版本',
		fwVer: '固件版本',
		hwVer: '硬件版本',
		product_name: '型号'
	},
	networkConfig:{
		netConfigTitle: '网络配置',
		internetPortType: 'WAN接口', /*ipv4 = 1, ipv6 = 2, ipv4 & ipv6 = 3*/
		internType1: 'IPv4',
		internType2: 'IPv6',
		internType3: 'IPv4 & IPv6'
	},

	network: {
		netTitle: 'IPv4',
		internetPort: 'WAN口类型',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: '静态IP',
		ip: 'IP地址',
		subnetMask: '子网掩码',
		gatewag: '网关',
		primaryDNS: '首选DNS服务器',
		secondaryDNS: '备选DNS服务器',
		wiredMac: '有线MAC地址',
		WIFIMac: '无线MAC地址',
		vpnStatus: 'VPN 状态',
		vpnStatusOpt0: '连接中',
		vpnStatusOpt1: '禁止',
		vpnStatusOpt2: '连接失败',
		vpnStatusOpt3: '已连接',
		vpnIp: 'VPN IP'
	},

	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'WAN口类型',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: '静态IP',
		ip: 'IP地址',
		networkPrefix: 'IPv6前缀',
		gatewag: '网关',
		primaryDNS: '首选DNS服务器',
		secondaryDNS: '备选DNS服务器'
	},
	tips: {
		netConfigTip: '显示设备的ip地址类型',
		verTip: '显示设备当前的固件版本和硬件版本。',
		netTip: '显示话机网络配置的详细情况。'
	}
},
wizardHtml = {
	form1: {
		networkType: '网络配置',
		InternetPort: 'LAN口配置',
		dhcp: 'DHCP',

		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: '静态IP',

		staticIpSettings: '静态IP设置',
		ip: 'IP地址',
		subnetMask: '子网掩码',
		defaultGateway: '默认网关',
		StaticDNSEnable: 'Static DNS',
		primaryDNS: '首选DNS服务器',
		secondaryDNS: '备选DNS服务器',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6前缀',
		StaticDNSEnableIPv6: 'Static DNS for IPv6',

		sipSettings: 'SIP 设置',
		accountActive: '账号激活',
		disable: '禁用',
		enable: '启用',
		labelName: '显示标签',
		displayName: '显示名字',
		registerName: '认证名称',
		userName: '用户名称',
		password: '密码',
		
		sipServer: 'SIP服务器',
		sipServerPort: '端口',
		
		back: '上一步',
		next: '下一步',
		
		tips: {
			dhcp: '自动向DHCP服务器请求获得IP地址，子网掩码，网关，DNS等。',
			staticIp: '手动配置IP地址，子网掩码，网关，DNS等。',
			labelName: '在当前设备液晶上显示的名称。',
			displayName: '拨打电话时，对方话机显示的本机名字。',
			registerName: '由运营商提供的注册名。',
			userName: '由运营商提供的用户名。',
			password: '由运营商提供的密码。',
			sipServer: '由运营商提供的SIP服务器。'
		}
	},
	common: {
		finish: '完成',
		next: '下一步'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: '账号',
		accountNumberOpt1: '账号 1',
		accountNumberOpt2: '账号 2',
		accountNumberOpt3: '账号 3',
		accountNumberOpt4: '账号 4',
		accountNumberOpt5: '账号 5',
		accountNumberOpt6: '账号 6',
		
		registerStatus: '注册状态',
		
		accountActive: '账号激活',
		disable: '禁用',
		enable: '启用',
		labelName: '显示标签',
		displayName: '显示名字',
		registerName: '认证名称',
		userName: '用户名称',
		password: '密码',
		
		sipServer: 'SIP服务器',
		sipServerPort: '端口',
		redundancy_proxy: 'SIP备份服务器',

		enableOutboundProxyServer: 'Outbound 状态',
		outboundProxyServer: 'Outbound 代理',
		outboundProxyServerPort: '端口',
		make_call_without_register: '非注册拨打模式',
		
		verifyServer: 'Verify server',
		transport: '传输方式',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'NAT穿透',
		TLSVersion: 'TLS版本',
		natTraversalOpt1: 'STUN',
		stunServer: 'STUN服务器',
		port: '端口',
		
		voiceMail: '语音邮件',
		anonymousCall: '匿名呼叫',
		off: '关',
		on: '开',
		onCode: '开启特征码',
		offCode: '关闭特征码',
		anonymousCallRejection: '拒接匿名电话',
		ringTones: '铃声类型',
		ringTonesOpt0: '默认',
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
		
		butConfirm: '应用',
		butCancel: '取消',
		
		tips: {
			labelName: '在当前设备液晶上显示的名称。',
			displayName: '拨打电话时，对方话机显示的本机名字。',
			registerName: '由运营商提供的认证名称。',
			userName: '由运营商提供的用户名。',
			password: '由运营商提供的密码。',
			sipServer: '由运营商提供的SIP服务器。',
			enableOutboundProxyServer: '在有防火墙/NAT时用，用于处理信号及帮助多媒体数据流通过防火墙。',
			redundancy_proxy: '备用SIP服务器',
			outboundProxyServer: 'Outbound代理服务器。',
			verifyServer: 'verifyServer',
			transport: '有UDP，TCP，TLS三种选择。UDP表示注册的包用的是UDP，TCP表示注册的包用的是TCP，TLS（Transport Layer Security）是加密的。',
			natTraversal: '启用和禁用STUN服务器。',
			stunServer: 'STUN服务器允许所有的NAT客户终端(如防火墙后边的计算机)与位于局区域网以外的VOIP服务商实现电话通话。',
			voiceMail: '设置该账号的voice mail号码。',
			anonymousCall: '启用和禁用匿名呼叫。',
			onCode: '设置匿名呼叫开启特征码，话机通过向服务器发送该特征码开启匿名呼叫。',
			offCode: '设置匿名呼叫禁用特征码，话机通过向服务器发送该特征码禁用匿名呼叫。',
			anonymousCallRejection: '启用和禁用拒接匿名电话。',
			onCodeRejection: '设置开启拒接匿名电话征码，话机通过向服务器发送该特征码开启拒接匿名电话。',
			offCodeRejection: '设置禁用拒接匿名电话特征码，话机通过向服务器发送该特征码关闭拒接匿名电话。',
			ringTones: '设置该账号的铃声类型。',
			make_call_without_register: '未注册时，可接打电话'
		}
	},
	showText: {
		unRegistered: '注册失败',
		registered: '已注册'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: '账号',
		accountNumberOpt1: '账号 1',
		accountNumberOpt2: '账号 2',
		accountNumberOpt3: '账号 3',
		accountNumberOpt4: '账号 4',
		accountNumberOpt5: '账号 5',
		accountNumberOpt6: '账号 6',
		
		audioCodecs: '语音编解码',
		disableCodecs: '禁用的编解码',
		enableCodecs: '启用的编解码',
		
		butConfirm: '应用',
		butCancel: '取消'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: '账号',
		accountNumberOpt1: '账号 1',
		accountNumberOpt2: '账号 2',
		accountNumberOpt3: '账号 3',
		accountNumberOpt4: '账号 4',
		accountNumberOpt5: '账号 5',
		accountNumberOpt6: '账号 6',
		
		udpKeepAliveMsg: 'UDP保活消息',
		disable: '禁用',
		enable: '启动',
		udpKeepAliveInterval: 'UDP保活消息发送间隔(秒)',
		
		loginExpires: '超时(秒)',
		localSipPort: '本地SIP端口',
		subscribePeriod: '订阅周期(秒)',
		
		dtmfType: 'DTMF 类型',
		dtmfTypeOpt0: 'Inband',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP_INFO',
		dtmfPayload: 'DTMF有效负荷(秒)',
		reliableRetransmission: '除100之外的1XX消息的可靠性响应',
		
		subscribeForMwi: 'MWI订阅',
		mwiSubscribePeriod: 'MWI订阅周期(秒)',
		
		useSessionTimer: '会话计时器',
		sessionTimer: '会话计时器间隔(秒)',
		refresher: '刷新会话方',
		
		useUserPhone: 'Use user=phone',
		voiceEncryption: '语音加密(SRTP)',
		off: '关',
		on: '开',
		ptime: '打包时间 (毫秒)',
		
		blfListUri: 'BLF List 标识',
		derectedCallPickupCode: '指定代答的快捷码',
		groupCallPickupCode: '同组代答的快捷码',
		
		sipRegRetryTimer: 'SIP注册重试间隔',
		earlyMedia: '早期媒体',
		sipServerType: 'SIP服务器类型',
		sipServerTypeOpt0: '默认',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'Broadsoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: '对讲码',
		conferenceType: '会议类型',
		localConference: '本地会议',
		networkConference: '网络会议',
		conferenceCode: '会议特征码',
		
		butConfirm: '应用',
		butCancel: '取消',
		
		tips: {
			udpKeepAliveMsg: '设备每隔一段时间发送一个UDP的包保持端口一直处于使用的状态，避免服务器关闭那个端口。',
			loginExpires: '注册超时的时间，即每次注册认为的有限期限，在这个时间内，设备必须再去注册，服务器才认为设备处于注册中的状态，否则认为掉线。',
			localSipPort: '设备自己的端口号，用于发送和接收SIP包。',
			subscribePeriod: '订阅的超时时间。',
			dtmfType: '通话中按数字键发送DTMF 的方式，包括带内，带外（RFC2833）和INFO的方式。',
			reliableRetransmission: '支持PRACK的传输。',
			subscribeForMwi: '设备发送Subscribe包给服务器订阅Message Waiting当设备注册上以后会发一个Subscribe的订阅包给服务器。',
			useSessionTimer: '这个选项用于开启和关闭刷新会话。如果开启这个功能，那么在通话过程中会发送Invite包去刷新会话。',
			sessionTimer: '刷新会话的时间间隔。',
			refresher: '刷新会话，Uac由客户端去刷新会话，Uas由服务端去刷新会话。',
			useUserPhone: '如果开启这个功能，在Invite包里面就会多一个user=phone的标志。',
			voiceEncryption: '用于开启和关闭加密语音包。',
			ptime: '协商所用的codec的RTP包两包之间的时间间隔。',
			blfListUri: '用于Broadsoft服务器上订阅BLF。',
			sipRegRetryTimer: '注册失败后重新尝试注册的时间周期。'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'LAN口配置',
		IPv4Config: 'IPv4配置',
		IPv6Config: 'IPv6配置',
		dhcp: 'DHCP',
		staticIp: '静态IP',
		ip: 'IP地址',
		subnetMask: '子网掩码',
		defaultGateway: '默认网关',
		IPv6Prefix: 'IPv6前缀(0~128)',

        StaticDNSEnable: '静态DNS',
   		on: '开',
		off: '关',

		primaryDNS: '首选DNS服务器',
		secondaryDNS: '备选DNS服务器',
		butConfirm: '应用',
		butCancel: '取消',
		
		tips: {
			dhcp: '自动向DHCP服务器请求获得IP地址，子网掩码，网关，DNS等。',
			staticIp: '手动配置IP地址，子网掩码，网关，DNS等。',
			StaticDNSEnable: '在IPv4/IPv6 DHCP模式下,是否使用静态的IPv4/IPv6 DNS'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Wi-Fi 设置',
		wifi_on_warning: '当开启Wi-Fi时，请断开LAN口网线！',
		wifi_enable: 'Wi-Fi',
		on: '开',
		off: '关',
		search_wifi: '搜索Wi-Fi',
		wifi_ssid: '当前SSID',
		wifi_key: '密钥',
		butConfirm: '应用',
		butCancel: '取消',
	},
	showText: {
		close_wifi: '关闭Wi-Fi…',
		open_wifi: '开启Wi-Fi…',
		search_wifi: '搜索…',
		wifi_table_header: ['序号', 'SSID', '信号', '选择'],
		wifi_list_title: 'Wi-Fi列表',
		submitting: '提交…'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: '虚拟局域网',
		vlanLan: 'LAN',
		active: '激活',
		disable: '禁用',
		enable: '启用',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: '优先级',
		vlanPc: 'PC',
		vlanPcActive: '激活',
		vlanDataVid: 'VID',
		vlanDataPriority: '优先级',
		
		portLink: '端口链路',
		wanPortLink: 'WAN端口链路',
		wanPortLinkOption0: '自动协商',
		wanPortLinkOption1: '全双工10Mbps',
		wanPortLinkOption2: '全双工100Mbps',
		wanPortLinkOption3: '半双工10Mbps',
		wanPortLinkOption4: '半双工100Mbps',
		wanPortLinkOption5: '半双工1000Mbps',
		wanPortLinkOption6: '全双工1000Mbps',
			
		pcPortLink: 'PC端口链路',
		pcPortLinkOption0: '自动协商',
		pcPortLinkOption1: '全双工10Mbps',
		pcPortLinkOption2: '全双工100Mbps',
		pcPortLinkOption3: '半双工10Mbps',
		pcPortLinkOption4: '半双工100Mbps',
		
		slaccEnable: 'ICMPv6状态',

		vpn: 'VPN',
		importFile: '上传VPN配置',
		importStr: '导入',
		
		voiceQos: '语音服务质量',
		sipQos: 'SIP服务质量',
		
		localRtpPort: '本地RTP端口',
		maxRTPPort: '最大RTP端口',
		minRTPPort: '最小RTP端口',
		
		webServer: 'Web服务',
		httpPort: 'Http端口',
		httpsPort: 'Https 端口',
		webServerType: '类型',
		webServerTypeOption0: '禁用',
		webServerTypeOption1: '仅http',
		webServerTypeOption2: '仅https',
		webServerTypeOption3: 'http&https',

        span_to_pc: '透传到PC',
        sys_span_to_pc_port: '透传到PC端口',

		lldp: 'LLDP',
		cdp: 'CDP',
		package_interval: '数据包重发间隔(1~3600秒)',

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
		x_802_1x_anonymous_identity: '匿名身份标识',
		x_802_1x_identity: '身份标识',
		x_802_1x_password: 'MD5 密码',
		x_802_1x_ca_cert: 'CA 证书',
		x_802_1x_device_cert: '设备证书',
		x_802_1x_upload: '上傳',

		butConfirm: '应用',
		butCancel: '取消',
		
		tips: {
			lldp: 'LLDP（链路层发现协议）用于向网络中其他设备报告自己的信息，同时也去发现和学习其他开启LLDP功能设备的信息，包括系统名称，电源规格，语音VLAN，语音优先级等',
			cdp: 'CDP （思科发现协议）用于向网络中其他设备报告自己的信息，同时也去发现和学习其他开启CDP功能设备的信息，包括系统名称，电源规格，语音VLAN，语音优先级等',
			vlan: '虚拟局域网配置，用于特定配置，如果您更改它，并希望更改立即生效，您必须手动重新启动它。',
			portLink: '链路层发现协议',
			vpn: '虚拟专用网络配置，用于特定配置。',
			voiceQos: '当网络容量不足，服务质量可优先向用户提供通过设定值。',
			localRtpPort: '定义语音传输的端口。',
			x_802_1x: '配置 802.1x 认证方式。',
			webServer: '定义网页访问类型，端口。',
			slaccEnable: 'p电话通过SLAAC（无状态地址自动配置）方法获IPv6网络设置'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: '按键',
		type: '类型',
		value: '值',
		label: '显示标签',
		account: '账号',
		ext: '分机号',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: '记忆键',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: '线路',
		keyTypeOpt2: '快速拨号',
		keyTypeOpt4: '短消息',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: '指定代答',
		keyTypeOpt10: '同组代答',
		keyTypeOpt11: '呼叫驻留',
		keyTypeOpt12: '对讲机',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: '会议',
		keyTypeOpt15: '呼叫前转',
		keyTypeOpt16: '呼叫转移',
		keyTypeOpt17: '呼叫保持',
		keyTypeOpt18: '免打扰',
		keyTypeOpt19: '重拨',
		keyTypeOpt20: '电话簿',
		keyTypeOpt21: '回拨',
		keyTypeOpt22: '前缀',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: '无',
		keyTypeOpt32: '历史记录',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: '语音信箱',
		keyTypeOpt35: '静音',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: '组播',
		keyTypeOpt39: '组播列表',
		
		accountNumberOpt1: '账号 1',
		accountNumberOpt2: '账号 2',
		accountNumberOpt3: '账号 3',
		accountNumberOpt4: '账号 4',
		accountNumberOpt5: '账号 5',
		accountNumberOpt6: '账号 6',
		accountNumberOpt8: '自动',
		
		GroupPickup: '组代接',
		butConfirm: '应用',
		butCancel: '取消'
	}	
},
lineKeyHtml = {
	form1: {
		key: '按键',
		type: '类型',
		value: '值',
		label: '显示标签',
		account: '账号',
		ext: 'BLF代答码',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: '账号键',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: '线路',
		keyTypeOpt2: '快速拨号',
		keyTypeOpt4: '短消息',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: '指定代答',
		keyTypeOpt10: '同组代答',
		keyTypeOpt11: '呼叫预留',
		keyTypeOpt12: '对讲机',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: '会议',
		keyTypeOpt15: '呼叫前转',
		keyTypeOpt16: '呼叫转移',
		keyTypeOpt17: '呼叫保持',
		keyTypeOpt18: '免打扰',
		keyTypeOpt19: '重拨',
		keyTypeOpt20: '电话簿',
		keyTypeOpt21: '回拨',
		keyTypeOpt22: '前缀',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: '无',
		keyTypeOpt32: '历史记录',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: '语音信箱',
		keyTypeOpt35: '静音',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: '组播',
		keyTypeOpt39: '组播列表',
		
		accountNumberOpt1: '账号 1',
		accountNumberOpt2: '账号 2',
		accountNumberOpt3: '账号 3',
		accountNumberOpt4: '账号 4',
		accountNumberOpt5: '账号 5',
		accountNumberOpt6: '账号 6',
		accountNumberOpt8: '自动',
		
		GroupPickup: '组代接',
		butConfirm: '应用',
		butCancel: '取消'
	}	
},
programKeyHtml = {
	form1: {
		key: '按键',
		type: '类型',
		value: '值',
		label: '显示标签',
		account: '账号',

		programKeys: ['静音', '保持', '重拨', 
		              '向上键', '向下键', '向左键', '向右键', '取消', '确定', 
		              '软键1', '软键2', '软键3', '软键4'],

		programKeys_A1x: ['静音', '保持', '重拨', 
		              '向上键', '向下键', '向左键', '向右键', '取消', '确定', 
		              '软键1', '软键2', '软键3'],

		programKeys_A2x: ['静音', '保持', '重拨', 
		              '向上键', '向下键', '向左键', '向右键', '取消', '确定', 
		              '软键1', '软键2', '软键3'],

		programKeys_CT11: ['静音', '向上键', '向下键', 
		              '软键1', '软键2', '软键3', '软键4'],

		keyTypeOpt0: 'Default',
		keyTypeOpt1: '线路',
		keyTypeOpt2: '快速拨号',

		keyTypeOpt4: '短消息',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: '指定代答',
		keyTypeOpt10: '同组代答',
		keyTypeOpt11: '呼叫预留',
		keyTypeOpt12: '对讲机',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: '会议',
		keyTypeOpt15: '呼叫前转',
		keyTypeOpt16: '呼叫转移',
		keyTypeOpt17: '呼叫保持',
		keyTypeOpt18: '免打扰',
		keyTypeOpt19: '重拨',
		keyTypeOpt20: '电话簿',
		keyTypeOpt21: '回拨',
		keyTypeOpt22: '前缀',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: '无',
		keyTypeOpt32: '历史记录',
		keyTypeOpt33: '状态',
		keyTypeOpt34: '语音信箱',
		keyTypeOpt35: '静音',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: '取消',
		keyTypeOpt38: '组播',
		keyTypeOpt39: '组播列表',
		
		accountNumberOpt1: '账号 1',
		accountNumberOpt2: '账号 2',
		accountNumberOpt3: '账号 3',
		accountNumberOpt4: '账号 4',
		accountNumberOpt5: '账号 5',
		accountNumberOpt6: '账号 6',
		accountNumberOpt8: '自动',
		
		GroupPickup: '组代接',
		butConfirm: '应用',
		butCancel: '取消'
	}	
},
aetAdvHtml = {
	form1: {
		networkSetting: '网络设置',
		innerNet: '内部网络',
		dhcp: 'DHCP',
		staticIp: '静态IP',
		ip: 'IP地址',
		subnetMask: '子网掩码',
		defaultGateway: '默认网关',
		StaticDNSEnable: '静态DNS',
   		on: '开',
		off: '关',
		primaryDNS: '首选DNS服务器',
		secondaryDNS: '备选DNS服务器',
		butConfirm: '应用',
		butCancel: '取消',

		tips: {
			innerNet: '内部网络',
			dhcp: '自动向DHCP服务器请求获得IP地址，子网掩码，网关，DNS等。',
			staticIp: '手动配置IP地址，子网掩码，网关，DNS等。',
			StaticDNSEnable: '在IPv4/IPv6 DHCP模式下,是否使用静态的IPv4/IPv6 DNS'
		}
	}
},
extKeyHtml = {
	form1: {
		linkControl: '连接控制',
		linkableDivice: '可连接设备',
		key: '按键',
		type: '类型',
		value: '值',
		label: '显示标签',
		account: '账号',
		ext: 'BLF代答码',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: '扩展键',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: '线路',
		keyTypeOpt2: '快速拨号',
		keyTypeOpt4: '短消息',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: '指定代答',
		keyTypeOpt10: '同组代答',
		keyTypeOpt11: '呼叫预留',
		keyTypeOpt12: '对讲机',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: '会议',
		keyTypeOpt15: '呼叫前转',
		keyTypeOpt16: '呼叫转移',
		keyTypeOpt17: '呼叫保持',
		keyTypeOpt18: '免打扰',
		keyTypeOpt19: '重拨',
		keyTypeOpt20: '电话簿',
		keyTypeOpt21: '回拨',
		keyTypeOpt22: '前缀',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialed',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: '无',
		keyTypeOpt32: '历史记录',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: '语音信箱',
		keyTypeOpt35: '静音',
		keyTypeOpt36: 'Login',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: '组播',
		keyTypeOpt39: '组播列表',
		
		accountNumberOpt1: '账号 1',
		accountNumberOpt2: '账号 2',
		accountNumberOpt3: '账号 3',
		accountNumberOpt4: '账号 4',
		accountNumberOpt5: '账号 5',
		accountNumberOpt6: '账号 6',
		accountNumberOpt8: '自动',
		
		GroupPickup: '组代接',
		butConfirm: '应用',
		butCancel: '取消'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: '需填写待连接设备的设备ID,可在待连接设备的状态菜单中查找',
		}
},
extKeyBackHtml = {
	noLink: '未检测到扩展台! 请连接后刷新本页.'	
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
		dhcpTime: 'DHCP时间',
		disable: '禁用',
		enable: '启用',
		auto: '自动',
		timeZone: '时区',
		primaryNtp: '首选NTP服务器',
		secondaryNtp: '备选NTP服务器',
		updateInterval: '更新间隔(秒)',
		daylight: '夏令时',
		fixedType: '类型',
		fixedTypeOpt0: '日期方式',
		fixedTypeOpt1: '周方式',
		startMonth: '开始月份',
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
		startDate: '开始日期',
		startHourDay: '开始时间',
		startDayWeek: '星期几开始',
		Sunday: '星期日',
		Monday: '星期一',
		Tuesday: '星期二',
		Wednesday: '星期三',
		Thursday: '星期四',
		Friday: '星期五',
		Saturday: '星期六',
		startWeekMonth: '月起始星期',
		firstInMonth: '第一个星期',
		secondInMonth: '第二个星期',
		thirdInMonth: '第三个星期',
		fourthInMonth: '第四个星期',
		lastInMonth: '第五个星期',
		stopMonth: '结束月份',
		stopDate: '结束日期',
		stopHourDay: '结束时间',
		stopDayWeek: '星期几结束',
		stopWeekMonth: '月结束星期',
		offset: '偏移(分钟)',
		manualTime: '手动设置时间',
		dateYmd: '日期',
		autoDate: '生成日期',
		timeHms: '时间',
		autoTime: '生成时间',
		timeFormat: '时间制式',
		timeFormatOpt0: '12小时',
		timeFormatOpt1: '24小时',
		dateFormat: '日期格式',
		backlightTime: '背光时间',
		backlightTimeOpt0: '总是',
		backlightTimeOpt1: '1分钟',
		backlightTimeOpt2: '2分钟',
		backlightTimeOpt3: '5分钟',
		backlightTimeOpt4: '10分钟',
		backlightTimeOpt5: '30分钟',
		screensaver_timeout: '屏保启动时间',
		screensaver_timeoutOpt0: '关',
		screensaver_timeoutOpt1: '1 分钟',
		screensaver_timeoutOpt2: '2 分钟',
		screensaver_timeoutOpt3: '5 分钟',
		screensaver_timeoutOpt4: '10 分钟',
		screensaver_timeoutOpt5: '30 分钟',
		backlightLevel: '背光灯亮度',
		slaveBacklightLevel: '副屏背光灯亮度',
		expandBacklightLevel: '外挂背光灯亮度',
		slaveLcdContract: '副屏LCD对比度',
		ringTones: '铃声类型',
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
		replaceRingTone: '替换铃声',
		wallpaper: '壁纸',
		delWallpaper: '删除',
		uploadWallpaper: '上传',
		cancelWallpaper: '取消',
		screensaver: '屏保',

		butConfirm: '应用',
		butCancel: '取消',

		tips: {	
			dhcpTime: '是否启用DHCP修正时间的功能.',
			replaceRingTone: '文件格式要求: 16-bit, wave, 黑白屏话机小于300KB, 其他小于800KB',
			timeZone: '选择您所在时区。',
			updateInterval: '设置到服务器校对本机时间的时间间隔。',
			daylight: '夏令时设置。',
			manualTime: '手动设置时间开启与关闭。',
			timeFormat: '设置时间为12小时制或24小时制。',
			dateFormat: '设置日期显示格式。',
			backlightTime: '设置背光时间。',
			screensaver_timeout: '设置屏保开启时间.',
			backlightLevel: '话机背光亮度调节。',
			ringTones: '话机铃声类型设置。',
			pictureSize: '建议图片分辨率461x278,大小在500比特以下'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: '禁止',
		enable: '启用',
		off: '关',
		on: '开',
		forward: '呼叫前转',
		always: '无条件前转',
		busy: '遇忙前转',
		noAnswer: '无应答前转',
		afterRingTime: '响铃时间(秒)',
		
		target: '目标号码',
		onCode: '开启特征码',
		offCode: '关闭特征码',
		
		dnd: '请勿打扰',
		dndOnCode: '开启特征码',
		dndOffCode: '关闭特征码',
		authNum: '授权号码(逗号分隔)',
		
		generalInfo: '基本信息',
		liveDialpad: '活跃键盘',
		interDigitTime: '按键延时呼出(秒)',
		autoAnswer: '自动应答',
		autoAnswerDelay: '自动接听延迟(秒)',
		ignoreMissedCall: '忽略未接来电',
		callWaiting: '呼叫等待',
		hotline: '热线号码',
		hotlineTimeout: '热线延迟时间(0~180秒)',
		keyAsSend: '作为呼出键',
		dialNowTimeout: '立即呼出间隔时间(秒)',
		busyToneTimer: '忙音延时(秒)',
		returnCodeWhenRefuse: '拒接返回码',
		returnCodeWhenDnd: '免打扰返回码',
		r404: '404(未发现)',
		r480: '480(临时不可用)',
		r486: '486(忙)',
		rfc2543Hold: 'RFC 2543 Hold',
		useOutboundProxyInDialog: '会话中使用呼出代理服务器',
		loginTimeout: '登录超时(1~1000分钟)',
		hidedtmf: '隐藏 DTMF',
		multicastCodec: '多播编解码',
		watchdog: '看门狗',
		
		audioSettings: '音量设置',
		callWaitingTone: '呼叫等待音',
		headset: '耳机音量',
		handset: '手柄音量',
		handfree: '免提音量',
		ringer: '响铃音量',
		headsetSend: '耳机发送音量',
		handsetSend: '手柄发送音量',
		handfreeSend: '免提发送音量',
		ringerDeviceForHeadset: '来电铃声的响铃设备',
		ringerDeviceForHeadsetOpt0: '扬声器',
		ringerDeviceForHeadsetOpt1: '耳麦',
		
		transferSettings: '转移设置',
		blindTransferOnHook: '挂机时自动盲转',
		attendedTransferOnHook: '挂机咨询转',
		transferOnConHangUp: '挂机转移通话(会议)',
		transferModeViaDsskey: '可编程按键转接方式',
		transferModeViaDsskeyOpt0: '新的呼叫',
		transferModeViaDsskeyOpt1: '咨询转',
		transferModeViaDsskeyOpt2: '盲转',
		
		callPickup: '代答来电',
		directCallPickup: '指定代答代接',
		directCallPickupCode: '指定代答特征码',
		groupCallPickup: '同组代答',
		groupCallPickupCode: '同组代答特征码',
		
		accept_sip_trust_server_only: '只支持SIP信任服务器',
		recordUserId: '录音用户ID',
		extFunction: '扩展台功能',
		RET: 'Expansion module',
		EHS: 'EHS wireless headset',

		holdOnConference: '加人时会场保持',

		butConfirm: '应用',
		butCancel: '取消',
		
		tips: {
			forward: '设置来电转移。',
			alwaysTarget: '转移的目的号码。',
			alwaysOnCode: '开启全部来电转移的特征码，话机通过直接向服务器发送该特征码来开启全部转移。',
			alwaysOffCode: '关闭全部来电转移的特征码，话机通过直接向服务器发送该特征码来关闭全部转移。',
			busyTarget: '转移的目的号码。',
			busyOnCode: '开启遇忙来电转移的特征码，话机通过直接向服务器发送该特征码来开启遇忙转移。',
			busyOffCode: '关闭遇忙来电转移的特征码，话机通过直接向服务器发送该特征码来关闭遇忙转移。',
			afterRingTime: '来电响铃转移等待时间。',
			noAnswerTarget: '转移的目的号码。',
			noAnswerOnCode: '开启来电无应答转移的特征码，话机通过直接向服务器发送该特征码来开启无应答转移。',
			noAnswerOffCode: '关闭来电无应答转移的特征码，话机通过直接向服务器发送该特征码来关闭无应答转移。',
			
			dndOnCode: '设置开启DND的特征码，通过向服务器发送该特征码来开启DND。',
			dndOffCode: '设置关闭DND的特征码，通过向服务器发送该特征码来关闭DND。',
			
			liveDialpad: '用户拨号界面自动呼出开启与关闭。',
			interDigitTime: '拨号自动呼出延迟时间。',
			autoAnswer: '开启和关闭自动应答。',
			autoAnswerDelay: '配置自动应答选项开启时，应答的延迟时间',
			callWaiting: '新来电呼入遇忙等待开关。',
			hotline: '设置热线号码。',
			hotlineTimeout: '设置热线等待延时时间。',
			keyAsSend: '设置作为呼出键使用的按键。',
			dialNowTimeout: '设置立即拨号的时间间隔。',
			busyToneTimer: '通话结束后，话机响忙音时间。',
			returnCodeWhenRefuse: '来电拒接返回的消息。',
			returnCodeWhenDnd: '设置免打扰时返回的信息。',
			rfc2543Hold: 'Hold的两种标准，需服务器支持。',
			useOutboundProxyInDialog: '建立通话的双方是否经过服务器。',
			loginTimeout:'设置网页静止不操作闲置多长时间后，系统自动退出，再操作时需要重新登录。',
			acceptSipTrustServerOnly: '仅接受来自SIP server和Outbound proxy server的消息。',

			callWaitingTone: '设置提示音用于提示通话中有新来电（呼叫等待开启时）。',
			ringerDeviceForHeadset: '来电响铃通道。',

			blindTransferOnHook: '挂机盲转开关。',
			attendedTransferOnHook: '设置挂机咨询转的开启与关闭',
			transferOnConHangUp: '会议发起方挂断，transfer另外两方。'
		}
	}	
},
phoneDNDAndForwardHtml = {
	form1: {
		phone: '话机',
		custom: '自定义',
		forward: '呼叫转移',
		emergency: '呼叫转移紧急号码',
		authNum: '呼叫转移鉴权号码',
		mode: '模式',
		account: '账号',
		disable: '关闭',
		enable: '开启',
		off: '关',
		on: '开',
		always: '无条件转移',
		busy: '遇忙转移',
		noAnswer: '无应答转移',
		afterRingTime: '响铃时间（秒）',
		
		target: '目标号码',
		onCode: '开启特征码',
		offCode: '关闭特征码',
		

		dndStatus: '免打扰状态',
		dnd: '免打扰',
		dndOnCode: '免打扰开启特征码',
		dndOffCode: '免打扰关闭特征码',
		
		butConfirm: '应用',
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
		fmVer: '固件版本',
		hdVer: '硬件版本',
		
		resetToFactory: '恢复出厂设置',
		reboot: '重启',		
		
		upgradeHeader: '升级固件',
		selectFw: '选择固件',
		upgrade: '升级',
		
		tips: {
			upgradeHeader: '选择供应商发布的新版本固件进行升级。'
		}
	},
	commonText: {
		resetConfirm: '您是否要恢复出厂设置?',
		resetSuccess: '恢复出厂设置成功. 话机将自动重启.',
		resetFail: '恢复出厂设置失败, 请重试!',
		
		rebootConfirm: '您是否要重启话机?',
		
		uploadFilePrompt: '上传文件如下:',
		upgradeMsg: '请不要关闭电源!',
		upgradeText: '升级中, 请等待...',
		
		upgradeFail: '升级失败, 请重试!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: '报文',
		start: '开始',
		stop: '停止',
		exportStr: '导出',
		
		debug: '调试'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: '自动更新',
		PnPEnable: 'PnP 激活',
		DHCPEnable: 'DHCP 激活',
		provisioningServer: '服务器地址',
		userName: '用户名称',
		password: '密码',
		commonAESKey: 'AES密钥',
		MACAESKey: '指定MAC的AES密钥',
		checkNewConfig: '开机更新检测',
		off: '关',
		on: '开',
		repeatedly: '固定间隔时间更新检测',
		interval: '间隔时间(分钟)',
		weekly: '固定每周更新检测',
		time: '时间',
		dayOfWeek: '星期',
		
		
		butConfirm: '应用',
		butCancel: '取消',
		
		tips: {
			PnPEnable: '是否发送请求到服务器以获取升级的URL',
			DHCPEnable: '是否从DHCP服务器获取升级URL',
			provisioningServer: '更新服务器的地址',
			password: '服务器密码',
			checkNewConfig: '设备上电后检测自动更新'
		}
	},
	showText: {
		weekly:  ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: '导入/导出配置',
		importFile: '导入文件',
		importStr: '导入',
		exportStr: '导出',
		exportUserData: '导出用户数据',

		exportImportConfig: '导入/导出CFG文件',
		
		exportSyslog: '导出系统日志',
		logLocation: '日志位置',
		logLocationOpt0: '本地',
		logLocationOpt1: '服务器', 
		serverName: '服务器名称',
		logLevel: '日志级别',
		logOpt0: '致命错误',
		logOpt1: '错误',
		logOpt2: '警告',
		logOpt3: '信息',
		logOpt4: '调试',
		exportStr2: '导出',
		
		butConfirm: '应用',
		butCancel: '取消',
		
		tips: {
			exportImportConfig: '导出的文件由话机被修改的配置项组成的（配置未修改时为空文件），另外，导入导出文件都是按批量部署格式组织的',
			importExportCfg: '点击导出，导出话机当前配置；选择要导入的配置文件，点击导入，将配置导到当前话机并重启。',
			exportSyslog: '类型为Local则将系统日志直接导出；类型为Server，则将日志导出到指定的服务器上。'
		}
	}
},
phoneRemoteControlHtml = {
	form1: {
		actionURIIPList:'允许控制IP列表',
		remoteControl:'远程控制',
		cstaControl: 'CSTA Control',
		disable: '禁用',
		enable: '启用',
		butConfirm: '应用',
		butCancel: '取消'
	       },
},
phoneActionUrlHtml = {
	form1: {
		actionUrlItem: ['setupCompletedUrl','registeredUrl','unregisteredUrl','registerFailedUrl','offHookUrl','onHookUrl','incomingCallUrl','outgoingCallUrl','establishedUrl','terminatedUrl','openDNDUrl','closeDNDUrl','openAlwaysForwardUrl','closeAlwaysForwardUrl','openBusyForwardUrl','closeBusyForwardUrl','openNoAnswerForwardUrl','closeNoAnswerForwardUrl','transferCallUrl','blindTransferUrl','attendedTransferUrl','holdUrl','unHoldUrl','muteUrl','unMuteUrl', 'missedCallUrl','IPChangedUrl','idleToBusyUrl','busyToIdleUrl','rejectIncomingCallUrl','answerNewIncomingCallUrl','transferFailedUrl','transferFinishedUrl','forwardIncomingCallUrl','autopFinishUrl','openCallWaitingUrl','closeCallWaitingUrl','headsetUrl','handfreeUrl','cancelCallOutUrl','remoteBusyUrl','callRemoteCanceledUrl'],
		actionUrlNameList: ['启动完成','注册成功','未注册','注册失败','放下手柄','拿起手柄','来电','去电','建立会话','结束','开启免打扰','关闭免打扰','开启无条件前转','关闭无条件前转','开启遇忙前转','关闭遇忙前转','开启无应答前转','关闭无应答前转','转接呼叫','盲转','咨询转','保持','取消保持','静音','取消静音','未接来电','IP变更','闲置进入通话','通话进入闲置','拒绝来电','接听新来电','转接失败','转接完成','前转来电','自动完成更新','开启呼叫等待','关闭呼叫等待','使用耳麦','使用免提','取消呼出','远程忙','取消远程呼叫'],
		butConfirm: '应用',
		butCancel: '取消'
	}
},

phoneTonesHtml = {
	form1: {
		       /*country list*/
		custom: '自定义',
		australia: '澳大利亚',
		austria: '奥地利',
		brazil: '巴西',
		belgium: '比利时',
		chile: '智利',
		china: '中国',
		czech: '捷克',
		czechETSI: '捷克ETSI',
		denmark: '丹麦',
		finland: '芬兰',
		france: '法国',
		germany: '德国',
		greatBritain: '大不列颠岛',
		greece: '希腊',
		hungary: '匈牙利',
		lithuania: '立陶宛',
		india: '印度',
		italy: '意大利',
		japan: '日本',
		mexico: '墨西哥',
		newZealand: '新西兰',
		netherlands: '荷兰',
		norway: '挪威',
		portugal: '葡萄牙',
		spain: '西班牙',
		switzerland: '瑞士',
		sweden: '瑞典',
		russia: '俄罗斯',
		unitedStates: '美国',
		       /*end of country list*/

		selectCountry: '国家选择',
		dial: '拨号',
		ringBack: '回铃音',
		busy: '忙音',
		congestion: '网络拥塞提示音',
		callWaiting: '呼叫等待提示音',
		dialRecall: '回拨提示音',
		info: '特殊信息',
		stutter: '语音留言提示音',
		message: '信息提示音',
		autoAnswer: '自动应答提示音',
		butConfirm: '应用',
		butCancel: '取消'
	}
},
phoneDialPlanHtml = {
	mytabMenu: {
		replaceRule: '替换规则',
		dialNow: '立即呼出',
		areaCode: '地区代码',
		blockOut: '呼出限制'
	},
	replaceRuleTitle: ['序号', '前缀', '替换', '账号'],
	dialNowsTitle: ['序号', '立即呼出', '账号'],
	replaceRuleForm: {
		num: '前缀',
		replace: '替换',
		account: '账号',
		add: '添加',
		edit: '修改',
		del : '删除',
		save: '保存'
	},
	dialNowsForm: {
		rule: '立即呼出',
		account: '账号',
		add: '添加',
		edit: '修改',
		del : '删除',
		save: '保存'
	},
	form3: {
		code: '区号',
		minLen: '最小长度',
		maxLen: '最大长度',
		areaCodeAccount: '账号',
		
		butConfirm: '应用',
		butCancel: '取消'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: '限制呼出号码',
		account: '账号',
		
		butConfirm: '应用',
		butCancel: '取消'
	}
},
phoneRingHtml = {
	form1: {
		alterInfoTitle: 'Alert Info',
		butConfirm: '应用',
		butCancel: '取消',
		tips: {
		}
	       }
},
phoneVoiceHtml = {
	form1: {
		disable: '禁用',
		enable: '启用',
		
		echoCancellation: '回音消除设置',
		echoCanceller: '回音消除',
		echoCancellerOpt0: '低',
		echoCancellerOpt1: '中',
		echoCancellerOpt2: '高',
		vad: '静音检测',
		cng: '舒适噪音',
		
		jitterBuffer: '抖动缓冲',
		type: '类型',
		typeOpt0: '固定的',
		typeOpt1: '适应的',
		minDelay: '最小延时',
		maxDelay: '最大延时',
		normalDelay: '普通延时',
		
		butConfirm: '应用',
		butCancel: '取消',
		
		tips: {
			echoCancellation: '回音消除设置。',
			echoCanceller: '开启和关闭回声消除器。',
			vad: '语音活动检测。',
			cng: '舒适噪声发生器。',
			jitterBuffer: '这是共享数据区，语音数据包可以被收集，存储和发送到均匀的声音处理器。'
		}
	}
},


phoneTrustedCertificatesHtml = {
    form1: {
        index: '序号',
        issued_to: '颁布给',
        issued_by: '颁布者',
        expiration: '有效期',
        delete_select: '删除',
        import_trusted_certificates: '可信任证书',
        certificationfile: '导入可信任证书',
        import_server_certificates: '服务器证书',
	server_certificationfile: '导入服务器证书',
	btn_upload: '导入',
	btn_delete: '删除',

	butConfirm: '确定',
	butCancel: '取消'
	},
    showText: {
		delConfirm: '确定删除选中文件?',
		selectEmpty: '至少要选择一个文件'
	}
},


phoneLockHtml = {
	form1: {

		disable: '禁用',
		enable: '启用',

		keypad_lock: '键盘锁',
		keypadlock_enable: '启用键盘锁',
		keypadlock_type: '键盘锁类型',
		keypadlock_password: '解锁密码（0~15位数字）',
		delay_lock: '上锁延迟（1~3600秒）',
		emergency_call: '紧急号码',
		keypad_lock_menu_key: '菜单键',
		keypad_lock_function_key: '功能键',
		keypad_lock_all_keys: '所有键',
		keypad_lock_answer_call_only:'仅接听',

		butConfirm: '应用',
		butCancel: '取消',

		tips: {
			emergency_call: '即使设置了键盘锁,紧急电话也可正常拨出'
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
			tr069_enable: '开启或关闭TR069功能',
			ACS_URL: 'ACS服务器地址',
			ACS_username: '配置IP电话的用户名，以使用ACS（自动配置服务器）进行身份验证',
			ACS_password: '连接TR069服务器的密码',
			periodic_inform_enable: '开启或关闭话机定期通知服务器机制',
			periodic_inform_interval: 'TR069服务器发送信息到服务器的时间间隔，默认3600S',
			connecting_request_username: 'TR069服务器连接话机的用户名',
			connecting_request_password: 'TR069服务器连接话机的密码'

		}
	}
},


phoneSecurityHtml = {
	form1: {
		passwdModify: '密码修改',
		userType: '用户类型',
		currentPasswd: '旧密码',
		newPasswd: '新密码',
		confirmPasswd: '确认新密码',
		
		butConfirm: '应用',
		butCancel: '取消',
		
		tips: {
			userType: '用户选择登陆的权限，管理员权限可以修改用户的密码和自己的密码，但是用户权限只能修改自己的密码。'
		}
	},
	showText: {
		pwdNoMatch: '两次输入的新密码不一致',
		modifyFailed: '修改密码失败, 请重试!'
	}
},
contactsHtml = {
	mytabMenu: ['联系人', '黑名单'],
	tableHeader: ['序号', '名字', '工作', '手机', '其它', '账号'],
	buttonDiv: {
		save: '保存',
		del: '删除',
		moveToBlack: '打入黑名单',
		moveToWhite: '移动到联系人'
	},
	editDiv: {
		contacts: '电话簿',
		name: '名字',
		officeNum: '工作',
		mobileNum: '手机',
		otherNum: '其它',
		account: '账号',
		accountOpt8: '自动',
		accountOpt1: '账号 1',
		accountOpt2: '账号 2',
		accountOpt3: '账号 3',
		accountOpt4: '账号 4',
		accountOpt5: '账号 5',
		accountOpt6: '账号 6',
		ring: '铃声',
		ringOpts: ['自动', 'Ring1.wav', 'Ring2.wav', 'Ring3.wav', 'Ring4.wav', 
		           'Ring5.wav', 'Ring6.wav', 'Ring7.wav', 'Ring8.wav', 'Ring9.wav', 'Ring10.wav'],
		photo: '相片',
		defaultPhoto: '默认',
		add: '添加',
		deletePhoto: '删除',
		uploadPhoto: '上传相片',
		pictureSize: '建议图片分辨率100x135,大小在250比特以下',
		edit: '修改',
		search: '搜索',

		importAndExport: '导入和导出本地地址簿',
		importFile: '导入本地地址簿',
		importStr: '导入',
		exportStr: '导出'
	},
	
	shwoText: {
		delConfirm: '您确定删除已选择的联系人?',
		delConfirm1: '注意: 当保存以后，删除的联系人将不能恢复!', 
		selectEmpty: '请至少选择一条记录.',
		selectTooMuch: '已选择记录太多!',
		nameEmpty: '名称不能为空!',
		nameExist: '名称已存在!',
		phonebookFull: '电话本必须不多于400条!',
		blacklistFull: '黑名单必须不多于400条!',
		contentEmpty: '内容不能为空!',
		notFind: '没有找到指定联系人.'
	}
},

multicastHtml = {
	form1: {
		multicastListening: '组播监听',
		pagingBarge: '寻呼介入',
		ignoreDND: '忽略DND',
		pagingPriorityActive: '寻呼优先级',
		ipAddr: 'IP',
		listeningAddr: '监听地址',
		label: '标签',
		channel: '信道',
		priority: '优先级',
		disabled: '禁用',
		enabled: '启用',

		pagingListLabel: '组播列表',
		index: '索引',
		pagingAddr: '组播地址',


		butConfirm: '应用',
		butCancel: '取消',

		tips: {
		}
	}
},
LDAPHtml = {
	form1: {
		disable: '禁用',
		enable: '启用',

		LDAP:'LDAP',
		enable_ldap:'启用LDAP',

        name_filter:'LDAP名称过滤',
        number_filter:'LDAP号码过滤',

        name_attributes:'LDAP名称属性',
        number_attributes:'LDAP号码属性',
        display_name:'LDAP显示名称',

        server_address:'服务器地址',
        port:'端口',
        base:'基础',
        user_name:'用户名称',
        password:'密码',
        max_hits:'最大查询结果',
        protocol_version:'协议版本',
        version2:'版本 2',
        version3:'版本 3',
        optionNo: '否',
		optionYes: '是',

        match_incoming_calls:'LDAP匹配来电',
        ldap_lookup_for_dial:'拨号/预拨号查询',
        sort_result:'LDAP搜索排序',

		butConfirm: '应用',
		butCancel: '取消',

		tips: {
			LDAP: 'LDAP 通讯录.',
			name_filter: 'LDAP名字滤波器，如果输入搜索的为字符，则根据此滤波器到服务器上查询联系人.',
			number_filter: 'LDAP数字滤波器，如果输入搜索的为数字，根据此滤波器到服务器上查询联系人.',
			server_address: 'LDAP服务器地址，可以填写IP地址或者域名.',
			port: 'LDAP服务器端口号.',
			base: '到服务器上查询的根节点，相当于到哪个目录下查询联系人.',
			user_name: '登陆服务器用户名.',
			password: '登陆服务器密码.',
			max_hits: '最大查询结果的条数.',
			name_attributes: '设置要获取的名字相关属性.',
			number_attributes: '设置要获取的号码相关属性.',
			display_name: '搜索结果显示出来的显示名类型.',
			match_incoming_calls: '设置来电号码是否进行LDAP搜索显示名.',
			ldap_lookup_for_dial: '设置拨号时是否进行LDAP搜索.',
			sort_result: '设置是否对搜索结果进行排序.'
		}
	}
},

XMLPhonebookHtml = {
	form1: {
        disable: '禁用',
		enable: '启用',

        index:'序号',
        remote_url:'远程URL',
        display_name:'显示名称',

		xml_remote_phonebook:'设置',

        SRemoteName:'来电号码匹配',
        SRemoteNameFlashTime:'更新时间间隔（秒）',

		butConfirm: '应用',
		butCancel: '取消',

		tips: {
			SRemoteName: '接打电话时，是否进行远程电话本匹配',
			SRemoteNameFlashTime: '设置远程电话本刷新时间间隔（单位秒，0代表不进行刷新）'
		}
	}
},

phoneCallInfoHtml = {
	mytabMenu: ['拨号列表', '未接来电', '已接来电', '前转来电列表'],
	tableHeader: ['序号', '日期时间', '时长', '本机账号', '账号名', '号码']
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
