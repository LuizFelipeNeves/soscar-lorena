import { Metadata } from 'next';
import SchedulingForm from '@/components/SchedulingForm';

export const metadata: Metadata = {
  title: "Agendar Serviço - SOS CAR's",
  description: 'Agende sua manutenção automotiva de forma rápida e fácil.',
};

export default function SchedulePage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-secondary mb-8 text-center">
            Agende seu Serviço
          </h1>
          <SchedulingForm />
        </div>
      </div>
    </div>
  );
}