'use stict';

function extend(a, b) {
  let key;
  for (key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

function NhUtils(options) {
  this.options = extend({}, this.options);
  extend(this.options, options);
}
/**
 * ES6 문법으로 작성
 * NH.attrs(selector, {aria-label: 'blue'}) // 여러 attribute의 값을 한번에
 * NH.addClass(element, 'className') // class 추가
 * NH.eventMaker(element, 'eventName', { ...option }) // 커스텀 이벤트 생성
 * NH.removeClass(element, 'className') // class 제거
 * NH.toggle(element, 'className') // 클래스를 토글
*/
NhUtils.prototype = {
  constructor: NhUtils,
  /**
   * 여러 attribute 를 object 형태로 입력
   * @example
   * NH.attrs(selector, {aria-label: 'blue'})
   * @param {Element} element - selector 형태로 입력
   * @param {Object} arr
  */
  attrs: function(element, obj) {
    const elementType = typeof element === 'object';
    let elem;
    if (elementType) {
      elem = element;
    } else {
      elem = document.querySelector(element);
    }

    try {
      for(key in obj){
        const attr = key;
        const val = obj[key];
        elem.setAttribute(attr, val);
      }
    } catch(err) {
      console.log(err)
    }
  },

  /**
   * class 추가
   * @example
   * NH.addClass(element, 'className')
   * @param {Element} element
   * @param {String} className
  */
  addClass: function(element, className) {
    element.classList.add(className);
  },

  /**
   * callback 을 위한 eventlistener 생성 기능
   * NH.eventMaker(element, 'eventName', { ...option })
   * @param {Element} element
   * @param {String} eventName
   * @param {Object} options
   */
  eventMaker: function(element, eventName, options) {
    const detailList = options;
    const eventDetail = new CustomEvent(eventName, {
      bubbles: true,
      detail: {
        ...detailList
      }
    });
    element.dispatchEvent(eventDetail);
  },

  /**
   * class 삭제
   * @example
   * NH.removeClass(element, 'className')
   * @param {Element} element
   * @param {String} className
  */
  removeClass: function(element, className) {
    element.classList.remove(className);
  },

  /**
   * class 토글
   * @example
   * NH.toggle(element, 'className')
   * @param {Element} element
   * @param {String} className
  */
  toggle: function(element, className) {
    const _ = this;
    const elementType = typeof element === 'object';
    const elem = elementType ? element : document.querySelectorAll(element);

    if (elementType) {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        if (elem.classList.contains(className)) {
          _.removeClass(elem, className);
        } else {
          _.addClass(elem, className);
        }
      }, false);
    } else {
      elem.forEach((el) => {
        el.addEventListener('click', (event) => {
          event.preventDefault();
          if (el.classList.contains(className)) {
            _.removeClass(el, className);
          } else {
            _.addClass(el, className);
          }
        })
      })
    }
  },

  /**
   * elementPosition
   * @param {Element} element
   * @returns {Object} element 의 위치 / 정보
   */
  elementPosition: function(element) {
    const el = element;
    const absVal = el.getBoundingClientRect();

    const offset = {
      windowWidth: window.innerWidth,
      width: absVal.width,
      height: absVal.height,
      top: el.offsetTop,
      left: el.offsetLeft,
      absTop: Math.round(absVal.top),
      absLeft: Math.round(absVal.left),
      absRight: Math.round(window.innerWidth - (absVal.left + absVal.width)),
    };

    return offset;
  },
};

const NH = new NhUtils();
// util end


