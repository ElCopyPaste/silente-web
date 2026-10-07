import { LegalPageLayout } from "@/components/LegalPageLayout";

type RefundBlock = { paragraph: string } | { list: readonly string[] };
type RefundSection = { title: string; blocks: readonly RefundBlock[] };

const sections: readonly RefundSection[] = [
  {
    title: "1. Derecho a retracto: 10 días",
    blocks: [
      { paragraph: "Como se trata de una contratación a distancia, tienes derecho a retractarte dentro de los 10 días siguientes a la contratación, conforme al artículo 3 bis de la Ley 19.496, sin expresar causa y sin costo para ti." },
      { paragraph: "Silente es un servicio digital de consumo inmediato: el reembolso por retracto cubre las sumas que no correspondan a servicios ya prestados a la fecha en que ejerces el retracto. Si no alcanzaste a conversar con Luna, la devolución es íntegra." },
    ],
  },
  {
    title: "2. Cancelación de la suscripción",
    blocks: [
      { paragraph: "Cancelar no es lo mismo que pedir un reembolso. Al cancelar, detienes la renovación y conservas el acceso hasta el final del período que ya pagaste; por ese período en curso no corresponde devolución proporcional, porque el servicio sigue disponible para ti hasta que termine." },
      { paragraph: "Puedes cancelar en cualquier momento desde «Mi cuenta» en el sitio, con un clic, o escribiéndonos a comercial@silente.cl. Una suscripción dada de baja no se puede reactivar: para volver, se contrata una nueva." },
    ],
  },
  {
    title: "3. Casos en que devolvemos el 100%",
    blocks: [
      { paragraph: "Sin discusión y sin que tengas que insistir, devolvemos el total cobrado cuando:" },
      { list: [
        "se te cobró dos veces el mismo período;",
        "se te cobró después de haber cancelado;",
        "nunca pudiste acceder al chat por un problema atribuible a nosotros;",
        "el cobro no fue autorizado por ti (sin perjuicio de que también puedes desconocerlo ante tu banco).",
      ] },
    ],
  },
  {
    title: "4. Fallas del servicio",
    blocks: [
      { paragraph: "Si el servicio estuvo caído o inutilizable por un período relevante y por causa atribuible a nosotros, puedes elegir entre una extensión equivalente de tu suscripción o el reembolso proporcional de los días afectados. No cuentan como falla las interrupciones breves de mantenimiento ni las caídas del canal de mensajería o de tu conexión." },
    ],
  },
  {
    title: "5. Qué no se reembolsa",
    blocks: [
      { paragraph: "Fuera del plazo de retracto y de los casos anteriores, no se reembolsan los períodos ya transcurridos ni los mensajes ya utilizados, ni procede devolución por insatisfacción con el contenido de las lecturas, que es de naturaleza simbólica y de entretenimiento (ver la sección 5 de los Términos). Tampoco procede reembolso cuando la cuenta fue suspendida o cerrada por un uso prohibido conforme a la sección 16 de los Términos." },
    ],
  },
  {
    title: "6. Cómo solicitarlo",
    blocks: [
      { paragraph: "Escríbenos a comercial@silente.cl indicando el correo con el que te registraste y la fecha del cobro. No necesitas llenar formularios ni llamar por teléfono." },
      { paragraph: "Acusamos recibo de tu solicitud y la resolvemos dentro de los 10 días hábiles siguientes, comunicándote la decisión y su fundamento por escrito." },
    ],
  },
  {
    title: "7. Cómo se paga el reembolso",
    blocks: [
      { paragraph: "El reembolso, cuando procede, se ejecuta al mismo medio de pago con que se hizo el cobro, a través de nuestra pasarela Reveniu y de Transbank. Una vez emitido de nuestro lado, el plazo en que verás el abono depende del emisor de tu tarjeta. No emitimos devoluciones en efectivo, a cuentas de terceros ni como crédito interno, salvo que tú lo prefieras expresamente." },
    ],
  },
  {
    title: "8. Si no estás conforme",
    blocks: [
      { paragraph: "Si nuestra respuesta no te satisface, puedes reclamar ante el SERNAC o recurrir al Juzgado de Policía Local de tu domicilio. Nada en esta Política limita esos derechos." },
      { paragraph: "Consultas sobre cobros y reembolsos: comercial@silente.cl · Logika Sistemas SpA, RUT 78.313.784-4" },
    ],
  },
] as const;

export default function RefundsPage() {
  return (
    <LegalPageLayout
      title="Política de Reembolso"
      version="2026-10-07"
      intro="Esta Política detalla cuándo procede un reembolso, cómo pedirlo y en qué plazo lo resolvemos. Complementa la sección 15 de nuestros Términos y Condiciones y no limita en nada los derechos que la Ley 19.496 sobre Protección de los Derechos de los Consumidores te reconoce como consumidor, que son irrenunciables. Aplica a las suscripciones de Silente contratadas en silente.cl."
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
