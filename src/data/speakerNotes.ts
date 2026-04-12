export type Lang = 'tr' | 'en';

export interface SlideNote {
  tr: string;
  en: string;
}

export interface SlidePalette {
  bg: string;
  accent: string;
  glow: string;
}

/** Per-slide color palette — drives the teleprompter background. */
export const SLIDE_PALETTES: SlidePalette[] = [
  { bg: '#176E71', accent: '#F27A8A', glow: '#0F3D43' },   // 0  Title
  { bg: '#2D0B38', accent: '#F1A90B', glow: '#870E9B' },   // 1  OSS
  { bg: '#0B1A3A', accent: '#E8B83D', glow: '#E65C41' },   // 2  GQM
  { bg: '#11162F', accent: '#6EE0A0', glow: '#E1F555' },   // 3  Tools
  { bg: '#1A1A2E', accent: '#2C51F0', glow: '#E65C41' },   // 4  System Summary
  { bg: '#1A3C2E', accent: '#E85D3A', glow: '#D4A843' },   // 5  LOC
  { bg: '#1C1814', accent: '#C0522C', glow: '#E8B83D' },   // 6  CBO
  { bg: '#2D0B38', accent: '#E8B83D', glow: '#6112C8' },   // 7  WMC
  { bg: '#2955D4', accent: '#F9D74A', glow: '#1A2A6C' },   // 8  RFC
  { bg: '#1A0B0B', accent: '#B8322B', glow: '#677926' },   // 9  God Class
  { bg: '#E65C41', accent: '#1A1A2E', glow: '#A63C28' },   // 10 LCOM
  { bg: '#3D4F2F', accent: '#B8D44E', glow: '#1A2E14' },   // 11 DIT & NOC
  { bg: '#B85C38', accent: '#E8B83D', glow: '#1A1A2E' },   // 12 Dependency Graph
  { bg: '#2E1610', accent: '#E8B83D', glow: '#E65C41' },   // 13 Cyclic Dep.
  { bg: '#C49A2D', accent: '#2D1A0A', glow: '#8A6A1A' },   // 14 Overall
  { bg: '#1A1A2E', accent: '#6B3FA0', glow: '#F4EFE2' },   // 15 Recommendations
  { bg: '#1A1A2E', accent: '#E65C41', glow: '#2C51F0' },   // 16 Team
];

export const SLIDE_LABELS = [
  'Title',
  'OSS Overview',
  'GQM Tree',
  'Tools Used',
  'System Summary',
  'Q1 · LOC',
  'Q2 · CBO',
  'Q3 · WMC',
  'Q3 · RFC',
  'God Classes',
  'Q4 · LCOM',
  'Q4 · DIT & NOC',
  'Dep. Graph',
  'Cyclic Dep.',
  'Overall',
  'Recommendations',
  'Team & Q&A',
];

/**
 * Speaker notes for all 17 slides, keyed by slide index (0-based).
 * Each note has Turkish and English versions.
 * Written from the report content, with special depth on GQM tree and dependency graph.
 */
