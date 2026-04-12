**Hacettepe University**

Computer Engineering Department

BBM485 - Software Architectures, 2025-2026 Spring

**Concrete Architecture Evaluation Report (T1)**

Delivery Date: April 25, 2026

**Team Members**

Mert Ergün -

Tahacan Çelebi -

Serhat Akbulut - 2210356052

# 1\. OSS Product Overview

KNIME Workbench is the graphical user interface (GUI) component of KNIME Analytics Platform, one of the world's leading open-source data analytics, reporting, and integration platforms. The workbench provides the Eclipse-based RCP (Rich Client Platform) front-end through which users visually design, execute, and manage data analysis workflows by connecting processing nodes on an interactive workflow canvas.

The project is written entirely in Java using object-oriented design principles, and its source code is publicly available under the GNU General Public License (GPL) on GitHub. With more than 100,000 lines of code spread across dozens of packages, KNIME Workbench offers a rich and realistic subject for software architecture and code quality analysis.

| **Table 1. Description of the OSS Product** | |
| --- | | --- |
| **Name of OSS Product** | KNIME Workbench (knime-workbench) |
| **Description** | Eclipse-based graphical front-end of the KNIME Analytics Platform. Provides the workflow canvas, node repository, and all GUI interactions for data analytics workflow design and execution. |
| **Programming Language** | Java (object-oriented) |
| **URL of OSS Product** | <https://github.com/knime/knime-workbench> |
| **Size of OSS Product** | ~97.66 KLOC (average LOC per class × 672 classes; total codebase exceeds 100K physical lines) |
| **Number of Classes Analyzed** | 672 classes across 78 packages |
| **License** | GNU General Public License (GPL) |

**2\. Tools Used for Analysis**

The following tools were used to collect source-code metrics, generate visualizations, and create the dependency graph of the KNIME Workbench codebase.

| **Table 2. The List of Tools Used for Analysis** | | |
| --- | | | --- | --- |
| **Tool Name** | **Purpose of Use** | **URL** |
| SciTools Understand | Obtain C&K metrics (CBO, DIT, NOC, RFC, WMC, LCOM) and LOC per class; generate dependency graphs | <https://scitools.com> |
| Python (pandas, matplotlib, scipy) | Statistical analysis, visualization (boxplots, histograms), outlier detection, threshold violation counts | <https://pandas.pydata.org> |
| SonarQube (Community) | Cross-validation of metric values; code smell detection (Bonus - Appendix) | <https://www.sonarsource.com/open-source-editions/> |

# 3\. GQM Tree for Evaluating OSS

We apply the Goal-Question-Metric (GQM) approach to evaluate the maintainability of KNIME Workbench. The overall goal is stated below, and it is refined into four measurable research questions, each answered by one or more C&K / LOC metrics.

| **Table 3. The Goal, Questions, and Metrics to Evaluate OSS Maintainability** | |
| --- | | --- |
| **Goal:** To understand the maintainability of the KNIME Workbench OSS product from the viewpoint of an architect/developer, in order to identify structural weaknesses that may hinder modifiability, testability, and long-term evolution of the system. | |
| **List of Questions** | **Metrics Used to Answer the Question** |
| Q1: What is the size and volume of the codebase, and how is it distributed across classes and packages? | LOC (Lines of Code) |
| Q2: What is the coupling level between classes, and are there classes with excessive dependencies that may harm modifiability? | CBO (Coupling Between Objects) |
| Q3: What is the complexity level of the methods and classes, and which classes may be difficult to test or understand? | WMC (Weighted Methods per Class), RFC (Response for a Class) |
| Q4: What is the cohesion and inheritance structure of the classes, and are there cohesion problems that may hinder testability and reusability? | LCOM (Lack of Cohesion in Methods), DIT (Depth of Inheritance Tree), NOC (Number of Children) |

# 4\. Description of Software Metrics

All metrics belong to the Chidamber & Kemerer (C&K) suite, complemented by the LOC size metric. Values were collected at the class level using SciTools Understand and then aggregated upward to the package and product levels.

