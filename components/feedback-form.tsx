"use client"

import type { FeedbackState } from "@/app/actions/feedback"

import { useState } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitFeedback } from "@/app/actions/feedback"
import { Loader2, Send, CheckCircle } from "lucide-react"

export function FeedbackForm() {
const [state, action, isPending] = useActionState<FeedbackState, FormData>(
  submitFeedback,
  {
    success: false,
    error: false,
    message: "",
  }
) 
const [selectedType, setSelectedType] = useState("")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5 text-blue-600" />
          Formulário de Sugestões
        </CardTitle>
        <CardDescription>
          Compartilhe suas ideias para melhorar o aplicativo LAZE e torná-lo ainda mais útil para a comunidade de
          Palmas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome *</Label>
              <Input id="name" name="name" type="text" placeholder="Seu nome completo" required className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input id="email" name="email" type="email" placeholder="seu@email.com" required className="w-full" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Tipo de Sugestão *</Label>
            <Select name="type" value={selectedType} onValueChange={setSelectedType} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de sugestão" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nova-funcionalidade">Nova Funcionalidade</SelectItem>
                <SelectItem value="melhoria-interface">Melhoria na Interface</SelectItem>
                <SelectItem value="precisao-alertas">Precisão dos Alertas</SelectItem>
                <SelectItem value="mapa-navegacao">Mapa e Navegação</SelectItem>
                <SelectItem value="performance">Performance do App</SelectItem>
                <SelectItem value="acessibilidade">Acessibilidade</SelectItem>
                <SelectItem value="integracao">Integração com Outros Serviços</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Prioridade</Label>
            <Select name="priority" defaultValue="media">
              <SelectTrigger>
                <SelectValue placeholder="Selecione a prioridade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="baixa">Baixa</SelectItem>
                <SelectItem value="media">Média</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
                <SelectItem value="critica">Crítica</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Assunto *</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Resumo da sua sugestão"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Descrição Detalhada *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Descreva sua sugestão em detalhes. Inclua informações sobre como isso melhoraria sua experiência com o app..."
              required
              className="min-h-[120px] resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Localização (Opcional)</Label>
            <Input
              id="location"
              name="location"
              type="text"
              placeholder="Bairro ou região de Palmas relacionada à sugestão"
              className="w-full"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="contact" name="contact" className="rounded border-gray-300" />
            <Label htmlFor="contact" className="text-sm text-gray-600">
              Autorizo o contato da equipe LAZE para esclarecimentos sobre esta sugestão
            </Label>
          </div>

          <Button type="submit" disabled={isPending} className="w-full bg-blue-600 hover:bg-blue-700">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar Sugestão
              </>
            )}
          </Button>

          {state?.success && (
            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              <CheckCircle className="h-5 w-5" />
              <p className="font-medium">{state.message}</p>
            </div>
          )}

          {state?.error && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              <p className="font-medium">{state.message}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
