"use strict";(globalThis.webpackChunkclient=globalThis.webpackChunkclient||[]).push([[7793],{67793:(e,n,t)=>{t.d(n,{aX:()=>b,hm:()=>U}),t(95850),t(73631),t(71399);var o,a,l=t(69162),i=t(99713),r=t(82283),d=t(78275),s=t(62769),c=t(46953),p=t(72845),u=t(99561),m=t(48213),g=t(2284),h=t(17306),F=t(21552),S=t(19030),k=t(90705);(o||(o={})).English="en",function(e){e[e.False=0]="False",e[e.True=1]="True"}(a||(a={}));let v=e=>e?1:0,y=k.i5.match({All:(0,m.a9)(c.YP),Landscape:(0,m.a9)(c.G(0)),Portrait:(0,m.a9)(c.G(1))}),P=k.KM.match({Relevant:(0,m.a9)(0),Latest:(0,m.a9)(2),Curated:(0,m.a9)(4)}),f=k.Cz.match({All:(0,m.a9)(0),Plus:(0,m.a9)(1),Free:(0,m.a9)(2)}),I=(0,S.FH)()(["version","appId","ad","fromApi","placement","position","deckId","keywords","language","safety","orientation","orderBy","color","timestamp","license"]),C=(0,m.ls)(e=>({version:3,appId:1207,ad:"ad"in e?e.ad:v(!1),fromApi:v(!1),placement:e.placement,position:"position"in e?e.position:null,deckId:"deckId"in e?e.deckId:null,keywords:"keywords"in e?e.keywords:null,language:o.English,safety:"safety"in e?e.safety:v(!1),orientation:"orientation"in e?e.orientation:null,orderBy:"orderBy"in e?e.orderBy:null,license:"license"in e?e.license:null,color:null,timestamp:null}),e=>(0,m.zG)(I,h.UID(n=>e[n]),h.UID(e=>{if(null===e)return"";switch(typeof e){case"string":return e;case"number":return F.xS(e)}}),h.v_p("|"))),U=r.ug.Union.match({CollectionThumbnail:e=>{let{id:n}=e;return{placement:r.ug.DeckFeed.CollectionThumbnail,deckId:n}},Photo:e=>{let{ad:n}=e;return{placement:r.ug.SponsoredContent.PhotoPage,ad:v(n)}},PhotoOfTheDay:e=>{let{ad:n}=e;return{placement:r.ug.SponsoredContent.PhotoOfTheDay,ad:v(n)}},Feed:e=>{let[n,t]=e;return(0,m.zG)(t,r.ug.FeedUnion.match({Editorial:e=>{let{ad:t}=e;return{placement:r.ug.SponsoredFeed.Editorial,ad:v(t),position:(0,r.cv)(n)}},Collection:e=>{let{id:t}=e;return{placement:r.ug.DeckFeed.Collection,deckId:t,position:(0,r.cv)(n)}},Following:()=>({placement:r.ug.StandardFeed.Following,position:(0,r.cv)(n)}),PlusFeed:()=>({placement:r.ug.StandardFeed.PlusFeed,position:(0,r.cv)(n)}),RelatedPhotos:()=>({placement:r.ug.StandardFeed.RelatedPhotos,position:(0,r.cv)(n)}),Topic:e=>{let{id:t}=e;return{placement:r.ug.DeckFeed.Topic,deckId:(0,s.Vv)(t),position:(0,r.cv)(n)}},UserLikes:()=>({placement:r.ug.StandardFeed.UserLikes,position:(0,r.cv)(n)}),UserProfile:()=>({placement:r.ug.StandardFeed.UserProfile,position:(0,r.cv)(n)}),UserStats:()=>({placement:r.ug.StandardFeed.UserStats,position:(0,r.cv)(n)}),VisualSearch:()=>({placement:r.ug.StandardFeed.VisualSearch,position:(0,r.cv)(n)}),Search:e=>{let{keywords:t,orientation:o,orderBy:a,safety:l,ad:i,license:d}=e;return{placement:r.ug.SponsoredFeed.KeywordSearch,ad:v(i),position:(0,r.cv)(n),keywords:encodeURIComponent(t),safety:v(l),orderBy:P(a),orientation:(0,m.zG)(o,y,c.WG),license:f(d)}},Explore:()=>({placement:r.ug.StandardFeed.Explore,position:(0,r.cv)(n)}),PhotoInSameSeries:()=>({placement:r.ug.StandardFeed.PhotoInSameSeries,position:(0,r.cv)(n)})}))}}),w=(0,m.ls)(C,g.QA.encode),T=e=>i.fB((0,m.ls)(p.P8(u.EG(d.Cr)),p.aV(d.Cr)(e))),E=(0,m.RR)(e=>l.sF.forEachImgixUrl(T(e))),b=e=>(0,m.ls)(w,E(e))}}]);