"use strict";(()=>{var e={};e.id=231,e.ids=[231],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},83193:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>c,originalPathname:()=>k,requestAsyncStorage:()=>l,routeModule:()=>n,serverHooks:()=>m,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>v});var i={};t.r(i),t.d(i,{POST:()=>POST}),t(78976);var a=t(10884),o=t(16132),s=t(33188),u=t(87938),p=t(95798);async function POST(e,{params:{movieId:r}}){let t=await (0,u.getToken)({req:e});if(!t)return p.Z.json({message:"unauthorized"},{status:401});let i=await s.Z.user.update({where:{email:t.email},data:{movieLikes:{create:[{movieId:r}]}}});return p.Z.json(i)}let n=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/like/[movieId]/route",pathname:"/api/like/[movieId]",filename:"route",bundlePath:"app/api/like/[movieId]/route"},resolvedPagePath:"/Users/macbookaboubakar/Documents/Projet-perso/my-movie/src/app/api/like/[movieId]/route.js",nextConfigOutput:"",userland:i}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:m,headerHooks:c,staticGenerationBailout:v}=n,k="/api/like/[movieId]/route"},33188:(e,r,t)=>{t.d(r,{Z:()=>s});let i=require("@prisma/client"),a=global,o=a.prisma||new i.PrismaClient,s=o}};var r=require("../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[126,933,449,938,798],()=>__webpack_exec__(83193));module.exports=t})();