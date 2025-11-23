'use strict';
// ==============================
// ① ここだけ編集すればOKゾーン
// ==============================

/**
 * カテゴリとリンクのデータ
 * ・URLを変えたい → url を変更
 * ・タイトルを変えたい → title を変更
 * ・説明文を変えたい → description を変更
 * ・新しいリンクを追加 → items にオブジェクトを追加
 * ・新しいカテゴリを追加 → この配列にオブジェクトを追加
 */
const linkData = [
                    {
                                        id: "simulator",
                                        label: "シミュレーター",
                                        emoji: "🧮",
                                        items: [
                                          {
                                            title: "📉 インフレ年収シミュレーター",
                                            description: "インフレ率と昇給率を入れて将来の手取りを確認",
                                            url: "https://kouki090572.github.io/inflation/"
                                          },
                                          {
                                            title: "📉 株式暴落シミュレーター",
                                            description: "リーマンショック級の下落を想定してチェック",
                                            url: "https://kouki090572.github.io/crash_strategy/"
                                          },
                                          {
                                            title: "💰 積立シミュレーター",
                                            description: "毎月いくら・何％で・何年運用したらどうなる？",
                                            url: "https://www.fsa.go.jp/policy/nisa2/tsumitate-simulator/"
                                          },
                                                            {
                                                              title: "📉 固定費見直しシミュレーター",
                                                              description: "現在の固定費と削減後の固定費を比較して、長期的な節約効果を確認しましょう",
                                                              url: "https://kouki090572.github.io/fixed_cost/"
                                                            },
                                                            {
                                                                                title: "資産運用シミュレーター",
                                                                                description: "形成後に何年持ちますか？",
                                                                                url: "https://www.smd-am.co.jp/learning/100years_simulator/index.html"
                                                                              },
                                                                              {
                                                                                title: "年金シミュレーター",
                                                                                description: "あなたは年金受給額を把握してますか？",
                                                                                url: "https://nenkin-shisan.mhlw.go.jp/"
                                                                              },
                                                                              {
                                                                                title: "老後資金シミュレーター",
                                                                                description: "老後資金その金額本当にあってますか？",
                                                                                url: "https://kouki090572.github.io/pension_calculation/"
                                                                              },
                                        ]
                                      },
                    {
                      id: "insurance",
                      label: "保険",
                      emoji: "🛡️",
                      items: [
                        {
                          title: "📗 保険の分解",
                          description: "保険マンに手数料を聞きましたか？",
                          url: " https://drive.google.com/file/d/1Sq-LJRqsoP5oaGTIxrjKjraVfr7g8Wfe/view?usp=sharing"
                        },
                        {
                          title: "金融庁が動いた！保険業界の実情",
                          description: "実際に金融庁が指摘・処分した事例から見る、「知らずに加入していたら危険な仕組み」",
                          url: "https://drive.google.com/file/d/12HW3M5mGd_4jn58sMciFleWtdLPxXRZM/view?usp=sharing"
                        },
                        {
                          title: "⚖️ 貯蓄型保険は解約した方がいい？",
                          description: "元プルデンシャル生命が言う言葉",
                          url: "https://youtu.be/13wPC5qeM0A?si=oI2q-U4RwwXmhZI3"
                        },
                        {
                                        title: "⚖️ 貯蓄型保険は解約のための動画",
                                        description: "保険マンは止める可能性が",
                                        url: "https://youtu.be/13wPC5qeM0A?si=oI2q-U4RwwXmhZI3"
                                      }
                    ]
                    },
                    {
                      id: "asset",
                      label: "資産の種類",
                      emoji: "📊",
                      items: [
                                        {
                                                            title: "投資の種類は？",
                                                            description: "正解はありません、大事なのは理解です",
                                                            url: "  https://drive.google.com/file/d/1BqEBDj9vjPlJLSkk5ToCk96VKZXr-q3H/view?usp=sharing"
                                                          },
                        {
                          title: "オルカンとは",
                          description: "本当に世界に投資をしていすのか？",
                          url: " https://drive.google.com/file/d/1s_MMLSPrsD1jenW2OFLHdNwaWrW_BajU/view?usp=share_link"
                        },
                        {
                          title: "📈S&P500分散できてる？",
                          description: "500社に分散できてるが…",
                          url: " https://drive.google.com/file/d/1YOiT2wYTAVoF5cDxyu8IEeIsAqygYjsE/view?usp=sharing"
                        },
                        {
                          title: "📐 リスクとリターンの関係",
                          description: "標準偏差・ボラティリティの考え方",
                          url: "https://money-bu-jpx.com/news/article029519/"
                        },
                        {
                                        title: "📐プロがやっているポートフォリオとは？",
                                        description: "これを管理できる人は天才です！",
                                        url: "https://youtu.be/hA-4oMYBtps?si=VMJ5qz-KKz5WssIk"
                                      },
                        {
                                        title: "国債の仕組みとは？",
                                        description: "株式と違いは？",
                                        url: "https://adviser-navi.co.jp/watashi-ifa/column/17178/"
                                      }
                      ]
                    },
                    {
                                        id: "financial_services_agency",
                                        label: "金融庁",
                                        emoji: "🇯🇵",
                                        items: [
                                          {
                                            title: "⚠️金融庁も海外の考え方に…",
                                            description: "だから日本は資産が増えないのか",
                                            url: "https://example.com/crypto-risk"
                                          },
                                          {
                                            title: "文部科学省の学費別調査",
                                            description: "　計算しないと取り返しのとかないことに!",
                                            url: "https://www.fsa.go.jp/common/conference/danwa/commissioner/240311.pdf"
                                          },
                                          {
                                                            title: "ゆうちょ銀行は安心？",
                                                            description: "報道の闇とは？",
                                                            url: "https://dot.asahi.com/articles/-/87775?page=2"
                                                          }
                                        ]
                                      },
                    {
                      id: "education",
                      label: "教育・知識",
                      emoji: "🎓",
                      items: [
                        {
                          title: "🎓複利とは？",
                          description: "アインシュタインが言う人類最大の発明？",
                          url: "https://fpbranding.co.jp/magazine/compound-interest/"
                        },
                        {
                          title: "🎓ドルコスト平均法とは？",
                          description: "暴落を気にしている人必見！",
                          url: "https://www.nissen-life.co.jp/willnavi/hokennoho/category_15/282.html"
                        },
                        {
                                        title: "🎓イチローは金融でも一流？",
                                        description: "スポーツ選手のほとんどが自己破産？",
                                        url: "https://full-count.jp/2024/12/01/post1663818/"
                                      },
                                      {
                                        title: "🎓複利とは？",
                                        description: "アインシュタインが言う人類最大の発明？",
                                        url: "https://fpbranding.co.jp/magazine/compound-interest/"
                                      },
                                      ,
                                      {
                                        title: "高校生アスリートに金融教育",
                                        description: "バンク・オブ・アメリカ（ＢｏｆＡ）のファイナンシャルアドバイザー（ＦＡ）が学校と手を組むことになった。",
                                        url: "https://www.bloomberg.co.jp/news/articles/2024-07-25/SH6OPZT0G1KW00"
                                      },
                                      {
                                        title: "みずほ銀行も金融教育へ",
                                        description: "その価値とは？",
                                        url: "https://prtimes.jp/main/html/rd/p/000000157.000069194.html"
                                      },
                                      {
                                        title: "⚖️ 年金だけで生活費足りる？",
                                        description: "TBSが放送する現実",
                                        url: "https://www.y！utube.com/watch?v=pYg-053SG9Y"
                                      },
                                      {
                                        title: "⚖️ お金は臆病！？",
                                        description: "アパホテル社長の元谷さんの考えとは？",
                                        url: "https://kirarinasset.com/money-is-coward/#i-4"
                                      },
                                      {
                                        title: "あなたの理想の生活は？",
                                        description: "お金を貰える四つの働き方とは？",
                                        url: "https://workcreation.co.jp/cashflow-quadrant/"
                                      },
                                      {
                                        title: "実際のNISAの積み立て期間は？",
                                        description: "なぜ長期がいいと言われているのに…",
                                        url: "https://www.nikkei.com/article/DGXZQOFL180MJ0Y5A210C2000000/"
                                      },
                      ]
                    },
                    {
                                        id: "knowledge",
                                        label: "法則",
                                        emoji: "🪙",
                                        items: [
                                          {
                                            title: "🪙 ピケティの法則",
                                            description: "労働階級の人は、資本主義において、働くだけでは金持ちになれない",
                                            url: "https://www.micromaru.com/piketty-law/"
                                          },
                                          {
                                            title: "パーキンソンの法則",
                                            description: "人はあればあるほど使ってしまう…",
                                            url: "https://www.bk.mufg.jp/column/shisan_unyo/0016.html"
                                          },
                                        ]
                                      },
                                      {
                                        id: "crypto",
                                        label: "暗号通貨",
                                        emoji: "🪙",
                                        items: [
                                          {
                                            title: "🪙 ビットコインの仕組み",
                                            description: "ビットコインとは？",
                                            url: "https://drive.google.com/file/d/1VaeZdBB0cAjG4ap-zRtIPt7ZbmBNODu6/view?usp=sharing"
                                          },
                                          {
                                            title: "🧮ビットコインの相続税",
                                            description: "暗号資産で資産形成を考えてるかたは知って損はない！",
                                            url: "https://souzoku.asahi.com/article/15700519"
                                          }
                                        ]
                                      },
                                      {
                                        id: "IFA",
                                        label: "IFA",
                                        emoji: "💲",
                                        items: [
                                          {
                                            title: "🪙プロの手数料とは？",
                                            description: "報酬の仕組とは？",
                                            url: "https://fa.rakuten-sec.co.jp/column/20250404-04/"
                                          },
                                          {
                                            title: "実際の販売手数料は？",
                                            description: "楽天証券の中身とは？",
                                            url: "https://www.rakuten-sec.co.jp/web/ifa/commission/commission.html"
                                          }
                                        ]
                                      }, 
                                      {
                                        id: "inheritance",
                                        label: "相続",
                                        emoji: "👓",
                                        items: [
                                          {
                                            title: "NISAの相続先は？",
                                            description: "あなたは決めてますか？",
                                            url: "https://go.sbisec.co.jp/consult/inheritance_column/column_detail_8871.html"
                                          }
                                        ]
                                      },  
                                      {
                                        id: "marriage",
                                        label: "結婚・家計",
                                        emoji: "💐",
                                        items: [
                                          {
                                            title: "資産形成しないと対象外？",
                                            description: "パートナーは計画性ありますか？",
                                            url: "https://www.jibunbank.co.jp/corporate/news/2021/0610_01.html"
                                          },
                                          {
                                                            title: "家計はなぜ破綻するのか？",
                                                            description: "日本の家計破綻リスクの現状",
                                                            url: "https://www.nli-research.co.jp/report/detail/id=81960?pno=2&site=nli"
                                                          }
                                        ]
                                      },  
                  ];
                  
                  // ==============================
                  // ② 以下は原則触らなくてOKゾーン
                  // ==============================
                  
                  document.addEventListener("DOMContentLoaded", () => {
                    const filterNav = document.getElementById("filterNav");
                    const mainContent = document.getElementById("mainContent");
                  
                    // --- フィルターボタンを作成 ---
                    // 「すべて」ボタン
                    const allBtn = document.createElement("button");
                    allBtn.textContent = "すべて";
                    allBtn.className = "filter-btn active";
                    allBtn.dataset.filter = "all";
                    filterNav.appendChild(allBtn);
                  
                    // 各カテゴリボタン
                    linkData.forEach((category) => {
                      const btn = document.createElement("button");
                      btn.textContent = category.label;
                      btn.className = "filter-btn";
                      btn.dataset.filter = category.id;
                      filterNav.appendChild(btn);
                    });
                  
                    // --- カテゴリーとリンク一覧を作成 ---
                    linkData.forEach((category) => {
                      const section = document.createElement("section");
                      section.className = "category";
                      section.dataset.category = category.id;
                  
                      const h2 = document.createElement("h2");
                      h2.className = "category-title";
                      h2.textContent = `${category.emoji} ${category.label}`;
                      section.appendChild(h2);
                  
                      const list = document.createElement("div");
                      list.className = "link-list";
                  
                      category.items.forEach((item) => {
                        const a = document.createElement("a");
                        a.className = "link-item";
                        a.href = item.url;
                        a.target = "_blank";
                        a.rel = "noopener noreferrer";
                  
                        const titleSpan = document.createElement("span");
                        titleSpan.textContent = item.title;
                  
                        const desc = document.createElement("small");
                        desc.textContent = item.description;
                  
                        a.appendChild(titleSpan);
                        a.appendChild(desc);
                        list.appendChild(a);
                      });
                  
                      section.appendChild(list);
                      mainContent.appendChild(section);
                    });
                  
                    // --- フィルタ機能 ---
                    const filterButtons = document.querySelectorAll(".filter-btn");
                    const categories = document.querySelectorAll(".category");
                  
                    filterButtons.forEach((btn) => {
                      btn.addEventListener("click", () => {
                        const filter = btn.dataset.filter;
                  
                        // ボタンの見た目を更新
                        filterButtons.forEach((b) => b.classList.remove("active"));
                        btn.classList.add("active");
                  
                        // カテゴリーの表示・非表示
                        categories.forEach((section) => {
                          const cat = section.dataset.category;
                  
                          if (filter === "all" || filter === cat) {
                            section.classList.remove("hidden");
                          } else {
                            section.classList.add("hidden");
                          }
                        });
                      });
                    });
                  
                    // クリックログ（あとでGA入れるならここ）
                    const links = document.querySelectorAll(".link-item");
                    links.forEach((link) => {
                      link.addEventListener("click", () => {
                        console.log("リンククリック:", link.href);
                      });
                    });
                  });