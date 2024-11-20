import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Wrench, AlertCircle, PenTool, Search, Settings, Plus } from 'lucide-react';

const serviceTypes = [
  { 
    id: 'maintenance', 
    label: 'Manutenção Preventiva',
    icon: <PenTool className="h-6 w-6 text-primary" />,
    description: 'Revisão periódica, troca de óleo, filtros'
  },
  { 
    id: 'repair', 
    label: 'Reparo',
    icon: <Wrench className="h-6 w-6 text-primary" />,
    description: 'Consertos mecânicos, elétricos, freios'
  },
  { 
    id: 'inspection', 
    label: 'Inspeção',
    icon: <Search className="h-6 w-6 text-primary" />,
    description: 'Diagnóstico completo do veículo'
  },
  { 
    id: 'other', 
    label: 'Outro Serviço',
    icon: <Plus className="h-6 w-6 text-primary" />,
    description: 'Outros serviços específicos'
  },
];

export function ServiceDetails({ data, onNext, onBack }: any) {
  const [selectedService, setSelectedService] = useState(data?.serviceType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      serviceType: formData.get('serviceType'),
      description: formData.get('description'),
    };
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceTypes.map((service) => (
            <label
              key={service.id}
              className={`relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none hover:border-primary transition-colors ${
                selectedService === service.id ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="serviceType"
                value={service.label}
                className="sr-only"
                defaultChecked={selectedService === service.label}
                onChange={() => setSelectedService(service.label)}
                required
              />
              <span className="flex flex-1">
                <span className="flex flex-col">
                  <span className="flex items-center gap-2 text-lg font-medium text-gray-900 mb-1">
                    {service.icon} {service.label}
                  </span>
                  <span className="text-sm text-gray-500">
                    {service.description}
                  </span>
                </span>
              </span>
            </label>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-5 w-5 text-primary" />
            <h3 className="font-medium">Detalhes do Serviço</h3>
          </div>
          <Textarea
            name="description"
            placeholder="Descreva o problema ou serviço necessário (Ex: Barulho ao frear, troca de óleo, revisão dos 30.000 km)"
            defaultValue={data?.description || ''}
            required
            className="min-h-[120px]"
            aria-label="Descrição do serviço"
          />
          <div className="flex items-start mt-3">
            <AlertCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
            <p className="text-sm text-gray-500">
              Forneça o máximo de detalhes possível sobre o serviço desejado ou problema identificado. Isso nos ajudará a preparar melhor o atendimento.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack} className="w-full">
          Voltar
        </Button>
        <Button type="submit" className="w-full">
          Próximo
        </Button>
      </div>
    </form>
  );
}