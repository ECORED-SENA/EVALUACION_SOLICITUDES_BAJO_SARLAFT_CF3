<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Informe  
    
    .row.justify-content-center
      .col-md-10
        figure.mb-5
          img(src='@/assets/curso/banner-tema2.png', alt='Informe')

    p(data-aos="fade") En el informe se refleja la gestión y las acciones alcanzadas durante la aplicación del Sistema de Administración de Riesgos de Lavado de Activos y Financiación del Terrorismo – SARLAFT, donde se relacionará las actividades desarrolladas en el cumplimiento del marco normativo, los resultados obtenidos y los reportes presentados a la UIAF. 

    Separador
    

    // 2.1
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h2 2.1 	Informe de vinculación  

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p Para poder vincularse al Sistema de Administración de Riesgos de Lavado de Activos y Financiación del Terrorismo, se debe realizar el informe de vinculación, donde se verifica si la entidad ha cumplido con los requisitos y documentación necesarios y si ha diligenciado satisfactoriamente los formularios correspondientes.
        p.mb-4 Se adjunta el informe de vinculación SARLAFT:  
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_6.Informe_de_vinculacion.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p <b>Informe de vinculación.</b> En el siguiente anexo, se presenta un informe para verificar ciertas condiciones de vinculación de un cliente. 
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2-1-img.png', alt='Texto que describa la imagen') 

    Separador


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.2 	Unidad de Información y Análisis Financiero – UIAF 

    SlyderA.fondo-componente.py-5.mb-4(data-aos="fade-down")
      .row.justify-content-center
        .col-md-5.mb-4.mb-md-0
          p <b>La Unidad de Información y Análisis Financiero (UIAF)</b> es un organismo de inteligencia económica y financiera que centraliza, sistematiza y analiza la información suministrada por las entidades reportantes y fuentes abiertas, para prevenir y detectar posibles operaciones de lavado de activos, sus delitos fuente, y la financiación del terrorismo (UIAF, s. f.b-).
        .col-md-5
          figure
            img.mb-2(src='@/assets/curso/tema2-2-slid1.jpg', alt='Texto que describa la imagen')
            figcaption Nota. Tomado de https://acortar.link/70oARC
      .row.justify-content-center
        .col-md-5.tarjetas-modal.mb-4.mb-md-0
          p <b>La UIAF</b> tiene como misión prevenir y detectar actividades relacionadas con el lavado de activos y la financiación del terrorismo, sistematizando y analizando la información que recauda, con el fin de entregar a las autoridades competentes la información recolectada. Esta entidad se creó por la Ley 526 de 1999 y fue reglamentada por el Decreto compilatorio 1068 de 2015.
          a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
            span Ver más
            i.fas.fa-chevron-right
            .indicador--click(v-if="mostrarIndicador")
        .col-md-5
          figure
            img(src='@/assets/curso/tema2-2-slid2.jpg', alt='Texto que describa la imagen')
      .row.justify-content-center
        .col-md-5.tarjetas-modal.mb-4.mb-md-0
          p En el año 2013, la UIAF pasó a ser parte de la Comunidad de Inteligencia, por medio de la Ley 1621 de 2013, la cual protege los derechos humanos, previniendo y combatiendo las amenazas internas y externas contra el régimen democrático, el régimen constitucional y legal, la seguridad y defensa nacional, entre otras. La UIAF se estableció como un Organismo de Inteligencia Económica y Financiera en virtud de las Leyes 526 de 1999 y 1621 de 2013.
        .col-md-5
          h4.bg-acento-contenido-1.text-center.text-white.mb-0.p-2  Normatividad
          h5.bg-secundario-1.text-center.p-md-5.p-4 Contiene la información relacionada con la normatividad que rige a la UIAF, determina su competencia y le es aplicable a su actividad, así como aquella que produce para el desarrollo de sus funciones.
      .row.justify-content-center
        .col-md-5.tarjetas-modal.mb-4.mb-md-0
          p Esta unidad ha ido implementando nuevas tecnologías, innovando en el análisis de información, convirtiéndose en una unidad eficaz, que proporciona la información necesaria y verdadera a las autoridades competentes del país, detectando las organizaciones criminales que atentan contra el ente económico y social. Además, la Unidad de Información y Análisis Financiero procura la integración de todos los actores públicos y privados del país, con el objetivo de mejorar el flujo de información y optimizar el análisis de los riesgos, mitigando las vulnerabilidades presentes en los diferentes sectores de la economía.
        .col-md-5
          figure
            img(src='@/assets/curso/tema2-2-slid4.jpg', alt='Texto que describa la imagen')     

    ModalA(:abrir-modal.sync="modal5")
      .row.justify-content-center
        .col-md-6.tarjeta.border-acento-contenido.px-md-5.py-4
          figure
            img(src='@/assets/curso/tema2-2-modal.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-4(src="@/assets/curso/tema2-2-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 ¿Qué es y qué hace la UIAF? 
                  p.mb-0.text-small En el presente video, se explicará el concepto de la Unidad de Información y Análisis Financiero.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=4olduv0rqtY')" target="_blank")
                    span Enlace
                    i.fas.fa-link 

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-1.col-3.titulo-tercero.m-0
        img.p-2.py-3(src='@/assets/curso/tema2-2-ico.svg', alt='Texto que describa la imagen')
      .col-md-7.col-8.m-0.p-0.titulo-tercero-2
        h4.mb-0
          span.mb-0.text-white Actividades de la UIAF

    p.mb-4(data-aos="fade") La Unidad de Información y Análisis Financiero tiene una serie de actividades de ejecución dentro del sistema, que son las siguientes: 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 1.</b> Actividades de la UIAF
        .row.align-items-center.mb-3
          .col-md-3.bg-secundario-1.tarj-1
            img(src='@/assets/curso/tema2-2-figur1.svg', alt='Texto que describa la imagen')
          .col-md-9.bg-secundario-2.tarj-2.p-4
            p.mb-0 Atender los requerimientos de autoridades nacionales y otras unidades de inteligencia financiera en otros paises.
        .row.align-items-center.mb-3
          .col-md-3.bg-secundario-1.tarj-1
            img(src='@/assets/curso/tema2-2-figur2.svg', alt='Texto que describa la imagen')
          .col-md-9.bg-secundario-2.tarj-2.p-4
            p.mb-0 Realizar informes de inteligencia financiera con destino a la Fiscalia General de la Nación.
        .row.align-items-center.mb-3
          .col-md-3.bg-secundario-1.tarj-1.py-4.py-md-3.px-md-4
            img(src='@/assets/curso/tema2-2-figur3.svg', alt='Texto que describa la imagen')
          .col-md-9.bg-secundario-2.tarj-2.p-4
            p.mb-0 Realizar estudios de tipologías y de nuevos sectores afectados o susceptibles de ser utilizados por el LA/FT.    
        .row.align-items-center.mb-3
          .col-md-3.bg-secundario-1.tarj-1
            img(src='@/assets/curso/tema2-2-figur4.svg', alt='Texto que describa la imagen')
          .col-md-9.bg-secundario-2.tarj-2.p-4
            p.mb-0 Contribuir mediante iniciativas legislativas a controlar el LA/FT en el ordenamiento jurídico colombiano.
        .row.align-items-center.mb-3
          .col-md-3.bg-secundario-1.tarj-1
            img(src='@/assets/curso/tema2-2-figur5.svg', alt='Texto que describa la imagen')
          .col-md-9.bg-secundario-2.tarj-2.p-4
            p.mb-0 Participar en la formulación de políticas para la prevencion de LA/FT.
        .row.align-items-center.mb-3
          .col-md-3.bg-secundario-1.tarj-1
            img(src='@/assets/curso/tema2-2-figur6.svg', alt='Texto que describa la imagen')
          .col-md-9.bg-secundario-2.tarj-2.p-4
            p.mb-0 Rendir informes solicitados por los ministerios de Hacienda y Crédito Público, del Interior, y de Justicia, en relación con el control de LA/FT.
        .row.align-items-center.mb-3
          .col-md-3.bg-secundario-1.tarj-1.py-4
            img(src='@/assets/curso/tema2-2-figur7.svg', alt='Texto que describa la imagen')
          .col-md-9.bg-secundario-2.tarj-2.p-4
            p.mb-0 Trabajar coordinadamente con las autoridades nacionales y extranjeras para fortalecer el sistema de prevención y detección de actos ilícitos.                

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-1.col-3.titulo-tercero.m-0
        img.p-2.py-3(src='@/assets/curso/tema2-2-ico1.svg', alt='Texto que describa la imagen')
      .col-md-7.col-8.m-0.p-0.titulo-tercero-2
        h4.mb-0
          span.mb-0.text-white Objetivos de la UIAF

    p.mb-4(data-aos="fade") La Unidad de Información y Análisis Financiero posee unos objetivos específicos, que tienen como finalidad ser líderes en el sistema que combate los delitos de LA/FT, procurando la integración de todas las entidades pertenecientes. Dichos objetivos son los siguientes: 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 2.</b> Objetivos de la UIAF
        figure
          img.mb-3(src='@/assets/curso/tema2-2-figura2.svg', alt='Texto que describa la imagen')
        figcaption Fuente - https://www.uiaf.gov.co/nuestra_entidad/objetivos



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    modal5: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
