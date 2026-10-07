import { LegalPageLayout } from "@/components/LegalPageLayout";

type TermsBlock = { paragraph: string } | { list: readonly string[] };
type TermsSection = { title: string; blocks: readonly TermsBlock[] };

const sections: readonly TermsSection[] = [
  {
    title: "1. Aceptación de los Términos",
    blocks: [
      { paragraph: "La aceptación se realiza al crear tu cuenta y al usar el servicio. Además, antes de tu primera conversación, Luna, la guía digital de Silente, te explica en el chat qué datos se guardan y cómo se procesan, y solo comienza a conversar cuando tocas el botón «Acepto» (o escribes «acepto»): ese es tu consentimiento expreso para el tratamiento descrito en la Política de Privacidad. No hay casillas premarcadas ni aceptaciones tácitas." },
      { paragraph: "Conservamos registro de la versión de los Términos y de la Política de Privacidad que aceptaste y de la fecha de tu aceptación. Estos Términos constituyen un contrato de adhesión regido por la legislación chilena." },
    ],
  },
  {
    title: "2. Definiciones",
    blocks: [
      { list: [
        "Servicio: Silente, incluyendo el sitio web, tu cuenta y la conversación privada por WhatsApp con Luna, la guía digital de Silente.",
        "Canal: WhatsApp, donde conversas en privado con Luna, la guía digital de Silente.",
        "Usuario / tú: la persona natural mayor de edad que se registra y usa el Servicio.",
        "Contenido generado: los mensajes y respuestas de Luna, producidos automáticamente mediante inteligencia artificial.",
        "Datos de nacimiento: la ciudad, la fecha y (opcionalmente) la hora que entregas para calcular tu carta.",
        "Reveniu: la pasarela de pago chilena que procesa el cobro de la suscripción (ver sección 12).",
      ] },
    ],
  },
  {
    title: "3. Qué es el servicio",
    blocks: [
      { paragraph: "Silente te ofrece un espacio para explorar tus preguntas sobre amor, relaciones, decisiones y futuro. Sus lecturas se inspiran en la videncia, la astrología y distintas mancias, y consideran tu carta natal y los tránsitos planetarios. Conversas con Luna, la guía digital de Silente, por WhatsApp, en privado y a tu ritmo." },
      { paragraph: "El servicio guarda el historial de tus conversaciones para dar continuidad a tus lecturas. Puedes hacer una pregunta, profundizar en la respuesta y abrir nuevos temas cuando quieras. Si eliminas tu cuenta, el historial se borra según lo indicado en la Política de Privacidad." },
    ],
  },
  {
    title: "4. Transparencia sobre la inteligencia artificial",
    blocks: [
      { paragraph: "No estás conversando con una persona real, ni con un astrólogo profesional, ni con un vidente. Ningún ser humano lee ni responde tus mensajes en tiempo real. Luna es una guía digital generada por software, sin conciencia, intención ni facultades adivinatorias." },
      { paragraph: "El Contenido generado puede contener errores, imprecisiones, omisiones o afirmaciones inventadas, incluidos cálculos astrológicos equivocados o atribuciones falsas a autores o tradiciones. Las respuestas se producen con modelos de lenguaje de terceros (a la fecha de esta versión, un modelo abierto ejecutado en la infraestructura de Fireworks AI, en Estados Unidos; el detalle vigente está en la Política de Privacidad, sección 8)." },
    ],
  },
  {
    title: "5. Naturaleza del contenido astrológico",
    blocks: [
      { paragraph: "La astrología es un sistema simbólico de interpretación. No es una ciencia ni tiene valor predictivo comprobado, y así te lo decimos de frente: lo que recibes son lecturas simbólicas ofrecidas con fines de entretenimiento y reflexión personal, no afirmaciones sobre hechos futuros ni diagnósticos sobre tu vida, tu salud, tus relaciones o tu situación económica." },
      { paragraph: "Las decisiones que tomes son tuyas y son tu responsabilidad. No prometemos ningún resultado, beneficio, acierto ni efecto derivado del uso del servicio." },
    ],
  },
  {
    title: "6. No sustituye orientación profesional · Crisis y emergencias",
    blocks: [
      { paragraph: "El Contenido no constituye ni reemplaza asesoría o tratamiento médico, psicológico, psiquiátrico, terapéutico, legal, financiero ni de ningún otro tipo profesional. No diagnostica, trata ni cura ninguna condición física o mental. Para cualquier problema de salud, legal o financiero, consulta a un profesional cualificado." },
      { paragraph: "Silente no es un servicio de emergencia ni de intervención en crisis. Si tú u otra persona está en peligro, tienes pensamientos de hacerte daño o de suicidio, o atraviesas una emergencia médica o de seguridad, deja de usar el servicio y busca ayuda inmediata:" },
      { list: [
        "Emergencias (SAMU / ambulancia): 131 · Carabineros: 133 · Bomberos: 132",
        "Salud Responde (orientación en salud y salud mental, 24/7): 600 360 7777",
        "Línea de prevención del suicidio: *4141",
        "Acude al servicio de urgencias más cercano.",
      ] },
    ],
  },
  {
    title: "7. Edad mínima",
    blocks: [
      { paragraph: "Debes ser mayor de 18 años para registrarte y usar el servicio. Al registrarte declaras y garantizas que cumples este requisito. El servicio no está dirigido a menores de edad y no recopilamos intencionadamente sus datos. El tratamiento de datos de niñas, niños y adolescentes está sujeto a las reglas especiales de la Ley 21.719 y queda fuera de este servicio." },
    ],
  },
  {
    title: "8. Tu cuenta y seguridad",
    blocks: [
      { paragraph: "Eres responsable de la veracidad de los datos que entregas, de mantener la confidencialidad de tu contraseña y de toda actividad realizada desde tu cuenta. Debes usar un número de WhatsApp de tu titularidad. Notifícanos de inmediato cualquier uso no autorizado escribiendo a comercial@silente.cl." },
    ],
  },
  {
    title: "9. Acceso al chat",
    blocks: [
      { paragraph: "Tu suscripción se vincula al número de WhatsApp que registras en tu cuenta: cuando le escribes a Luna desde ese número, el chat queda conectado. Puedes cambiar el número desde «Mi cuenta»; al escribir desde el nuevo, la suscripción pasa a ese número y el anterior deja de tener acceso. Debe ser un número de tu titularidad. La cuenta y el chat son para uso personal de una sola persona; no puedes compartirlos, revenderlos ni cederlos." },
      { paragraph: "El canal del servicio es WhatsApp. Tu conversación queda vinculada al número de WhatsApp con el que abras el chat: si cambias de número, tu lectura comienza de cero y el historial anterior no se traslada." },
      { paragraph: "El uso de WhatsApp se rige además por los términos y la política de privacidad de Meta. Es un servicio ajeno a nosotros y no respondemos por él." },
    ],
  },
  {
    title: "10. Uso justo · Límite diario de mensajes",
    blocks: [
      { paragraph: "La suscripción mensual del Plan Silente incluye 25 mensajes al día por WhatsApp. Al alcanzar ese límite, el chat te lo indica y podrás volver a conversar al día siguiente. Podemos ajustar este límite avisando con antelación razonable; el límite vigente se muestra en el propio chat." },
    ],
  },
  {
    title: "11. Suscripción, planes y precios",
    blocks: [
      { paragraph: "El Plan Silente se ofrece mediante una suscripción de pago recurrente de $6.000 CLP al mes. El precio se muestra antes de contratar, con los impuestos incluidos cuando corresponda. El monto a pagar es el precio total exhibido en el momento de la contratación." },
      { paragraph: "Podemos modificar los precios o planes a futuro. Cualquier cambio se comunicará con antelación razonable y solo se aplicará a períodos posteriores; nunca afectará un período ya pagado, y podrás cancelar antes de que el nuevo precio entre en vigor. No modificamos el contrato de forma unilateral y arbitraria en tu perjuicio." },
    ],
  },
  {
    title: "12. Pago, facturación e impuestos",
    blocks: [
      { paragraph: "El cobro lo procesa Reveniu, pasarela de pago chilena, que opera sobre la plataforma de Transbank (inscripción de tarjeta en modalidad OneClick para el cobro recurrente). Nosotros vendemos el servicio y emitimos el documento tributario que corresponda; Reveniu y Transbank procesan el medio de pago." },
      { paragraph: "No almacenamos ni accedemos al número completo de tu tarjeta ni a su código de seguridad: esos datos los captura y trata directamente el procesador de pago bajo los estándares de seguridad de la industria (PCI-DSS). De nuestro lado solo guardamos el estado de tu suscripción y los identificadores de la transacción." },
    ],
  },
  {
    title: "13. Renovación automática y cobro recurrente",
    blocks: [
      { paragraph: "La suscripción se renueva automáticamente al final de cada período mensual hasta que la canceles, y autorizas que se cobre el precio vigente del plan en cada renovación a la tarjeta registrada. Te informamos del carácter renovable, del monto y de la periodicidad antes de contratar. Puedes dejar sin efecto la autorización de cobro automático en cualquier momento, cancelando la suscripción según la sección 14, sin más formalidades que las que tuviste para contratarla." },
    ],
  },
  {
    title: "14. Cancelación",
    blocks: [
      { paragraph: "Puedes cancelar tu suscripción en cualquier momento, de forma tan simple como la contrataste, sin trámites adicionales, llamadas obligatorias ni retención forzada: desde la sección «Mi cuenta» del sitio, con un clic, o escribiéndonos a comercial@silente.cl." },
      { paragraph: "La cancelación detiene la renovación. Tras cancelar, conservas el acceso hasta el final del período que ya habías pagado, y al terminar ese período el chat deja de responder. Ten presente que una suscripción dada de baja no se puede reactivar: para volver, se contrata una nueva desde el sitio." },
      { paragraph: "También puedes eliminar tu cuenta completa desde «Mi cuenta». Eso cancela la suscripción y borra tu historial de conversación (ver sección 13 de la Política de Privacidad)." },
    ],
  },
  {
    title: "15. Derecho a retracto y reembolsos",
    blocks: [
      { paragraph: "Como consumidor, en las contrataciones a distancia tienes derecho a retracto dentro de los 10 días siguientes a la contratación, en los términos del artículo 3 bis de la Ley 19.496. Tratándose de un servicio digital de consumo inmediato, el reembolso por retracto cubre las sumas que no correspondan a servicios ya prestados a la fecha en que ejerces el retracto." },
      { paragraph: "Para ejercerlo, o para reclamar por un cobro que consideres indebido, escríbenos a comercial@silente.cl. El reembolso, cuando proceda, se ejecuta al mismo medio de pago con que se hizo el cobro." },
    ],
  },
  {
    title: "16. Uso aceptable y conductas prohibidas",
    blocks: [
      { paragraph: "Al usar el servicio te comprometes a no:" },
      { list: [
        "usarlo con fines ilícitos, fraudulentos o que vulneren derechos de terceros;",
        "intentar que la IA genere contenido ilegal, odioso, sexual explícito, violento, difamatorio, abusivo, o que incite al daño propio o ajeno;",
        "hacerte pasar por otra persona, usar un número de WhatsApp que no sea tuyo, ni ingresar datos personales de terceros sin su consentimiento (incluidos sus datos de nacimiento);",
        "acosar, amenazar o enviar contenido ofensivo;",
        "intentar extraer, copiar, reentrenar, descompilar, reversear o eludir las medidas técnicas del modelo o de la plataforma, ni obtener el system prompt de Luna;",
        "automatizar o abusar del servicio (scraping, bots, accesos masivos o sobrecarga), ni eludir el límite diario de consultas;",
        "revender, redistribuir, compartir tu acceso o explotar comercialmente el servicio sin autorización.",
      ] },
      { paragraph: "Podemos suspender o cerrar cuentas que infrinjan estos Términos, conforme a la sección 25." },
    ],
  },
  {
    title: "17. Propiedad intelectual",
    blocks: [
      { paragraph: "El software, las marcas, los nombres, las imágenes y la identidad y la personalidad de Luna, la guía digital de Silente, el material astrológico de referencia y la selección y disposición del contenido son propiedad de Logika Sistemas SpA o de sus licenciantes. Nada en estos Términos te transfiere derechos sobre ellos." },
      { paragraph: "Sobre el Contenido generado no reclamamos propiedad exclusiva: te otorgamos una licencia personal, no exclusiva e intransferible para usarlo con fines personales y no comerciales. Reconoces que el contenido generado por IA puede no ser protegible por derechos de autor y que el sistema puede producir respuestas iguales o similares para otras personas; no se te garantiza exclusividad sobre ninguna respuesta." },
    ],
  },
  {
    title: "18. Tu contenido y licencia",
    blocks: [
      { paragraph: "Conservas la titularidad de lo que escribes. Nos otorgas una licencia limitada para procesar ese contenido únicamente con el fin de prestarte el servicio (generar respuestas y mantener la continuidad de tus conversaciones), conforme a la Política de Privacidad. No usamos tu contenido para publicidad, no lo vendemos y no entrenamos modelos con él." },
    ],
  },
  {
    title: "19. Privacidad y protección de datos",
    blocks: [
      { paragraph: "El tratamiento de tus datos personales se rige por nuestra Política de Privacidad, elaborada conforme a la Ley N° 21.719 sobre Protección de Datos Personales y Creación de la Agencia de Protección de Datos Personales, y forma parte de estos Términos." },
    ],
  },
  {
    title: "20. Servicios de terceros",
    blocks: [
      { paragraph: "El servicio se apoya en proveedores externos: Meta / WhatsApp Business Platform (canal de mensajería), Fireworks AI (ejecución del modelo de lenguaje), Convex (base de datos y backend), Vercel (alojamiento del sitio), Brevo (envío de los correos de tu cuenta) y Reveniu junto a Transbank (pagos). No respondemos por interrupciones, cambios o fallas atribuibles a estos terceros, sin perjuicio de tus derechos como consumidor frente a nosotros por el servicio contratado." },
    ],
  },
  {
    title: "21. Disponibilidad y cambios al servicio",
    blocks: [
      { paragraph: "Procuramos mantener el servicio disponible, pero puede haber interrupciones por mantenimiento, actualizaciones, fallas de terceros o causas de fuerza mayor. Podemos modificar, mejorar, agregar o discontinuar canales o funcionalidades, avisando con antelación razonable cuando los cambios sean materiales." },
    ],
  },
  {
    title: "22. Descargo de garantías",
    blocks: [
      { paragraph: "Dentro de lo permitido por la ley, el servicio se ofrece «tal cual» y «según disponibilidad». No garantizamos que el Contenido generado sea exacto, completo, oportuno o libre de error, ni que el servicio sea ininterrumpido. Esta cláusula no excluye ni limita las garantías legales irrenunciables que la Ley 19.496 te reconoce como consumidor." },
    ],
  },
  {
    title: "23. Limitación de responsabilidad",
    blocks: [
      { paragraph: "En la máxima medida permitida por la ley, no respondemos por daños indirectos, incidentales, especiales o consecuenciales derivados del uso del servicio, ni por decisiones que tomes basándote en el Contenido generado, que eres responsable de evaluar antes de actuar sobre él. Nada en estos Términos limita ni excluye nuestra responsabilidad por incumplimiento de las obligaciones esenciales del servicio, ni los derechos irrenunciables que la Ley 19.496 te otorga, incluido el derecho a indemnización por deficiencias del servicio." },
    ],
  },
  {
    title: "24. Indemnización",
    blocks: [
      { paragraph: "Aceptas mantenernos indemnes frente a reclamaciones de terceros derivadas de tu uso indebido del servicio o de tu incumplimiento de estos Términos, en la medida que la ley lo permita." },
    ],
  },
  {
    title: "25. Suspensión y terminación",
    blocks: [
      { paragraph: "Puedes dejar de usar el servicio y eliminar tu cuenta cuando quieras (la cancelación de la suscripción se rige por la sección 14). Podemos suspender o terminar tu acceso ante incumplimientos graves o reiterados de estos Términos, dándote aviso cuando sea posible y explicándote el motivo. Las cláusulas que por su naturaleza deban subsistir (propiedad intelectual, limitación de responsabilidad, indemnización, ley aplicable y obligaciones legales de conservación) permanecerán vigentes tras la terminación." },
    ],
  },
  {
    title: "26. Cambios a estos Términos",
    blocks: [
      { paragraph: "Podemos actualizar estos Términos. Cuando haya cambios materiales, publicaremos la nueva versión aquí (con su fecha) y te avisaremos por un medio razonable. Los cambios rigen hacia el futuro; si no estás de acuerdo, puedes cancelar antes de que entren en vigor." },
    ],
  },
  {
    title: "27. Fuerza mayor",
    blocks: [
      { paragraph: "No seremos responsables por incumplimientos o demoras causados por hechos fuera de nuestro control razonable (catástrofes, cortes de energía o de internet, fallas de proveedores, actos de autoridad, entre otros)." },
    ],
  },
  {
    title: "28. Disposiciones generales",
    blocks: [
      { paragraph: "Si alguna cláusula se declara inválida, las demás seguirán vigentes (divisibilidad). El hecho de no ejercer un derecho no implica renuncia a él. No puedes ceder tu cuenta sin nuestro consentimiento; nosotros podemos ceder este contrato en el marco de una reorganización empresarial, respetando tus derechos y las obligaciones que la Ley 21.719 impone al responsable. Estos Términos, junto con la Política de Privacidad, constituyen el acuerdo íntegro entre las partes." },
    ],
  },
  {
    title: "29. Ley aplicable y resolución de disputas",
    blocks: [
      { paragraph: "Estos Términos se rigen por las leyes de la República de Chile. Como consumidor, conservas el derecho a recurrir al Juzgado de Policía Local de tu domicilio y a presentar reclamos ante el SERNAC; en materia de datos personales, ante la Agencia de Protección de Datos Personales. Cualquier referencia a tribunales o legislación no afectará los derechos irrenunciables que te reconocen la Ley 19.496 y la Ley 21.719. Cualquier sometimiento a arbitraje solo podrá acordarse una vez surgido el conflicto y será gratuito para ti, conservando siempre tu derecho a acudir al tribunal competente." },
    ],
  },
  {
    title: "30. Contacto y notificaciones",
    blocks: [
      { paragraph: "Consultas: comercial@silente.cl" },
      { paragraph: "Privacidad / Protección de Datos: contacto@logika.cl" },
      { paragraph: "Logika Sistemas SpA, RUT 78.313.784-4 · «DOMICILIO POR DEFINIR», Chile" },
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Términos y Condiciones"
      version="2026-09-16"
      intro="Estos Términos y Condiciones (los «Términos») regulan el acceso y uso del servicio Silente, accesible en silente.cl y a través de WhatsApp, operado por Logika Sistemas SpA, RUT 78.313.784-4, sociedad constituida en Chile (en adelante, «nosotros», «la Empresa» o «el Titular»). Al crear una cuenta, suscribirte o usar el servicio, declaras haber leído y aceptado estos Términos y nuestra Política de Privacidad, que forma parte integrante de este contrato. Si no estás de acuerdo, no uses el servicio."
    >
      {sections.map((section) => (
        <section key={section.title} className="border-b border-[var(--silente-border)] pb-8 last:border-0">
          <h2 className="text-xl font-semibold leading-snug text-[var(--silente-gold-light)] md:text-2xl">{section.title}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--silente-muted)] md:text-base md:leading-8">
            {section.blocks.map((block, index) =>
              "paragraph" in block ? (
                <p key={index}>{block.paragraph}</p>
              ) : (
                <ul key={index} className="list-disc space-y-2 pl-6 marker:text-[var(--silente-gold)]">
                  {block.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ),
            )}
          </div>
        </section>
      ))}
    </LegalPageLayout>
  );
}
