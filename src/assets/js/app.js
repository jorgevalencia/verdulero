'use strict';

var jsCookies = Cookies.noConflict();

import ScrollTo from './components/ScrollTo';
import Featured from './components/Featured';
import OurCookies from './components/Cookies';
import Menu from './components/Menu';
import Language from './components/Language';
import MenuProducts from './components/MenuProducts';
import Search from './components/Search';
import Faq from './components/Faq';
import listProducts from './components/listProducts';
import Sidemenu from './components/Sidemenu';
import Slider from './components/Slider';


$(document).ready(function() {

    FastClick.attach(document.body);

    ScrollTo.init();
    Featured.init();
    OurCookies.init(jsCookies);
    Menu.init();
    Language.init();
    MenuProducts.init();
    Search.init();
    Faq.init();
    listProducts.init();
    Sidemenu.init();
    Slider.init();
});
