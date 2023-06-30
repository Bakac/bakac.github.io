import{_ as p}from"./ColourBar.vue_vue_type_style_index_0_lang-dd4e231c.js";import{d as u,u as d,c as s,a,t as _,b as l,e as o,F as m,o as e,f as y,g as k}from"./index-074a1f72.js";const v=a("h2",{class:"center"},"情侶互動風格",-1),x=a("p",null,"透過剛才完成的問卷，我們分析了你在親密關係中的一些互動傾向。",-1),f=a("h3",null,"關係逃避",-1),F={class:"level"},B={key:0},g={key:1},C={key:2},$=a("h3",null,"關係焦慮",-1),R={class:"level"},V={key:3},w={key:4},N={key:5},S=a("h3",null,"對伴侶需求的回應度",-1),P={class:"level"},b={class:"level"},j={key:6},z={key:7},D={key:8},E={key:9},I={key:10},J={key:11},O=a("h3",null,"衝突解決風格",-1),q={key:12},A={key:13},G={key:14},H={key:15},K=u({__name:"PartnerResults",props:["states"],setup(i){const t=i;d();const n=["低","中","高"],c=["競爭","合作","逃避","迎合"],r=[...new Set([t.states.crsi_s_max,t.states.crsi_s_secmax,t.states.crsi_p_max,t.states.crsi_p_secmax])];return(h,U)=>(e(),s(m,null,[v,x,f,a("p",F,"你的關係逃避水平為："+_(n[t.states.atav_state]),1),l(p,{percent:t.states.atav_percent,colour:"#FFB3C1"},null,8,["percent"]),t.states.atav_state==0?(e(),s("p",B,"你通常能夠較輕鬆地與伴侶建立親密連結，並與他分享自己的想法和感受，不容易回避他的情感需求。這代表你對情感有較高的接納度，願意在親密關係中投入更多情感和關懷，並感到舒適。")):t.states.atav_state==1?(e(),s("p",g,"你與伴侶建立親密連結時可能有些困難，有時會回避他的情感需求，與他分享自己的想法和感受或讓你感到不自在。這代表你在親密關係中有些逃避的傾向，有時會故意疏遠對方，可能會讓他感到自己的需要不獲滿足。")):t.states.atav_state==2?(e(),s("p",C,"你與伴侶建立親密連結時有些困難，會回避他的情感需求，和他分享自己的想法和感受也讓你感到極度不自在。這代表你在親密關係中有逃避的傾向，有時會故意疏遠對方，令你們的關係受到挑戰。")):o("",!0),$,a("p",R,"你的關係逃避水平為："+_(n[t.states.atan_state]),1),l(p,{percent:t.states.atan_percent,colour:"#FFB3C1"},null,8,["percent"]),t.states.atan_state==0?(e(),s("p",V,"在伴侶的關係中，你通常都感到安全和自信，也充分信任自己的伴侶。你能夠於自己的情感需求和伴侶的個人空間中取得平衡，不會讓對方感到不適。")):t.states.atan_state==1?(e(),s("p",w,"在伴侶的關係中，你可能會有一定程度的擔憂、焦慮和不安感，或擔心伴侶會離開自己。你可能會對於他的接納和關注感到特別敏感，並且可能會有一些需要被滿足的情感需求。")):t.states.atan_state==2?(e(),s("p",N,"在伴侶的關係中，你很擔憂、焦慮和不安；需要伴侶經常關注和陪伴自己，害怕被他拋棄。這有時可能讓對方感到不舒服，或令你們的關係受到挑戰。")):o("",!0),S,a("p",P,"你的對伴侶需求的回應度水平為："+_(n[t.states.stop_state]),1),l(p,{percent:t.states.stop_percent,colour:"#FFB3C1"},null,8,["percent"]),a("p",b,"你感知伴侶的回應度水平為："+_(n[t.states.ptos_state]),1),l(p,{percent:t.states.ptos_percent,colour:"#FFB3C1"},null,8,["percent"]),t.states.stop_state==0?(e(),s("p",j,"在與伴侶互動時，你可能較少展現積極主動的回應。你有時對伴侶的情感和需求不太敏感，可能需要更多的時間和提示才能意識到他的需要。這可能導致伴侶感到被忽視或不被重視，影響雙方的關係。")):t.states.stop_state==1?(e(),s("p",z,"在與伴侶互動時，你有時能夠展現積極的回應，但有時可能稍微猶豫或不一致。你對伴侶的情感和需求有一定的敏感度，但在某些情況下可能需要更多的時間來回應或理解。這可能在關係中造成一些不確定性或疑慮。")):t.states.stop_state==2?(e(),s("p",D,"你與伴侶互動時，通常表現出積極、關切且敏銳地回應。你可能對於伴侶的情感和需求非常敏感，願意支持、關懷和理解他。")):o("",!0),t.states.ptos_state==0?(e(),s("p",E,"同時，你的伴侶在情感和需求上對你的回應有限，可能還有很大的改進空間。你可能感到伴侶對你的關心和支持不足，未能滿足你的情感需求和感到被忽視。")):t.states.ptos_state==1?(e(),s("p",I,"同時，你的伴侶對你的情感和需求的一定程度回應，但可能還有一些改善的空間。你可能感到伴侶對你的關心和支持有時不夠一致，導致你在情感上有一些疑慮和不安。")):t.states.ptos_state==2?(e(),s("p",J,"同時，伴侶對你的情感和需求非常敏感，通常能積極、迅速地回應。你感到伴侶理解和重視你，也因此有安全感。")):o("",!0),O,a("p",null,"你較常用的解決衝突的方法為「"+_(c[t.states.crsi_s_max])+"」和「"+_(c[t.states.crsi_s_secmax])+"」，而你伴侶較常用的解決衝突的方法為「"+_(c[t.states.crsi_p_max])+"」和「"+_(c[t.states.crsi_p_secmax])+"」。",1),r.includes(0)?(e(),s("p",q,"「競爭」強調自我利益和權力。這意味著在衝突發生時，你（伴侶）可能會堅持自己的立場，追求個人的目標和需求，並傾向於使用競爭和爭勝的策略排解衝突。這種方式可能會造成對立和敵對情緒，傷害雙方關係。")):o("",!0),r.includes(1)?(e(),s("p",A,"「合作」強調雙方的平等和彼此的需求。這意味著在衝突發生時，你（伴侶）會努力尋求雙方都能接受的解決方案，願意投入時間和精力，與對方一起探索解決辦法，並願意做出某些妥協來維護關係的和諧。")):o("",!0),r.includes(2)?(e(),s("p",G,"「逃避」著重於避免或延遲衝突的發生。這意味著衝突發生時，你（伴侶）可能會選擇不積極參與，避免討論困難的議題以防有進一步衝突。然而，這種方式可能無法真正解決問題，並可能導致加深溝通的隔閡。")):o("",!0),r.includes(3)?(e(),s("p",H,"「迎合」表示完全順從伴侶的意願而忽略自己的需求和意見。這意味著在衝突發生時，你（伴侶）可能傾向於盲目地迎合對方的意願而犧牲個人的利益，長遠可能導致內心有所不滿。")):o("",!0)],64))}}),L={class:"pink"},M={class:"wrapper-horizontal"},Q=a("h2",null,"情侶互動風格自我評估",-1),T={class:"survey-box"},Y=u({__name:"PartnerResultsView",setup(i){const t=d();y();let n,c=localStorage.getItem("partner_results");return c!=null?n=JSON.parse(c):t.replace("/partner"),(r,h)=>(e(),s("main",L,[a("section",M,[Q,a("div",T,[l(K,{states:k(n)},null,8,["states"])])])]))}});export{Y as default};
