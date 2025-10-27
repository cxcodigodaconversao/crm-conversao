import { DISCProfile } from '@/types/crm';

interface Props {
  profile: DISCProfile | undefined;
}

const config = {
  D: { color: 'bg-red-500', label: 'Dominante' },
  I: { color: 'bg-orange-500', label: 'Influente' },
  S: { color: 'bg-green-500', label: 'Estável' },
  C: { color: 'bg-blue-500', label: 'Cauteloso' },
};

export default function DISCBadge({ profile }: Props) {
  if (!profile) return null;
  const c = config[profile];
  
  return (
    <div 
      className={`w-8 h-8 ${c.color} rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg`}
      title={c.label}
    >
      {profile}
    </div>
  );
}
