import { LegalPageLayout } from "@/components/LegalPageLayout";

type PrivacyBlock =
  | { paragraph: string }
  | { list: readonly string[] }
  | { table: { headers: readonly string[]; rows: readonly (readonly string[])[] } };
type PrivacySection = { title: string; blocks: readonly PrivacyBlock[] };

const sections: readonly PrivacySection[] = [
  {
    title: "1. Quién es responsable de tus datos",
    blocks: [
      { paragraph: "El responsable del tratamiento es Logika Sistemas SpA, RUT 78.313.784-4, sociedad constituida en Chile, operadora del servicio Silente." },
      { list: [
        "Domicilio: «DOMICILIO POR DEFINIR», Chile",
        "Contacto de privacidad: contacto@logika.cl",
        "Contacto general: comercial@silente.cl",
      ] },
      { paragraph: "Mantenemos un registro interno de nuestras actividades de tratamiento y de las medidas de seguridad aplicadas, y podemos exhibirlo ante la Agencia de Protección de Datos Personales cuando lo requiera." },
    ],
  },
  {
    title: "2. A quién y a qué aplica",
    blocks: [
      { paragraph: "Esta política aplica a todas las personas que se registran o usan Silente, tanto en el sitio web como en el chat de WhatsApp. No aplica a sitios o servicios de terceros enlazados, que se rigen por sus propias políticas." },
    ],
  },
  {
    title: "3. Principios que aplicamos",
    blocks: [
      { paragraph: "Tratamos tus datos conforme a los principios de la Ley 21.719: licitud y lealtad, finalidad, proporcionalidad, calidad, responsabilidad, seguridad, transparencia e información, y confidencialidad. En concreto, eso significa que solo pedimos lo que el servicio necesita, que te decimos para qué lo usamos antes de pedírtelo, que no lo reutilizamos para fines distintos sin volver a preguntarte, y que quienes trabajan con estos datos están sujetos a deber de secreto que subsiste incluso después de terminado el vínculo." },
    ],
  },
  {
    title: "4. Transparencia sobre la inteligencia artificial",
    blocks: [
      { paragraph: "Las respuestas de Luna, la guía digital de Silente, son generadas por inteligencia artificial (un modelo de lenguaje de terceros; a la fecha de esta versión, un modelo abierto ejecutado en la infraestructura de Fireworks AI, en Estados Unidos; el detalle vigente está en la sección 8). No conversas con una persona real ni con un astrólogo profesional. El servicio es de entretenimiento, reflexión y autoconocimiento, y no sustituye orientación médica, psicológica, psiquiátrica, legal ni financiera. Si atraviesas una crisis o emergencia, acude a un profesional o llama a los servicios de urgencia (Emergencias: 131 · Salud Responde: 600 360 7777 · prevención del suicidio: *4141; más detalle en los Términos, sección 6)." },
    ],
  },
  {
    title: "5. Qué datos tratamos",
    blocks: [
      { paragraph: "Tratamos únicamente los datos necesarios para prestarte el servicio:" },
      { list: [
        "Datos de cuenta: nombre, correo electrónico y contraseña (almacenada como hash, nunca en texto plano).",
        "Número de WhatsApp: el que nos indicas al registrarte o en «Mi cuenta», en formato internacional. Es también el identificador con el que WhatsApp nos entrega tu conversación, y lo usamos para conectar tu suscripción con tu chat.",
        "Datos de nacimiento: ciudad, fecha y, si la conoces y decides entregarla, hora de nacimiento. La hora es opcional: sin ella no calculamos tu ascendente.",
        "Datos astrológicos derivados: tu carta natal personalizada (signo solar, signo lunar y ascendente) y los tránsitos planetarios utilizados en la lectura.",
        "Contenido de tus conversaciones: los mensajes que escribes y las respuestas que genera Luna.",
        "Datos de suscripción: estado (pendiente, activa, por terminar, cancelada), fechas de cambio de estado, identificador de la suscripción en la pasarela de pago y, si la cancelas, el motivo y comentario que entregues en el formulario de baja. No almacenamos el número de tu tarjeta ni su código de seguridad (ver sección 12).",
        "Uso del servicio: la cuenta de mensajes que llevas en el día, para aplicar el límite diario de 25 mensajes.",
        "Recuperación de contraseña: si pides recuperar tu clave, guardamos por una hora una huella criptográfica del enlace que te enviamos, asociada a tu correo. El enlace en sí no se guarda.",
        "Datos técnicos y de seguridad: registros de acceso y de auditoría generados por nuestros proveedores de infraestructura.",
      ] },
      { paragraph: "No pedimos ni necesitamos tu RUT, tu dirección ni tu situación económica. Si los escribes dentro de una conversación, quedan en el contenido de esa conversación y se tratan como el resto del contenido." },
    ],
  },
  {
    title: "6. Datos personales sensibles y consentimiento",
    blocks: [
      { paragraph: "El contenido de tus conversaciones puede revelar tus creencias filosóficas o convicciones, y eventualmente información sobre tu salud, tus relaciones o tu vida íntima si decides compartirla. Son datos personales sensibles conforme a la Ley 21.719 y reciben un nivel de protección reforzado: se tratan solo con tu consentimiento expreso, para las finalidades declaradas aquí, y nunca se usan para elaborar perfiles con fines comerciales." },
      { paragraph: "El consentimiento lo otorgas mediante un acto afirmativo inequívoco: antes de la primera conversación, el chat te explica que las conversaciones se guardan y se procesan con un modelo de IA, incluida su transferencia a servidores fuera de Chile, y solo comienza cuando tocas el botón «Acepto» que acompaña esa explicación, o escribes «acepto». Un «ok», un «sí» o un emoji no cuentan como consentimiento. Registramos la fecha y la versión de ese consentimiento, de modo que podemos acreditar cuándo y a qué texto consentiste. Puedes retirarlo en cualquier momento escribiendo a contacto@logika.cl o eliminando tu cuenta desde «Mi cuenta»; el retiro es tan simple como el otorgamiento, no afecta la licitud del tratamiento previo e implica el cese del servicio." },
      { paragraph: "Te recomendamos no compartir en el chat información sensible que no desees procesar mediante un sistema de inteligencia artificial ubicado fuera de Chile." },
    ],
  },
  {
    title: "7. Para qué usamos tus datos y con qué base de licitud",
    blocks: [
      { table: {
        headers: ["Finalidad", "Base de licitud"],
        rows: [
          ["Crear y administrar tu cuenta, autenticarte y conectar tu suscripción con tu chat de WhatsApp", "Ejecución del contrato"],
          ["Enviarte los correos necesarios para tu cuenta, como el enlace para recuperar tu contraseña cuando lo pides", "Ejecución del contrato"],
          ["Calcular tu carta natal personalizada a partir de tus datos de nacimiento", "Ejecución del contrato y tu consentimiento"],
          ["Generar las respuestas de Luna y mantener la continuidad de la conversación (incluye contenido sensible)", "Tu consentimiento expreso"],
          ["Cobrar la suscripción y cumplir obligaciones contables y tributarias", "Ejecución del contrato y cumplimiento de un deber legal"],
          ["Aplicar el límite diario de 25 mensajes y prevenir abusos del servicio", "Ejecución del contrato e interés legítimo"],
          ["Medir altas y bajas de suscripción de forma agregada (los registros se seudonimizan al eliminar tu cuenta)", "Interés legítimo"],
          ["Seguridad, prevención de fraude y registros de auditoría", "Interés legítimo y deber legal de seguridad"],
        ],
      } },
      { paragraph: "No usamos tus datos para publicidad, no los vendemos, no los cedemos a terceros con fines comerciales y no elaboramos perfiles comerciales con ellos." },
    ],
  },
  {
    title: "8. Procesamiento mediante inteligencia artificial",
    blocks: [
      { paragraph: "Para redactar cada respuesta, el contenido de la conversación sale de nuestros servidores y se procesa mediante un servicio de inteligencia artificial ubicado fuera de Chile. Aplicamos minimización de datos: en cada intercambio se envía únicamente el texto de tus mensajes y las respuestas de Luna (hasta los últimos 20 mensajes de la conversación en curso), la personalidad de Luna, tus datos astrológicos derivados —los nombres de tu signo solar, tu signo lunar y tu ascendente— y el estado del cielo del día, que es igual para todo el mundo." },
      { paragraph: "No se envían junto con el contenido tu nombre, tu correo electrónico, tu número de WhatsApp, el identificador de tu chat, ni tu ciudad, fecha u hora exactas de nacimiento: esos datos se quedan en nuestra base de datos y solo viaja el signo ya calculado. El contenido, en cambio, sí puede incluir cualquier dato personal que tú mismo hayas escrito en la conversación." },
      { paragraph: "A la fecha de esta versión, el modelo se ejecuta en la infraestructura de Fireworks AI, Inc. (Estados Unidos), a la que enviamos ese contenido a través de su API. Nosotros no entrenamos ningún modelo con tus conversaciones, no las vendemos, no las usamos para publicidad y nuestro equipo no las lee, salvo que tú pidas ayuda con un problema, que sea imprescindible para investigar un abuso o que la ley nos obligue. Lo que no podemos garantizarte es qué hace el proveedor con el contenido una vez recibido: se rige por sus propios términos y política de privacidad, que pueden permitirle conservarlo temporalmente para operar el servicio, facturar, detectar abusos o cumplir la ley." },
      { paragraph: "Por eso este tratamiento se realiza únicamente con tu consentimiento expreso (sección 6) y puedes retirarlo en cualquier momento. Si cambiamos de proveedor de inteligencia artificial, incorporamos uno nuevo o cambia el país donde se procesa tu contenido, publicaremos una nueva versión de esta Política con su fecha y te lo notificaremos por un medio razonable antes de que el cambio te afecte." },
    ],
  },
  {
    title: "9. Decisiones automatizadas",
    blocks: [
      { paragraph: "Luna genera texto de forma automatizada, pero eso no es una decisión con efectos jurídicos ni significativos sobre ti: es contenido de entretenimiento y reflexión que tú evalúas libremente. No usamos tus conversaciones para perfilarte, ni para decidir sobre tu acceso a crédito, empleo, seguros, prestaciones ni ningún otro asunto de esa naturaleza." },
      { paragraph: "Las decisiones que sí tomamos sobre tu cuenta —suspenderla por un uso prohibido, o registrar el rechazo de un pago— se adoptan con revisión humana, se te comunican con su fundamento y puedes pedir su reconsideración escribiendo a contacto@logika.cl. Conforme a la Ley 21.719 tienes derecho a oponerte a ser objeto de decisiones basadas únicamente en tratamiento automatizado que te afecten significativamente, y a solicitar la intervención de una persona." },
    ],
  },
  {
    title: "10. Con quién compartimos tus datos",
    blocks: [
      { paragraph: "Trabajamos con proveedores que tratan datos por nuestra cuenta y bajo nuestras instrucciones (encargados de tratamiento, con contrato y deber de confidencialidad), y con otros que, respecto de sus propias finalidades, actúan como responsables independientes. Cada uno recibe solo los datos necesarios para su función. A la fecha de esta versión son los siguientes:" },
      { table: {
        headers: ["Proveedor", "Rol y para qué", "Datos"],
        rows: [
          ["Fireworks AI, Inc.", "Encargado. Ejecutar el modelo de lenguaje que redacta las respuestas de Luna", "Texto de tus mensajes y de las respuestas (hasta los últimos 20), tus signos solar y lunar y tu ascendente. Sin nombre, correo, teléfono, identificador de chat ni datos de nacimiento"],
          ["Convex, Inc.", "Encargado. Base de datos y backend: almacenar tu cuenta, tus datos de nacimiento, tu suscripción y tus conversaciones", "Todos los datos de la sección 5"],
          ["Meta Platforms (WhatsApp Business Platform)", "Canal oficial. Responsable independiente respecto de sus propias finalidades", "Tu número de WhatsApp; mensajes en tránsito"],
          ["Vercel Inc.", "Encargado. Alojar silente.cl y los formularios de registro, inicio de sesión y pago", "Datos en tránsito durante tu navegación y los que escribes en los formularios"],
          ["Brevo", "Encargado. Enviar los correos de tu cuenta, como el enlace para recuperar tu contraseña", "Tu correo electrónico y el contenido de ese correo. Nunca el contenido de tus conversaciones ni tus datos de nacimiento"],
          ["Reveniu y Transbank", "Responsables independientes respecto de los datos de tu medio de pago. Procesar el cobro de la suscripción (ver sección 12)", "Correo electrónico, monto, y los datos de tu tarjeta, que ellos capturan directamente"],
        ],
      } },
      { paragraph: "También podremos comunicar datos cuando la ley lo exija (requerimiento de autoridad competente) o para proteger derechos, la seguridad y el cumplimiento de nuestros términos. Si quieres saber a qué proveedores se ha comunicado tu contenido, escríbenos y te entregaremos el detalle que conste en nuestros registros." },
    ],
  },
  {
    title: "11. Transferencias internacionales",
    blocks: [
      { paragraph: "Nuestros proveedores de infraestructura, mensajería e inteligencia artificial procesan datos fuera de Chile. La Ley 21.719 permite estas transferencias cuando el país de destino ha sido declarado con nivel adecuado de protección, cuando existen cláusulas contractuales tipo o normas corporativas vinculantes aprobadas por la Agencia, o con el consentimiento expreso del titular informado sobre la falta de garantías." },
      { paragraph: "Al día de hoy la Agencia no ha declarado la adecuación de ningún país ni ha aprobado cláusulas tipo. Por eso estas transferencias se realizan sobre la base de tu consentimiento expreso (sección 6) y de los contratos de servicio que tenemos con cada proveedor, que por sí solos no constituyen una garantía adecuada en el sentido de la ley. Te lo decimos con esa precisión para que decidas informadamente, y asumimos el compromiso de adoptar las cláusulas tipo apenas la Agencia las publique, actualizando esta Política." },
      { table: {
        headers: ["Proveedor", "País(es)", "Base o condición de la transferencia"],
        rows: [
          ["Fireworks AI, Inc.", "Estados Unidos", "Contrato de servicio con el proveedor, que por sí solo no constituye una garantía adecuada, y tu consentimiento expreso. Recibe contenido seudonimizado: sin tu nombre, correo, teléfono ni identificador de chat"],
          ["Convex, Inc.", "Estados Unidos", "Contrato de servicio con el proveedor y tu consentimiento expreso. Los datos se almacenan cifrados en reposo por el proveedor"],
          ["Meta Platforms (WhatsApp)", "Estados Unidos y otros países de su infraestructura global", "Es el canal que tú eliges usar, y tu consentimiento expreso. Respecto de sus propias finalidades actúa como responsable independiente, de modo que puedes ejercer tus derechos directamente ante él"],
          ["Vercel Inc.", "Estados Unidos, sobre una red de distribución global", "Contrato de servicio con el proveedor y tu consentimiento expreso"],
          ["Brevo", "Unión Europea (proveedor con sede en Francia)", "Contrato de servicio con el proveedor. Solo recibe tu correo cuando tú pides un correo de tu cuenta, como recuperar tu contraseña, y la transferencia es necesaria para entregártelo. El proveedor está sujeto al Reglamento General de Protección de Datos europeo, lo que no equivale a una declaración de adecuación de la Agencia"],
          ["Reveniu · Transbank", "Chile", "El cobro se procesa en Chile; no hay transferencia internacional en el pago"],
        ],
      } },
      { paragraph: "Puedes solicitar más información sobre estas transferencias, o retirar tu consentimiento, escribiendo a contacto@logika.cl. Ten presente que sin ellas el servicio no puede funcionar, de modo que retirar el consentimiento implica el cese del servicio." },
    ],
  },
  {
    title: "12. Pagos",
    blocks: [
      { paragraph: "El cobro de la suscripción lo procesa Reveniu, pasarela de pago chilena, sobre la plataforma de Transbank (inscripción de tarjeta en modalidad OneClick para el cobro recurrente). Ellos capturan y tratan los datos de tu tarjeta bajo los estándares de seguridad de pagos (PCI-DSS) y, respecto de esos datos, actúan conforme a sus propias políticas. Nosotros no almacenamos ni accedemos al número completo de tu tarjeta ni a su código de seguridad: de nuestro lado guardamos el estado de tu suscripción y el identificador de la transacción. Puedes cancelar tu suscripción desde «Mi cuenta» en el sitio." },
    ],
  },
  {
    title: "13. Por cuánto tiempo conservamos tus datos",
    blocks: [
      { table: {
        headers: ["Dato", "Plazo de conservación"],
        rows: [
          ["Cuenta, datos de nacimiento, carta y conversaciones", "Mientras tu cuenta esté activa. Al eliminarla desde «Mi cuenta», se borran tu cuenta, tu conversación, tus datos de nacimiento y tu registro de consentimiento"],
          ["Historial de una lectura", "Hasta que escribas «/nueva» en el chat, que lo borra de inmediato y empieza una lectura desde cero"],
          ["Enlace de recuperación de contraseña", "Deja de servir a la hora, al usarlo o al pedir uno nuevo. El registro vencido se elimina en la siguiente limpieza automática, y también al eliminar tu cuenta"],
          ["Registros de altas y bajas de suscripción", "Se conservan de forma seudonimizada para medir el servicio de manera agregada: al eliminar tu cuenta, tu correo se reemplaza por un código sin vínculo contigo"],
          ["Datos de facturación y pago", "Hasta 6 años, conforme a la legislación tributaria chilena (incluso después de eliminar tu cuenta)"],
          ["Registros técnicos y de seguridad de nuestros proveedores", "Según los plazos de retención de cada proveedor de infraestructura, salvo que un plazo legal exija conservarlos por más tiempo"],
          ["Preferencias de cookies (almacenamiento local)", "Se conservan en tu navegador hasta que las cambies o elimines sus datos de navegación"],
        ],
      } },
      { paragraph: "Cumplido el plazo, los datos se eliminan o se anonimizan de forma irreversible." },
    ],
  },
  {
    title: "14. Cómo protegemos tus datos",
    blocks: [
      { paragraph: "Aplicamos cifrado en tránsito (TLS) en todas las comunicaciones, y tus datos se almacenan cifrados en reposo por nuestro proveedor de base de datos. Las contraseñas se guardan como hash con derivación de clave (PBKDF2), nunca en texto plano. Los enlaces para recuperar una contraseña sirven una sola vez, vencen en una hora y se guardan solo como huella criptográfica, de modo que una copia de nuestra base de datos no permite usarlos. Los webhooks de los canales y de la pasarela de pago se validan criptográficamente antes de aceptarlos. El acceso administrativo está restringido a una lista cerrada de cuentas y los endpoints internos exigen credenciales propias. El panel de administración muestra cuentas y estado de suscripción, pero no da acceso al contenido de las conversaciones. Cada conversación queda aislada por su identificador de canal." },
      { paragraph: "Quienes intervienen en el tratamiento están sujetos a deber de secreto, que se mantiene después de terminado el vínculo. Ningún sistema es 100% infalible, pero adoptamos medidas técnicas y organizativas razonables y proporcionales al riesgo, y las revisamos cuando cambia el servicio." },
    ],
  },
  {
    title: "15. Tus derechos",
    blocks: [
      { paragraph: "Conforme a la Ley 21.719, tienes derecho a:" },
      { list: [
        "Acceso: saber qué datos tenemos sobre ti, de dónde salieron, para qué los usamos, a quién se han comunicado y por cuánto tiempo los conservaremos, y obtener una copia.",
        "Rectificación: corregir datos inexactos, desactualizados o incompletos (por ejemplo, una fecha de nacimiento mal ingresada).",
        "Supresión o cancelación: que eliminemos tus datos, salvo aquellos que debamos conservar por ley. Puedes ejercerlo tú mismo, en cualquier momento, desde «Mi cuenta» → eliminar cuenta.",
        "Oposición: oponerte a un tratamiento determinado y retirar tu consentimiento en cualquier momento.",
        "Portabilidad: recibir tus datos en un formato estructurado, genérico y de uso común, o que se transfieran a otro responsable cuando sea técnicamente posible.",
        "Bloqueo: suspender temporalmente el tratamiento de tus datos mientras se resuelve una solicitud o un reclamo.",
        "No ser objeto de decisiones automatizadas con efectos jurídicos o significativos, y pedir intervención humana (ver sección 9).",
      ] },
      { paragraph: "Para ejercer cualquiera de estos derechos, escribe a contacto@logika.cl. Verificaremos tu identidad —solo para asegurarnos de que eres tú— y responderemos dentro del plazo legal; nuestro compromiso interno es hacerlo en menos de 15 días hábiles. El ejercicio de estos derechos es gratuito y son irrenunciables: ninguna cláusula de esta Política ni de nuestros Términos los limita o excluye." },
      { paragraph: "Si no estás conforme con nuestra respuesta, o si no respondemos, puedes reclamar ante la Agencia de Protección de Datos Personales." },
    ],
  },
  {
    title: "16. Menores de edad",
    blocks: [
      { paragraph: "Silente está dirigido exclusivamente a personas mayores de 18 años. No recopilamos intencionadamente datos de menores ni tratamos datos de niñas, niños o adolescentes. Si detectamos que una cuenta pertenece a un menor, la eliminaremos." },
    ],
  },
  {
    title: "17. Notificación de brechas de seguridad",
    blocks: [
      { paragraph: "Llevamos un registro de los incidentes de seguridad que afecten datos personales. Si ocurriera una vulneración que suponga un riesgo para tus derechos, la notificaremos a la Agencia de Protección de Datos Personales sin dilación indebida y por el medio más expedito, y te lo comunicaremos también a ti —en especial tratándose de datos sensibles, como es el contenido de tus conversaciones—, explicándote qué pasó, qué datos se vieron afectados y qué puedes hacer." },
    ],
  },
  {
    title: "18. Cambios a esta política",
    blocks: [
      { paragraph: "Podemos actualizar esta Política. Cuando haya cambios materiales —un proveedor nuevo, un país de procesamiento distinto, una finalidad adicional— publicaremos la nueva versión aquí con su fecha, te avisaremos por un medio razonable antes de que el cambio te afecte y, cuando corresponda, te pediremos nuevamente tu consentimiento." },
    ],
  },
  {
    title: "19. Contacto y autoridad de control",
    blocks: [
      { paragraph: "Privacidad: contacto@logika.cl" },
      { paragraph: "Contacto general: comercial@silente.cl" },
      { paragraph: "Logika Sistemas SpA, RUT 78.313.784-4 · «DOMICILIO POR DEFINIR», Chile" },
      { paragraph: "Autoridad de control: Agencia de Protección de Datos Personales de Chile." },
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      version="2026-10-07"
      intro="Esta Política explica de forma clara qué datos personales tratamos, para qué los usamos, con qué base de licitud, con quién los compartimos, a qué países viajan, por cuánto tiempo los conservamos y qué derechos tienes sobre ellos. Se refiere al servicio Silente, accesible en silente.cl y por WhatsApp. El servicio opera desde Chile y está escrito conforme a la Ley N° 21.719 sobre Protección de Datos Personales, plenamente exigible desde el 1 de diciembre de 2026: aplicamos su estándar desde ya, sin esperar esa fecha. Forma parte de nuestros Términos y Condiciones."
    >
      {sections.map((section) => (
        <section key={section.title} className="border-b border-[var(--silente-border)] pb-8 last:border-0">
          <h2 className="text-xl font-semibold leading-snug text-[var(--silente-gold-light)] md:text-2xl">{section.title}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--silente-muted)] md:text-base md:leading-8">
            {section.blocks.map((block, index) =>
              "paragraph" in block ? (
                <p key={index}>{block.paragraph}</p>
              ) : "list" in block ? (
                <ul key={index} className="list-disc space-y-2 pl-6 marker:text-[var(--silente-gold)]">
                  {block.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : (
                <div key={index} className="overflow-x-auto rounded-2xl border border-[var(--silente-border)]">
                  <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                    <thead className="bg-[rgba(213,170,75,.1)] text-[var(--silente-gold-light)]">
                      <tr>{block.table.headers.map((header) => <th key={header} className="border-b border-[var(--silente-border)] px-4 py-3 font-semibold">{header}</th>)}</tr>
                    </thead>
                    <tbody>
                      {block.table.rows.map((row) => (
                        <tr key={row[0]} className="align-top even:bg-[rgba(23,35,49,.35)]">
                          {row.map((cell, cellIndex) => <td key={cellIndex} className="border-b border-[var(--silente-border)] px-4 py-3 text-[var(--silente-muted)] last:border-0">{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ),
            )}
          </div>
        </section>
      ))}
    </LegalPageLayout>
  );
}