| **Table 4. List of Software Metrics Used in Analysis** | | | |
| --- | | | | --- | --- | --- |
| **Metric Name** | **Type** | **Source** | **Formula / Description** |
| LOC | Size | Understand | Physical lines of source code in a class, excluding blank lines and comments. |
| CBO | C&K / Coupling | Understand | Count of the number of other classes to which a class is coupled (via method calls or attribute accesses). Higher CBO → lower modifiability. |
| WMC | C&K / Complexity | Understand | Sum of cyclomatic complexities of all methods in a class. Measures total structural complexity. Higher WMC → harder to test and maintain. |
| RFC | C&K / Complexity | Understand | Total number of methods that can be invoked in response to a message received by an object. RFC = \|M\| + \|R\|, where M is the set of class methods and R is the set of methods called by them. |
| LCOM | C&K / Cohesion | Understand | Number of pairs of methods that do NOT share any instance variable, minus the number of pairs that do. LCOM = \|{(Mi,Mj)\|Ii∩Ij=∅}\| − \|{(Mi,Mj)\|Ii∩Ij≠∅}\|. Higher LCOM → lower cohesion. |
| DIT | C&K / Inheritance | Understand | Maximum length from the root to the class in the inheritance tree. DIT > 5 is generally considered deep and risky. |
| NOC | C&K / Inheritance | Understand | Number of immediate subclasses of a class. High NOC increases responsibility of a parent class and indicates potential over-generalization. |

# 5\. Evaluating OSS

In this section we answer the four GQM questions defined in Section 3. All measurements are initially reported at the class level, then aggregated at the package level (mean values) and finally discussed at the product level. The system-level summary statistics are presented in Table 5.

| **Table 5. System-Level Metric Summary (n = 672 classes)** | | | | | | | |
| --- | | | | | | | | --- | --- | --- | --- | --- | --- | --- |
| **Statistic** | **CBO** | **WMC** | **RFC** | **DIT** | **NOC** | **LCOM** | **LOC** |
| Mean | 11.14 | 20.01 | 24.62 | 2.22 | 0.44 | 53.17 | 97.66 |
| Median | 9.00 | 11.00 | 15.00 | 2.00 | 0.00 | 6.00 | 52.00 |
| Std Dev | 12.73 | 33.18 | 34.82 | 0.96 | 3.06 | 341.55 | 162.58 |
| Min | 0 | 0 | 0 | 1 | 0 | 0 | 2 |
| Max | 220 | 576 | 531 | 10 | 50 | 7690 | 2688 |
| Q1 (25%) | 5 | 5 | 6 | 2 | 0 | 0 | 27 |
| Q3 (75%) | 13.25 | 23 | 32 | 3 | 0 | 26 | 111 |

| **Table 6. Threshold Violation Summary** | | | |
| --- | | | | --- | --- | --- |
| **Metric** | **Threshold** | **\# Violations** | **% of Classes** |
| CBO | \>14 (high coupling) | 143 | 21.28% |
| WMC | \>40 (very complex) | 85 | 12.65% |
| RFC | \>100 (very high) | 18 | 2.68% |
| DIT | \>5 (too deep) | 1 | 0.15% |
| NOC | \>5 (over-generalized) | 5 | 0.74% |
| LCOM | \>1 (low cohesion) | 431 | 64.14% |

## 5.1 Answer to Q1 - Code Size (LOC)

Q1 asks: What is the size and volume of the codebase, and how is it distributed across classes and packages?

With a mean LOC of 97.66 and median of 52 per class, the majority of KNIME Workbench classes are small to moderate in size. However, a heavy right-skew is visible in both the histogram and the boxplot: a small number of "God Class" candidates have extremely large sizes (max = 2,688 LOC), pulling the mean well above the median. The interquartile range (IQR = 27-111 LOC) confirms that 75% of classes stay under 111 lines, which is generally healthy.

The most extreme outlier is WorkflowEditor (LOC ≈ 2,688), which is also the most coupled class in the system (CBO = 220). Other large classes include NodeContainerEditPart (LOC > 800), StyledTextEditor, Nodalizer, and SubnodeLayoutJSONEditorPage - all of which also appear as outliers in the WMC and RFC analyses, suggesting a consistent pattern of "bloated" classes in the editor and explorer subsystems.


_Figure 1. LOC Distribution across 672 classes_


_Figure 2. LOC Boxplot - outliers clearly visible above ~500_

At the package level, the highest mean LOC values appear in org.knime.workbench.descriptionview.metadata (~317 LOC/class) and org.knime.workbench.editor2.directannotationedit (~205 LOC/class), indicating that these packages host the most complex individual classes.

