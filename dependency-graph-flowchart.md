flowchart LR
    subgraph knime-workbench ["knime-workbench"]
        
        %% --- HİYERARŞİK KATMANLAR ---
        
        subgraph Layer1 ["Katman 1 (Giriş ve Testler)"]
            N1[org.knime.workbench.editor.svgexport]
            N2[org.knime.workbench.editor.tests]
            N3[org.knime.workbench.workflowcoach]
            N9[org.knime.workbench.explorer.view.tests]
            N14[org.knime.workbench.repository.tests]
            
            %% Bağımsız (İzole) Modüller de bu katmanda dursun
            N4[org.knime.features.explorer.view]
            N5[pom.xml]
            N6[org.knime.update.workbench]
            N7[org.knime.workbench.ui.browser]
            N8[org.knime.features.workbench]
        end

        subgraph Layer2 ["Katman 2 (Editör & Görünümler)"]
            N11[org.knime.workbench.editor]
            N10[org.knime.workbench.explorer.view]
        end

        subgraph Layer3 ["Katman 3 (Arayüz & Düzen)"]
            N13[org.knime.workbench.ui]
            N12[org.knime.workbench.ui.layout]
        end

        subgraph Layer4 ["Katman 4 (Repository & Çekirdek)"]
            N15[org.knime.workbench.repository]
            N16[org.knime.workbench.core]
        end

        %% --- BAĞIMLILIK İLİŞKİLERİ VE AĞIRLIKLAR ---
        
        N1 -->|7| N16
        N1 -->|27| N11

        N2 -->|8| N11
        
        N3 -->|6| N11
        N3 -->|16| N15
        N3 -->|24| N16
        
        N9 -->|56| N10
        
        N10 -->|173| N16
        N10 -->|106| N13
        N10 -->|12| N15
        
        N11 -->|358| N10
        N11 -->|286| N13
        N11 -->|362| N15
        N11 -->|353| N16
        N11 -->|"12 / 105"| N12
        
        N12 -->|9| N16
        
        N13 -->|97| N15
        N13 -->|90| N16
        
        N14 -->|135| N15
        
        N15 -->|37| N16

        %% Kırmızı Ok Vurgusu (0'dan başlayarak sayıldığında N11 -> N12 bağımlılığı 14. index'tir)
        linkStyle 14 stroke:red,stroke-width:2px,color:red;
    end