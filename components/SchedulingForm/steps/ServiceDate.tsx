import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { Clock } from 'lucide-react';

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00',
  '13:00', '14:00', '15:00', '16:00'
];

export function ServiceDate({ data, onNext, onBack }: any) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(data?.date);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(data?.time);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      onNext({ date: selectedDate, time: selectedTime });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium mb-4">Selecione uma data</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            locale={ptBR}
            disabled={(date) => 
              date < new Date() || 
              date.getDay() === 0 || // Sunday
              date.getDay() === 6    // Saturday
            }
            className="rounded-md border mx-auto"
            fromDate={new Date()}
            toDate={new Date(new Date().setMonth(new Date().getMonth() + 2))}
          />
        </div>

        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Horários disponíveis</h3>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {timeSlots.map((time) => (
              <Button
                key={time}
                disabled={!selectedDate}
                aria-label={time}
                type="button"
                variant={selectedTime === time ? 'default' : 'outline'}
                onClick={() => setSelectedTime(time)}
                className={`w-full ${
                  selectedTime === time 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack} className="w-full">
          Voltar
        </Button>
        <Button 
          type="submit" 
          className="w-full"
          disabled={!selectedDate || !selectedTime}
        >
          Próximo
        </Button>
      </div>
    </form>
  );
}