## 5.2 Answer to Q2 - Coupling (CBO)

Q2 asks: What is the coupling level between classes, and are there classes with excessive dependencies that may harm modifiability?

The system-level mean CBO is 11.14 with a median of 9. Using the widely accepted threshold of CBO > 14 as "high coupling", 143 classes (21.28%) violate this threshold, indicating a non-trivial coupling problem across the codebase.

The distribution is right-skewed with several extreme outliers. The most critical findings are:

- WorkflowEditor: CBO = 220 - the single most coupled class; this class is the central editor component and depends on virtually every other subsystem.
- NodeContainerEditPart: CBO = 91 - the edit part for workflow nodes, tightly coupled to the model, figures, commands, and policies.
- AbstractContentProvider: CBO = 58; AbstractRepositoryView: CBO = 65; Nodalizer: CBO = 59 - large abstract or utility classes that fan out broadly.

High CBO directly harms modifiability: changing any class that many other classes depend on creates ripple effects across the system, increasing maintenance cost and regression risk.


_Figure 3. CBO Distribution - majority of classes below 20, with extreme outliers_


_Figure 4. CBO Boxplot - WorkflowEditor (CBO=220) is a clear extreme outlier_

At the package level, org.knime.workbench.editor2.editparts.policy (mean CBO = 23.4) and org.knime.workbench.explorer.view (mean CBO = 18.67) have the highest average coupling, suggesting that these packages form tightly coupled clusters.

## 5.3 Answer to Q3 - Class Complexity (WMC and RFC)

**5.3.1 Weighted Methods per Class (WMC)**

Q3 (first part) asks: Which classes have high structural complexity that may be difficult to test?

The system mean WMC is 20.01 with a median of 11. The threshold WMC > 40 is violated by 85 classes (12.65%). The extreme outliers reinforce the "God Class" pattern:

- WorkflowEditor: WMC = 576 - by far the most complex class.
- StyledTextEditor: WMC = 271; NodeContainerEditPart: WMC = 206; AbstractContentProvider: WMC = 200.
- Nodalizer: WMC = 172; SubnodeLayoutJSONEditorPage: WMC = 160.

High WMC is directly linked to low testability. A class with WMC = 576 requires an enormous number of unit test cases to achieve structural coverage (basis path testing), making it practically untestable in full.


_Figure 5. WMC Boxplot - WorkflowEditor (576) is a massive outlier_


_Figure 6. WMC Distribution - exponential decay, heavy right tail_

| **Table 7. Top 20 Worst Classes - Multi-Metric Overview** | | | | | | | |
| --- | | | | | | | | --- | --- | --- | --- | --- | --- | --- |
| **Class (short name)** | **CBO** | **WMC** | **DIT** | **NOC** | **RFC** | **LCOM** | **LOC** |
| WorkflowEditor | 220 | 576 | 3 | 0 | 531 | 7690 | 2688 |
| ExplorerView | 93 | 84 | 4 | 0 | 138 | 288 | 504 |
| NodeContainerEditPart | 91 | 206 | 3 | 1 | 257 | 2153 | 924 |
| SubnodeLayoutJSONEditorPage | 65 | 160 | 4 | 0 | 186 | 337 | 935 |
| AbstractRepositoryView | 65 | 59 | 2 | 1 | 104 | 154 | 557 |
| Nodalizer | 59 | 172 | 1 | 0 | 235 | 3 | 657 |
| AbstractContentProvider | 58 | 200 | 3 | 1 | 164 | 2965 | 758 |
| NewWorkflowContainerEditPolicy | 53 | 69 | 2 | 0 | 91 | 114 | 294 |
| WorkflowCoachView | 52 | 79 | 2 | 0 | 121 | 37 | 416 |
| WorkflowContextMenuProvider | 48 | 69 | 2 | 0 | 62 | 29 | 412 |
| ComponentMetadataModelFacilitator | 47 | 58 | 3 | 0 | 140 | 74 | 546 |
| NodeContainerFigure | 46 | 128 | 10 | 1 | 114 | 755 | 958 |
| StyledTextEditor | 45 | 271 | 2 | 0 | 209 | 899 | 1175 |
| WorkflowImportSelectionPage | 43 | 132 | 2 | 0 | 147 | 565 | 795 |
| WorkflowEditorDropTargetListener | 41 | 67 | 2 | 0 | 102 | 128 | 299 |
| BulkChangeMetaNodeLinksDialog | 40 | 68 | 4 | 0 | 103 | 114 | 454 |
| WorkflowRootEditPart | 39 | 62 | 3 | 0 | 75 | 276 | 267 |
| NodeMonitorView | 37 | 60 | 2 | 0 | 86 | 18 | 400 |
| WorkflowEditPartFactory | 37 | 36 | 1 | 0 | 22 | 41 | 114 |
| EditMountPointDialog | 36 | 70 | 2 | 0 | 94 | 167 | 487 |

