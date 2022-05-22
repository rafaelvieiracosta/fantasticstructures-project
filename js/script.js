import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";

import fetchVisitas from "./modules/fetch-visitas.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

import { Slider, SliderNav } from "./modules/slider.js";

const scrollsuave = new ScrollSuave('[data-menu="suave"] li a[href^="#"]');
scrollsuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabnav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollanima = new ScrollAnima("[data-anime='scroll']");
scrollanima.init();

const dropdownmenu = new DropdownMenu("[data-dropdown]");
dropdownmenu.init();

const menumobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="lista"]'
);
menumobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

fetchVisitas("../visitasapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const slider = new SliderNav(".slider", ".slider-wrapper");
slider.init();
slider.addControl(".custom-controls");
