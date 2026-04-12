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
    tr: `Merhaba hocam, herkese merhaba. Bugünkü sunumumuz KNIME Workbench'in somut mimari değerlendirme raporu üzerine. KNIME Workbench, dünyada en çok kullanılan açık kaynaklı veri analitik platformlarından biri olan KNIME Analytics Platform'un grafik arayüz bileşenidir. Tamamen Java ile yazılmış, 100 bin satırlık, 672 sınıflık devasa bir kod tabanı üzerinde Chidamber-Kemerer metrik suitini ve LOC metriğini uygulayarak bakılabilirlik analizini gerçekleştirdik. Araçlarımız SciTools Understand, Python ve SonarQube oldu.`,
    en: `Hello everyone. Our presentation today covers the concrete architecture evaluation of KNIME Workbench. KNIME Workbench is the graphical user interface component of KNIME Analytics Platform, one of the world's leading open-source data analytics platforms. We performed a maintainability analysis on this massive Java codebase of over 100,000 lines across 672 classes, applying the Chidamber and Kemerer metric suite along with the LOC size metric. Our toolchain was SciTools Understand, Python, and SonarQube.`,
  },
  // 1 — OSS Overview
  {
    tr: `KNIME Workbench, Eclipse tabanlı bir Rich Client Platform uygulaması. Kullanıcıların iş akışı tuvali üzerinde veri analizi düğümleri sürükleyip bırakarak görsel olarak workflow tasarlamalarını sağlıyor. Proje tamamen nesne yönelimli Java ile yazılmış, GNU GPL lisansı altında GitHub'da açık kaynak olarak yayınlanmış. 78 paket boyunca dağılan 672 sınıf analiz ettik. Sınıf başına ortalama LOC ile çarptığımızda yaklaşık 97.66 bin satırlık bir kod tabanı ile karşılaşıyoruz ki bu, gerçekçi bir kurumsal ölçek analiz için oldukça uygun.`,
    en: `KNIME Workbench is an Eclipse-based Rich Client Platform application. It lets users visually design data analytics workflows by dragging and connecting processing nodes on an interactive canvas. The project is written entirely in object-oriented Java and is open-sourced under the GNU GPL license on GitHub. We analyzed 672 classes across 78 packages. Multiplying by the average LOC per class gives us roughly 97,660 lines of code, making it a realistic enterprise-scale codebase for architectural analysis.`,
  },
  // 2 — GQM Methodology (KEY SLIDE)
  {
    tr: `Şimdi analizimizin çekirdeğine geliyoruz: GQM ağacı. Goal-Question-Metric yaklaşımını kullanarak tek bir üst düzey hedef belirledik: KNIME Workbench'in bakılabilirliğini bir mimar ve geliştirici bakış açısıyla anlamak. Bu hedefi dört somut soruya ayırdık.

Birinci soru Q1: Kod tabanının boyutu ve hacmi nedir ve sınıflar ile paketler arasında nasıl dağılmıştır? Bunu LOC metriği ile ölçüyoruz.

İkinci soru Q2: Sınıflar arasındaki bağımlılık düzeyi nedir ve modifiye edilebilirliği zedeleyebilecek aşırı bağımlı sınıflar var mı? Bunu CBO, yani Coupling Between Objects metriği ile ölçüyoruz.

Üçüncü soru Q3: Metot ve sınıfların karmaşıklık düzeyi nedir ve hangi sınıflar test edilmesi veya anlaşılması güç olabilir? Bunu WMC yani Weighted Methods per Class ve RFC yani Response for a Class metrikleri ile ölçüyoruz.

Dördüncü soru Q4: Sınıfların uyumu ve kalıtım yapısı nasıldır, test edilebilirliği ve yeniden kullanılabilirliği engelleyebilecek uyum problemleri var mı? Bunu LCOM, DIT ve NOC metrikleri ile ölçüyoruz.

Her soru kesinlikle bir veya birden fazla C&K metriğine eşlendirilmiştir. Bu şekilde her metrik doğrudan bir bakılabilirlik sorusunu yanıtlar.`,
    en: `Now we come to the core of our analysis: the GQM tree. Using the Goal-Question-Metric approach, we defined a single high-level goal: to understand the maintainability of KNIME Workbench from an architect and developer's viewpoint. We decomposed this goal into four concrete questions.

Question one, Q1: What is the size and volume of the codebase, and how is it distributed across classes and packages? We measure this with the LOC metric.

Question two, Q2: What is the coupling level between classes, and are there classes with excessive dependencies that may harm modifiability? We measure this with CBO, Coupling Between Objects.

Question three, Q3: What is the complexity level of the methods and classes, and which classes may be difficult to test or understand? We measure this with WMC, Weighted Methods per Class, and RFC, Response for a Class.

Question four, Q4: What is the cohesion and inheritance structure, and are there cohesion problems that may hinder testability and reusability? We measure this with LCOM, DIT, and NOC.

Each question maps strictly to one or more C&K metrics, ensuring every measurement directly answers a maintainability concern.`,
  },
  // 3 — Tools Used
  {
    tr: `Analiz için üç temel araç kullandık. Birincisi SciTools Understand: C&K metriklerini sınıf düzeyinde çıkarttık, yani CBO, DIT, NOC, RFC, WMC, LCOM ve LOC. Ayrıca bağımlılık grafını da bu araçla oluşturduk. İkincisi Python: pandas, matplotlib ve scipy kütüphaneleri ile istatistiksel analiz, boxplot ve histogram görselleştirmeleri, outlier tespiti ve eşik değeri ihlali sayımlarını gerçekleştirdik. Üçüncüsü SonarQube Community Edition: metrik değerlerinin çapraz doğrulaması ve kod kokusu tespiti için kullandık.`,
    en: `We used three main tools for our analysis. First, SciTools Understand: we extracted all C&K metrics at the class level including CBO, DIT, NOC, RFC, WMC, LCOM, and LOC. We also generated the dependency graph from this tool. Second, Python with pandas, matplotlib, and scipy for statistical analysis, boxplot and histogram visualizations, outlier detection, and threshold violation counts. Third, SonarQube Community Edition for cross-validating metric values and detecting code smells.`,
  },
  // 4 — System-Level Summary
  {
    tr: `Sistem düzeyinde 672 sınıfın özet istatistiklerine baktığımızda ilginç bir tablo ortaya çıkıyor. Medyan değerleri sağlıklı görünüyor: CBO medyanı 9, WMC medyanı 11, RFC medyanı 15. Ancak maksimum değerler felaket boyutunda. WorkflowEditor sınıfı tek başına CBO 220, WMC 576, RFC 531 ve LCOM 7690 değerlerine sahip. Ortalama ile medyan arasındaki büyük fark, sağa çarpık bir dağılıma ve az sayıda ama çok şiddetli aykırı değerlere işaret ediyor. Eşik ihlallerine bakarsak, en kritik bulgu yüzde 64'lük LCOM ihlali, yani sınıfların üçte ikisinde düşük uyum problemi var.`,
    en: `Looking at the system-level summary statistics across 672 classes, we see an interesting pattern. Medians look healthy: CBO median is 9, WMC median is 11, RFC median is 15. But the maximums are catastrophic. WorkflowEditor alone has CBO of 220, WMC of 576, RFC of 531, and LCOM of 7,690. The large gap between mean and median indicates a right-skewed distribution with a small number of extreme outliers. Looking at threshold violations, the most critical finding is the 64 percent LCOM violation rate, meaning two-thirds of all classes have low cohesion problems.`,
  },
  // 5 — Q1: LOC
  {
    tr: `Birinci sorumuza geçiyoruz: kod boyutu. Sınıf başına ortalama LOC 97.66 ve medyan 52. Bu demek oluyor ki sınıfların büyük çoğunluğu küçük ila orta boyutlu. IQR yani çeyrekler arası aralık 27 ile 111 arasında, yani yüzde 75'i 111 satırın altında. Ancak sağa çarpık dağılımdaki aykırı değerler endişe verici. En büyük sınıf WorkflowEditor 2688 satır ile adeta bir "Tanrı Sınıfı." Diğer büyük sınıflar NodeContainerEditPart, StyledTextEditor, Nodalizer ve SubnodeLayoutJSONEditorPage. Bu sınıfların hepsi WMC ve RFC analizlerinde de aykırı değer olarak çıkıyor, bu da editor ve explorer alt sistemlerinde tutarlı bir "şişmiş sınıf" paternine işaret ediyor.`,
    en: `Moving to our first question: code size. The mean LOC per class is 97.66 with a median of 52. This means the vast majority of classes are small to moderate. The interquartile range is 27 to 111, meaning 75 percent of classes stay under 111 lines. However, the outliers in the right-skewed distribution are concerning. The largest class is WorkflowEditor at 2,688 lines, a textbook God Class. Other large classes include NodeContainerEditPart, StyledTextEditor, Nodalizer, and SubnodeLayoutJSONEditorPage. All of these also appear as outliers in WMC and RFC analyses, pointing to a consistent bloated-class pattern in the editor and explorer subsystems.`,
  },
  // 6 — Q2: CBO
  {
    tr: `İkinci sorumuz bağlaşım hakkında. Sistem genelinde ortalama CBO 11.14, medyan 9. CBO 14'ten büyükse "yüksek bağımlılık" kabul edilen eşik değerimize göre 143 sınıf yani yüzde 21.28 bu eşiği aşıyor. En kritik bulgular şunlar: WorkflowEditor CBO 220 ile sistemdeki en bağımlı sınıf, neredeyse her alt sisteme bağımlı. NodeContainerEditPart CBO 91 ile model, figure, command ve policy katmanlarına sıkı sıkıya bağlı. AbstractRepositoryView CBO 65 ve Nodalizer CBO 59. Yüksek CBO doğrudan modifiye edilebilirliği zedeler: çok sayıda sınıfın bağımlı olduğu bir sınıfta yapılan değişiklik sistem genelinde dalga etkisi yaratır, bakım maliyetini ve regresyon riskini artırır.`,
    en: `Our second question is about coupling. The system-level mean CBO is 11.14 with a median of 9. Using the widely accepted threshold of CBO greater than 14, we find 143 classes, or 21.28 percent, violating this threshold. The most critical findings: WorkflowEditor at CBO 220 is the most coupled class in the system, depending on virtually every other subsystem. NodeContainerEditPart at CBO 91 is tightly coupled to model, figures, commands, and policies. AbstractRepositoryView at CBO 65 and Nodalizer at CBO 59. High CBO directly harms modifiability: changing any class that many others depend on creates ripple effects, increasing maintenance cost and regression risk.`,
  },
  // 7 — Q3: WMC
  {
    tr: `Üçüncü sorumuzun ilk parçası: yapısal karmaşıklık, WMC. Ortalama WMC 20.01, medyan 11. WMC 40'ın üzerindeki eşiği 85 sınıf yani yüzde 12.65 aşıyor. Aykırı değerler yine "Tanrı Sınıfı" paternini doğruluyor. WorkflowEditor WMC 576 ile açık ara en karmaşık sınıf. Ardından StyledTextEditor 271, NodeContainerEditPart 206, AbstractContentProvider 200, Nodalizer 172 ve SubnodeLayoutJSONEditorPage 160 geliyor. WMC 576 olan bir sınıfı tam yapısal kapsam ile test etmek için muazzam sayıda birim test senaryosu gerekir, bu da onu pratik olarak tam test edilemez hale getiriyor.`,
    en: `The first part of our third question: structural complexity measured by WMC. The mean is 20.01 with a median of 11. The threshold of WMC greater than 40 is violated by 85 classes, or 12.65 percent. The extreme outliers reinforce the God Class pattern. WorkflowEditor at WMC 576 is by far the most complex. Followed by StyledTextEditor at 271, NodeContainerEditPart at 206, AbstractContentProvider at 200, Nodalizer at 172, and SubnodeLayoutJSONEditorPage at 160. A class with WMC of 576 requires an enormous number of unit test cases to achieve structural coverage, making it practically untestable.`,
  },
  // 8 — Q3: RFC
  {
    tr: `RFC, bir nesneye gelen mesaja yanıt olarak potansiyel olarak çalışabilecek metot sayısını ölçer. Sistem ortalaması 24.62, medyan 15. RFC 100'ün üzerindeki eşiği sadece 18 sınıf yani yüzde 2.68 aşıyor, ancak bunlar davranışsal olarak en karmaşık sınıflar. WorkflowEditor RFC 531 ile zirvededir. NodeContainerEditPart 257, Nodalizer 235, StyledTextEditor 209. RFC ve WMC bu veri setinde yüksek korelasyon gösteriyor: en yüksek WMC'ye sahip sınıflar aynı zamanda en yüksek RFC'ye de sahip. Bu, tespit edilen Tanrı Sınıflarının eş zamanlı olarak hem yapısal karmaşıklık, hem davranışsal erişim, hem de bağımlılık boyutlarında karmaşık olduğunu doğruluyor.`,
    en: `RFC measures how many methods can potentially execute in response to a message received by an object. The system mean is 24.62 with a median of 15. Only 18 classes, just 2.68 percent, exceed the threshold of RFC greater than 100, but these are the most behaviorally complex classes. WorkflowEditor leads at RFC 531, followed by NodeContainerEditPart at 257, Nodalizer at 235, and StyledTextEditor at 209. RFC and WMC are highly correlated in this dataset: classes with the highest WMC also have the highest RFC. This confirms that the identified God Classes are complex in multiple dimensions simultaneously: structural complexity, behavioral reach, and coupling.`,
  },
  // 9 — God Class Deep Dive
  {
    tr: `İlk 20 en kötü sınıfa baktığımızda, değer tablosundaki kırmızı ve sarı hücrelerin çokluğundan da görüldüğü gibi, metrikler arasında tutarlı bir örüntü var. WorkflowEditor her metrikte en kötü değerlerine sahip: CBO 220, WMC 576, RFC 531, LCOM 7690, LOC 2688. Bu sınıf hemen hemen tüm diğer alt sistemlere bağımlı olan merkezi editörü temsil ediyor. İkinci sırada NodeContainerEditPart geliyor ve onu ExplorerView, SubnodeLayoutJSONEditorPage, AbstractContentProvider takip ediyor. Dört bağımsız metrikte aynı sınıfların en kötü çıkması, God Class anti-paterninin güvenilir bir göstergesidir. Bu sınıflar ideal olarak daha küçük, uyumlu birliklere dağıtılması gereken sorumluluklar biriktirmiştir.`,
    en: `Looking at the top 20 worst classes, we see a consistent pattern across metrics, as shown by the density of red and yellow cells. WorkflowEditor has the worst values in every metric: CBO 220, WMC 576, RFC 531, LCOM 7690, LOC 2688. This class represents the central editor and depends on virtually every subsystem. Second is NodeContainerEditPart, followed by ExplorerView, SubnodeLayoutJSONEditorPage, and AbstractContentProvider. The same classes appearing at the top across four independent metrics is a reliable indicator of the God Class anti-pattern. These classes have absorbed responsibilities that should ideally be distributed across smaller, cohesive units.`,
  },
  // 10 — Q4: LCOM
  {
    tr: `Dördüncü sorumuzun uyum bölümü: LCOM. Bu metrik, bir sınıftaki ortak örnek değişkeni paylaşmayan metot çiftlerinin sayısını ölçer. Yüzde 64.14 ile LCOM 1'den büyük eşik ihlali, kod tabanındaki en yaygın yapısal problemdir. Medyan 6 iken maksimum değer WorkflowEditor'un 7690'ı. Bu bulgu, God Class paterni ile güçlü korelasyon gösteriyor: büyük, yüksek bağımlılıklı sınıflar kaçınılmaz olarak farklı sorumluluklar içeren metot grupları içerir ve bu yüzden ortak örnek değişkeni paylaşmazlar. LCOM ihlallerini sorumluluk ayrımı ile gidermek, aynı zamanda CBO'yu da iyileştirir çünkü daha küçük sınıflar daha az bağımlılığa ihtiyaç duyar.`,
    en: `The cohesion portion of question four: LCOM. This metric counts pairs of methods that do not share instance variables. At 64.14 percent, the LCOM greater than 1 threshold violation is the most pervasive structural problem in the codebase. The median is just 6 but the maximum reaches 7,690 for WorkflowEditor. This finding is strongly correlated with the God Class pattern: large, highly coupled classes inevitably contain groups of methods serving different concerns that share few instance variables. Addressing LCOM violations through responsibility decomposition would simultaneously improve CBO since smaller classes need fewer dependencies.`,
  },
  // 11 — Q4: DIT & NOC
  {
    tr: `Kalıtım yapısı konusunda iyi haberlerimiz var. DIT metriği sınıfların neredeyse tamamında sağlıklı, ortalama 2.22, sadece tek bir sınıf DIT 5'i aşan derin kalıtım aykırı değeri. NOC metriğinde ise ortalama 0.44, medyan 0, yani sınıfların büyük çoğunluğunun doğrudan alt sınıfı yok. Sadece 5 sınıf NOC 5'in üzerinde. En dikkat çekici olanlar: AbstractNodeAction 50 doğrudan alt sınıf ile sistemdeki en kritik taban sınıf. AbstractKNIMECommand 36, AbstractEditorAction 37. Yüksek NOC geniş yeniden kullanımı gösterse de, bu soyut sınıflardaki herhangi bir değişiklik onlarca somut alt sınıfı hemen etkiler.`,
    en: `We have good news regarding the inheritance structure. The DIT metric is healthy across almost all classes, with a mean of 2.22, and only a single deep-inheritance outlier exceeding DIT of 5. For NOC, the mean is 0.44 with a median of 0, meaning most classes have no direct subclasses. Only 5 classes exceed NOC of 5. The most notable: AbstractNodeAction with 50 direct subclasses is the most critical base class in the system. AbstractKNIMECommand has 36, AbstractEditorAction has 37. While high NOC indicates broad reuse which is desirable, any change to these abstract classes has an immediate impact on dozens of concrete subclasses.`,
  },
  // 12 — Dependency Graph (KEY SLIDE)
  {
    tr: `Şimdi mimari analitikimizin en önemli görsellerinden birine geliyoruz: paket düzeyinde bağımlılık grafı. Bu graf, SciTools Understand ile kaynak koddan çıkarılmış somut yani as-built mimarisi temsil ediyor. Her düğüm bir üst düzey Maven veya OSGi paketi, kenar ağırlıkları ise bileşenler arasındaki bağımlılık sayısını gösteriyor.

Temel gözlemler şunlar: org.knime.workbench.core en çok referans alınan alt katman bileşeni, yani tüm diğer paketlerin bağımlı olduğu temel plugin. org.knime.workbench.editor en yüksek çıkış derecesine sahip, neredeyse tüm diğer bileşenlere bağımlı. Bu, editörün sistemdeki baskın rolünü teyit ediyor.

En kritik bulgu: editor ile ui.layout arasında kırmızı ile gösterilen döngüsel bağımlılık. Editor layout alt sistemine bağımlı ve layout alt sisteminin editöre geri bağımlılığı var: bir yönde 12, ters yönde 105 bağımlılık. Bu mimari bir kokudur ve bu iki alt sistemin bağımsız derlenmesini, test edilmesini ve yayınlanmasını imkânsız kılar.

Olumlu tarafta, test paketleri üretim kodundan doğru şekilde ayrılmış ve sadece üretim paketlerinden import yapıyorlar, tersi değil.

Genel olarak graf, kabaca katmanlı bir yapı ortaya koyuyor: core, repository ve explorer, editor. Ancak önemli bağımlılık yoğunlaşma noktaları ve doğrulanmış bir döngüsel bağımlılık, yoksa hiyerarşik olan yapıyı zayı ediyor.`,
    en: `Now we come to one of the most important visualizations of our architectural analysis: the package-level dependency graph. This graph represents the concrete, as-built architecture extracted from source code by SciTools Understand. Each node is a top-level Maven or OSGi bundle, and edge weights represent the number of dependencies between connected components.

Key observations: org.knime.workbench.core is the most referenced downstream component, the foundational plugin that most other packages depend on. org.knime.workbench.editor has the highest out-degree, depending on virtually all other components, confirming the editor's dominant role in the system.

The most critical finding: a cyclic dependency shown in red between editor and ui.layout. The editor depends on the layout subsystem and the layout subsystem has a back-dependency on the editor: 12 dependencies in one direction, 105 in the reverse. This is an architectural smell that makes independent compilation, testing, and deployment of these two subsystems impossible.

On the positive side, test packages are correctly separated from production code and only import from production packages, not the reverse.

Overall, the graph reveals a roughly layered structure: core, then repository and explorer, then editor. But notable coupling hotspots and one confirmed cyclic dependency undermine the otherwise hierarchical organization.`,
  },
  // 13 — Cyclic Dependency
  {
    tr: `Döngüsel bağımlılığa daha yakından bakalım. Editor ve ui.layout arasındaki bu döngüsel bağımlılık, modül düzeyindeki tek doğrulanmış döngü. Rakamlar çarpıcı: editör'dan layout'a 12, layout'tan editöre 105 bağımlılık. Döngüsel bağımlılıklar bağımsız derleme, test ve yayın sürümünü engeller. Bu bulgu, her iki paketteki yüksek LCOM değerleri ile de uyumlu, yani düşük iç uyum sorumlulukların zaman içinde iç içe geçtiğine işaret ediyor. Bu döngüselliği kırmak için arayüz ayrımı ve bağımlılık tersleme prensipleri uygulanmalıdır.`,
    en: `Let's look closer at the cyclic dependency. This cycle between editor and ui.layout is the only confirmed cycle at the module level. The numbers are striking: 12 dependencies from editor to layout, 105 from layout back to editor. Cyclic dependencies prevent independent compilation, testing, and release of the affected modules. This aligns with the high LCOM values in both packages, indicating low internal cohesion and suggesting that responsibilities have become entangled over time. Breaking this cycle requires applying interface segregation and dependency inversion principles.`,
  },
  // 14 — Overall Evaluation
  {
    tr: `Genel değerlendirmemizi dört ana bulgu ile özetleyelim. Birincisi, tutarlı Tanrı Sınıfı paterni: en yüksek CBO, WMC, RFC ve LCOM değerlerine sahip sınıflar ezici çoğunlukla aynı set. İkincisi, bağımlılık yoğunlaşma noktaları mimari hub'larla uyumlu: bağımlılık grafı WorkflowEditor ve editor2 paketini mimari merkez olarak tanımlıyor ve metrik veriler bunu doğruluyor. Üçüncüsü, editor ile ui.layout arasındaki döngüsel bağımlılık somut bir mimari kokudur. Dördüncüsü, LCOM yüzde 64 ihlal oranıyla en kritik bakılabilirlik sorunu. Sonuç olarak KNIME Workbench kısmen katmanlı, işlevsel ve olgun bir mimari sergiliyor ancak az sayıda büyük, yüksek bağımlılıklı, düşük uyumlu Tanrı Sınıflarına yoğunlaşmış önemli bakılabilirlik borcu taşıyor.`,
    en: `Let us summarize our overall evaluation with four key findings. First, a consistent God Class pattern: the classes with the highest CBO, WMC, RFC, and LCOM values are overwhelmingly the same set. Second, coupling hotspots align with architectural hubs: the dependency graph identifies WorkflowEditor and the editor2 package as the architectural center, and metrics confirm this. Third, the cyclic dependency between editor and ui.layout is a concrete architectural smell. Fourth, LCOM is the most critical maintainability concern at 64 percent violation rate. In summary, KNIME Workbench demonstrates a partially layered, functional, and mature architecture, but carries significant maintainability debt concentrated in a small number of large, highly coupled, low-cohesion God Classes.`,
  },
  // 15 — Recommendations
  {
    tr: `İyileştirme önerilerimiz şunlar: Birincisi, WorkflowEditor'un sorumluluk ayrıştırması. Bu 2688 satırlık, 576 WMC'li sınıf, her biri tek bir sorumluluk taşıyan daha küçük sınıflara bölünmeli. İkincisi, döngüsel bağımlılık kırma. Editor ve ui.layout arasındaki döngüyü arayüz ayrımı ve bağımlılık tersleme ile gidermek. Üçüncüsü, LCOM iyileştirmesi. Düşük uyumlu sınıfları sorumluluk bazlı daha küçük, odaklanmış sınıflara bölmek. Bu aynı zamanda CBO'yu da düşürür. Dördüncüsü, yüksek NOC taban sınıflarını korumak: AbstractNodeAction gibi 50 alt sınıflı sınıflarda değişiklik yapılırken ekstra dikkat ve kapsamlı regresyon testi gerekli. Bu öneriler D2 raporumuzda detaylandırılacak.`,
    en: `Our improvement recommendations are as follows: First, decompose WorkflowEditor. This 2,688-line, WMC-576 class should be split into smaller classes each carrying a single responsibility. Second, break the cyclic dependency between editor and ui.layout using interface segregation and dependency inversion. Third, improve LCOM by splitting low-cohesion classes into smaller, focused units organized by responsibility. This will simultaneously reduce CBO. Fourth, protect high-NOC base classes: changes to classes like AbstractNodeAction with 50 subclasses require extra care and comprehensive regression testing. These recommendations will be detailed in our D2 report.`,
  },
  // 16 — Team Allocation & Q&A
  {
    tr: `Son olarak ekip içi sorumluluk dağılımımız. Mert Ergun: OSS seçimi, araç kurulumu, sınıf düzeyinde metrik çıkarımı, Q1 LOC ve Q2 CBO analizi, bağımlılık grafı oluşturma. Tahacan Celebi: GQM ağacı tasarımı, Q3 WMC ve RFC analizi ve görselleştirme, eşik analizi, aykırı değer tespiti. Serhat Akbulut: Q4 LCOM, DIT ve NOC analizi, paket düzeyinde toplamallaştırma, genel değerlendirme, rapor yazımı ve entegrasyon. Tüm ham metrik verilerimiz Google Sheets'te paylaşıma açıktır. Sorularınızı alabiliriz, teşekkürler.`,
    en: `Finally, our team allocation. Mert Ergun: OSS selection, tool setup, class-level metric extraction, Q1 LOC and Q2 CBO analysis, dependency graph generation. Tahacan Celebi: GQM tree design, Q3 WMC and RFC analysis and visualization, threshold analysis, outlier identification. Serhat Akbulut: Q4 LCOM, DIT, and NOC analysis, package-level aggregation, overall evaluation, report writing and integration. All our raw metric data is publicly available on Google Sheets. We are happy to take your questions, thank you.`,
  },
];
