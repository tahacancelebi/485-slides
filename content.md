### **Slide 1: Title Slide**

**[Slide Content]**

- **Title:** Concrete Architecture Evaluation: KNIME Workbench
- **Subtitle:** Analysis of Maintainability via C&K and LOC Metrics (T1 Report)
- **Course:** BBM485 – Software Architectures, 2025–2026 Spring
- **Team Members:** Mert Ergün, Tahacan Çelebi, Serhat Akbulut

**[Speaker Notes]**
_"Welcome everyone. Today, our team will present the concrete architecture evaluation of the KNIME Workbench. We will walk you through our static code analysis, using Chidamber & Kemerer metrics to reveal the actual maintainability, structural weaknesses, and technical debt hidden within the codebase."_

---

### **Slide 2: OSS Product Overview**

**[Slide Content]**

- **Product:** KNIME Workbench
- **Description:** Graphical front-end (Eclipse RCP) for data analysis workflows.
- **Language:** Java (Object-Oriented)
- **Codebase Snapshot:** ~100 KLOC across 672 classes.
- **License:** GNU General Public License (GPL)

**[Speaker Notes]**
_"We selected KNIME Workbench, a widely used, open-source data analytics platform. With over 100,000 lines of physical code and 672 classes written purely in Java, it provides a highly realistic, enterprise-level codebase for our architectural analysis."_

---

### **Slide 3: Evaluation Methodology: GQM Approach**

**[Slide Content]**

- **Goal:** Evaluate maintainability, testability, and modifiability from an architect's viewpoint.
- **Questions & Metrics:**
  - **Q1 (Size):** LOC (Lines of Code)
  - **Q2 (Coupling):** CBO (Coupling Between Objects)
  - **Q3 (Complexity):** WMC & RFC
  - **Q4 (Structure & Cohesion):** LCOM, DIT, NOC

**[Speaker Notes]**
_"To avoid getting lost in raw data, we applied the Goal-Question-Metric approach. Our main goal is maintainability. We divided this into four specific questions focusing on Size, Coupling, Complexity, and Cohesion, strictly mapping them to the core C&K metrics."_

---

### **Slide 4: Tools Used**

**[Slide Content]**

- **SciTools Understand:** Primary metric extraction & Dependency Graphs.
- **Python (Pandas, Matplotlib):** Statistical analysis, boxplots, outlier detection.
- **SonarQube:** Cross-validation & Code Smell detection.

**[Speaker Notes]**
_"For our data collection, we used SciTools Understand to analyze the architecture from the bottom-up. We then used Python to process the raw data into visual distributions, allowing us to spot architectural outliers easily."_

---

### **Slide 5: System-Level Metric Summary**

**[Slide Content]**

- _(Insert Table 5 from your report here)_
- **Key Takeaways:**
  - Medians are generally healthy.
  - Max values are extremely high (e.g., LCOM max 7,690).
  - Massive gap between Mean and Median indicates severe outliers.

**[Speaker Notes]**
_"Looking at the system generally, the median values tell us that most classes are well-designed. However, the extreme maximum values—like a class with an LCOM of over 7000—show a heavy right-skew. This was our first clue that a 'God Class' anti-pattern exists in the system."_

---

### **Slide 6: Q1 — Code Size (LOC)**

**[Slide Content]**

- _(Insert Figure 1 and 2: LOC Distribution and Boxplot)_
- **Median LOC:** 52
- **Extreme Outlier:** `WorkflowEditor` (~2,688 lines).

**[Speaker Notes]**
_"When we look at the lines of code, the `WorkflowEditor` class stands out with nearly 2,700 lines. In the real world, this isn't just a number. It means massive cognitive load for any developer trying to read it, and constant Git 'Merge Conflicts' because multiple team members inevitably have to edit this single file at the same time."_

---

### **Slide 7: Q2 — Coupling (CBO)**

**[Slide Content]**

- _(Insert Figure 3 and 4: CBO Distribution and Boxplot)_
- **Threshold:** >14 (High Coupling) -> Violated by 21% of classes.
- **Critical Outlier:** `WorkflowEditor` (CBO = 220).

**[Speaker Notes]**
_"Coupling measures how connected our classes are. 21% of our classes exceed the safe threshold. `WorkflowEditor` is coupled to 220 other classes! In a real software company, this creates a 'Butterfly Effect'. A tiny change in this class can break 220 other components, making the codebase incredibly fragile and slowing down new feature development."_

---

### **Slide 8: Q3 — Structural Complexity (WMC)**

**[Slide Content]**

- _(Insert Figure 5: WMC Boxplot)_
- **Threshold:** >40 (Very Complex) -> Violated by 12.65% of classes.
- **Extreme Outlier:** `WorkflowEditor` (WMC = 576).

**[Speaker Notes]**
_"WMC measures structural complexity. A WMC of 576 means hundreds of if/else statements and loops. Practically speaking, writing Unit Tests to cover 100% of the execution paths in this class is impossible. Classes like this inevitably become 'Bug Hubs' where the majority of system errors hide."_

---

### **Slide 9: Q3 — Behavioral Complexity (RFC)**

**[Slide Content]**

- _(Insert Figure 8: RFC Boxplot)_
- **Finding:** Highest RFC perfectly correlates with highest WMC.
- **Extreme Outlier:** `WorkflowEditor` (RFC = 531).

