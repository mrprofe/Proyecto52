const STORAGE_KEY = "proyecto52_caballeros_datos_v2";
const PUBLISHED_MISSIONS = 36;
const MAX_ENABLED_CHAPTER = 9;

const EPISODE_URLS = {
  1: "https://youtu.be/8E3lHhg3xOQ",
  2: "https://youtu.be/xlvM_KSeIdc",
  3: "https://youtu.be/YAAKahrZFo8",
  4: "https://youtu.be/XXjWrtJP82A",

  5: "https://youtu.be/YyWAdLfeaLI",
  6: "https://youtu.be/tdPNNWi57zk",
  7: "https://youtu.be/sD8xBAubyYQ",
  8: "https://youtu.be/GG_G1K8yVs4",
  
  9: "https://youtu.be/QqqFTQq2M1I",
 10: "https://youtu.be/eeCV8BQAFq0",
 11: "https://youtu.be/hl4RCYHb4aY",
 12: "https://youtu.be/pOvNlvrp-YY",
 
 13: "https://youtu.be/AJEnlETiVcg",
 14: "https://youtu.be/HRX1PCufa0I",
 15: "https://youtu.be/TA5h0sctYdA",
 16: "https://youtu.be/x5bSe-Rzh00",

 17: "https://youtu.be/za6O9YoFiE8",
 18: "https://youtu.be/mDQ_gS5ZS7Y",
 19: "https://youtu.be/qI2abwyOGGQ",
 20: "https://youtu.be/Eb2gJ2Rqyh4",
 
 21: "https://youtu.be/zogoiaPpGqw",
 22: "https://youtu.be/HiukRJnYC7o",
 23: "https://youtu.be/fPF-q_Hgevk",
 24: "https://youtu.be/X38BT0hIZmo",

 25: "https://youtu.be/JfMOt_kTc8g",
 26: "https://youtu.be/W3tb1wWd7nw",
 27: "https://youtu.be/ONcS9s3onb4",
 28: "https://youtu.be/d5p-qNIB04c",
 
 29: "https://youtu.be/iiEXf-XxQvo",
 30: "https://youtu.be/WQ-UdEYPjd8",
 31: "https://youtu.be/emJZrkeqgUQ",
 32: "https://youtu.be/OOCv74BMijk",
 
 33: "https://youtu.be/X5KImcsxrCY",
 34: "https://youtu.be/TIgDj-ddZ1Y",
 35: "https://youtu.be/Von-R2uDJSQ",
 36: "https://youtu.be/IgQvc5XMUk8",

};

const YOUTUBE_CHANNEL = "https://www.youtube.com/@proyecto52";
const CATALOG_URL = "../#catalogo";

