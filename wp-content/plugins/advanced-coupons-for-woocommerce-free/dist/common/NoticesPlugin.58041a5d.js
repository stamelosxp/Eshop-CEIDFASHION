const R=t=>{const{useState:e}=wp.element,{title:c,children:o,caret_img_src:n}=t,s=b=>{N(!_);let d=b.currentTarget.nextElementSibling,r=d.style.maxHeight;r=parseInt(r.replace("px","")),r=r>0?0:d.scrollHeight,d.style.maxHeight="".concat(r,"px")},a=()=>{if(n)return React.createElement("span",{className:"caret"},React.createElement("img",{src:n}))},[_,N]=e(!1);return React.createElement("div",{className:"acfw-accordion"},React.createElement("div",{className:"acfw-accordion acfw-store-credits-checkout-ui ".concat(_?"show":"")},React.createElement("h3",{onClick:s},React.createElement("span",{className:"acfw-accordion-title"},c),a()),React.createElement("div",{className:"acfw-accordion-inner"},React.createElement("div",{className:"acfw-accordion-content"},o))))},w=t=>{const{label:e,value:c,children:o}=t;return React.createElement("div",{className:"wp-block-woocommerce-checkout-order-summary-subtotal-block wc-block-components-totals-wrapper"},React.createElement("div",{className:"wc-block-components-totals-item"},React.createElement("span",{className:"wc-block-components-totals-item__label"},e),React.createElement("span",{className:"wc-block-components-totals-item__value"},React.createElement("div",{dangerouslySetInnerHTML:{__html:c}})),React.createElement("div",{className:"wc-block-components-totals-item__description"},o)))},k={Accordion:R,OrderSummarySubtotalBlock:w},{extensionCartUpdate:S}=wc.blocksCheckout,I=()=>S({namespace:"acfwf_dummy_update",data:{}}),F={dummyUpdateCart:I},{subscribe:K,select:C,dispatch:l,useSelect:u,useDispatch:z}=wp.data,{VALIDATION_STORE_KEY:g}=wc.wcBlocksData,i="wc/store/cart",E=C("wc/store/cart"),y=()=>!!E.getCartData().coupons.filter(e=>e.discount_type==="acfw_bogo"),v={hasBOGOCoupon:y};function Q(){acfwfObj.components=k,acfwfObj.wc=F,acfwfObj.utils=v}const x=()=>{const t=u(c=>{var s;const o=c("wc/store/cart").getCartData(),{acfwf_block:n}=o.extensions;return!n||!n.couponSummaries?[]:(s=n.couponSummaries)!=null?s:[]}),{ExperimentalDiscountsMeta:e}=wc.blocksCheckout;return t.length?React.createElement(e,null,t.map(c=>React.createElement(w,{label:c.coupon_code},React.createElement("div",{className:"acfwf-bogo-discount-summary-block",dangerouslySetInnerHTML:{__html:c.content}})))):null};function X(){const{registerPlugin:t}=wp.plugins;t("acfw-coupons-summary",{render:x,scope:"woocommerce-checkout"})}const O="wc/checkout",f="wc/cart",m="core/notices",p={ACFWF_NOTICE_BOGO:"ACFWF_NOTICE_BOGO",ACFWF_NOTICE_CART_CONDITIONS:"ACFWF_NOTICE_CART_CONDITIONS",ACFWF_NOTICE_STORE_CREDIT:"ACFWF_NOTICE_STORE_CREDIT"},T=t=>{let e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText},A=t=>/<[^>]+>|&[a-z]+;/i.test(t),D=t=>t.find(e=>e.code==="woocommerce_rest_cart_coupon_error"&&A(e.message));function W(){const t=u(o=>o(i).getCartErrors()),e=u(o=>o(g).getValidationError("coupon")),c=D(t);if(c&&e){l(g).setValidationErrors({coupon:{message:" ",hidden:!1}});const o=c.message||"";l(m).createNotice("error",T(o),{context:f,id:p.ACFWF_NOTICE_CART_CONDITIONS})}}function H(){const t=u(a=>a(i).getCartData()),{dummyUpdateCart:e}=acfwfObj.wc,c=C(i).isApplyingCoupon(),o=C(i).isRemovingCoupon();(c||o)&&e();const{acfwf_block:n}=t.extensions;if(!n||!n.bogo_deals)return null;const s=n.bogo_deals;s&&s.forEach(a=>{l(m).createNotice("info",T(a),{context:f,id:p.ACFWF_NOTICE_BOGO})})}const B="acfwf-wc-checkout-block",G={integration:B},{wcSettings:L}=wc,M=t=>L.getSetting("".concat(t,"_data")),h=jQuery,j=t=>{setTimeout(function(){l(m).createNotice("error",t,{context:O,id:p.ACFWF_NOTICE_STORE_CREDIT}),h(".acfw-reapply-sc-discount").on("click",U)},400)},U=()=>{const t=h(".acfw-checkout-ui-block"),e=t.find(".acfw-store-credits-checkout-ui"),c=t.find("h3");e.hasClass("show")||c.trigger("click"),setTimeout(function(){var n;window.scroll({top:(n=t==null?void 0:t.offset())==null?void 0:n.top,behavior:"smooth"}),t.find("input").trigger("focus")},400)};function P(){const t=u(s=>s(i).getHasCalculatedShipping()),{store_credits:e}=M(G.integration);if(!e)return null;const{apply_type:c,notice_store_credits_text:o}=e,{acfwf_block:n}=E.getCartData().extensions;c!=="coupon"&&t&&n.store_credits.notice&&j(o)}const V=[f,O],$=()=>{V.forEach(t=>{l(m).removeNotices(Object.values(p).filter(e=>e),t)}),W(),H(),P()};function Y(){const{registerPlugin:t}=wp.plugins;t("acfwf-notices",{render:$,scope:"woocommerce-checkout"})}export{X as a,G as c,M as g,Q as i,Y as r,E as s};
