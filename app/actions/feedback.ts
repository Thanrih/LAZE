"use server"

export interface FeedbackState {
  success: boolean
  error: boolean
  message: string
}

export async function submitFeedback(
  prevState: FeedbackState,
  formData: FormData
): Promise<FeedbackState> {
  // Simular delay de processamento
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const type = formData.get("type") as string
    const priority = formData.get("priority") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string
    const location = formData.get("location") as string
    const contact = formData.get("contact") === "on"

    // Validação básica
    if (!name || !email || !type || !subject || !message) {
      return {
        success: false,
        error: true,
        message: "Por favor, preencha todos os campos obrigatórios.",
      }
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: true,
        message: "Por favor, insira um e-mail válido.",
      }
    }

    console.log("Feedback recebido:", {
      name,
      email,
      type,
      priority,
      subject,
      message,
      location,
      contact,
      timestamp: new Date().toISOString(),
    })

    let responseMessage =
      "Obrigado pela sua sugestão! Nossa equipe analisará seu feedback em breve."

    if (type === "critica" || priority === "critica") {
      responseMessage =
        "Sua sugestão foi marcada como crítica e será analisada com prioridade máxima. Entraremos em contato em até 24 horas."
    } else if (type === "nova-funcionalidade") {
      responseMessage =
        "Adoramos sua ideia para uma nova funcionalidade! Vamos avaliar a viabilidade técnica e o impacto para os usuários."
    } else if (type === "precisao-alertas") {
      responseMessage =
        "Sua sugestão sobre a precisão dos alertas é muito valiosa. Vamos analisar os dados da região mencionada."
    }

    return {
      success: true,
      error: false,
      message: responseMessage,
    }
  } catch (error: unknown) {
    console.error("Erro ao processar feedback:", error)
    return {
      success: false,
      error: true,
      message: "Ocorreu um erro interno. Tente novamente em alguns minutos.",
    }
  }
}