const houses = [
  {
    id: 1,
    name: "Casa del Origen",
    chapter: "01 · Bases de Datos desde Cero (Analítica y SQL)",
    guardian: "Archivon, Guardián del Origen",
    enemy: "Duplicatus",
    badge: "Insignia del Origen",
    artifact: "Casco de las Tablas",
    story: "Todo caballero comienza entendiendo dónde nacen los datos, cómo se organizan y por qué una base bien diseñada es el inicio de toda solución inteligente.",
	missions: [
	  q(1, "Modelos relacional y NoSQL", "¿Cuál es una diferencia clave entre una base de datos relacional y una NoSQL?", "La relacional organiza datos en tablas y la NoSQL permite modelos más flexibles", ["NoSQL siempre usa SQL", "Las relacionales no guardan datos", "Ambas son exactamente iguales"], "El modelo relacional usa tablas, claves y relaciones; NoSQL puede usar documentos, clave-valor, grafos u otros modelos."),
	  q(2, "Modelado relacional", "¿Qué elemento permite conectar correctamente dos tablas en un modelo relacional?", "Una clave relacionada entre ambas tablas", ["Un color de fondo", "Un archivo de imagen", "Una contraseña del sistema"], "Las claves primarias y foráneas permiten representar relaciones entre entidades."),
	  q(3, "SQL básico", "¿Cuál comando SQL se usa para consultar datos de una tabla?", "SELECT", ["INSERT", "DELETE", "UPDATE"], "SELECT permite recuperar información desde una o varias tablas."),
	  q(4, "Optimización y normalización", "¿Qué busca la normalización en una base de datos?", "Reducir redundancia y mejorar la organización de los datos", ["Duplicar todas las tablas", "Eliminar las claves primarias", "Evitar que se hagan consultas"], "La normalización ayuda a diseñar estructuras más limpias y consistentes.")
	]
  },
  {
    id: 2,
    name: "Casa de las Consultas Sagradas",
    chapter: "02 · Bases de Datos Avanzadas (SQL, Transacciones y NoSQL)",
    guardian: "Queryon, Maestro de las Claves",
    enemy: "Caos SQL",
    badge: "Insignia de Consulta",
    artifact: "Guante de Joins",
    story: "El camino se vuelve más retador: consultas complejas, transacciones, integridad y nuevas formas de almacenar datos prueban el dominio del aspirante.",
	missions: [
	  q(5, "Índices, vistas y procedimientos", "¿Para qué puede servir un índice en una base de datos?", "Para acelerar búsquedas y consultas sobre columnas específicas", ["Para borrar tablas automáticamente", "Para cambiar el idioma de SQL", "Para convertir datos en imágenes"], "Un índice ayuda a encontrar datos más rápido, aunque debe usarse con criterio."),
	  q(6, "Transacciones y bloqueos", "¿Qué garantiza una transacción bien manejada?", "Que un conjunto de operaciones se complete correctamente o se revierta", ["Que la base de datos no necesite tablas", "Que todos los usuarios escriban al mismo tiempo sin control", "Que se eliminen los registros duplicados siempre"], "Las transacciones ayudan a mantener consistencia, especialmente cuando hay concurrencia."),
	  q(7, "MongoDB y Neo4J", "¿Qué diferencia general hay entre MongoDB y Neo4J?", "MongoDB trabaja con documentos y Neo4J con grafos", ["MongoDB solo sirve para imágenes", "Neo4J es una hoja de cálculo", "Ambas usan únicamente tablas relacionales"], "MongoDB se orienta a documentos; Neo4J se usa para representar relaciones mediante nodos y aristas."),
	  q(8, "Redis y DB4O", "¿Por qué Redis suele ser muy rápido?", "Porque trabaja principalmente en memoria", ["Porque no almacena datos", "Porque solo acepta archivos PDF", "Porque reemplaza todos los servidores"], "Redis es una base clave-valor en memoria, usada mucho para caché, sesiones y datos temporales.")
	]
  },
  {
    id: 3,
    name: "Casa del Código Vivo",
    chapter: "03 · Programación para Ciencia de Datos (Python, Pandas y R)",
    guardian: "Pyron, Domador del Código",
    enemy: "Bug Infinito",
    badge: "Insignia del Código",
    artifact: "Espada Pandas",
    story: "Los datos ya no solo se consultan: ahora se limpian, transforman y exploran con código. El aspirante aprende a hablar el lenguaje de los datos.",
	missions: [
	  q(9, "Fundamentos de Python", "¿Por qué Python es tan usado en ciencia de datos?", "Por su facilidad y ecosistema de librerías para analizar datos", ["Porque solo sirve para videojuegos", "Porque no permite trabajar con archivos", "Porque reemplaza automáticamente cualquier base de datos"], "Python combina una sintaxis sencilla con herramientas como Pandas, NumPy y librerías de IA."),
	  q(10, "Manipulación con Pandas", "¿Qué estructura de Pandas se usa comúnmente para trabajar datos en filas y columnas?", "DataFrame", ["Array visual", "Prompt", "Servidor"], "El DataFrame es una estructura tabular muy usada para limpiar, transformar y analizar datos."),
	  q(11, "Visualización de datos", "¿Para qué se usan librerías como Matplotlib y Seaborn?", "Para crear gráficos que ayuden a entender los datos", ["Para crear contraseñas", "Para reemplazar SQL Server", "Para entrenar modelos sin datos"], "La visualización permite detectar patrones, tendencias y comportamientos en los datos."),
	  q(12, "Introducción a R", "¿En qué área es muy usado R?", "Análisis estadístico y ciencia de datos", ["Diseño de circuitos", "Edición de video", "Administración de redes WiFi"], "R es muy utilizado para estadística, análisis exploratorio, visualización y modelado.")
	]
  },
  {
    id: 4,
    name: "Casa de la Probabilidad",
    chapter: "04 · Estadística Aplicada para Ciencia de Datos",
    guardian: "Estadion, Oráculo de la Variabilidad",
    enemy: "Azar Confuso",
    badge: "Insignia Estadística",
    artifact: "Escudo de Probabilidad",
    story: "La incertidumbre aparece en cada dato. Solo quien entiende variabilidad, promedio, dispersión y evidencia puede interpretar la realidad sin dejarse engañar.",
	missions: [
	  q(13, "Estadística descriptiva", "¿Qué busca la estadística descriptiva?", "Resumir y describir datos usando medidas y gráficos", ["Predecir siempre el futuro", "Eliminar la necesidad de datos", "Crear bases NoSQL"], "La estadística descriptiva ayuda a entender un conjunto de datos antes de modelar."),
	  q(14, "Probabilidad y distribuciones", "¿Qué describe una distribución de probabilidad?", "Cómo se comportan los posibles valores de una variable", ["El diseño visual de una página", "La contraseña de una base de datos", "El tipo de monitor usado"], "Las distribuciones permiten modelar incertidumbre y patrones de ocurrencia."),
	  q(15, "Hipótesis y significancia", "¿Para qué sirve una prueba de hipótesis?", "Para evaluar si existe evidencia estadística sobre una afirmación", ["Para garantizar causalidad siempre", "Para borrar valores extremos", "Para ordenar columnas alfabéticamente"], "Las pruebas de hipótesis ayudan a tomar decisiones basadas en evidencia."),
	  q(16, "Regresión lineal", "¿Qué busca estimar una regresión lineal básica?", "La relación entre una variable dependiente y una o más variables explicativas", ["La clave primaria de una tabla", "El color correcto de un dashboard", "La cantidad exacta de servidores"], "La regresión lineal permite modelar relaciones y hacer estimaciones.")
	]
  },
  {
    id: 5,
    name: "Casa de los Flujos",
    chapter: "05 · Ingeniería de Datos",
    guardian: "Pipelinus, Forjador de Flujos",
    enemy: "ETL Roto",
    badge: "Insignia de Ingeniería",
    artifact: "Armadura de Pipelines",
    story: "Los datos deben viajar desde sus fuentes hasta zonas confiables. En esta casa se construyen caminos, reglas y procesos para que el conocimiento pueda escalar.",
	missions: [
	  q(17, "Ingeniería de datos", "¿Cuál es el objetivo principal de la ingeniería de datos?", "Preparar y mover datos de forma confiable para análisis y soluciones", ["Crear logos", "Eliminar todas las fuentes", "Evitar que los datos se usen"], "La ingeniería de datos construye procesos para que la información llegue limpia, organizada y disponible."),
	  q(18, "ETL", "¿Qué significa ETL?", "Extraer, transformar y cargar datos", ["Entrenar, traducir y limpiar", "Escribir, tabular y lanzar", "Eliminar tablas largas"], "ETL describe un flujo clásico para mover datos desde fuentes hasta destinos analíticos."),
	  q(19, "Data Warehousing", "¿Para qué sirve un Data Warehouse?", "Para integrar y organizar datos orientados al análisis", ["Para guardar únicamente imágenes", "Para reemplazar todos los lenguajes", "Para impedir consultas"], "Un Data Warehouse centraliza datos preparados para reportes, análisis y toma de decisiones."),
	  q(20, "Cloudera y Spark", "¿Por qué se usan herramientas como Spark?", "Para procesar grandes volúmenes de datos de forma distribuida", ["Para hacer presentaciones", "Para reemplazar el teclado", "Para eliminar la nube"], "Spark permite procesar datos a gran escala usando cómputo distribuido.")
	]
  },
  {
    id: 6,
    name: "Casa del Aprendizaje",
    chapter: "06 · Machine Learning",
    guardian: "Modelion, Entrenador de Patrones",
    enemy: "Data Leak",
    badge: "Insignia Predictiva",
    artifact: "Lanza del Modelo",
    story: "Los datos empiezan a aprender. El aspirante entrena modelos, evalúa resultados y comprende que predecir no es magia: es patrón, métrica y validación.",
	missions: [
	  q(21, "Introducción a Machine Learning", "¿Qué busca Machine Learning?", "Que un modelo aprenda patrones a partir de datos", ["Que la computadora tenga emociones", "Que los datos se borren solos", "Que no exista entrenamiento"], "Machine Learning permite crear modelos que aprenden relaciones desde ejemplos."),
	  q(22, "KNN y SVM", "¿Qué tipo de problema resuelven comúnmente KNN y SVM?", "Clasificación", ["Normalización de bases de datos", "Creación de dashboards", "Compresión de imágenes"], "KNN y SVM se usan frecuentemente para clasificar observaciones en categorías."),
	  q(23, "Regresión lineal y logística", "¿Cuál es una diferencia general entre regresión lineal y logística?", "La lineal estima valores continuos y la logística suele clasificar categorías", ["Ambas solo sirven para texto", "La logística no usa datos", "La lineal solo crea tablas"], "La regresión lineal se usa para valores numéricos; la logística para clasificación binaria o probabilidades."),
	  q(24, "Validación cruzada y overfitting", "¿Qué problema ocurre cuando un modelo memoriza demasiado el entrenamiento?", "Overfitting", ["Normalización", "Indexación", "Tokenización"], "El overfitting ocurre cuando el modelo funciona bien en entrenamiento pero falla con datos nuevos.")
	]
  },
  {
    id: 7,
    name: "Casa de los Modelos Avanzados",
    chapter: "07 · Machine Learning Avanzado: Árboles, Clustering y Ensambles",
    guardian: "Arbor, Señor de las Ramas",
    enemy: "Overfitor",
    badge: "Insignia Avanzada",
    artifact: "Arco de Ensamble",
    story: "La ruta se divide en ramas, grupos y combinaciones de modelos. Aquí se aprende que un buen caballero no solo entrena: compara, ajusta y controla el sobreajuste.",
	missions: [
	  q(25, "Árboles y Random Forest", "¿Qué ventaja tiene Random Forest frente a un solo árbol?", "Combina varios árboles para mejorar estabilidad y reducir sobreajuste", ["Usa menos datos siempre", "No necesita variables", "Solo funciona con texto"], "Random Forest es un ensamble de árboles de decisión."),
	  q(26, "K-means y DBSCAN", "¿Qué hace el clustering?", "Agrupa datos similares sin etiquetas previas", ["Predice una etiqueta ya conocida", "Elimina todas las filas", "Convierte texto en SQL"], "K-means y DBSCAN son técnicas para descubrir grupos en los datos."),
	  q(27, "PCA y t-SNE", "¿Para qué sirve la reducción de dimensionalidad?", "Para representar datos con menos variables conservando información útil", ["Para duplicar columnas", "Para borrar todo el dataset", "Para cambiar el logo"], "PCA y t-SNE ayudan a visualizar o simplificar datos con muchas variables."),
	  q(28, "Bagging y Boosting", "¿Qué tienen en común bagging y boosting?", "Son técnicas de ensamble que combinan varios modelos", ["Son bases de datos NoSQL", "Son gráficos estadísticos", "Son comandos de SQL"], "Ambas técnicas buscan mejorar el desempeño combinando modelos.")
	]
  },
  {
    id: 8,
    name: "Casa Neural",
    chapter: "08 · Redes Neuronales y Deep Learning",
    guardian: "Neuronix, Guardián Profundo",
    enemy: "Gradiente Perdido",
    badge: "Insignia Neural",
    artifact: "Armadura Profunda",
    story: "Capas, neuronas y pesos forman una armadura compleja. El aspirante entra al mundo del aprendizaje profundo y modelos capaces de representar patrones difíciles.",
	missions: [
	  q(29, "Redes neuronales", "¿Qué elemento básico procesa entradas dentro de una red neuronal?", "La neurona artificial", ["La clave primaria", "El índice SQL", "El documento JSON"], "Una neurona artificial combina entradas, pesos y una función de activación."),
	  q(30, "Deep Learning", "¿Qué caracteriza a una red neuronal profunda?", "Tiene múltiples capas para aprender representaciones complejas", ["No usa datos", "Solo funciona con SQL", "Siempre da resultados perfectos"], "Deep Learning usa redes con varias capas para aprender patrones más complejos."),
	  q(31, "CNN", "¿Para qué son especialmente útiles las CNN?", "Para trabajar con imágenes y patrones espaciales", ["Para transacciones bancarias", "Para crear contraseñas", "Para borrar duplicados"], "Las CNN detectan patrones visuales como bordes, formas y objetos."),
	  q(32, "RNN y LSTM", "¿Qué tipo de datos manejan bien las RNN y LSTM?", "Secuencias, como texto o series temporales", ["Tablas sin orden", "Imágenes estáticas únicamente", "Contraseñas de usuarios"], "Las RNN y LSTM están diseñadas para trabajar información secuencial.")
	]
  },
  {
    id: 9,
    name: "Casa del Lenguaje Oculto",
    chapter: "09 · Procesamiento de Lenguaje Natural (NLP)",
    guardian: "Liria, Guardiana del Texto",
    enemy: "Token Sombrío",
    badge: "Insignia del Lenguaje",
    artifact: "Cetro Transformer",
    story: "El texto deja de ser texto plano. Tokens, embeddings, atención y transformers permiten que las máquinas trabajen con lenguaje de una manera mucho más poderosa.",
	missions: [
	  q(33, "Introducción a NLP", "¿Qué busca el Procesamiento de Lenguaje Natural?", "Que las máquinas puedan trabajar con lenguaje humano", ["Que las tablas tengan colores", "Que SQL desaparezca", "Que los datos no se usen"], "NLP permite analizar, clasificar, generar o interpretar texto."),
	  q(34, "Tokenización y Bag of Words", "¿Qué hace la tokenización?", "Divide un texto en unidades como palabras o tokens", ["Convierte imágenes en tablas", "Elimina todos los textos", "Crea redes neuronales automáticamente"], "La tokenización es un paso básico para transformar texto en datos procesables."),
	  q(35, "Word2Vec y GloVe", "¿Qué representan modelos como Word2Vec y GloVe?", "Palabras como vectores numéricos con significado semántico", ["Tablas relacionales", "Índices SQL", "Archivos comprimidos"], "Estos modelos crean embeddings que capturan relaciones de significado entre palabras."),
	  q(36, "Transformers y BERT", "¿Qué mecanismo ayudó a hacer tan poderosos a los transformers?", "El mecanismo de atención", ["La normalización de bases de datos", "El uso exclusivo de tablas", "La eliminación del entrenamiento"], "La atención permite que el modelo se enfoque en partes relevantes del contexto.")
	]
  },
  {
    id: 10,
    name: "Casa de la Inteligencia",
    chapter: "10 · Inteligencia Artificial",
    guardian: "Atenia, Luz de la Decisión",
    enemy: "IA Sin Criterio",
    badge: "Insignia de Inteligencia",
    artifact: "Corona de Razonamiento",
    story: "Aquí el aspirante entiende qué es realmente la inteligencia artificial, cómo se relaciona con datos, modelos, agentes y decisiones, y por qué usarla exige criterio.",
    missions: [
      q(37, "Fundamentos de IA", "¿Cuál frase describe mejor la Inteligencia Artificial?", "Sistemas capaces de realizar tareas que requieren cierto comportamiento inteligente", ["Una base de datos con fondo azul", "Un sinónimo exacto de Excel", "Una tecnología que no usa datos nunca"], "La IA busca resolver tareas asociadas a percepción, razonamiento, lenguaje, decisión o acción."),
      q(38, "Agentes inteligentes", "¿Qué suele hacer un agente inteligente?", "Percibe, decide y actúa para lograr un objetivo", ["Solo guarda archivos", "Nunca toma acciones", "Solo cambia colores"], "Un agente usa información del entorno para decidir acciones."),
      q(39, "IA para juegos", "¿Qué representa Minimax en juegos?", "Una estrategia para elegir jugadas considerando al oponente", ["Una base NoSQL", "Una métrica de visualización", "Un tipo de archivo comprimido"], "Minimax explora decisiones propias y posibles respuestas del oponente."),
      q(40, "Ética y futuro", "¿Por qué importa la ética en IA?", "Porque los modelos pueden afectar personas y decisiones reales", ["Porque hace que el código sea más corto", "Porque elimina la necesidad de datos", "Porque todos los resultados son perfectos"], "La IA debe considerar impacto, sesgo, transparencia y responsabilidad."),
    ]
  },
  {
    id: 11,
    name: "Casa de la Mirada Artificial",
    chapter: "11 · Visión por Computadora",
    guardian: "Promethia, Forjadora de Prompts",
    enemy: "Alucinación Dorada",
    badge: "Insignia Generativa",
    artifact: "Pluma del Prompt",
    story: "El conocimiento comienza a generar nuevas respuestas, textos, ideas y soluciones. Pero el poder generativo debe usarse con verificación, contexto y propósito.",
    missions: [
      q(41, "LLMs", "¿Qué es un LLM?", "Un modelo de lenguaje grande entrenado con grandes volúmenes de texto", ["Una tabla pequeña", "Un cable de red", "Una consulta SQL simple"], "Los LLMs trabajan con lenguaje y patrones aprendidos desde texto."),
      q(42, "Prompting", "¿Qué mejora un buen prompt?", "Claridad del contexto, tarea y formato esperado", ["El brillo del monitor", "La velocidad del mouse", "El tamaño de la silla"], "Un prompt claro reduce ambigüedad y mejora resultados."),
      q(43, "RAG", "¿Para qué se usa RAG?", "Para combinar generación con recuperación de información", ["Para borrar documentos", "Para crear índices sin texto", "Para entrenar sin fuentes"], "RAG permite responder usando fuentes o documentos relevantes."),
      q(44, "Validación", "¿Qué debe hacerse con respuestas de IA generativa?", "Verificarlas antes de usarlas en decisiones importantes", ["Creerlas siempre", "Publicarlas sin leer", "Ignorar las fuentes"], "Los modelos pueden equivocarse o inventar detalles."),
    ]
  },
  {
    id: 12,
    name: "Casa de la Inteligencia Suprema",
    chapter: "Inteligencia Artificial Avanzada",
    guardian: "Axiom, Arquitecto de Acciones",
    enemy: "Automatón Sin Control",
    badge: "Insignia Agente",
    artifact: "Botas de Automatización",
    story: "Los modelos salen del laboratorio y se conectan con acciones. Un verdadero caballero diseña agentes con límites, herramientas, memoria y supervisión.",
    missions: [
      q(45, "Herramientas", "¿Por qué un agente puede usar herramientas?", "Para consultar datos, ejecutar tareas o interactuar con sistemas", ["Para evitar objetivos", "Para borrar su memoria siempre", "Para dejar de razonar"], "Las herramientas amplían lo que un agente puede hacer."),
      q(46, "Memoria", "¿Qué permite la memoria en un agente?", "Mantener contexto útil entre pasos o interacciones", ["Evitar todo aprendizaje", "Eliminar instrucciones", "Borrar objetivos"], "La memoria debe diseñarse con cuidado y privacidad."),
      q(47, "Orquestación", "¿Qué significa orquestar soluciones de IA?", "Coordinar modelos, datos, reglas y acciones", ["Tocar música con SQL", "Copiar archivos al azar", "Elegir colores únicamente"], "La orquestación integra piezas para resolver un proceso completo."),
      q(48, "Control humano", "¿Dónde conviene supervisión humana?", "En decisiones sensibles, costosas o de alto impacto", ["Nunca, la IA siempre decide sola", "Solo en cambios de color", "En procesos sin riesgo únicamente"], "La supervisión reduce riesgos en procesos críticos."),
    ]
  },
  {
    id: 13,
    name: "Casa del Despertar Final",
    chapter: "13 · Aplicaciones Prácticas de la IA",
    guardian: "Perséon, Gran Guardián del Santuario",
    enemy: "La Niebla del Ruido",
    badge: "Gran Armadura de los Datos",
    artifact: "Cosmo de la Inteligencia",
    story: "La última casa reúne todo: datos, ingeniería, análisis, modelos, lenguaje, agentes y toma de decisiones. Aquí el aspirante deja de estudiar piezas sueltas y construye una solución real.",
    missions: [
      q(49, "Problema", "¿Cuál debe ser el primer paso de un proyecto de IA?", "Definir claramente el problema y el valor esperado", ["Escoger la herramienta más brillante", "Entrenar sin datos", "Publicar sin validar"], "La tecnología debe responder a un problema concreto."),
      q(50, "Datos", "¿Qué se debe revisar antes de modelar?", "Calidad, disponibilidad, permisos y significado de los datos", ["El color del logo únicamente", "La música de fondo", "La cantidad de likes"], "Sin datos confiables no hay solución confiable."),
      q(51, "Solución", "¿Qué debe tener una solución de datos a IA?", "Flujo completo: datos, modelo, evaluación, despliegue y monitoreo", ["Solo un gráfico", "Solo una tabla vacía", "Solo una frase bonita"], "La solución debe funcionar más allá de la demo."),
      q(52, "Despertar final", "¿Qué representa completar Proyecto 52?", "Convertir conocimiento en criterio para crear soluciones reales", ["Memorizar definiciones sin aplicarlas", "Evitar aprender nuevas herramientas", "Saltar todos los fundamentos"], "El objetivo final es aprender con criterio y construir valor con datos e IA."),
    ]
  }
];