// tab
const tabUI = (() => {
  function setAttrAria(el, idx) {
    const tabList = el.querySelector('[data-js="tab__button-wrap"]');
    const tabButtons = tabList.querySelectorAll('[data-js="tab__button"]');
    const tabContentWrap = el.querySelector('[data-js="tab__content-wrap"]')
    const tabPanels = tabContentWrap.querySelectorAll(':scope > [data-js="tab__content"]');

    NH.attrs(tabList, {
      'role': 'tablist',
    })

    tabButtons.forEach((el, index) => {
      const tabButton = el;

      NH.attrs(tabButton, {
        'role': 'tab',
        'id': `tabList_${idx}_${index}`,
        'aria-controls': `tabPanel_${idx}_${index}`,
        'data-index': index,
      })
    });

    tabPanels.forEach((el, index) => {
      const tabPanel = el;
      NH.attrs(tabPanel, {
        'role': 'tabpanel',
        'id': `tabPanel_${idx}_${index}`,
        'aria-labelledby': `tabList_${idx}_${index}`,
      })
    })

  }

  class tabsAutomatic {
    constructor(groupNode) {
      this.tabListNode = groupNode;
      this.tabs = [];

      this.tabs = Array.from(this.tabListNode.querySelectorAll('[role=tab]'));
      this.tabPanels = [];

      for (let i =0; i < this.tabs.length; i += 1) {
        const tab = this.tabs[i];
        const tabPanels = document.getElementById(tab.getAttribute('aria-controls'));

        tab.setAttribute('aria-selected', 'false');
        this.tabPanels.push(tabPanels);

        tab.addEventListener('click', this.onClick.bind(this));
      }
    }

    setSelectedTab(currentTab,setFocus) {
      let buttonWrap;
      let activeIndex = 0;
      let currentPanel;
      const isSticky = !!currentTab.closest('[sticky-tab]');
      const header = document.querySelector('#header') || document.querySelector('.full-popup__header');

      if(typeof setFocus !== 'boolean') {
        setFocus = true;
      }

      for (let i = 0; i < this.tabs.length; i += 1){
        const tab = this.tabs[i];
        buttonWrap = tab.parentElement;

        if (currentTab === tab) {
          tab.setAttribute('aria-selected', 'true');
          this.tabPanels[i].classList.add('is-active');
          this.tabs[i].classList.add('is-active');

          currentPanel = this.tabPanels[i];

          activeIndex = i;
          if (setFocus) {
            tab.focus();
          }
        } else {
          tab.setAttribute('aria-selected', 'false');
          this.tabPanels[i].classList.remove('is-active');
          this.tabs[i].classList.remove('is-active');
        }
      }

      const tabEl = currentTab.closest('[data-js="tab"]');
      const buttonHeight = NH.elementPosition(currentTab).height;
      const isSubTab = !!tabEl.parentNode.closest('[data-js="tab"]');
      const elTop = isSubTab ? NH.elementPosition(tabEl.parentNode.closest('[data-js="tab"]')).top - buttonHeight: NH.elementPosition(tabEl).top - buttonHeight;
      const info = NH.elementPosition(currentTab);
      const tabData = {
        activeIndex: activeIndex,
      }

      NH.eventMaker(tabEl, 'tabChange', tabData);

      // console.log(elTop < NH.elementPosition(header).height + 10 ? 0 : elTop)

      window.scroll({
        top: elTop < NH.elementPosition(header).height + 10 ? 0 : elTop - 20,
        behavior: "smooth",
      });

      buttonWrap.scroll({
        left: (currentTab.offsetLeft + (info.width / 2)) - (info.windowWidth / 2),
        behavior: "smooth",
      });

      if (isSticky) {
        const scrollWrapper = currentTab.closest('.bottom-popup__inner');
        const gotoPosition = activeIndex === 0 ? NH.elementPosition(currentPanel).top - 20 : NH.elementPosition(currentPanel).top;

        scrollWrapper.scroll({
          top: gotoPosition - 100,
          behavior: "smooth",
        });
      }
    }

    onClick(e) {
      this.setSelectedTab(e.currentTarget);
    }
  };

  function init() {
    const tabs = document.querySelectorAll('[data-js="tab"]');

    tabs.forEach((el, idx) => {
      setAttrAria(el, idx);

      const tabLists = el.querySelectorAll('[role=tablist]');
      for (let i = 0; i < tabLists.length; i++){
        new tabsAutomatic(tabLists[i]);
      }

      NH.eventMaker(el, 'initTab', {})
    });
  }

  return {
    set() {
      init();
    },
    change(element, idx) {},
  }
})();
// accordion
const accordionUI = (() => {
  // option 으로 하나만 열릴지 여러개 열릴지 선택할 수 있도록
  function init() {
    const accordion = document.querySelectorAll('[data-js="accordion"]');
    const options = {
      activeClass: "is-open",
      open: "multiple",
    };

    accordion.forEach((item,i) => {
      const accordionItem = item.querySelectorAll('.accordion__item');
      const option = item.getAttribute('data-options');
      const optObj = {...JSON.parse(option)};

      // console.log(option,optObj);

      accordionItem.forEach((item,idx) => {
        const accoButton = item.querySelector('.accordion__button');
        const accoPanel = item.querySelector('.accordion__content');
        // console.log(accoButton,accoPanel);

        if (!accoButton.classList.contains('is-init')) {
          //버튼 set
          NH.attrs(accoButton,{
            'id': `accordion_button_${i + 1}_${idx + 1}`,
            'aria-controls': `accordion_panel_${i + 1}_${idx + 1}`,
            'aria-expanded' : `false` // 2025-02-17 웹접근성 관련 추가
          });
          //판넬 set
          NH.attrs(accoPanel,{
            'id': `accordion_panel_${i + 1}_${idx + 1}`,
            'aria-labelledby': `accordion_button_${i + 1}_${idx + 1}`,
            'tabindex' : `0` // 2025-02-04 웹접근성 관련 추가
          });

          // click event
          accoButton.addEventListener("click", (e) => {
            const targetItem = e.target.closest('.accordion__item');
            const targetPanel = targetItem.querySelector('.accordion__content');
            const targetButton = targetItem.querySelector('.accordion__button');
            const itemIsOpen = document.querySelectorAll(".accordion__item.is-open");
            let panelHeight = targetPanel.scrollHeight;
            let targetPositionTop = targetItem.getBoundingClientRect().top;

            //accordion panel transition
            if (targetPanel.style.maxHeight) {
              targetPanel.style.maxHeight = null;
            } else {
              targetPanel.style.maxHeight = `400px`;
            }

            //accordion toggle
            if (targetItem.classList.contains(options.activeClass)) {
              NH.removeClass(targetItem, options.activeClass);
              NH.attrs(targetButton,{'aria-expanded': false});
            }else {
              NH.addClass(targetItem, options.activeClass);
              NH.attrs(targetButton,{'aria-expanded': true});
            }

            //data-options="single" - close function
            function closeFunc(){
              itemIsOpen.forEach((item) => {
                const buttonIsOpen = item.querySelector('.accordion__button');
                item.querySelector('.accordion__content').style.maxHeight = null;
                NH.removeClass(item, options.activeClass);
                NH.attrs(buttonIsOpen,{'aria-expanded': false});
              })
            }

            //option이 single일때만 동작
            if(optObj.open !== options.open){ //'multiple'이 아닐 때 작동
              closeFunc();
            }

            // 클릭시 window scroll
            // console.log(targetPositionTop,window);
            // window.scrollTo({top: targetPositionTop, left:0, behavior:'auto'});

          }); // click event end

          NH.addClass(accoButton, 'is-init');
          // NH.attrs(accoButton,{
          //   'is-init': true,
          // });
        }
      });
    });
  } //init

  return {
    set() {
      init();
    },
    change() {},
  }
})();

