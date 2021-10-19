<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center
      .col-md-10
        figure.mb-5
          img(src='@/assets/curso/intro-banner.png', alt='Texto que describa la imagen')

    p.mb-4(data-aos="fade") A continuación, se presenta un video que hará una breve introducción del presente componente formativo:

    .row.justify-content-center.tarjeta.fondo-video.mb-4(data-aos="fade-down") 
      .col-md-10.py-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade") Para la elaboración de este componente, se abordaron varios autores conocidos en gestión <b>SARLAFT</b>, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de las solicitudes financieras bajo la normatividad <b>SARLAFT</b>.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
