type Translations = {
  [key: string]: string
}

export const translations = {
  ar: {
    // Dashboard
    'dashboard.title': 'لوحة معلومات إي-تريك ',
    'dashboard.exportPdf': 'تصدير كـ PDF',
    'dashboard.exportStarted': 'بدأ التصدير',
    'dashboard.exportStartedDesc': 'يتم تصدير لوحة المعلومات كملف PDF.',
    'dashboard.exportComplete': 'اكتمل التصدير',
    'dashboard.exportCompleteDesc': 'تم تصدير لوحة المعلومات بنجاح.',

    // Navbar
    'nav.home': 'الرئيسية',
    'nav.dashboard': 'لوحة المعلومات',
    'nav.reports': 'التقارير البيئية',
    'nav.faq': 'الأسئلة الشائعة',

    // Homepage
    'home.hero.title': 'إي-تريك: المراقبة البيئية الذكية ',
    'home.hero.dashboardBtn': 'استكشف لوحة المعلومات',
    'home.hero.learnMoreBtn': 'تعرف على المزيد',

    'home.features.title': 'مميزات المنصة',
    'home.features.subtitle':
      'تقدم منصة إي-تريك مجموعة شاملة من الأدوات والتقنيات المتقدمة لمراقبة وتحليل البيانات البيئية .',

    'home.features.cards.monitoring.title': 'مراقبة بيئية شاملة',
    'home.features.cards.monitoring.description':
      'مراقبة مستمرة للمؤشرات البيئية الرئيسية مثل الغطاء النباتي، ومستويات الجفاف، وتآكل التربة.',

    'home.features.cards.analysis.title': 'تحليل البيانات المتقدم',
    'home.features.cards.analysis.description':
      'تحليل شامل للبيانات البيئية باستخدام أحدث التقنيات والنماذج الإحصائية لاستخراج رؤى قيمة.',

    'home.features.cards.conservation.title': 'حماية الموارد الطبيعية',
    'home.features.cards.conservation.description':
      'دعم جهود الحفاظ على الموارد الطبيعية من خلال توفير بيانات دقيقة ومؤشرات أداء رئيسية.',

    'home.features.cards.risk.title': 'تقييم المخاطر البيئية',

    'home.features.cards.mapping.title': 'خرائط تفاعلية متقدمة',

    'home.features.cards.ai.title': 'تحليل بالذكاء الاصطناعي',

    'home.cta.title': 'ابدأ رحلتك مع إي-تريك اليوم',
    'home.cta.description':
      'اكتشف كيف يمكن للبيانات البيئية المتقدمة أن تساعد في اتخاذ قرارات أفضل',
    'home.cta.button': 'استكشف لوحة المعلومات',

    // Footer
    'footer.description': 'منصة متكاملة لمراقبة وتحليل البيانات البيئية .',
    'footer.navigation': 'التنقل',
    'footer.resources': 'الموارد',
    'footer.documentation': 'الوثائق',
    'footer.apiReference': 'مرجع API',
    'footer.dataPolicy': 'سياسة البيانات',
    'footer.contact': 'اتصل بنا',
    'footer.email': 'البريد الإلكتروني',
    'footer.phone': 'الهاتف',
    'footer.copyright': 'جميع الحقوق محفوظة.',
    'footer.link': 'تواصل معنا',
    // Sidebar
    'sidebar.title': 'إي-تريك',
    'sidebar.subtitle': 'نظام المراقبة البيئية لمنطقة القصيم',
    'sidebar.dashboard': 'لوحة المعلومات',
    'sidebar.maps': 'الخرائط',
    'sidebar.analytics': 'التحليلات',
    'sidebar.reports': 'التقارير',
    'sidebar.envData': 'البيانات البيئية',
    'sidebar.treeMonitoring': 'مراقبة الأشجار',
    'sidebar.droughtIndex': 'مؤشر الجفاف (SPI)',
    'sidebar.soilErosion': 'تآكل التربة',
    'sidebar.landDegradation': 'تدهور الأراضي',
    'sidebar.riskAssessment': 'تقييم المخاطر',
    'sidebar.settings': 'الإعدادات',
    'sidebar.dataSources': 'مصادر البيانات',
    'sidebar.preferences': 'التفضيلات',
    'sidebar.adminUser': 'مستخدم المسؤول',
    'sidebar.envAnalyst': 'محلل بيئي',

    // Cards
    'cards.vegHealth': 'صحة الغطاء النباتي',
    'cards.ndviIndex': 'مؤشر NDVI',
    'cards.modVeg': 'غطاء نباتي متوسط',
    'cards.optVegHealth': 'من صحة الغطاء النباتي المثالية',
    'cards.droughtStatus': 'حالة الجفاف',
    'cards.spiIndex': 'مؤشر SPI',
    'cards.modDrought': 'جفاف متوسط',
    'cards.normalPrecip': 'من مستويات هطول الأمطار الطبيعية',
    'cards.soilErosionRisk': 'مخاطر تآكل التربة',
    'cards.rusleModel': 'نموذج RUSLE',
    'cards.tonHectareYear': 'طن/هكتار/سنة',
    'cards.highRiskThreshold': 'من عتبة المخاطر العالية',

    // Map
    'map.title': 'الخريطة التفاعلية',
    'map.subtitle': 'تصور البيانات البيئية',
    'map.loading': 'جاري تحميل الخريطة...',
    'map.streets': 'خريطة الشوارع',
    'map.satellite': 'صور الأقمار الصناعية',
    'map.ndviZones': 'مناطق NDVI',
    'map.qassimRegion': 'منطقة القصيم',
    'map.mainStation': 'محطة المراقبة الرئيسية',

    // NDVI Chart
    'ndvi.title': 'مؤشر الغطاء النباتي (NDVI)',
    'ndvi.subtitle': 'متوسط القيم الشهرية',
    'ndvi.value': 'قيمة NDVI',
    'ndvi.currentYear': 'NDVI للعام الحالي',
    'ndvi.fiveYearAvg': 'متوسط 5 سنوات',

    // Environmental Analysis
    'env.title': 'التحليل البيئي',
    'env.subtitle': 'مقاييس ومقارنات تفصيلية',
    'env.desertification': 'التصحر',
    'env.droughtIndex': 'مؤشر الجفاف',
    'env.soilErosion': 'تآكل التربة',

    // Tree Monitoring
    'tree.title': 'مراقبة الأشجار والتشجير',
    'tree.subtitle': 'تتبع مبادرات زراعة الأشجار وصحة الغابات',
    'tree.totalPlanted': 'إجمالي الأشجار المزروعة',
    'tree.annualInit': 'مبادرة التشجير السنوية',
    'tree.treesPlantedYear': 'شجرة مزروعة هذا العام',
    'tree.progress': 'التقدم',
    'tree.target': 'الهدف',
    'tree.trees': 'شجرة',
    'tree.activeSites': 'مواقع نشطة',
    'tree.monthlyMonitoring': 'مراقبة شهرية',
    'tree.plantingActivity': 'نشاط زراعة الأشجار',
    'tree.monthlyProgress': 'تقدم الزراعة الشهري مقابل الأهداف',
    'tree.monthly': 'شهري',
    'tree.yearly': 'سنوي',
    'tree.treesPlanted': 'الأشجار المزروعة',
    'tree.monthlyTarget': 'الهدف الشهري',
    'tree.count': 'العدد',
    'tree.lowVegDetected': 'تم اكتشاف صحة نباتية منخفضة',
    'tree.requiresAttention':
      'يتطلب اهتمامًا فوريًا. صحة الأشجار ضعيفة مع مخاطر محتملة على معدل البقاء.',
    'tree.afforestationSites': 'مواقع التشجير',
    'tree.geoDistribution': 'التوزيع الجغرافي لمبادرات زراعة الأشجار',
    'tree.mapView': 'عرض الخريطة',
    'tree.listView': 'عرض القائمة',
    'tree.afforestedAreas': 'مناطق التشجير',
    'tree.monitoringSites': 'مواقع المراقبة',
    'tree.tree': 'الأشجار',
    'tree.health': 'الصحة',
    'tree.coverage': 'التغطية',
    'tree.treePlanted': 'الأشجار المزروعة',
    'tree.healthStatus': 'حالة الصحة',
    'tree.species': 'الأنواع',
    'tree.lastInspection': 'آخر فحص',
    'tree.coordinates': 'الإحداثيات',

    // Desertification
    'desert.zonesDistribution': 'توزيع مناطق التصحر',
    'desert.yearlyComparison': 'المقارنة السنوية',
    'desert.chartView': 'عرض الرسم البياني',
    'desert.mapView': 'عرض الخريطة',
    'desert.selectYear': 'اختر السنة:',
    'desert.severe': 'شديد',
    'desert.high': 'مرتفع',
    'desert.moderate': 'متوسط',
    'desert.low': 'منخفض',
    'desert.satelliteComparison': 'سيتم عرض مقارنة صور الأقمار الصناعية هنا.',
    'desert.showingProgression': 'عرض تقدم التصحر من 2018 إلى 2022.',
    'desert.areaCoverage': 'تغطية المنطقة',

    // SPI Chart
    'spi.title': 'مؤشر هطول الأمطار القياسي (SPI)',
    'spi.subtitle':
      'يقيس ظروف الجفاف: القيم السالبة تشير إلى الجفاف، والقيم الموجبة تشير إلى ظروف رطبة',
    'spi.extremeDrought': 'جفاف شديد',
    'spi.severeDrought': 'جفاف حاد',
    'spi.moderateDrought': 'جفاف متوسط',
    'spi.wetConditions': 'ظروف رطبة',
    'spi.value': 'قيمة SPI',

    // Soil Erosion
    'soil.measurements': 'قياسات تآكل التربة',
    'soil.detailedData':
      'بيانات تفصيلية عن التآكل عبر مناطق مختلفة (طن/هكتار/سنة)',
    'soil.searchLocations': 'البحث عن المواقع، أنواع التربة...',
    'soil.filter': 'تصفية',
    'soil.export': 'تصدير',
    'soil.highRiskAreas': 'مناطق عالية المخاطر',
    'soil.mediumRiskAreas': 'مناطق متوسطة المخاطر',
    'soil.lowRiskAreas': 'مناطق منخفضة المخاطر',
    'soil.location': 'الموقع',
    'soil.erosionRate': 'معدل التآكل',
    'soil.riskLevel': 'مستوى الخطر',
    'soil.soilType': 'نوع التربة',
    'soil.slope': 'الانحدار',
    'soil.vegetation': 'الغطاء النباتي',
    'soil.lastUpdated': 'آخر تحديث',

    // Theme and Language
    'theme.light': 'فاتح',
    'theme.dark': 'داكن',
    'language.english': 'English',
    'language.arabic': 'العربية',

    // AI Analysis
    'ai.title': 'التحليل البيئي بالذكاء الاصطناعي',
    'ai.subtitle': 'تحليل الصور الفضائية وصور الطائرات بدون طيار',
    'ai.uploadTab': 'رفع الصور',
    'ai.resultsTab': 'النتائج',
    'ai.uploadImage': 'رفع صورة للتحليل',
    'ai.dragAndDrop': 'اسحب وأفلت الصورة هنا أو انقر للاختيار',
    'ai.supportedFormats': 'الصيغ المدعومة: TIF, TIFF',
    'ai.browseFiles': 'تصفح الملفات',
    'ai.note': 'ملاحظة:',
    'ai.imageRequirements':
      'يجب أن تكون الصور بدقة عالية وبتنسيق TIF/TIFF للحصول على أفضل النتائج.',
    'ai.invalidFileType':
      'نوع الملف غير صالح. يرجى اختيار ملف بتنسيق TIF أو TIFF.',
    'ai.removeFile': 'إزالة الملف',
    'ai.analysisOptions': 'خيارات التحليل',
    'ai.selectTask': 'اختر نوع المهمة',
    'ai.desertificationAnalysis': 'تحليل التصحر من الصور الفضائية',
    'ai.treeDensityAnalysis': 'تحليل كثافة الأشجار من صور الطائرات بدون طيار',
    'ai.comingSoon': 'قريبًا',
    'ai.analysisDetails': 'تفاصيل التحليل',
    'ai.desertificationDetails':
      'يستخدم هذا التحليل نماذج الذكاء الاصطناعي لتقييم مستويات التصحر وتدهور الأراضي من خلال تحليل مؤشرات الغطاء النباتي ورطوبة التربة وخصائص سطح الأرض.',
    'ai.treeDensityDetails':
      'يستخدم هذا التحليل خوارزميات الرؤية الحاسوبية لتحديد وعد الأشجار، وتقييم صحة الغطاء النباتي، وتحليل كثافة الأشجار من صور الطائرات بدون طيار عالية الدقة.',
    'ai.startAnalysis': 'بدء التحليل',
    'ai.processing': 'جاري المعالجة...',
    'ai.reset': 'إعادة تعيين',
    'ai.noFileError': 'يرجى رفع صورة أولاً قبل بدء التحليل.',
    'ai.processingError':
      'حدث خطأ أثناء معالجة الصورة. يرجى المحاولة مرة أخرى.',
    'ai.processingImage': 'جاري معالجة الصورة',
    'ai.processingDescription':
      'يقوم نظام الذكاء الاصطناعي بتحليل الصورة وتطبيق خوارزميات متقدمة لاستخراج المعلومات البيئية.',
    'ai.estimatedTime': 'الوقت المقدر المتبقي: 30 ثانية',
    'ai.desertificationResults': 'نتائج تحليل التصحر',
    'ai.treeDensityResults': 'نتائج تحليل كثافة الأشجار',
    'ai.analysisCompleted': 'اكتمل التحليل في',
    'ai.share': 'مشاركة',
    'ai.exportReport': 'تصدير التقرير',
    'ai.summary': 'الملخص',
    'ai.visualization': 'التصور المرئي',
    'ai.recommendations': 'التوصيات',
    'ai.keyMetrics': 'المقاييس الرئيسية',
    'ai.riskAssessment': 'تقييم المخاطر',
    'ai.processedImage': 'الصورة المعالجة',
    'ai.visualizationDescription':
      'تظهر الصورة المعالجة مناطق مختلفة مصنفة حسب حالة الغطاء النباتي ومستويات التصحر.',
    'ai.processedImageAlt': 'صورة معالجة بالذكاء الاصطناعي',
    'ai.healthyVegetation': 'غطاء نباتي صحي',
    'ai.stressedVegetation': 'غطاء نباتي مجهد',
    'ai.bareSoil': 'تربة عارية',
    'ai.water': 'مياه',
    'ai.aiRecommendations': 'توصيات الذكاء الاصطناعي',
    'ai.recommendationsDescription':
      'بناءً على تحليل البيانات، يقترح نظام الذكاء الاصطناعي الإجراءات التالية:',
    'ai.analysisType': 'نوع التحليل',
    'ai.dateProcessed': 'تاريخ المعالجة',
    'ai.overallRisk': 'مستوى الخطر الإجمالي',
    'ai.nextSteps': 'الخطوات التالية',
    'ai.nextStep1': 'تصدير التقرير الكامل للمشاركة مع أصحاب المصلحة',
    'ai.nextStep2': 'مقارنة النتائج مع البيانات التاريخية',
    'ai.nextStep3': 'تنفيذ التوصيات المقترحة وتتبع التقدم',
    'ai.downloadFullReport': 'تنزيل التقرير الكامل',
    'ai.exportStarted': 'بدأ التصدير',
    'ai.exportDescription': 'جاري تصدير تقرير التحليل كملف PDF.',
    'ai.exportComplete': 'اكتمل التصدير',
    'ai.exportSuccess': 'تم تصدير تقرير التحليل بنجاح.',
    'ai.shareLinkGenerated': 'تم إنشاء رابط المشاركة',
    'ai.shareLinkDescription':
      'يمكنك الآن مشاركة نتائج التحليل مع الآخرين باستخدام الرابط المنسوخ.',
    'ai.riskLow': 'منخفض',
    'ai.riskMedium': 'متوسط',
    'ai.riskHigh': 'مرتفع',
    'ai.riskCritical': 'حرج',
    'ai.riskDescription.low':
      'مستوى منخفض من مخاطر التصحر. يوصى بالمراقبة المستمرة.',
    'ai.riskDescription.medium':
      'مستوى متوسط من مخاطر التصحر. يجب اتخاذ إجراءات وقائية.',
    'ai.riskDescription.high':
      'مستوى مرتفع من مخاطر التصحر. يتطلب تدخلاً فوريًا.',
    'ai.riskDescription.critical':
      'مستوى حرج من مخاطر التصحر. يتطلب تدخلاً فوريًا وشاملاً.',

    // Metrics
    'ai.metric.ndvi': 'مؤشر الغطاء النباتي (NDVI)',
    'ai.metric.baresoilIndex': 'مؤشر التربة العارية',
    'ai.metric.vegetationCoverage': 'تغطية الغطاء النباتي',
    'ai.metric.soilMoisture': 'رطوبة التربة',
    'ai.metric.landDegradationIndex': 'مؤشر تدهور الأراضي',
    'ai.metric.treeCount': 'عدد الأشجار',
    'ai.metric.treeDensity': 'كثافة الأشجار',
    'ai.metric.averageCanopyCover': 'متوسط غطاء المظلة',
    'ai.metric.healthyTrees': 'الأشجار الصحية',
    'ai.metric.stressedTrees': 'الأشجار المجهدة',

    //faq

    'q1.q': 'ما الذي يجعل E-Trek مختلفًا عن الأنظمة الجغرافية البيئية الأخرى؟',
    'q1.a':
      'E-Trek ليس مجرد نظام عرض خرائط، بل منصة تحليل ذكية تعتمد على الذكاء الاصطناعي لتفسير البيانات البيئية من الأقمار الصناعية والطائرات المسيّرة، وتقديم تنبؤات قابلة للتنفيذ.',

    'q2.q': 'كيف يخدم المشروع الأهداف الوطنية مثل رؤية السعودية 2030؟',
    'q2.a':
      'يدعم E-Trek مبادرة السعودية الخضراء عبر مراقبة مؤشرات التشجير والتصحر والغطاء النباتي بدقة، مما يساعد في اتخاذ قرارات مبنية على بيانات حقيقية لتحقيق أهداف الاستدامة.',

    'q3.q': 'هل تم اختبار المشروع فعليًا؟',
    'q3.a':
      'نعم، تم تطوير نموذج أولي فعّال لمنطقة القصيم، وتم اختباره باستخدام صور الأقمار الصناعية ومؤشرات NDVI وSPI مع واجهة تحليلية تفاعلية.',

    'q4.q': 'كيف يمكن للجهات الحكومية استخدام المنصة؟',
    'q4.a':
      'يمكن استخدامها لمراقبة الأداء البيئي في الوقت الفعلي، وتتبع المشاريع الزراعية والتشجيرية، وتقييم فعالية الخطط البيئية بشكل مستمر ومرئي.',

    'q5.q': 'ما مصادر البيانات التي يعتمد عليها النظام؟',
    'q5.a':
      'يعتمد على صور الأقمار الصناعية (مثل Sentinel-2 وLandsat)، بيانات الدرون، وتحليلات الذكاء الاصطناعي المبنية على مؤشرات بيئية عالمية مثل NDVI، SPI، وRUSLE.',

    'q6.q': 'هل يدعم النظام اللغة العربية؟',
    'q6.a':
      'نعم، الواجهة بالكامل ثنائية اللغة (عربية/إنجليزية)، ومصممة خصيصًا لتكون سهلة الاستخدام للفرق المحلية والحكومية.',

    'q7.q': 'هل المنصة آمنة وقابلة للتوسّع؟',
    'q7.a':
      'بُنيت المنصة باستخدام Next.js وGoogle Earth Engine وPower BI Embedded مع إجراءات أمان تشمل حماية الواجهات البرمجية، وتحديد صلاحيات الوصول، ودعم بيئات الإنتاج.',

    'q8.q': 'هل يمكن تخصيص مؤشرات أو لوحات معلومات حسب احتياجات الجهة؟',
    'q8.a':
      'نعم، يمكن تخصيص كل من المؤشرات، الخرائط، والتقارير لتتوافق مع مؤشرات الأداء البيئي الخاصة بكل جهة، مثل متابعة مشاريع معينة أو مناطق محددة.',

    'q9.q': 'كيف يمكن للجهات المساهمة أو التعاون مع المشروع؟',
    'q9.a':
      'نرحب بالشراكات سواء في توفير البيانات، تجربة النظام، أو تطوير حالات استخدام مخصصة. المنصة مرنة وقابلة للتكامل مع الأنظمة القائمة.',

    'q10.q': 'ما الفائدة الفعلية للمنصة على أرض الواقع؟',
    'q10.a':
      'E-Trek يوفر للجهات الحكومية أداة ذكية لصنع القرار، تقلل التكاليف، وتحسن نتائج مشاريع التشجير والتصحر، وتمنح نظرة استراتيجية مبنية على بيانات لحظية.',
  },
  en: {
    // Dashboard
    'dashboard.title': 'E-Trek Dashboard ',
    'dashboard.exportPdf': 'Export as PDF',
    'dashboard.exportStarted': 'Export Started',
    'dashboard.exportStartedDesc': 'Your dashboard is being exported as PDF.',
    'dashboard.exportComplete': 'Export Complete',
    'dashboard.exportCompleteDesc':
      'Your dashboard has been exported successfully.',

    // Navbar
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',

    'nav.faq': 'FAQ',

    // Homepage
    'home.hero.title': '',

    'home.hero.dashboardBtn': 'Explore Dashboard',
    'home.hero.learnMoreBtn': 'Learn More',

    'home.features.title': 'Platform Features',
    'home.features.subtitle':
      'E-Trek provides a comprehensive suite of advanced tools and technologies for monitoring and analyzing environmental data ',

    'home.features.cards.monitoring.title': 'Comprehensive Monitoring',
    'home.features.cards.monitoring.description':
      'Continuous monitoring of key environmental indicators such as vegetation cover, drought levels, and soil erosion.',

    'home.features.cards.analysis.title': 'Advanced Data Analysis',
    'home.features.cards.analysis.description':
      'Comprehensive analysis of environmental data using the latest technologies and statistical models to extract valuable insights.',

    'home.features.cards.conservation.title': 'Natural Resource Protection',

    'home.features.cards.risk.title': 'Environmental Risk Assessment',

    'home.features.cards.mapping.title': 'Advanced Interactive Maps',

    'home.features.cards.ai.title': 'AI-Powered Analysis',

    'home.cta.title': 'Start Your Journey with E-Trek Today',
    'home.cta.description':
      ' discover how advanced environmental data can help make better decisions and protect the environment ',
    'home.cta.button': 'Explore Dashboard',

    // Footer
    'footer.description':
      'An integrated platform for monitoring and analyzing environmental data',
    'footer.navigation': 'Navigation',
    'footer.resources': 'Resources',
    'footer.documentation': 'Documentation',
    'footer.apiReference': 'API Reference',
    'footer.dataPolicy': 'Data Policy',
    'footer.contact': 'Contact Us',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.copyright': 'All rights reserved.',
    'footer.link': 'Contact Us',
    // Sidebar
    'sidebar.title': 'E-Trek',
    'sidebar.subtitle': 'Environmental Monitoring System ',
    'sidebar.dashboard': 'Dashboard',
    'sidebar.maps': 'Maps',
    'sidebar.analytics': 'Analytics',
    'sidebar.reports': 'Reports',
    'sidebar.envData': 'Environmental Data',
    'sidebar.treeMonitoring': 'Tree Monitoring',
    'sidebar.droughtIndex': 'Drought Index (SPI)',
    'sidebar.soilErosion': 'Soil Erosion',
    'sidebar.landDegradation': 'Land Degradation',
    'sidebar.riskAssessment': 'Risk Assessment',
    'sidebar.settings': 'Settings',
    'sidebar.dataSources': 'Data Sources',
    'sidebar.preferences': 'Preferences',
    'sidebar.adminUser': 'Admin User',
    'sidebar.envAnalyst': 'Environmental Analyst',

    // Cards
    'cards.vegHealth': 'Vegetation Health',
    'cards.ndviIndex': 'NDVI Index',
    'cards.modVeg': 'Moderate vegetation',
    'cards.optVegHealth': 'of optimal vegetation health',
    'cards.droughtStatus': 'Drought Status',
    'cards.spiIndex': 'SPI Index',
    'cards.modDrought': 'Moderate drought',
    'cards.normalPrecip': 'of normal precipitation levels',
    'cards.soilErosionRisk': 'Soil Erosion Risk',
    'cards.rusleModel': 'RUSLE Model',
    'cards.tonHectareYear': 't/ha/year',
    'cards.highRiskThreshold': 'of high-risk threshold',

    // Map
    'map.title': 'Interactive Map',
    'map.subtitle': 'Environmental data visualization',
    'map.loading': 'Loading map...',
    'map.streets': 'Street Map',
    'map.satellite': 'Satellite Imagery',
    'map.ndviZones': 'NDVI Zones',
    'map.qassimRegion': 'Al-Qassim Region',
    'map.mainStation': 'Main monitoring station',

    // NDVI Chart
    'ndvi.title': 'Vegetation Index (NDVI)',
    'ndvi.subtitle': 'Monthly average values',
    'ndvi.value': 'NDVI Value',
    'ndvi.currentYear': 'Current Year NDVI',
    'ndvi.fiveYearAvg': '5-Year Average',

    // Environmental Analysis
    'env.title': 'Environmental Analysis',
    'env.subtitle': 'Detailed metrics and comparisons',
    'env.desertification': 'Desertification',
    'env.droughtIndex': 'Drought Index',
    'env.soilErosion': 'Soil Erosion',

    // Tree Monitoring
    'tree.title': 'Tree Monitoring & Afforestation',
    'tree.subtitle': 'Tracking tree planting initiatives and forest health',
    'tree.totalPlanted': 'Total Trees Planted',
    'tree.annualInit': 'Annual afforestation initiative',
    'tree.treesPlantedYear': 'trees planted this year',
    'tree.progress': 'Progress',
    'tree.target': 'Target',
    'tree.trees': 'trees',
    'tree.activeSites': 'Active Sites',
    'tree.monthlyMonitoring': 'Monthly Monitoring',
    'tree.plantingActivity': 'Tree Planting Activity',
    'tree.monthlyProgress': 'Monthly planting progress vs targets',
    'tree.monthly': 'Monthly',
    'tree.yearly': 'Yearly',
    'tree.treesPlanted': 'Trees Planted',
    'tree.monthlyTarget': 'Monthly Target',
    'tree.count': 'Count',
    'tree.lowVegDetected': 'Low Vegetation Health Detected',
    'tree.requiresAttention':
      'Requires immediate attention. Tree health is poor with potential risks to survival rate.',
    'tree.afforestationSites': 'Afforestation Sites',
    'tree.geoDistribution':
      'Geographic distribution of tree planting initiatives',
    'tree.mapView': 'Map View',
    'tree.listView': 'List View',
    'tree.afforestedAreas': 'Afforested Areas',
    'tree.monitoringSites': 'Monitoring Sites',
    'tree.tree': 'Trees',
    'tree.health': 'Health',
    'tree.coverage': 'Coverage',
    'tree.treePlanted': 'Trees Planted',
    'tree.healthStatus': 'Health Status',
    'tree.species': 'Species',
    'tree.lastInspection': 'Last Inspection',
    'tree.coordinates': 'Coordinates',

    // Desertification
    'desert.zonesDistribution': 'Desertification Zones Distribution',
    'desert.yearlyComparison': 'Yearly Comparison',
    'desert.chartView': 'Chart View',
    'desert.mapView': 'Map View',
    'desert.selectYear': 'Select Year:',
    'desert.severe': 'Severe',
    'desert.high': 'High',
    'desert.moderate': 'Moderate',
    'desert.low': 'Low',
    'desert.satelliteComparison':
      'Satellite imagery comparison would be displayed here.',
    'desert.showingProgression':
      'Showing desertification progression from 2018 to 2022.',
    'desert.areaCoverage': 'Area Coverage',

    // SPI Chart
    'spi.title': 'Standardized Precipitation Index (SPI)',
    'spi.subtitle':
      'Measures drought conditions: negative values indicate drought, positive values indicate wet conditions',
    'spi.extremeDrought': 'Extreme Drought',
    'spi.severeDrought': 'Severe Drought',
    'spi.moderateDrought': 'Moderate Drought',
    'spi.wetConditions': 'Wet Conditions',
    'spi.value': 'SPI Value',

    // Soil Erosion
    'soil.measurements': 'Soil Erosion Measurements',
    'soil.detailedData':
      'Detailed erosion data across different regions (t/ha/year)',
    'soil.searchLocations': 'Search locations, soil types...',
    'soil.filter': 'Filter',
    'soil.export': 'Export',
    'soil.highRiskAreas': 'High Risk Areas',
    'soil.mediumRiskAreas': 'Medium Risk Areas',
    'soil.lowRiskAreas': 'Low Risk Areas',
    'soil.location': 'Location',
    'soil.erosionRate': 'Erosion Rate',
    'soil.riskLevel': 'Risk Level',
    'soil.soilType': 'Soil Type',
    'soil.slope': 'Slope',
    'soil.vegetation': 'Vegetation',
    'soil.lastUpdated': 'Last Updated',

    // Theme and Language
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'language.english': 'English',
    'language.arabic': 'العربية',

    // AI Analysis
    'ai.title': 'AI Environmental Analysis',
    'ai.subtitle': 'Analyze satellite and drone imagery',
    'ai.uploadTab': 'Upload Image',
    'ai.resultsTab': 'Results',
    'ai.uploadImage': 'Upload Image for Analysis',
    'ai.dragAndDrop': 'Drag and drop image here or click to browse',
    'ai.supportedFormats': 'Supported formats: TIF, TIFF',
    'ai.browseFiles': 'Browse Files',
    'ai.note': 'Note:',
    'ai.imageRequirements':
      'Images should be high-resolution and in TIF/TIFF format for best results.',
    'ai.invalidFileType':
      'Invalid file type. Please select a TIF or TIFF file.',
    'ai.removeFile': 'Remove File',
    'ai.analysisOptions': 'Analysis Options',
    'ai.selectTask': 'Select Task Type',
    'ai.desertificationAnalysis':
      'Desertification Analysis from Satellite Image',
    'ai.treeDensityAnalysis': 'Tree Density Analysis from Drone',
    'ai.comingSoon': 'Coming Soon',
    'ai.analysisDetails': 'Analysis Details',
    'ai.desertificationDetails':
      'This analysis uses AI models to assess desertification and land degradation levels by analyzing vegetation indices, soil moisture, and surface characteristics.',
    'ai.treeDensityDetails':
      'This analysis uses computer vision algorithms to identify and count trees, assess vegetation health, and analyze tree density from high-resolution drone imagery.',
    'ai.startAnalysis': 'Start Analysis',
    'ai.processing': 'Processing...',
    'ai.reset': 'Reset',
    'ai.noFileError': 'Please upload an image before starting analysis.',
    'ai.processingError':
      'An error occurred while processing the image. Please try again.',
    'ai.processingImage': 'Processing Image',
    'ai.processingDescription':
      'The AI system is analyzing the image and applying advanced algorithms to extract environmental information.',
    'ai.estimatedTime': 'Estimated time remaining: 30 seconds',
    'ai.desertificationResults': 'Desertification Analysis Results',
    'ai.treeDensityResults': 'Tree Density Analysis Results',
    'ai.analysisCompleted': 'Analysis completed at',
    'ai.share': 'Share',
    'ai.exportReport': 'Export Report',
    'ai.summary': 'Summary',
    'ai.visualization': 'Visualization',
    'ai.recommendations': 'Recommendations',
    'ai.keyMetrics': 'Key Metrics',
    'ai.riskAssessment': 'Risk Assessment',
    'ai.processedImage': 'Processed Image',
    'ai.visualizationDescription':
      'The processed image shows different areas classified by vegetation health and desertification levels.',
    'ai.processedImageAlt': 'AI-processed image',
    'ai.healthyVegetation': 'Healthy Vegetation',
    'ai.stressedVegetation': 'Stressed Vegetation',
    'ai.bareSoil': 'Bare Soil',
    'ai.water': 'Water',
    'ai.aiRecommendations': 'AI Recommendations',
    'ai.recommendationsDescription':
      'Based on the data analysis, the AI system suggests the following actions:',
    'ai.analysisType': 'Analysis Type',
    'ai.dateProcessed': 'Date Processed',
    'ai.overallRisk': 'Overall Risk Level',
    'ai.nextSteps': 'Next Steps',
    'ai.nextStep1': 'Export the full report to share with stakeholders',
    'ai.nextStep2': 'Compare results with historical data',
    'ai.nextStep3': 'Implement suggested recommendations and track progress',
    'ai.downloadFullReport': 'Download Full Report',
    'ai.exportStarted': 'Export Started',
    'ai.exportDescription': 'Your analysis report is being exported as PDF.',
    'ai.exportComplete': 'Export Complete',
    'ai.exportSuccess': 'Your analysis report has been exported successfully.',
    'ai.shareLinkGenerated': 'Share Link Generated',
    'ai.shareLinkDescription':
      'You can now share the analysis results with others using the copied link.',
    'ai.riskLow': 'Low',
    'ai.riskMedium': 'Medium',
    'ai.riskHigh': 'High',
    'ai.riskCritical': 'Critical',
    'ai.riskDescription.low':
      'Low level of desertification risk. Continued monitoring recommended.',
    'ai.riskDescription.medium':
      'Medium level of desertification risk. Preventive measures should be taken.',
    'ai.riskDescription.high':
      'High level of desertification risk. Requires immediate intervention.',
    'ai.riskDescription.critical':
      'Critical level of desertification risk. Requires immediate and comprehensive intervention.',

    // Metrics
    'ai.metric.ndvi': 'Vegetation Index (NDVI)',
    'ai.metric.baresoilIndex': 'Bare Soil Index',
    'ai.metric.vegetationCoverage': 'Vegetation Coverage',
    'ai.metric.soilMoisture': 'Soil Moisture',
    'ai.metric.landDegradationIndex': 'Land Degradation Index',
    'ai.metric.treeCount': 'Tree Count',
    'ai.metric.treeDensity': 'Tree Density',
    'ai.metric.averageCanopyCover': 'Average Canopy Cover',
    'ai.metric.healthyTrees': 'Healthy Trees',
    'ai.metric.stressedTrees': 'Stressed Trees',

    //faq

    'q1.q':
      'What makes E-Trek different from other environmental GIS platforms?',
    'q1.a':
      'E-Trek is not just a map viewer—it’s an AI-driven analytical platform that interprets satellite and drone data to deliver actionable environmental insights.',

    'q2.q': 'How does the project support national goals like Vision 2030?',
    'q2.a':
      'E-Trek supports the Saudi Green Initiative by tracking afforestation KPIs, monitoring vegetation, and helping make data-driven decisions aligned with Vision 2030.',

    'q3.q': 'Has the project been tested in practice?',
    'q3.a':
      'Yes, a working prototype was developed and tested in Al-Qassim using satellite imagery and NDVI/SPI indicators through an interactive analytical dashboard.',

    'q4.q': 'How can government entities use the platform?',
    'q4.a':
      'Entities can use E-Trek to monitor environmental performance in real time, evaluate project outcomes, and support strategic planning and sustainability policies.',

    'q5.q': 'What data sources does E-Trek rely on?',
    'q5.a':
      'The system uses Sentinel-2, Landsat, drone imagery, and AI analytics based on global indicators like NDVI, SPI, and RUSLE.',

    'q6.q': 'Does the system support Arabic?',
    'q6.a':
      'Yes, E-Trek is fully bilingual (Arabic/English) and tailored for local teams and governmental use.',

    'q7.q': 'Is the platform scalable and secure?',
    'q7.a':
      'E-Trek is built using Next.js, Google Earth Engine, and Power BI with production-grade security such as API protection and role-based access control.',

    'q8.q': 'Can indicators or dashboards be customized?',
    'q8.a':
      'Yes, the system allows customization of dashboards and KPIs to meet specific government requirements or regional environmental targets.',

    'q9.q': 'How can entities contribute or integrate with E-Trek?',
    'q9.a':
      'We welcome collaborations in data sharing, piloting, or co-developing use cases. The system is modular and integration-ready.',

    'q10.q': 'What is the real-world value of the platform?',
    'q10.a':
      'E-Trek empowers government decisions, reduces costs, improves reforestation outcomes, and provides data-backed environmental planning.',
  },
} as const

export type TranslationKeys = keyof (typeof translations)['ar']
export type SupportedLanguages = keyof typeof translations
