(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){},153:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},159:function(e,t,a){e.exports=a(463)},165:function(e,t,a){},191:function(e,t){},193:function(e,t){},21:function(e,t,a){"use strict";a.r(t),a.d(t,"MAIN_TRON_API",function(){return n}),a.d(t,"MAIN_FOUNDATION_ADDRESS",function(){return r}),a.d(t,"MAIN_CONTRACT_ADDRESS",function(){return s}),a.d(t,"DONT_ADDRESS",function(){return l}),a.d(t,"MAIN_ABI",function(){return i}),a.d(t,"ENABLE_BITCOIN_TDNS",function(){return c}),a.d(t,"DISABLE_BITCOIN_TDNS",function(){return o}),a.d(t,"BITCOIN_TDNS_CONTRACT",function(){return u}),a.d(t,"BITCOIN_ABI",function(){return d});var n="https://api.trongrid.io",r="TBxZSq8sVYzHq4xVpfRodda3fEgpJMCJgG",s="TKvNjUuaLDpGkuNpiTAQpB4YpWfcvabPwm",l="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",i=[{constant:!0,inputs:[],name:"getBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_feeToRegister",type:"uint256"}],name:"updateFeeToRegister",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"myaddress",type:"address"}],name:"addWallet",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"address"}],name:"changeOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"}],name:"add",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_balance",type:"uint256"}],name:"updateBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"}],name:"getAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getSize",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"mySelfDestruct",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"}],c="Enable Bitcoin Wallet Address",o="Disable Bitcoin Wallet Address ",u="TMVoaBUZg5LnLw3a96JGxdDn44uHt7dgxH",d=[{constant:!0,inputs:[],name:"getBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_feeToRegister",type:"uint256"}],name:"updateFeeToRegister",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_owner",type:"address"}],name:"changeOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_balance",type:"uint256"}],name:"updateBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"}],name:"getAddress",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getSize",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"myadd",type:"string"}],name:"add",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"mySelfDestruct",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"}]},463:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),l=a.n(s),i=a(6),c=a.n(i),o=a(16),u=a(62),d=a(63),m=a(69),p=a(64),h=a(70),f=a(153),b=a.n(f),N=(a(165),"https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/"),y=r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:b.a,alt:"TronLink logo"})),g=function(){window.open(N,"_blank")},v=function(e){var t=e.installed;return void 0!==t&&t?r.a.createElement("div",{className:"tronLink hover",onClick:g},r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"Log in Required"),r.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously-created wallet.")),y):r.a.createElement("div",{className:"tronLink",onClick:g},r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"TronLink Required"),r.a.createElement("p",null,"To use Tron Decentralized Name System (TDNS) you should install TronLink or login . that can be ",r.a.createElement("a",{href:N,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),y)},E=a(154),x=a.n(E),w=a(102),T=a(21),k=T.MAIN_ABI,A=T.MAIN_CONTRACT_ADDRESS,S={tronWeb:!1,contract:!1,setTronWeb:function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.tronWeb=t,this.contract=this.tronWeb.contract(k,A);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getData:function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=w,e.next=4,t;case 4:return e.t1=e.sent,e.t2="https://api.trongrid.io/wallet/gettransactioninfobyid?value="+e.t1,e.next=8,e.t0.get.call(e.t0,e.t2);case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t3=e.catch(0),console.error(e.t3);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),fetchAddress:function(){var e=Object(o.a)(c.a.mark(function e(t){var a,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tronWeb.contract(k,A);case 2:return a=e.sent,e.next=5,a.getAddress(t).call();case 5:return n=e.sent,r=this.tronWeb.address.fromHex(n),e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},I=a(27),O=a.n(I),D=a(25),W=a(48),F=a.n(W),_=a(38),j=a.n(_),M=a(67),C=a.n(M),R=a(68),B=a.n(R),L=a(7),q=a.n(L),V=a(39),H=a.n(V),G=a(40),z=a.n(G),P=(a(117),a(49)),J=a.n(P),X=a(50),U=a.n(X),Y=a(156),Z=a.n(Y),K=a(157),Q=a.n(K),$=a(66),ee=a.n($),te=a(65),ae=a.n(te),ne=a(21),re=Object(D.createMuiTheme)({palette:{primary:j.a},typography:{useNextVariants:!0}}),se=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).validation=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!a.state.errorName;case 2:if(e.t0=e.sent,!e.t0){e.next=5;break}e.t0=""!==a.state.addressName;case 5:if(!e.t0){e.next=8;break}if(34!==a.state.address.length){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,this)})),a.handlerChange=function(){var e=Object(o.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.target.name,e.next="addressName"===e.t0?3:"address"===e.t0?16:19;break;case 3:if(a.setState({addressName:t.target.value}),""===t.target.value){e.next=14;break}return a.setState({addressName:t.target.value.trim()}),a.setState({loadingName:!0}),e.next=9,a.getAddress(t.target.value.toString().trim());case 9:n=e.sent,a.setState({loadingName:!1}),n!==ne.DONT_ADDRESS?a.setState({errorName:!0,isAddressNameFree:!1,helperTextForName:"already taken "}):""===a.state.addressName?a.setState({errorName:!1,helperTextForName:"Name is required "}):a.setState({isAddressNameFree:!0,errorName:!1,helperTextForName:"Name is  free "}),e.next=15;break;case 14:a.setState({errorName:!0,helperTextForName:"Name is required "});case 15:return e.abrupt("break",20);case 16:return a.setState({address:t.target.value}),34===t.target.value.length||0===t.target.value.length?a.setState({errorAddress:!1,helperTextForAddress:""}):a.setState({errorAddress:!0,helperTextForAddress:"Invalid Tron Address"}),e.abrupt("break",20);case 19:return e.abrupt("break",20);case 20:a.validation();case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handlerClick=function(e){switch(e.target.name){case"customInput":break;case"tdnsSend":var t=a.state.addressName.addressName;a.getAddress(t);break;default:return}},a.stateOfAddressNameTextField=function(){return 0===a.state.addressName.length?r.a.createElement(ae.a,null):a.state.loadingName?r.a.createElement(ee.a,{size:26}):a.state.isAddressNameFree?r.a.createElement(H.a,{color:"primary"}):r.a.createElement(z.a,{color:"error"})},a.stateOfAddressTextField=function(){return 34!==a.state.address.length?a.state.errorAddress?r.a.createElement(z.a,{color:"error"}):r.a.createElement(Z.a,{color:"action"}):r.a.createElement(H.a,{color:"primary"})},a.stateOfHashIdTextField=function(){return 64!==a.state.address.length?a.state.errorHashId?r.a.createElement(z.a,{color:"error"}):r.a.createElement(Q.a,{color:"action"}):r.a.createElement(H.a,{color:"primary"})},a.addTNS=Object(o.a)(c.a.mark(function e(){var t,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state,n=t.addressName,r=t.address,S.contract.addWallet(n.trim(),r.trim()).send().then(function(){var e=Object(o.a)(c.a.mark(function e(t){var a,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getData(t);case 2:a=e.sent,n=a.data,setTimeout(function(){"FAILED"===n.result?O()({title:"Wrong Name ",type:"error"}):O()({title:"Added Address",type:"success"})},1e3);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log(e)}).then(function(){});case 2:case"end":return e.stop()}},e,this)})),a.state={tronWeb:{installed:!1,loggedIn:!1},errorName:!1,errorAddress:!1,errorHashId:!1,isAddressNameFree:!0,loadingName:!0,isHashIdValid:!1,isValid:!1,isPaid:!1,address:"",addressName:"",hashId:"",helperTextForHashId:"hash id is required ",helperTextForName:"address name is required",helperTextForAddress:"a valid address is required"},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getAddress",value:function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.fetchAddress(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderWalletInfo",value:function(){var e=this.state.isValid,t=this.props.classes;return r.a.createElement("div",{className:"messageInput"},r.a.createElement(D.MuiThemeProvider,{theme:re},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-6"},r.a.createElement(F.a,{className:"m-2",label:"Name ",name:"addressName",variant:"outlined",placeholder:"Example: JustingSun.btc",required:!0,id:"addressName",fullWidth:!0,onChange:this.handlerChange,value:this.state.addressName,helperText:this.state.helperTextForName,error:this.state.errorName,InputProps:{endAdornment:r.a.createElement(J.a,{variant:"filled",position:"end",name:"customInput"},r.a.createElement(U.a,{color:"inherit"},this.stateOfAddressNameTextField()))}})),r.a.createElement("div",{className:"col-md-8 col-sm-6"},r.a.createElement(F.a,{className:"m-2",name:"address",label:"Address ",variant:"outlined",fullWidth:!0,id:"address",placeholder:"Enter Wallet Address",required:!0,onChange:this.handlerChange,error:this.state.errorAddress,helperText:this.state.helperTextForAddress,value:this.state.address,InputProps:{endAdornment:r.a.createElement(J.a,{variant:"filled",position:"end",name:"customInput"},r.a.createElement(U.a,{color:"inherit"},this.stateOfAddressTextField()))}}))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"m-4  footer"},r.a.createElement(C.a,{name:"tdnsSend",variant:"contained",onClick:this.addTNS,className:"sendButton"+(e?"":" disabled"),size:"small",disabled:!e},r.a.createElement(B.a,{className:q()(t.leftIcon,t.iconSmall)}),"Registration"),r.a.createElement("div",{className:"warning small"})))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"kontainer"},this.renderWalletInfo()))}}]),t}(r.a.Component),le=Object(D.withStyles)(function(e){return{root:{flexGrow:1},button:{margin:e.spacing.unit},leftIcon:{marginRight:e.spacing.unit},rightIcon:{marginLeft:e.spacing.unit},iconSmall:{fontSize:20}}})(se),ie=a(158),ce=a.n(ie),oe=Object(D.createMuiTheme)({palette:{primary:j.a},typography:{useNextVariants:!0}}),ue=0,de=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).validation=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!a.state.errorName;case 2:if(e.t0=e.sent,!e.t0){e.next=5;break}e.t0=""!==a.state.addressName;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}},e,this)})),a.handlerChange=function(){var e=Object(o.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.target.name,e.next="addressName"===e.t0?3:16;break;case 3:if(a.setState({addressName:t.target.value}),""===t.target.value){e.next=14;break}return a.setState({addressName:t.target.value.trim()}),a.setState({loadingName:!0}),e.next=9,a.getAddress(t.target.value.toString().trim());case 9:n=e.sent,a.setState({loadingName:!1}),n!==ne.DONT_ADDRESS?a.setState({errorName:!0,isAddressNameFree:!1,helperTextForName:"Already Taken ",isValid:!1}):""===a.state.addressName?a.setState({errorName:!1,helperTextForName:"Name Is Required "}):a.setState({isAddressNameFree:!0,errorName:!1,helperTextForName:"Name is  Free ",isValid:!0}),e.next=15;break;case 14:a.setState({errorName:!0,helperTextForName:"Name Is Required",isValid:!1});case 15:case 16:return e.abrupt("break",17);case 17:a.validation();case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.myChange=function(e){a.setState({checkedG:e.target.checked}),a.state.checkedG},a.stateOfAddressNameTextField=function(){return 0===a.state.addressName.length?r.a.createElement(ae.a,null):a.state.loadingName?r.a.createElement(ee.a,{size:28}):a.state.isAddressNameFree?r.a.createElement(H.a,{color:"primary"}):r.a.createElement(z.a,{color:"error"})},a.addTNS=Object(o.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.tronWeb.trx.getBalance();case 2:return t=e.sent,n=a.state.addressName,e.next=6,O()({type:"question",title:"Are you sure for Name : "+n+" ? ",text:"Cost of registration is 0 TRX plus 0.27 ~ 0.3 TRX for network fee ",confirmButtonText:"Yes",cancelButtonText:"No",showCancelButton:!0});case 6:if(e.sent.value){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,t;case 11:if(e.t0=e.sent,e.t1=e.t0/1e6,!(e.t1<0)){e.next=16;break}return O()({title:"Insufficient Balance ",text:"you should have at least 11 TRX  ",type:"error"}),e.abrupt("return");case 16:S.contract.add(n.trim()).send({callValue:ue}).then(function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(Object(o.a)(c.a.mark(function e(){var r,s,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=S,e.next=3,t;case 3:return e.t1=e.sent,e.next=6,e.t0.getData.call(e.t0,e.t1);case 6:r=e.sent,s=r.data,l=(s.fee+ue)/1e6,a.setState({fee:l}),setTimeout(Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"FAILED"===s.result?O()({title:"Wrong Name ",type:"error",text:"Fee : "+l+" TRX"}):O()({title:"Added Name",titleText:n,type:"success",text:"Fee : "+l+" TRX",preConfirm:function(){var e=Object(o.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({afterClick:!0}),t=a.state.balance-(s.fee+ue),a.setState({balance:t});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),a.setState({addressName:"",isValid:!1,afterClick:!1});case 2:case"end":return e.stop()}},e,this)})),100);case 11:case"end":return e.stop()}},e,this)})),2e3);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log(e)}).then(function(){});case 17:case"end":return e.stop()}},e,this)})),a.renderTDNSForm=function(){return!1===!a.state.checkedG?r.a.createElement(le,null):a.renderWalletInfo()},a.state={tronWeb:{installed:!1,loggedIn:!1},errorName:!1,isAddressNameFree:!0,loadingName:!0,isValid:!1,addressName:"",helperTextForName:"Name Is Required >> Note :Name is case sensitive.",balance:0,placeHolder:"",afterClick:!1,fee:0,checkedG:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark(function e(){var t,a=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){var t={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(t.installed)return a.setState({tronWeb:t}),e();var n=0,r=setInterval(function(){return n>=10?(window.TronWeb=new x.a(ne.MAIN_TRON_API,ne.MAIN_TRON_API,ne.MAIN_TRON_API),a.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),e()):(t.installed=!!window.tronWeb,t.loggedIn=window.tronWeb&&window.tronWeb.ready,t.installed?(a.setState({tronWeb:t}),void e()):n++)},200)});case 2:return this.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex(ne.MAIN_FOUNDATION_ADDRESS),base58:ne.MAIN_FOUNDATION_ADDRESS},window.tronWeb.on("addressChanged",function(){a.state.tronWeb.loggedIn||a.setState({tronWeb:{installed:!0,loggedIn:!0}})})),S.setTronWeb(window.tronWeb),e.next=6,S.tronWeb.trx.getAccount();case 6:return t=e.sent.address,e.t0=this,e.next=10,S.tronWeb.trx.getBalance();case 10:e.t1=e.sent,e.t2=S.tronWeb.address.fromHex(t),e.t3={balance:e.t1,placeHolder:e.t2},e.t0.setState.call(e.t0,e.t3);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getAddress",value:function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.fetchAddress(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderWalletInfo",value:function(){var e=this.state.isValid,t=this.props.classes;return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement("div",{className:"messageInput"},r.a.createElement(D.MuiThemeProvider,{theme:oe},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-6 "},r.a.createElement(F.a,{className:"m-2",label:"Name ",name:"addressName",variant:"outlined",placeholder:"JustinSun.tron is differ from justinsun.tron",required:!0,id:"addressName",fullWidth:!0,onChange:this.handlerChange,value:this.state.addressName,helperText:this.state.helperTextForName,error:this.state.errorName,InputProps:{endAdornment:r.a.createElement(J.a,{variant:"standard",position:"end",name:"customInput","aria-setsize":28},r.a.createElement(U.a,{color:"inherit"},this.stateOfAddressNameTextField()))}})),r.a.createElement("div",{className:"col-md-6 col-sm-6  "})))),r.a.createElement("hr",null),r.a.createElement("small",{className:" m-4 footer"},r.a.createElement(C.a,{name:"tdnsSend",variant:"contained",onClick:this.addTNS,className:"sendButton "+(e?"":" disabled"),size:"small",disabled:!e},r.a.createElement(B.a,{className:q()(t.leftIcon,t.iconSmall)}),"Register"),r.a.createElement("h6",{className:"text-primary ml-2  text-danger"},r.a.createElement("small",null,"Name is case sensitive. it means JustinSun is differ with justinsun")))):r.a.createElement(v,{installed:!0}):r.a.createElement(v,null)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",{className:"kontainer"},r.a.createElement("div",{className:"header white"},r.a.createElement("a",{href:"https://tronwatch.market",target:"_blank",rel:"noopener noreferrer"}),r.a.createElement("p",{className:"text-muted"},r.a.createElement("b",null," ",r.a.createElement("span",{className:"text-danger"},"Tron")," Decentralized Name System ( ",r.a.createElement("span",{className:"text-danger"},"T"),r.a.createElement("small",{className:"small"},"DNS"),") "),r.a.createElement("br",null),r.a.createElement("span",{className:"text-danger"},"T"),r.a.createElement("small",{className:"small"},"DNS"),"is a DApp which allows you assign a unique, easy, memorable,readable name to your wallet address.",r.a.createElement("br",null),r.a.createElement("small",{className:"text-info "}," For example : justinsun.tron = TXmVpin5vq5gdZsciyyjdZgKRUju4st1wM"),r.a.createElement("br",null),r.a.createElement("small",{className:"text-primary "}," then you can use ",r.a.createElement("b",{className:"text-danger"},"justinsun.tron")," in send form on ",r.a.createElement("a",{href:"https://tronwallet.network"},r.a.createElement("b",{className:"text-danger"},"TronWallet "))," instead of wallet address ."),r.a.createElement("br",null))),r.a.createElement("label",null,r.a.createElement(ce.a,{onChange:this.myChange,value:"checkedG",checked:this.state.checkedG,classes:{root:e.checkBoxRoot,checked:e.checked}})," ",this.state.checkedG?ne.DISABLE_BITCOIN_TDNS:ne.ENABLE_BITCOIN_TDNS),this.renderTDNSForm(),r.a.createElement("div",{className:"header white p-2"},r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"col-md-6 text-muted text-justified small"},r.a.createElement("b",null," How to use ",r.a.createElement("span",{className:"text-danger"},"T"),"DNS ? "),r.a.createElement("br",null),"Install TronLink and then import or create a wallet ",r.a.createElement("br",null),"with at least .026 TRX to register Tron wallet address",r.a.createElement("br",null)," and 0.8 ~ 0.9 Trx for bitcoin and other Altcoins   ",r.a.createElement("br",null),"Enter a name in any language in ",r.a.createElement("a",{href:"#addressName"}," Name ")," field.",r.a.createElement("br",null),"For example : JustinSun.tron , JustinSun, \u8d3e\u65af\u6c40\u592a\u9633 ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://tronwallet.network",target:"_blank",rel:"noopener noreferrer"},"TronWallet")," supports ",r.a.createElement("span",{className:"text-danger"},"T"),"DNS. ",r.a.createElement("br",null)),r.a.createElement("div",{className:"col-md-6 text-muted text-justified small"},r.a.createElement("b",{className:"m-1"}," Fee ? "),r.a.createElement("br",null),"Network fee = .27 ~ .3 TRX ",r.a.createElement("br",null),"Cost of using ",r.a.createElement("span",{className:"text-danger"},"T"),"DNS = 0 TRX",r.a.createElement("br",null),"You can create multi name for your wallet address but note you can not delete name.")),r.a.createElement("hr",{className:"hr"}),r.a.createElement("div",{className:"row"},r.a.createElement("small",{className:"ml-4 mb-2 p-1"},r.a.createElement("b",{className:"text-danger"}," Contact : "),r.a.createElement("a",{href:"https://github.com/TDNS",target:"_blank",rel:"noopener noreferrer"}," ",r.a.createElement("b",{className:"text-secondary"}," Github ")),r.a.createElement("a",{href:"https://discordapp.com/channels/491685925227724801/505440567488937994",target:"_blank",rel:"noopener noreferrer"}," ",r.a.createElement("b",{className:"text-info"}," Discord ")),r.a.createElement("a",{href:"https://telegram.me/gpsavad",target:"_blank",rel:"noopener noreferrer"}," ",r.a.createElement("b",{className:"text-primary"}," Telegram ")))))))}}]),t}(r.a.Component),me=Object(D.withStyles)(function(e){return{root:{flexGrow:1},button:{margin:e.spacing.unit},leftIcon:{marginRight:e.spacing.unit},rightIcon:{marginLeft:e.spacing.unit},iconSmall:{fontSize:20},checkBoxRoot:{color:j.a[600],"&$checked":{color:j.a[500]}}}})(de);l.a.render(r.a.createElement(me,null),document.getElementById("root"))}},[[159,2,1]]]);
//# sourceMappingURL=main.9ac1332c.chunk.js.map