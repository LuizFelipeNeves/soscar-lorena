import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Mail, Phone } from 'lucide-react';

export function PersonalInfo({ data, onNext }: any) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            name="name"
            placeholder="Nome completo"
            defaultValue={data?.name || ''}
            required
            className="pl-10 placeholder-gray-500 text-gray-900" // Adicionando a classe Tailwind para estilizar o placeholder e o texto
            aria-label="Nome completo"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={data?.email || ''}
            required
            className="pl-10 placeholder-gray-500 text-gray-900" // Adicionando a classe Tailwind para estilizar o placeholder e o texto
            aria-label="Email"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="tel"
            name="phone"
            placeholder="Telefone"
            defaultValue={data?.phone || ''}
            required
            className="pl-10 placeholder-gray-500 text-gray-900" // Adicionando a classe Tailwind para estilizar o placeholder e o texto
            aria-label="Telefone"
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Próximo
      </Button>
    </form>
  );
}