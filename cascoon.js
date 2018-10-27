/*
 * CASCOON.JS
 * 
 * Form input enabler/disabler framework.
 * Copyright (c) 2018, MIT License
 * 
 */

Casc$ = {
    Test: function(){
        alert("Bladiebla");
    },
    InitForm: (hwndName, that) => {
        if (typeof that === 'undefined') {
            that = this
        }
        let frm = that.document.getElementById(hwndName)
        if (!frm || typeof frm === 'undefined') {
            throw 'Undefined control ' + hwndName
        }
        let ctrls = frm.getElementsByTagName('input')
        for (let i = 0; i < ctrls.length; i++) {
            let c = ctrls[i].getAttribute('data-casc-none')
            if (!!c) {
                ctrls[i].addEventListener('click', () => {
                    
                    if (ctrls[i].checked) {
                        let rads = frm.querySelectorAll('[name=' + c + ']')
                        rads.forEach( (r) => {
                            r.checked = false;
                            r.setAttribute('disabled', '')
                        })
                    }
                })
                let reltvs = frm.querySelectorAll('[name=' + ctrls[i].name + ']')
                if (reltvs && reltvs.length > 1) {
                    reltvs.forEach( (reltv) => {
                        if (reltv.value !== ctrls[i].value) {
                            reltv.addEventListener('click', () => {
                                if (reltv.checked) {
                                    let rads = frm.querySelectorAll('[name=' + c + ']')
                                    rads.forEach((r) => {
                                        r.removeAttribute('disabled')
                                    })
                                }
                            })
                        }
                    })
                }
            }
        }
    }
};