/* alertPopup */
const alertPopup = (() => {
  const selector = {
    alertOpenButton: '[data-element="alert__open"]',
    alertPopup: '[data-element="alertPopup"]',
    dim: '[data-element="alert__dim"]',
    closeButton: '[data-element="alert__close"]',
    confirmButton: '[data-element="alert__confirm"]',
  };


  const body = document.querySelector('body');
 
  function initAlert(element) {
    const self = {};

    self.item = element;
    self.OpenButton = document.querySelectorAll(selector.alertOpenButton);
    self.closeButton = self.item.querySelector(selector.closeButton);
    self.confirmButton = self.item.querySelector(selector.confirmButton);
    self.dim = self.item.querySelector(selector.dim);
    self.type = self.item.getAttribute('data-type');

    NH.attrs(self.item, {
      'role': 'alertdialog',
      'aria-modal': 'true',
    });
    NH.attrs(self.dim, {
      'aria-hidden': true,
    })

    function open(target) {
      self.dialog = self.item.querySelector(target);

      console.log(body)
      if(self.dialog){
        const targetAlert = self.dialog.closest('.alert');

        NH.addClass(targetAlert, 'is-active');
        NH.addClass(body, 'non-scroll');
      }
    }

    function close(target) {
      NH.removeClass(target.closest('.alert'), 'is-active');
      NH.removeClass(body, 'non-scroll');
    }

    function confirmAlert(target) {
      const targetAttr = target.getAttribute('data-id');
      const targetId = `#${targetAttr}`;
      self.dialog = document.querySelector(targetId);

      if(self.dialog){
        const targetAlert = self.dialog.closest('.alert');

        NH.addClass(targetAlert, 'is-active');
        NH.addClass(body, 'non-scroll');
      }
    }

    self.OpenButton.forEach((button) =>{
      button.addEventListener('click', (e) =>{
        const target = e.target.getAttribute('href');
        open(target);
      })
    })

    if (!!self.closeButton) {
      self.closeButton.addEventListener('click', (e) =>{
        const target = e.target;

        console.log(target)
        close(target);
      });
    }

    if(self.type === 'confirm' && self.confirmButton) {
      self.confirmButton.addEventListener('click', (e) =>{
        const target = e.target;
        confirmAlert(target);
        close(target);
      })
    }
  }

  function init() {
    document.querySelectorAll(selector.alertPopup).forEach((element) => {
      new initAlert(element);
    })
  }

  function closeLayer(layer) {
    const target = `#${layer}`;
    const targetEl = document.querySelector(target);

    NH.removeClass(targetEl.closest('.alert'), 'is-active');
    NH.removeClass(body, 'non-scroll');
  }

  function openLayer(targetId) {
    const target = `#${targetId}`;
    const targetEl = document.querySelector(target);

    if(targetEl) {
      const targetAlert = targetEl.closest('.alert');

      NH.addClass(targetAlert, 'is-active');
      NH.addClass(body, 'non-scroll');
    }
  }

  return {
    set() {
      init();
    },
    close(el) {
      closeLayer(el)
    },
    open(target) {
      openLayer(target)
    },
  }
})();

