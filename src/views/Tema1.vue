<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Revisión y aprobación de información 
    
    .row.justify-content-center
      .col-md-10
        figure.mb-5
          img(src='@/assets/curso/banner-tema1.png', alt='Revisión y aprobación de información')

    p(data-aos="fade") El objetivo de este sistema es 
      span.etiqueta describir los parámetros de control para evitar que las entidades sean utilizadas como mecanismos de actividades ilícitas.
      |  Es por ello que se deben tener en cuenta ciertos elementos en recursos humanos e infraestructura, para que la gestión del sistema sea óptima, como:
   
    Separador


    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1 	El oficial de cumplimiento

    .row.justify-content-center.bg-secundario-2.border-bottom-verde.mb-4.py-4(data-aos="fade-down")
      .col-md-4.col-6.mb-4.mb-md-0
        figure
          img.px-md-3(src='@/assets/curso/tema1-1-img.svg', alt='Revisión y aprobación de información')
      .col-md-6
        p Dentro del Sistema de Administración de Riesgos de Lavado de Activos y Financiación del Terrorismo, <b>existe un responsable</b> (persona), quién vigilará y ejecutará labores del llamado Oficial de Cumplimiento, el cual tendrá como responsabilidades: 
        ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
          li.mb-1
            i.fas.fa-square
            | Implementar el sistema. 
          li.mb-1 
            i.fas.fa-square
            | Vigilar el funcionamiento adecuado. 
          li.mb-1
            i.fas.fa-square
            | Garantizar una cultura de prevención en el lavado de activos y la financiación del terrorismo, al interior de la organización.
          li.mb-1
            i.fas.fa-square
            | Cumplir con las políticas de la organización. 

    p(data-aos="fade") La función principal del Oficial de cumplimiento es la de administrar los riesgos de la entidad a la cual pertenece para lograr prevenir el lavado de activos y la financiación del terrorismo, y debe cumplir con unas características específicas expuestas en la siguiente gráfica:  

    TabsC.color-acento-botones.mb-5(data-aos="fade-down")
      .py-3.py-md-4(titulo="Características")
        .row.justify-content-center
          .col-md-5.col-9.mb-4.mb-md-0
            figure
              img.px-md-2(src='@/assets/curso/tema1-tabs1.jpg', alt='Características')        
          .col-md-5
            h4 Características
            ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
              li
                i.fas.fa-square
                | Debe tener un cargo jerárquico de segundo nivel, es decir, tiene poder de decisión, con comunicación directa con el máximo órgano social de la empresa, ya que utiliza su criterio y conocimiento en el manejo de la información confidencial para realizar los reportes ante la UIAF.
              li
                i.fas.fa-square
                | Tener conocimiento de las generalidades de SIPLAFT - SARLAFT – SAGRLAFT; contar con un certificado que lo acredite como oficial de cumplimiento y estar actualizándose constantemente en materia normativa vigente; controlar y mitigar los riesgos y realizar monitoreo de riesgo LA/FT.
              li
                i.fas.fa-square
                | No podrá pertenecer  a órganos de control.
              li
                i.fas.fa-square
                | Debe ser un empleado directo de la entidad.       
      .py-3.py-md-4(titulo="Funciones")
        .row.justify-content-center
          .col-md-5.col-9.mb-4.mb-md-0
            figure
              img.px-md-2(src='@/assets/curso/tema1-tabs2.jpg', alt='Funciones')        
          .col-md-5
            h4 Funciones
            ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
              li
                i.fas.fa-square
                | Debe vigilar el cumplimiento de los aspectos normativos con los temas relacionados a la prevención de LA/FT.
              li
                i.fas.fa-square
                | Promover programas de capacitación en temas relacionados con prevención del lavado de activos y financiación del terrorismo dentro de la organización.
              li
                i.fas.fa-square
                | Inspeccionar que todas las etapas se ejecuten de manera eficiente y oportuna, implementando el buen funcionamiento del SIPLAFT, SARLAFT, y generando las medidas correctivas del sistema.
              li
                i.fas.fa-square
                | Debe informar al representante legal y al máximo órgano social de la empresa cualquier falla que se pueda presentar en los controles establecidos dentro de los procedimientos.     
              li
                i.fas.fa-square
                | Atender cualquier requerimiento de la autoridad judicial que llegase a ser solicitado y reportar ante la UIAF.
              li
                i.fas.fa-square
                | Mantener toda la evidencia documental y magnética en reserva.
              li
                i.fas.fa-square
                | Certificar ante el ente de control el cumplimiento de lo previsto en materia de prevención de LAFT, de acuerdo con requerimiento de la entidad.      


    p(data-aos="fade") El oficial de cumplimiento, aparte de sus características y funciones, posee habilidades y actitudes que son encaminadas al desarrollo de sus funciones para el buen cumplimiento del sistema. Algunas de estas habilidades son: 

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-md-10.bg-secundario-2.border-bottom-verde.p-4.px-md-5
        ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
          li.mb-2
            i.fas.fa-square
            | Manejar los asuntos confidenciales y la información sensible. Además de esto, es una persona comprometida con la organización en la prevención de LA/FT. Cabe destacar que la información detectada para ser reportada se considera información de inteligencia, por lo cual es reservada.
          li.mb-2
            i.fas.fa-square
            | Esta persona cuenta con una buena comunicación con todo el personal interior de la organización, facilitando el camino a una buena cultura organizacional y un buen gobierno corporativo.
          li.mb-0
            i.fas.fa-square
            | Actúa de manera honesta, respetuosa y transparente, rechazando cualquier acto ilícito frente a cualquier operación de la entidad.

    .row.justify-content-center
      .col-md-8(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-1-img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h5.mb-0 Para que el oficial de cumplimiento se desempeñe de manera efectiva, debe tener liderazgo y una buena relación con todas las áreas de la entidad.

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-4(src="@/assets/curso/tema1-1-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Importancia del oficial de cumplimiento 
                  p.mb-0.text-small En el presente video, se explica el papel del oficial dentro de una entidad financiera.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=PkzTUa5pg4o')" target="_blank")
                    span Enlace
                    i.fas.fa-link  

    Separador


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2 	Documentación y estructura 

    p(data-aos="fade") El sistema de prevención de riesgos de lavado de activos y financiación del terrorismo, como el sistema SARLAFT, cuenta con una documentación necesaria para poder ser aplicado en la entidad; esta documentación permite mantener constancia de los procesos y registro de las actividades, garantizando de esta manera la integridad de la información allí contenida.

    p.mb-4(data-aos="fade") Para explicarlo de una manera más clara, se presenta un ejemplo:

    SlyderA.fondo-componente.py-md-5.py-3.px-md-0.px-4.mb-4(data-aos="fade-down")
      .row.justify-content-center
        .col-md-5.mb-4.mb-md-0
          h4 Ejemplo:
          p Si se tiene una constructora que tenga ingresos iguales o superiores a 30.000 salarios mínimos, donde se puede correr el riesgo de caer en actividades ilícitas, como el lavado de activos y la financiación del terrorismo.
          p.mb-0 <b>¿Qué se podría hacer?</b> Implementar el <b>SARLAFT</b>.
          p <b>¿Cómo se implementa este sistema?</b> Creando un manual <b>SARLAFT</b>, siguiendo el respectivo procedimiento y llenando los requisitos necesarios, que serían los siguientes: 
        .col-md-5
          figure
            img(src='@/assets/curso/tema1-2-slid1.jpg', alt='Texto que describa la imagen')
      .row.justify-content-center
        .col-md-5.mb-4.mb-md-0
          p Diligenciar el formulario del conocimiento del cliente, el cual se compone de la siguiente manera: 
          ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
            li.mb-0
              i.fas.fa-square
              | Datos de la persona natural o jurídica
            li.mb-0
              i.fas.fa-square
              | Personas PEP  
            li.mb-0
              i.fas.fa-square
              | Declaración de orígenes de fondo  
            li.mb-0
              i.fas.fa-square
              | Actividad en operaciones internacionales   
            li.mb-0
              i.fas.fa-square
              | Referencias personales y comerciales  
            li.mb-0
              i.fas.fa-square
              | Cláusula de autorización   
            li.mb-0
              i.fas.fa-square
              | Firma y huella  
            li.mb-0
              i.fas.fa-square
              | Información entrevista  
            li.mb-0
              i.fas.fa-square
              | Verificación de la información                
        .col-md-5
          figure
            img(src='@/assets/curso/tema1-2-slid2.jpg', alt='Texto que describa la imagen')
      .row.justify-content-center
        .col-md-5.mb-4.mb-md-0
          p Reunir los documentos mínimos requeridos: 
          h4 Si es persona natural:
          ol.lista-ol--cuadro.mb-0
            li.mb-2
              .lista-ol--cuadro__vineta
                span 1
              | Constancia de ingresos (honorarios laborales, certificado de ingresos y retenciones o el documento que corresponda).
            li.mb-2
              .lista-ol--cuadro__vineta
                span 2
              | Fotocopia del documento de identificación.
            li.mb-2
              .lista-ol--cuadro__vineta
                span 3
              | Declaración de renta del último período gravable disponible (si declara).
            li.mb-2
              .lista-ol--cuadro__vineta
                span 4
              | Fotocopia del RUT – Certificación bancaria.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 5
              | Estados financieros (si aplica).      
        .col-md-5
          figure
            img(src='@/assets/curso/tema1-2-slid3.jpg', alt='Texto que describa la imagen')
      .row.justify-content-center
        .col-md-10
          h4 Si es persona jurídica:
          ol.lista-ol--cuadro.mb-0
            li.mb-1
              .lista-ol--cuadro__vineta
                span 1
              | Fotocopia del documento de identidad del representante legal y/o de las personas autorizadas para realizar trámites a nombre de la entidad.
            li.mb-1
              .lista-ol--cuadro__vineta
                span 2
              | Fotocopia del RUT.
            li.mb-1
              .lista-ol--cuadro__vineta
                span 3
              | Certificado de existencia y representación legal con vigencia no superior a 30 días.
            li.mb-1
              .lista-ol--cuadro__vineta
                span 4
              | Certificación bancaria no mayor a tres meses.
            li.mb-1
              .lista-ol--cuadro__vineta
                span 5
              | Certificación de composición accionaria de la empresa: identidad de aquellos accionistas que posean en forma directa o indirecta más del cinco por ciento (5%) del capital social o que, teniendo una participación menor, tengan el control de la sociedad, así como la información sobre el grupo económico al que pertenecen. La información proporcionada debe permitir identificar a la(s) persona(s) natural(es) que posee(n) o ejerce(n) el control efectivo final sobre la persona jurídica.
            li.mb-1
              .lista-ol--cuadro__vineta
                span 6
              | Identificación de personas jurídicas en las que una persona expuesta políticamente (PEP) posea cuando menos el 5% del capital social, aporte o participación, y que, según el sujeto obligado, posea un alto riesgo de LA/FT.
            li.mb-1
              .lista-ol--cuadro__vineta
                span 7
              | Declaración de renta del último período gravable disponible.
            li.mb-1
              .lista-ol--cuadro__vineta
                span 8
              | Dos referencias comerciales.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 9
              | Estados financieros de la última fecha de corte disponible.              

    p.mb-4(data-aos="fade") Es muy importante saber quién será el cliente; de esta manera, es posible prevenir los riesgos, y esto se puede lograr mediante la recolección de información relevante, es decir, los movimientos financieros, las operaciones con la empresa, posibles operaciones de tipo inusual que permitan detectar y analizar operaciones sospechosas. 

    .row.justify-content-center
      .col-md-9(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-2-img.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La información relevante es la que permite establecer la identificación completa, la actividad económica, el volumen y las características de las transacciones. Se debe realizar con la mayor responsabilidad y compromiso por parte de todos los empleados o personas que intervienen en este proceso.

    Separador


    // 1.3
    #t_1_3.titulo-segundo(data-aos="fade-right")
      .h2 1.3 	Indagación del proceso de afiliación 

    p.mb-4(data-aos="fade") Para poder ejecutar el proceso de afiliación al Sistema de Administración de Riesgos de Lavado de Activos y Financiación del Terrorismo, se debe conocer a profundidad al cliente, de la siguiente manera: 

    .row.justify-content-center.mb-4
      .col-md-5.tarjetas-modal.mb-4
        figure
          img(src='@/assets/curso/tema1-3-tarj1.jpg', alt='Texto que describa la imagen')
        .bg-secundario-1.py-5
          h4.text-center Perfil del sujeto
          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
            span Ver más
            i.fas.fa-chevron-right
            .indicador--click(v-if="mostrarIndicador")

      .col-md-5.tarjetas-modal.mb-4
        figure
          img(src='@/assets/curso/tema1-3-tarj2.jpg', alt='Texto que describa la imagen')
        .bg-secundario-1.py-5
          h4.text-center Georeferenciación espacial y temporal
          a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
            span Ver más
            i.fas.fa-chevron-right
            .indicador--click(v-if="mostrarIndicador")    

      .col-md-5.tarjetas-modal.mb-4
        figure
          img(src='@/assets/curso/tema1-3-tarj3.jpg', alt='Texto que describa la imagen')
        .bg-secundario-1.py-5
          h4.text-center Perfil económico
          a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
            span Ver más
            i.fas.fa-chevron-right
            .indicador--click(v-if="mostrarIndicador")

      .col-md-5.tarjetas-modal.mb-4
        figure
          img(src='@/assets/curso/tema1-3-tarj4.jpg', alt='Texto que describa la imagen')
        .bg-secundario-1.py-5
          h4.text-center Perfil financiero
          a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
            span Ver más
            i.fas.fa-chevron-right
            .indicador--click(v-if="mostrarIndicador")              

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            img(src='@/assets/curso/tema1-3-modal1.svg', alt='Perfil del sujeto')
          h4 Perfil del sujeto  
          .row
            .col-md-6
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 1
                  strong ¿Quién es?  
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Nombres completos y /o razón social.   
                li.mb-0
                  i.fas.fa-square
                  | Tipo y número de identificación.  
                li.mb-0
                  i.fas.fa-square
                  | Nacionalidad.     
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 2
                  strong ¿Dónde está ubicado?  
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Dirección y teléfono de residencia y oficina.   
                li.mb-0
                  i.fas.fa-square
                  | Número de celular. 
                li.mb-0
                  i.fas.fa-square
                  | Correo electrónico. 
                li.mb-0
                  i.fas.fa-square
                  | Sucursales de la razón social.  
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 3
                  strong ¿Familiares? 
              ul.lista-ul--color.lista-circulo.lista-acento-botones.px-2
                li.mb-0
                  i.fas.fa-square
                  | Identificar PEP.  
                li.mb-0
                  i.fas.fa-square
                  | Estado civil. 
                li.mb-0
                  i.fas.fa-square
                  | Identificación de los hijos.       
            .col-md-6
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 4
                  strong ¿Dónde trabaja?  
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Historia laboral. 
                li.mb-0
                  i.fas.fa-square
                  | Identificar razón social, dirección, teléfono, correo electrónico, último cargo y nombre del jefe inmediato. 
                li.mb-0
                  i.fas.fa-square
                  | Experiencia laboral.    
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 5
                  strong ¿Qué obligaciones debe cumplir? 
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Con la supervisión.   
                li.mb-0
                  i.fas.fa-square
                  | Con la DIAN. 
                li.mb-0
                  i.fas.fa-square
                  | Con la UIAF.  
                li.mb-0
                  i.fas.fa-square
                  | Otros.
                li.mb-0
                  i.fas.fa-square
                  | Si ha sido sancionado.          

    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            img(src='@/assets/curso/tema1-3-modal2.svg', alt='Perfil del sujeto')
          h4 Georeferenciación espacial y temporal 
          .row
            .col-md-6
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 1
                  strong ¿Ciudades?  
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Ciudad de residencia.  
                li.mb-0
                  i.fas.fa-square
                  | Ciudad dónde está ubicada la razón social principal y sucursales.  
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 2
                  strong ¿Dónde realiza sus operaciones? 
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Si están centralizadas en una sola ciudad. 
                li.mb-0
                  i.fas.fa-square
                  | Si sus operaciones están dispersas en diferentes ciudades.               
            .col-md-6
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 3
                  strong ¿Países? 
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | ¿Realiza operaciones en moneda extranjera?  
                li.mb-0
                  i.fas.fa-square
                  | ¿Con quién y cómo las canaliza?
                li.mb-0
                  i.fas.fa-square
                  | ¿Cuál es el negocio que realiza con moneda extranjera? ¿Qué países intervienen? 
                li.mb-0
                  i.fas.fa-square
                  | ¿Está catalogado como paraíso fiscal o está en alguna lista de la OCDE, GAFI, entre otros? 
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 4
                  strong ¿Tiempo?
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | ¿Cuál es el periodo de análisis de información de lavado de activos y financiación del terrorismo?

    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            img(src='@/assets/curso/tema1-3-modal3.svg', alt='Perfil del sujeto')
          h4 Perfil económico
          .row
            .col-md-6
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 1
                  strong ¿Qué hace? 
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Origen de sus recursos. 
                li.mb-0
                  i.fas.fa-square
                  | ¿Cuál es la actividad económica que desarrolla?
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 2
                  strong ¿Empresas?
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Con cuáles personas jurídicas tiene relaciones y qué tipo de relaciones tiene, así como el período de relación.
                li.mb-0
                  i.fas.fa-square
                  | Las empresas mencionadas, ¿tienen relación entre sí?
                li.mb-0
                  i.fas.fa-square
                  | ¿Es una empresa reconocida o no? ¿De reciente creación? 
            .col-md-6
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 3
                  strong ¿Proveedores?
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | ¿Quiénes son sus proveedores? Tiempo de experiencia.    
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 4
                  strong ¿Otros recursos? 
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Identificar otras fuentes de ingreso. 
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 5
                  strong ¿Tiene activos, patrimonios o pasivos?  


    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            img(src='@/assets/curso/tema1-3-modal4.svg', alt='Perfil del sujeto')
          h4 Perfil financiero
          .row
            .col-md-6
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 1
                  strong ¿Productos financieros?  
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | ¿Tiene acceso al sistema financiero?  
                li.mb-0
                  i.fas.fa-square
                  | Identificar los establecimientos de crédito.
                li.mb-0
                  i.fas.fa-square
                  | Solicitar referencias bancarias, en los casos que sean pertinentes.    
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 2
                  strong ¿Manejo de efectivo?
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | ¿Tiene políticas respecto del manejo de efectivo?  
                li.mb-0
                  i.fas.fa-square
                  | Solicitar referencias bancarias en los casos que sean pertinentes. 
            .col-md-6
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 3
                  strong ¿Estados financieros?
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Balance general y del resultado (PYG). 
              ol.lista-ol--cuadro.mb-0
                li.mb-2
                  .lista-ol--cuadro__vineta
                    span 4
                  strong ¿Declaración de renta?
              ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-4.px-2
                li.mb-0
                  i.fas.fa-square
                  | Confrontar la información presentada en los balances.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-1.col-3.titulo-tercero.m-0
        img.p-2.py-3(src='@/assets/curso/tema1-3-ico.svg', alt='Texto que describa la imagen')
      .col-md-7.col-7.m-0.p-0.titulo-tercero-2
        h4.mb-0
          span.mb-0.text-white Formatos

    p.mb-4(data-aos="fade") A continuación, se presentará el Formato Único de Conocimiento, a diligenciar. Este formato permitirá conocer y revisar la información del cliente (persona natural o jurídica) según los requerimientos SARLAFT. 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-4(src="@/assets/curso/tema1-3-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Formato conocimiento del cliente
                  p.mb-0.text-small En el presente archivo, se encuentra un ejemplo de Formato único de conocimiento.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1.Formulario_conocimiento_Cliente.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    p.mb-4(data-aos="fade") También existen formatos de vinculación de contrapartes, los cuales son utilizados para toda persona natural o jurídica con quien la entidad formaliza una relación contractual o legal, como contratista, proveedor, outsourcing, contratos de red de prestadores, compradores y/o cualquier figura contractual que suponga transacciones  efectivas de recursos.

    .row.justify-content-center
      .col-md-5.mb-4(data-aos="fade-right") 
        a.anexo(:href="obtenerLink('/downloads/Anexo_2.Formato-actualizacion-vinculacion-contrapartes-persona-natural.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <b>Anexo.</b> Formato de vinculación de contrapartes y/o actualización – Persona natural 
      .col-md-5.mb-4(data-aos="fade-left") 
        a.anexo(:href="obtenerLink('/downloads/Anexo_3.Formato-actualizacion-vinculacion-contrapartes-persona-juridica.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <b>Anexo.</b> Formato de vinculación de contrapartes y/o actualización – Persona jurídica 

    Separador


    // 1.4
    #t_1_4.titulo-segundo(data-aos="fade-right")
      .h2 1.4  Cumplimiento de requisitos 

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p En la implementación del Sistema de Administración de Riesgos de Lavado de Activos y Financiación del Terrorismo, se deben cumplir una serie de requisitos para poder ceñirse al debido proceso de afiliación y ejecución del sistema.  
        p.mb-4 A continuación, se adjunta una lista de chequeo (ejemplo) para verificar si se cumple con la documentación necesaria para el SARLAFT. 
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_4.Lista_de_chequeo.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p <b>Lista de chequeo.</b> El siguiente ejemplo permitirá verificar los requisitos a cumplir como cliente. 
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-4-img.png', alt='Texto que describa la imagen') 

    Separador


    // 1.5
    #t_1_5.titulo-segundo(data-aos="fade-right")
      .h2 1.5  Sanciones

    .row.mb-4
      .col-md-6.mb-4(data-aos="fade-right")
        p De acuerdo con las recomendaciones dadas por el GAFI sobre el cumplimiento del SARLAFT 4.0, en el numeral 26: “Regulación y supervisión de las instituciones financieras “, y su numeral 35: “Sanciones”, las instituciones financieras deben estar en la regulación y supervisión adecuada. Debe asegurarse de que existan unas sanciones eficaces, proporcionales y disuasivas, bien sean penales, civiles o administrativas, para las personas naturales o jurídicas que incumplan con los requisitos ALA/CFT. 
        p En los últimos 3 años, se han emitido un aproximado de 31 sanciones, de las cuales, el 58% se efectuaron en el 2018 y, en lo que va del 2020, se han emitido 4 sanciones.  
        p La Superintendencia Financiera de Colombia tiene como objetivo principal la inspección, vigilancia y control de las personas pertenecientes a las entidades vigiladas. Estas sanciones se han debido al incumplimiento del SARLAFT 4.0.
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-5-img.png', alt='Texto que describa la imagen') 

    .row.justify-content-center.mb-4
      .col-md-10.bg-secundario-2.border-bottom-verde.py-4(data-aos="fade-down")
        .row.justify-content-center
          .col-md-2.col-5.mb-4.mb-md-0
            figure
              img.px-md-3(src='@/assets/curso/tema1-5-img2.svg', alt='Revisión y aprobación de información')
          .col-md-8
            p Las multas a las personas o las entidades se han producido, en su mayor parte, entre el lapso de noviembre del 2017 y octubre del 2020, cuando se han acumulado 31 sanciones, de las cuales:
            ul.lista-ul--color.lista-circulo.lista-acento-botones.mb-0
              li.mb-0
                i.fas.fa-square
                | Un 48% han estado relacionadas con los corredores de seguros.
              li.mb-0
                i.fas.fa-square
                | El 16%, comisionistas de bolsa. 
              li.mb-0
                i.fas.fa-square
                | El 36%, bancos, compañías de financiamiento, fondos de pensiones, fiduciarias, etc.   

    p.mb-4(data-aos="fade") La Superfinanciera de Colombia puede imponer las siguientes sanciones: 
        
    .row.justify-content-center.mb-5
      .col-md-8
        figure
          img(src='@/assets/curso/tema1-5-figura.svg', alt='Sanciones')

    p.mb-4(data-aos="fade") En el periodo de análisis solo se dieron multas de un valor aproximado de $2.600.000 y un valor promedio de $90.000.000 de pesos colombianos, aunque hubo una multa alta, de $400.000.000, en el año 2018.

    .row.justify-content-center.mb-4
      .col-md-10.tarjeta.bg-secundario-1.py-4
        .row.justify-content-center.align-items-center
          .col-md-4.mb-3.mb-md-0
            h4 Estas multas se han presentado por diferentes motivos descritos en la siguiente tabla: 
          .col-md-6 
            a.anexo(:href="obtenerLink('/downloads/Anexo_5.Multas.docx')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-doc.svg")
              .anexo__texto
                p <b>Motivos de las multas.</b> En el siguiente anexo, encontrará las razones o motivos de las multas impuestas. 





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
