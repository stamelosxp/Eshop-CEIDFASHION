!function(){function e(e,c){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var c=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=c){var n,r,o,a,i=[],u=!0,l=!1;try{if(o=(c=c.call(e)).next,0===t){if(Object(c)!==c)return;u=!1}else for(;!(u=(n=o.call(c)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=c.return&&(a=c.return(),Object(a)!==a))return}finally{if(l)throw r}}return i}}(e,c)||function(e,c){if(!e)return;if("string"==typeof e)return t(e,c);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,c)}(e,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}System.register([],(function(t,c){"use strict";return{execute:function(){t({a:function(){(0,wp.plugins.registerPlugin)("acfw-coupons-summary",{render:p,scope:"woocommerce-checkout"})},i:function(){acfwfObj.components=n,acfwfObj.wc=o,acfwfObj.utils=d},r:function(){(0,wp.plugins.registerPlugin)("acfwf-notices",{render:k,scope:"woocommerce-checkout"})}});var c=function(e){var t=e.label,c=e.value,n=e.children;return React.createElement("div",{className:"wp-block-woocommerce-checkout-order-summary-subtotal-block wc-block-components-totals-wrapper"},React.createElement("div",{className:"wc-block-components-totals-item"},React.createElement("span",{className:"wc-block-components-totals-item__label"},t),React.createElement("span",{className:"wc-block-components-totals-item__value"},React.createElement("div",{dangerouslySetInnerHTML:{__html:c}})),React.createElement("div",{className:"wc-block-components-totals-item__description"},n)))},n={Accordion:function(t){var c=wp.element.useState,n=t.title,r=t.children,o=t.caret_img_src,a=e(c(!1),2),i=a[0],u=a[1];return React.createElement("div",{className:"acfw-accordion"},React.createElement("div",{className:"acfw-accordion acfw-store-credits-checkout-ui ".concat(i?"show":"")},React.createElement("h3",{onClick:function(e){u(!i);var t=e.currentTarget.nextElementSibling,c=t.style.maxHeight;c=(c=parseInt(c.replace("px","")))>0?0:t.scrollHeight,t.style.maxHeight="".concat(c,"px")}},React.createElement("span",{className:"acfw-accordion-title"},n),function(){if(o)return React.createElement("span",{className:"caret"},React.createElement("img",{src:o}))}()),React.createElement("div",{className:"acfw-accordion-inner"},React.createElement("div",{className:"acfw-accordion-content"},r))))},OrderSummarySubtotalBlock:c},r=wc.blocksCheckout.extensionCartUpdate,o={dummyUpdateCart:function(){return r({namespace:"acfwf_dummy_update",data:{}})}},a=wp.data,i=(a.subscribe,a.select),u=a.dispatch,l=a.useSelect,s=(a.useDispatch,wc.wcBlocksData.VALIDATION_STORE_KEY),f="wc/store/cart",m=t("s",i("wc/store/cart")),d={hasBOGOCoupon:function(){return!!m.getCartData().coupons.filter((function(e){return"acfw_bogo"===e.discount_type}))}};var p=function(){var e=l((function(e){var t,c=e("wc/store/cart").getCartData().extensions.acfwf_block;return c&&c.couponSummaries&&null!==(t=c.couponSummaries)&&void 0!==t?t:[]})),t=wc.blocksCheckout.ExperimentalDiscountsMeta;return e.length?React.createElement(t,null,e.map((function(e){return React.createElement(c,{label:e.coupon_code},React.createElement("div",{className:"acfwf-bogo-discount-summary-block",dangerouslySetInnerHTML:{__html:e.content}}))}))):null};var w="wc/checkout",_="wc/cart",g="core/notices",v={ACFWF_NOTICE_BOGO:"ACFWF_NOTICE_BOGO",ACFWF_NOTICE_CART_CONDITIONS:"ACFWF_NOTICE_CART_CONDITIONS",ACFWF_NOTICE_STORE_CREDIT:"ACFWF_NOTICE_STORE_CREDIT"},C=function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText};var b=t("c",{integration:"acfwf-wc-checkout-block"}),E=wc.wcSettings,h=t("g",(function(e){return E.getSetting("".concat(e,"_data"))})),O=jQuery,y=function(){var e=O(".acfw-checkout-ui-block"),t=e.find(".acfw-store-credits-checkout-ui"),c=e.find("h3");t.hasClass("show")||c.trigger("click"),setTimeout((function(){var t;window.scroll({top:null==e||null===(t=e.offset())||void 0===t?void 0:t.top,behavior:"smooth"}),e.find("input").trigger("focus")}),400)};function N(){var e=l((function(e){return e(f).getHasCalculatedShipping()})),t=h(b.integration).store_credits;if(!t)return null;var c=t.apply_type,n=t.notice_store_credits_text,r=m.getCartData().extensions.acfwf_block;"coupon"!==c&&e&&r.store_credits.notice&&function(e){setTimeout((function(){u(g).createNotice("error",e,{context:w,id:v.ACFWF_NOTICE_STORE_CREDIT}),O(".acfw-reapply-sc-discount").on("click",y)}),400)}(n)}var T=[_,w],k=function(){T.forEach((function(e){u(g).removeNotices(Object.values(v).filter((function(e){return e})),e)})),function(){var e=l((function(e){return e(f).getCartErrors()})),t=l((function(e){return e(s).getValidationError("coupon")})),c=e.find((function(e){return"woocommerce_rest_cart_coupon_error"===e.code&&(t=e.message,/<[^>]+>|&[a-z]+;/i.test(t));var t}));if(c&&t){u(s).setValidationErrors({coupon:{message:" ",hidden:!1}});var n=c.message||"";u(g).createNotice("error",C(n),{context:_,id:v.ACFWF_NOTICE_CART_CONDITIONS})}}(),function(){var e=l((function(e){return e(f).getCartData()})),t=acfwfObj.wc.dummyUpdateCart,c=i(f).isApplyingCoupon(),n=i(f).isRemovingCoupon();(c||n)&&t();var r=e.extensions.acfwf_block;if(!r||!r.bogo_deals)return null;var o=r.bogo_deals;o&&o.forEach((function(e){u(g).createNotice("info",C(e),{context:_,id:v.ACFWF_NOTICE_BOGO})}))}(),N()}}}}))}();