_Table 7. Red = critical violation; Yellow = high violation. CBO threshold: 14, WMC: 40, RFC: 100, LCOM: 1._

**5.3.2 Response for a Class (RFC)**

RFC measures how many methods can potentially execute in response to a message. The system mean RFC is 24.62 with a median of 15. Threshold RFC > 100 is violated by only 18 classes (2.68%), but these are the most behaviorally complex classes in the system:

- WorkflowEditor: RFC = 531
- NodeContainerEditPart: RFC = 257; Nodalizer: RFC = 235; StyledTextEditor: RFC = 209

RFC and WMC are highly correlated in this dataset: the classes with the highest WMC also have the highest RFC. This confirms that the identified "God Classes" are complex in multiple dimensions simultaneously - in structural complexity, in behavioral reach, and in coupling.


_Figure 7. RFC Distribution - exponential decay with a heavy right tail_


_Figure 11. DIT Distribution - concentrated at depth 2-3, one extreme outlier at 10_


_Figure 12. DIT Boxplot_

**5.4.3 Number of Children (NOC)**

The mean NOC is 0.44 with a median of 0, meaning most classes have no direct subclasses. Only 5 classes (0.74%) exceed the threshold of NOC > 5. The most notable cases are:

- AbstractNodeAction (NOC = 50): This abstract base class for all node-level editor actions is inherited by 50 direct subclasses, making it the most critical base class in the system.
- AbstractKNIMECommand (NOC = 36); AbstractEditorAction (NOC = 37); ExplorerAction (NOC = 28).

While high NOC indicates broad reuse (which is desirable), it also means that any change to these abstract classes has an immediate impact on dozens of concrete subclasses, elevating regression risk significantly.


_Figure 13. NOC Distribution - the vast majority of classes have 0 children_


_Figure 14. NOC Boxplot - five classes with NOC > 5 are visible as outliers_

# 6\. Dependency Graph(s)

The dependency graph below represents the concrete (as-built) architecture of KNIME Workbench at the package (module) level, as extracted by SciTools Understand from the source code. Each node is a top-level Maven/OSGi bundle or major package cluster. Edge weights represent the number of dependencies between the connected components.


_Figure 15. Package-level dependency graph of KNIME Workbench (generated by SciTools Understand)_

Key observations from the dependency graph:

- org.knime.workbench.core is the most referenced downstream component (i.e., lowest-level utility layer), receiving dependencies from most other packages - consistent with its role as the core plugin.
- org.knime.workbench.editor (bundle) depends on virtually all other components with the highest out-degree, confirming the dominant role of the editor in the system.
- A cyclic dependency (shown in red) exists between org.knime.workbench.editor and org.knime.workbench.ui.layout: the editor depends on the layout subsystem, and the layout subsystem has a back-dependency on the editor (12 dependencies in one direction, 105 in the reverse). This is an architectural smell (cyclic dependency) that harms modifiability and makes independent deployment/testing of these two subsystems impossible.
- org.knime.workbench.repository and org.knime.workbench.explorer.view form a secondary highly-connected cluster with many mutual dependencies.
- Test packages (e.g., org.knime.workbench.editor.tests, org.knime.workbench.explorer.view.tests) are correctly separated from production code and only import from production packages, not the reverse - a positive architectural signal.

Overall, the dependency graph reveals a roughly layered structure (core → repository/explorer → editor), but with notable coupling hotspots and one confirmed cyclic dependency that undermines the otherwise hierarchical organization.

# 7\. Overall Evaluation of Concrete Architecture

Synthesizing the metric analysis (Section 5) with the structural evidence from the dependency graph (Section 6), the following conclusions can be drawn about the concrete architecture and maintainability of KNIME Workbench:

**Consistent "God Class" Pattern**

