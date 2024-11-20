import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Check, Calendar, Car, User, Wrench } from 'lucide-react';

export function Confirmation({ formData, onBack, handleSubmit }: any) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="flex items-center space-x-2 text-green-700 mb-2">
            <Check className="h-5 w-5" />
            <h3 className="font-semibold">Confira os dados do agendamento</h3>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <User className="h-5 w-5" />
              <h4 className="font-medium">Dados Pessoais</h4>
            </div>
            <div className="ml-7 space-y-1 text-sm">
              <p>Nome: {formData.personalInfo.name}</p>
              <p>Email: {formData.personalInfo.email}</p>
              <p>Telefone: {formData.personalInfo.phone}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <Car className="h-5 w-5" />
              <h4 className="font-medium">Dados do Veículo</h4>
            </div>
            <div className="ml-7 space-y-1 text-sm">
              <p>Modelo: {formData.vehicleInfo.model}</p>
              <p>Ano: {formData.vehicleInfo.year}</p>
              <p>Placa: {formData.vehicleInfo.plate}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <Calendar className="h-5 w-5" />
              <h4 className="font-medium">Data e Hora</h4>
            </div>
            <div className="ml-7 space-y-1 text-sm">
              <p>
                Data: {formData.serviceDate?.date && !isNaN(new Date(formData.serviceDate.date).getTime()) && 
                  format(new Date(formData.serviceDate.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
              </p>
              <p>Horário: {formData.serviceDate?.time}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <Wrench className="h-5 w-5" />
              <h4 className="font-medium">Detalhes do Serviço</h4>
            </div>
            <div className="ml-7 space-y-1 text-sm">
              <p>Tipo: {formData.serviceDetails.serviceType}</p>
              <p>Descrição: {formData.serviceDetails.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack} className="w-full">
          Voltar
        </Button>
        <Button type="submit" className="w-full">
          Confirmar Agendamento
        </Button>
      </div>
    </form>
  );
}