function q(globalId, title, question, correct, wrong, explanation) {
  return {
    globalId,
    title,
    question,
    correct,
    wrong,
    explanation,
    videoUrl: EPISODE_URLS[globalId] || CATALOG_URL,
  };
}

let state = loadState();
let selectedHouseId = 1;
let currentMission = null;

const els = {
  playerName: document.getElementById("playerName"),
  saveNameBtn: document.getElementById("saveNameBtn"),
  demoModeBtn: document.getElementById("demoModeBtn"),
  resetGameBtn: document.getElementById("resetGameBtn"),
  statsGrid: document.getElementById("statsGrid"),
  rankTitle: document.getElementById("rankTitle"),
  housesGrid: document.getElementById("housesGrid"),
  activePanel: document.getElementById("activePanel"),
  progressLabel: document.getElementById("progressLabel"),
  houseLabel: document.getElementById("houseLabel"),
  progressBar: document.getElementById("progressBar"),
  toast: document.getElementById("toast"),
};

init();

function init() {
  ensureQuizModal();
  els.playerName.value = state.playerName || "";
  els.saveNameBtn.addEventListener("click", savePlayerName);
  els.playerName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") savePlayerName();
  });
  els.demoModeBtn.addEventListener("click", toggleDemoMode);
  els.resetGameBtn.addEventListener("click", resetGame);
  render();
}