**[Speaker Notes]**
_"RFC shows us behavioral reach. Again, the same classes top the list. This confirms our 'God Classes' are complex in every possible dimension: they know too much, do too much, and communicate with too many external components."_

---

### **Slide 10: Deep Dive: The "God Class" Pattern**

**[Slide Content]**

- **The usual suspects (Highest LOC, CBO, WMC, RFC):**
  - `WorkflowEditor`
  - `NodeContainerEditPart`
  - `StyledTextEditor`
- **Additional Risk:** Deeply nested blocks (depth of 8) and 24 Try-Catch blocks in `WorkflowEditor`.

**[Speaker Notes]**
_"When we overlay all our metrics, a clear 'God Class' anti-pattern emerges. `WorkflowEditor` has a Fan-in of 166, meaning it is a central pillar of the application. If this class fails, the entire application fails. It desperately needs decomposition."_

---

### **Slide 11: Q4 — Lack of Cohesion (LCOM)**

**[Slide Content]**

- _(Insert Figure 10: LCOM Boxplot)_
- **Alarming Finding:** 64.14% of classes violate the `LCOM > 1` threshold.
- **Catastrophic Outlier:** `WorkflowEditor` (LCOM = 7,690).

**[Speaker Notes]**
_"LCOM was our most alarming metric. 64% of classes have low internal cohesion. A value of 7,690 means the methods inside this class share almost no data. In industry terms, this class is a 'Dumping Ground'. It violates the Single Responsibility Principle, making it practically impossible to extract or reuse any logic from this class in another project."_

---

### **Slide 12: Q4 — Inheritance (DIT & NOC)**

**[Slide Content]**

- **DIT (Depth of Inheritance):** Healthy (Mean 2.22). Only 1 class > 5.
- **NOC (Number of Children):** Risk is localized.
- **Key Base Class:** `AbstractNodeAction` (NOC = 50).

**[Speaker Notes]**
_"Not all news is bad. The inheritance structure of the system is actually very healthy and flat. The DIT averages around 2. Only a few abstract base classes have a high number of children, which is an intentional and acceptable design for Eclipse-based action frameworks."_

---

### **Slide 13: Concrete Architecture (Dependency Graph)**

**[Slide Content]**

- _(Insert Figure 15: Black Background SciTools Graph)_
- **Package-Level Extraction:**
  - `core`: Lowest-level utility layer.
  - `editor`: Central Architectural Hub (highest out-degree).
  - Test packages are correctly isolated.

**[Speaker Notes]**
_"To avoid a messy diagram, we extracted the architecture at the package level. We can see a generally layered structure where the 'core' acts as the base. However, the visual density confirms that the 'editor' package acts as a massive, highly coupled central hub."_

---

### **Slide 14: Architectural Smell: Cyclic Dependency**

**[Slide Content]**

- **The Smell:** Cyclic dependency between `editor` and `ui.layout`.
- **Dependencies:** 105 in one direction, 12 in reverse.
- **Consequence:** Prevents independent compilation and testing.

**[Speaker Notes]**
_"The red arrow in our graph reveals a critical Architectural Smell: a Cyclic Dependency. The editor depends on the layout, and the layout calls back to the editor. In a real-world company, this means the team working on the UI cannot compile or test their code without the Editor team's code. It completely blocks independent deployment."_

---

### **Slide 15: Overall Evaluation**

**[Slide Content]**

- **Consistent "God Class" Pattern:** Centralization of responsibilities harms testability and modifiability.
- **Low Cohesion:** Widespread LCOM violations indicate poor encapsulation.
- **Cyclic Dependency:** Breaks the layered architecture at the module level.
- **Summary:** Functional software, but high technical debt concentrated in specific hotspots.

**[Speaker Notes]**
_"To summarize our T1 analysis: KNIME Workbench is a mature application, but it carries a heavy burden of Technical Debt. This debt is not scattered randomly; it is highly concentrated in a few massive God Classes and a specific cyclic package dependency."_

---

### **Slide 16: Recommendations (Bridge to D2)**

**[Slide Content]**

- **1. Decompose God Classes:** Break down `WorkflowEditor` to solve LOC, WMC, and LCOM issues.
- **2. Interface Segregation:** Use interfaces to reduce CBO (Coupling).
- **3. Break the Cycle:** Apply Dependency Inversion (DIP) to separate `editor` and `ui.layout`.

**[Speaker Notes]**
_"How do we fix this? These recommendations will form the basis of our D2 Conceptual Architecture report. By applying the Interface Segregation Principle, we will lower the coupling. By using Dependency Inversion, we will break the cycle. Thank you for listening."_

---

### **Slide 17: Team Allocation & Q&A**

**[Slide Content]**

- **Mert Ergün:** OSS selection, Tool setup, Q1, Q2, Graph generation.
- **Tahacan Çelebi:** GQM tree design, Q3 analysis, Outlier identification.
- **Serhat Akbulut:** Q4 analysis, Package aggregation, Overall evaluation.
- **References:** Chidamber & Kemerer (1994), Basili (1994), KNIME GitHub.

**[Speaker Notes]**
_"Here is our team's task distribution and our references. We are now open to any questions you might have regarding our methodology or findings."_