// search input 관련 기능
const search = (() => {
  const selector = {
    search: '[data-element="inputSearch"]',
    clear: '[data-element="clear"]'
  };

  function initSearch(el) {
    const element = {};

    function set() {
      element.wrap = el;
      element.input = el.querySelector('input');
      element.clear = el.querySelector(selector.clear);

      element.input.addEventListener('focus', () => {
        NH.addClass(element.wrap, 'input-focus');
      });

      element.input.addEventListener('blur', () => {
        NH.removeClass(element.wrap, 'input-focus');
      });

      element.input.addEventListener('input', (evt) =>{
        const target = evt.target;
        if (target.value.length) {
          NH.addClass(element.clear, 'is-active');
        }
      });

      element.clear.addEventListener('click', () => {
        element.input.value = '';

        element.input.focus();
        NH.removeClass(element.clear, 'is-active');
      });
    }

    set();
  }

  document.querySelectorAll(selector.search).forEach((elem, idx) => {
    new initSearch(elem);
  });
})();

//toggleUI
const toggleUI = (() => {
  const selector = {
    toggle: '[data-js="toggle"]',
    toggleControl: '[data-js="toggle__control"]',
    toggleLayer: '[data-js="toggle__layer"]',
  };
  const CLASSNAME = 'is-open';


  // 자식 요소에 focus 가 있는지 확인
  function isButtonFocused(parentElement) {
    const focusedElement = document.activeElement;
    if (parentElement.contains(focusedElement) && focusedElement.tagName.toLowerCase() === 'button') {
      return true;
    }

    return false;
  }

  function initToggle(el) {
    const element = {}
    let animating = false;

    element.item = el;
    element.controlButton = element.item.querySelector(selector.toggleControl);
    element.toggleBox = element.item.querySelector(selector.toggleLayer);

    element.controlButton.setAttribute('aria-expanded', 'false');
    element.toggleBox.setAttribute('aria-hidden', 'true');
    element.toggleBox.style.display = 'none';


    document.addEventListener('click', function(e){
      const target = e.target;
      const isTarget = target === element.controlButton;
      const isSwiper = target.classList.contains('swiper-button-pause');

      if(isTarget) {
        if(element.item.classList.contains(CLASSNAME)) {
          element.controlButton.setAttribute('aria-expanded', 'false');
          element.toggleBox.setAttribute('aria-hidden', 'true');
          NH.removeClass(element.item, CLASSNAME);
          setTimeout(() => {
            element.toggleBox.style.display = 'none';
          }, 400);
        }else {
          element.toggleBox.style.display = 'block';
          setTimeout(() => {
            NH.addClass(element.item, CLASSNAME);
            element.controlButton.setAttribute('aria-expanded', 'true');
            element.toggleBox.setAttribute('aria-hidden', 'false');
          }, 100);
        }
      } else {
        element.controlButton.setAttribute('aria-expanded', 'false');
        NH.removeClass(element.item, CLASSNAME);
        setTimeout(() => {
          element.toggleBox.style.display = 'none';
        }, 400);
      };

      /* 2025-02-04 웹접근성 관련 수정 */
      const swiperWrapper = document.querySelector('.swiper-wrapper');
      if (isSwiper) {
        //console.log('123098123908')
        const swEl = target.closest('.swiper').swiper;
        if (target.classList.contains('paused')) {
          target.classList.remove('paused');
          //target.setAttribute('title', '일시정지')
          target.textContent = '일시정지';
          target.setAttribute('aria-label', '슬라이드 쇼 정지');
          swEl.autoplay.start();
          swiperWrapper.setAttribute('aria-live', 'off');
        } else {
          target.classList.add('paused');
          //target.setAttribute('title', '재생')
          target.textContent = '재생';
          target.setAttribute('aria-label', '슬라이드 쇼 재생');
          swEl.autoplay.stop();
          swiperWrapper.setAttribute('aria-live', 'polite');
        }
      }
      /* // 2025-02-04 웹접근성 관련 수정 */
    });

    document.addEventListener('keyup', function(e) {
      if (isButtonFocused(element.item)) {
        element.toggleBox.style.display = 'block';
        NH.addClass(element.item, CLASSNAME);

        element.controlButton.setAttribute('aria-expanded', 'true');
        element.toggleBox.setAttribute('aria-hidden', 'false');
      } else {
        element.toggleBox.style.display = 'none';
        NH.removeClass(element.item, CLASSNAME);

        element.controlButton.setAttribute('aria-expanded', 'false');
        element.toggleBox.setAttribute('aria-hidden', 'true');
      }
    });

    // scroll시 닫힘
    window.addEventListener('scroll', function(){
      NH.removeClass(element.item, CLASSNAME);
    });
  }

  function init() {
    document.querySelectorAll(selector.toggle).forEach((element) => {
      new initToggle(element);
    })
  }

  return {
    set() {
      init();
    },
  }
})();