The classes with the highest CBO, WMC, RFC, and LCOM values are overwhelmingly the same set: WorkflowEditor, NodeContainerEditPart, AbstractContentProvider, Nodalizer, and StyledTextEditor. This perfect alignment across four independent metrics is a reliable indicator of the God Class anti-pattern. These classes absorb responsibilities that ideally should be distributed across smaller, cohesive units. Their existence directly reduces testability (high WMC/RFC), modifiability (high CBO), and reusability (high LCOM).

**Coupling Hotspots Align with Architectural Hubs**

The dependency graph identifies WorkflowEditor and the editor2 package cluster as the architectural hub of the system. The metric data confirms this: org.knime.workbench.editor2 has the highest mean CBO, WMC, and LCOM among all packages. The structural coupling is not an accident of the code - it reflects an architectural decision to centralize workflow management in a single mega-component. While this may have been pragmatic in the early development of KNIME, it now represents significant technical debt.

**Cyclic Dependency: A Concrete Architectural Smell**

The red edge in the dependency graph between editor and ui.layout represents the only confirmed cycle at the module level. Cyclic dependencies prevent independent compilation, testing, and release of the affected modules. This aligns with the high LCOM values in both packages (which indicates low internal cohesion), suggesting that the responsibilities of these two modules have become entangled over time.

**Inheritance is Well-Controlled; NOC Risk is Localized**

The DIT metric is healthy across almost all classes (mean = 2.22), with only a single deep-inheritance outlier. The NOC metric reveals that a small number of abstract base classes (particularly AbstractNodeAction with NOC = 50) have very broad fan-out. While this is architecturally intentional (the Command/Action pattern with many concrete subclasses), any change to these base classes carries high regression risk.

**LCOM is the Most Critical Maintainability Concern**

At 64.14% of all classes violating the LCOM > 1 threshold, low cohesion is the most pervasive structural problem in the codebase. This finding is strongly correlated with the God Class pattern: large, highly-coupled classes inevitably contain groups of methods that serve different concerns and therefore share few instance variables. Addressing LCOM violations through responsibility decomposition would simultaneously improve CBO (smaller classes need fewer dependencies) and WMC (smaller classes have fewer methods).

**Summary**

KNIME Workbench demonstrates a partially layered architecture that is functional and mature, but carries significant maintainability debt concentrated in a small number of large, highly coupled, low-cohesion "God Classes" - most notably WorkflowEditor - and one confirmed cyclic dependency between the editor and layout subsystems. Addressing these issues through decomposition, interface segregation, and dependency inversion would substantially improve the long-term modifiability and testability of the system.

# 8\. References

\[1\] Raw metric data (class-level, package-level, system-level) collected for this report is available at:

<https://docs.google.com/spreadsheets/d/1_cspHvndYEGHUeSY7cinYTp85KvoSZBQ0FO36XwDh68/edit?gid=0#gid=0>

\[2\] S. R. Chidamber and C. F. Kemerer, "A metrics suite for object oriented design," IEEE Transactions on Software Engineering, vol. 20, no. 6, pp. 476-493, 1994.

\[3\] Basili, V., Caldiera, G., & Rombach, H. D. (1994). The Goal Question Metric Approach. Encyclopedia of Software Engineering.

\[4\] KNIME AG. KNIME Workbench GitHub Repository. <https://github.com/knime/knime-workbench> (Accessed April 2026).

\[5\] SciTools Understand. <https://scitools.com/feature/metrics> (Used for metric extraction and dependency graphs).

# 9\. Allocation of Responsibilities within Team Members

The responsibilities for this project were allocated as follows. Please update with actual names and student numbers.

| **Table 7. Allocation of Responsibilities** | | |
| --- | | | --- | --- |
| **Name of Team Member** | **Description of Responsibility** | **Allocation Unit** |
| Mert Ergün - | OSS selection, tool setup (Understand), metric extraction at class level, Q1 (LOC) and Q2 (CBO) analysis, dependency graph generation | Sections 1, 2, 5.1, 5.2, 6 |
| Tahacan Çelebi - | GQM tree design, Q3 (WMC, RFC) analysis and visualization, threshold analysis, outlier identification | Sections 3, 4, 5.3, Table 6 |
| Serhat Akbulut - 2250356052 | Q4 (LCOM, DIT, NOC) analysis, package-level aggregation, overall evaluation, report writing and integration | Sections 5.4, 7, 8, 9 |