export const speakerNotes: SlideNote[] = [
  // 0 — Title
  {
    tr: `Merhaba hocam, herkese merhaba. Bugunku sunumumuz KNIME Workbench'in somut mimari degerlendirme raporu uzerine. KNIME Workbench, dunyada en cok kullanilan acik kaynakli veri analitigi platformlarindan biri olan KNIME Analytics Platform'un grafik arayuz bilesenidir. Tamamen Java ile yazilmis, 100 bin satirlik, 672 siniflik devasa bir kod tabani uzerinde Chidamber-Kemerer metrik suitini ve LOC metrigini uygulayarak bakilabilirlik analizini gerceklestirdik. Araclarimiz SciTools Understand, Python ve SonarQube oldu.`,
    en: `Hello everyone. Our presentation today covers the concrete architecture evaluation of KNIME Workbench. KNIME Workbench is the graphical user interface component of KNIME Analytics Platform, one of the world's leading open-source data analytics platforms. We performed a maintainability analysis on this massive Java codebase of over 100,000 lines across 672 classes, applying the Chidamber and Kemerer metric suite along with the LOC size metric. Our toolchain was SciTools Understand, Python, and SonarQube.`,
  },
  // 1 — OSS Overview
  {
    tr: `KNIME Workbench, Eclipse tabanli bir Rich Client Platform uygulamasi. Kullanicilarin is akisi tuvali uzerinde veri analizi dugumleri surekleyip birakarak gorsel olarak workflow tasarlamalarini sagliyor. Proje tamamiyla nesne yonelimli Java ile yazilmis, GNU GPL lisansi altinda GitHub'da acik kaynak olarak yayinlanmis. 78 paket boyunca dagilan 672 sinif analiz ettik. Sinif basina ortalama LOC ile carptigimizda yaklasik 97.66 bin satirlik bir kod tabani ile karsilasiyoruz ki bu, gercekci bir kurumsal olcek analiz icin oldukca uygun.`,
    en: `KNIME Workbench is an Eclipse-based Rich Client Platform application. It lets users visually design data analytics workflows by dragging and connecting processing nodes on an interactive canvas. The project is written entirely in object-oriented Java and is open-sourced under the GNU GPL license on GitHub. We analyzed 672 classes across 78 packages. Multiplying by the average LOC per class gives us roughly 97,660 lines of code, making it a realistic enterprise-scale codebase for architectural analysis.`,
  },
  // 2 — GQM Methodology (KEY SLIDE)
  {
    tr: `Simdi analizimizin cekirdegine geliyoruz: GQM agaci. Goal-Question-Metric yaklasimini kullanarak tek bir ust duzey hedef belirledik: KNIME Workbench'in bakilabilirligini bir mimar ve gelistirici bakis acisiyla anlamak. Bu hedefi dort somut soruya ayirdik.

Birinci soru Q1: Kod tabaninin boyutu ve hacmi nedir ve siniflar ile paketler arasinda nasil dagilmistir? Bunu LOC metrigi ile olcuyoruz.

Ikinci soru Q2: Siniflar arasindaki bagimlilik duzeyi nedir ve modifiye edilebilirligi zedeleyebilecek asiri bagimli siniflar var mi? Bunu CBO, yani Coupling Between Objects metrigi ile olcuyoruz.

Ucuncu soru Q3: Metot ve siniflarin karmasiklik duzeyi nedir ve hangi siniflar test edilmesi veya anlasilmasi guc olabilir? Bunu WMC yani Weighted Methods per Class ve RFC yani Response for a Class metrikleri ile olcuyoruz.

Dorduncu soru Q4: Siniflarin uyumu ve kalitim yapisi nasildir, test edilebilirligi ve yeniden kullanilabirligi engelleyebilecek uyum problemleri var mi? Bunu LCOM, DIT ve NOC metrikleri ile olcuyoruz.

Her soru kesinlikle bir veya birden fazla C&K metrigine eslendirilmistir. Bu sekilde her metrik dogrudan bir bakilabilirlik sorusunu yanitlar.`,
    en: `Now we come to the core of our analysis: the GQM tree. Using the Goal-Question-Metric approach, we defined a single high-level goal: to understand the maintainability of KNIME Workbench from an architect and developer's viewpoint. We decomposed this goal into four concrete questions.

Question one, Q1: What is the size and volume of the codebase, and how is it distributed across classes and packages? We measure this with the LOC metric.

Question two, Q2: What is the coupling level between classes, and are there classes with excessive dependencies that may harm modifiability? We measure this with CBO, Coupling Between Objects.

Question three, Q3: What is the complexity level of the methods and classes, and which classes may be difficult to test or understand? We measure this with WMC, Weighted Methods per Class, and RFC, Response for a Class.

Question four, Q4: What is the cohesion and inheritance structure, and are there cohesion problems that may hinder testability and reusability? We measure this with LCOM, DIT, and NOC.

Each question maps strictly to one or more C&K metrics, ensuring every measurement directly answers a maintainability concern.`,
  },
  // 3 — Tools Used
  {
    tr: `Analiz icin uc temel arac kullandik. Birincisi SciTools Understand: C&K metriklerini sinif duzeyinde cikarttik, yani CBO, DIT, NOC, RFC, WMC, LCOM ve LOC. Ayrica bagimlilik grafini de bu aracla olustturduk. Ikincisi Python: pandas, matplotlib ve scipy kutuphaneleri ile istatistiksel analiz, boxplot ve histogram gorsellestirmeleri, outlier tespiti ve esik deger ihlali sayimlarini gerceklestirdik. Ucuncusu SonarQube Community Edition: metrik degerlerinin capraz dogrulamasi ve kod kokusu tespiti icin kullandik.`,
    en: `We used three main tools for our analysis. First, SciTools Understand: we extracted all C&K metrics at the class level including CBO, DIT, NOC, RFC, WMC, LCOM, and LOC. We also generated the dependency graph from this tool. Second, Python with pandas, matplotlib, and scipy for statistical analysis, boxplot and histogram visualizations, outlier detection, and threshold violation counts. Third, SonarQube Community Edition for cross-validating metric values and detecting code smells.`,
  },
  // 4 — System-Level Summary
  {
    tr: `Sistem duzeyinde 672 sinifin ozet istatistiklerine baktigimizda ilginc bir tablo ortaya cikiyor. Medyan degerler saglikli gorunuyor: CBO medyani 9, WMC medyani 11, RFC medyani 15. Ancak maksimum degerler felaket boyutunda. WorkflowEditor sinifi tek basina CBO 220, WMC 576, RFC 531 ve LCOM 7690 degerlerine sahip. Ortalama ile medyan arasindaki buyuk fark, saga carpik bir dagilima ve az sayida ama cok siddetli aykiri degerlere isaret ediyor. Esik ihlallerine bakarsak, en kritik bulgu yuzde 64'luk LCOM ihlali, yani siniflarin ucte ikisinde dusuk uyum problemi var.`,
    en: `Looking at the system-level summary statistics across 672 classes, we see an interesting pattern. Medians look healthy: CBO median is 9, WMC median is 11, RFC median is 15. But the maximums are catastrophic. WorkflowEditor alone has CBO of 220, WMC of 576, RFC of 531, and LCOM of 7,690. The large gap between mean and median indicates a right-skewed distribution with a small number of extreme outliers. Looking at threshold violations, the most critical finding is the 64 percent LCOM violation rate, meaning two-thirds of all classes have low cohesion problems.`,
  },
  // 5 — Q1: LOC
  {
    tr: `Birinci sorumuza geciyoruz: kod boyutu. Sinif basina ortalama LOC 97.66 ve medyan 52. Bu demek oluyor ki siniflarin buyuk cogunlugu kucuk ila orta boyutlu. IQR yani ceyrekler arasi aralik 27 ile 111 arasinda, yani yuzde 75'i 111 satirin altinda. Ancak saga carpik dagilimdaki aykiri degerler endise verici. En buyuk sinif WorkflowEditor 2688 satir ile adeta bir "Tanri Sinifi." Diger buyuk siniflar NodeContainerEditPart, StyledTextEditor, Nodalizer ve SubnodeLayoutJSONEditorPage. Bu siniflarin hepsi WMC ve RFC analizlerinde de aykiri deger olarak cikiyor, bu da editor ve explorer alt sistemlerinde tutarli bir "sismis sinif" paternine isaret ediyor.`,
    en: `Moving to our first question: code size. The mean LOC per class is 97.66 with a median of 52. This means the vast majority of classes are small to moderate. The interquartile range is 27 to 111, meaning 75 percent of classes stay under 111 lines. However, the outliers in the right-skewed distribution are concerning. The largest class is WorkflowEditor at 2,688 lines, a textbook God Class. Other large classes include NodeContainerEditPart, StyledTextEditor, Nodalizer, and SubnodeLayoutJSONEditorPage. All of these also appear as outliers in WMC and RFC analyses, pointing to a consistent bloated-class pattern in the editor and explorer subsystems.`,
  },
  // 6 — Q2: CBO
  {
    tr: `Ikinci sorumuz baglasim hakkinda. Sistem genelinde ortalama CBO 11.14, medyan 9. CBO 14'ten buyukse "yuksek bagimlilik" kabul edilen esik degerimize gore 143 sinif yani yuzde 21.28 bu esigi asiyor. En kritik bulgular sunlar: WorkflowEditor CBO 220 ile sistemdeki en bagimli sinif, neredeyse her alt sisteme bagimli. NodeContainerEditPart CBO 91 ile model, figure, command ve policy katmanlarina siki sikiya bagli. AbstractRepositoryView CBO 65 ve Nodalizer CBO 59. Yuksek CBO dogrudan modifiye edilebilirligi zedeler: cok sayida sinifin bagimli oldugu bir sinifta yapilan degisiklik sistem genelinde dalga etkisi yaratir, bakim maliyetini ve regresyon riskini arttirir.`,
    en: `Our second question is about coupling. The system-level mean CBO is 11.14 with a median of 9. Using the widely accepted threshold of CBO greater than 14, we find 143 classes, or 21.28 percent, violating this threshold. The most critical findings: WorkflowEditor at CBO 220 is the most coupled class in the system, depending on virtually every other subsystem. NodeContainerEditPart at CBO 91 is tightly coupled to model, figures, commands, and policies. AbstractRepositoryView at CBO 65 and Nodalizer at CBO 59. High CBO directly harms modifiability: changing any class that many others depend on creates ripple effects, increasing maintenance cost and regression risk.`,
  },
  // 7 — Q3: WMC
  {
    tr: `Ucuncu sorumuzun ilk parcasi: yapisal karmasiklik, WMC. Ortalama WMC 20.01, medyan 11. WMC 40'in uzerindeki esigi 85 sinif yani yuzde 12.65 asiyor. Aykiri degerler yine "Tanri Sinifi" paternini dogruluyor. WorkflowEditor WMC 576 ile acik ara en karmasik sinif. Ardindan StyledTextEditor 271, NodeContainerEditPart 206, AbstractContentProvider 200, Nodalizer 172 ve SubnodeLayoutJSONEditorPage 160 geliyor. WMC 576 olan bir sinifi tam yapisal kapsam ile test etmek icin muazzam sayida birim test senaryosu gerekir, bu da onu pratik olarak tam test edilemez hale getiriyor.`,
    en: `The first part of our third question: structural complexity measured by WMC. The mean is 20.01 with a median of 11. The threshold of WMC greater than 40 is violated by 85 classes, or 12.65 percent. The extreme outliers reinforce the God Class pattern. WorkflowEditor at WMC 576 is by far the most complex. Followed by StyledTextEditor at 271, NodeContainerEditPart at 206, AbstractContentProvider at 200, Nodalizer at 172, and SubnodeLayoutJSONEditorPage at 160. A class with WMC of 576 requires an enormous number of unit test cases to achieve structural coverage, making it practically untestable.`,
  },
  // 8 — Q3: RFC
  {
    tr: `RFC, bir nesneye gelen mesaja yanit olarak potansiyel olarak calisabilecek metot sayisini olcer. Sistem ortalamasi 24.62, medyan 15. RFC 100'un uzerindeki esigi sadece 18 sinif yani yuzde 2.68 asiyor, ancak bunlar davranissal olarak en karmasik siniflar. WorkflowEditor RFC 531 ile zirvededir. NodeContainerEditPart 257, Nodalizer 235, StyledTextEditor 209. RFC ve WMC bu veri setinde yuksek korelasyon gosteriyor: en yuksek WMC'ye sahip siniflar ayni zamanda en yuksek RFC'ye de sahip. Bu, tespit edilen Tanri Siniflarinin es zamanli olarak hem yapisal karmasiklik, hem davranissal erisim, hem de bagimlilik boyutlarinda karmasik oldugunu dogruluyor.`,
    en: `RFC measures how many methods can potentially execute in response to a message received by an object. The system mean is 24.62 with a median of 15. Only 18 classes, just 2.68 percent, exceed the threshold of RFC greater than 100, but these are the most behaviorally complex classes. WorkflowEditor leads at RFC 531, followed by NodeContainerEditPart at 257, Nodalizer at 235, and StyledTextEditor at 209. RFC and WMC are highly correlated in this dataset: classes with the highest WMC also have the highest RFC. This confirms that the identified God Classes are complex in multiple dimensions simultaneously: structural complexity, behavioral reach, and coupling.`,
  },
  // 9 — God Class Deep Dive
  {
    tr: `Ilk 20 en kotu sinifa baktigimizda, deger tablosundaki kirmizi ve sari hucrelerin coklugundan da goruldugu gibi, metrikler arasinda tutarli bir oruntu var. WorkflowEditor her metrikte en kotu degerlerine sahip: CBO 220, WMC 576, RFC 531, LCOM 7690, LOC 2688. Bu sinif hemen hemen tum diger alt sistemlere bagimli olan merkezi editoru temsil ediyor. Ikinci sirada NodeContainerEditPart geliyor ve onu ExplorerView, SubnodeLayoutJSONEditorPage, AbstractContentProvider takip ediyor. Dort bagimsiz metrikte ayni siniflarin en kotu cikmasi, God Class anti-paterninin guvenilir bir gostergesidir. Bu siniflar ideal olarak daha kucuk, uyumlu birimlere dagitilmasi gereken sorumluluklar biriktirmistir.`,
    en: `Looking at the top 20 worst classes, we see a consistent pattern across metrics, as shown by the density of red and yellow cells. WorkflowEditor has the worst values in every metric: CBO 220, WMC 576, RFC 531, LCOM 7690, LOC 2688. This class represents the central editor and depends on virtually every subsystem. Second is NodeContainerEditPart, followed by ExplorerView, SubnodeLayoutJSONEditorPage, and AbstractContentProvider. The same classes appearing at the top across four independent metrics is a reliable indicator of the God Class anti-pattern. These classes have absorbed responsibilities that should ideally be distributed across smaller, cohesive units.`,
  },
  // 10 — Q4: LCOM
  {
    tr: `Dorduncu sorumuzun uyum bolumu: LCOM. Bu metrik, bir siniftaki ortak ornek degiskeni paylasmayan metot ciftlerinin sayisini olcer. Yuzde 64.14 ile LCOM 1'den buyuk esik ihlali, kod tabanindaki en yaygin yapisal problemdir. Medyan 6 iken maksimum deger WorkflowEditor'un 7690'i. Bu bulgu, God Class paterni ile guclu korelasyon gosteriyor: buyuk, yuksek bagimlikli siniflar kacınılmaz olarak farkli sorumluluklar iceren metot gruplari icerir ve bu yuzden ortak ornek degiskeni paylasmazlar. LCOM ihlallerini sorumluluk ayirimi ile gidermek, ayni zamanda CBO'yu da iyilestirir cunku daha kucuk siniflar daha az bagimliliga ihtiyac duyar.`,
    en: `The cohesion portion of question four: LCOM. This metric counts pairs of methods that do not share instance variables. At 64.14 percent, the LCOM greater than 1 threshold violation is the most pervasive structural problem in the codebase. The median is just 6 but the maximum reaches 7,690 for WorkflowEditor. This finding is strongly correlated with the God Class pattern: large, highly coupled classes inevitably contain groups of methods serving different concerns that share few instance variables. Addressing LCOM violations through responsibility decomposition would simultaneously improve CBO since smaller classes need fewer dependencies.`,
  },
  // 11 — Q4: DIT & NOC
  {
    tr: `Kalitim yapisi konusunda iyi haberlerimiz var. DIT metrigi siniflarin neredeyse tamaminda saglikli, ortalama 2.22, sadece tek bir sinif DIT 5'i asan derin kalitim aykiri degeri. NOC metriginde ise ortalama 0.44, medyan 0, yani siniflarin buyuk cogunlugunun dogrudan alt sinifi yok. Sadece 5 sinif NOC 5'in uzerinde. En dikkat cekici olanlar: AbstractNodeAction 50 dogrudan alt sinif ile sistemdeki en kritik taban sinif. AbstractKNIMECommand 36, AbstractEditorAction 37. Yuksek NOC genis yeniden kullanimi gosterse de, bu soyut siniflardaki herhangi bir degisiklik onlarca somut alt sinifi hemen etkiler.`,
    en: `We have good news regarding the inheritance structure. The DIT metric is healthy across almost all classes, with a mean of 2.22, and only a single deep-inheritance outlier exceeding DIT of 5. For NOC, the mean is 0.44 with a median of 0, meaning most classes have no direct subclasses. Only 5 classes exceed NOC of 5. The most notable: AbstractNodeAction with 50 direct subclasses is the most critical base class in the system. AbstractKNIMECommand has 36, AbstractEditorAction has 37. While high NOC indicates broad reuse which is desirable, any change to these abstract classes has an immediate impact on dozens of concrete subclasses.`,
  },
  // 12 — Dependency Graph (KEY SLIDE)
  {
    tr: `Simdi mimari analitizimizin en onemli gorsellerinden birine geliyoruz: paket duzeyinde bagimlilik grafi. Bu graf, SciTools Understand ile kaynak koddan cikarilmis somut yani as-built mimariyi temsil ediyor. Her dugum bir ust duzey Maven veya OSGi paketi, kenar agirliklari ise bileslenler arasindaki bagimlilik sayisini gosteriyor.

Temel gozlemler sunlar: org.knime.workbench.core en cok referans alinan alt katman bileseni, yani tum diger paketlerin bagimli oldugu temel plugin. org.knime.workbench.editor en yuksek cikis derecesine sahip, neredeyse tum diger bilesenlere bagimli. Bu, editorun sistemdeki baskin rolunu teyit ediyor.

En kritik bulgu: editor ile ui.layout arasinda kirmizi ile gosterilen dongusal bagimlilik. Editor layout alt sistemine bagimli ve layout alt sisteminin editore geri bagimliligi var: bir yonde 12, ters yonde 105 bagimlilik. Bu mimari bir kokudur ve bu iki alt sistemin bagimsiz derlenmesini, test edilmesini ve yayinlanmasini imkansiz kilar.

Olumlu tarafta, test paketleri uretim kodundan dogru sekilde ayrilmis ve sadece uretim paketlerinden import yapiyorlar, tersi degil.

Genel olarak graf, kabaca katmanli bir yapi ortaya koyuyor: core, repository ve explorer, editor. Ancak onemli bagimlilik yogunlasma noktalari ve dogrulanmis bir dongusal bagimlilik, yoksa hiyerarsik olan yapiyi zayi ediyor.`,
    en: `Now we come to one of the most important visualizations of our architectural analysis: the package-level dependency graph. This graph represents the concrete, as-built architecture extracted from source code by SciTools Understand. Each node is a top-level Maven or OSGi bundle, and edge weights represent the number of dependencies between connected components.

Key observations: org.knime.workbench.core is the most referenced downstream component, the foundational plugin that most other packages depend on. org.knime.workbench.editor has the highest out-degree, depending on virtually all other components, confirming the editor's dominant role in the system.

The most critical finding: a cyclic dependency shown in red between editor and ui.layout. The editor depends on the layout subsystem and the layout subsystem has a back-dependency on the editor: 12 dependencies in one direction, 105 in the reverse. This is an architectural smell that makes independent compilation, testing, and deployment of these two subsystems impossible.

On the positive side, test packages are correctly separated from production code and only import from production packages, not the reverse.

Overall, the graph reveals a roughly layered structure: core, then repository and explorer, then editor. But notable coupling hotspots and one confirmed cyclic dependency undermine the otherwise hierarchical organization.`,
  },
  // 13 — Cyclic Dependency
  {
    tr: `Dongusal bagimliliga daha yakindan bakalim. Editor ve ui.layout arasindaki bu dongusal bagimlilik, modul duzeyindeki tek dogrulanmis dongu. Rakamlar carpici: editor'dan layout'a 12, layout'tan editore 105 bagimlilik. Dongusal bagimliliklar bagimsiz derleme, test ve yayin surumunu engeller. Bu bulgu, her iki paketteki yuksek LCOM degerleri ile de uyumlu, yani dusuk ic uyum sorumlulukların zaman icinde ic ice gectigine isaret ediyor. Bu donguselligi kirmak icin ara yuz ayirimi ve bagimlilik tersleme prensipleri uygulanmalidir.`,
    en: `Let's look closer at the cyclic dependency. This cycle between editor and ui.layout is the only confirmed cycle at the module level. The numbers are striking: 12 dependencies from editor to layout, 105 from layout back to editor. Cyclic dependencies prevent independent compilation, testing, and release of the affected modules. This aligns with the high LCOM values in both packages, indicating low internal cohesion and suggesting that responsibilities have become entangled over time. Breaking this cycle requires applying interface segregation and dependency inversion principles.`,
  },
  // 14 — Overall Evaluation
  {
    tr: `Genel degerlendirmemizi dort ana bulgu ile ozetleyelim. Birincisi, tutarli Tanri Sinifi paterni: en yuksek CBO, WMC, RFC ve LCOM degerlerine sahip siniflar ezici cogunlukla ayni set. Ikincisi, bagimlilik yogunlasma noktalari mimari hub'larla uyumlu: bagimlilik grafi WorkflowEditor ve editor2 paketini mimari merkez olarak tanimliyor ve metrik veriler bunu dogruluyor. Ucuncusu, editor ile ui.layout arasindaki dongusal bagimlilik somut bir mimari kokudur. Dorduncusu, LCOM yuzde 64 ihlal oraniyla en kritik bakilabilirlik sorunu. Sonuc olarak KNIME Workbench kismen katmanli, islevsel ve olgun bir mimari sergiliyor ancak az sayida buyuk, yuksek bagimlikli, dusuk uyumlu Tanri Siniflarina yogunlasmis onemli bakilabilirlik borcu tasiyor.`,
    en: `Let us summarize our overall evaluation with four key findings. First, a consistent God Class pattern: the classes with the highest CBO, WMC, RFC, and LCOM values are overwhelmingly the same set. Second, coupling hotspots align with architectural hubs: the dependency graph identifies WorkflowEditor and the editor2 package as the architectural center, and metrics confirm this. Third, the cyclic dependency between editor and ui.layout is a concrete architectural smell. Fourth, LCOM is the most critical maintainability concern at 64 percent violation rate. In summary, KNIME Workbench demonstrates a partially layered, functional, and mature architecture, but carries significant maintainability debt concentrated in a small number of large, highly coupled, low-cohesion God Classes.`,
  },
  // 15 — Recommendations
  {
    tr: `Iyilestirme onerilerimiz sunlar: Birincisi, WorkflowEditor'un sorumluluk ayristirmasi. Bu 2688 satirlik, 576 WMC'li sinif, her biri tek bir sorumluluk tasiyan daha kucuk siniflara bolunmeli. Ikincisi, dongusal bagimlilik kirma. Editor ve ui.layout arasindaki donguyu ara yuz ayirimi ve bagimlilik tersleme ile gidermek. Ucuncusu, LCOM iyilestirmesi. Dusuk uyumlu siniflari sorumluluk bazli daha kucuk, odaklanmis siniflara bolmek. Bu ayni zamanda CBO'yu da dusurur. Dorduncusu, yuksek NOC taban siniflarini korumak: AbstractNodeAction gibi 50 alt sinifli siniflarda degisiklik yapilirken ekstra dikkat ve kapsamli regresyon testi gerekli. Bu oneriler D2 raporumuzda detaylandirilacak.`,
    en: `Our improvement recommendations are as follows: First, decompose WorkflowEditor. This 2,688-line, WMC-576 class should be split into smaller classes each carrying a single responsibility. Second, break the cyclic dependency between editor and ui.layout using interface segregation and dependency inversion. Third, improve LCOM by splitting low-cohesion classes into smaller, focused units organized by responsibility. This will simultaneously reduce CBO. Fourth, protect high-NOC base classes: changes to classes like AbstractNodeAction with 50 subclasses require extra care and comprehensive regression testing. These recommendations will be detailed in our D2 report.`,
  },
  // 16 — Team Allocation & Q&A
  {
    tr: `Son olarak ekip ici sorumluluk dagilimiiz. Mert Ergun: OSS secimi, arac kurulumu, sinif duzeyinde metrik cikarimi, Q1 LOC ve Q2 CBO analizi, bagimlilik grafi olusturma. Tahacan Celebi: GQM agaci tasarimi, Q3 WMC ve RFC analizi ve gorsellestirme, esik analizi, aykiri deger tespiti. Serhat Akbulut: Q4 LCOM, DIT ve NOC analizi, paket duzeyinde toplamalastirma, genel degerlendirme, rapor yazimi ve entegrasyon. Tum ham metrik verilerimiz Google Sheets'te paylasima aciktir. Sorularinizi alabiliriz, tesekkurler.`,
    en: `Finally, our team allocation. Mert Ergun: OSS selection, tool setup, class-level metric extraction, Q1 LOC and Q2 CBO analysis, dependency graph generation. Tahacan Celebi: GQM tree design, Q3 WMC and RFC analysis and visualization, threshold analysis, outlier identification. Serhat Akbulut: Q4 LCOM, DIT, and NOC analysis, package-level aggregation, overall evaluation, report writing and integration. All our raw metric data is publicly available on Google Sheets. We are happy to take your questions, thank you.`,
  },
];