document.addEventListener('DOMContentLoaded', () => {
  // main 인터렉션
  const phoneSwiper = new Swiper('.phone-swiper.swiper', { 
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 0,
    init: true,
    loop: true,
    disableOnInteraction: false, // 2025-02-04 웹접근성 관련 추가
    pauseOnMouseEnter: true, // 2025-02-04 웹접근성 관련 추가
    speed: 800,
    autoplay: true,
    enabled: true,
    watchSlideProgress: true, // 2025-02-04 웹접근성 관련 추가
    updateOnWindowResize: true, // 2025-02-04 웹접근성 관련 추가
    //observer : true,
    //observeParents : true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: { // 2025-02-04 웹접근성 관련 추가
      enabled: true, // 2025-02-04 웹접근성 관련 추가
      //focusableElements: '.phone-swiper__item.swiper-slide-active',
      onlyInviewport: true, // 2025-02-04 웹접근성 관련 추가
    }, // 2025-02-04 웹접근성 관련 추가
    a11y: {
      enabled: true,
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
      slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
  });

  // 2025-02-10 PC화면 일때만 슬라이드 이전 버튼 클릭 시 첫번째 마지막 위치 안맞는 현상 수정
  let mainWidth = window.innerWidth;
  if(mainWidth >= 768) {
    document.querySelector(".swiper-button-prev").addEventListener('click', function() {
      const swiperIdx = document.querySelector(".swiper-slide-active").getAttribute("data-swiper-slide-index");
      const idxArr = [];
      document.querySelectorAll(".phone-swiper .swiper-slide").forEach(function(slide) {
        idxArr.push(parseInt(slide.getAttribute("data-swiper-slide-index")));
      });
      const maxIdx = Math.max(...idxArr);

      if(swiperIdx == 0) {
        document.querySelector(".swiper-wrapper").style.marginLeft = "-72px";
      } else if(swiperIdx == maxIdx) {
        document.querySelector(".swiper-wrapper").style.marginLeft = "-144px";
      } else {
        document.querySelector(".swiper-wrapper").style.marginLeft = "0px";
      }
    });
    document.querySelector(".swiper-button-next").addEventListener('click', function() {
      document.querySelector(".swiper-wrapper").style.marginLeft = "0px";
    });
  }

  phoneSwiper.on('slideChange', () => {
    const swiperWrap = document.querySelector('.phone-swiper .swiper-wrapper');
    swiperWrap.classList.add('is-active');
    if(mainWidth >= 768) {
      document.querySelector(".swiper-wrapper").style.marginLeft = "0px";
    }
  });


  const nhPointSwiper = new Swiper('.nh-point-swiper', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      enabled: true,
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
      slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
  });

  const brandSwiper = new Swiper('.brand.swiper', {
    slidesPerView:'auto',
    spaceBetween: 0,
    freeMode: false,
    centeredSlides: true,
    speed: 2000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      enabled: true,
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
      slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
  });

  //window가 리사이즈시 메인 스와이퍼 리프레쉬
  let windowWidth = window.innerWidth;
  let benefitSwiper = undefined;
  let resizeCheck;

  function initSwiper() {
    if(windowWidth < 999 && benefitSwiper == undefined){
      benefitSwiper = new Swiper('.benefit.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        a11y: {
          enabled: true,
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
        },
      });
    } else if (windowWidth >= 999 && benefitSwiper != undefined) {
      benefitSwiper.destroy();
      benefitSwiper = undefined;
    }
  }
  initSwiper();

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    initSwiper();

    if(resizeCheck) {
      clearTimeout(resizeCheck);
    }
    const swiperWrap = document.querySelector('.phone-swiper .swiper-wrapper');
    if(swiperWrap){
      resizeCheck = setTimeout(() => {
        // console.log('리사이즈 끝');
        swiperWrap.classList.remove('is-active');
        phoneSwiper.update();
      },300);
    }

  });

  window.dispatchEvent(new Event('resize'));

  tabUI.set();
  accordionUI.set();
  alertPopup.set();
  toggleUI.set();

  // 2025-01-24 파라미터로 각 섹션 이동하기
  function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  window.onload = function() {
    const introduce = getUrlParameter('introduce');
    if (introduce) {
      const targetElement = document.getElementById(introduce);
      
      if (targetElement) {

        const headerHeight = 60;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        setTimeout(() => {
          window.scrollTo({
            behavior : 'smooth',
            top: elementPosition - headerHeight
          });
        }, 400);
      }
    }
  }();

});
