export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  const { phoneNumber, appointmentDate, appointmentTime, customerName } = await req.json() as {
    phoneNumber: string;
    appointmentDate: string;
    appointmentTime: string;
    customerName: string;
  };

  if (!phoneNumber || !appointmentDate || !appointmentTime || !customerName) {
    return new Response(
      JSON.stringify({ error: "Missing required fields" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const token = process.env.WHATSAPP_API_TOKEN; // Defina isso no .env
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID; // Defina isso no .env

  if (!token || !phoneNumberId) {
    return new Response(
      JSON.stringify({ error: "Missing WhatsApp API token or phone number ID" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  /*
  // Verifica se o número possui WhatsApp
  const verifyUrl = `https://graph.facebook.com/v21.0/${phoneNumberId}/contacts`;
  const verifyPayload = {
    messaging_product: "whatsapp",
    contacts: [phoneNumber],
  };*/

  try {
    /*
    const verifyResponse = await fetch(verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(verifyPayload),
    });

    const verifyResult = await verifyResponse.json();
    console.log("Verify Result:", verifyResult);

    if (!verifyResponse.ok || !verifyResult.contacts || verifyResult.contacts.length === 0 || verifyResult.contacts[0].status !== "valid") {
      return new Response(
        JSON.stringify({ error: "The phone number does not have WhatsApp" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
      */

    const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;

    // Template de confirmação com botões
    const payload = {
      messaging_product: "whatsapp",
      to: phoneNumber,
      type: "template",
      template: {
        name: "appointment_confirmation",
        language: { code: "pt_BR" },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: customerName, // Nome do cliente
              },
              {
                type: "text",
                text: appointmentDate, // Data do agendamento
              },
              {
                type: "text",
                text: appointmentTime, // Horário do agendamento
              },
            ],
          },
          {
            type: "button",
            sub_type: "quick_reply",
            index: 0,
            parameters: [
              {
                type: "payload",
                payload: "CONFIRM_APPOINTMENT",
              },
            ],
          },
          {
            type: "button",
            sub_type: "quick_reply",
            index: 1,
            parameters: [
              {
                type: "payload",
                payload: "CANCEL_APPOINTMENT",
              },
            ],
          },
        ],
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error.message || "Failed to send message");
    }

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Something went wrong" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}