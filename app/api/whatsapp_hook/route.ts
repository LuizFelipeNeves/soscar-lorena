export const runtime = "edge";

export async function GET(req: Request): Promise<Response> {
  // Validação do Webhook com o token de verificação
  const token = process.env.WEBHOOK_VERIFY_TOKEN; // Defina no .env.local
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const verifyToken = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  if (mode === "subscribe" && verifyToken === token) {
    return new Response(challenge, { status: 200 });
  }
  return new Response("Forbidden", { status: 403 });
}

export async function POST(req: Request): Promise<Response> {
  // Processa as notificações recebidas
  const body = await req.json();
  console.log("Webhook Received:", body);

  // Exemplo: Processar confirmação/cancelamento
  const messages = body.entry?.[0]?.changes?.[0]?.value?.messages;
  if (messages) {
    messages.forEach((message: any) => {
      console.log("Message Received:", JSON.stringify(message));
      if (message.type === "button") {
        const payload = message.button.payload;
        if (payload === "CONFIRM_APPOINTMENT") {
          console.log("Agendamento confirmado pelo cliente!");
          // Atualize o status no banco de dados
        } else if (payload === "CANCEL_APPOINTMENT") {
          console.log("Agendamento cancelado pelo cliente!");
          // Atualize o status no banco de dados
        }
      }
    });
  }

  return new Response("EVENT_RECEIVED", { status: 200 });
}

export function OPTIONS(): Response {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "GET, POST, OPTIONS",
    },
  });
}
