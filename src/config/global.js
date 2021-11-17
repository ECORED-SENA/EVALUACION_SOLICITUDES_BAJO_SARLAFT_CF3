export default {
  global: {
    componenteFormativo: 'Gestión SARLAFT',
    descripcionCurso:
      'En las organizaciones de hoy día, es importante la aplicación de la normatividad vigente, más aún en las entidades de carácter financiero, constructoras, cooperativas, entre otras. <br/><br/>El Sistema de Administración de Riesgos de Lavado de Activos y Financiación del Terrorismo, SARLAFT, debe tomarse no solo como  requisito, sino como una alternativa de mejora para la empresa y sus agentes relacionados, ya que permitirá mejorar los procesos administrativos y evitar sanciones por incumplimiento.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Revisión y aprobación de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El oficial de cumplimiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Documentación y estructura',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Indagación del proceso de afiliación ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Cumplimiento de requisitos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Sanciones',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Informe',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Informe de vinculación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Unidad de Información y Análisis Financiero – UIAF',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Coopfuturo. (2017). SARLAFT – Sistema de Administracion del Riesgo de Lavado de Activos y Financiacion del Terrorismo. ',
      link:
        'https://coopfuturo.com.co/wp-content/uploads/2019/09/SARLAFT-CAPACITACION-vfinal_DIC_14_2017.pdf ',
    },
    {
      referencia:
        'Angel, J. (2021). El Oficial de Cumplimiento en SAGRILAFT, SARLAFT y SALIFPT y sus funciones. Grupo CD&S. ',
      link:
        'https://www.grupocdys.com.co/el-oficial-de-cumplimiento-en-sagrilaft-sarlaft-y-salifpt-y-sus-funciones/ ',
    },
    {
      referencia:
        'Macías, M. (2018). Perfil del oficial de cumplimiento, Funciones del Oficial de Cumplimiento. Compliance. ',
      link:
        'https://www.compliance.com.co/perfil-de-oficial-de-cumplimiento-funciones-del-oficial-de-cumplimiento/ ',
    },
    {
      referencia:
        'Moreno, E. (2021). SARLAFT 4.0: 11 motivos de sanción por incumplimiento de la norma. Aml | Stradata. ',
      link:
        'https://aml.stradata.co/sarlaft-4-0-11-motivos-de-sancion-por-incumplimiento-de-la-norma/ ',
    },
    {
      referencia: 'UIAF. (s. f.-a). Objetivos. Gov.co. ',
      link: 'https://www.uiaf.gov.co/nuestra_entidad/objetivos ',
    },
    {
      referencia: 'UIAF. (s. f.-b). ¿Quiénes somos? ',
      link: 'https://www.uiaf.gov.co/nuestra_entidad/quienes_somos ',
    },
  ],
  glosario: [
    {
      termino: 'Accionista',
      significado:
        'Puede ser un persona física, persona natural, como forma de su patrimonio; o una persona jurídica, es decir, cualquier sociedad, organismo o ente que tenga entre sus activos una participación empresarial.',
    },
    {
      termino: 'Amonestación',
      significado:
        'Es una crítica hecha con la intención de evitar que se repita un comportamiento indeseable. En los negocios, es la primera herramienta con la que cuenta una empresa para sancionar las faltas e incumplimientos leves o graves por parte de un trabajador.<br> Hay dos tipos de amonestaciones: verbal y por escrito.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'Se pueden denominar como cuentas anuales, informes financieros o estados contables. Son el reflejo de la contabilidad de una empresa y muestran la estructura económica de esta en un periodo dado, es decir, muestran el ejercicio económico de un año de la empresa.',
    },
    {
      termino: 'Gafi',
      significado:
        'Es un ente intergubernamental establecido en 1989, cuyo objetivo es fijar estándares y promover la implementación efectiva de medidas legales, regulatorias y operativas para combatir el lavado de activos, el financiamiento del terrorismo y el financiamiento de la proliferación de armas de destrucción masiva, y otras amenazas a la integridad del sistema financiero internacional.',
    },
    {
      termino: 'Multa',
      significado:
        'Es una sanción o castigo que puede imponer una autoridad sobre aquellos que han incumplido alguna norma. Es pecuniaria, puesto que debe pagarse en dinero y, usualmente, es coercitiva, ya que, en caso de no cumplimiento del pago, se aplican multas sucesivas y acumulativas.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'Una persona jurídica es una organización o grupo de personas naturales a quienes la ley reconoce personalidad independiente y diferenciada de la de cada uno de sus miembros o componentes, capaz de ejercer derechos y contraer obligaciones, y de ser representada judicial y extrajudicialmente.',
    },
    {
      termino: 'Persona natural',
      significado:
        'Es todo individuo de la especie humana, cualquiera que sea su raza, sexo, estirpe o condición. Ahora bien, en términos empresariales, la persona natural es aquel individuo que, al actuar en su propio nombre, se ocupa de alguna o algunas actividades que la ley considera mercantiles. ',
    },
    {
      termino: 'Sanciones civiles',
      significado:
        'Las sanciones civiles se emplean para corregir el daño que el individuo hace a la sociedad a partir de la falta cometida. Estas sanciones se encuentran reguladas en el Código Civil y Comercial. ',
    },
    {
      termino: 'Sanciones penales',
      significado:
        'Estas se corresponden con delitos propiamente penales, es decir, que se encuadran dentro de la regulación del Código Penal. No todas las faltas cometidas poseen como consecuencia el encarcelamiento de la persona.',
    },
    {
      termino: 'Sanciones sociales',
      significado:
        'Las sanciones sociales, tal como lo indica su nombre, son aplicadas por la sociedad en su conjunto. Ante alguna conducta o modo de operatoria que se encuentre catalogado como “incorrecto”, la sociedad actúa como órgano de sanción, en el sentido de que se encarga de acusar estas infracciones (como, por ejemplo, estacionar el auto en las salidas de las ambulancias o derrochar mucha agua).',
    },
    {
      termino: 'Sociedad',
      significado:
        'Una sociedad es un grupo de personas que sigue un determinado ordenamiento. Asimismo, tienen costumbres en común, lo cual abarca distintos ámbitos de la vida. Por ejemplo, se comparte tanto el uso de la misma moneda como la historia y las tradiciones festivas.',
    },
  ],
  complementario: [
    {
      texto:
        'Alianza Temporales. (2021, 11 febrero). Capacitación SARLAFT [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/kFOeVkgD38U',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto temático ',
        centro:
          'Centro de la Industria, la Empresa y los Servicios CIES <br>Regional Norte de Santander',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro de Diseño y Metrología <br>Regional de Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varon Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
