import{d as R,u as E,f as T,r as F,c as m,a as r,t as u,g as t,F as S,i as y,e as d,o as n}from"./index-074a1f72.js";const M={class:"green"},V={class:"wrapper-horizontal"},j=r("h2",null,"家長管教方式自我評估",-1),Q={class:"survey-box"},A={name:"survey"},H={class:"page-progress"},L={class:"instruction"},z=["id"],G={class:"question-prompt"},X=["id","name","min","max"],Y=["id","name","value"],K=["for"],U={class:"flex-box",style:{gap:"10px","margin-top":"64px","padding-bottom":"10px"}},oo=R({__name:"ParentView",setup(W){const v=E(),b=T();let g=[{scale:"Intro",instruction:"這部分的問卷會問及有關於你孩子現時的狀況，以及你的管教方式。如果你的孩子已經長大了，你也可以選擇回想孩子某個成長階段的情況。在開始問卷之前，我們想了解一下你的孩子的基本資料。",questions:[{prompt:"你的孩子現時／當時幾歲？",range:[0,100]},{prompt:"小孩現時／當時的性別",choices:["男","女","其他"]}]},{scale:"SDQ",instruction:"對於下面的各個題目，選取最適合的選項，以不符合、有點符合、完全符合來表明有多適合你的孩子的情況。請根據你的孩子過去六個月／當時的行為來回答。請務必回答每一道題，即使你對某一題不是十分確定。",questions:[{prompt:"能體諒到別人的感受 ",choices:["完全符合","有點符合","不符合"]},{prompt:"不安定、過分活躍、不能長久靜止",choices:["完全符合","有點符合","不符合"]},{prompt:"經常抱怨頭痛、肚子痛或噁心",choices:["完全符合","有點符合","不符合"]},{prompt:"很樂意與別的小孩分享東西(糖果、玩具、筆、等等)",choices:["完全符合","有點符合","不符合"]},{prompt:"經常發脾氣或易怒",choices:["完全符合","有點符合","不符合"]},{prompt:"頗孤獨，比較多自己玩",choices:["完全符合","有點符合","不符合"]},{prompt:"一般來說比較順從，通常是成年人要求要做的都肯做",choices:["完全符合","有點符合","不符合"]},{prompt:"有很多擔憂，經常表現出憂慮",choices:["完全符合","有點符合","不符合"]},{prompt:"如果有人受傷、沮喪 或是生病，都很樂意提供幫助",choices:["完全符合","有點符合","不符合"]},{prompt:"當坐著時，會持續不斷地擺弄手腳或扭動身子",choices:["完全符合","有點符合","不符合"]},{prompt:"至少有一個好朋友",choices:["完全符合","有點符合","不符合"]},{prompt:"經常與別的小孩吵架或欺負他們",choices:["完全符合","有點符合","不符合"]},{prompt:"經常不高興、情緒低落或哭泣",choices:["完全符合","有點符合","不符合"]},{prompt:"一般來說，受別的小孩所喜歡",choices:["完全符合","有點符合","不符合"]},{prompt:"容易分心，不能全神貫注",choices:["完全符合","有點符合","不符合"]},{prompt:"在新的情況下，會緊張或愛黏人，容易失去信心",choices:["完全符合","有點符合","不符合"]},{prompt:"對年紀小的小孩和善",choices:["完全符合","有點符合","不符合"]},{prompt:"經常撒謊或欺騙",choices:["完全符合","有點符合","不符合"]},{prompt:"受別的小孩作弄或欺負",choices:["完全符合","有點符合","不符合"]},{prompt:"經常自願地幫助別人(父母、老師或其他小孩)",choices:["完全符合","有點符合","不符合"]},{prompt:"做事前會思考",choices:["完全符合","有點符合","不符合"]},{prompt:"從家裡、學校或其他地方偷東西",choices:["完全符合","有點符合","不符合"]},{prompt:"跟成年人相處比跟小孩相處融洽",choices:["完全符合","有點符合","不符合"]},{prompt:"對很多事物感到害怕，容易受驚嚇",choices:["完全符合","有點符合","不符合"]},{prompt:"做事情能做到底，注意力持久",choices:["完全符合","有點符合","不符合"]}]},{scale:"MOPS-S",instruction:"下面描述一些父母對待孩子的行為。請就你自己對待你的孩子的方式，選出符合的程度。",questions:[{prompt:"過度保護孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"用言語傷害孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"過度控制孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"讓孩子覺得自己做什麼都不對。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"忽視孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"嚴格對待孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"反覆無常，難以預期。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"不關心孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"肢體上對孩子動粗。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"不理睬孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"常常放孩子一人。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"會忘掉孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"對孩子冷淡不在意。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"讓孩子覺得有危險。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"讓孩子感到不安全。",choices:["一點也不","有些符合","還算符合","非常符合"]}]},{scale:"MOPS-P",instruction:"下面描述一些父母對待孩子的行為。請就你的伴侶對待你的孩子的方式，選出符合的程度。",questions:[{prompt:"過度保護孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"用言語傷害孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"過度控制孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"讓孩子覺得自己做什麼都不對。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"忽視孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"嚴格對待孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"反覆無常，難以預期。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"不關心孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"肢體上對孩子動粗。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"不理睬孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"常常放孩子一人。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"會忘掉孩子。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"對孩子冷淡不在意。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"讓孩子覺得有危險。",choices:["一點也不","有些符合","還算符合","非常符合"]},{prompt:"讓孩子感到不安全。",choices:["一點也不","有些符合","還算符合","非常符合"]}]},{scale:"PRFQ",instruction:"下面所列的是一系列關於您對孩子行為的感受和反應的陳述。仔細閱讀每一個陳述並確定您同意或不同意的程度。",questions:[{prompt:"只有孩子對我笑的時候我才能確定孩子是喜歡我的。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我總是知道孩子想要什麼。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我喜歡思考孩子的行為和感受以及背後的原因。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"孩子在陌生人面前哭鬧讓我很窘迫。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我完全能讀懂孩子的內心。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我很想知道孩子的想法和感受。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我發現我自己很難主動地和孩子一起玩角色遊戲。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我總是能預測出孩子將要做什麼。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"很多時候我想知道孩子是什麼感受。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"有時候因為孩子生病而阻止了我去做我想要做的事情。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我有時會對孩子的反應做出錯誤的判斷。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我試圖用孩子的眼光來看待各種情況。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"當我的孩子胡攪蠻纏時，他只是想氣我。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我一直很清楚我對孩子所做的一切以及原因。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我盡力去了解孩子不良行為的原因。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"很多時候孩子的行為表現非常令人迷惑，不知道為什麼他會那樣。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我一直很清楚孩子所作所為的原因。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]},{prompt:"我覺得猜測孩子的心理感受是沒有意義的。",choices:["非常同意","大致同意","少部份同意","中立","少部份不同意","大致不同意","非常不同意"]}]},{scale:"PGASP",instruction:"以下句子描述了家長們在日常生活中有時會遇到的情境以及可能會有的反應。在你閱讀每段描述時，請想像該情境發生在你身上，然後指出你有多大可能會有句子所描述的反應。",questions:[{prompt:"晚餐的時候，你的孩子開心地和你分享他/她今天發生的事情，你在想別的事情，漫不經心地回應他/她。他/她看起來悶悶不樂。有多大可能你會覺得自己不應該對孩子的分享不專心？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你的孩子跟你分享他/她的秘密，叮囑你不要告訴別人。你後來在和朋友聊天的時候，把孩子的秘密當成笑話說了出去。有多大可能你會下定決心以後不把孩子的秘密告訴別人？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你知道學校會在節日提早放學，但你想要把自己的事情先辦完，耽誤了接孩子的時間，讓你的孩子獨自等待了很久。有多大可能你會覺得自己真失敗？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你以為孩子在做功課時玩手機遊戲，衝進他/她房間裡責備他/她。你的孩子難過地把手機放在你面前，告訴你手機是用來找做功課的資料，沒有用來玩遊戲。有多大可能你會想快點離開孩子的房間，不要見到他/她？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你在孩子外出時整理他/她的房間，不小心弄壞了他/她準備送給好朋友的禮物。你的孩子回來後誤以為自己弄壞了禮物，感到很難過。有多大可能你會跟孩子承認是自己弄壞了禮物，嘗試修復它？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你的孩子希望你周末帶他/她去好玩的地方，但你更想有自己放鬆的時間。你告訴孩子你有其他的事情必須要去做，孩子聽到後很失落。有多大可能你會覺得當時不該這麼說？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你帶孩子和朋友去餐廳吃飯的時候，誤以為你的孩子把碟打破了，當眾大聲責備他/她。你的朋友跟你解釋說是侍應打破的。有多大可能你會想要跟朋友聊個不停，迴避與孩子相處？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你在給孩子買運動鞋的時候買錯尺碼，鞋子買小了一碼，不合適的鞋子讓他/她在上體育課時磨損了腳。有多大可能你會覺得自己怎麼這麼笨？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你效法其他家長，為孩子報名參加很多補習班，孩子壓力很大，缺少時間休息和做自己喜歡的事。他/她跟你說他/他感到緊張和疲累，晚上開始睡不好。有多大可能你會減少補習班，讓孩子能有更多時間休息和做自己喜歡的事？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你的孩子在房間裡上網課，你直接打開房門並大聲叫孩子吃早餐，打斷了老師的話，這讓你的孩子感到很尷尬。有多大可能你會覺得自己實在太笨？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"今天外面的事情讓你心情不好，回家之後孩子的一點小問題讓你大發雷霆，他/她很害怕。有多大可能你會不想見到孩子？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"新學期初，老師在家長群組裡鼓勵家長晚上抽時間陪孩子做學習相關的趣味練習。你想出了一個可行的計劃，但因為懶惰，最終沒有付諸行動。有多大可能你會後悔沒有把計劃付諸行動？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你被邀請在學校的家長活動裡作為家長代表發言，但由於生活忙碌，你忘記準備講稿，只能臨時草率地說幾句，你的孩子感到很難堪。有多大可能你會不想再跟孩子提這件事？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你早上準備送孩子上學時，發現你昨天沒有把鑰匙放好，你和孩子在家到處搜尋鑰匙耽誤了上學的時間。你的孩子因為遲到，在課堂上被老師責備。有多大可能你會覺得自己真沒用？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你想在孩子生日當天給他/她一個驚喜，卻臨時有急事，來不及準備禮物，也不能陪伴他/她。有多大可能你會在之後給孩子補送一份他/她喜歡的生日禮物？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你之前約好帶孩子參加你和朋友的聚會，但那天你孩子還沒有完成功課，你堅持要他/她去參加聚會。你的孩子回家後因為趕功課而熬夜到很晚，第二天精神不好。有多大可能你會覺得自己不應該堅持要孩子去參加聚會？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你在路上看到你的孩子進入網吧，以為他/她去玩遊戲就嚴厲地責備了他/她。後來你才知道他/她只是去網吧找同學拿東西。有多大可能你會覺得自己太糟糕？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你周末帶孩子去主題公園，剛進主題公園你就從電話收到一個壞消息，之後你在主題公園裡一直悶悶不樂。你的孩子覺得很掃興。有多大可能你會再帶孩子去主題公園，並確保這次不會被其他事情打擾？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你準備了一些利是要在農曆新年期間送給親戚的孩子，某天你在孩子書桌的抽屜裡發現了幾封你的利是，你以為是孩子偷拿了，打算過了農曆新年後責備他/她。晚上你的孩子告訴你說他/她特意收好你掉在門口的利是來還給你。有多大可能你會覺得當時不應該以為是孩子把利是藏了起來？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你帶孩子參加學校旅行，其他家長都為同學們準備了一些禮物或特色零食，但是你卻忘記了。你的孩子感到很難堪。有多大可能你會想在活動結束的時候找個藉口自己離開，不和孩子一起回家？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你最近遇到了麻煩而心情低落，回到家後孩子還要你花時間陪他/她。你從心理上對孩子產生了些不耐煩甚至厭惡的情緒，雖然他/他並未察覺到。有多大可能你會覺得當時對孩子應該要更有耐心？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"老師在家長群組裡發訊息要求參加節目演出的孩子準備款式相同的白鞋，你沒有看到這個訊息，導致你的孩子因為鞋子不合格而不能上台表演，他/她感到很難過。有多大可能你會覺得自己真沒用？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你答應孩子週末帶他/她去離島玩，前一晚你卻失眠，因而不想外出。你以他/她沒有完成功課為理由，取消了離島遊計劃，你的孩子對此悶悶不樂。你有多大可能會在可行的話下個週末帶他/她去離島玩？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你以為你的孩子因為缺乏自信和膽量才不敢參加班上的學生代表選舉，嚴厲地批評了他/她一頓。後來你才知道你誤解了孩子，他/她只是不喜歡出風頭。有多大可能你會不想再提這件事？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"搬家的時候有大量的東西要整理收拾，你不小心遺失了你孩子最喜歡的衣服。他/她以為是搬家公司遺失了舊衣服，覺得很難過。有多大可能你會帶孩子去商場挑選一件他/她喜歡的衣服？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你和孩子一起參加學校的親子活動，活動過程中你一直在講一個很重要的電話，沒有認真參與活動，你的孩子覺得很難堪。有多大可能你會覺得自己很失敗？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你的孩子去廁所時將手機放在餐枱上，你拿起手機看了他/她朋友發給他/她的短訊，這被你的孩子當場看到，他/她很生氣。有多大可能你會想盡快離開餐枱，不要跟孩子在一起？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你的孩子提醒過你幾次期末考試那天要提早去學校接他/她，可是你沒有記在日曆上，最後忘記了。他/她那一天成為全班最後一個走的，很不開心。有多大可能你會後悔自己沒有把這件事記在日曆上？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你的孩子在節日送給你他/她精心挑選的盆栽，因為你忘記澆水，盆栽枯萎了。孩子看著枯萎的植物很難過。有多大可能你會想把盆栽丟掉，不再提起這件事？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你發現家裡貴重的瓷器碎了，以為是你的孩子打破的，狠狠地責駡了他/她。後來才發現是親戚的孩子來家裡玩時打破的。有多大可能你會覺得當時自己不應該立刻責駡孩子？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"在一次家長活動中，你把孩子在家中的生活習慣告訴其他家長。今天放學回來後，孩子說同學知道了他/她在家中的壞習慣，還嘲笑他/她。有多大可能你會覺得自己怎麼這麼愚蠢？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]},{prompt:"你答應過你的孩子會給他/她買一隻寵物作為生日禮物，可是你後來發現養寵物很麻煩。你的孩子今天跟你提起想要的寵物，在你拒絕以後，他/她感到很難過。有多大可能你會給孩子買一份他/她很喜歡的禮物？",choices:["非常可能","有可能","有點可能","一半可能","有點不可能","不可能","非常不可能"]}]},{scale:"CCNES",instruction:"下面是一些你孩子可能遇過的情景，請根據你的反應選符合的程度。",questions:[{prompt:"如果我的孩子對一個好朋友感到生氣或憤怒，我通常會：對處理他生氣或憤怒的情緒感到不舒服和不安",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一個好朋友感到生氣或憤怒，我通常會：鼓勵他表達生氣或憤怒的情緒",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一個好朋友感到生氣或憤怒，我通常會：和他談話，以此來讓他冷靜下來",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一個好朋友感到生氣或憤怒，我通常會：告訴他不要小題大做",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一個好朋友感到生氣或憤怒，我通常會：因為他發脾氣而對他感到生氣或憤怒",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一個好朋友感到生氣或憤怒，我通常會：幫助他想辦法解決問題",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為度過了糟糕的一天而感到情緒低落，我通常會：告訴他，沒有什麼值得難過或悲傷的",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為度過了糟糕的一天而感到情緒低落，我通常會：努力讓他去想生活裡發生的好事",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為度過了糟糕的一天而感到情緒低落，我通常會：傾聽他談論他的感受",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為度過了糟糕的一天而感到情緒低落，我通常會：對他低落的情緒明顯感到不舒服",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為度過了糟糕的一天而感到情緒低落，我通常會：幫助他想辦法解決他的問題",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為度過了糟糕的一天而感到情緒低落，我通常會：叫他不要在家裡垂頭喪氣，馬上收起那張臭臉",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對參加一項活動（例如一個表演或一個體育比賽）感到焦慮，我通常會：幫助他想辦法盡其所能做到最好",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對參加一項活動（例如一個表演或一個體育比賽）感到焦慮，我通常會：因為他感到如此焦慮而大聲呼喝他",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對參加一項活動（例如一個表演或一個體育比賽）感到焦慮，我通常會：幫助他不要東想西想，以此來努力讓他冷靜下來",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對參加一項活動（例如一個表演或一個體育比賽）感到焦慮，我通常會：告訴他不要小題大做",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對參加一項活動（例如一個表演或一個體育比賽）感到焦慮，我通常會：鼓勵他談論其感到焦慮的原因",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對參加一項活動（例如一個表演或一個體育比賽）感到焦慮，我通常會：對處理他的緊張情緒感到焦慮",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為得不到自己很想要的東西而感到生氣或憤怒，我通常會：逗他笑，以此來努力讓他感覺好一些",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為得不到自己很想要的東西而感到生氣或憤怒，我通常會：幫助他想其他辦法來得到他想要的東西",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為得不到自己很想要的東西而感到生氣或憤怒，我通常會：因為他感到如此生氣或憤怒而變得心煩",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為得不到自己很想要的東西而感到生氣或憤怒，我通常會：感到不舒服而不想理睬他",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為得不到自己很想要的東西而感到生氣或憤怒，我通常會：告訴他，如此生氣或憤怒是傻氣",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為得不到自己很想要的東西而感到生氣或憤怒，我通常會：鼓勵他談論他生氣或憤怒的感受",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個朋友傷害了他的感情而感到難過或悲傷，我通常會：對處理他難過或悲傷的情緒感到緊張",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個朋友傷害了他的感情而感到難過或悲傷，我通常會：鼓勵他談論他感到困擾的原因",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個朋友傷害了他的感情而感到難過或悲傷，我通常會：努力讓他開心起來",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個朋友傷害了他的感情而感到難過或悲傷，我通常會：告訴他，事情並不像看起來那麼糟糕",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個朋友傷害了他的感情而感到難過或悲傷，我通常會：因為他沒有把事情控制得更好而對他感到生氣或憤怒",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個朋友傷害了他的感情而感到難過或悲傷，我通常會：幫助他想辦法讓事情變好",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為學校的一些事情而變得焦慮，我通常會：告訴他，他太小題大做了",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為學校的一些事情而變得焦慮，我通常會：對處理他焦慮的情緒感到緊張不安",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為學校的一些事情而變得焦慮，我通常會：因為他沒有把事情處理得更好而對他感到生氣或憤怒",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為學校的一些事情而變得焦慮，我通常會：鼓勵他談論他感到緊張的原因",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為學校的一些事情而變得焦慮，我通常會：幫助他想辦法解決問題",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為學校的一些事情而變得焦慮，我通常會：幫助安慰和舒緩他的焦慮情緒",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一位家人感到生氣或憤怒，我通常會：努力幫助他們解決衝突",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一位家人感到生氣或憤怒，我通常會：威脅要懲罰他",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一位家人感到生氣或憤怒，我通常會：告訴他，他反應過度了",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一位家人感到生氣或憤怒，我通常會：努力幫助他冷靜下來",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一位家人感到生氣或憤怒，我通常會：鼓勵他宣洩生氣或憤怒的情緒",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子對一位家人感到生氣或憤怒，我通常會：變得很不安並迴避他",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為想念一個他很在乎的人而感到難過，我通常會：對跟他待在一起和處理他的情緒感到緊張",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為想念一個他很在乎的人而感到難過，我通常會：鼓勵他談論他對這個人的感情",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為想念一個他很在乎的人而感到難過，我通常會：努力讓他去想其他事",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為想念一個他很在乎的人而感到難過，我通常會：告訴他，這沒有什麼值得難過的",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為想念一個他很在乎的人而感到難過，我通常會：因為他沒有控制好自己的情緒而對他感到心煩",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為想念一個他很在乎的人而感到難過，我通常會：幫助他想辦法和這個他想念的人取得聯繫",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個他不得不面對的社交場合（例如一個聚會）而感到緊張，我通常會：指出他會在這個場合享受很多樂趣，以此來努力讓他冷靜下來",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個他不得不面對的社交場合（例如一個聚會）而感到緊張，我通常會：給他關於在這個場合他可以做什麼的建議",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個他不得不面對的社交場合（例如一個聚會）而感到緊張，我通常會：因為他如此情緒化而對他感到生氣或憤怒",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個他不得不面對的社交場合（例如一個聚會）而感到緊張，我通常會：寧願不理睬他的緊張情緒",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個他不得不面對的社交場合（例如一個聚會）而感到緊張，我通常會：鼓勵他表達他的感受",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]},{prompt:"如果我的孩子因為一個他不得不面對的社交場合（例如一個聚會）而感到緊張，我通常會：告訴他，他完全是在小題大做",choices:["非常可能","很有可能","比較可能","有一點可能","比較不可能","很不可能","非常不可能"]}]},{scale:"Demo",instruction:"最後，我們需要知道你的一些基本資料，才能運算出正確的結果：",questions:[{prompt:"年齡",range:[0,100]},{prompt:"出生時性別",choices:["男","女","其他"]}]}];const _=g.length,I=[...Array(_).keys()];var s=F(I.includes(parseInt(b.params.page.toString())-1)?parseInt(b.params.page.toString()):1);let f=s.value-1;function w(){if(localStorage.getItem("userID")==null){let p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",e="";for(let c=0;c<6;c++){let i=Math.floor(Math.random()*p.length);e+=p[i]}let o=new Date().toISOString().slice(2,10).replace(/-/g,"");localStorage.setItem("userID",o.toString()+"-"+e),localStorage.setItem("create_time",Date.now().toString())}}w();function N(p){const e=document.getElementsByClassName("instruction")[0].getBoundingClientRect().height;let i=p.target.parentElement.nextElementSibling.getBoundingClientRect().top+window.scrollY-e-16;window.scrollTo({top:i,behavior:"smooth"})}function O(){return document.forms[0].reportValidity()}function x(){let p=!0;if(O()){const e=document.forms[0],o=new FormData(e);o.set("s"+s.value+"_timestamp",Date.now().toString()),o.set("s"+s.value+"_scale",g[f].scale);let c={};o.forEach((a,l)=>c[l]=a);const i=JSON.stringify(c);localStorage.setItem("parent_s"+s.value,i)}else p=!1;return p}function C(){if(x()){const p=document.getElementsByClassName("page-progress")[0].getBoundingClientRect().top;window.scrollTo({top:p,behavior:"smooth"}),v.push("/parent/"+(s.value+1))}}function D(p){if(x()){p.target.style.backgroundColor="#BBB";const e="parent",o=localStorage.getItem("userID"),c=JSON.parse(localStorage.getItem("parent_s1")||"{}"),i=JSON.parse(localStorage.getItem("parent_s2")||"{}"),a=JSON.parse(localStorage.getItem("parent_s3")||"{}"),l=JSON.parse(localStorage.getItem("parent_s4")||"{}"),q=JSON.parse(localStorage.getItem("parent_s5")||"{}"),k=JSON.parse(localStorage.getItem("parent_s6")||"{}"),B=JSON.parse(localStorage.getItem("parent_s7")||"{}"),J=JSON.parse(localStorage.getItem("parent_s8")||"{}"),P={section:e,userID:o,...c,...i,...a,...l,...q,...k,...B,...J},h=new XMLHttpRequest;h.open("POST","/api/results.php"),h.setRequestHeader("Content-type","application/json"),h.send(JSON.stringify(P)),h.onload=function(){JSON.parse(h.responseText).status==201&&(window.scrollTo({top:0,behavior:"smooth"}),localStorage.setItem("parent_results",h.responseText),v.push("/parent/results"))}}}return(p,e)=>(n(),m("main",M,[r("section",V,[j,r("div",Q,[r("form",A,[r("span",H,"第 "+u(t(s))+" 頁 ／ 共 "+u(t(_))+" 頁",1),r("span",L,u(t(g)[t(f)].instruction),1),(n(!0),m(S,null,y(t(g)[t(f)].questions,(o,c)=>(n(),m("div",{class:"question-box",id:"s"+t(s)+"_q"+(c+1)},[r("span",G,u(o.prompt),1),"range"in o?(n(),m("input",{key:0,class:"sv-text",type:"number",id:"s"+t(s)+"_q"+(c+1),name:"s"+t(s)+"_q"+(c+1),required:"",min:o.range[0],max:o.range[1]},null,8,X)):d("",!0),"choices"in o?(n(!0),m(S,{key:1},y(o.choices,(i,a)=>(n(),m(S,null,[r("input",{class:"sv-radio",type:"radio",id:"s"+t(s)+"_q"+(c+1)+"_c"+a,name:"s"+t(s)+"_q"+(c+1),value:a,required:"",onClick:e[0]||(e[0]=l=>N(l))},null,8,Y),r("label",{class:"sv-label",for:"s"+t(s)+"_q"+(c+1)+"_c"+a},u(i),9,K)],64))),256)):d("",!0)],8,z))),256)),r("div",null,[r("div",U,[t(s)!=t(_)?(n(),m("label",{key:0,type:"button",class:"sv-label sv-button",onClick:e[1]||(e[1]=o=>C())},"下一頁")):d("",!0),t(s)==t(_)?(n(),m("label",{key:1,type:"button",class:"sv-label sv-button",onClick:e[2]||(e[2]=o=>D(o))},"提交")):d("",!0)])])])])])]))}});export{oo as default};
