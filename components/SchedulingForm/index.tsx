"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from "react";
import { PersonalInfo } from "./steps/PersonalInfo";
import { VehicleInfo } from "./steps/VehicleInfo";
import { ServiceDate } from "./steps/ServiceDate";
import { ServiceDetails } from "./steps/ServiceDetails";
import { Confirmation } from "./steps/Confirmation";
import { Progress } from "@/components/ui/progress";

const steps = [
  { id: 1, title: "Dados Pessoais" },
  { id: 2, title: "Dados do Veículo" },
  { id: 3, title: "Data do Serviço" },
  { id: 4, title: "Detalhes" },
  { id: 5, title: "Confirmação" },
];

const loadFormData = () => {
  if (typeof window !== "undefined") {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          personalInfo: {},
          vehicleInfo: {},
          serviceDate: null,
          serviceDetails: {},
        };
  }
  return {
    personalInfo: {},
    vehicleInfo: {},
    serviceDate: null,
    serviceDetails: {},
  };
};

const saveFormData = (data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("formData", JSON.stringify(data));
  }
};

export default function SchedulingForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(loadFormData);

  useEffect(() => {
    saveFormData(formData);
  }, [formData]);

  const progressValue = useMemo(() => {
    return (currentStep / steps.length) * 100;
  }, [currentStep]);

  const updateFormData = (stepData: any, step: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [step]: stepData,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const StepHeader = () => (
    <div className="mt-4 flex flex-wrap justify-between text-sm text-gray-600">
      <span className="block sm:hidden text-center" id="steps-names-mobile">
        {steps[currentStep - 1].title} - Passo {currentStep} de {steps.length}
      </span>
      <div
        className="hidden sm:flex flex-wrap justify-between w-full"
        id="steps-names-computer"
      >
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <span
              className={`${
                step.id === currentStep ? "text-primary font-semibold" : ""
              } w-full sm:w-auto text-center sm:text-left`}
            >
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <span className="mx-2 text-gray-400">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);

    const jsonData = JSON.stringify(formData);
    console.log('JSON Data:', jsonData);
    // Show success message or redirect

    // Clear form data
    localStorage.removeItem("formData");
    
    router.push('/agendar/sucesso');
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <Progress value={progressValue} max={100}/>
        <StepHeader />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        {currentStep === 1 && (
          <PersonalInfo
            data={formData.personalInfo}
            onNext={(data: any) => {
              updateFormData(data, "personalInfo");
              nextStep();
            }}
          />
        )}
        {currentStep === 2 && (
          <VehicleInfo
            data={formData.vehicleInfo}
            onNext={(data: any) => {
              updateFormData(data, "vehicleInfo");
              nextStep();
            }}
            onBack={prevStep}
          />
        )}
        {currentStep === 3 && (
          <ServiceDate
            data={formData.serviceDate}
            onNext={(data: any) => {
              updateFormData(data, "serviceDate");
              nextStep();
            }}
            onBack={prevStep}
          />
        )}
        {currentStep === 4 && (
          <ServiceDetails
            data={formData.serviceDetails}
            onNext={(data: any) => {
              updateFormData(data, "serviceDetails");
              nextStep();
            }}
            onBack={prevStep}
          />
        )}
        {currentStep === 5 && (
          <Confirmation formData={formData} onBack={prevStep} handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}