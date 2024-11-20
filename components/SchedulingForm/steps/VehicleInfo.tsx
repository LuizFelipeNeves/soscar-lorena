import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Car, Calendar, Hash } from 'lucide-react';

export function VehicleInfo({ data, onNext, onBack }: any) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      model: formData.get('model'),
      year: formData.get('year'),
      plate: formData.get('plate'),
    };
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            name="model"
            placeholder="Modelo do veículo"
            defaultValue={data?.model || ''}
            required
            className="pl-10"
            aria-label="Modelo do veículo"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="number"
            name="year"
            placeholder="Ano"
            defaultValue={data?.year || ''}
            required
            min="1900"
            max={new Date().getFullYear()}
            className="pl-10"
            aria-label="Ano do veículo"
          />
        </div>

        <div className="relative">
          <Hash className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            name="plate"
            placeholder="Placa"
            defaultValue={data?.plate || ''}
            required
            className="pl-10 uppercase"
            aria-label="Placa do veículo"
          />
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