(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(d.length)d.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{"chunk-0206bfa0":"17fa80e3","chunk-04b93936":"ff42b4aa","chunk-13a6037e":"78485c24","chunk-16015154":"1b34de7b","chunk-17977988":"9c231abc","chunk-2c06842c":"b5115afe","chunk-2d208d90":"e4289446","chunk-2d21d0e2":"b86d4400","chunk-2d22c123":"25d12bab","chunk-2e80bb9a":"d3620fce","chunk-3145fe0f":"0f3c0b1c","chunk-319206de":"5a141d4b","chunk-328f70dd":"8aa8f98b","chunk-3807499c":"cd15a7a9","chunk-3dc647fd":"3610f583","chunk-4cdd78c0":"262f68ab","chunk-4fde0a08":"b74707e5","chunk-515a8379":"0422a7fc","chunk-53ccb27e":"0538410e","chunk-59974754":"ef0dfab8","chunk-766a929b":"923c19b4","chunk-839300a6":"182d1e91","chunk-c796899c":"21afdba9","chunk-dbb9869e":"55dff55e",comple:"9a5b046c",creditos:"a07e1167",glosario:"29bc7817",intro:"a1bdae66",referencias:"a3d97121",tema1:"25eb4260",tema2:"248964c5"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-319206de":"31d6cfe0","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"10ec235e","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"3d1f0eec","chunk-766a929b":"308fbab1","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"b46cd250",creditos:"e53a0efa",glosario:"9b4f0dec",intro:"0e433876",referencias:"f625b007",tema1:"31d6cfe0",tema2:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=u;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,i,r,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");d["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}}]},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Gestión SARLAFT",descripcionCurso:"En las organizaciones de hoy día, es importante la aplicación de la normatividad vigente, más aún en las entidades de carácter financiero, constructoras, cooperativas, entre otras. <br/><br/>El Sistema de Administración de Riesgos de Lavado de Activos y Financiación del Terrorismo, SARLAFT, debe tomarse no solo como  requisito, sino como una alternativa de mejora para la empresa y sus agentes relacionados, ya que permitirá mejorar los procesos administrativos y evitar sanciones por incumplimiento.",imagenBannerPrincipal:n("bce2"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Revisión y aprobación de información",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"El oficial de cumplimiento",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Documentación y estructura",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Indagación del proceso de afiliación ",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Cumplimiento de requisitos",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Sanciones",hash:"t_1_5"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Informe",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Informe de vinculación",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Unidad de Información y Análisis Financiero – UIAF",hash:"t_2_2"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Coopfuturo. (2017). SARLAFT – Sistema de Administracion del Riesgo de Lavado de Activos y Financiacion del Terrorismo. ",link:"https://coopfuturo.com.co/wp-content/uploads/2019/09/SARLAFT-CAPACITACION-vfinal_DIC_14_2017.pdf "},{referencia:"Angel, J. (2021). El Oficial de Cumplimiento en SAGRILAFT, SARLAFT y SALIFPT y sus funciones. Grupo CD&S. ",link:"https://www.grupocdys.com.co/el-oficial-de-cumplimiento-en-sagrilaft-sarlaft-y-salifpt-y-sus-funciones/ "},{referencia:"Macías, M. (2018). Perfil del oficial de cumplimiento, Funciones del Oficial de Cumplimiento. Compliance. ",link:"https://www.compliance.com.co/perfil-de-oficial-de-cumplimiento-funciones-del-oficial-de-cumplimiento/ "},{referencia:"Moreno, E. (2021). SARLAFT 4.0: 11 motivos de sanción por incumplimiento de la norma. Aml | Stradata. ",link:"https://aml.stradata.co/sarlaft-4-0-11-motivos-de-sancion-por-incumplimiento-de-la-norma/ "},{referencia:"UIAF. (s. f.-a). Objetivos. Gov.co. ",link:"https://www.uiaf.gov.co/nuestra_entidad/objetivos "},{referencia:"UIAF. (s. f.-b). ¿Quiénes somos? ",link:"https://www.uiaf.gov.co/nuestra_entidad/quienes_somos "}],glosario:[{termino:"Accionista",significado:"Puede ser un persona física, persona natural, como forma de su patrimonio; o una persona jurídica, es decir, cualquier sociedad, organismo o ente que tenga entre sus activos una participación empresarial."},{termino:"Amonestación",significado:"Es una crítica hecha con la intención de evitar que se repita un comportamiento indeseable. En los negocios, es la primera herramienta con la que cuenta una empresa para sancionar las faltas e incumplimientos leves o graves por parte de un trabajador.<br> Hay dos tipos de amonestaciones: verbal y por escrito."},{termino:"Estados financieros",significado:"Se pueden denominar como cuentas anuales, informes financieros o estados contables. Son el reflejo de la contabilidad de una empresa y muestran la estructura económica de esta en un periodo dado, es decir, muestran el ejercicio económico de un año de la empresa."},{termino:"Gafi",significado:"Es un ente intergubernamental establecido en 1989, cuyo objetivo es fijar estándares y promover la implementación efectiva de medidas legales, regulatorias y operativas para combatir el lavado de activos, el financiamiento del terrorismo y el financiamiento de la proliferación de armas de destrucción masiva, y otras amenazas a la integridad del sistema financiero internacional."},{termino:"Multa",significado:"Es una sanción o castigo que puede imponer una autoridad sobre aquellos que han incumplido alguna norma. Es pecuniaria, puesto que debe pagarse en dinero y, usualmente, es coercitiva, ya que, en caso de no cumplimiento del pago, se aplican multas sucesivas y acumulativas."},{termino:"Persona jurídica",significado:"Una persona jurídica es una organización o grupo de personas naturales a quienes la ley reconoce personalidad independiente y diferenciada de la de cada uno de sus miembros o componentes, capaz de ejercer derechos y contraer obligaciones, y de ser representada judicial y extrajudicialmente."},{termino:"Persona natural",significado:"Es todo individuo de la especie humana, cualquiera que sea su raza, sexo, estirpe o condición. Ahora bien, en términos empresariales, la persona natural es aquel individuo que, al actuar en su propio nombre, se ocupa de alguna o algunas actividades que la ley considera mercantiles. "},{termino:"Sanciones civiles",significado:"Las sanciones civiles se emplean para corregir el daño que el individuo hace a la sociedad a partir de la falta cometida. Estas sanciones se encuentran reguladas en el Código Civil y Comercial. "},{termino:"Sanciones penales",significado:"Estas se corresponden con delitos propiamente penales, es decir, que se encuadran dentro de la regulación del Código Penal. No todas las faltas cometidas poseen como consecuencia el encarcelamiento de la persona."},{termino:"Sanciones sociales",significado:"Las sanciones sociales, tal como lo indica su nombre, son aplicadas por la sociedad en su conjunto. Ante alguna conducta o modo de operatoria que se encuentre catalogado como “incorrecto”, la sociedad actúa como órgano de sanción, en el sentido de que se encarga de acusar estas infracciones (como, por ejemplo, estacionar el auto en las salidas de las ambulancias o derrochar mucha agua)."},{termino:"Sociedad",significado:"Una sociedad es un grupo de personas que sigue un determinado ordenamiento. Asimismo, tienen costumbres en común, lo cual abarca distintos ámbitos de la vida. Por ejemplo, se comparte tanto el uso de la misma moneda como la historia y las tradiciones festivas."}],complementario:[{texto:"Alianza Temporales. (2021, 11 febrero). Capacitación SARLAFT [Video]. YouTube. ",tipo:"Video",link:"https://youtu.be/kFOeVkgD38U"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Jhon Jairo Villamizar Mora",cargo:"Experto temático ",centro:"Centro de la Industria, la Empresa y los Servicios CIES <br>Regional Norte de Santander"},{nombre:"Claudia Milena Hernández Naranjo",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología <br>Regional Distrito Capital"},{nombre:"Carolina Coca Salazar",cargo:"Revisora metodológica y pedagógica",centro:"Centro de Diseño y Metrología <br>Regional de Distrito Capital"},{nombre:"Darío González",cargo:"Corrección de estilo",centro:"Centro Agropecuario La Granja <br>Regional Tolima"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Juan Carlos Tapias Rueda",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andres Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Lady Adriana Ariza Luque",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Daniel Felipe Varon Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios <br>Regional Tolima"}]}});o["a"].prototype.$config=v;var y=n("9224");o["a"].prototype.$package=y,new o["a"]({router:g,store:h["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},bce2:function(e,a,n){e.exports=n.p+"img/banner-principal.90a9aff9.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.0808fb67.png"}});
//# sourceMappingURL=app.38836145.js.map