(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{496:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ConnectZkSyncWallet",function(){return n(6984)}])},6984:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var c=n(1527);let i=async e=>{window.ethereum||alert("Please install Metamask");let t=await window.ethereum.request({method:"eth_requestAccounts"}),n=await window.ethereum.request({method:"eth_chainId"});"0x118"!=n?alert("Plz switch to zkSync testnet (280)"):e(t[0])};function s(e){let{getZkSyncAddress:t,setZkSyncAddress:n}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("li",{children:(0,c.jsx)("button",{onClick:async()=>i(n),children:t?"".concat(t.slice(0,6),"...").concat(t.slice(-4)):"Connect Metamask    "})})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=496)}),_N_E=e.O()}]);