function loadState() {
  const fallback = { playerName: "", completed: [], badges: [], demoMode: false };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      badges: Array.isArray(parsed.badges) ? parsed.badges : [],
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function savePlayerName() {
  state.playerName = els.playerName.value.trim().slice(0, 24);
  saveState();
  renderStats();
  showToast(state.playerName ? `Armadura registrada para ${state.playerName}.` : "Aventura iniciada.");
}

function toggleDemoMode() {
  state.demoMode = !state.demoMode;
  saveState();
  showToast(state.demoMode ? "Modo prueba activado: todas las casas están habilitadas." : "Modo prueba desactivado: vuelve el desbloqueo normal.");
  render();
}

function resetGame() {
  const ok = confirm("¿Seguro que quieres reiniciar tu progreso en este navegador?");
  if (!ok) return;
  state = { playerName: state.playerName || "", completed: [], badges: [], demoMode: false };
  selectedHouseId = 1;
  saveState();
  render();
  showToast("Progreso reiniciado. El Santuario vuelve a empezar.");
}

function render() {
  renderStats();
  renderProgress();
  renderHouses();
  renderActiveHouse();
}

function renderStats() {
  const completed = state.completed.length;
  const badges = state.badges.length;
  const xp = completed * 25;
  const rank = getRank(completed, badges);
  els.rankTitle.textContent = rank;
  els.demoModeBtn.textContent = state.demoMode ? "Modo prueba: ON" : "Modo prueba: OFF";
  els.demoModeBtn.classList.toggle("active", state.demoMode);
  els.statsGrid.innerHTML = [
    stat(completed, "Pruebas superadas"),
    stat(`${badges}/13`, "Insignias"),
    stat(xp, "XP"),
    stat(`${Math.round((completed / 52) * 100)}%`, "Cosmo de datos"),
  ].join("");
}

function stat(value, label) {
  return `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`;
}

function getRank(completed, badges) {
  if (badges >= 13) return "Gran Caballero de los Datos";
  if (completed >= 45) return "Arquitecto de Soluciones";
  if (completed >= 37) return "Caballero de la Inteligencia";
  if (completed >= 29) return "Caballero Neural";
  if (completed >= 21) return "Modelador Predictivo";
  if (completed >= 13) return "Analista del Santuario";
  if (completed >= 5) return "Explorador SQL";
  return "Aprendiz de Datos";
}

function renderProgress() {
  const completed = state.completed.length;
  const badges = state.badges.length;
  els.progressLabel.textContent = `${completed} / 52 pruebas superadas`;
  els.houseLabel.textContent = `${badges} / 13 casas conquistadas`;
  els.progressBar.style.width = `${(completed / 52) * 100}%`;
}

function renderHouses() {
  els.housesGrid.innerHTML = houses.map((house) => {
    const unlocked = isHouseUnlocked(house.id);
    const done = isHouseComplete(house.id);
    const active = selectedHouseId === house.id;
    const completedCount = house.missions.filter((m) => state.completed.includes(m.globalId)).length;
    let status = "Bloqueada";
    let statusClass = "";
    if (done) { status = "Conquistada"; statusClass = "done"; }
    else if (unlocked) { status = "Disponible"; statusClass = "open"; }
    if (state.demoMode && !done) { status = "Modo prueba"; statusClass = "open"; }

    return `
      <button class="house-card ${active ? "active" : ""} ${unlocked ? "" : "locked"}" type="button" data-house-id="${house.id}" ${unlocked ? "" : "aria-disabled=\"true\""}>
        <div>
          <div class="house-number">${String(house.id).padStart(2, "0")}</div>
          <h3>${house.name}</h3>
          <p class="house-meta">${house.chapter}</p>
        </div>
        <span class="house-status ${statusClass}">${status} · ${completedCount}/4</span>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".house-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = Number(card.dataset.houseId);
      if (!isHouseUnlocked(id)) {
        showToast("Esta casa sigue protegida. Conquista la casa anterior para entrar.");
        return;
      }
      selectedHouseId = id;
      render();
      document.getElementById("activePanel").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderActiveHouse() {
  const house = houses.find((h) => h.id === selectedHouseId) || houses[0];
  const unlocked = isHouseUnlocked(house.id);
  if (!unlocked) {
    els.activePanel.innerHTML = `<div class="empty-state"><h2>Casa bloqueada</h2><p>Completa la casa anterior para desbloquear esta prueba.</p></div>`;
    return;
  }

  const missionsHtml = house.missions.map((mission, idx) => {
    const completed = state.completed.includes(mission.globalId);
    const available = isMissionAvailable(mission);
    const label = completed ? "Superada" : available ? "Iniciar prueba" : "Próximamente";
    const status = completed ? `<span class="completed-pill">Superada</span>` : !available ? `<span class="locked-pill">Próximamente</span>` : "";
    return `
      <article class="mission-card">
        <div class="mission-index">${idx + 1}</div>
        <div class="mission-copy">
          <h3>${mission.title}</h3>
          <p>Prueba ${mission.globalId} de 52 · ${available ? "Disponible" : "No publicada todavía"}</p>
        </div>
        <div class="mission-actions">
          ${status}
          <a class="mission-btn secondary" href="${mission.videoUrl}" target="_blank" rel="noopener">Ver episodio</a>
          <button class="mission-btn primary" type="button" data-mission-id="${mission.globalId}" ${available ? "" : "disabled"}>${label}</button>
        </div>
      </article>
    `;
  }).join("");

  const badgeEarned = state.badges.includes(house.id);
  els.activePanel.innerHTML = `
    <div class="house-detail">
      <div class="detail-head">
        <div>
          <p class="eyebrow">Casa ${String(house.id).padStart(2, "0")}</p>
          <h2>${house.name}</h2>
          <p class="house-meta">${house.story}</p>
          <div class="detail-tags">
            <span class="tag gold">Guardián: ${house.guardian}</span>
            <span class="tag">Enemigo: ${house.enemy}</span>
            <span class="tag">${house.chapter}</span>
          </div>
        </div>
        <aside class="reward-card">
          <strong>${badgeEarned ? "Insignia reclamada" : "Recompensa"}</strong>
          <p class="reward-note">${house.badge}</p>
          <p class="reward-note">Armadura: ${house.artifact}</p>
        </aside>
      </div>
      <div class="missions-list">${missionsHtml}</div>
    </div>
  `;

  els.activePanel.querySelectorAll("[data-mission-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const missionId = Number(btn.dataset.missionId);
      const mission = house.missions.find((m) => m.globalId === missionId);
      if (mission) openQuiz(house, mission);
    });
  });
}

function isHouseUnlocked(id) {
  if (id > MAX_ENABLED_CHAPTER) return false;
  if (state.demoMode) return true;
  if (id === 1) return true;
  return isHouseComplete(id - 1);
}

function isHouseComplete(id) {
  const house = houses.find((h) => h.id === id);
  if (!house) return false;
  return house.missions.every((m) => state.completed.includes(m.globalId));
}

function isMissionAvailable(mission) {
  const chapterId = Math.ceil(mission.globalId / 4);
  if (chapterId > MAX_ENABLED_CHAPTER) return false;
  return state.demoMode || mission.globalId <= PUBLISHED_MISSIONS;
}

function openQuiz(house, mission) {
  currentMission = { house, mission };
  const modal = document.getElementById("quizModal");
  const title = modal.querySelector("#quizTitle");
  const subtitle = modal.querySelector("#quizSubtitle");
  const question = modal.querySelector("#quizQuestion");
  const answers = modal.querySelector("#answers");
  const explanation = modal.querySelector("#explanation");
  const claimBtn = modal.querySelector("#claimMissionBtn");

  title.textContent = mission.title;
  subtitle.textContent = `${house.name} · Prueba ${mission.globalId}/52`;
  question.textContent = mission.question;
  explanation.textContent = "";
  explanation.classList.remove("show");
  claimBtn.classList.remove("show");
  claimBtn.disabled = false;
  claimBtn.textContent = state.completed.includes(mission.globalId) ? "Misión ya registrada" : "Encender armadura";

  const randomizedAnswers = shuffle([
    { text: mission.correct, correct: true },
    ...mission.wrong.map((text) => ({ text, correct: false }))
  ]);

  answers.innerHTML = randomizedAnswers.map((answer, index) => `
    <button class="answer-btn" type="button" data-correct="${answer.correct}" data-index="${index}">${answer.text}</button>
  `).join("");

  answers.querySelectorAll(".answer-btn").forEach((btn) => {
    btn.addEventListener("click", () => handleAnswer(btn, mission));
  });

  claimBtn.onclick = () => completeMission(house, mission);
  modal.classList.add("open");
}

function handleAnswer(button, mission) {
  const isCorrect = button.dataset.correct === "true";
  const modal = document.getElementById("quizModal");
  const explanation = modal.querySelector("#explanation");
  const claimBtn = modal.querySelector("#claimMissionBtn");

  if (!isCorrect) {
    button.classList.add("wrong");
    button.disabled = true;
    explanation.textContent = "La Niebla del Ruido te confundió. Prueba otra respuesta.";
    explanation.classList.add("show");
    return;
  }

  button.classList.add("correct");
  modal.querySelectorAll(".answer-btn").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.correct === "true") btn.classList.add("correct");
  });
  explanation.textContent = mission.explanation;
  explanation.classList.add("show");
  claimBtn.classList.add("show");
}

function completeMission(house, mission) {
  if (!state.completed.includes(mission.globalId)) {
    state.completed.push(mission.globalId);
    state.completed.sort((a, b) => a - b);
  }

  const houseCompletedNow = house.missions.every((m) => state.completed.includes(m.globalId));
  if (houseCompletedNow && !state.badges.includes(house.id)) {
    state.badges.push(house.id);
    state.badges.sort((a, b) => a - b);
    showToast(`¡${house.badge} reclamada! ${house.artifact} encendida.`);
  } else {
    showToast(`Armadura encendida: prueba ${mission.globalId} superada.`);
  }

  saveState();
  closeQuiz();
  render();
}

function ensureQuizModal() {
  if (document.getElementById("quizModal")) return;
  const modal = document.createElement("div");
  modal.className = "quiz-modal";
  modal.id = "quizModal";
  modal.innerHTML = `
    <div class="quiz-box" role="dialog" aria-modal="true" aria-labelledby="quizTitle">
      <div class="quiz-top">
        <div>
          <p class="eyebrow" id="quizSubtitle">Prueba</p>
          <h2 id="quizTitle">Misión</h2>
        </div>
        <button class="close-quiz" id="closeQuizBtn" type="button" aria-label="Cerrar prueba">×</button>
      </div>
      <p class="lead" id="quizQuestion"></p>
      <div class="answers" id="answers"></div>
      <div class="explanation" id="explanation"></div>
      <button class="claim-btn" id="claimMissionBtn" type="button">Encender armadura</button>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector("#closeQuizBtn").addEventListener("click", closeQuiz);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeQuiz();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeQuiz();
  });
}

function closeQuiz() {
  const modal = document.getElementById("quizModal");
  if (modal) modal.classList.remove("open");
  currentMission = null;
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => els.toast.classList.remove("show"), 3100);
}
